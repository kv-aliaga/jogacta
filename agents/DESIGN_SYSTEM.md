# Sistema de design do ACTA

> **Status:** inventário baseado no arquivo Figma ACTA e no repositório JogACTA. O Figma descreve a plataforma ACTA; o código disponível implementa somente o minijogo demonstrativo **ACTA Experience — Salve a Fábrica**. Não há neste repositório o frontend corporativo com que validar equivalência de componentes.

## 1. Objetivo, escopo e fontes

Este documento registra a identidade visual, os tokens, a tipografia, os componentes e os padrões de interface observados no ACTA. Deve orientar novas telas, revisões visuais e a evolução do sistema sem transformar exemplos de protótipo em regras de negócio.

| Fonte | Escopo consultado |
| --- | --- |
| [Arquivo Figma ACTA](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1404-6451) | Quatro páginas, seções web/mobile claro e escuro, UI Kit, componentes, variáveis locais, estilos de texto e frames de referência. |
| [README.md](README.md) | Escopo e limites do minijogo, tecnologias, execução, arquitetura declarada e asset de demonstração. |
| [package.json](package.json) | Dependências e scripts disponíveis. |
| [src/styles.css](src/styles.css) | Tipografia, paleta, espaçamentos, estados, responsividade e movimento do minijogo. |
| [src/app/App.tsx](src/app/App.tsx), [src/components/](src/components/) | Telas e componentes implementados para a demonstração. |
| [src/domain/scenario.ts](src/domain/scenario.ts), [src/domain/types.ts](src/domain/types.ts) | Dados fictícios, etapas e ações do jogo. |
| [AGENTS.md](AGENTS.md), [agents/spec.md](agents/spec.md), [agents/spec/](agents/spec/) | Contexto e requisitos do ACTA Experience, não especificação visual da plataforma corporativa. |

**Data da análise:** 4 de novembro de 2026. Foram inspecionadas as páginas ACTA (1404:6451), Web ACTA (1876:21556), Mobile ACTA (1876:21557) e EntregACTA (1689:14565). A última foi considerada apenas contexto documental/acadêmico, não referência visual do produto. As páginas ACTA, Web e Mobile contêm muitos milhares de nós; o inventário priorizou seções de produto, biblioteca de componentes, telas/estados representativos, variáveis e estilos, sem enumerar todos os nós individuais.

**Limitações:** a ferramenta Code Connect informou que requer assento Dev ou Full de Organization/Enterprise, portanto não foi possível consultar mapeamentos oficiais de componentes entre Figma e código. A pasta fornecida não contém .git; não há branch nem git diff disponíveis para comprovar o estado versionado. O repositório atual é o minijogo, não o frontend principal do ACTA.

## 2. Produto e princípios de interface

O ACTA é uma plataforma de apoio à melhoria contínua estruturada no ciclo PDCA: **PLAN → DO → CHECK → ACT**. As páginas do Figma mostram acompanhamento de ciclos, problemas, coleta e análise de dados, metas, planos e tarefas, verificações de resultado, efeitos, aprendizados, formulários, treinamentos, notificações e apoio contextual do CATO.

### Princípios com evidência

- **O ciclo é estrutura de navegação e contexto:** há telas de visão geral e áreas próprias para PLAN, DO, CHECK e ACT, na web e no mobile (páginas Web ACTA e Mobile ACTA).
- **A interface é orientada a dados do ciclo:** telas incluem metas, indicadores, causas, tarefas, resultados e gráficos; há componentes nomeados para essas áreas (UI Kit, seção Gráficos e dados).
- **Há variações por plataforma e tema:** o produto organiza telas web e mobile e mantém grupos claro/escuro.
- **Os estados de interação são modelados:** botões têm variantes de padrão, hover, pressionado, foco, desativado e carregando; campos incluem vazio, preenchido, foco, erro e desativado.
- **CATO é uma experiência do produto:** a página Mobile tem seções CATO - ModoClaro e CATO - ModoEscuro; a página Web tem Cato IA • Claro/Escuro.

Esses padrões indicam consistência e acompanhamento do ciclo. Interpretações sobre prioridades, comportamento de negócio ou estratégia de produto não são tratadas como especificações confirmadas.

## 3. Organização do arquivo Figma

| Página | Conteúdo observado | Referências |
| --- | --- | --- |
| ACTA | Telas V1, áreas ACTA Mobile/Web, apresentação e UI Kit, incluindo seções Design System, Componentes, Recursos Visuais, Hovers e Carrossel de ícones. | [UI Kit](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-49512) · [Design System](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-32944) |
| Web ACTA | WEB V2 - Modo claro e Web V2 - ModoEscuro; cada um tem Login, Home, Perfil, Visões gerais, Plan, Do, Check, Act, Cato IA e formulários/pendências/notificações. | [Home claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2016-35366) · [Plan claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2016-36441) · [Home escuro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2016-48577) |
| Mobile ACTA | MobileV2-ModoClaro e MobileV2-ModoEscuro; grupos de Home/tarefas/ciclos/notificações, Perfil, CATO, Do, Login, Formulários, Visão Geral e Plan, além de estados de validação. | [Home mobile claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2013-29351) · [CATO mobile escuro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2013-32996) · [CATO mobile claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2013-29822) |
| EntregACTA | Requisitos acadêmicos e evidências de disciplinas. Não usar como fonte de estilo da interface ACTA. | [Página EntregACTA](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1689-14565) |

A indicação de V2 como referência atual é uma **inferência** baseada na organização explícita das páginas Web ACTA e Mobile ACTA em variantes V2, em contraste com os grupos V1 da página ACTA. Artefatos V1 continuam úteis como histórico e exemplos, mas não devem prevalecer sobre o sistema V2 sem confirmação de produto.

## 4. Identidade visual e paleta

As variáveis estão organizadas em coleções distintas: ACTA / Primitivas, ACTA / Cores, ACTA / Medidas, além de coleções para interações e prototipagem. A coleção semântica de cores tem os modos Claro e Escuro. Os HEX abaixo foram resolvidos a partir dos aliases das variáveis locais.

### Primitivas de marca

| Token (ACTA / Primitivas) | HEX | Nome registrado |
| --- | --- | --- |
| brand/turquesa | #0AC2CA | Turquesa |
| brand/turquesa-suave | #7ACFD4 | Turquesa suave |
| brand/turquesa-medio | #39A4AA | Turquesa médio |
| brand/turquesa-escuro | #087C86 | Turquesa escuro |
| brand/verde | #44AD84 | Verde |
| brand/azul | #025A8A | Azul |
| brand/act | #04A69E | ACT |
| brand/amarelo | #FFD342 | Amarelo |
| brand/vermelho | #D55144 | Vermelho |
| brand/ciano | #48B3C6 | Ciano |
| neutral/branco | #FFFFFF | Branco |
| neutral/50 | #F5F7F8 | Neutro |
| neutral/100 | #F6F6F6 | Neutro |
| neutral/200 | #D6DCDD | Neutro |
| neutral/500 | #66707A | Neutro |
| neutral/600 | #505B60 | Neutro |
| neutral/700 | #363F43 | Neutro |
| neutral/800 | #2A3033 | Neutro |
| neutral/900 | #202426 | Neutro |
| neutral/950 | #16191A | Neutro |

Os nomes neutral/* são os nomes da coleção; esta tabela não afirma que os tons formem uma escala perceptualmente uniforme. Outros tokens palette/* existem, mas não são expandidos para evitar duplicar a paleta primitiva. Consulte a coleção local antes de introduzir cores.

### Tokens semânticos

| Token (ACTA / Cores) | Função pelo nome | Claro | Escuro |
| --- | --- | --- | --- |
| color/background/canvas | Fundo de canvas | #F5F7F8 | #16191A |
| color/background/page | Fundo de página | #FFFFFF | #202426 |
| color/background/surface | Superfície/card | #FFFFFF | #2A3033 |
| color/background/field | Fundo de campo | #F6F6F6 | #363F43 |
| color/background/subtle | Fundo sutil | #F6F6F6 | #202426 |
| color/background/accent | Fundo de destaque | #E3F7F7 | #304144 |
| color/text/primary | Texto principal | #253132 | #D6DCDD |
| color/text/secondary | Texto secundário | #66707A | #A6B0B4 |
| color/text/accent | Texto de destaque | #087C86 | #7ACFD4 |
| color/text/on-brand | Texto sobre marca | #16191A | #16191A |
| color/text/inverse | Texto inverso | #FFFFFF | #FFFFFF |
| color/text/disabled | Texto desativado | #60777C | #A6B0B4 |
| color/border/default | Borda padrão | #D6DCDD | #505B60 |
| color/border/focus | Borda/foco | #025A8A | #7ACFD4 |
| color/action/primary | Ação primária | #0AC2CA | #0AC2CA |
| color/action/hover | Ação em hover | #39A4AA | #48B3C6 |
| color/action/pressed | Ação pressionada | #087C86 | #087C86 |
| color/action/disabled | Ação desativada | #E2EBED | #363F43 |
| color/action/danger-action | Ação destrutiva | #B83F35 | #B83F35 |
| color/action/danger-hover | Ação destrutiva em hover | #943329 | #943329 |
| color/action/danger-pressed | Ação destrutiva pressionada | #79271F | #79271F |
| color/icon/default | Ícone padrão | #087C86 | #7ACFD4 |
| color/navigation/background | Fundo da navegação | #1F1F1F | #1F1F1F |
| color/navigation/foreground | Primeiro plano da navegação | #A6B0B4 | #A6B0B4 |
| color/status/success | Status de sucesso | #44AD84 | #44AD84 |
| color/status/success-surface | Fundo de sucesso | #E5F5EF | #243F35 |
| color/status/warning | Status de aviso | #FFD342 | #FFD342 |
| color/status/warning-surface | Fundo de aviso | #FFF2C9 | #473C29 |
| color/status/danger | Status de perigo | #D55144 | #D55144 |
| color/status/danger-surface | Fundo de perigo | #FCECE8 | #44302D |
| color/stage/plan | Cor da etapa Plan | #025A8A | #025A8A |
| color/stage/do | Cor da etapa Do | #0AC2CA | #0AC2CA |
| color/stage/check | Cor da etapa Check | #44AD84 | #44AD84 |
| color/stage/act | Cor da etapa Act | #04A69E | #04A69E |
| color/stage/plan/surface | Superfície Plan | #6EADC4 | #327188 |
| color/stage/plan/foreground | Primeiro plano Plan | #003654 | #83CCE9 |
| color/stage/do/surface | Superfície Do | #79D2CF | #39A5A2 |
| color/stage/do/foreground | Primeiro plano Do | #068E94 | #61D0D5 |
| color/stage/check/surface | Superfície Check | #7FCFBE | #3B9B85 |
| color/stage/check/foreground | Primeiro plano Check | #338162 | #7DD7B2 |
| color/stage/act/surface | Superfície Act | #96D6C7 | #50B9B4 |
| color/stage/act/foreground | Primeiro plano Act | #026B66 | #5FD2CA |
| color/track/default | Trilha padrão | #D6DCDD | #363F43 |
| color/track/switch | Trilha/indicador de alternância | #16191A | #16191A |
| color/button/view-all-compact/background | Fundo de botão compacto “ver todos” | #7ACFD4 | #304144 |
| color/button/confirm/background | Fundo de confirmação | #48B3C6 | #39A4AA |
| color/button/google/background | Fundo do botão Google | #FFFFFF | #363F43 |
| color/button/access/background | Fundo de acesso | #44AD84 | #44AD84 |
| color/button/profile-icon/background | Fundo do ícone de perfil | #48B3C6 | #48B3C6 |

Os papéis seguem os nomes dos tokens e a organização da coleção, não uma medição de contraste. A presença de um token de cor não comprova que todas as combinações texto/fundo atendam a critérios de contraste.

## 5. Tipografia

Os estilos nomeados usam **Plus Jakarta Sans**. A tabela registra a hierarquia com valores explícitos na página ACTA, coleção de estilos ACTA/*.

| Estilo Figma | Tamanho | Peso | Line-height | Letter-spacing |
| --- | ---: | --- | ---: | ---: |
| ACTA/Display/Large | 48 px | Bold (700) | 60 px | 0% |
| ACTA/Heading/Large | 32 px | SemiBold (600) | 40 px | 0 px |
| ACTA/Heading/Medium | 24 px | Bold (700) | 32 px | 0 px |
| ACTA/Heading/Small | 20 px | SemiBold (600) | 28 px | 0 px |
| ACTA/Heading/XSmall | 18 px | SemiBold (600) | 26 px | 0% |
| ACTA/Body/Large | 16 px | Regular (400) | 24 px | 0 px |
| ACTA/Body/Medium | 14 px | Regular (400) | 20 px | 0 px |
| ACTA/Body/Small | 12 px | Regular (400) | 16 px | 0 px |
| ACTA/Label/Medium | 14 px | SemiBold (600) | 20 px | 0 px |
| ACTA/Label/Small | 12 px | SemiBold (600) | 16 px | 0 px |
| ACTA/Label/Overline | 10 px | Bold (700) | 14 px | 0% |
| ACTA/Metric | 40 px | Bold (700) | 48 px | 0 px |

O Figma também contém estilos ACTA/Compatibilidade/* e ACTA/Originais/*; use-os quando um componente legado exigir compatibilidade, sem tratá-los como hierarquia semântica principal. No código do minijogo, a pilha encontrada é Segoe UI, Trebuchet MS, sans-serif; Plus Jakarta Sans não está configurada.

## 6. Espaçamento, dimensões e forma

Coleção ACTA / Medidas, modo Valor. Os valores abaixo são os armazenados na coleção.

| Grupo | Tokens e valores |
| --- | --- |
| Espaçamento principal | spacing/0 0; spacing/4 4; spacing/8 8; spacing/12 12; spacing/16 16; spacing/20 20; spacing/24 24; spacing/32 32; spacing/40 40; spacing/48 48; spacing/64 64 px. |
| Espaçamentos adicionais | spacing/1 1; /2 2; /6 6; /10 10; /14 14; /18 18; /28 28 px. |
| Raios | radius/0 0; /4 4; /8 8; /10 10; /12 12; /16 16; /18 18; /20 20; /24 24; /30 30; /44 44; /60 60; /100 100; /999 999 px. |
| Bordas e controles | border/1 1 px; border/2 2 px; button/height-web 40 px; button/height-mobile 44 px; field/height 48 px; icon/standard 24 px. |
| Cards e modal | card/mobile-width 176 × card/mobile-height 248 px; card/web-width 228 × card/web-height 320 px; modal/width 440 × modal/height 320 px. |
| Frames de referência | layout/web/width 1440 × layout/web/height 1024 px; layout/mobile/width 440 × layout/mobile/height 956 px. São dimensões de frames, não breakpoints. |
| Navegação e margem | layout/web/sidebar 120 px; layout/mobile/margin 24 px. |

A coleção inclui dimensões pontuais sob button/original/* (por exemplo, recuperar senha, Google, sair e acessar ciclo). Preserve sua origem em componentes legados; não promova automaticamente esses valores a tamanhos globais.

## 7. Temas, tokens e precedência

1. Use primeiro os tokens semânticos de ACTA / Cores, selecionando Claro ou Escuro conforme a tela.
2. Para novas primitivas ou decisões do sistema, use/proponha valores na coleção primitiva apropriada e exponha-os por token semântico. Não espalhe hex literais por componentes.
3. Para dimensões e movimento, consulte ACTA / Medidas; prefira espaçamentos, raios e tamanhos de controle do sistema a números ad hoc.
4. Tokens palette/*, system/*, button/original/*, opacity/* e asset/* são valores auxiliares observados. Confirme contexto e uso antes de tratá-los como API pública.

Há escalas adicionais (por exemplo, espaçamentos 1, 2, 6, 10, 14, 18 e 28 junto à escala principal; raios 8, 10, 12, 16, 18, 20, 24, 30, 44, 60, 100 e 999). Isso não prova conflito: medidas podem atender componentes originais ou específicos. O Figma não fornece regra de depreciação; confirme com design antes de remover ou consolidar tokens.

## 8. Componentes e padrões reutilizáveis

Os conjuntos abaixo estão em ACTA → UI KIT → Design System. A quantidade de variantes corresponde aos componentes-filhos observados.

| Conjunto | Variantes/estados observados | Referência |
| --- | --- | --- |
| ACTA / Botão / Web | 24: estilos Principal, Secundário, Discreto e Perigo; estados Padrão, Hover, Pressionado, Foco, Desativado e Carregando. | [Componente](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-32950) |
| ACTA / Botão / Mobile | 24, mesma matriz de quatro estilos e seis estados. | [Componente](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33023) |
| ACTA / Campo / Texto, Senha, Busca, Número, Seleção, Data, Área de texto, Arquivo | 5 estados por conjunto: Vazio, Preenchido, Foco, Erro e Desativado. | [Campo texto](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33096) · [Busca](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33140) |
| ACTA / Seleção / Checkbox, Radio, Alternância | Cinco estados: Desmarcado, Marcado, Foco, Desativado e Desativado marcado. | [Checkbox](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33272) |
| ACTA / Status / Badge | Sete variantes; os nomes completos não foram enumerados neste inventário. | [Badge](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33331) |
| ACTA / Navegação / Aba de etapa | Dez variantes. | [Aba de etapa](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33346) |
| ACTA / Card / Web e ACTA / Card / Mobile | 26 variantes em cada conjunto. | [Card web](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33388) · [Card mobile](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33545) |
| Sidebar original web e menu principal mobile | Dois componentes-filhos em cada conjunto original. Confira navegação V2 antes de reutilizar itens legados. | [Sidebar](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-34473) · [Menu mobile](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-34514) |
| CATO: contexto do ciclo e campo de mensagem mobile | Dois estados/variantes cada. | [Contexto](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-34169) · [Campo](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-34190) |
| ACTA / Gráficos e dados/* | Causas por ciclo, planos, execução, situação de tarefas, verificações, metas, aprendizados, treinamentos, roscas, Ishikawa e quadro de tarefas. | [Gráfico de causas](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-34576) · [Quadro de tarefas](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-35211) |
| Cards de domínio e identidade | Cards para tarefas, ciclos, aprendizados, treinamentos, formulários, efeitos, progresso, jornada PDCA, planos, indicadores e anexos ativo/processando/erro; há carrossel de ícones e avatar. | [Jornada PDCA mobile](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-33899) · [Avatar](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-35538) |

Reutilize instâncias dos componentes correspondentes à plataforma e ao tema antes de criar estruturas locais. Se o componente não cobrir o caso, registre a necessidade de variante; não force um componente inadequado. A área de UI Kit inspecionada contém milhares de componentes e conjuntos; esta tabela é um recorte de alto valor, não o catálogo completo.

## 9. Padrões de produto e fluxos

As seções da Web V2 explicitam Login, Home, Perfil, Visões gerais e etapas do ciclo, além de Cato IA, formulários, pendências e notificações. A versão mobile organiza áreas análogas em seções para Home, tarefas, ciclos, Perfil, CATO, Do, Login, Formulários, Visão Geral, Plan e Notificações.

- **PLAN:** identificação/priorização do problema, coleta de dados, análise de causas, metas, plano de ação 5W2H, Ishikawa e 5 Porquês aparecem na Web ACTA; há seções Plan no mobile.
- **DO:** execução, tarefas, treinamento e quadro/estado de execução aparecem nas seções Do e nos componentes de gráficos e cards.
- **CHECK:** verificação e metas, resultados, gráficos, efeitos secundários e indicadores aparecem nas seções Check.
- **ACT:** há visão de Act, registro de aprendizados, auditoria/padronização e componentes de efeitos.
- **Apoio transversal:** Home e visões gerais resumem ciclos e indicadores; Perfil, Login e recuperação de senha cobrem acesso; formulários, notificações e pendências têm áreas próprias.
- **CATO:** há áreas Cato IA na Web (claro/escuro) e CATO no Mobile (claro/escuro). Uma tela mobile escura inclui “Olá, Gabriel. Como posso ajudar?”, mensagem contextual sobre ciclo e campo para iniciar conversa/gravação. São textos de exemplo, não conteúdo normativo.

O UI Kit contém estados de campo vazio/preenchido/foco/erro/desativado, feedback de botões e cards de anexos ativo/processando/erro, além de componentes de sucesso/aviso encontrados em outras áreas. Telas web nomeiam modais de criação, edição, exclusão, confirmação e feedback. Regras de negócio de cada estado devem ser confirmadas na especificação do fluxo.

## 10. Plataformas e responsividade

Os frames de referência observados têm 1440×1024 px (web) e 440×956 px (mobile). Há componentes separados de botão e card por plataforma. As telas mobile usam composição e navegação próprias; a web mostra conteúdo mais amplo, navegação lateral, listas e painéis de dados. Isso descreve os frames, não determina comportamento para todos os tamanhos.

Não foi localizada uma tabela explícita de breakpoints ou especificação completa de comportamento fluido. Confirme larguras de transição, colapso da navegação, densidade de tabelas/gráficos e regras para tablet antes de codificar comportamentos não representados.

## 11. Acessibilidade

### Confirmado no Figma/código estático

- Há variante Foco nos conjuntos de botões e campos; checkbox, radio e alternância também têm variante de foco (UI Kit).
- O botão tem variantes Carregando e Desativado; o campo tem Erro e Desativado.
- O minijogo aplica :focus-visible com contorno de 3 px em botões e links (src/styles.css) e usa elementos como button, ol, rótulos e regiões com texto acessível (src/app/App.tsx e src/components/).
- O minijogo define prefers-reduced-motion em seu CSS. Isso não comprova que todos os fluxos ACTA implementem a preferência.

### A validar antes de declarar conformidade

- Contraste de combinações semânticas nos dois temas e estados hover/foco/desativado; não foram calculadas razões nesta análise documental.
- Tamanho efetivo dos alvos, navegação por teclado, ordem e retorno de foco em menus/diálogos, anúncio de erros e estados dinâmicos e teste com leitor de tela.
- Se status, etapas e gráficos têm rótulos que complementem a cor e se ícones informativos têm nome acessível.
- Cobertura de movimento reduzido e animações em todo o produto.

Esta seção não certifica WCAG. O Figma descreve estados visuais e a leitura estática do código não prova comportamento em runtime.

## 12. Movimento e feedback

A coleção ACTA / Medidas define motion/hover-ms = 120 ms, motion/transition-ms = 150 ms, motion/modal-ms = 200 ms e motion/reduced-ms = 0 ms. Há também opacity/overlay ≈ 0,48 e opacity/disabled ≈ 0,45, além de tokens opacity/*; confirme unidade e uso local antes de aplicar.

Os conjuntos de botões definem feedback de hover, pressão, foco, carregamento e desativação; não foi confirmado token universal de easing. Não padronize uma curva por inferência.

## 13. Uso no código disponível

O repositório JogACTA contém app React 19 + TypeScript + Vite, com lucide-react, CSS em [src/styles.css](src/styles.css), telas em [src/app/App.tsx](src/app/App.tsx) e componentes em [src/components/](src/components/). A paleta do jogo é própria: variáveis --deep, --teal, --lime, --amber e --red; fontes Segoe UI/Trebuchet MS; cards e ilustração de fábrica. Esse conjunto não corresponde aos tokens semânticos ACTA V2 no Figma e não deve ser apresentado como identidade oficial do produto.

O código disponível não contém biblioteca de componentes ACTA, frontend corporativo, tokens exportados nem Plus Jakarta Sans. O CATO do minijogo é um ícone Sparkles com guia textual em [src/components/CatoGuide.tsx](src/components/CatoGuide.tsx); o README confirma que não havia asset original do CATO no repositório. Isso não equivale à persona CATO das telas de produto.

Ao implementar o produto corporativo em seu repositório próprio, procure primeiro tokens exportados, tema e componentes existentes. Este minijogo não oferece integração pronta para consumir variáveis ACTA; não copie seus hex para lá. Se a biblioteca não estiver disponível no código, mantenha os nomes dos tokens no mapeamento e solicite a fonte oficial ao time responsável.

## 14. Lacunas e decisões pendentes

| Evidência | Impacto | Ação/decisão |
| --- | --- | --- |
| O Figma separa ACTA V1 de Web ACTA/Mobile ACTA V2. | Risco de reutilizar telas/componentes legados. | Confirmar V2 como versão de produção e a política de migração dos itens V1. |
| A coleção tem primitivas, semânticas e nomes auxiliares/originais; coexistem escalas de spacing e radius. | Pode haver uso desigual ou token legado ao lado de padrão novo. | Confirmar escopo das subcoleções e depreciação antes de consolidar. |
| Contraste não foi medido; Code Connect está indisponível. | Não há validação de contraste nem mapeamento Figma-código. | Executar auditoria visual/acessível e manter mapeamento no repositório do produto. |
| Frames web/mobile são referências fixas e não especificam breakpoints. | Comportamento intermediário permanece indefinido. | Definir e documentar breakpoints e comportamento para tablet/janelas estreitas. |
| O repositório inspecionado é o minijogo, sem UI corporativa ou biblioteca oficial. | Não é possível atestar equivalência de implementação. | Repetir comparação no frontend principal quando disponível. |
| O inventário priorizou tokens, componentes centrais e telas; não auditou overrides de cada instância em cada frame. | Não é auditoria exaustiva de drift no arquivo. | Fazer auditorias focadas por tela/fluxo se a equipe quiser corrigir deriva. |

## 15. Checklist para novas telas

- [ ] Confirmar plataforma, modo de cor e versão do fluxo de referência.
- [ ] Usar estilos Plus Jakarta Sans sem criar variações semânticas redundantes.
- [ ] Usar tokens semânticos e medidas do sistema; evitar hex e dimensões sem nome.
- [ ] Reutilizar componentes e variantes adequados à plataforma.
- [ ] Desenhar estados padrão, hover, pressão, foco, carregamento, desativado, vazio, erro, sucesso e confirmação quando aplicável.
- [ ] Garantir rótulos, informação que não dependa só de cor, foco visível, teclado e movimento reduzido; medir contraste e validar com tecnologia assistiva.
- [ ] Conferir adaptação para larguras menores sem tratar frames como breakpoints.
- [ ] Manter etapa/contexto PDCA explícitos e linguagem consistente com o produto.
- [ ] Distinguir conteúdo de exemplo de dados e regras reais.
- [ ] Formalizar novos componentes/tokens no UI Kit e atualizar este documento com referência.

## Referência rápida de nós

- [ACTA / UI Kit](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=1979-49512)
- [Web ACTA / V2 claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2016-35181)
- [Web ACTA / V2 escuro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2016-48419)
- [Mobile ACTA / V2 claro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2013-29350)
- [Mobile ACTA / V2 escuro](https://www.figma.com/design/qLBI7dl8NjqS2IxSZN8LsY/ACTA?node-id=2013-32524)
