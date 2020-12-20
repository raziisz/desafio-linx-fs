<h1 align="center">Test Linx</h1>
<p align="center">Solução para prova da Linx.</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postgres](https://www.postgresql.org/download/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/);

<h4 align="center"> 
	🚧 2 camadas API e 1 frontend ..  🚧
</h4>

### Features API de Catalogo

- [x] Implementar script de importação de dados json para banco de dados.
- [x] Definição de tecnologia api - NODE.js
- [x] Definição de banco de dados - Postgres
- [x] Unico endpoint com paramentros na rota id e parametros query de complete ou compact.
- [x] Definição de padrões de rotas, parametros
- [x] Clean code

### Diferenciais  API de Catalogo
- [x] Arquitetura planejada para diminuiçaõ de consumo de bd.
- [ ] Utilização de docker
- [ ] Geração de documento do uso da api
- [x] Testes unitarios


### 🚀 APIENDPOINTS Catalogo

<h3>/products/:id?response=</h3>
<p> Busca um produto atráves do id, podendo vim pelos parametros como "complete" para dados completo ou "compact" para dados compactados</p>

### Features API de Recomendações

- [x] API implemendata em Node.js
- [x] Endpoint retornando 2 tipos de dados: Produtos populares e Produtos com preços reduzidos, podendo passar parametros de quantidade de retorno "maxProducts" 
- [x] Integração com microserviço de recomendação
- [x] Integração com api de catalogo
- [x] Tratamento de produtos diferentes do status available serem removidos do retorno

### Diferenciais  API de Recomendações
- [ ] Perfomance dos serviços associados
- [ ] Utilização de docker
- [ ] Geração de documento do uso da api
- [x] Testes unitarios


### 🚀 APIENDPOINTS Recomendações

<h3>/recommendations?maxProducts=10</h3>
<p> Carrega os dados recomendados tanto para mais populares quanto produtos com preços reduzidos</p>

### Features frontend

- [x] Sem utilização de frameworks e/ou bibliotecas
- [x] Carousel no estilo pedido de imagem anexada
- [x] Comunicação com api de recomendação
- [x] Cada vitrine com 16 produtos

### Diferenciais  frontend
- [ ] Utilização de ferramentas de build ou bundle no projeto
- [ ] Utilização de algum pré-processador de css


### 🎲 Baixando projeto pelo git

```bash
# Clone este repositório em algum diretório
$ git clone <https://github.com/raziisz/desafio-linx-fs.git>

```

### 🚀 Depois de baixar projeto crie um arquivo .env na raizes dos projetos api-catalog e api-recommends
<p align="center">Siga o exemplo do arquivo .env.example </p>

### 🎲 Subindo API catalog

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd api-catalog

# Instale as dependências
$ npm install

# Execute o comando para roda as migrations
$ npm run migrate 

# Execute o comando para subir api
$ npm run dev 

# O servidor iniciará na porta:3333 - acesse <http://localhost:3333> 
```

### 🛠 Tecnologias - API Catalog

As seguintes ferramentas foram usadas na construção do projeto na camada backend:

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [Jest](https://jestjs.io/)

### 🎲 Subindo API recommends

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd api-recommends

# Instale as dependências
$ npm install

# Execute o comando para subir api
$ npm run dev 

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000> 
```

### 🛠 Tecnologias - API recommends

As seguintes ferramentas foram usadas na construção do projeto na camada backend:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Axios](https://github.com/axios/axios)

### 🎲 Subindo Projeto frontend

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd frontend 

# Execute o comando para subir um pequeno servidor
$ npx lite-server

# O servidor iniciará na porta:3001 - acesse <http://localhost:3001> 
```

### 🛠 Tecnologias - frontend

As seguintes ferramentas foram usadas na construção do projeto na camada backend:

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### Autor
---

<a href="http://raziisz.github.io/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/42245201?s=460&u=ce3bae80de213ad246855873906246051fba4458&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Luiz Felipe</b></sub></a> <a href="http://raziisz.github.io/" title="Dev">🚀</a>


Feito com ❤️ por Luiz Felipe 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luiz-felipe-libertino-a87840170/)](https://www.linkedin.com/in/luiz-felipe-libertino-a87840170/) 
[![Outlook Badge](https://img.shields.io/badge/-raziel_libertino@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:raziel_libertino@hotmail.com)](mailto:raziel_libertino@hotmail.com)

