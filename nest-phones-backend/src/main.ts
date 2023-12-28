/*
API (Projeto 1)
● Criar uma API em NodeJS utilizando o framework NestJS.  /done 
● A API deve se conectar ao banco de dados SQLite por meio do ORM PrismaJS. /done
● A API deve conter um endpoint GET “api/users” que retorna a lista paginada de
usuários cadastrados. / done
● A API deve conter um endpoint GET “api/users/:userId/phone_numbers” que
retorna a lista de telefones de um determinado usuário por ID (validar
parâmetros via DTO). / done
● A API deve utilizar uma API_KEY de autenticação por meio de um Injectable.
(Validação simples, apenas verificar se a API_KEY existe e se é igual a API_KEY
do servidor. Pode usar variáveis de ambiente.) 

    /\
   /  \
  /    \
 / _ _ _\
    ||
    ||
continuar daqui

Frontend (Projeto 2)
● O Frontend deverá ser desenvolvido utilizando o framework NextJS e Material UI
● A página inicial deverá listar os usuários paginados (5 por página) retornados
pela API através do endpoint GET “api/users”.
● Persistir paginação em URL.

● Ao clicar em um usuário específico, uma modal deverá ser aberta exibindo a lista
dos telefones referentes a esse usuário. (endpoint GET
“api/users/:userId/phone_numbers”)
● O candidato tem liberdade para criar o design/estilos que desejar.
*/

// get all phone numbers 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
