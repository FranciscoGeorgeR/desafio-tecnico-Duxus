# Projeto de Testes Automatizados com Cypress

Este projeto utiliza o Cypress para realizar testes automatizados de uma aplicação web, focando no fluxo de registro e login de usuários.

## 📁 Estrutura do Projeto
Aqui está uma visão geral da estrutura do projeto:

```
/cypress
  /e2e
    camposObrigatorios.cy.js      
    login.cy.js                  
  /fixtures                 
  /support
    commands.js                 
    credentials.js               
    e2e.js                       
  /pageObjects
    cadastroPage.js              
    loginPage.js                 
  /elements
    loginElements.js            
```

## 🛠️ Tecnologias Utilizadas
- **Cypress**: Framework de testes end-to-end.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Page Objects**: Padrão de design para organizar seletores e ações em páginas específicas.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).
- **Cypress**: Instale o Cypress globalmente ou como dependência do projeto. Você pode baixá-lo [aqui](https://www.cypress.io/).
- **Docker e Docker Compose**: Para rodar a aplicação que será testada, você precisa executar primeiro o projeto com docker compose. Certifique-se de que você tem o **Docker** instalado em sua máquina.  
    Caso não tenha, siga as instruções no site oficial: [Instalar Docker](https://docs.docker.com/get-docker/).
- **Projeto para rodar Docker Compose**: [Projeto](https://github.com/rhDuxus/desafioAnalistaTestes)  

### Passos para Configuração

#### Clone o Repositório:
```bash
git clone git@github.com:FranciscoGeorgeR/desafio-tecnico-Duxus.git
```

#### Instale as Dependências:
```bash
npm install
```

#### Execute os Testes:

Para rodar os testes no modo interativo (Cypress):
```bash
npx cypress open
```

Para rodar os testes no modo headless (terminal):
```bash
npx cypress run
```
## 📊 Gerar o Relatório Allure

Após executar os testes, você pode gerar o relatório **Allure** com os seguintes comandos:

### 1️⃣ Executar os Testes:
```bash
npx cypress run --env allure=true
```
### 2️⃣ Executar os Testes:
```bash
npx allure generate allure-results --clean
```
### 3️⃣ Abrir o Relatório:
```bash
npx allure open
```

## 🧪 Testes Implementados

### Testes de Campos Obrigatórios (`camposObrigatorios.cy.js`)
- **Validação de E-mail Obrigatório**: Verifica se uma mensagem de erro é exibida ao tentar registrar sem preencher o campo de e-mail.
- **Validação de Senha Obrigatória**: Verifica se uma mensagem de erro é exibida ao tentar registrar sem preencher o campo de senha.
- **Validação de Confirmação de Senha Obrigatória**: Verifica se uma mensagem de erro é exibida ao tentar registrar sem preencher o campo de confirmação de senha.
- **Validação de Senhas Diferentes**: Verifica se uma mensagem de erro é exibida ao tentar registrar com senhas diferentes.
- **Registro de Novo Usuário**: Testa o fluxo de registro com e-mail e senha válidos.
- **Validação de E-mail Já Registrado**: Verifica se uma mensagem de erro é exibida ao tentar registrar um e-mail já cadastrado.

### Testes de Cadastro e Login (`login.cy.js`)
- **Cadastro de Novo Usuário**: Preenche o formulário de cadastro e salva as credenciais.
- **Login com Credenciais Salvas**: Realiza o login com as credenciais salvas e valida o acesso ao painel.

## 📂 Page Objects

### `cadastroPage.js`
- `gerarEmailUnico()`: Gera um e-mail único com base no timestamp.
- `gerarSenha()`: Gera uma senha aleatória.
- `preencherFormulario()`: Preenche o formulário de cadastro com e-mail e senha.
- `fazerLogin()`: Realiza o login com as credenciais salvas.
- `clicarEntrar()`: Clica no botão "Entrar".
- `validarPainelLogin()`: Valida se o painel de login foi acessado com sucesso.

### `loginPage.js`
- `campoEmail()`: Preenche o campo de e-mail.
- `ValidarMensagemObrigatoriaEmail()`: Valida a mensagem de erro para o campo de e-mail.
- `campoSenha()`: Preenche o campo de senha.
- `ValidarMensagemObrigatoriaSenha()`: Valida a mensagem de erro para o campo de senha.
- `campoConfirmarSenha()`: Preenche o campo de confirmação de senha.
- `ValidarMensagemObrigatoriaConfirmarSenha()`: Valida a mensagem de erro para o campo de confirmação de senha.
- `ClicarBotaoRegistrar()`: Clica no botão "Registrar".
- `validarMensagemSenhasNaoCoincidem()`: Valida a mensagem de erro para senhas diferentes.
- `validarMensagemEmailExistente()`: Valida a mensagem de erro para e-mail já registrado.

## 📧 Contato
Se tiver dúvidas ou sugestões, entre em contato:

- **Email**: george.franciscodesousa@gmail.com
- **GitHub**: [FranciscoGeorgeR](https://github.com/FranciscoGeorgeR)

