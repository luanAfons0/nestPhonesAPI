# NestPhonesAPI

## Objetivos do projeto:
### Back-end (Projeto 1)✔️
1. Criar uma API em NodeJS utilizando o framework NestJS.
2. A API deve se conectar ao banco de dados SQLite por meio do ORM PrismaJS.
3. A API deve conter um endpoint GET “api/users” que retorna a lista paginada de usuários cadastrados.
4. A API deve conter um endpoint GET “api/users/:userId/phone_numbers” que retorna a lista de telefones de um determinado usuário por ID (validar parâmetros via DTO).
5. A API deve utilizar uma API_KEY de autenticação por meio de um Injectable. (Validação simples, apenas verificar se a API_KEY existe e se é igual a API_KEY do servidor. Pode usar variáveis de ambiente.)


### Frontend (Projeto 2)✔️
1. O Frontend deverá ser desenvolvido utilizando o framework NextJS e Material UI
2. A página inicial deverá listar os usuários paginados (5 por página) retornados pela API através do endpoint GET “api/users”.
3. Persistir paginação em URL.
4. Ao clicar em um usuário específico, uma modal deverá ser aberta exibindo a lista dos telefones referentes a esse usuário. (endpoint GET “api/users/:userId/phone_numbers”)
● O candidato tem liberdade para criar o design/estilos que desejar.

❗Atenção❗
Para clonar o projeto utilize o comando:
```bash
git clone https://github.com/luanAfons0/nestPhonesAPI
```
 Continue a partir dos "README" de cada projeto(pasta) criada no repositorio escolhido.
