# Planejamento de performance K6

## Relatórios:
1. Vão ser reportados as evidencia pelo `summaryExemplo.html`, etc., para gerar os dados detalhados de cada tipo de teste.

## Resumo dos Parâmetros dos Tipos de Testes

| Sigla | Tipo de Teste        | Configuração de Teste                      |
|-------|----------------------|--------------------------------------------|
| TP01  | Carga                | Stages: 50 a 200, Duração: 4 min           |
| TP02  | Estresse             | Stages: 50 a 300, Duração: 4 min           |
| TP03  | Escalabilidade       | Stages: 50 a 500, Duração: 5 min           |
| TP04  | Pico                 | Stages: 50 a 500, Duração: 30 sec          |
| TP05  | Capacidade           | Stages: 50 a 500, Duração: 3 min e 30 sec  |
