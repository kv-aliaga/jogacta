# 03 — DO: catálogo de projetos

## 1. Objetivo e fluxo
Etapa DO. Entrada após PLAN; saída para confirmação de um projeto disponível. Objetivo: escolher um projeto para a semana.

## 2. Fontes e regras
`agents/spec.md`, `agents/DESIGN_SYSTEM.md`, `agents/game_design.md`. Um projeto por semana; projeto já usado não volta; custo só é debitado na confirmação. Efeitos oficiais por projeto:

| Projeto | Custo | Atrasos | Qualidade | Moral | Efeito |
|---|---:|---:|---:|---:|---|
| Reorganizar separação | 24 | −10 | +1 | +1 | capacidade |
| Instalar conferência digital | 25 | −3 | +3 | 0 | qualidade |
| Otimizar rotas | 23 | −7 | 0 | 0 | transporte |
| Contratar turno extra | 35 | −12 | 0 | −4 | capacidade |
| Controle de qualidade | 18 | −2 | +9 | −1 | qualidade |
| Acelerar linha | 8 | −9 | −18 | −11 | capacidade |
| Campanha de marketing | 13 | +5 | −3 | −3 | qualidade |
| Manutenção preventiva | 16 | −2 | +2 | +3 | capacidade |
| Trocar fornecedor | 14 | −5 | −6 | −2 | transporte |

## 3. Frames
Desktop 1440×1024; mobile 440×956. Catálogo em grade desktop e lista vertical mobile; cabeçalho/semana/saldo persistentes.

## 4. Wireframe
`[Missão + PDCA + semana + saldo 18%] [Instrução 8%] [Catálogo 60%] [CATO 8%] [Continuar 6%]`.

## 5. Conteúdo
Título “Escolha um projeto”; texto “Cada projeto afeta a operação de um jeito. Confira custo e consequência antes de confirmar.” Cada cartão mostra nome, custo em MoedACTAs, categoria e o efeito explícito em cada indicador: “Aumenta”, “Reduz” ou “Sem alteração”, com a quantidade em pontos percentuais. A confirmação repete os três efeitos antes do débito. Ação “Selecionar”. Projeto usado: selo e texto “Já usado nesta operação”; saldo insuficiente: “Saldo insuficiente” e quanto falta, sem permitir seleção. CTA “Revisar escolha” após selecionar. Ajuda: efeitos serão aplicados conforme regras e eventos da semana.

## 6. Hierarquia
Saldo e semana acima do catálogo; custo e efeito com peso visual equivalente; estado indisponível explicado. CATO contextual e curto.

## 7. Componentes e tokens
`Heading Large`, `Heading Small`, `Body Medium`, `Body Small`, `Label Medium`, `Metric`; tokens de superfície/borda e cores semânticas definidos em `DESIGN_SYSTEM.md`; espaçamento 8/12/16/24; raios 8/12/16. Cartão de projeto, indicador, saldo, seleção, CTA, CATO.

## 8. Interação
Cartão selecionável por teclado e ponteiro, foco evidente, hover/pressionado, seleção persistente até troca/cancelamento. Projeto usado ou sem saldo desabilitado com descrição acessível. Selecionar não cobra; “Revisar escolha” abre confirmação. Tecla Escape volta sem mutar estado.

## 9. Acessibilidade
Leitura de cartão: nome, custo, efeitos, disponibilidade e ação. Usar os verbos “Aumenta”, “Reduz” e “Sem alteração” junto ao indicador e ao valor; não depender apenas de sinal, cor ou seta; alvos 44 px no mobile; foco lógico; contraste e leitor de tela conferir; movimento reduzido.

## 10. Aceite
Nove projetos e valores exatamente iguais à tabela oficial; nenhum projeto usado selecionável; saldo visível; seleção não debita; mobile mantém custo e consequência legíveis.
