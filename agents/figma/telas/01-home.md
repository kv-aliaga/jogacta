# 01 — Home

## 1. Objetivo e fluxo

Etapa HOME. Esta é a primeira tela da experiência: deve despertar curiosidade, apresentar a missão em poucos segundos e deixar claro o que a pessoa fará antes de começar. O produto é um pequeno site de demonstração para ajudar clientes a entenderem o projeto; não é uma aplicação robusta com sessões ou persistência. A home não é um dashboard e não exibe placar, ranking ou KPIs em cards.

Fluxo de entrada: abertura do jogo ou retorno da ACTA Bridge. A ação principal inicia uma nova partida e leva a PLAN, semana 1. Atualizar a página (F5) reinicia a experiência desde o início; isso é esperado para esta demonstração. Não há sessão, salvamento ou retomada entre carregamentos. A home também pode ser acessada pelo fluxo de retorno da ACTA Bridge, conforme a navegação do jogo.

## 2. Fontes e regras

- `agents/spec.md`: fluxo HOME → PLAN, quatro semanas, ciclo PLAN → DO → CHECK → ACT, condições e estado inicial.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/game_design.md`: contexto educativo; hipóteses desse documento não alteram regras vigentes.

Regras para esta tela:

- Apresentar o desafio de administrar uma fábrica por quatro semanas e melhorar a operação usando o ciclo PDCA.
- Não mostrar placar do jogador ou rival, estrelas, chance de vitória, ranking ou qualquer promessa de resultado.
- Não transformar atrasos, qualidade, moral e saldo em uma grade de cards. Os indicadores pertencem às telas de jogo, onde orientam decisões.
- Os cards de indicadores devem aparecer nas próximas telas do jogo, a partir do PLAN, e não na home.
- Não adicionar login, rede, backend, seleção de dificuldade ou escolha de partida.
- Não expor semente, sorte ou eventos aleatórios antes do início.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Projetar também o comportamento fluido em larguras intermediárias; os frames são referências, não breakpoints.

## 4. Conceito visual e composição

Uma abertura de missão com personalidade: mostrar a fábrica em recuperação como foco visual, com sinais simples de operação — esteira, caixas e uma área voltando a funcionar — e o CATO como guia próximo da ação. Usar ilustração/asset local existente ou composição feita com elementos já disponíveis; não depender de imagem remota. A arte deve reforçar “resgate da operação”, sem sugerir desastre, urgência punitiva ou resultado garantido.

Composição desktop:

1. Marca ACTA Experience e identificação discreta “Operação Resgate”.
2. Área principal em duas colunas: missão e CTA à esquerda; ilustração da fábrica à direita.
3. Faixa curta de explicação do ciclo com quatro etapas conectadas: **Planeje → Execute → Confira → Ajuste**.
4. Uma frase contextual do CATO, próxima do CTA ou da ilustração.

Composição mobile: título e frase da missão primeiro, ilustração em seguida, ciclo em uma faixa compacta legível e CTA em destaque. O botão deve aparecer sem exigir rolagem no frame de referência. O CATO pode ficar junto da explicação, sem competir com o botão.

Não usar navegação lateral, cabeçalho de dashboard, mosaico de cartões, gráficos, painel de progresso de partida ou decoração que pareça uma tela interna do jogo.

## 5. Conteúdo

Conteúdo sugerido, curto e direto:

- Identificação: “ACTA Experience”
- Título: **“Sua missão: colocar a fábrica de volta nos trilhos.”**
- Apoio: “Durante quatro semanas, planeje mudanças, veja o que funciona e ajuste a operação.”
- Ciclo visual: “Planeje · Execute · Confira · Ajuste”
- CTA principal: **“Começar missão”**
- CATO: “Eu acompanho você em cada etapa. Vamos começar pelo plano?”

Evitar parágrafos explicativos, tutorial extenso, resumo de regras e múltiplas chamadas concorrentes. A informação de que a partida dura quatro semanas deve estar visível antes do CTA, sem depender de tooltip.

## 6. Hierarquia

1. Missão em título grande.
2. Uma frase que explica a experiência e a duração.
3. CTA “Começar missão”.
4. Ilustração da fábrica e ciclo PDCA, que tornam a proposta compreensível visualmente.
5. CATO como orientação breve.

O ciclo pode ter tratamento visual destacado, mas não deve competir com título e CTA. Não exibir semana, saldo, atrasos, qualidade, moral ou pontos na home; os valores iniciais são apresentados quando a pessoa entra no PLAN.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e estilos/tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Priorizar uma superfície principal expressiva, espaços amplos e poucos elementos; seguir medidas e raios documentados.
- Reutilizar o botão primário e os elementos visuais de marca/CATO disponíveis no projeto.
- Não criar componentes de KPI, saldo ou placar para esta tela.
- Manter ilustração e demais assets locais, com fallback quando aplicável.

## 8. Interação

- CTA principal inicia uma partida demonstrativa do zero conforme o fluxo definido no controller e abre PLAN da semana 1.
- Enter e Espaço ativam o CTA; foco, hover e pressionado têm estados visíveis.
- Não simular carregamento nem introduzir passos intermediários sem regra de jogo.
- Se a home reaparecer após a ACTA Bridge, “Começar missão” inicia uma nova partida demonstrativa do zero.
- Elementos decorativos não são controles. A ilustração recebe descrição acessível se transmitir informação; se for puramente decorativa, deve ser ignorada por leitores de tela.

## 9. Acessibilidade e responsividade

- Um único `h1`, ordem de leitura igual à hierarquia visual e CTA com nome acessível “Começar missão”.
- Contraste adequado para texto e controles; não transmitir etapa apenas por cor.
- Alvo de toque mínimo de 44×44 px no mobile, foco visível e navegação por teclado.
- Respeitar `prefers-reduced-motion`; animações da fábrica ou do CATO devem ser dispensáveis e não esconder conteúdo.
- Em telas estreitas, empilhar conteúdo sem cortar a ilustração, o ciclo ou a ação principal. Evitar rolagem horizontal.

## 10. Critérios de aceite

- A primeira impressão comunica a missão de recuperar a operação e que a experiência dura quatro semanas.
- O ciclo Planeje → Execute → Confira → Ajuste explica o que a pessoa fará sem texto longo.
- Há um CTA principal claro que inicia a semana 1.
- A tela tem um foco visual de missão, não aparência de dashboard.
- Não há placar, ranking, KPIs em cards, saldo ou indicadores operacionais na home.
- Não há promessa de salvar/retomar sem suporte real no fluxo.
- Recarregar a página com F5 reinicia a demonstração; não é necessário implementar sessão nem persistência.
- Os cards com atrasos, qualidade, moral e saldo são apresentados nas telas subsequentes, onde apoiam as decisões do jogo.
- Desktop e mobile preservam a hierarquia, legibilidade, acessibilidade e visibilidade do CTA.
- Nenhuma informação ou asset exige conexão de rede para abrir a tela ou iniciar uma partida.
