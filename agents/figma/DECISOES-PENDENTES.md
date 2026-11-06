# Decisões pendentes

As regras vigentes em `agents/spec.md` seguem aplicáveis enquanto estas questões não forem aprovadas. Os itens abaixo registram propostas e incertezas; não autorizam alterar comportamento de jogo.

| ID | Tema | Base vigente / proposta | Tratamento nos briefings |
|---|---|---|---|
| DP-01 | Economia sem ganhos | A proposta `planejamento-moedactas.md` sugere não conceder ganhos; o evento vigente “Economia inesperada” concede +5 MoedACTAs quando favorável. | Exibir o resultado vigente. Um estado neutro pode ser descrito somente como proposta visual a validar, sem substituir o evento oficial. |
| DP-02 | Custos de ACT | O planejamento propõe custos para padronizar/revisar; `spec.md` define ganhos/penalidades de pontos e não cobra esses custos. | Mostrar custos como “proposta pendente” apenas em anotação, não como débito do fluxo vigente. |
| DP-03 | Contingência orçamentária | Custos propostos podem exceder saldo disponível; a regra de vitória requer saldo final ≥0, e não há regra normativa de empréstimo/contingência. | Indicar que a tela de custo/contingência depende de aprovação. Não inventar empréstimo, bloqueio ou saldo negativo permitido. |
| DP-04 | Balanço ao longo das quatro semanas | Há eventos com ganho/perda de MoedACTAs e custos de projetos; verificar viabilidade de partidas com escolhas diferentes sem mudar valores normativos. | Apresentar saldo e custo antes da confirmação; não prometer viabilidade universal nem alterar preços. |
| DP-05 | Moral na condição final | Moral aparece como indicador/contexto, mas não integra os quatro critérios simultâneos de vitória. | Mostrar como contexto; não usar moral para declarar vitória/derrota. |
| DP-06 | Chance ajustada | Spec usa PRNG local determinístico, multiplicador 0,5–1,5, chance favorável ajustada e complementar. | Exibir a chance/resultados conforme o estado da partida; não criar aleatoriedade de rede nem fixar resultado de exemplo como regra. |
| DP-07 | Variação de projetos e cenários | O catálogo e os efeitos são os da tabela da especificação; hipóteses educativas em `game_design.md` não substituem regras. | Manter os nove projetos oficiais e suas consequências exatas. |
| DP-08 | Estados protegidos | Proteções dependem de projetos selecionados/usados conforme regras de evento semanal e extra. | Registrar explicitamente proteção aplicada ou ausência dela no histórico de CHECK. |
| DP-09 | Estrelas e finais | Spec define 3 estrelas a partir de 155 pontos, 2 a partir de 118, 1 para demais vitórias e 0 para derrota. | Usar limiares oficiais; não inferir estrelas de moral ou de um critério isolado. |

## Decisões resolvidas pela precedência

- Se a proposta de economia divergir do evento oficial, vale o evento de `spec.md` (+5 no resultado favorável).
- ACT não cobra custos na regra vigente; as propostas de custo aguardam decisão.
- A contingência não pode ser desenhada como regra aprovada sem especificação que a defina.
