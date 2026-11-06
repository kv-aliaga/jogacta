# Matriz de telas × regras × tokens

Fonte normativa: `agents/spec.md`; tokens: `agents/DESIGN_SYSTEM.md`. As amostras de eventos são exemplos de interface, não novas regras.

| Tela | Etapa/rotas e regras cobertas | Tokens e componentes principais |
|---|---|---|
| 01 Home | HOME → PLAN; partida inicial (S1/4, 100 MoedACTAs, atrasos 30%, qualidade 90%, moral 78%, placares 0); retorno após ponte/reinício | `color/background/canvas`, `Heading Large`, `Body Medium`; cabeçalho de missão, indicadores, saldo, CATO, CTA |
| 02 Plan | Auditoria opcional uma vez/semana, custo 5, +4 pontos e diagnóstico; correspondência de categoria −2 p.p. adicionais | `color/semantic/info`, `Label Medium`, `Body Medium`; progresso PDCA, saldo, auditoria, diagnóstico |
| 03 Do catálogo | Um projeto por semana; projetos usados indisponíveis; catálogo com custos e efeitos oficiais; sem débito até confirmação | `color/background/surface`, `color/border/default`, `Heading Small`; cartões de projeto, saldo, CATO |
| 04 Do confirmação | Confirmar debita o custo; cancelar não altera saldo/indicadores; estado usado e saldo insuficiente | `color/semantic/warning`, `color/semantic/error`, `Label Medium`; diálogo de confirmação e feedback |
| 05 Check | Projeto, evento semanal e extra; chances ajustadas pelo PRNG local; proteções; log de evento, resultado, efeito e proteção | `color/semantic/success`, `color/semantic/warning`; histórico, indicadores, bloco de resultado |
| 06 Act | Padronizar/revisar conforme spec, incluindo resultado orçamentário; ACT sem custo vigente; ACT semana 1–3 → PLAN seguinte, semana 4 → END | `color/semantic/info`, `Heading Medium`; decisão, consequência, progresso |
| 07 End vitória | Critérios simultâneos: atrasos ≤12%, qualidade ≥75%, saldo ≥0, placar jogador > rival; moral contextual; estrelas oficiais | `color/semantic/success`, `Metric`, indicadores, CTA para ponte |
| 08 End derrota | Derrota quando falhar ao menos um critério; estrelas zero; resumo e reinício | `color/semantic/error`, `Metric`, resumo, CTA reiniciar |
| 09 ACTA Bridge | END → ACTA_BRIDGE → HOME; aprendizagem e escolha de retorno/reinício | `color/background/surface`, `Heading Large`, `Body Large`; bloco educativo, CATO, ações |

## Estados transversais

- Desktop e mobile para cada etapa; no mobile, preservar fase, semana, saldo e custo/consequência da ação.
- Controles com repouso, hover (quando houver ponteiro), foco visível, pressionado, desabilitado e feedback após ação.
- Seleção/confirmar/cancelar em DO; auditoria disponível/usada/sem saldo em PLAN; eventos protegido/não protegido e registro em CHECK; padronizar/revisar e contingência pendente em ACT; finais e retorno/reinício.
- Tokens tipográficos documentados incluem `Display Large`, `Heading Large`, `Heading Medium`, `Heading Small`, `Body Large`, `Body Medium`, `Body Small`, `Label Medium`, `Label Small`, `Overline` e `Metric`. Plus Jakarta Sans é a referência. Espaçamentos documentados: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48 e 64; raios documentados incluem 0, 4, 8, 10, 12, 16, 18, 20 e 24. Aplicar somente nomes efetivamente definidos no design system.
- Frames de referência: desktop 1440×1024; mobile 440×956. Botões: 40 px web e 44 px mobile; modal de referência 440×320. São dimensões iniciais, não regras de negócio.

## Conflitos normativos a preservar

O evento oficial “Economia inesperada” concede +5 MoedACTAs no resultado favorável. A proposta `planejamento-moedactas.md` sugere economia sem ganhos e custos de ACT; essa proposta não prevalece sobre a especificação. Ver `DECISOES-PENDENTES.md`.
