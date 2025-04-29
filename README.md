# Coder Lab Full Stack Test

Este repositório contém a solução para o desafio full stack proposto pela Coder Lab.

## Tecnologias Utilizadas
- **Linguagem**: TypeScript
- **Frontend**: React com Vite, Shadcn com Tailwind CSS
- **Backend**: NestJS
- **Banco de Dados**: PostgreSQL com TypeORM
- **Outras Ferramentas**: Swagger - para documentação da API

## Funcionalidades

A aplicação traz o esperado no teste abordando os seguintes pontos:
- Listagem de produtos em 4 colunas. Conforme tela diminui, as colunas diminuem até ficar em 1.
- Filtro por nome do produto na tela Home
- Tela dinâmica de criação ou edição do produto
- Botão para exclusão do produto
- Front-End totalmente integrado a API e com todas as features descritas funcionais


## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/KleitonLima/coder-lab-full-stack-test.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd coder-lab-full-stack-test
    ```
3. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
4. Renomei o arquivo '.env.example' para '.env' no diretório backend
   
5. Com o aplicativo Docker ativo, inicie o container Docker para o banco de dados
    ```bash
    docker compose up -d
    ```
6. Execute as migrations para gerar as tabelas no banco:
    ```bash
    npm run migration:run
    ```
7. Execute a seed para popular as categorias:
    ```bash
    npm run seed:run
    ```
8. Inicie o servidor backend:
    ```bash
    npm run dev
    ```
9. Abra outro terminal no diretório inicial e instale as dependências do front
    ```bash
    cd coder-lab-full-stack-test/frontend
    npm install
    ```
    ou
   ```bash
    cd frontend
    npm install
10.  Crie um arquivo .env no diretório frontend:
   
     Usando echo (Linux/macOS ou Windows com Git Bash/WSL):
     ```bash
     echo "VITE_BACKEND=http://localhost:3000/api/v1" > .env
     ```
     Usando PowerShell (Windows):
     ```bash
     "VITE_BACKEND=http://localhost:3000/api/v1" | Out-File -FilePath .env -Encoding utf8
     ```
     Usando CMD (Windows):
     ```bash
     echo VITE_BACKEND=http://localhost:3000/api/v1 > .env
     ```
11. Inicie o servidor frontend:
     ```bash
     npm run dev
     ```
12. Acesse http://localhost:5173 para o front-end e http://localhost:3000/api/v1/docs para documentação do back-end
