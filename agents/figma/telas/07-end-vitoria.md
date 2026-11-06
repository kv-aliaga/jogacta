# 07 — END: vitória

## 1. Objetivo e fluxo

Etapa END, ramo de vitória. Crie uma tela mockada de encerramento para mostrar como será a conclusão de uma operação bem-sucedida. A tela deve celebrar a recuperação da fábrica, comunicar o resultado com clareza e encaminhar a pessoa à ACTA Bridge.

Esta entrega é uma composição visual para revisão. Não conecte a uma partida, não invente um placar rival e não simule dados de uma sessão real.

## 2. Fontes e regras

- `agents/spec.md`: condições oficiais de vitória, estrelas e fluxo END → ACTA Bridge → HOME.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/game_design.md`: contexto educativo; não altera as regras vigentes.

Vitória exige simultaneamente, ao fim da semana 4: atrasos ≤12%, qualidade ≥75%, saldo ≥0 e pontuação do jogador maior que a do rival. Moral é indicador contextual, não condição de vitória. Estrelas: 3 com pontuação ≥155; 2 com pontuação ≥118; 1 nas demais vitórias válidas.

Não exiba placar rival nem comparação de pontuação. A condição de pontuação continua valendo para o resultado oficial, mas não precisa ser exposta nesta composição mockada. Apresente dados inventados.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Adaptar a composição a larguras intermediárias, preservando ordem de leitura e sem overflow horizontal.
- Manter o resultado e a ação principal visíveis no frame mobile sem rolagem.

## 4. Conceito visual e composição

Uma tela de conclusão positiva, acolhedora e confiante, com a fábrica em funcionamento como sinal visual de recuperação. Usar assets locais de marca e CATO quando disponíveis, sem distorcer suas proporções. CATO acompanha o resultado como guia, sem competir com a mensagem de vitória.

Composição desktop:

1. Marca ACTA Experience e identificação discreta “Operação Resgate”.
2. Área principal com resultado e estrelas em destaque, junto a uma ilustração de fábrica recuperada.
3. Resumo curto dos critérios operacionais: atrasos, qualidade e saldo, com alvo e estado legíveis.
4. Moral apresentada separadamente como “Indicador de contexto”.
5. CTA principal para continuar à ACTA Bridge; ação secundária para abrir o resumo da operação.

Composição mobile: resultado e estrelas primeiro; critérios em seguida; CTA principal destacado e visível no frame. O resumo secundário pode ser recolhível, sem ocultar informação necessária para compreender a vitória.

A tela é uma conclusão de missão, não uma área interna de jogo nem um dashboard. Não usar navegação lateral, painéis de progresso, gráficos ou placares.

## 5. Conteúdo

Usar estes textos:

- Identificação: “ACTA Experience” e “Operação Resgate”.
- Título: **“Operação resgatada!”**
- Apoio: “Você cumpriu as metas da semana 4.”
- Resultado: vitória, anunciado também em texto.
- Estrelas: quantidade correspondente à faixa oficial da pontuação final; na imagem mockada, não inventar ou exibir uma pontuação para justificar a quantidade.
- Critérios operacionais: atrasos ≤12%, qualidade ≥75% e saldo ≥0, cada qual com rótulo, alvo e estado aprovado.
- Moral: “Indicador de contexto”.
- CATO: frase breve de reconhecimento e orientação, sem promessa de resultado futuro.
- CTA principal: **“Continuar para a ACTA Bridge”**.
- Ação secundária: “Ver resumo”.

Não mostrar placar rival, ranking, chance de vitória ou informação de sessão. Não acrescentar novos indicadores.

## 6. Hierarquia

1. Resultado de vitória.
2. Estrelas como reconhecimento da pontuação final.
3. Critérios operacionais que ajudam a compreender o encerramento.
4. CTA para ACTA Bridge.
5. Resumo opcional e indicador de moral em papel contextual.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Aplicar a semântica de sucesso com texto explícito, sem depender apenas de cor ou ícone.
- Usar superfícies claras, acentos ciano/azul, raios e espaçamentos definidos pelo sistema.
- Priorizar marca, CATO e ilustrações locais. Não depender de imagens ou fontes remotas.
- Se exibir saldo, usar o asset local de MoedACTA e manter o valor em texto acessível.

## 8. Interação

Esta tela é mockada para revisão visual. Mostrar o CTA e a ação secundária com aparência de controles, sem afirmar que navegam ou abrem dados reais quando não há integração disponível. “Ver resumo” pode ser representado como conteúdo recolhível no mockup.

Não simular uma partida, carregamento, atualização de pontuação ou retorno real à ACTA Bridge.

## 9. Acessibilidade e responsividade

- Usar um único `h1` e ordem de leitura igual à hierarquia visual.
- Anunciar vitória e estrelas por texto; cada critério deve incluir rótulo, alvo e estado.
- Identificar moral como contexto, sem símbolo ambíguo.
- Garantir contraste adequado, foco visível, alvos de toque de pelo menos 44×44 px e navegação por teclado se os controles forem interativos.
- Respeitar `prefers-reduced-motion`; não usar confete ou movimento necessário para entender a tela.
- Manter textos, ilustração e ação principal sem cortes nos frames de referência.

## 10. Critérios de aceite

- A tela comunica vitória e conclusão da operação em poucos segundos.
- As estrelas seguem as faixas oficiais, sem apresentar placar rival nem pontuação fictícia.
- Atrasos, qualidade e saldo aparecem com alvos e estados corretos; moral está claramente fora das condições de vitória.
- A composição não parece um dashboard e não contém placar rival, ranking ou indicadores adicionais.
- O CTA para ACTA Bridge é a ação principal, sem alegar navegação funcional inexistente.
- Desktop e mobile preservam hierarquia, legibilidade, acessibilidade e enquadramento.
