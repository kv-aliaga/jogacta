# 🏭 ACTA Experience — Operação Resgate

Demonstração interativa do ciclo PDCA que apresenta como o ACTA apoia o planejamento, a execução, a verificação e o aprendizado contínuo.

## 📌 Visão geral

O JogACTA é um jogo web educativo, em português brasileiro, no qual a pessoa conduz uma operação de quatro semanas pelas etapas PLAN, DO, CHECK e ACT. A experiência usa dados simulados e funciona sem conta, backend ou conexão de rede para jogar. As decisões e os resultados são mantidos somente durante a operação; atualizar a página reinicia a experiência.

As regras vigentes estão documentadas em [`agents/spec.md`](agents/spec.md). Materiais antigos de concepção em `agents/` podem descrever versões anteriores do jogo; a especificação é a referência para o comportamento atual.

## ✨ Funcionalidades

| Área | Capacidades |
| --- | --- |
| PLAN | Escolha de direcionamento e preparação opcional de projetos com orçamento limitado. |
| DO | Quadro Kanban com tarefas e distrações, tempo de execução e efeitos das movimentações nos indicadores. |
| CHECK | Auditoria dos resultados de DO com evidências, veredito e avaliação da investigação. |
| ACT | Revisão das afirmações do ciclo e registro de uma lição aprendida durante a operação. |
| Operação | Indicadores de atrasos, qualidade, moral e saldo; encerramento com resultado da partida. Cada início recebe uma seed para reproduzir os sorteios daquela operação. |

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React | Interface da experiência. |
| TypeScript | Tipos, regras e fluxo da aplicação. |
| Vite | Servidor de desenvolvimento e build estático. |
| Vitest | Testes automatizados definidos no projeto. |

As dependências e os scripts estão declarados em [`package.json`](package.json). As dependências usam a referência `latest`, portanto o manifesto não fixa versões individuais.

## ✅ Pré-requisitos

- Node.js e npm instalados.
- Dependências instaladas a partir do `package-lock.json`.

## 🚀 Execução local

Na raiz do repositório, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

Com a base configurada para o GitHub Pages, abra `http://localhost:5173/jogacta/`. Para gerar os arquivos estáticos de produção:

```bash
npm run build
```

Os arquivos são gerados em `dist/`, que não deve ser versionado. Os demais scripts disponíveis são `npm test` e `npm run lint`.

## 🚢 Publicação

O workflow [Deploy GitHub Pages](.github/workflows/deploy-pages.yml) executa testes, lint e build ao receber alterações na `main`, e publica o conteúdo de `dist/` em [kv-aliaga.github.io/jogacta](https://kv-aliaga.github.io/jogacta/). Também pode ser iniciado manualmente pela aba **Actions** do GitHub.

## 🏗️ Arquitetura e estrutura

O projeto separa regras do jogo, transições de estado e apresentação:

```text
src/
├── domain/       # cenário, tipos e cálculos do jogo
├── controller/   # transições de estado e ações
├── app/          # aplicação e estilos globais
├── components/   # componentes de interface
└── test/         # testes automatizados
agents/
└── spec.md       # especificação vigente do jogo
public/           # recursos estáticos servidos pelo Vite
```

`src/domain/` contém regras e cálculos puros; `src/controller/` coordena as transições; `src/app/` e `src/components/` apresentam a experiência. A seed e as decisões da operação determinam os resultados probabilísticos dentro daquela partida.

## 📚 Documentação

- [Especificação do jogo](agents/spec.md)
- [Sistema visual](agents/DESIGN_SYSTEM.md)
- [Materiais de design e telas](agents/figma/README.md)

## 🤝 Links e autoria

- [Repositório](https://github.com/kv-aliaga/jogacta)
