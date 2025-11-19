🎯 Desafio QA EBAC - Automação com Cypress e BDD
📋 Sobre o Projeto
Automação de testes end-to-end (E2E) para a loja EBAC implementando Cypress com abordagem BDD (Behavior Driven Development) utilizando Cucumber.

Repositório: https://github.com/Maiconcdz/desafio-cypress-QA

🚀 Instalação Completa
Pré-requisitos
Node.js (versão 14 ou superior)

npm (vem com Node.js)

Git (para controle de versão)

📥 Passo a Passo de Instalação
Instalar Node.js:

Acesse: https://nodejs.org/

Baixe a versão LTS

Execute o instalador com configurações padrão

Verificar instalação:

cmd
node --version
npm --version
Clonar e configurar o projeto:

cmd
git clone https://github.com/Maiconcdz/desafio-cypress-QA.git
cd desafio-cypress-QA
npm install
🧪 Execução dos Testes
Testes BDD com Cucumber
bash
# Executar todos os testes BDD
npm run test:bdd

# Executar apenas fluxo de compra
npm run test:compra

# Executar apenas teste de busca
npm run test:busca

# Executar teste específico
npx cypress run --spec "cypress/e2e/features/compra_ebac.feature"
Testes Cypress Tradicionais
bash
# Executar todos os testes
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/integration/loja-ebac.cy.js"
Modo Interativo
bash
# Abrir interface do Cypress
npx cypress open
📊 Cenários Implementados e Justificativas
🎯 Cenário 1: Fluxo Completo de Compra E-commerce
Arquivos: compra_ebac.feature + loja-ebac.cy.js

Fluxo do Cenário:

Login do usuário

Navegação e seleção de produto

Personalização (tamanho e cor)

Adição ao carrinho

Checkout e preenchimento de dados

Finalização do pedido

Validação da confirmação

Justificativa:

✅ Fluxo crítico do e-commerce que impacta diretamente na receita

✅ Cobertura completa das funcionalidades principais da plataforma

✅ Valida integração entre todos os módulos do sistema

✅ Simula experiência real do usuário final

✅ Identifica pontos de falha em processos complexos

🎯 Cenário 2: Busca e Filtragem de Produtos
Arquivo: compra_ebac.feature

Fluxo do Cenário:

Busca por termo específico

Validação dos resultados

Verificação da exibição de produtos

Justificativa:

✅ Funcionalidade essencial para experiência do usuário

✅ Alto impacto na taxa de conversão do e-commerce

✅ Valida performance do sistema de busca

✅ Testa diferentes cenários de consulta

🎯 Cenário 3: Smoke Test - Verificação Básica do Sistema
Arquivo: smoke-test.feature

Fluxo do Cenário:

Acesso à página inicial

Validação do carregamento

Verificação de elementos essenciais

Justificativa:

✅ Teste de saúde rápido do sistema

✅ Valida disponibilidade após deploys

✅ Base para testes mais complexos

✅ Monitoramento contínuo do ambiente

<img width="687" height="377" alt="image" src="https://github.com/user-attachments/assets/3b55b493-a1a1-43c9-8df4-01736876fd2e" />


🛠️ Tecnologias Utilizadas
Cypress 15.6.0 - Framework de automação E2E

Cucumber - BDD e sintaxe Gherkin

JavaScript ES6+ - Linguagem de programação

ESBuild - Bundler para processamento

Git/GitHub - Controle de versão e colaboração

🎯 Abordagem de Desenvolvimento
BDD (Behavior Driven Development)
Especificações em linguagem natural (Gherkin)

Colaboração entre times técnicos e não-técnicos

Documentação executável dos requisitos

Rastreabilidade completa dos cenários

Padrões de Desenvolvimento
Page Objects para organização do código

Seletores resilientes com fallbacks

Tratamento de elementos dinâmicos

Wait estratégicos para carregamentos

🔧 Configuração Técnica
Dependências do Projeto (package.json)

<img width="603" height="216" alt="image" src="https://github.com/user-attachments/assets/47470134-9901-49b3-ac43-4f7e5c522a36" />


Scripts de Execução


<img width="572" height="244" alt="image" src="https://github.com/user-attachments/assets/710ce23a-7ee6-48de-94db-360a2282ae64" />


📈 Tags BDD Disponíveis
@ecommerce - Todos os testes de e-commerce

@compra-completa - Fluxo completo de compra

@busca - Funcionalidade de busca e filtro

@smoke - Testes básicos de smoke

⚠️ Solução de Problemas Comuns
Erros de Instalação
cmd
# Limpar cache e reinstalar
npm cache clean --force
npm install
Elementos Não Encontrados
Utilize {force: true} para elementos dinâmicos

Implemente wait estratégicos com cy.wait()

Use seletores com múltiplos fallbacks

Execução no PowerShell
powershell
# Habilitar execução de scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
👨‍💻 Desenvolvido por
Maicon
Quality Assurance Engineer
📧 testeMaicon@gmail.com
🔗 https://github.com/Maiconcdz

✅ Status do Projeto
Configuração do ambiente completa

Automação E2E com Cypress implementada

BDD com Cucumber configurado e funcionando

Cenários de teste críticos automatizados

Documentação técnica completa

Repositório versionado no GitHub
