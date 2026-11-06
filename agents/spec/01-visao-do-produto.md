# Visão do produto

> Parte da especificação ACTA Experience. Consulte [o índice](../spec.md) para a visão geral e a ordem de leitura.

## 1. Resumo executivo

**ACTA Experience: Salve a Fábrica** é um minijogo curto para a feira do ACTA. O visitante assume a gestão de uma fábrica com **30 pedidos atrasados em um lote de 100**. A meta é reduzir os atrasos para **10 ou menos**, usando apenas **duas tentativas de intervenção**.

A pessoa precisa investigar os dados (**PLAN**), selecionar e executar uma melhoria (**DO**), verificar os resultados (**CHECK**) e tomar uma decisão gerencial (**ACT**). Decisões pouco eficazes consomem tentativas. A partida termina em **VITÓRIA** ou **DERROTA**, sempre seguida de uma explicação de como o ACTA apoia esse tipo de processo no mundo real.

**A promessa em uma frase:**

> **Você tem duas tentativas para salvar a fábrica. Investigue, teste e decida: consegue cumprir a meta usando PDCA?**

A experiência é propositalmente simples e determinística: **sem dados aleatórios, sem formulários longos, sem login e sem API obrigatória**. Deve funcionar em um notebook, monitor ou tela de toque, inclusive sem internet após preparar o build offline.

### 1.1. O que mudou na versão 2.0

| Antes: simulação guiada | Agora: minijogo com consequências |
|---|---|
| Chegar ao final do PDCA era a conclusão | É possível vencer **ou perder** |
| Uma única rodada de teste | Até **2 tentativas** de intervenção |
| Escolha fraca gerava apenas um aviso | Escolha fraca **consome uma tentativa** |
| Final único com conexão ao ACTA | Telas de **Vitória**, **Derrota** e **Revanche** |
| Resultados fixos sem acumulação | Intervenções ajustam a distribuição atual dos atrasos |
| Não havia avaliação de desempenho | Até **3 estrelas** por qualidade da resolução |
| ACT mostrava a recomendação | ACT exige **decisão gerencial** para concluir a partida |

### 1.2. Objetivo pedagógico

A pessoa deve perceber que:

1. Resolver problemas exige evidências, não palpites.
2. Executar uma ação não é o mesmo que alcançar a meta.
3. Só o **CHECK** mostra se a intervenção funcionou.
4. O **ACT** envolve padronizar o que funcionou ou revisar a estratégia.
5. Na prática, o ACTA ajuda a registrar e coordenar esse trabalho com problemas, causas, 5W2H, tarefas, metas e verificações.

**Princípio de produto:** fazer o visitante participar, não apenas assistir a uma apresentação ou responder a um quiz de definições.

---

## 2. Conceito do jogo

### 2.1. Nome, identidade e narrativa

- **Nome:** ACTA Experience — Salve a Fábrica.
- **Tagline:** “Duas tentativas. Uma meta. Você consegue?”
- **Papel do visitante:** gestor temporário de uma fábrica fictícia.
- **Missão:** diminuir os atrasos de **30%** para **até 10%**.
- **Recurso limitado:** **2 intervenções** por partida; cada ação testada consome uma.
- **Guia:** mascote **CATO**, com dicas curtas, reações e explicações do PDCA.
- **Recompensa:** resultado de vitória, estrelas e uma conclusão visual.
- **Consequência:** derrota por gestão inadequada ou falta de tentativas.

O desafio é simples de contar em menos de dez segundos:

> “Trinta de cada cem entregas estão atrasadas. Você tem dinheiro para testar só duas melhorias. Qual você escolheria?”

**Importante:** os recursos são uma metáfora de orçamento/tempo de intervenção, não uma simulação financeira real. A interface usa **“Tentativas restantes: 2”**, evitando inventar custos monetários.

### 2.2. Elementos que tornam a experiência um jogo

- Missão objetiva e condição de vitória transparente.
- Limite de tentativas visível o tempo todo.
- Escolhas que afetam o estado e o resultado futuro.
- Recompensa visual por alcançar a meta.
- Falha possível e compreensível, não baseada em sorte.
- Revanche imediata; visitantes podem desafiar uns aos outros sem ranking persistente.
- Duas dificuldades opcionais apenas futuramente; o MVP usa um único nível.

### 2.3. Por que não usar cronômetro punitivo?

O apresentador precisa falar, e visitantes leem em velocidades diferentes. Um timer eliminatório puniria quem está aprendendo. Para a feira, o **tempo é uma meta de design**, não critério de derrota. Pode haver animação visual discreta de urgência, mas nunca timeout que termina a partida.

---

## 19. Conclusão

A nova proposta é **um jogo rápido de tomada de decisão**, e não uma sequência de slides clicáveis. O visitante tem uma meta, um recurso limitado e uma consequência clara para suas escolhas. O PDCA surge como a melhor maneira de resolver o desafio: investigar, executar, medir e decidir. Tanto a vitória quanto a derrota levam ao mesmo aprendizado — e à explicação de como o **ACTA organiza esse método no mundo real**.

**Frase de encerramento:**

> **No jogo, você tentou salvar uma fábrica em dois testes. No ACTA, equipes podem transformar cada problema em um ciclo de melhoria contínua organizado e acompanhado.**
