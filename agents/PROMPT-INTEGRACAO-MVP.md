# Prompt definitivo — ACTA Experience integrado e jogável

> Esta versão substitui a anterior. Foi reforçada para impedir dois resultados incompletos: uma interface redesenhada que não segue os HTMLs e uma aplicação que implementa só parte do jogo.

## Prompt para o agente de implementação

### Resultado exigido

Implemente agora, neste checkout, o **ACTA Experience — Operação Resgate como um jogo local completo e jogável**, integrado em React + TypeScript + Vite. O trabalho só está concluído quando a pessoa conseguir iniciar pela HOME, jogar as quatro semanas do ciclo PLAN → DO → CHECK → ACT, chegar ao final correto (vitória ou derrota), passar pela ACTA Bridge e retornar à HOME.

Este pedido é de **implementação**, não de planejamento. Não encerre a execução após apresentar análise, scaffold, arquitetura, uma demonstração parcial ou algumas telas. Faça todos os passos, conecte todas as ações ao mesmo estado real e valide o percurso completo antes de concluir.

### Regra de fidelidade visual — obrigatória

Os HTMLs de `agents/figma/telas/` são as referências visuais aprovadas para esta implementação. **Porte as composições, tipografia, proporções, cores, superfícies, bordas, espaçamentos, hierarquia e comportamento responsivo dos HTMLs para a aplicação React.** Os HTMLs são o gabarito visual; não crie uma direção visual nova, não substitua as telas por um template genérico e não homogeneíze diferenças intencionais entre etapas.

Proceda assim para cada tela:

1. Leia o HTML completo e seu briefing Markdown correspondente antes de tocar na tela.
2. Reaproveite a estrutura DOM e o CSS do HTML como ponto de partida direto. Faça apenas as adaptações necessárias para receber dados/ações do app e para escopar estilos no React. Não redesenhe “com base na ideia” do HTML.
3. Preserve o layout individual: HOME de missão; PLAN e DO conforme seus próprios HTMLs; CHECK conforme `05-check.html`; ACT conforme `06-act.html`; encerramentos e ponte conforme `07`, `08` e `09`. Componentes compartilhados só são permitidos quando mantêm a mesma aparência e comportamento das referências.
4. Compare a tela React com o HTML original lado a lado em 1440×1024 e 440×956. Ajuste até a estrutura, escala, ritmo, cores, texto e posição dos elementos corresponderem visualmente. Se não houver navegador/screenshot disponível, registre a limitação, faça inspeção de DOM/CSS e não alegue equivalência visual verificada.
5. Não use imagens de tela como substituto da interface. Mantenha texto e controles HTML reais e acessíveis.

**Regra de aprovação visual:** em cada viewport, a referência React deve preservar a composição e a hierarquia do HTML correspondente; diferenças se limitam a conteúdo dinâmico, estados reais, semântica/acessibilidade e ajustes necessários ao funcionamento. Um novo design, uma aplicação genérica ou uma interface apenas “inspirada” reprova.

### Inventário obrigatório das referências

Leia de ponta a ponta os oito HTMLs existentes e os briefings 01–09:

| Etapa | HTML/briefing | Resultado integrado |
|---|---|---|
| HOME | `01-home.html` / `01-home.md` | Abre a missão; botão inicia nova partida e leva a PLAN. |
| PLAN | `02-plan.html` / `02-plan.md` | Mostra fase/semana/indicadores, permite auditoria oficial quando há dados oficiais, ou seguir sem auditar, e vai a DO. |
| DO | `03-do-catalogo.html` / `03-do-catalogo.md` | Catálogo dos nove projetos, seleção e revisão antes do débito. |
| Confirmação DO | `04-do-confirmacao.md` | Diálogo acessível dentro da tela DO. Não existe `04-do-confirmacao.html`; implemente visual/comportamento segundo este contrato e o estilo do catálogo. |
| CHECK | `05-check.html` / `05-check.md` | Mostra estado real após projeto e eventos, proteção e registro. Remova todos os valores de exemplo do caminho integrado. |
| ACT | `06-act.html` / `06-act.md` | Conserva o HTML visual revisado: resumo de atrasos, escolhas e prévia. **Não acrescente ícone de fábrica nem imagem/ícone do CATO**; a orientação do CATO nesta tela é textual. |
| END vitória | `07-end-vitoria.html` / `07-end-vitoria.md` | Resultado real, metas atingidas e estrelas da regra. Remova os dados ilustrativos no jogo. |
| END derrota | `08-end-derrota.html` / `08-end-derrota.md` | Resultado real, condições e zero estrelas. Remova os dados ilustrativos no jogo. |
| ACTA Bridge | `09-acta-bridge.html` / `09-acta-bridge.md` | Reflexão e retorno real à HOME, sem falsa navegação. |

As telas 05–09 atualmente são mockups, não lógica de jogo. Transfira seu **visual**, não seus snapshots de exemplo nem os seus pequenos handlers de demonstração. As telas 02 e 03 contêm contratos globais opcionais `window.ACTA_PLAN_HOST` e `window.ACTA_DO_HOST`; substitua-os pela integração React/controller central, sem manter duas APIs concorrentes.

**Critério:** há uma tela React por cada etapa acima; seus dados vêm do estado compartilhado; nenhuma fase é substituída por um protótipo de aparência diferente.

### Fontes, arquitetura e descoberta inicial

Leia nesta ordem: `AGENTS.md`; `agents/spec.md`; todos os `agents/figma/telas/*.md`; `agents/DESIGN_SYSTEM.md`; `agents/figma/README.md`, `MATRIZ-TELAS.md`, `DECISOES-PENDENTES.md`; `agents/game_design.md`; então todos os HTMLs da tabela e os assets.

Confirme o estado real da raiz antes de editar. No checkout inspecionado para este prompt havia somente `AGENTS.md`, `agents/` e `public/`: não havia `src/`, `package.json`, testes nem app Vite. Se isso continuar verdadeiro, crie o scaffold mínimo React + TypeScript + Vite e scripts necessários, **e prossiga imediatamente para implementar o jogo inteiro**. Scaffold não conta como entrega funcional. Preserve os HTMLs, briefings e assets.

Organize o código de modo que:

- `src/domain/` contenha cenário/tipos/cálculos puros;
- `src/controller/` contenha estado inicial, reducer/transições e reinício;
- `src/app/` e `src/components/` contenham shell, telas/componentes e apresentação;
- cada tela renderize dados fornecidos pelo estado e envie ações ao controller. Não duplique cálculos de regras em componentes.

Não use backend, login, conta, analytics, chamadas de API, armazenamento persistente ou rede durante o jogo. Toda partida vive em memória; atualizar a página volta à HOME e reinicia a experiência conforme `AGENTS.md`.

Investigue setores/diagnósticos em todas as fontes e no código antes de decidir a implementação de auditoria. A especificação não contém uma lista de setores. Se não encontrar um mapeamento aprovado, não invente opções: mantenha o ramo opcional de avançar sem auditoria plenamente funcional, comunique a limitação da auditoria com clareza e conclua o restante do jogo. Não deixe a falta dessa lista bloquear DO, CHECK, ACT ou END.

**Critério:** a arquitetura e qualquer lacuna estão confirmadas; a partida não depende de persistência/serviço; o trabalho segue além do scaffold até todos os gates deste prompt passarem.

### Contrato funcional do jogo

`agents/spec.md` permanece a autoridade final. Implemente estas regras nela definidas:

- Início oficial: semana 1 de 4, atrasos 30%, qualidade 90%, moral 78%, saldo 100 MoedACTAs e placares de jogador/rival em 0.
- Cada semana percorre PLAN → DO → CHECK → ACT. ACT nas semanas 1–3 inicia PLAN da semana seguinte; ACT na semana 4 encerra e decide o resultado.
- PLAN: auditoria opcional, uma vez por semana, custo 5 MoedACTAs, +4 pontos e revelação do diagnóstico; correspondência da categoria no projeto posterior dá mais −2 p.p. em atrasos. Sem auditar não altera saldo nem indicadores. Não repetir auditoria na mesma semana.
- DO: exatamente um projeto por semana; projeto usado fica indisponível no restante da operação. Os nove nomes, custos, impactos em atrasos/qualidade/moral e categorias vêm da tabela em `agents/spec.md`. Selecionar não debita. Confirmar cobra uma vez e aplica efeitos oficiais; cancelar/Escape preserva tudo. Revalidar saldo/uso no instante da confirmação e bloquear submissão duplicada.
- Aplicar limites oficiais: atrasos 0–50; qualidade e moral 0–100; orçamento não abaixo de zero. Seguir a tabela e a semântica de valores do domínio, sem lógica de negócio no CSS/JSX.
- Eventos fixos: semana 1 Máquina parada (+6 p.p. em atrasos; proteção Manutenção preventiva); semana 2 Pico de pedidos (+4 p.p.; proteção Reorganizar a separação); semana 3 Falta de insumos (+5 p.p.; proteção Trocar fornecedor); semana 4 Auditoria de qualidade (−7 p.p. em qualidade; proteção Controle de qualidade). A proteção vale com o projeto já utilizado antes ou executado na semana, conforme a especificação.
- Resolver também exatamente um evento extra por semana segundo cenário, chance ajustada, PRNG local e efeitos de `agents/spec.md`. Proteções de `inspect`/Controle de qualidade e `maintenance`/Manutenção preventiva funcionam para os eventos extras correspondentes independentemente do sorteio. Resultado complementar totaliza 100%. Registre evento, probabilidade aplicável, resultado, efeito e proteção. Reabrir CHECK nunca rerrola o evento.
- Economia inesperada favorável soma +5 MoedACTAs; o resultado complementar não altera saldo. Não substitua essa regra por propostas pendentes.
- Pontuação semanal, rival, bônus e limites seguem exclusivamente a especificação. ACT não tem custo vigente: ignore propostas de custos pendentes.
- ACT: Padronizar dá +14 pontos se atrasos caíram pelo menos 5 p.p. naquela semana; caso contrário, −8; Revisar dá +3. Prévia não altera estado; confirmar altera uma vez. Moral é apenas contexto.
- Vitória exige no final da semana 4 todas as condições simultâneas: atrasos ≤12%, qualidade ≥75%, saldo ≥0 e pontos do jogador > rival. Qualquer falha resulta em derrota. Empate não vence. Estrelas: vitória com 155+ pontos = 3; 118–154 = 2; outra vitória válida = 1; derrota = 0. Moral não altera o resultado.
- Fluxo final: END → ACTA Bridge → HOME. “Jogar novamente” na Bridge volta à HOME; nova operação só inicia quando a pessoa aciona “Começar missão”.

Use um seed local para reproduzir a resolução dos eventos dentro daquela partida; as mesmas decisões e seed devem gerar o mesmo histórico. O seed não vira dado de UI. Atualizar a página inicia novo estado, sem restaurar a partida anterior.

**Critério:** todas as fases usam uma única instância de estado/controller; os eventos resolvem uma só vez; nenhuma regra, custo ou efeito está implementado apenas no frontend.

### Interações que devem funcionar de ponta a ponta

1. **HOME:** “Começar missão” cria estado inicial e navega a PLAN.
2. **PLAN:** mostrar semana e valores atuais. Quando houver mapeamento oficial, selecionar setor e auditar atualiza saldo/pontos/diagnóstico uma vez; saldo baixo ou auditoria usada desabilita a opção e explica. Seguir sem auditoria mantém saldo/indicadores e vai ao DO.
3. **DO:** os nove projetos são apresentados com seus dados normativos. Projeto usado/sem saldo não seleciona; seleção só prepara a revisão. “Revisar escolha” abre diálogo nomeado e descrito. Cancelar e Escape fecham sem mudanças e devolvem foco. Confirmar debita/aplica uma vez, marca projeto usado, resolve a semana conforme arquitetura e conduz a CHECK.
4. **CHECK:** refletir exatamente efeitos de projeto/eventos no estado, incluindo alterações protegidas, dinheiro e histórico. “Revisar e avançar” vai a ACT, sem recalcular nem sortear.
5. **ACT:** radio/controles nativos para Padronizar e Revisar. Prévia mostra a consequência aplicável à redução real de atrasos naquela semana. “Confirmar decisão” aplica pontos uma vez e segue à semana seguinte ou END conforme semana.
6. **END vitória/derrota:** selecionar ramo conforme cálculo real. Mostrar os valores reais, critérios e estrelas; a pontuação rival pode ser usada pelo domínio sem ser exibida como placar na tela. Moral está rotulada como contexto.
7. **ACTA Bridge:** reflexão e ações ligadas a navegação real para HOME; nova partida não inicia automaticamente.
8. **Reinício:** voltar à HOME reinicia somente quando a pessoa iniciar nova operação; atualizar documento retorna ao início.

Nenhum botão principal pode ser decorativo ou apresentar feedback de “feito” sem aplicar a operação correspondente. Elimine textos de mock, estados simulados, placeholders em fases jogáveis e transições que apenas mudam o título enquanto preservam estado incompatível.

**Critério:** é possível completar operações reproduzíveis até vitória e derrota, sem recarregar no meio, sem duplicar cobrança/pontos e sem ações sem destino.

### Fidelidade de conteúdo e assets

- O conteúdo vem dos briefings e `agents/spec.md`. Substitua valores do mockup de CHECK (semana 2, 28→18, saldo 76→57 e evento ilustrativo) e ACT (24→18) pelos valores recebidos/calculados pelo domínio. Os HTMLs 07/08 também rotulam valores como ilustrativos: no app, renderize o resultado real.
- Preserve o estilo exato das telas. A tela 06 ACT deve permanecer sem ilustração de fábrica e sem imagem do CATO; use apenas a fala textual do CATO ali.
- Use arquivos locais: logo/CATO/fábrica em `agents/figma/assets/`, fontes Jakarta locais e MoedACTA local. Use o SVG animado no card de Saldo apenas; moedas junto a custos, ganhos e demais valores são estáticas. Em `prefers-reduced-motion`, use moeda estática no próprio card de Saldo. Preserve proporção e texto acessível ao lado do valor.
- Não dependa de Google Fonts, assets remotos, serviço externo, PNG gerado ou captura raster da interface.
- Preserve microcopy requerida; não reescreva telas por preferência editorial. Onde a referência HTML mostrar estado de exemplo, mantenha apenas a estrutura/estilo e conecte o conteúdo ao jogo.

**Critério:** textos, tokens, imagens e layout correspondem às referências; exemplos/mockups nunca são exibidos como sessão real.

### Acessibilidade e enquadramento

Use semântica HTML, um `h1` por rota, controles nativos, labels associados, ordem de foco coerente, foco visível, estado textual além de cor, regiões live para atualizações úteis e movimento reduzido. Alvos de toque têm pelo menos 44×44 px no mobile. O diálogo DO contém o foco, aceita Escape para cancelar e restaura foco.

Respeite o enquadramento e os requisitos de cada briefing. Verifique 1440×1024, 440×956 e larguras intermediárias no navegador. Não esconda conteúdo com overflow para simular enquadramento. O catálogo pode adaptar-se com compactação/listagem responsiva, mantendo os nove projetos acessíveis; a prioridade é legibilidade e funcionamento sem overflow horizontal.

**Critério:** todas as rotas foram percorridas por teclado e toque; não há sobreposição/corte, foco perdido ou scroll horizontal nos viewports testados; qualquer limitação de verificação visual é declarada.

### Validação obrigatória e conclusão

Implemente ou atualize testes de domínio/controller e, quando a stack permitir, testes de interface para:

- estado inicial/reset e fluxo de fase/semana;
- cada projeto oficial, custos, impactos, limites e indisponibilidade;
- cancelar/confirmar/duplo clique em DO;
- todos os eventos fixos e extras, proteções, seed reproduzível e histórico sem rerrolagem;
- auditoria uma vez/semana e bônus diagnóstico (se houver dados oficiais disponíveis);
- ACT nos limiares abaixo e exatamente em 5 p.p., Revisar, aplicação única e transições por semana;
- cada critério de vitória isoladamente, empate, saldo zero, moral contextual e limiares de estrelas;
- navegação END → Bridge → HOME e reinício.

Execute `npm test`, `npm run lint` e `npm run build` conforme `AGENTS.md`. Execute também a conferência visual em viewport se houver navegador disponível. Corrija falhas antes de parar. Se uma ferramenta ou informação estiver ausente, continue com o trabalho independente e registre apenas a lacuna realmente bloqueante.

**Definição final de pronto:** todos os gates deste prompt passaram; todas as fases e ações obrigatórias estão ligadas ao domínio/controller e a partida completa é jogável; as telas integradas mantêm a composição dos HTMLs de teste; build/lint/testes foram executados e reportados com resultados reais. Não encerre com plano, proposta, tela parcial ou lista de próximos passos.
