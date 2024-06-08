# TechNexus Store

Um sistema de uma loja de eletrônicos online.

## Setup Inicial

Para execução do sistema web TechNexus Store, é necessário, inicialmente, a instalação do banco de dados utilizado e a Runtime Javascript. O sistema foi desenvolvido na linguagem Typescript que, quando executada, é transpilada para Javascript, dessa forma, faz-se necessária a instalação desse runtime.


| Software   | Versão |
| ------------ | --------- |
| Postgresql | 16      |
| Node.js    | 20.13   |



*Importante: Ao instalar o Postgresql, um usuário e uma senha são requeridos pelo instalador. Guarde-os com cautela pois serão será necessários para criar e acessar o banco de dados posteriormente.*

## Criando o banco de dados para a aplicação

Após a instalação do Postgres, é necessário criar um banco de dados que será usado pela aplicação.
Para isso: 
* Abra o PgAdmin e clique em `servers` no canto superior esquerdo. Nesse momento será necessário inserir a senha definida durante a instalação do Postgres.

* Após inserida a senha, clique com o botão direito sobre `Databases`, passe o mouse sobre a opção `create` e selecione `Database`. 

* Na janela que se abriu, escolha um nome para o banco de dados e clique em `save`.

*Guarde o nome do banco de dados para configurar a connection string do backend posteriormente.*
<br />

## Clonando o repositório

Após ambos banco de dados e Runtime terem sido instalados e devidamente configurados, é necessário ter no computador um **clone do repositório do projeto**.

Para isso, o **git** precisa estar instalado no computador.
Com o git instalado, abra a pasta onde se quer clonar o projeto e digite:
```
git clone https://github.com/Raul772/TechNexusStore.git
```


## Instalando as dependências

O projeto é composto por uma pasta `backend` e uma pasta `frontend`. De forma autoexplicativa, a pasta backend é responsável pelo processamento backend da aplicação, enquanto a pasta frontend é reponsável pelo processamento das páginas mostradas ao usuário.

Ambos backend e frontend possuem dependências que podem ser instaladas pelo `npm`.

Abra um terminal em cada pasta (`frontend` e `backend`) e digite:

```
npm install
```

Após o comando, todas as dependências necessárias serão instaladas.

## Configurando o ambiente

O backend, assim como o frontend, possui variáveis de ambiente que são lidas durante a execução da aplicação. Essas variáveis precisam ser definidas anteriormente à execução.

Na pasta raiz de ambos backend e frontend (`backend` e `frontend`) crie um arquivo `.env` com as seguintes variáveis:

Arquivo `.env` na pasta `backend`:

``````
PORT="3000"
DATABASE_URL="postgresql://postgres:12345@localhost:5432/TechNexusStore"
JWT_SECRET_KEY="criptografia12345"
``````

* `PORT`: A porta em que o servidor backend escutará;
* `DATABASE_URL`: A connection string do banco de dados *(no formato `postgresql://{user}:{password}@{host}:{porta}/{nomedobanco}`)*;
* `JWT_SECRET_KEY`: Chave secreta de ciframento de Tokens JWT;

*Lembre-se de substituir os campos da connection string com as informações do banco de dados que você criou*
<br />

Arquivo `.env` na pasta `frontend`:

``````
VITE_API_BASE_URL="http://localhost:3000/"
``````

* `VITE_API_BASE_URL`: A URL base da API Backend;

## Estruturando e populando o banco de dados

O banco de dados, após criado, estará limpo de informações. Dessa forma, precisamos criar as tabelas necessárias e populá-las para o funcionamento do sistema.

* **Para criar as tabelas:** \
No terminal aberto na pasta raiz do backend (`backend`), digite:
```
npx prisma migrate dev --name init
```

* **Para popular o banco:** \
No mesmo terminal aberto na pasta raiz do backend (`backend`), digite:
```
npx prisma db seed
```

Após os comandos, se tudo correu bem, o banco de dados deve estar estruturado e populado.

## Executando a aplicação
Depois de tudo pronto, para iniciar a aplicação, é preciso ter os servidores backend e frontend executando simultâneamente. \
<br />
Para isso, abra um terminal em ambas as pastas `frontend` e `backend` e inicie em ambos terminais os servidores com o comando:
```
npm run start
```

Após iniciados os servidores, a aplicação pode ser acessada pelo link:

http://localhost:80
