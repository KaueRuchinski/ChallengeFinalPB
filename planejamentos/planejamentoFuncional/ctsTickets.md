# Casos de Teste - Rota `/Movies`

## **GET**: Consultar Filmes

- **CT00**: Usuário consulta lista de filmes.
  - **Descrição**: Verificar se o usuário consegue listar todos os filmes cadastrados.
  - **Resposta Esperada**: `Status 200 - Listados com sucesso`.

- **CT01**: Usuário administrador consulta lista de filmes.
  - **Descrição**: Verificar se o usuário administrador consegue listar todos os filmes cadastrados.
  - **Resposta Esperada**: `Status 200 - Listados com sucesso`.

## **POST**: Criar Novo Filme

- **CT02**: Usuário administrador cria um filme com todos os dados válidos.
  - **Descrição**: Verificar se o usuário administrador consegue criar um filme fornecendo todos os dados obrigatórios corretamente.
  - **Resposta Esperada**: `Status 201 - Criado com sucesso, retorna o ID do filme`.

- **CT03**: Usuário comum tenta criar um filme com todos os dados válidos.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar criar um filme.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT04**: Usuário administrador tenta criar um filme com título já existente.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme com um título que já existe.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT05**: Usuário administrador tenta criar um filme sem título.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme sem preencher o campo obrigatório de título.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT06**: Usuário administrador tenta criar um filme sem data de exibição (`showtime`).
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme sem preencher o campo obrigatório de `showtime`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT07**: Usuário administrador tenta criar um filme sem data de lançamento (`launchdate`).
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme sem preencher o campo obrigatório de `launchdate`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT08**: Usuário administrador tenta criar um filme sem dados obrigatórios.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme sem preencher qualquer campo obrigatório.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT09**: Usuário administrador tenta criar um filme com campos vazios.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme com campos obrigatórios preenchidos com valores vazios.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT10**: Usuário administrador tenta criar um filme com dados numéricos nos campos de texto.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme com dados numéricos em campos que exigem texto.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT11**: Usuário administrador tenta criar um filme com dados repetidos.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um filme com dados repetidos em campos onde não é permitido duplicação.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.


## **GET ID**: Consultar Filme por ID

- **CT13**: Usuário consulta um filme por ID existente.
  - **Descrição**: Verificar se o usuário consegue listar os detalhes de um filme específico usando um ID válido.
  - **Resposta Esperada**: `Status 200 - Listado com sucesso, retorna todos os detalhes do filme`.

- **CT14**: Usuário consulta um filme por ID inexistente.
  - **Descrição**: Verificar a resposta do sistema ao tentar listar um filme com ID inexistente.
  - **Resposta Esperada**: `Status 404 - Não encontrado`.

## **PUT**: Atualizar Filme por ID

- **CT15**: Usuário administrador atualiza um campo de um filme existente.
  - **Descrição**: Verificar se o usuário administrador consegue atualizar um campo específico de um filme usando um ID válido.
  - **Resposta Esperada**: `Status 200 - Atualizado com sucesso, retorna os detalhes atualizados do filme`.

- **CT16**: Usuário comum tenta atualizar um campo de um filme existente.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar atualizar um campo de um filme.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT17**: Usuário administrador tenta atualizar um filme com título vazio.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um filme deixando o título vazio.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT18**: Usuário administrador tenta atualizar todos os campos de um filme para valores vazios.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um filme preenchendo todos os campos com valores vazios.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT19**: Usuário administrador tenta atualizar um filme com dados numéricos em campos de texto.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um filme com dados numéricos em campos de texto.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT20**: Usuário administrador tenta atualizar um filme sem a data de lançamento (`launchdate`).
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um filme sem preencher o campo obrigatório de `launchdate`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT21**: Usuário administrador tenta atualizar um filme sem a data de exibição (`showtime`).
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um filme sem preencher o campo obrigatório de `showtime`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

## **DELETE**: Excluir Filme por ID

- **CT22**: Usuário administrador exclui um filme com ID correto.
  - **Descrição**: Verificar se o usuário administrador consegue excluir um filme específico usando um ID válido.
  - **Resposta Esperada**: `Status 204 - Deletado com sucesso`.

- **CT23**: Usuário comum tenta excluir um filme com ID correto.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar excluir um filme.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT24**: Usuário administrador tenta excluir um filme com ID incorreto.
  - **Descrição**: Verificar a resposta do sistema ao tentar excluir um filme com ID inexistente.
  - **Resposta Esperada**: `Status 404 - Não encontrado`.

- **CT25**: Usuário administrador tenta excluir um filme que possui ingressos comprados.
  - **Descrição**: Verificar a resposta do sistema ao tentar excluir um filme que possui ingressos vinculados.
  - **Resposta Esperada**: `Status 400 - Requisição inválida, não pode excluir filme com ingressos vendidos`.


