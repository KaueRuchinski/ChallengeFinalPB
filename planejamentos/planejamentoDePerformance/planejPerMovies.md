# Planejamento de performance K6

## Objetivo 
`Os testes de performance ou não funcionais tem como objetivo, verificar se a API está funcionando de forma correta e estavel.` 


## Relatórios:
1. Vão ser reportados as evidencia pelo `summaryExemplo.html`, etc., para gerar os dados detalhados de cada tipo de teste.

## Resumo dos Parâmetros dos Tipos de Testes

| Sigla | Tipo de Teste        | Configuração de Teste                      | Ação                 | Verbo  |
|-------|----------------------|--------------------------------------------|----------------------|--------|
| TP01  | Escalabilidade                | Stages: 100 a 500, Duração: 3 min           | Listar todos os filmes | GET    |
| TP02  | Carga            | Vus: 200, Duração: 1:40 min            | Criar um novo filme  | POST   |
| TP03  | Estresse       | Stages: 400 a 500, Duração: 3:20 min           | Criar um novo filme  | POST   |
| TP04  |     Pico            | Stages: 100 a 500, Duração: 40 sec          | Criar um novo filme   | POST    |
| TP05  | Concorrencia          | Vus: 300, Duração: 1:40 min  | Criar um novo filme     | POST |

## TP01: Listar os filmes

- Será aplicado teste de escalabilidade
- 500 usuarios durante 3m

## TP02: Criação de filme

- Será aplicado teste de carga
- 200 usuarios durante 1:40m

## TP03: Criar um novo filme
- Será aplicado teste de estresse
- 500 usuarios durante 3:20m

## TP04: Criar um novo filme
- Será aplicado teste de pico
- 500 usuarios durante 40s

## TP05: Criar um novo filme
- Será aplicado teste de concorrencia
- 300 usuarios durante 1:40m