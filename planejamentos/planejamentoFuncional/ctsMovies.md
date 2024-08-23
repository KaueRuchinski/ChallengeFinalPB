# Casos de Teste para a Rota `/Movies`

## GET /movies

### CT01: Consultar Lista de Filmes
**Descrição:** O usuário deve conseguir consultar a lista de filmes cadastrados.
**Resposta Esperada:** Retornar status 200 com a lista de filmes.

## POST /movies

### CT02: Administrador Lança um Filme com Dados Preenchidos
**Descrição:** O administrador deve conseguir criar um novo filme fornecendo todos os dados obrigatórios.
**Resposta Esperada:** Retornar status 201 Created com o ID do novo filme.

### CT03: Usuário Comum Tenta Lançar um Filme
**Descrição:** Um usuário comum tenta criar um filme, mas não possui permissões adequadas.
**Resposta Esperada:** Retornar status 403 Forbidden.

### CT04: Lançar Filme com Título Já Existente
**Descrição:** O administrador tenta criar um filme com um título que já está cadastrado.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de título duplicado.

### CT05: Lançar Filme Sem Título
**Descrição:** O administrador tenta criar um filme sem fornecer o título.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT06: Lançar Filme Sem `showtime`
**Descrição:** O administrador tenta criar um filme sem fornecer o `showtime`.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT07: Lançar Filme Sem `launchdate`
**Descrição:** O administrador tenta criar um filme sem fornecer a data de lançamento (`launchdate`).
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT08: Lançar Filme Sem (campo específico)
**Descrição:** O administrador tenta criar um filme sem fornecer um campo específico (definir qual campo).
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT09: Lançar Filme Sem Dados
**Descrição:** O administrador tenta criar um filme sem fornecer nenhum dado.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campos obrigatórios.

### CT10: Lançar Filme com Campos Vazios
**Descrição:** O administrador tenta criar um filme fornecendo valores vazios nos campos obrigatórios.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campos obrigatórios.

### CT11: Lançar Filme com Números em Campos de Texto
**Descrição:** O administrador tenta criar um filme fornecendo números nos campos de texto.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de tipo de dado.

### CT12: Lançar Filme com Dados Repetidos
**Descrição:** O administrador tenta criar um filme com dados duplicados em campos únicos.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de duplicidade.

### CT13: Resposta Deve Retornar 201 com ID Incluído
**Descrição:** Ao criar um novo filme, a resposta deve incluir o status 201 Created e o ID do filme.
**Resposta Esperada:** Retornar status 201 Created com o ID do novo filme.

## GET /movies/{id}

### CT14: Consultar Filme por ID Existente
**Descrição:** O usuário deve conseguir consultar os detalhes de um filme existente pelo ID.
**Resposta Esperada:** Retornar status 200 OK com os detalhes do filme.

### CT15: Consultar Filme por ID Inexistente
**Descrição:** O usuário tenta consultar um filme que não existe pelo ID.
**Resposta Esperada:** Retornar status 404 Not Found.

### CT16: Resposta Deve Retornar Todos os Detalhes
**Descrição:** A resposta para uma consulta por ID existente deve retornar todos os detalhes do filme.
**Resposta Esperada:** Retornar status 200 OK com os detalhes completos do filme.

### CT17: Resposta Deve Retornar Erro 404
**Descrição:** Ao tentar consultar um ID inexistente, a resposta deve retornar status 404 Not Found.
**Resposta Esperada:** Retornar status 404 Not Found.

## PUT /movies/{id}

### CT18: Administrador Atualiza Detalhes de um Filme
**Descrição:** O administrador deve conseguir atualizar os detalhes de um filme existente.
**Resposta Esperada:** Retornar status 200 OK com os detalhes atualizados do filme.

### CT19: Usuário Comum Tenta Atualizar um Filme
**Descrição:** Um usuário comum tenta atualizar um filme, mas não possui permissões adequadas.
**Resposta Esperada:** Retornar status 403 Forbidden.

### CT20: Atualizar Filme com Título Vazio
**Descrição:** O administrador tenta atualizar o título de um filme para um valor vazio.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT21: Atualizar Filme com Todos os Campos Vazios
**Descrição:** O administrador tenta atualizar um filme fornecendo valores vazios em todos os campos.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campos obrigatórios.

### CT22: Atualizar Filme com Dados Numéricos em Campos de Texto
**Descrição:** O administrador tenta atualizar um filme fornecendo números em campos de texto.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de tipo de dado.

### CT23: Atualizar Filme com `launchdate` Vazio
**Descrição:** O administrador tenta atualizar um filme sem fornecer a data de lançamento (`launchdate`).
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT24: Atualizar Filme com `showtime` Vazio
**Descrição:** O administrador tenta atualizar um filme sem fornecer o `showtime`.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

### CT25: Atualizar Filme com (campo específico) Vazio
**Descrição:** O administrador tenta atualizar um filme sem fornecer um campo específico (definir qual campo).
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de campo obrigatório.

## DELETE /movies/{id}

### CT26: Administrador Exclui Filme com ID Correto
**Descrição:** O administrador deve conseguir excluir um filme existente fornecendo o ID correto.
**Resposta Esperada:** Retornar status 204 No Content.

### CT27: Usuário Comum Tenta Excluir Filme
**Descrição:** Um usuário comum tenta excluir um filme, mas não possui permissões adequadas.
**Resposta Esperada:** Retornar status 403 Forbidden.

### CT28: Excluir Filme com ID Incorreto
**Descrição:** O administrador tenta excluir um filme fornecendo um ID incorreto.
**Resposta Esperada:** Retornar status 404 Not Found.

### CT29: Excluir Filme com Ticket Comprado
**Descrição:** O administrador tenta excluir um filme que possui ingressos comprados associados.
**Resposta Esperada:** Retornar status 400 Bad Request com mensagem de erro de dependência.
