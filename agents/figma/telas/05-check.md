# 05 — CHECK

## 1. Objetivo e fluxo

Etapa CHECK. A tela aparece depois que um projeto foi confirmado e os eventos da semana foram resolvidos. Deve ajudar a pessoa a conferir o que aconteceu, entender as mudanças na operação e seguir para ACT.

Esta entrega é um mockup visual para revisão. Não conecte a uma partida nem apresente dados ilustrativos como estado real.

Fluxo vigente: DO → CHECK → ACT. A ação principal representa a continuação para ACT, sem simular uma transição funcional no mockup.

## 2. Fontes e regras

- `agents/spec.md`: eventos semanais, eventos extras, proteções e efeitos.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/figma/README.md` e `agents/figma/MATRIZ-TELAS.md`: contexto visual e de fluxo.
- `agents/game_design.md`: contexto educativo; hipóteses não alteram regras vigentes.

Regras para esta tela:

- Mostrar o projeto executado, o evento da semana e um evento extra, com resultado, efeito e proteção aplicável.
- Eventos semanais oficiais: semana 1, Máquina parada (+6 p.p. em atrasos); semana 2, Pico de pedidos (+4 p.p.); semana 3, Falta de insumos (+5 p.p.); semana 4, Auditoria de qualidade (−7 p.p. em qualidade).
- Proteções dos eventos semanais: manutenção preventiva, reorganizar a separação, trocar fornecedor e controle de qualidade, respectivamente, quando usados antes ou executados na semana, conforme `agents/spec.md`.
- O evento extra da semana é definido pela partida. Mostrar o resultado e seu efeito conforme o estado de exemplo escolhido para o mockup.
- Proteções de controle de qualidade e manutenção preventiva impedem os efeitos prejudiciais dos eventos correspondentes, independentemente do sorteio.
- A chance favorável dos eventos extras depende do multiplicador de sorte, entre 0,50× e 1,50×; o resultado complementar totaliza 100%. Não inventar sorte nem apresentar uma probabilidade ajustada como dado real.
- Economia inesperada pode acrescentar +5 MoedACTAs no resultado favorável; resultado complementar não altera o saldo.
- Não exibir placar rival, ranking ou comparação de pontuação.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Adaptar a composição a larguras intermediárias, preservando ordem de leitura e sem overflow horizontal.
- Mostrar resumo, indicadores, eventos, registro essencial e CTA nos frames sem rolagem vertical ou horizontal.
- O histórico deve ser compacto e visível; não depender de rolagem para revelar informação necessária.

## 4. Conceito visual e composição

Uma tela de conferência da operação, com os efeitos da semana em foco e os eventos explicados de forma direta. Manter a identidade ACTA do jogo e usar CATO como guia curto. A tela deve apoiar a decisão seguinte sem parecer um dashboard analítico.

Composição desktop:

1. Marca ACTA Experience, identificação “Operação Resgate”, etapa CHECK destacada no ciclo PDCA e semana.
2. Título “Confira os resultados”.
3. Cards separados de Atrasos, Qualidade, Moral e Saldo, com valores de referência do estado mockado.
4. Resumo do projeto aplicado e dos efeitos resultantes.
5. Evento da semana e evento extra, cada um com resultado, efeito e proteção em texto.
6. Registro compacto da semana e orientação do CATO.
7. CTA “Revisar e avançar”.

Composição mobile: título e semana primeiro; indicadores em grade compacta de cards independentes; evento da semana e evento extra em sequência; registro essencial e CTA ao final, todos visíveis no frame.

## 5. Conteúdo

Usar estes textos:

- Título: **“Confira os resultados”**.
- Seções: “Projeto aplicado”, “Evento da semana”, “Evento extra”, “Proteção” e “Registro da semana”.
- Registro: evento, resultado favorável ou complementar, efeito numérico e proteção aplicada ou não aplicada.
- Exemplo de resultado favorável de Economia inesperada: “Saldo +5 MoedACTAs”.
- Ajuda: “Os resultados são determinados pela partida; confira o que mudou antes de decidir o próximo passo.”
- CATO: uma orientação curta para observar o resultado antes do próximo ajuste.
- CTA principal: **“Revisar e avançar”**.

Para compor o mockup, use uma combinação de eventos e valores coerente com as regras e identifique os dados como **exemplo visual**. Não os apresente como resultado de uma partida real. Não invente eventos, custos, efeitos ou indicadores.

## 6. Hierarquia

1. Mudanças nos indicadores, com valores antes/depois quando disponíveis no exemplo visual.
2. Projeto aplicado e efeito observado.
3. Evento da semana e evento extra, com resultado, efeito e proteção.
4. Registro compacto da semana.
5. Orientação do CATO e CTA para ACT.

Chance é contexto probabilístico e resultado é o que ocorreu; mantenha os dois conceitos distintos quando a chance estiver disponível. Moral é contextual e não deve parecer critério de vitória.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Apresentar Atrasos, Qualidade, Moral e Saldo em quatro cards separados, não em uma faixa contínua.
- Usar a moeda local `../../moedacta.svg` junto aos valores de saldo e ganho. Manter pequenas moedas estáticas junto a valores monetários; se houver moeda animada, restringi-la ao card de Saldo. Respeitar `prefers-reduced-motion`.
- Reutilizar marca, CATO e assets locais sem distorcer proporções ou depender de rede.
- Usar cores semânticas acompanhadas por rótulos de texto para resultado e proteção.

## 8. Interação

Esta entrega é um mockup visual, sem integração com domínio ou controller. Mostrar “Revisar e avançar” como CTA visual; não afirmar que atualiza ou preserva o estado da partida.

O resultado do evento deve aparecer como estado já resolvido. Não simular novo sorteio, rerrolagem, carregamento ou mudança de valores ao interagir com o mockup. Detalhes que possam ser recolhidos devem permanecer acessíveis por teclado e não esconder o resultado principal.

## 9. Acessibilidade e responsividade

- Usar um único `h1` e ordem de leitura causa → resultado → efeito → proteção.
- Escrever valores com unidades, como “p.p.” para variações percentuais e “MoedACTAs” para saldo.
- Anunciar mudanças em texto; não depender apenas de cor ou ícone para indicar resultado ou proteção.
- Garantir contraste adequado, foco visível, alvos de toque de pelo menos 44×44 px e ordem de teclado coerente se houver controles interativos.
- Respeitar `prefers-reduced-motion`.
- Nos frames de referência, manter todos os blocos sem cortes ou rolagem; em telas estreitas, reorganizar sem overflow horizontal.

## 10. Critérios de aceite

- Projeto aplicado, evento semanal e evento extra aparecem com resultado, efeito e proteção aplicável.
- Eventos, probabilidades e efeitos correspondem a `agents/spec.md`; exemplos estão identificados como mockup.
- Economia inesperada favorável representa ganho de +5 MoedACTAs.
- Atrasos, Qualidade, Moral e Saldo são cards separados; moeda e movimento seguem as orientações visuais do projeto.
- Moral aparece como contexto; não há placar rival nem comparação de pontuação.
- O CTA indica continuação para ACT sem fingir navegação funcional.
- Desktop e mobile cabem nos frames sem scroll ou conteúdo cortado e preservam legibilidade e acessibilidade.
