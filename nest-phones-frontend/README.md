Este é um projeto [Next.js] inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Nest-Phones API  front-end
## Um projeto client-side completo usando Next.Js e Typescript

* O Frontend foi desenvolvido utilizando o framework NextJS e Material UI
* A página inicial lista os usuários paginados (5 por página) retornados pela API através do endpoint GET “api/users”.
* Persistir paginação em URL.
* Ao clicar em um usuário específico, uma modal será aberto exibindo a lista dos telefones referentes a esse usuário. (endpoint GET“api/users/:userId/phone_numbers”)

## Preparação de ambiente :exclamation:

1. Instalação de dependencias:
Para que a aplicação funcione será necessaria a instalação dos pacotes utilizados. Use o comando a seguir para a instalação dos mesmos:
```bash
$ npm install
```

2. Criação de variaveis de ambiente:
Na pasta raiz da aplicação, crie um arquivo nomeado ".env.local" e faça a atribuição das variaveis de ambiente necessarias:
:exclamation: (O valor desta variavel tem que ser o mesmo das "API_KEY" declaradas no nest-phones-back-end)
```bash
$ NEXT_PUBLIC_VALIDATION_KEY1="validation_key1"
$ NEXT_PUBLIC_VALIDATION_KEY2="validation_key2"
```

3. Fazendo a aplicação rodar :rocket:

```bash
# Desenvolvimento
$ npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver os resultados.

## Saiba mais

Para aprender mais sobre Next.js, de uma olhada nos seguintes conteudos.

- [Next.js Documentation](https://nextjs.org/docs) - Aprenda sobre as funcionalidades de Next.js e API.
- [Learn Next.js](https://nextjs.org/learn) - Um aprendizado interativo sobre Next.js.

Você tambem pode checar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - sua opnião e contribuições sempre são bem vindas !!!
