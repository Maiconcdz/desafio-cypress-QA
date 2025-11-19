Desafio Cypress QA - Loja EBAC
Automação de testes para o site lojaebac.ebaconline.art.br utilizando Cypress.

🛠 Instalação
Pré-requisitos
Node.js (versão 14 ou superior)

npm

Instalação das dependências
bash
npm install
🚀 Execução dos Testes
Modo Interativo (com interface gráfica)
bash
npx cypress open
Modo Headless (terminal)
bash
npx cypress run
Executar testes específicos
bash
npx cypress run --spec "cypress/e2e/loja-ebac.cy.js"
⚠️ Configuração de Ambiente
Importante: O site requer configuração com HTTP (não HTTPS) para funcionar no Cypress:

javascript
baseUrl: "http://lojaebac.ebaconline.art.br"
Problema Identificado e Solucionado:
❌ Não funciona: https://lojaebac.ebaconline.art.br

✅ Funciona: http://lojaebac.ebaconline.art.br

Causa: Ambiente de desenvolvimento/teste pode não ter certificado SSL válido para automação.

Habilidade Demonstrada: Troubleshooting e diagnóstico de problemas de configuração de ambiente.

📋 Cenários Automatizados
1. Login com Sucesso
Justificativa: Fluxo crítico do sistema que valida autenticação de usuários.

2. Adicionar Produto ao Carrinho
Justificativa: Testa funcionalidade essencial de e-commerce e interação com catálogo.

3. Busca de Produtos
Justificativa: Valida funcionalidade de busca, importante para experiência do usuário.

4. Navegação por Categorias
Justificativa: Testa a organização do catálogo e navegabilidade do site.

🗂 Estrutura do Projeto
text
desafio-cypress-QA/
├── cypress/
│   ├── e2e/                 # Testes
│   ├── fixtures/            # Dados estáticos
│   └── support/             # Comandos personalizados
├── cypress.config.js        # Configuração do Cypress
└── package.json            # Dependências do projeto