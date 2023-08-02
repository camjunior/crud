**Sistema de Gerenciamento de Produtos**

Este é um projeto de um Sistema de Gerenciamento de Produtos desenvolvido em Java e Angular. O sistema permite que os usuários realizem login para acessar as funcionalidades de cadastro, listagem, edição e remoção de produtos. O backend é construído em Java utilizando o framework Spring Boot, e o frontend é desenvolvido em Angular.

## Configuração e Execução

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Java JDK 11 ou superior
- Node.js e npm
- PostgreSQL

### Configuração do Backend

1. Clone o repositório do GitHub para sua máquina:

```
git clone <URL_DO_REPOSITORIO_BACKEND>
```

2. Navegue até o diretório do backend:

```
cd backend
```

3. Abra o projeto em sua IDE Java de preferência.

4. Configure as credenciais do banco de dados PostgreSQL no arquivo `application.properties`.

5. Execute o backend da aplicação.

### Configuração do Frontend

1. Clone o repositório do GitHub para sua máquina:

```
git clone <URL_DO_REPOSITORIO_FRONTEND>
```

2. Navegue até o diretório do frontend:

```
cd frontend
```

3. Instale as dependências do projeto:

```
npm install
```

4. Execute o frontend da aplicação:

```
ng serve
```

### Acesso ao Sistema

Com o backend e frontend em execução, acesse o sistema em seu navegador através da seguinte URL:

```
http://localhost:4200/login
```

Use as credenciais de login simuladas para acessar o sistema:

Usuário: admin
Senha: admin

## Funcionalidades

- **Login**: Os usuários devem fazer login para acessar as funcionalidades do sistema.

- **Cadastro de Produto**: Usuários autenticados podem cadastrar novos produtos fornecendo o nome do produto, fornecedor e valor.

- **Listagem de Produtos**: Usuários autenticados podem visualizar uma lista de todos os produtos cadastrados.

- **Edição e Remoção de Produtos**: Usuários autenticados podem editar e remover produtos da lista.

## Tecnologias Utilizadas

- **Backend**:
  - Java
  - Spring Boot
  - Spring Data
  - Spring Security
  - PostgreSQL

- **Frontend**:
  - Angular

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests para melhorar o projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Desenvolvido por Carlos Alberto Junior


# Crud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
