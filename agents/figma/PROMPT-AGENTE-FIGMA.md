# Prompt para criar as telas do ACTA Experience no Figma

## Missão

Você é designer de produto sênior responsável por criar, do zero, o arquivo Figma do **ACTA Experience — Operação Resgate**. Produza uma experiência de jogo educativo coerente, completa e pronta para revisão, cobrindo todas as telas e estados descritos nos documentos desta pasta.

**Crie um arquivo Markdown individual para cada tela antes de desenhá-la.** Use os briefings `telas/*.md` como contrato de conteúdo e interação; refine-os apenas quando houver conflito documentado, registrando a decisão. O resultado final inclui esses briefings e as telas organizadas no Figma.

## Fontes obrigatórias — leia nesta ordem

1. `agents/spec.md`: fonte vigente para regras e fluxo do jogo. Siga-o para conteúdo, estados, valores e transições.
2. `agents/DESIGN_SYSTEM.md`: especificação técnica visual ACTA — tokens, cores, tipografia, espaçamento, raios, componentes, estados, acessibilidade e responsividade.
3. `agents/game_design.md`: contexto educativo, cenário, intenção, experiência e decisões em aberto. Diferencie hipóteses de regras vigentes.
4. `agents/figma/planejamento-moedactas.md`: proposta de economia ainda não aprovada; use como intenção de design, identifique conflitos com a especificação e marque custos novos como pendentes, sem inventar que já são regra oficial.
5. `agents/spec/`: documentos auxiliares que detalhem regras ou estados. Leia os arquivos relevantes e registre suas referências nos briefings.
6. `README.md`, `AGENTS.md` e arquivos de assets citados abaixo para arquitetura, restrições e identidade.

Em caso de conflito de regra, `agents/spec.md` prevalece e o conflito deve ser listado em `DECISOES-PENDENTES.md`. O design system orienta a linguagem visual sem transformar exemplos visuais em regras do jogo.

## Direção criativa

Crie uma interface nova, desenhada para o jogo e sua missão de operação industrial. **Não use o site atual, seu layout, seus componentes de tela nem screenshots como base visual.** Não faça uma reformulação do site. Aplique os tokens técnicos ACTA a uma linguagem visual própria para jogo: clara, energética, legível à distância e com forte hierarquia entre missão, fase PDCA, indicadores e decisão.

Use os assets oficiais fornecidos:

- CATO: `C:\Users\daviramos-ieg\Desktop\ACTA\.github\profile\cato.svg`
- Logo ACTA: `C:\Users\daviramos-ieg\Desktop\ACTA\.github\docs\logo.png`
- MoedACTA: `C:\Users\daviramos-ieg\Desktop\JogACTA\public\moedacta.svg`

Inspecione visualmente os arquivos antes de inserir. Preserve proporções, transparência e identidade original; não redesenhe nem substitua por ícones genéricos. CATO é guia contextual em falas curtas, não decoração que compete com a ação principal. MoedACTA acompanha saldo e custos.

## Escopo de telas

Projete o percurso vigente inteiro: HOME → PLAN → DO → CHECK → ACT, com repetição nas semanas 1–3, ACT → END na semana 4, END → ACTA_BRIDGE → HOME. Inclua estados de confirmação/cancelamento, saldo insuficiente, projeto usado, eventos protegidos e finais vitória/derrota. Não invente telas de login, conta, backend, ranking, multiplayer ou conexão de rede.

Crie a pasta `agents/figma/telas/` e um Markdown por tela. Nomes recomendados:

- `01-home.md`
- `02-plan.md`
- `03-do-catalogo.md`
- `04-do-confirmacao.md`
- `05-check.md`
- `06-act.md`
- `07-end-vitoria.md`
- `08-end-derrota.md`
- `09-acta-bridge.md`

Estados que cabem na mesma tela devem ter seções/frames próprios no briefing, sem virar um documento por microestado. Cubra ao menos: seleção e confirmação de projeto; cancelamento sem débito; projeto indisponível por uso ou saldo; auditoria disponível/usada/sem saldo; ACT padronizar/revisar e contingência orçamentária; eventos protegido/não protegido; vitória e derrota; ponte e retorno/reinício. Se a leitura das fontes indicar uma tela necessária adicional, crie outro Markdown e atualize o índice.

## Conteúdo obrigatório em cada briefing de tela

Cada `telas/*.md` precisa conter:

1. Nome, etapa do fluxo, objetivo do jogador e condição de entrada/saída.
2. Fontes consultadas e regras exatas aplicáveis (sem duplicar regras divergentes).
3. Frame recomendado para desktop e adaptação mobile responsiva; dimensões são ponto de partida, não regra de negócio.
4. Wireframe textual/ASCII com regiões nomeadas, ordem e proporção aproximada.
5. Conteúdo completo: títulos, rótulos, microcopy pt-BR, dados, opções, custos, feedback, CTA primário/secundário e textos de ajuda.
6. Organização e hierarquia: cabeçalho, progresso PDCA/semana, saldo, conteúdo principal, CATO, histórico e navegação, conforme a tela.
7. Componentes e tokens do `DESIGN_SYSTEM.md` a aplicar: cores semânticas, estilos tipográficos, espaçamento, raios, bordas, elevação, controles e estados. Cite nomes exatos de tokens quando documentados; não invente token ausente.
8. Comportamento e estados de interação: hover, foco, pressionado, desabilitado, carregando quando aplicável; teclado, confirmação e cancelamento; feedback após ação.
9. Acessibilidade: ordem de foco, nomes acessíveis, contraste a verificar, informação além de cor, alvo de toque, leitor de tela, movimento reduzido e comportamento responsivo.
10. Critérios de aceite visuais e funcionais que possam ser conferidos no Figma.

Escreva conteúdo conciso e natural em pt-BR. Não use lorem ipsum. Quando a especificação não decidir uma regra visual ou um valor de negócio, identifique como decisão pendente em vez de cristalizar uma hipótese.

## Regras de conteúdo que precisam aparecer corretamente

- Partida: semana 1/4, 100 MoedACTAs, atrasos 30%, qualidade 90%, moral 78%, placares em 0.
- Vitória ao final da semana 4: atrasos ≤12%, qualidade ≥75%, saldo ≥0 e placar do jogador maior que o rival. Moral é contexto, não condição final.
- PLAN: auditoria opcional, uma por semana, custa 5; revela diagnóstico, acrescenta 4 pontos e pode reduzir mais 2 pontos percentuais se projeto corresponder.
- DO: um projeto por semana, projeto usado não volta; custo cobrado apenas na confirmação; cancelar não muda saldo/indicadores. Mostrar nome, custo e efeitos definidos em `spec.md`.
- CHECK: explicar efeito do projeto, evento semanal, evento extra, chance ajustada quando aplicável e proteção; registrar evento, resultado, efeito e proteção.
- ACT: padronizar/revisar conforme regras vigentes da especificação; transição respeita número da semana.
- Finais: estrelas conforme a especificação; oferecer ponte ACTA e reinício conforme fluxo.
- Economia sem ganhos é proposta do planejamento, não regra vigente: o evento atual “Economia inesperada” dá +5. Documente a incompatibilidade e desenhe estado neutro substituto apenas como proposta a validar; não esconda a divergência.

## Sistema visual e composição no Figma

- Use tokens ACTA de cor e tipografia descritos em `agents/DESIGN_SYSTEM.md`; a fonte de referência é Plus Jakarta Sans. Prefira variáveis/componentes existentes do sistema quando disponíveis; faça discovery no Figma ACTA indicado pelo design system e confirme família/variante antes de reutilizar.
- Preserve estrutura original dos assets da marca. Combine ciano/turquesa e azul com neutros sem sacrificar contraste; cores do PDCA podem reforçar a fase, sempre acompanhadas de texto/ícone.
- Crie componentes reutilizáveis para cabeçalho de missão, progresso semanal PDCA, indicador, saldo MoedACTA, cartão de projeto, CTA e bloco CATO, quando coerente com o sistema.
- Organize páginas do arquivo Figma por `00 — Fundamentos`, `01 — Fluxo desktop`, `02 — Fluxo mobile`, `03 — Estados e componentes`. Nomeie frames com número, tela e estado.
- Desenhe layouts desktop e mobile para cada tela principal. No mobile, reordene conteúdo sem ocultar fase, semana, saldo, custo da ação nem consequência primária.
- Protótipo navegável deve seguir o fluxo, contemplar cancelar/confirmar e reiniciar. Estados aleatórios são amostras visuais, não novas regras.

## Execução

1. Leia todas as fontes obrigatórias e faça uma matriz curta de telas × regras × tokens; salve-a como `agents/figma/MATRIZ-TELAS.md`.
2. Gere `agents/figma/DECISOES-PENDENTES.md` listando conflitos e decisões ainda abertas. Inclua a economia sem ganhos, os custos ACT propostos e qualquer impossibilidade orçamentária identificada; se a tela depender disso, represente o estado e sinalize que é proposta.
3. Crie e complete todos os briefings individuais em `agents/figma/telas/`.
4. Antes de construir, valide que cada etapa e cada rota do fluxo vigente aparece em ao menos um briefing e que os dados não contradizem `agents/spec.md`.
5. Monte as telas no Figma, reutilizando o design system ACTA após verificar componentes e variantes, e aplicando os assets locais informados.
6. Faça revisão visual tela a tela em desktop/mobile e estados principais: hierarquia, consistência, conteúdo, acessibilidade e transições.
7. Atualize `agents/figma/README.md` com índice dos briefings, ordem de leitura, decisões pendentes e link do arquivo Figma quando criado.

## Conclusão verificável

O trabalho está concluído quando: há um Markdown completo por tela principal; a matriz cobre todas as regras/transições vigentes; pendências estão explicitadas sem serem apresentadas como regras aprovadas; os assets CATO, logo e MoedACTA foram aplicados; desktop e mobile estão desenhados; componentes/tokens foram identificados e utilizados ou a limitação foi registrada; protótipo cobre o percurso de início a reinício; e o README aponta todos os entregáveis.
