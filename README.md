🎯 Desafio QA EBAC - Automação de Testes com Cypress
📋 Sobre o Projeto
Este projeto contém a automação de um fluxo completo de compra na loja EBAC, demonstrando habilidades em testes end-to-end (E2E) utilizando Cypress.

✅ Cenário Automatizado
Fluxo Completo de Compra E-commerce:

🔐 Login de usuário

🛍️ Seleção e personalização de produto

🛒 Adição ao carrinho

💰 Checkout e preenchimento de dados

✅ Finalização de pedido

🚀 Começando do ZERO
Pré-requisitos
Windows 10/11 (este guia é para Windows)

Acesso à internet

Permissões de administrador para instalações

📥 Passo 1: Instalar Node.js
Acesse: https://nodejs.org/

Baixe a versão LTS (recomendada)

Execute o instalador e siga o assistente:

Clique "Next" em todas as telas

Mantenha as configurações padrão

Verifique a instalação:

cmd
node --version
npm --version

📥 Passo 2: Instalar Visual Studio Code (Opcional)
Acesse: https://code.visualstudio.com/download

Baixe a versão Windows

Instale com configurações padrão

📥 Passo 3: Instalar Git
Acesse: https://git-scm.com/downloads

Baixe para Windows

Instale com todas opções padrão

🔧 Configuração do Projeto
Passo 1: Baixar o Projeto
cmd
# Abra o Command Prompt (CMD) como administrador

# Navegue para a pasta onde quer salvar o projeto
cd C:\

# Clone o repositório
git clone https://github.com/Maiconcdz/desafio-cypress-QA.git

# Entre na pasta do projeto
cd desafio-cypress-QA
Passo 2: Instalar Dependências
cmd
# Instalar o Cypress e dependências
npm install
⏱️ Isso pode levar alguns minutos na primeira vez

Passo 3: Verificar Instalação
cmd
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
text
desafio-cypress-QA/
├── cypress/
│   ├── e2e/
│   │   └── loja-ebac.cy.js          # Teste principal
│   ├── fixtures/                    # Dados de teste
│   └── support/                     # Configurações
├── cypress.config.js               # Configuração do Cypress
├── package.json                    # Dependências
└── README.md                       # Este arquivo
🧪 O que o Teste Faz
Fluxo Automatizado:
🔐 Login

Acessa a página de login

Preenche credenciais: testeMaicon@gmail.com / senha@123

🛍️ Seleção de Produto

Navega para "Augusta Pullover Jacket"

Seleciona tamanho S e cor Azul

🛒 Carrinho

Adiciona produto ao carrinho

Confirma adição

💰 Checkout

Preenche dados pessoais:

Nome: Maicon Figueredo

Endereço: Avenida Brasil, 1234

Cidade: Sao Jose dos Pinhais

Telefone: 41995959595

Email: testeMaicon@gmail.com

✅ Finalização

Seleciona pagamento na entrega

Aceita termos e condições

Confirma pedido

🎉 Validação

Verifica confirmação do pedido

Número do pedido gerado

📊 Resultados Esperados
✅ Ao Executar com Sucesso:
text
Fluxo Completo de Compra - EBAC Shop
  ✓ Deve realizar uma compra completa do início ao fim (45s)
📸 Evidências:
Screenshots automáticos em cada etapa

Log detalhado de execução

Vídeo da execução (em cypress/videos/)

🛠️ Comandos Úteis
cmd
# Abrir Cypress
npx cypress open

# Executar todos os testes
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/loja-ebac.cy.js"

# Limpar cache e reinstalar
npm cache clean --force && npm install
❓ Suporte
Problemas Comuns:
❌ Cypress não abre:

Use Command Prompt em vez de PowerShell

Execute como Administrador

❌ Erro de instalação:

Verifique conexão com internet

Execute npm cache clean --force

❌ Teste falha:

Verifique se o site está online

Confirme as credenciais do usuário

📞 Precisa de ajuda?

Verifique o repositório: https://github.com/Maiconcdz/desafio-cypress-QA

Os issues no GitHub

👨‍💻 Desenvolvido por
Maicon
Quality Assurance Engineer
📧 testeMaicon@gmail.com
🔗 https://github.com/Maiconcdz

📄 Licença
Este projeto é para fins educacionais e demonstração de habilidades em automação de testes.
