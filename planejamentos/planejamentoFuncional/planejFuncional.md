## Planejamento dos testes

### 2.Resumo

Este teste está sendo feito para fins de conhecimento.

### 3.Pessoas a serem envolvidas
- Kauê Humenhuk Ruchinski

### 4.Funcionalidades ou Módulos a serem testados

> Movies:

- 1º Teste criação de filmes(POST)

- 2º Teste busca/lista de filmes(GET)

- 3º Teste para buscar filme pelo ID(GET)

- 4º Teste de edição de filmes(PUT)

- 5º Teste de Exclusão de filmes(DELETE)

> Tickets:

- 1º Teste para Cadastro de Tickets(POST)

- 2º Teste para a busca/listagem de Tickets cadastrados(GET)

- 3º Teste para buscar tickets pelo ID(GET)

- 4º Teste de edição dos Tickets(PUT)

- 5º Teste para exclusão de Tickets(DELETE)


### 5.Local dos Testes

Na minha máquina, segue as configurações:

- Processador	Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz   2.90 GHz

- RAM instalada	16,0 GB 

- Tipo de sistema	Sistema operacional de 64 bits, processador baseado em x64

- Edição	Windows 10 Pro ; Versão	22H2






### 6.Recursos necessários

- Necessita de um computador
- Necessita de periféricos(mouse, teclado,monitor)
- Necessita de energia(luz, internet)
- Necessita de uma sala/quarto
- Apenas uma pessoa para realiza-lo
- Necessita de uma cadeira

### 7.Critérios Usados

Serão feitos um total de ? testes e ? Casos.

Serão avaliados pelo status , se esta correto com o que se pede, e seu response

### 8.Riscos

- Cair energia
- Caso de estrago ou quebra da máquina
- Alguma intervenção na sala/quarto
- Alguma doença no tester
- Emergência familiar

### 9.Como os testes serão divulgados

Sera divulgado pelo github e pelo jira 

## US 004: [API] Carrinho

        DoR:

- **Banco de dados e infraestrutura para desenvolvimento disponibilizados.**
- **API de cadastro filmes implementada.**
- **API de autenticação implementada.**
- **Ambiente de testes disponibilizado.**

        DoD:

- **CRUD da rota de tickets implementado (CRIAR, LISTAR, ATUALIZAR E DELETAR).**
- **Análise de testes cobrindo a rota de carrinhos.**
- **Matriz de rastreabilidade atualizada.**
- **Automação de testes baseado na análise realizada.**

        Acceptance Criteria:

- **Movies não autenticados não devem conseguir realizar ações na rota de tickets.**
- **O ticket deve ser vinculado ao filme do token enviado no header Authorization.**

# Matriz de Rasteabilidade /movies

# Casos de Teste - Rota `/movies`

| **ID** | **Método** | **Descrição**                                                                                  | **Resposta Esperada**                                          |
|--------|------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| CT01   | GET        | Consultar Lista de Filmes                                                                      | Status 200 OK - Retornar lista de filmes.                      |
| CT02   | POST       | Administrador lança um filme com todos os dados preenchidos.                                   | Status 201 Created - Retornar ID do novo filme.                |
| CT03   | POST       | Usuário comum tenta lançar um filme.                                                           | Status 403 Forbidden - Acesso negado.                          |
| CT04   | POST       | Administrador lança filme com título já existente.                                             | Status 400 Bad Request - Título duplicado.                     |
| CT05   | POST       | Administrador lança filme sem título.                                                          | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT06   | POST       | Administrador lança filme sem showtime.                                                        | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT07   | POST       | Administrador lança filme sem launchdate.                                                      | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT08   | POST       | Administrador lança filme sem (campo específico).                                              | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT09   | POST       | Administrador lança filme sem dados.                                                           | Status 400 Bad Request - Campos obrigatórios ausentes.         |
| CT10   | POST       | Administrador lança filme com campos vazios.                                                   | Status 400 Bad Request - Campos obrigatórios ausentes.         |
| CT11   | POST       | Administrador lança filme com números em campos de texto.                                      | Status 400 Bad Request - Tipo de dado inválido.                |
| CT12   | POST       | Administrador lança filme com dados repetidos.                                                 | Status 400 Bad Request - Duplicidade nos campos únicos.        |
| CT13   | GET        | Consultar filme por ID existente.                                                              | Status 200 OK - Detalhes do filme retornados.                  |
| CT14   | GET        | Consultar filme por ID inexistente.                                                            | Status 404 Not Found - Filme não encontrado.                   |
| CT15   | PUT        | Administrador atualiza detalhes de um filme.                                                   | Status 200 OK - Detalhes atualizados retornados.               |
| CT16   | PUT        | Usuário comum tenta atualizar detalhes de um filme.                                            | Status 403 Forbidden - Acesso negado.                          |
| CT17   | PUT        | Administrador tenta atualizar filme com título vazio.                                          | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT18   | PUT        | Administrador tenta atualizar filme com todos os campos vazios.                                | Status 400 Bad Request - Campos obrigatórios ausentes.         |
| CT19   | PUT        | Administrador tenta atualizar filme com dados numéricos em campos de texto.                    | Status 400 Bad Request - Tipo de dado inválido.                |
| CT20   | PUT        | Administrador tenta atualizar filme sem launchdate.                                            | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT21   | PUT        | Administrador tenta atualizar filme sem showtime.                                              | Status 400 Bad Request - Campo obrigatório ausente.            |
| CT22   | DELETE     | Administrador exclui filme com ID correto.                                                     | Status 204 No Content - Filme excluído com sucesso.            |
| CT23   | DELETE     | Usuário comum tenta excluir filme.                                                             | Status 403 Forbidden - Acesso negado.                          |
| CT24   | DELETE     | Administrador tenta excluir filme com ID incorreto.                                            | Status 404 Not Found - Filme não encontrado.                   |
| CT25   | DELETE     | Administrador tenta excluir filme com tickets comprados.                                       | Status 400 Bad Request - Filme não pode ser excluído.          |


# /tickets

# Casos de Teste - Rota `/tickets`

| **ID** | **Método** | **Descrição**                                                                                  | **Resposta Esperada**                                          |
|--------|------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| CT01   | GET        | Consultar Lista de Tickets.                                                                    | Status 200 OK - Retornar lista de tickets.                     |
| CT02   | POST       | Usuário comum compra ticket para filme disponível.                                             | Status 201 Created - Ticket comprado com sucesso.              |
| CT03   | POST       | Usuário tenta comprar ticket para filme não disponível.                                        | Status 400 Bad Request - Filme não disponível.                 |
| CT04   | POST       | Usuário tenta comprar ticket sem dados obrigatórios.                                           | Status 400 Bad Request - Campos obrigatórios ausentes.         |
| CT05   | POST       | Usuário tenta comprar ticket com dados inválidos.                                              | Status 400 Bad Request - Dados inválidos.                      |
| CT06   | GET        | Consultar ticket por ID existente.                                                             | Status 200 OK - Detalhes do ticket retornados.                 |
| CT07   | GET        | Consultar ticket por ID inexistente.                                                           | Status 404 Not Found - Ticket não encontrado.                  |
| CT08   | PUT        | Usuário comum atualiza detalhes de um ticket existente.                                        | Status 200 OK - Detalhes do ticket atualizados.                |
| CT09   | PUT        | Usuário tenta atualizar ticket com dados inválidos.                                            | Status 400 Bad Request - Dados inválidos.                      |
| CT10   | PUT        | Usuário tenta atualizar ticket inexistente.                                                    | Status 404 Not Found - Ticket não encontrado.                  |
| CT11   | DELETE     | Usuário comum cancela ticket com ID correto.                                                   | Status 204 No Content - Ticket cancelado com sucesso.          |
| CT12   | DELETE     | Usuário tenta cancelar ticket com ID incorreto.                                                | Status 404 Not Found - Ticket não encontrado.                  |
| CT13   | DELETE     | Usuário tenta cancelar ticket já cancelado.                                                    | Status 400 Bad Request - Ticket já foi cancelado.              |
| CT14   | DELETE     | Usuário tenta cancelar ticket de outro usuário.                                                | Status 403 Forbidden - Acesso negado.                          |
| CT15   | GET        | Verificar histórico de tickets comprados por um usuário.                                       | Status 200 OK - Retornar histórico de tickets comprados.       |
| CT16   | GET        | Consultar disponibilidade de tickets para um filme específico.                                 | Status 200 OK - Retornar disponibilidade de tickets.           |
| CT17   | POST       | Usuário tenta comprar ticket com pagamento inválido.                                           | Status 400 Bad Request - Pagamento inválido.                   |
| CT18   | PUT        | Usuário tenta atualizar detalhes de um ticket pago.                                            | Status 403 Forbidden - Não é possível alterar ticket pago.     |
| CT19   | DELETE     | Usuário tenta cancelar ticket pago.                                                            | Status 403 Forbidden - Não é possível cancelar ticket pago.    |
