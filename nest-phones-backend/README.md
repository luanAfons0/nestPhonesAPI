<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para desenvolvimento eficiente e escalavel de aplicações "server-side".</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Nest-Phones API  back-end

## Um projeto server-side completo com o CRUD de dados usando Nest.js, Prisma ORM e banco de dados SQLite

* A API se conecta ao banco de dados SQLite por meio do ORM PrismaJS.
* A API contem um endpoint GET “api/users?page={x}” que retorna a lista paginada de usuários cadastrados.
* A API contem um endpoint GET “api/users/:userId/phone_numbers” que retorna a lista de telefones de um determinado usuário por ID ( parâmetros validados via DTO).
* A API utiliza uma API_KEY de autenticação por meio de um Injectable.
(Validação simples, apenas verificar se a API_KEY existe e se é igual a API_KEY
do servidor.)

## Preparação de ambiente :exclamation:

1. Instalação de dependencias:
Para que a aplicação funcione será necessaria a instalação dos pacotes utilizados. Use o comando a seguir para a instalação dos mesmos:
```bash
$ npm install
```

2. Criação de variaveis de ambiente:
Na pasta raiz da aplicação, crie um arquivo nomeado ".env" e faça a atribuição das variaveis de ambiente necessarias:
> DATABASE_URL="file:./dev.db"(recomendado que possua esse valor)
> API_KEY1="validation_key1"(valor que desejar)
> API_KEY2="validation_key2"(valor que desejar)

## Fazendo a aplicação rodar :rocket:

```bash
# Desenvolvimento
$ npm run start

# Modo de observação
$ npm run start:dev

# Modo de produção
$ npm run start:prod
```

## Suporte :pushpin:

Nest.js é um projeto de codigo aberto(MIT-licensed). Ele pode crescer graças a colaboradores e o suporte de increveis apoiadores. Se desejar fazer parte dessa equipe, por favor [saiba mais aqui](https://docs.nestjs.com/support).

## Fique ligado :smile:

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença de projeto

Nest is [MIT licensed](LICENSE).
