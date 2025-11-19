🎯 Desafio QA EBAC - Automação com Cypress e BDD
📋 Sobre o Projeto
Automação de testes end-to-end (E2E) para a loja EBAC utilizando Cypress e BDD (Behavior Driven Development) com Cucumber.

Repositório: https://github.com/Maiconcdz/desafio-cypress-QA

🚀 Instalação Completa do Zero
Pré-requisitos
Windows 10/11

Acesso à internet

Permissões de administrador

📥 Passo 1: Instalar Node.js
Acesse: https://nodejs.org/

Baixe a versão LTS (recomendada)

Execute o instalador com configurações padrão

Verifique a instalação:

cmd
node --version
npm --version
<<<<<<< HEAD
📥 Passo 2: Instalar Git (Opcional)
=======

📥 Passo 2: Instalar Visual Studio Code (Opcional)
Acesse: https://code.visualstudio.com/download

Baixe a versão Windows

Instale com configurações padrão

📥 Passo 3: Instalar Git
>>>>>>> 1d24808c7a1c3346b91c4dca64bfe265ccb715f7
Acesse: https://git-scm.com/downloads

Baixe para Windows

Instale com opções padrão

🔧 Configuração do Projeto
Passo 1: Baixar o Projeto
cmd
# Abra o Command Prompt (CMD) como administrador

# Clone o repositório
git clone https://github.com/Maiconcdz/desafio-cypress-QA.git

# Entre na pasta do projeto
cd desafio-cypress-QA
<<<<<<< HEAD
Passo 2: Instalar Dependências do Cypress e BDD
cmd
# Instalar Cypress e dependências BDD
npm install

# Instalar dependências específicas do Cucumber BDD
npm install @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
=======

Passo 2: Instalar Dependências
cmd

# Instalar o Cypress e dependências
npm install

>>>>>>> 1d24808c7a1c3346b91c4dca64bfe265ccb715f7
⏱️ Isso pode levar alguns minutos na primeira vez

Passo 3: Verificar Instalação

cmd
<<<<<<< HEAD
# Verificar Cypress
npx cypress --version

# Verificar Cucumber
npm list @badeball/cypress-cucumber-preprocessor
🎯 Estrutura do Projeto BDD
=======
# Verificar se o Cypress foi instalado

npx cypress --version

🎯 Executando os Testes
Opção 1: Modo Interativo (Recomendado para visualizar)
cmd

npx cypress open

No Cypress Runner:

Clique em "E2E Testing"

Escolha "Chrome" como navegador

Clique em "Start E2E Testing in Chrome"

Clique no teste "Fluxo Completo de Compra"

Opção 2: Modo Headless (Terminal)

cmd

npx cypress run --spec "cypress/e2e/loja-ebac.cy.js"

⚠️ Solução de Problemas Comuns

Erro no PowerShell:

cmd

# Use o Command Prompt (CMD) em vez do PowerShell

# Ou execute no PowerShell:

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

Erro de permissão:

Execute o Command Prompt como Administrador

Erro de instalação lenta:

cmd
# Limpar cache e tentar novamente
npm cache clean --force
npm install
📁 Estrutura do Projeto
>>>>>>> 1d24808c7a1c3346b91c4dca64bfe265ccb715f7
text
desafio-cypress-QA/
├── cypress/
│   ├── e2e/
│   │   ├── features/                 # Especificações BDD (.feature)
│   │   │   ├── compra_ebac.feature
│   │   │   └── smoke-test.feature
│   │   ├── integration/              # Testes tradicionais (.cy.js)
│   │   │   └── loja-ebac.cy.js
│   │   └── step_definitions/         # Implementação BDD
│   │       ├── compra_steps.js
│   │       └── smoke_steps.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js                 # Configuração Cypress + Cucumber
├── package.json                      # Scripts e dependências
└── README.md
🧪 Como Executar os Testes
Executar Testes BDD (Cucumber)
bash
# Executar todos os testes BDD
npm run test:bdd

# Executar fluxo de compra completo
npm run test:compra

# Executar teste de busca
npm run test:busca

# Executar teste específico
npx cypress run --spec "cypress/e2e/features/compra_ebac.feature"
Executar Testes Tradicionais
bash
# Executar todos os testes
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/integration/loja-ebac.cy.js"
Modo Interativo (Interface Gráfica)
bash
# Abrir Cypress
npx cypress open

# No Cypress Runner:
# 1. Clique em "E2E Testing"
# 2. Escolha "Chrome" 
# 3. Clique em "Start E2E Testing in Chrome"
# 4. Selecione os testes para executar
📊 Lista dos Cenários Implementados
🎯 Cenário 1: Fluxo Completo de Compra E-commerce
Arquivos: compra_ebac.feature + loja-ebac.cy.js

Cenário BDD:

gherkin
Dado que estou na página inicial da loja EBAC
Quando eu faço login com minhas credenciais válidas
E seleciono o produto "Augusta Pullover Jacket"
E escolho as opções tamanho "S" e cor "Blue"
E adiciono o produto ao carrinho
E vou para o checkout
E preencho meus dados pessoais
E seleciono a forma de pagamento "Pagamento na entrega"
E aceito os termos e condições
E finalizo o pedido
Então devo ver a confirmação do pedido
Justificativa:

✅ Fluxo crítico do e-commerce

✅ Cobre todas as funcionalidades principais

✅ Simula experiência real do usuário

✅ Valida integração entre módulos

🎯 Cenário 2: Busca e Filtragem de Produtos
Arquivo: compra_ebac.feature

Cenário BDD:

gherkin
Quando eu busco pelo produto "jacket"
Então devo ver resultados da busca
Justificativa:

✅ Funcionalidade essencial de e-commerce

✅ Impacta diretamente na conversão

✅ Valida experiência de busca do usuário

🎯 Cenário 3: Smoke Test - Acesso Básico
Arquivo: smoke-test.feature

Cenário BDD:

gherkin
Given I open the EBAC shop page
Then I should see the home page
Justificativa:

✅ Teste básico de saúde do sistema

✅ Valida disponibilidade do site

✅ Verificação rápida em deploys

🛠️ Dependências do Projeto
Dependências Principais (package.json)
json
{
  "devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^23.2.1",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
    "@faker-js/faker": "^10.1.0",
    "cypress": "^15.6.0",
    "esbuild": "^0.20.0"
  }
}
Scripts Disponíveis
json
{
  "scripts": {
    "test": "npx cypress run",
    "test:bdd": "npx cypress run --env TAGS=@ecommerce",
    "test:open": "npx cypress open",
    "test:bdd:open": "npx cypress open --env TAGS=@ecommerce",
    "test:compra": "npx cypress run --env TAGS=@compra-completa",
    "test:busca": "npx cypress run --env TAGS=@busca"
  }
}
🔧 Configuração Cypress + Cucumber
cypress.config.js
javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
⚠️ Solução de Problemas Comuns
Erro no PowerShell:
cmd
# Use Command Prompt (CMD) em vez do PowerShell
# Ou execute no PowerShell:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
Erro de instalação:
cmd
# Limpar cache e reinstalar
npm cache clean --force
npm install
Cypress não encontra arquivos .feature:
cmd
# Verificar estrutura de pastas
dir cypress\e2e\ /s

# Executar com pattern específico
npx cypress run --spec "cypress/e2e/features/**/*.feature"
Elementos não encontrados:
Use {force: true} para elementos dinâmicos

Adicione cy.wait() para carregamentos

Use seletores com fallbacks

🎯 Tags BDD Disponíveis
@ecommerce - Todos os testes de e-commerce

@compra-completa - Fluxo completo de compra

@busca - Funcionalidade de busca

@smoke - Testes smoke básicos

📈 Exemplo de Execução BDD
bash
# Executar cenário de compra completa
npm run test:compra

# Resultado esperado:
# ✅ Fluxo de Compra na Loja EBAC
# ✅ Realizar compra completa com sucesso
# ✅ Buscar produto no site
👨‍💻 Desenvolvido por
Maicon
Quality Assurance Engineer
📧 testeMaicon@gmail.com
🔗 https://github.com/Maiconcdz

<<<<<<< HEAD
✅ Status do Projeto
Cypress configurado e funcionando

BDD com Cucumber implementado

Cenários de teste automatizados

Documentação completa

Repositório no GitHub
=======
📄 Licença
Este projeto é para fins educacionais e demonstração de habilidades em automação de testes.
>>>>>>> 1d24808c7a1c3346b91c4dca64bfe265ccb715f7
