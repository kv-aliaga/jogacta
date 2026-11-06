# 09 — ACTA Bridge

## 1. Objetivo e fluxo

Etapa ACTA_BRIDGE. É a tela de encerramento educativo após END, tanto para vitória quanto para derrota. Deve conectar a experiência da fábrica ao ciclo de melhoria contínua do ACTA e oferecer um caminho claro de retorno.

Esta entrega é uma tela mockada para revisão visual. Não conecte a uma partida nem apresente dados de sessão inventados como reais.

Fluxo vigente: END → ACTA_BRIDGE → HOME. “Voltar à Home” retorna à abertura; “Jogar novamente” representa a intenção de iniciar uma nova demonstração a partir da HOME.

## 2. Fontes e regras

- `agents/spec.md`: fluxo END → ACTA_BRIDGE → HOME e escopo da demonstração.
- `agents/DESIGN_SYSTEM.md`: identidade visual, tipografia, cores semânticas e acessibilidade.
- `agents/game_design.md`: contexto educativo; hipóteses não alteram regras vigentes.

Regras para esta tela:

- Apresentar uma reflexão breve sobre as decisões tomadas e relacioná-las ao ciclo PLAN → DO → CHECK → ACT.
- O aprendizado é uma oportunidade de reflexão; a tela não mede nem certifica aprendizado individual.
- A ponte pode vir de vitória ou derrota. Quando mostrar o resultado de origem, usar apenas a condição recebida: “Operação resgatada!” ou “A operação precisa de outra tentativa”.
- Não exibir placar rival, comparação de pontuação, ranking, chance de vitória, recompensa ou promessa de resultado.
- Não adicionar login, conta, envio de dados, rede ou dependência de uma ponte externa para visualizar o mockup.

## 3. Frames

- Desktop: 1440×1024.
- Mobile: 440×956.
- Adaptar a composição a larguras intermediárias, preservando ordem de leitura e sem overflow horizontal.
- Manter reflexão e ações principais visíveis no frame mobile sem rolagem.

## 4. Conceito visual e composição

Uma transição acolhedora entre a simulação e o ACTA. Reaproveitar a linguagem de missão da HOME — marca, superfícies claras, ciano/azul e CATO — agora com foco na reflexão e no ciclo de melhoria. A tela deve parecer uma conclusão breve da experiência, não um dashboard nem uma página corporativa carregada.

Composição desktop:

1. Marca ACTA Experience e identificação discreta “Operação Resgate”.
2. Título e pergunta de reflexão em destaque.
3. Ilustração ou composição local que conecte a fábrica ao ciclo PDCA.
4. Bloco curto que relaciona Planejar, Executar, Conferir e Ajustar.
5. Fala contextual do CATO.
6. CTA “Voltar à Home” e ação secundária “Jogar novamente”.

Composição mobile: título e pergunta primeiro; ciclo em seguida, compacto e legível; CATO e as duas ações ao final, com a ação principal visualmente dominante. Não exigir rolagem no frame de referência.

Não usar navegação lateral, gráficos, painéis de progresso ou mosaico de indicadores. Não criar tela de login ou formulário de contato.

## 5. Conteúdo

Usar estes textos:

- Identificação: “ACTA Experience” e “Operação Resgate”.
- Título: **“Da simulação para a operação”**.
- Pergunta: **“Que decisão mais ajudou — ou dificultou — a recuperação?”**
- Bloco educativo: relacionar planejamento, ação, verificação e ajuste ao ciclo PDCA, em texto curto.
- CATO: “Na operação real, observar o resultado ajuda a escolher o próximo ajuste.”
- CTA principal: **“Voltar à Home”**.
- Ação secundária: **“Jogar novamente”**.
- Se incluir contexto de resultado, usar apenas o ramo recebido: “Operação resgatada!” ou “A operação precisa de outra tentativa”.

Evitar parágrafos longos, resumo de regras, dados numéricos não fornecidos e chamadas concorrentes.

## 6. Hierarquia

1. Pergunta de reflexão.
2. Relação simples entre as decisões da simulação e o ciclo PDCA.
3. CATO como apoio contextual.
4. Retorno à HOME como ação principal e opção de jogar novamente como alternativa.
5. Resultado de origem apenas como contexto discreto, quando estiver disponível.

## 7. Componentes e tokens

- Usar Plus Jakarta Sans e tokens semânticos documentados em `agents/DESIGN_SYSTEM.md`.
- Aplicar superfícies claras, acentos ACTA, espaçamentos e raios do sistema.
- Reutilizar marca, CATO e assets locais sem distorcer proporções; não depender de rede.
- Manter poucos elementos e uma superfície principal expressiva, em continuidade com a HOME.
- Não criar componentes de KPI, saldo ou placar.

## 8. Interação

Esta tela é mockada para revisão visual. Apresentar “Voltar à Home” e “Jogar novamente” como ações visuais claras. Não afirmar que navegam ou reiniciam uma partida quando não há integração implementada.

Se o mockup representar uma confirmação para “Jogar novamente”, mostrar “Iniciar uma nova demonstração?” e as ações “Jogar novamente” e “Cancelar”. A confirmação é apenas um estado visual do protótipo; não simular persistência, descarte de dados ou criação de uma partida real.

## 9. Acessibilidade e responsividade

- Usar um único `h1` e uma ordem de leitura igual à hierarquia visual.
- Relacionar o ciclo PDCA por texto, sem depender somente de cor, posição ou ícone.
- Garantir contraste adequado, foco visível, alvos de toque de pelo menos 44×44 px e ordem de teclado coerente se houver controles interativos.
- Respeitar `prefers-reduced-motion`; animações devem ser dispensáveis e não esconder conteúdo.
- Em telas estreitas, empilhar os blocos sem cortes nem rolagem horizontal.

## 10. Critérios de aceite

- A tela comunica a passagem da simulação para uma reflexão sobre o trabalho real.
- A pergunta, o ciclo PDCA e a orientação do CATO são compreensíveis sem texto longo.
- Vitória ou derrota podem contextualizar a origem sem mostrar placares ou dados inventados.
- “Voltar à Home” é visualmente a ação principal e “Jogar novamente” é uma alternativa inequívoca.
- A composição mantém a identidade e a semântica da HOME, sem aparência de dashboard.
- Desktop e mobile preservam hierarquia, legibilidade, acessibilidade e enquadramento.
