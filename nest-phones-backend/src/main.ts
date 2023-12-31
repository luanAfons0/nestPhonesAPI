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
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
