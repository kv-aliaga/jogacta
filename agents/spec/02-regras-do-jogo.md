# Regras do jogo

> Parte da especificação ACTA Experience. Consulte [o índice](../spec.md) para a visão geral e a ordem de leitura.

## 3. Regras do cenário

### 3.1. Dados iniciais

**Lote fictício de 100 pedidos.** Dos 100 pedidos, 30 atrasaram. A meta é no máximo 10 atrasos.

| Origem do atraso | Quantidade inicial | Leitura |
|---|---:|---|
| Embalagem e separação | 20 | Principal gargalo |
| Transporte e expedição | 7 | Gargalo secundário |
| Cadastro de pedidos | 3 | Problema menor |
| **Total** | **30** | **30% dos 100 pedidos** |

A interface deve mostrar os três números como barras proporcionais, evitando que o visitante precise ler um relatório.

### 3.2. Ações disponíveis

A ação selecionada na etapa DO modifica um ou mais componentes da distribuição dos atrasos.

| ID | Ação | Efeito em pedidos atrasados | Total se aplicada primeiro | Interpretação |
|---|---|---|---:|---|
| `organize-packaging` | **Reorganizar a embalagem** | Embalagem: `20 → 0` | **10** | Soluciona o principal gargalo |
| `reinforce-shipping` | **Reforçar a expedição** | Transporte: `7 → 1` | **24** | Melhora parcial; meta ainda não atingida |
| `launch-promotion` | **Lançar promoção** | Nenhum efeito nos atrasos | **30** | Ação não relacionada à causa do problema |

**Regras de consistência:**

- Nenhuma ação pode tornar um contador negativo.
- A mesma ação não pode ser aplicada duas vezes na mesma partida.
- A ordem não altera o efeito final acumulado das ações independentes.
- O resultado depende da ação executada, **não de uma punição artificial por ter clicado na causa errada**.
- A seleção na etapa PLAN é uma hipótese de investigação. O sistema fornece feedback sobre a qualidade da análise, mas permite que uma boa decisão de execução corrija o rumo.
- Para fins pedagógicos, esses efeitos são determinísticos e fictícios; **não representam causalidade comprovada em dados reais**.

### 3.3. Exemplos de resultados acumulados

| Teste 1 | Teste 2 | Resultado após teste 2 | Situação |
|---|---|---:|---|
| Embalagem | — | **10 atrasos** | Meta atingida na primeira tentativa |
| Expedição | Embalagem | **4 atrasos** | Meta atingida na segunda tentativa |
| Promoção | Embalagem | **10 atrasos** | Meta atingida na segunda tentativa |
| Expedição | Promoção | **24 atrasos** | Meta não atingida; derrota |
| Promoção | Expedição | **24 atrasos** | Meta não atingida; derrota |

O resultado após o segundo teste é calculado sobre o **estado atual**, não sobre uma nova base de 30. Por exemplo, reforçar a expedição reduz os atrasos de 30 para 24; em seguida, reorganizar a embalagem reduz de 24 para 4.

### 3.4. Condição de vitória

**Vitória =** atingir `atrasosAtuais <= 10` **e** escolher **“Padronizar a melhoria”** no ACT.

- Pode acontecer na primeira ou segunda tentativa.
- Uma vitória não encerra o conteúdo educacional; abre o resultado e a explicação do ACTA.
- Para cumprir a meta, não é preciso acertar o rótulo da causa na primeira escolha, mas a análise correta melhora a avaliação final.

### 3.5. Condições de derrota

**Derrota 1 — recursos esgotados:**

- Foram executadas **2 intervenções**;
- Os atrasos continuam acima de **10**;
- O jogador não tem mais tentativas para testar outra ação.

**Derrota 2 — padronização precipitada:**

- A meta ainda não foi atingida;
- O visitante decide **“Padronizar mesmo assim”** no ACT;
- O jogo explica que padronizar uma solução inadequada perpetua o problema.

Nenhuma derrota é aleatória. A tela explica **qual escolha causou a perda** e convida à revanche. O apresentador pode usar a derrota para ensinar que revisar o plano faz parte do PDCA.

**Regra de proteção didática:** se a meta já foi atingida e o jogador escolher **“Testar mais uma melhoria”**, exibir confirmação e avisar que a meta atual já foi cumprida. Se não houver tentativa restante, não mostrar essa opção. Nunca consumir uma tentativa por abrir ou cancelar a confirmação.

### 3.6. Estrelas e desempenho

Pontuação complementar, sem leaderboard e sem contas:

| Condição ao vencer | Resultado |
|---|---|
| Vencer na primeira intervenção e investigar embalagem corretamente | **3 estrelas** |
| Vencer na primeira intervenção com outra hipótese **ou** vencer na segunda tendo investigado embalagem na primeira rodada | **2 estrelas** |
| Vencer na segunda intervenção sem ter investigado embalagem na primeira rodada | **1 estrela** |
| Perder | **0 estrelas** |

Para o critério de investigação, considera-se **a hipótese da primeira rodada**. As estrelas indicam eficiência na investigação e no uso das tentativas; **não alteram a condição de vitória**. Exibir feedback positivo sem ridicularizar quem perdeu.

---
