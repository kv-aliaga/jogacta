# 02 — PLAN

## Objetivo e fluxo

Etapa PLAN, após “Começar missão” e após ACT nas semanas 1–3. A seção **INVESTIGAÇÃO OPCIONAL** oferece três compras de preparação. A pessoa pode comprar mais de uma, mas leva no máximo um projeto comprado para DO naquela semana.

## Fontes e regras

`agents/spec.md` é a autoridade do domínio. As três opções PLAN são Produção (`flow` / Reorganizar a separação), Controle de qualidade (`inspect` / Controle de qualidade) e Logística (`routes` / Otimizar as rotas). Não confundir essas três opções com o catálogo DO, que continua contendo nove projetos.

O preço independe da opção e segue a ordem das compras na semana: 5 MoedACTAs na primeira, 10 na segunda e 15 na terceira (30 no total). O custo da compra PLAN é adicional ao custo oficial de execução em DO. Compra e seleção não alteram indicadores; efeitos de indicadores só são aplicados ao confirmar o projeto em DO. Pode-se levar somente um projeto comprado para DO na semana. Projetos comprados não executados permanecem disponíveis em semanas seguintes. Compra é opcional; sem comprar, a pessoa segue e escolhe normalmente no catálogo DO. Bloquear opção já comprada/usada, limite de três compras e saldo insuficiente, com explicação textual.

## Conteúdo e composição

Preservar o HTML e CSS de referência: navegação lateral PDCA no desktop, cabeçalho com semana/fase, quatro indicadores compactos e legíveis, dois painéis independentes (investigação à esquerda; comprados/seleção/indicadores à direita), CATO contextual e ação de avanço. Fundo claro, cartões separados, bordas leves, raios e hierarquia próprios desta tela. No mobile, empilhar painéis e cartões sem overflow horizontal.

No painel esquerdo, exibir seletor para as três opções, os preços por posição de compra (“1ª compra: 5 MoedACTAs”, “2ª: 10 MoedACTAs”, “3ª: 15 MoedACTAs”, “As três: 30 MoedACTAs”) e botão **Comprar** após selecionar uma opção. Informar que a compra PLAN é adicional ao custo do projeto em DO. Não mostrar impactos nesse painel.

No painel direito, listar os projetos comprados e usar radios nativos para escolher apenas um para DO nesta semana. Mostrar os indicadores do projeto selecionado nesse painel, inclusive como prévia da opção escolhida à esquerda. Deixar claro que os demais continuam disponíveis nas semanas seguintes. Sem compras, explicar que a pessoa pode seguir ao catálogo de DO e escolher ali.

A ação de avanço segue para DO sem recalcular ou cobrar. Seu texto pode ser “Levar [projeto] para DO” quando há seleção, ou “Seguir sem comprar” sem seleção.

## Acessibilidade e responsividade

Usar títulos semânticos, labels associados, botões/radios nativos, foco visível, status acessível para valores atualizados, alvos de toque de pelo menos 44×44 px e movimento reduzido conforme preferência do sistema. Manter Plus Jakarta Sans e assets locais. Frames de referência: 1440×1024 e 440×956; preservar a leitura em larguras intermediárias.

## Critérios de aceite

- PLAN mostra exatamente três opções; não incorpora os nove cartões de DO na área de investigação.
- Compra cobra 5, 10 e 15 pela ordem de compra, e três compras custam 30, além do custo oficial de DO.
- Efeitos de cada projeto nos três indicadores ficam evidentes com direção e valor.
- Pode-se comprar várias opções e levar somente uma por semana a DO.
- Sem comprar, pode-se seguir a DO normalmente sem alteração de saldo/indicadores.
- Estado, compras e seleção vêm do controller central; recarregar reinicia na HOME.

