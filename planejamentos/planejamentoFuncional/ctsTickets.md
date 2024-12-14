# Casos de Teste - Rota `/Movies`

## **GET**: Consultar Tickets 

- **CT00**: Usuário consulta lista de Tickets.
  - **Descrição**: Verificar se o usuário consegue listar todos os Tickets cadastrados.
  - **Resposta Esperada**: `Status 200 - Listados com sucesso`.

- **CT01**: Usuário administrador consulta lista de Tickets.
  - **Descrição**: Verificar se o usuário administrador consegue listar todos os Tickets cadastrados.
  - **Resposta Esperada**: `Status 200 - Listados com sucesso`.

## **POST**: Criar Novo Ticket

- **CT02**: Usuário administrador cria um Ticket com todos os dados válidos.
  - **Descrição**: Verificar se o usuário administrador consegue criar um ticket fornecendo todos os dados obrigatórios corretamente.
  - **Resposta Esperada**: `Status 201 - Criado com sucesso, retorna o ID do ticket`.

- **CT03**: Usuário comum tenta criar um ticket com todos os dados válidos.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar criar um ticket.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT04**: Usuário administrador tenta criar um ticket com título já existente.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket com um título que já existe.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT05**: Usuário administrador tenta criar um ticket sem movieId.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket sem preencher o price de movieId.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT06**: Usuário administrador tenta criar um ticket sem userId (`userId`).
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket sem preencher o price de `userId`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT07**: Usuário administrador tenta criar um ticket sem seatnumber (`seatnumber`).
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket sem preencher o price de `seatnumber`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT08**: Usuário administrador tenta criar um ticket sem price.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket sem preencher  `price`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT09**: Usuário administrador tenta criar um ticket sem showtime..
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket sem preencher `showtime` .
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT10**: Usuário administrador tenta criar um ticket com dados numéricos nos campos de texto.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket com dados numéricos em campos que exigem texto.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT11**: Usuário administrador tenta criar um ticket com dados repetidos.
  - **Descrição**: Verificar a resposta do sistema ao tentar criar um ticket com dados repetidos em campos onde não é permitido duplicação.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.


## **GET ID**: Consultar ticket por ID

- **CT13**: Usuário consulta um ticket por ID existente.
  - **Descrição**: Verificar se o usuário consegue listar os detalhes de um ticket específico usando um ID válido.
  - **Resposta Esperada**: `Status 200 - Listado com sucesso, retorna todos os detalhes do ticket`.

- **CT14**: Usuário consulta um ticket por ID inexistente.
  - **Descrição**: Verificar a resposta do sistema ao tentar listar um ticket com ID inexistente.
  - **Resposta Esperada**: `Status 404 - Não encontrado`.

## **PUT**: Atualizar ticket por ID

- **CT15**: Usuário administrador atualiza um campo de um ticket existente.
  - **Descrição**: Verificar se o usuário administrador consegue atualizar um campo específico de um ticket usando um ID válido.
  - **Resposta Esperada**: `Status 200 - Atualizado com sucesso, retorna os detalhes atualizados do ticket`.

- **CT16**: Usuário comum tenta atualizar um campo de um ticket existente.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar atualizar um campo de um ticket.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT17**: Usuário administrador tenta atualizar um ticket com título vazio.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um ticket deixando o título vazio.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT18**: Usuário administrador tenta atualizar todos os campos de um ticket para valores vazios.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um ticket preenchendo todos os campos com valores vazios.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT19**: Usuário administrador tenta atualizar um ticket com dados numéricos em campos de texto.
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um ticket com dados numéricos em campos de texto.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT20**: Usuário administrador tenta atualizar um ticket sem a data de lançamento (`seatnumber`).
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um ticket sem preencher o price de `seatnumber`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

- **CT21**: Usuário administrador tenta atualizar um ticket sem a data de exibição (`showtime`).
  - **Descrição**: Verificar a resposta do sistema ao tentar atualizar um ticket sem preencher o price de `showtime`.
  - **Resposta Esperada**: `Status 400 - Requisição inválida`.

## **DELETE**: Excluir ticket por ID

- **CT22**: Usuário administrador exclui um ticket com ID correto.
  - **Descrição**: Verificar se o usuário administrador consegue excluir um ticket específico usando um ID válido.
  - **Resposta Esperada**: `Status 204 - Deletado com sucesso`.

- **CT23**: Usuário comum tenta excluir um ticket com ID correto.
  - **Descrição**: Verificar a resposta do sistema ao usuário comum tentar excluir um ticket.
  - **Resposta Esperada**: `Status 403 - Acesso negado`.

- **CT24**: Usuário administrador tenta excluir um ticket com ID incorreto.
  - **Descrição**: Verificar a resposta do sistema ao tentar excluir um ticket com ID inexistente.
  - **Resposta Esperada**: `Status 404 - Não encontrado`.

- **CT25**: Usuário administrador tenta excluir um ticket que possui ingressos comprados.
  - **Descrição**: Verificar a resposta do sistema ao tentar excluir um ticket que possui ingressos vinculados.
  - **Resposta Esperada**: `Status 400 - Requisição inválida, não pode excluir ticket com ingressos vendidos`.


