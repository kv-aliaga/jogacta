# 08 — END: derrota

## 1. Objetivo e fluxo

Etapa END, ramo de derrota. Crie uma tela mockada de encerramento para mostrar como será a conclusão de uma operação que não atingiu todas as metas. A tela deve explicar o resultado sem culpabilizar a pessoa e oferecer um próximo passo claro.

Esta entrega é uma composição visual para revisão. Não conecte a uma partida, não invente um placar rival e não simule dados de uma sessão real.

## 2. Fontes e regras

- `agents/spec.md`: condições oficiais de vitória, estrelas e fluxo END → ACTA Bridge → HOME.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/game_design.md`: contexto educativo; não altera as regras vigentes.

Vitória exige simultaneamente, ao fim da semana 4: atrasos ≤12%, qualidade ≥75%, saldo ≥0 e pontuação do jogador maior que a do rival. Falhar em qualquer uma dessas condições resulta em derrota. Moral é indicador contextual, não decide o resultado. Derrota concede 0 estrelas.

Não exiba placar rival nem comparação de pontuação. A condição de pontuação continua valendo para o resultado oficial, mas não precisa ser exposta nesta composição mockada. Não apresente dados inventados como dados reais.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Adaptar a composição a larguras intermediárias, preservando ordem de leitura e sem overflow horizontal.
- Manter resultado, critérios principais e ação de reinício visíveis no frame mobile sem rolagem.

## 4. Conceito visual e composição

Uma tela de encerramento respeitosa e orientada a aprendizado. A fábrica pode aparecer em uma ilustração de operação ainda em ajuste, sem transmitir catástrofe ou punição. CATO atua como guia próximo, reconhecendo que há pontos a rever e convidando a tentar novamente.

Composição desktop:

1. Marca ACTA Experience e identificação discreta “Operação Resgate”.
2. Resultado e mensagem de apoio em destaque.
3. Critérios operacionais: atrasos, qualidade e saldo, com alvo, valor final mockado e estado textual atingido/não atingido.
4. Moral separada, rotulada “Indicador de contexto”.
5. CTA principal “Reiniciar operação” e ação secundária “Rever resultados”.

Composição mobile: título e explicação primeiro; critérios em lista compacta e legível; ação principal em destaque. “Rever resultados” pode abrir um resumo recolhível.

A tela é uma conclusão de missão, não um dashboard. Não usar navegação lateral, gráficos ou placares.

## 5. Conteúdo

Usar estes textos:

- Identificação: “ACTA Experience” e “Operação Resgate”.
- Título: **“A operação precisa de outra tentativa”**.
- Apoio: “Confira quais metas ficaram fora do objetivo.”
- Resultado: derrota, anunciado também em texto.
- Estrelas: “0 estrelas”.
- Critérios operacionais: atrasos ≤12%, qualidade ≥75% e saldo ≥0, cada qual com rótulo, alvo, valor final e estado atingido/não atingido.
- Moral: “Indicador de contexto”.
- CATO: orientação curta, respeitosa e sem culpabilizar.
- CTA principal: **“Reiniciar operação”**.
- Ação secundária: “Rever resultados”.
- Confirmação visual do reinício: “Reiniciar operação?” com ações “Reiniciar” e “Cancelar”.

Não mostrar placar rival, ranking, chance de vitória ou informação de sessão. Não acrescentar indicadores.

## 6. Hierarquia

1. Resultado de derrota, com linguagem respeitosa.
2. Critérios operacionais que mostram o que ficou fora do alvo.
3. CTA para reiniciar.
4. Resumo opcional e indicador contextual de moral.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Aplicar a semântica de resultado com texto explícito, sem depender apenas de cor ou ícone.
- Usar superfícies claras, acentos ciano/azul, raios e espaçamentos definidos pelo sistema.
- Priorizar marca, CATO e ilustrações locais. Não depender de imagens ou fontes remotas.
- Se exibir saldo, usar o asset local de MoedACTA e manter o valor em texto acessível.

## 8. Interação

Esta tela é mockada para revisão visual. Mostrar reinício, cancelamento e revisão como affordances visuais; não afirmar que controlam ou reiniciam uma partida real quando não há integração disponível. A confirmação pode ser representada como estado visual do diálogo, com Cancelar retornando ao resumo.

Não simular uma partida nova, atualização de indicadores ou retorno funcional à HOME.

## 9. Acessibilidade e responsividade

- Usar um único `h1` e ordem de leitura igual à hierarquia visual.
- Anunciar derrota, 0 estrelas e estado de cada critério em texto.
- Identificar moral como contexto, sem símbolo ambíguo.
- Se houver diálogo interativo, usar semântica de diálogo, nome acessível, foco contido enquanto aberto, Escape para cancelar e foco restaurado ao fechar.
- Garantir contraste adequado, foco visível, alvos de toque de pelo menos 44×44 px e navegação por teclado.
- Respeitar `prefers-reduced-motion`.
- Manter conteúdo e ações sem cortes nos frames de referência.

## 10. Critérios de aceite

- A tela comunica derrota sem tom punitivo e explica que metas devem ser revistas.
- Exibe 0 estrelas e os alvos oficiais de atrasos, qualidade e saldo.
- Moral está claramente fora dos critérios do resultado.
- Não há placar rival, ranking ou indicadores adicionais.
- Reinício é a ação principal e a confirmação visual inclui Cancelar, sem alegar funcionalidade inexistente.
- Desktop e mobile preservam hierarquia, legibilidade, acessibilidade e enquadramento.
