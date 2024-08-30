# Planejamento de performance K6

## Objetivo 
`Os testes de performance ou não funcionais tem como objetivo, verificar se a API está funcionando de forma correta e estavel.` 


## Relatórios:
1. Vão ser reportados as evidencia pelo `summaryExemplo.html`, etc., para gerar os dados detalhados de cada tipo de teste.

## Resumo dos Parâmetros dos Tipos de Testes

| Sigla | Tipo de Teste        | Configuração de Teste                      | Ação                 | Verbo  |
|-------|----------------------|--------------------------------------------|----------------------|--------|
| TP01  | Escalabilidade               | Stages: 400 a 500, Duração: 3:20 min           | Listar todos os ticketss | GET    |
| TP02  | Pico            | Stages: 100 a 500, Duração: 40s           | Listar todos os ticketss  | GET   |
| TP03  | Concorrencia         | Vus: 300, Duração: 1:40 min           | Listar todos os ticketss  | GET    |
| TP04  |     Carga            | Vus: 200, Duração: 1:40 min          | Criar um novo filme   | POST    |
| TP05  | Estresse          | Vus: 200, Duração: 1:40 min  | Criar um novo filme     | POST |

## TP01: Listar os tickets

- Será aplicado teste de escalabilidade
- 500 usuarios durante 3:20m

## TP02: Listar os tickets

- Será aplicado teste de pico
- 500 usuarios durante 40s

## TP03: Listar os tickets
- Será aplicado teste de concorrencia
- 300 usuarios durante 1:40m

## TP04: Criar um novo filme
- Será aplicado teste de carga
- 200 usuarios durante 1:40m

## TP05: Criar um novo filme
- Será aplicado teste de estresse
- 200 usuarios durante 1:40m