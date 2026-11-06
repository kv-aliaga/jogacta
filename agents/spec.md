# ACTA Experience — Operação Resgate

Esta especificação é a fonte única das regras do minijogo. Ela substitui as regras anteriores de “Salve a Fábrica” com duas tentativas e o catálogo antigo de projetos em DO.

## Objetivo e fluxo

Demonstração educativa em pt-BR, sem conta, backend ou rede. Atualizar a página reinicia a experiência. A partida tem quatro semanas, uma etapa por semana: PLAN na semana 1, DO na semana 2, CHECK na semana 3 e ACT na semana 4. Cada avanço informa claramente a nova semana. ACT encerra a operação. Ao fim, a pessoa vê o resultado e pode voltar direto à Home para iniciar outra operação.

```text
HOME → PLAN → DO → RESUMO DO → CHECK → ACT
PLAN (semana 1) → DO (semana 2) → CHECK (semana 3) → ACT (semana 4) → END
END → HOME
```

## Cenário, indicadores e vitória

- Início: atrasos 30%; saldo 100 MoedACTAs; qualidade 90%; moral 78%.
- Vitória ao fim da quarta semana exige atrasos ≤40%, qualidade ≥75%, orçamento ≥0.
- Moral é indicador de contexto e não participa dos critérios finais.

## PLAN — escolher o direcionamento

PLAN apresenta três projetos. A pessoa escolhe um para preparar; seus impactos nos indicadores são aplicados ao encerrar DO. A preparação é opcional. Cada projeto pode ser preparado uma vez por operação. O custo acompanha a ordem das compras: 5, 10 e 15 MoedACTAs. Preparar cobra saldo, mas não aplica efeitos naquele momento. Projetos preparados e não escolhidos continuam disponíveis. Sem escolha, o CATO atribui Controle de qualidade e aplica uma condição desfavorável. A interface apresenta o custo junto à ação de compra, sem tabela ou resumo redundante de preços. A opção de preparação é identificada como opcional; não repete instruções sobre o sorteio das tarefas.

A escolha do projeto não determina as tarefas de DO. O CATO sorteia um dos três conjuntos de tarefas na inicialização da operação; a seleção é guardada e permanece igual durante toda a semana 2.
## DO — minigame Kanban

DO simula execução e controle de tarefas. Essa representação segue os artefatos públicos do ACTA: PLAN cria plano de ação/5W2H; DO contempla consultar tarefas atribuídas, executar e finalizar tarefas, registrar execução, acompanhar progresso e controlar prazo. Referência de engenharia: [README](https://github.com/AppActa/acta-engenharia), diagramas `diagramas/fluxos-de-usuario/plan/criacao-do-plano-de-acao.puml`, `do/execucao-de-tarefas.puml`, `do/controle-de-prazo.puml` e casos de uso `diagramas/casos-de-uso/{detalhados,resumidos}/{plan,do}.puml`.

### Preparação e quadro

- A tela mostra o pedido do CATO com a frente sorteada identificada, instruções breves, backlog e colunas **A fazer**, **Em execução** e **Concluído**. O pedido relaciona tarefas e destinos uma vez; mantenha os nomes visíveis nos cartões para identificação. O botão **Começar** fica acima do quadro.
- O cronômetro fica parado e tarefas não podem ser alteradas até Começar.
- O CATO escolhe um dos três conjuntos de tarefas existentes com um sorteio determinístico baseado na seed da operação. A seleção é independente do projeto escolhido em PLAN, identificada em texto e mantida durante toda a semana 2. Os cartões do backlog têm apresentação uniforme: não destacar, marcar ou colorir os cartões pedidos pelo CATO.
- O backlog tem 15 cartões: três tarefas do conjunto sorteado e doze distrações. A composição e a posição inicial são constantes para a mesma seed.
- Distrações podem ser movidas, mas não são necessárias para encerrar nem contam para a classificação das três tarefas do pedido. Uma movimentação errada de distração tem a mesma penalidade de saldo/moral descrita abaixo.
- Cartões podem ser arrastados entre colunas; com teclado, foque o cartão e use as setas esquerda/direita; em toque, toque no cartão e depois na coluna de destino. Não há seletor de status nos cartões.

### Duração e reprodução

- Duração base: 30 segundos. Multiplicadores: buff 1,2× (36 s), neutro 1,0× (30 s), nerf 0,8× (24 s).
- Derive o valor na inicialização da operação com o PRNG existente em fluxo independente: `createRng((seed XOR 0xD04C7A31) >>> 0)`. Faça uma extração; `< 1/3` = buff, `< 2/3` = neutro, caso contrário = nerf. O limite válido da duração é inteiro entre 1 e 36 segundos, arredondado ao segundo mais próximo.
- Guarde condição e multiplicador uma única vez no estado da operação. Uma ausência de escolha força nerf 0,8×, qualquer que seja o valor sorteado; não acumule nerfs. Registre escolha automática e origem do nerf.
- O sorteio do conjunto de tarefas usa `createRng((seed XOR 0xD05A6A11) >>> 0)` e uma extração para escolher entre `flow`, `inspect` e `routes`. Guarde a opção em `doTaskOption`. Esse fluxo não é repetido por renderização ou navegação. A mesma seed reproduz conjunto, backlog e tempo.
- A seed, probabilidades e técnica de sorteio não aparecem na interface. A duração efetiva pode ser exibida após Começar. A condição pode ser descrita narrativamente: equipe preparada, ritmo habitual ou contratempo. Ausência de escolha deve ser comunicada como execução sem direcionamento em condição desfavorável.
- Use `performance.now()` ou outra fonte monotônica. Renderizações não reiniciam o timer. Callback atrasado não pode alterar DO encerrado. Ao concluir as tarefas-alvo ou chegar a zero, registre o resultado uma única vez e bloqueie o quadro, mantendo a pessoa na página DO para revisar o resumo. Só a ação explícita **Continuar para CHECK** muda a fase; fim do tempo ou conclusão das tarefas nunca navega automaticamente.

### Conclusão e efeitos

- A rodada termina quando as três tarefas solicitadas estão corretas ou quando o tempo chega a zero. DO registra o resumo e bloqueia o quadro, mas aguarda a ação explícita da pessoa para abrir CHECK. A finalização e o avanço são idempotentes.
- Classificação no resultado: tarefa solicitada corretamente classificada; incorreta quando movida para status errado; sem classificação quando deixada no status inicial. A lista também registra distrações que foram movidas.
- Cada mudança de status em uma tarefa solicitada que não a leve ao destino correto conta como erro. Qualquer mudança de status em uma distração também conta como erro: escolher mover um cartão fora do pedido deve ter consequência. Cada erro desconta até 5 MoedACTAs, limitado ao saldo atual; saldo nunca fica negativo. Se o saldo já estava em zero antes de um erro, esse erro reduz moral em 5 p.p., limitada a zero. A ação que gasta o saldo restante não reduz moral; erros seguintes, feitos com saldo zero, passam a reduzi-la. Repetir uma movimentação errada conta novo erro; corrigir depois não devolve moedas nem moral. Tentar manter o mesmo status não é movimentação e não cobra. Registre erros, moedas e moral perdidas em `DoResult`.
- Cada tarefa solicitada que ficar sem classificação ao encerrar a rodada reduz moral em 5 p.p. (`5 × quantidade de tarefas pendentes`), além do ajuste de atrasos já definido. A perda é aplicada uma vez na transição que registra `DoResult`, depois do impacto de moral de PLAN, respeitando o piso de 0; se a moral restante for menor que a penalidade nominal, registre apenas a perda efetiva. Esta penalidade é independente das perdas por erro com saldo zerado, que são aplicadas durante os movimentos. O campo `DoResult.moralLost` totaliza as perdas efetivas de moral causadas por movimentos e tarefas pendentes naquela rodada. Tarefas movidas para o status errado não recebem esta penalidade de pendência.
- Para cada tarefa solicitada correta, atrasos diminuem 2 p.p. Para cada solicitada incorreta, atrasos aumentam 1 p.p.; para cada não classificada, aumentam 2 p.p. Some esse ajuste ao impacto da opção PLAN preparada e selecionada. Qualidade recebe o impacto da opção. Moral recebe o impacto da opção e as perdas por erro/pendência conforme esta seção. Limites: atrasos 0–50; qualidade e moral 0–100. Sem preparação comprada, a seleção automática não concede os impactos de projeto. Penalidades de erro em distrações afetam saldo e, quando esgotado, moral; distrações não alteram a classificação das tarefas pedidas.
O saldo diminui pelos erros; moral diminui por erros com saldo zerado e por tarefas pendentes; os impactos de qualidade e moral vêm da opção PLAN comprada e executada.
- Ao registrar o resultado, mantenha `phase='do'`, bloqueie o quadro e mostre tarefas pedidas corretas/incorretas/não classificadas, distrações movidas, tempo utilizado ou limite atingido, indicadores e saldo resultantes. A ação **Continuar para CHECK** transita para CHECK e entrega `planChoice`, `doAutomaticPlan`, `doTasks` e o `DoResult` imutável. CHECK não repete indicadores do DO.
- Ao concluir CHECK, ACT recebe `planChoice`, `doAutomaticPlan`, `doTasks`, `doResult` e `checkResult`. O Conselho do CATO usa esses registros para auditar o ciclo; ACT não reescreve resultados anteriores.

## CHECK — Central de Verificação

CHECK é uma miniauditoria educativa: comparar o pedido sorteado pelo CATO com os registros da execução em DO, justificar uma conclusão e distinguir evidência relevante de informação lateral. A jornada segue os artefatos públicos do ACTA, que descrevem CHECK como verificação de resultados e análise do atingimento da meta, com consulta ao relatório de tarefas e registro da conclusão ([README](https://github.com/AppActa/acta-engenharia), `diagramas/fluxos-de-usuario/check/verificacao-dos-resultados.puml`, `diagramas/casos-de-uso/{detalhados,resumidos}/check.puml`).

### Contrato PLAN → DO → CHECK

- Entrada PLAN: `planChoice` real. O pedido auditado vem do conjunto guardado em `doTaskOption`, sorteado para a operação. `planChoice` registra separadamente o projeto que pode afetar os indicadores. Se não houve escolha, o projeto automático é `inspect` e `doAutomaticPlan=true`; isso não altera o conjunto sorteado.
- Entrada DO: o mapa final `doTasks` e `doResult` com `correct`, `wrong`, `unclassified`, `distractionsMoved`, `timedOut`, duração. CHECK consome apenas esses registros. Não infere fatos de layout ou de eventos de apresentação.
- Meta do conjunto `flow`: as três tarefas `flow-layout`, `flow-labels` e `flow-shift` estão, respectivamente, `done`, `doing` e `todo`.
- Meta do conjunto `inspect`: `quality-sample`, `quality-check` e `quality-report` estão, respectivamente, `done`, `doing` e `todo`.
- Meta do conjunto `routes`: `routes-map`, `routes-load` e `routes-confirm` estão, respectivamente, `doing`, `done` e `todo`.
- Para cada meta, conte os três status finais iguais aos respectivos alvos: 3 = **Atingida**; 1 ou 2 = **Parcialmente atingida**; 0 = **Não atingida**. Cada opção permite os três cenários. Uma tarefa sem status válido ou um `doResult` ausente/incompleto/inconsistente torna a auditoria **Sem evidência suficiente**; essa classe nunca é tratada como atingimento favorável.

### Investigação e evidências

- A tela CHECK mantém somente o marcador da etapa. Antes da pergunta do veredito, separa visualmente as três evidências das tarefas da meta do contexto de outra frente. Cada cartão da meta mostra o título, o status final registrado e o destino esperado em campos distintos; cada cartão contextual identifica sua origem e status, sem confundi-lo com evidência da meta.
- A investigação mostra três evidências relevantes, uma para cada tarefa do conjunto sorteado: título, status final persistido e status-alvo. Cada cartão indica origem **Quadro de execução**. Apresenta também uma evidência lateral verdadeira de uma tarefa de outra frente (status final do mesmo `doTasks`), identificada como **Quadro de execução — outra frente**, que não prova a meta.
- Buff mantém os fatos e adiciona uma pista contextual curta para comparar os três status com os alvos. Neutro não adiciona ajuda nem evidência. Nerf mantém os fatos e acrescenta uma segunda evidência lateral de outra tarefa/frente persistida. A tarefa lateral usada é a primeira (buff/neutro) ou segunda (nerf) tarefa de `kanbanTasks` cuja `front` difere do conjunto auditado e não está entre seus três alvos. Se a execução estiver sem evidência suficiente, use cartões informativos de ausência e não invente status.
- As evidências aparecem em cartões somente para leitura, visualmente separados entre tarefas da meta e contexto de outra frente, acima da pergunta **Qual foi o resultado da meta?**. A pessoa escolhe um dos três vereditos operacionais; não há formulário para registrar a execução nem seleção de evidências. Evidência lateral não altera a classe verdadeira.
- Qualidade de investigação (0–100): `clamp(round(100 × relevantesSelecionadas / 3) − 25 × lateraisSelecionadas, 0, 100)`. IDs selecionados são únicos e limitados ao conjunto exibido. Com execução sem evidência suficiente, qualidade é 0. 
- A devolutiva registra classe verdadeira, escolha do jogador, qualidade, condição narrativa, IDs das evidências relevantes e explicação de por que cada fato relevante sustenta ou não a meta. Em ausência de evidência suficiente, informa exatamente o dado ausente/inconsistente e não atribui classe favorável.

### Condição e saída para ACT

- Ao criar a operação, derive uma condição de CHECK uma única vez e independentemente do fluxo do DO/eventos com `createRng((seed XOR 0xC4EC7A31) >>> 0)`, consumindo uma extração: `< 1/3` buff, `< 2/3` neutro, caso contrário nerf. Não derive novamente ao entrar, renderizar, concluir ou revisitar CHECK. Para ausência de escolha em PLAN, condição efetiva de CHECK é obrigatoriamente nerf, sem empilhar efeito se o sorteio já foi nerf.
- A condição afeta somente a dificuldade de investigação: buff mostra a pista; neutro mostra o conjunto normal; nerf apresenta uma distração extra. Nenhuma condição muda fatos, classificação verdadeira, status, indicadores ou vitória. A interface não revela seed, probabilidades ou mecanismo técnico.
- Ao registrar o veredito, o domínio calcula e armazena uma saída imutável `checkResult`: classe verdadeira (`achieved`, `partial`, `not-achieved`, `insufficient`), classe escolhida (uma das três classes operacionais), qualidade, condição e IDs relevantes. A avaliação incorreta do jogador não modifica a realidade registrada no DO.
- ACT recebe `checkResult.trueVerdict` e os dados de análise para formar afirmações; não há decisão de Padronizar/Revisar nesta etapa. O Conselho do CATO registra a lição derivada dos dados e não altera os fatos auditados por CHECK.
- Sem `doResult` suficiente, CHECK apresenta aviso e evidência indisponível, oferece veredito para fins de auditoria, registra `insufficient` como classe verdadeira, concede qualidade e bônus zero e entrega essa conclusão ao ACT. A ação de avançar exige conclusão do CHECK.

## ACT — Conselho do CATO

ACT é um desafio curto de aprendizado sobre o ciclo concluído. As afirmações são a fonte dos fatos de PLAN, DO e CHECK; não repetir esses fatos em um resumo anterior. Alinha-se aos casos de uso públicos de ACT: consultar o aproveitamento, reconhecer problemas e lições aprendidas, padronizar o que funcionou e encerrar o ciclo. Referência: [README](https://github.com/AppActa/acta-engenharia), `diagramas/casos-de-uso/{detalhados,resumidos}/act.puml` e `diagramas/fluxos-de-usuario/act/{licoes-aprendidas,padronizacao,geracao-de-relatorio}.puml`. O minijogo registra aprendizados localmente e apresenta o resumo no próprio ACT antes do fim; não exporta PDF/PPTX nem cria histórico externo.

### Entradas e afirmações

- ACT consome os registros reais da semana: `planChoice` e `doAutomaticPlan` (direção escolhida/automática); `doTasks` e `doResult` (status finais, tarefas corretas, incorretas, pendentes, distrações movidas e dados de tempo); `checkResult.trueVerdict`, escolha do jogador, qualidade registrada na auditoria.
- Ao entrar no ACT, o controller cria e guarda `actRound` uma vez. Contém condição efetiva, exatamente três afirmações em ordem determinística, seus IDs/fontes/explicações e verdades, conjunto correto de IDs, pista de buff e lição/ação sugerida. Reentrada ou renderização não refaz a geração.
- Há sempre uma afirmação sobre cada fonte PLAN, DO e CHECK. As verdadeiras relatam o direcionamento real (incluindo atribuição automática), a contagem real de tarefas pedidas no status-alvo, e o veredito verdadeiro registrado no CHECK. Se uma fonte não tiver dado completo e consistente, a afirmação verdadeira diz que não há evidência suficiente para concluir; afirmações falsas dizem que há uma opção/resultado específico e são refutadas pela ausência do registro. Não inventar fatos.
- As afirmações falsas são alternativas explícitas refutáveis: outra opção de PLAN que não foi registrada; outra contagem possível diferente da contagem DO; outro veredito diferente do CHECK. Para fonte sem dados, a falsa afirma suficiência/confirmação que não existe. Cada afirmação registra origem e explicação com o valor real que prova/refuta o enunciado.
- Exatamente três afirmações são exibidas, uma de cada fonte PLAN, DO e CHECK. A interface separa cada afirmação em um cartão amplo com a fonte identificada em área própria; após responder, mostra a verdade e a evidência em área distinta. O jogador marca uma ou mais e confirma. A resposta só acerta se o conjunto selecionado for exatamente igual ao conjunto `actRound.correctIds`; seleção parcial, vazia ou com qualquer afirmação falsa é erro.
- A devolutiva revela a verdade de cada afirmação e a evidência que a comprova/refuta. A resposta do jogador não reescreve PLAN, DO ou CHECK.

### Condição e ordem determinística

- Na inicialização da operação derive `actSampledCondition` com uma extração de `createRng((seed XOR 0xAC7A3130) >>> 0)`: `< 1/3` buff, `< 2/3` neutro, caso contrário nerf. Armazene uma única vez. A falta de escolha em PLAN força `actCondition='nerf'`, sem penalidade acumulada se a amostra também for nerf.
- Buff e neutro escolhem exatamente duas afirmações verdadeiras e uma falsa. Buff mostra uma pista narrativa curta do CATO sobre conferir os registros por fase; neutro não mostra pista. Nerf escolhe uma verdadeira e duas falsas. Condição altera apenas composição/dica, não fatos da operação.
- Sorteie quais fontes serão verdadeiras e embaralhe a ordem com fluxo determinístico isolado `createRng((seed XOR 0xAC7A3131 XOR week) >>> 0)`, em consumo fixo: embaralhar as fontes `[PLAN, DO, CHECK]` por Fisher–Yates e usar o prefixo conforme a quantidade verdadeira exigida. Embaralhe a ordem visual com a mesma instância depois da seleção. A condição usa outro salt; nenhum sorteio de DO, CHECK, eventos ou indicadores pode afetar ACT.
- Os valores verdadeiros são produzidos pelos dados da fonte, nunca alterados para adequar a proporção. Varia a fonte que recebe template falso e a ordem visual por semana/seed. Mesma seed e estado da semana reproduzem os mesmos textos, composição, IDs, ordem e resposta.

### Consequências e aprendizado

- Acerto: qualidade `+5` e moral `+5`, cada uma limitada a 100. Atrasos, saldo não mudam.
- Erro: atrasos `+3` p.p. limitados a 50; qualidade `−5` e moral `−5` limitadas a 0; saldo `−5` com piso 0. Resposta errada representa interpretação incorreta, não altera os fatos de PLAN/DO/CHECK.
- O controller registra `actResult` uma única vez (conjunto selecionado, esperado, acerto, consequências aplicadas, condição e lição). Ações duplicadas/depois do registro são ignoradas; revisitar ou renderizar não aplica efeitos novamente.
- A lição e a ação sugerida são calculadas dos registros reais: meta atingida recomenda preservar a prática sustentada pelos dados; parcial recomenda priorizar tarefas fora do alvo; não atingida recomenda dividir/reorganizar a execução; evidência insuficiente recomenda completar os registros de execução/verificação no ciclo seguinte. Se nenhum fato sustentar lição específica, registrar explicitamente ausência de conclusão adicional.
- ACT é a semana 4. Após a devolutiva, **Encerrar operação** calcula vitória ou derrota com os indicadores finais. Repetir encerramento não reaplica efeitos. A página final/Bridge existente permanece.
- O resultado final continua exigindo atrasos ≤40%, qualidade ≥75%, saldo ≥0. Moral não integra a vitória. Acertos/erros ACT só afetam esses valores conforme a fórmula acima; atrasos respeitam 0–50, qualidade/moral 0–100 e saldo não fica negativo.

## Seed e reprodução

A Home não cria uma semente de operação. Ao iniciar uma operação, gere e guarde uma semente inteira aleatória local, não exibida; ao reiniciar, a nova operação recebe outra seed. O PRNG `createRng` é determinístico. Fluxos independentes: seleção do conjunto de tarefas DO `seed XOR 0xD05A6A11`, condição DO `seed XOR 0xD04C7A31`, CHECK `seed XOR 0xC4EC7A31`, ACT condição `seed XOR 0xAC7A3130`, ACT ordem `seed XOR 0xAC7A3131 XOR week`. Cada fluxo consome apenas as extrações documentadas nas respectivas seções; não há sorteios por renderização, navegação ou efeito do React. As condições sorteadas são guardadas uma vez por operação. A falta de direção em PLAN força nerf em DO, CHECK e ACT sem empilhar efeitos de dificuldade em cada etapa. Reiniciar pela Bridge cria nova seed.

O fluxo antigo de eventos fixos/extras e dos perfis aleatórios de faixa deixa de fazer parte da partida: esses eventos dependiam dos projetos executados em DO, que foram removidos. O saldo inicial permanece 100 MoedACTAs; ele muda pelas compras opcionais em PLAN e pela penalidade de erros de movimentação em DO, conforme descrito nesta especificação.


## Interface, arquitetura e validação

Manter identidade visual do projeto, pt-BR, painel claro e ciano/azul, navegação lateral, cartões de indicadores, CATO contextual, controle semântico, foco visível, responsividade e `prefers-reduced-motion`. Mostrar em todas as telas, inclusive Home e resultados, o mesmo componente de quatro indicadores atuais (atrasos, qualidade, moral e saldo); não repetir esses valores em outros resumos. O resultado final informa os limites de vitória e se foram atendidos, sem exibir novamente os valores atuais. Durante DO, erros e perdas podem ser acompanhados; o resumo final da rodada não os repete fora do card. Em celular, o quadro pode rolar horizontalmente sem cortar cartões ou controles. Textos e indicador visual acompanham o tempo; não usar apenas cor nem anunciar cada segundo em excesso. Assets e fontes são locais ou têm fallback. Nas telas finais de sucesso e falha, substituir a fábrica e o mascote por uma MoedACTA grande em rotação; ampliar também o ícone do saldo e respeitar `prefers-reduced-motion` com a versão estática.

- `src/domain/game.ts`: tarefas, pedidos PLAN→DO, evidências de CHECK, afirmações de ACT, respostas, consequências e lições puras.
- `src/controller/gameReducer.ts`: iniciar, transições de DO/CHECK, selecionar afirmações, concluir ACT uma vez, avançar/encerrar e reiniciar.
- `src/app/` e `src/components/`: apresentação e despacho de ações sem cálculo de domínio.
- Testes cobrem regras PLAN/DO/CHECK/ACT, composição das afirmações por condição, fatos ausentes, seleção exata, explicações por origem, consequências/limites, idempotência, fluxo semanal/final, acessibilidade e reinício.

Não implementar login, backend, IA remota, ranking, multiplayer ou chamadas de API. Ao iniciar nova operação, gere nova seed; recarregar página reinicia a experiência.


