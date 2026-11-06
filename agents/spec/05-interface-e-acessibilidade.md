# Interface e acessibilidade

> Parte da especificação ACTA Experience. Consulte [o índice](../spec.md) para a visão geral e a ordem de leitura.

## 6. Telas e UI/UX

### 6.1. Estrutura principal desktop

```text
┌─────────────────────────────────────────────────────────────────────┐
│ ACTA EXPERIENCE            PLAN > DO > CHECK > ACT       [Reiniciar]│
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [CATO] “Você tem duas tentativas. Observe os dados antes de agir.”  │
│                                                                     │
│ ┌───────────────────────┐  ┌────────────────────────────────────┐    │
│ │ INDICADORES           │  │ ESCOLHA SUA PRÓXIMA AÇÃO           │    │
│ │ 100 pedidos           │  │                                    │    │
│ │ 30% atrasados         │  │ [Reorganizar embalagem]            │    │
│ │ META <= 10%           │  │ [Reforçar expedição]                │    │
│ │ TENTATIVAS: ● ●       │  │ [Lançar promoção]                  │    │
│ │                       │  │                                    │    │
│ │ Embalagem  █████████  │  │     [ EXECUTAR TESTE ]             │    │
│ │ Transporte ███        │  │                                    │    │
│ │ Cadastro   █          │  │                                    │    │
│ └───────────────────────┘  └────────────────────────────────────┘    │
│                                                                     │
│ DADOS SIMULADOS                No ACTA: plano de ação e tarefas      │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2. Hierarquia visual

1. **Missão + meta** — sempre visíveis.
2. **Tentativas restantes** — junto dos indicadores, sem bloquear a leitura.
3. **Etapa atual do PDCA** — trilha no topo.
4. **Uma pergunta/decisão principal por vez**.
5. **CATO** — uma frase curta e contextual.
6. **Relação com ACTA** — discreta durante o jogo, explícita ao terminar.

### 6.3. Indicadores

- Exibir sempre **contagem e porcentagem**, não apenas um gráfico.
- Separar graficamente: `Antes: 30%`, `Agora: 24%`, `Meta: 10%`.
- Redução de 30% para 24% equivale a **6 pontos percentuais**, não “6% de redução relativa”.
- Indicar em texto “Meta atingida” ou “Meta não atingida”; não depender só da cor.
- Exibir `Tentativas: 1/2`, com ícones, para que não haja ambiguidade sobre quantas restam.

### 6.4. Reações do CATO

| Momento | Fala sugerida |
|---|---|
| Início | “A fábrica precisa de ajuda. Você tem duas tentativas!” |
| PLAN correto | “A embalagem concentra a maioria dos atrasos!” |
| PLAN alternativo | “Boa hipótese. Vamos conferir se a ação tem impacto.” |
| DO | “Teste iniciado! Vamos medir o resultado.” |
| CHECK sem melhora | “A taxa continua igual. O que esse resultado nos ensina?” |
| CHECK parcial | “Melhorou, mas a meta ainda está distante.” |
| CHECK ideal | “Excelente! A meta foi alcançada.” |
| VITÓRIA | “Missão cumprida! Você completou o PDCA.” |
| DERROTA | “O teste não resolveu tudo. Agora sabemos o que mudar!” |

**Não usar IA generativa para essas falas no MVP.** Strings locais garantem rapidez e precisão conceitual.

### 6.5. Feedback de derrota

Não usar sustos, telas de erro técnico ou animações longas. A derrota deve aparecer como parte normal do aprendizado, com:

- Motivo claro;
- O que mudou e o que permaneceu;
- Uma dica, sem entregar necessariamente todas as escolhas;
- Botão grande de revanche.

### 6.6. Acessibilidade

- Alvos de toque grandes, compatíveis com mouse/teclado.
- Contraste adequado e tipografia visível de longe.
- Estado de seleção perceptível sem depender apenas de cor.
- `aria-live` para resultado e passagem de etapa.
- `prefers-reduced-motion` e botão “Pular animação”.
- Sem texto longo antes de o visitante conseguir agir.
- Sem áudio obrigatório.
- Modo tela cheia (kiosk) opcional.

---
