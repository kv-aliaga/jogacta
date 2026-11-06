# 06 — ACT

## 1. Objetivo e fluxo

Etapa ACT, após CHECK. A tela deve ajudar a pessoa a refletir sobre a semana e escolher entre padronizar o que funcionou ou revisar a operação. É uma tela mockada para avaliar a composição visual; não deve parecer conectada a uma partida real.

Fluxo vigente: nas semanas 1–3, confirmar a decisão leva a PLAN da semana seguinte; na semana 4, leva a END. A tela deve comunicar as duas possibilidades de continuidade sem inventar uma semana ou simular a transição.

## 2. Fontes e regras

- `agents/spec.md`: regras de ACT, pontuação e transição por semana.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/figma/DECISOES-PENDENTES.md`: propostas ainda não aprovadas; não são regras do jogo.
- `agents/game_design.md`: contexto educativo; hipóteses não alteram regras vigentes.

Regras para esta tela:

- “Padronizar” concede +14 pontos se os atrasos caíram pelo menos 5 pontos percentuais na semana; caso contrário, −8 pontos.
- “Revisar” concede +3 pontos.
- A escolha só aplica pontos ao confirmar e só pode ser aplicada uma vez por semana.
- ACT não cobra MoedACTAs. Propostas de custo em outros documentos estão pendentes e não devem aparecer como custo vigente, debitar saldo ou bloquear uma decisão.
- A tela não apresenta saldo negativo, empréstimo ou outra contingência orçamentária.
- Atrasos, qualidade, moral e saldo são contexto recebido da operação; a moral não determina a vitória.
- Não exibir placar rival, ranking, comparação de pontuação ou chance de vitória.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Adaptar a composição a larguras intermediárias, preservando ordem de leitura e sem overflow horizontal.
- Manter semana/fase, resumo dos atrasos, duas decisões e CTA visíveis no frame mobile sem rolagem.

## 4. Conceito visual e composição

Uma área de decisão clara e acolhedora, em continuidade com as telas anteriores do jogo. Apresentar os dados da semana como contexto para duas opções de igual legibilidade. CATO orienta a reflexão sem escolher pela pessoa.

Composição desktop:

1. Marca ACTA Experience, identificação “Operação Resgate”, etapa ACT destacada no ciclo PDCA e semana.
2. Título e pergunta de reflexão.
3. Resumo compacto de atrasos antes e depois da semana; demais indicadores e saldo em cards separados e discretos, se fizerem parte do mockup.
4. Duas escolhas: “Padronizar” e “Revisar”, com suas consequências junto aos respectivos nomes.
5. Fala breve do CATO.
6. CTA “Confirmar decisão”.

Composição mobile: título e pergunta primeiro; resumo compacto; escolhas empilhadas com consequência legível; CTA destacado ao final, sem rolagem no frame de referência.

Não transformar a tela em dashboard. Não usar gráficos, placar rival ou painéis de pontuação. Os indicadores devem apoiar a decisão sem competir com as duas opções.

## 5. Conteúdo

Usar estes textos:

- Título: **“Ajuste a operação”**.
- Pergunta: “O que você aprendeu nesta semana?”
- Resumo: atrasos antes e depois da semana, com rótulos e unidade em pontos percentuais.
- Escolha: **“Padronizar”**.
- Consequência: “Se os atrasos caíram pelo menos 5 p.p., +14 pontos. Caso contrário, −8 pontos.”
- Escolha: **“Revisar”**.
- Consequência: “+3 pontos.”
- CTA: **“Confirmar decisão”**.
- Continuação após confirmar: “Próxima semana” nas semanas 1–3 ou “Ver resultado final” na semana 4.
- CATO: orientação curta que convide a refletir, sem indicar uma escolha obrigatória.

Para demonstrar a hierarquia visual, valores podem ser preenchidos como **exemplo de mockup**. Identifique-os como ilustrativos, mantenha-os coerentes com os textos e não os apresente como estado real de partida. Não mostre custo em MoedACTAs para as decisões ACT.

## 6. Hierarquia

1. Pergunta “O que você aprendeu nesta semana?”.
2. Resumo de atrasos antes/depois que explica a condição de Padronizar.
3. Duas escolhas com consequências numéricas claras e igualmente legíveis.
4. CTA de confirmação.
5. Semana/fase, indicadores contextuais e CATO como apoio.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Usar cards separados para atrasos, qualidade, moral e saldo quando esses indicadores aparecerem; não formar uma faixa contínua.
- Se exibir saldo, associar a moeda MoedACTA local ao valor e manter o texto acessível. ACT não tem custo.
- Reutilizar marca, CATO e assets locais sem distorcer proporções ou depender de rede.
- Manter consequências legíveis sem depender apenas de cor, setas ou ícones.

## 8. Interação

Esta entrega é um mockup visual, não uma implementação funcional do controller. Mostrar as escolhas e o CTA com aparência de controles, sem afirmar que alteram pontos, atualizam a partida ou navegam de etapa.

O mockup pode mostrar uma escolha selecionada e a prévia correspondente como estado visual. A prévia deve obedecer às regras oficiais: Padronizar usa o limiar de 5 p.p. para exibir +14 ou −8; Revisar exibe +3. Não apresentar pontos como aplicados antes da confirmação.

## 9. Acessibilidade e responsividade

- Usar um único `h1` e ordem de leitura igual à hierarquia visual.
- Associar cada nome de escolha à sua consequência; anunciar qualquer estado selecionado em texto.
- Garantir contraste adequado, foco visível, alvos de toque de pelo menos 44×44 px e ordem de teclado coerente se houver controles interativos.
- Respeitar `prefers-reduced-motion`.
- Em telas estreitas, empilhar os elementos sem cortes nem rolagem horizontal.

## 10. Critérios de aceite

- A tela comunica que a pessoa deve refletir e decidir entre Padronizar e Revisar.
- As consequências +14/−8/+3 e o limiar de 5 p.p. estão corretos e junto às opções.
- Atrasos antes/depois tornam compreensível a condição de Padronizar.
- Nenhum custo ACT pendente aparece como regra vigente; não há bloqueio por saldo.
- Não há placar rival, ranking, comparação de pontuação ou dados apresentados como estado real.
- Semana 1–3 e semana 4 apontam para continuações diferentes sem simular uma transição funcional.
- Desktop e mobile preservam hierarquia, legibilidade, acessibilidade e enquadramento.
