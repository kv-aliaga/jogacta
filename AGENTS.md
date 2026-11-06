# Instruções do projeto JogACTA

Implemente e mantenha o ACTA Experience — Operação Resgate conforme a especificação vigente em [`agents/spec.md`](agents/spec.md). Leia esse documento antes de mudar regras, fluxo ou conteúdo do jogo. Ele substitui as regras antigas de “Salve a Fábrica” com duas tentativas.

## Diretrizes

- Trate o JogACTA como um site pequeno de demonstração para clientes entenderem o projeto: é um jogo simples, sem sessão ou persistência, e atualizar a página reinicia a experiência.
- Preserve a arquitetura React + TypeScript + Vite: cenário e cálculos puros em `src/domain/`, transições em `src/controller/` e apresentação em `src/app/` e `src/components/`.
- Mantenha a partida determinística, em pt-BR, responsiva, acessível e sem login, backend ou dependência de rede para jogar.
- Trate `agents/spec.md` como fonte única para regras e valores. Não replique cálculos de domínio em componentes.
- Use a seed da operação para todas as probabilidades do jogo: resultados extras que alteram pontuação ou saldo e elegibilidade dos buffs/nerfs por faixa de atrasos, qualidade e moral. Perfis e resultados devem se repetir com a mesma seed e decisões; gere uma nova seed ao iniciar outra operação. Mantenha determinísticos os custos, impactos-base, eventos fixos, pontos de ACT e critérios de vitória definidos em `agents/spec.md`.
- Preserve scripts e convenções existentes. Evite refatorações alheias ao jogo.
- Ao alterar regras ou fluxo, atualize testes de domínio e de interface. Rode `npm test`, `npm run lint` e `npm run build`; reporte resultados sem alegar verificações não executadas.
