# Fluxo e conteúdo

> Parte da especificação ACTA Experience. Consulte [o índice](../spec.md) para a visão geral e a ordem de leitura.

## 4. Jornada do visitante — fluxo completo

### 4.1. Tela 1: desafio

**Headline:** “VOCÊ CONSEGUE SALVAR A FÁBRICA?”

**Subheadline:** “30 de 100 pedidos estão atrasados. Você tem **2 tentativas** para chegar a no máximo **10 atrasos**.”

Elementos:

- Logo/nome ACTA Experience.
- CATO com uma fala curta: “A fábrica precisa de você!”
- Indicador inicial: **30% de atraso**.
- Indicador-meta: **10%**.
- Tentativas disponíveis: **2**.
- Botão grande: **“JOGAR”**.
- Aviso discreto: “Dados fictícios usados para demonstrar o PDCA”.
- Alternância futura entre modo visitante e modo apresentador, fora do MVP.

**Ação:** clicar em JOGAR inicia `PLAN` na rodada 1.

### 4.2. Etapa PLAN: investigar e priorizar

**Pergunta:** “Onde você investigaria primeiro?”

Mostrar três cartões:

- Embalagem: **20 atrasos**.
- Expedição: **7 atrasos**.
- Cadastro: **3 atrasos**.

O jogador escolhe uma hipótese de foco. Feedback curto após a escolha:

- **Embalagem:** “Boa análise. Esse é o maior gargalo.”
- **Expedição:** “É um problema real, mas não o maior. Será suficiente para chegar à meta?”
- **Cadastro:** “Esse setor tem poucas ocorrências. Você pode tentar, mas confira os resultados.”

**Regra:** uma hipótese errada **não consome tentativa** nem produz penalidade arbitrária no resultado. O que gasta recurso é executar a intervenção.

**Ligação com ACTA:** identificação de problemas, Ishikawa, 5 Porquês e priorização de causas.

### 4.3. Etapa DO: executar uma melhoria

**Pergunta:** “Qual melhoria você vai testar?”

Três cartões com verbos de ação, ícones e uma frase cada:

1. **Organizar a embalagem:** redistribuir o fluxo de separação e embalagem.
2. **Reforçar a expedição:** colocar mais apoio na etapa de envio.
3. **Lançar uma promoção:** aumentar a entrada de clientes sem mudar a operação.

O jogador escolhe uma ação ainda não utilizada e clica em **“EXECUTAR TESTE”**.

- Mostrar animação de esteira/fábrica durante 2–3 segundos, com opção de pular.
- Reduzir `tentativasRestantes` em 1 **exatamente uma vez**.
- Aplicar o efeito à distribuição atual de atrasos.
- Registrar ação e números no histórico da partida.
- Impedir clique duplo enquanto a operação está sendo processada.
- Avançar para CHECK.

**Ligação com ACTA:** plano de ação, tarefas, responsáveis, prazos e 5W2H.

### 4.4. Etapa CHECK: medir

Exibir uma comparação imediatamente compreensível:

```text
ANTES                  AGORA                    META
30 / 100               24 / 100                  <= 10 / 100
30% de atraso          24% de atraso             10% de atraso

RESULTADO: MELHORA PARCIAL — a meta não foi atingida.
```

A frase do CATO varia:

- **Meta alcançada:** “Funcionou! Os atrasos chegaram à meta. Como podemos manter a melhoria?”
- **Houve avanço, sem atingir a meta:** “Melhorou, mas ainda não basta. O que devemos fazer?”
- **Sem avanço:** “Esse teste não reduziu atrasos. Precisamos repensar a ação.”

**Ligação com ACTA:** metas, indicadores, evidências e verificações de resultado.

### 4.5. Etapa ACT: tomar uma decisão gerencial

Este é o momento em que o jogo fica interessante: o visitante **precisa escolher**, não apenas observar uma recomendação.

**Quando a meta foi atingida:**

- **“Padronizar melhoria”** → **VITÓRIA**.
- **“Testar mais uma melhoria”** → disponível apenas quando ainda resta uma tentativa; pede confirmação, pois a meta já foi atingida. Confirmando, volta ao PLAN com os números atuais; cancelando, permanece no ACT para padronizar. Se não restarem tentativas, essa opção não aparece.

**Quando a meta não foi atingida e há uma tentativa restante:**

- **“Revisar o plano”** → volta para PLAN, mantendo os resultados acumulados e removendo do menu DO a ação já executada.
- **“Padronizar mesmo assim”** → **DERROTA** por decisão gerencial inadequada.

**Quando a meta não foi atingida e não há tentativas restantes:**

- Mostrar: “Não restam tentativas. O teste não cumpriu a meta.”
- Botão **“VER RESULTADO”** → **DERROTA** por recursos esgotados.

A tela nunca deve dizer que a solução é efetiva quando a meta definida não foi cumprida. Em uso real, a decisão de padronização também exigiria acompanhamento continuado; a regra de jogo simplifica esse julgamento.

**Ligação com ACTA:** decisão sobre ações corretivas, registro de lições aprendidas e continuidade do ciclo.

### 4.6. Tela de VITÓRIA

**Título:** “MISSÃO CUMPRIDA!”

Mostrar:

- Confetes discretos ou animação de sucesso.
- Indicador inicial e final, por exemplo **30% → 10%**.
- Tentativas utilizadas: **1 de 2**, ou **2 de 2**.
- Quantidade de estrelas: **1 a 3**.
- Explicação breve: “Você identificou o problema, executou uma ação, verificou a meta e decidiu padronizar. Isso é um ciclo PDCA.”
- Botões: **“JOGAR NOVAMENTE”** e **“COMO O ACTA AJUDA?”**.

### 4.7. Tela de DERROTA

**Título:** “A FÁBRICA CONTINUA EM CRISE!”

Mostrar:

- Indicador inicial e final, por exemplo **30% → 24%**.
- Motivo específico: `SEM_TENTATIVAS` ou `PADRONIZACAO_PREMATURA`.
- Mensagem: “Você melhorou a expedição, mas a embalagem continuou como principal gargalo.” (quando pertinente).
- Insight: “No PDCA, falhar em um teste não encerra a melhoria contínua: aprendemos com os dados e planejamos outro ciclo.”
- Botões: **“TENTAR NOVAMENTE”** e **“COMO O ACTA AJUDA?”**.

A linguagem de derrota deve ser lúdica, sem tom de reprovação pessoal. Perder precisa ser **interessante e didático**, não constrangedor.

### 4.8. Tela final: ponte para o ACTA

Depois da vitória ou derrota, o conteúdo do produto é o mesmo:

> “Em 90 segundos, você tomou algumas decisões. Em uma empresa real, várias pessoas precisam registrar problemas, executar tarefas, acompanhar metas e aprender com os resultados. **É para organizar esse processo que existe o ACTA.**”

| O que o visitante fez no jogo | Onde o ACTA ajuda no processo real |
|---|---|
| Viu que 30 pedidos atrasaram | Registrar problemas e iniciar um ciclo PDCA |
| Investigou gargalos | Análise de causas e ferramentas como Ishikawa e 5 Porquês |
| Escolheu uma intervenção | Planejamento de ações e 5W2H |
| Executou um teste | Distribuição de tarefas, responsáveis e prazos |
| Comparou 30%, 24% ou 10% | Metas, indicadores e verificações |
| Decidiu padronizar ou revisar | Aprendizados, ações corretivas e próximos ciclos |

**Botão principal:** **“PRÓXIMO JOGADOR”**, que reinicia completamente.  
**Botão opcional:** **“ABRIR DEMONSTRAÇÃO DO ACTA”**, apenas se houver uma instância real preparada.

---
