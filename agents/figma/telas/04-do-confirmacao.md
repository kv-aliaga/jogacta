# 04 — DO: confirmação e indisponibilidade

## 1. Objetivo e fluxo
Etapa DO. Entrada após seleção no catálogo; saída confirmada para CHECK. Cancelar retorna ao catálogo sem alterar saldo ou indicadores.

## 2. Fontes e regras
`agents/spec.md`, `agents/DESIGN_SYSTEM.md`, `DECISOES-PENDENTES.md`. Um projeto por semana; confirmar cobra custo e aplica os efeitos definidos. Cancelar não altera saldo/indicadores. Projeto usado indisponível. ACT custos propostos não se aplicam aqui; contingência não é regra vigente.

## 3. Frames
Desktop 1440×1024 com diálogo de referência 440×320; mobile 440×956 com painel/diálogo adaptado à largura, sem esconder saldo, custo ou efeito.

## 4. Wireframe
`[Fundo catálogo] [Confirmação: nome e resumo 40%] [Saldo atual → custo → saldo após 20%] [Efeitos 20%] [Cancelar / Confirmar 20%]`. Estados indisponíveis no cartão, não no diálogo de confirmação.

## 5. Conteúdo
Título “Confirmar projeto?”; nome, custo, efeitos. “Saldo atual: N”; “Custo: −N MoedACTAs”; “Saldo após confirmação: N”. Primário “Confirmar projeto”; secundário “Cancelar”. Sem saldo: “Saldo insuficiente para este projeto” + diferença; botão confirmar desabilitado. Usado: “Este projeto já foi usado nesta operação.” Ajuda “Cancelar mantém seu saldo e seus indicadores.”

## 6. Hierarquia
Projeto e consequência primeiro, impacto no saldo em bloco destacado, ações separadas; aviso de indisponibilidade perto da causa.

## 7. Componentes e tokens
`Heading Medium`, `Body Medium`, `Label Medium`, `Metric`; cores semânticas de aviso/erro/superfície/borda conforme tokens documentados; raios 12/16/20 e espaçamento 12/16/24. Diálogo, saldo, indicador de efeito, botões.

## 8. Interação
Foco inicial no título ou ação segura definida pelo padrão; Tab percorre detalhes e ações. Enter confirma apenas com saldo suficiente; Escape/cancelar fecha sem débito. Após confirmar, debitar uma vez e anunciar resumo; desabilitar submissão duplicada durante a transição. Cartão usado não abre confirmação.

## 9. Acessibilidade
Diálogo modal com nome/descrição acessíveis e foco contido/restaurado; saldo futuro pronunciável; estado não depende de vermelho; toque ≥44 px; leitor de tela anunciado; movimento reduzido e contraste a verificar.

## 10. Aceite
Cancelamento preserva tudo; confirmação cobra uma vez e aplica efeitos; sem saldo impede confirmar e explica; estado usado não permite reutilização; desktop/mobile conferíveis.
