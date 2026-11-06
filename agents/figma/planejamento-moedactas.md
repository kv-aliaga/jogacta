# Planejamento de gasto de MoedACTAs

Documento de planejamento para telas e fluxo do ACTA Experience — Operação Resgate. A regra proposta é: o saldo começa em 100 MoedACTAs; toda ação de jogo que o jogador executa tem custo; saldo só diminui e nunca aumenta. Custos e fluxo abaixo são proposta de design e ainda não substituem `agents/spec.md`.

## Objetivo de design

Fazer o saldo representar escolhas reais ao longo das quatro semanas. O jogador deve conseguir concluir a partida mesmo quando gastar com ações opcionais, mas não deve poder comprar todas as vantagens: planejar auditorias, executar projetos e decidir no ACT exige priorização. O saldo não pode ficar negativo e o jogo não concede MoedACTAs por eventos, bônus, pontuação ou devoluções.

## Orçamento recomendado

Cada semana tem uma ação essencial de projeto e ações opcionais de planejamento e melhoria contínua. Uma estratégia equilibrada que usa auditorias em duas semanas e o ACT mais barato em todas termina com 2 MoedACTAs. Isso cria pressão sem exigir uma recompensa aleatória para fechar a conta.

| Ação | Custo proposto | Frequência | Total no plano de referência |
|---|---:|---:|---:|
| Projeto semanal | conforme tabela (8–35) | 1 por semana | 72 |
| Auditoria de setor | 5 | até 1 por semana | 10 (2 auditorias) |
| Revisar no ACT | 4 | 1 por semana | 16 |
| **Total** |  |  | **98 de 100** |

O plano de referência usa `rush` (8), `inspect` (18), `maintenance` (16) e `supplier` (14), totalizando 56; para alcançar o total ilustrativo de projeto 72, recomenda-se `routes` (23), `inspect` (18), `maintenance` (16) e `supplier` (14), total 71. Com duas auditorias (10) e quatro revisões (16), gasta 97 e termina com 3. O total da tabela deve ser lido como faixa-alvo, não como combinação fixa. A estratégia e a tabela são ajustadas na seção abaixo para evitar contradição.

### Combinação demonstrativa válida

| Semana | Projeto | Custo | Auditoria | ACT | Gasto da semana | Saldo |
|---|---|---:|---:|---:|---:|---:|
| Inicial | — | — | — | — | — | 100 |
| 1 | `rush` | 8 | 5 | Revisar 4 | 17 | 83 |
| 2 | `inspect` | 18 | — | Revisar 4 | 22 | 61 |
| 3 | `maintenance` | 16 | 5 | Revisar 4 | 25 | 36 |
| 4 | `supplier` | 14 | — | Revisar 4 | 18 | 18 |

Essa combinação termina com 18, portanto permite uma ação opcional adicional ou projetos mais caros em semanas futuras. O sistema deve ensinar o custo antes da confirmação, sem prometer que uma combinação específica garante vitória.

## Custos por fase

### PLAN

- Auditar um setor: **5 MoedACTAs**, uma vez por semana.
- A auditoria revela diagnóstico e mantém os efeitos educativos já definidos (bônus de pontuação e benefício quando o projeto combina).
- Avançar sem auditoria não custa. É uma decisão de economizar.
- Se o saldo for menor que 5, a auditoria aparece desabilitada com explicação do saldo necessário.

### DO

- Um projeto obrigatório por semana, pago ao confirmar a execução.
- Manter os custos atuais como base inicial: `flow` 24, `scanner` 25, `routes` 23, `staff` 35, `inspect` 18, `rush` 8, `promo` 13, `maintenance` 16, `supplier` 14.
- Não cobrar ao abrir detalhes nem ao selecionar. Cobrar apenas no botão de confirmação; cancelar não altera saldo nem indicadores.
- Projeto indisponível por já ter sido usado continua marcado como usado. Projeto fora do orçamento é desabilitado, com custo e saldo faltante visíveis.

### ACT

- **Revisar:** 4 MoedACTAs; concede o bônus atual de +3 pontos.
- **Padronizar:** 8 MoedACTAs; preserva a regra atual de +14 quando a redução de atrasos atinge 5 pontos, ou −8 caso contrário.
- O custo é aplicado só quando a escolha é confirmada. O usuário vê custo, efeito em pontos e saldo restante antes de decidir.
- ACT é obrigatório. Se não houver saldo para nenhuma decisão, oferecer uma escolha de contingência gratuita chamada “Encerrar sem padronizar”, que avança com 0 pontos de ACT e registra a falta de orçamento. Não permitir saldo negativo nem travar a partida.

## Regra sem ganhos de moeda

- Remover o resultado “Economia inesperada: +5 MoedACTAs” dos eventos extras. Substituir por efeito neutro (sem alteração) ou outro evento sem recompensa monetária, a balancear.
- Nenhum evento, diagnóstico, projeto, decisão ACT, conquista ou resultado final adiciona MoedACTAs.
- Não devolver custo por efeito protegido, cancelamento após confirmação, falha de projeto ou término antecipado. Cancelamento anterior à confirmação não cobra.
- O histórico registra cada débito com semana, ação, custo e saldo após a ação. Saldo permanece inteiro no intervalo de 0 a 100.

## Telas e componentes a planejar no Figma

1. **Início:** informar “100 MoedACTAs para 4 semanas” e explicar que ações consomem saldo.
2. **PLAN:** cartão de saldo sempre visível; auditoria com preço de 5, estado disponível/indisponível e confirmação; alternativa “Seguir sem auditar”.
3. **DO — catálogo:** preço destacado em cada projeto, saldo atual e saldo após compra. Projetos que excedem saldo com estado desabilitado e texto explicativo.
4. **DO — confirmação:** nome do projeto, custo, efeitos conhecidos e saldo restante. Ações “Confirmar projeto” e “Voltar sem gastar”.
5. **CHECK:** resumo dos débitos da semana separado dos efeitos operacionais; saldo atualizado e histórico cumulativo.
6. **ACT:** duas opções com custo e saldo resultante; contingência explícita caso saldo insuficiente.
7. **Fim:** total gasto, saldo final, distribuição por categoria e aviso de que moeda não foi ganha durante a partida.

## Apresentação persistente do saldo

- Manter MoedACTAs e o ícone da moeda no cabeçalho em todas as fases da partida.
- Exibir formato consistente, por exemplo **Saldo: 63 MoedACTAs**.
- Em ações de gasto, mostrar juntos: custo, saldo atual e saldo após confirmar.
- Usar texto e ícone além de cor; não comunicar insuficiência só em vermelho.
- Animação de débito curta, com suporte a `prefers-reduced-motion`.

## Questões de balanceamento para resolver antes de implementar

- Custos de ACT são novos e precisam ser incorporados à regra de vitória e à economia dos projetos.
- Como o projeto custa 8–35 por semana, o custo obrigatório dos quatro projetos varia de 32 a 140. Logo, alguns percursos podem ficar sem saldo para semanas posteriores se projetos caros forem escolhidos. Definir se projetos de custo alto serão recalibrados, se haverá mínimo de orçamento garantido, ou se a partida pode bloquear a escolha de projeto ainda obrigatória.
- Escolher se o orçamento precisa terminar estritamente positivo, ou se saldo zero é permitido (a especificação atual permite orçamento ≥0).
- Fazer simulações de combinações para garantir que há percurso viável até o fim sem ganhos monetários e sem violar as condições de vitória.
- Atualizar `agents/spec.md`, cenário, motor, reducer, telas e testes somente depois de aprovar este planejamento de design.

## Princípio de experiência

Antes de cada gasto, o jogador deve conseguir responder: “Quanto custa?”, “Quanto vai sobrar?” e “O que ganho ou arrisco?”. O jogo pode pressionar o orçamento, mas deve sempre explicar por que uma ação está indisponível e preservar um caminho para concluir as quatro semanas.
