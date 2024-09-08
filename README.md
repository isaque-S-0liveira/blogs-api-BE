# Blogs api

## Contexto

O foco principal deste projeto é, com base nos ensinamentos da **Trybe**, desenvolver uma **API** e um **banco de dados** para a produção de conteúdo de um blog. O objetivo é criar uma aplicação utilizando **Node.js** e o pacote **Sequelize** para gerenciar as operações de **CRUD** (Create, Read, Update e Delete) de posts e usuários, seguindo os princípios de uma API **RESTful**.

<details>
  <summary>O que é a Trybe?🤔</summary>
  A Trybe é uma escola de desenvolvimento web genuinamente comprometida com o sucesso profissional de seus estudantes. Com o Modelo de Sucesso Compartilhado (MSC) oferecido pela Trybe Fintech, uma instituição financeira autorizada pelo Banco Central do Brasil, os alunos têm a opção de pagar apenas quando estiverem trabalhando.
</details>

<details>
  <summary>🎲 Diagrama ER</summary>
  <div style="display:flex; justify-content:center;  align-items:center; width="100%">
  <img src="Preview/erBlogsApi.png" alt="page1"/>
  </div>
</details>

<details>
  <summary><h3>Objetivos do Projeto:</h3></summary>

  
1. **Desenvolver uma API RESTful**:
   - A API foi desenvolvida para gerenciar um blog, permitindo a criação, leitura, atualização e exclusão de posts e usuários.
   - Cada post deve estar associado a um usuário, e categorias podem ser vinculadas aos posts, criando uma relação entre **users**, **posts**, e **categories**.
   - A autenticação é implementada por meio de **tokens**, sendo necessário login para realizar operações específicas.

2. **Migrations e Models**:
   - Utilizando o **Sequelize**, foram criadas **migrations** para estruturar o banco de dados e gerar as tabelas necessárias, como `users`, `categories`, `blog_posts`, e `posts_categories`.
   - As models foram configuradas para refletir corretamente o diagrama de **Entidade-Relacionamento (ER)**, garantindo que as operações de banco de dados sigam as regras estabelecidas.

3. **Autenticação e Validação**:
   - A aplicação requer autenticação para acessar determinados endpoints, garantindo que apenas usuários autenticados possam criar, atualizar ou excluir posts.
   - A validação de token é implementada por **middlewares**, que são responsáveis por verificar a validade dos tokens nas requisições.

4. **Relacionamentos e Categorias**:
   - O projeto explora as relações entre **posts** e **categorias**, permitindo que os posts sejam vinculados a múltiplas categorias.
   - Essas relações são tratadas através de associações no Sequelize, utilizando relações de **1:N** e **N:N**.
     
</details>
 


<details>
  <summary><h3>Funcionalidades Implementadas:</h3></summary>

- **Users**:
  - **POST /login**: Endpoint para login de usuários, retornando um token de autenticação.
  - **POST /user**: Cadastro de novos usuários.
  - **GET /user**: Listagem de todos os usuários (requer token).
  - **GET /user/:id**: Exibe detalhes de um usuário específico (requer token).

- **Categories**:
  - **POST /categories**: Cadastro de novas categorias (requer token).
  - **GET /categories**: Listagem de todas as categorias (requer token).

- **Posts**:
  - **POST /post**: Criação de novos posts vinculados a usuários e categorias (requer token).
  - **GET /post**: Listagem de todos os posts, com suas respectivas categorias e autores (requer token).
  - **GET /post/:id**: Exibição de um post específico pelo ID (requer token).
  - **PUT /post/:id**: Atualização de posts (somente pelo autor, requer token).
  - **DELETE /post/:id**: Exclusão de posts (somente pelo autor, requer token).
  - **GET /post/search?q=:searchTerm**: Busca por posts com base no termo fornecido (requer token).
</details>



<details>
  <summary><h3>Habilidades Desenvolvidas:</h3></summary>

- **Node.js** e **Sequelize**: Utilização do ORM Sequelize para manipulação do banco de dados MySQL, abstraindo operações SQL e facilitando a integração com a API.
- **Arquitetura RESTful**: Desenvolvimento de uma API organizada em camadas, seguindo os princípios REST para a estruturação de endpoints e recursos.
- **Autenticação com JWT**: Implementação de autenticação por meio de tokens JWT para garantir a segurança de endpoints privados.
- **Migrations e Models**: Criação de models e migrations no Sequelize, respeitando o diagrama de Entidade-Relacionamento (ER).
- **Validação de Dados**: Implementação de validações em diversos endpoints, como o cadastro de usuários e posts, garantindo a integridade dos dados.
- **Relações entre Tabelas**: Exploração das associações de **1:N** e **N:N** entre `users`, `posts` e `categories` no banco de dados.
- **Middlewares**: Uso de middlewares para autenticação e validação de dados antes da execução de operações críticas.

</details>

Este projeto oferece uma visão completa da criação de uma aplicação backend moderna, com funcionalidades robustas de gerenciamento de conteúdo, autenticação e integração com um banco de dados relacional.


## Tecnologias Usadas

- [Node.js](https://nodejs.org/) - Plataforma de execução de JavaScript no servidor.
- [Express](https://expressjs.com/) - Framework para Node.js que facilita a criação de APIs e gerenciamento de rotas.
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados MySQL.
- [MySQL](https://www.mysql.com/) - Banco de dados relacional utilizado para armazenar as informações de usuários, posts e categorias.
- [Joi](https://joi.dev/) - Biblioteca para validação de dados no backend.
- [JWT (JSON Web Token)](https://jwt.io/) - Utilizado para autenticação e geração de tokens de segurança.


## Entre em contato:
<a href="mailto:zazac3179@gmail.com" target="_blank">
  <img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" height="40" width="auto" />
</a>
<a href="https://www.linkedin.com/in/isaque-s-oliveira/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="isaque oliveira" height="30" width="40" /></a>
<a href="https://wa.me/5574981510614" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg" alt="WhatsApp" height="30" width="40" /></a>
