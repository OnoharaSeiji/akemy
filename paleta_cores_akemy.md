# Atualização de cores do AKEMY

Esta atualização aplica princípios práticos de legibilidade e aprendizagem visual:

- alto contraste entre texto e fundo
- menos saturação nas cores principais
- uso semântico das cores
- destaque seletivo em vez de decoração excessiva
- melhor conforto para leitura longa

## Semântica da paleta

### Dashboard / cronograma
- Azul marinho: estrutura, navegação, títulos principais
- Dourado claro: revisão, destaque leve, badges
- Verde: progresso, exemplos positivos, mini simulados
- Vermelho só para alertas futuros, não como cor dominante

### Apostilas (runtime compartilhado)
- Fundo claro neutro
- Texto escuro para leitura longa
- Azul: conceito e títulos
- Verde: exemplos e apoio
- Bege/dourado: dicas e fórmulas
- Vermelho reservado para alerta/erro comum

## Arquivos incluídos
- style.css
- apostilas/runtime.js

## Observação importante
As apostilas antigas que têm CSS inline próprio (ex.: dias iniciais feitos como HTML completo) não mudam automaticamente com este pacote. Esta atualização atinge:
- a home / cronograma via style.css
- as apostilas que usam runtime compartilhado via apostilas/runtime.js
