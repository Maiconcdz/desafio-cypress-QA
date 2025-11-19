import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';

// Steps em português para match exato
Given('que estou na página inicial da loja EBAC', () => {
  cy.visit('/');
});

When('eu faço login com minhas credenciais válidas', () => {
  cy.visit('/minha-conta/');
  cy.get('[name="username"]').type('testeMaicon@gmail.com');
  cy.get('#password').type('senha@123');
  cy.get('#customer_login [name="login"]').click();
});

When('seleciono o produto {string}', (produto) => {
  if (produto.includes('Augusta')) {
    cy.visit('/product/augusta-pullover-jacket/');
  }
});

When('escolho as opções tamanho {string} e cor {string}', (tamanho, cor) => {
  cy.get(`.button-variable-item-${tamanho}`).click({ force: true });
  cy.get(`.button-variable-item-${cor}`).click({ force: true });
});

When('adiciono o produto ao carrinho', () => {
  cy.get('.single_add_to_cart_button').click({ force: true });
  cy.wait(2000);
});

When('vou para o checkout', () => {
  cy.visit('/checkout/');
});

When('preencho meus dados pessoais:', (dataTable) => {
  const dados = dataTable.rowsHash();
  
  cy.get('#billing_first_name').clear().type(dados.nome);
  cy.get('#billing_last_name').clear().type(dados.sobrenome);
  cy.get('#billing_company').clear().type(dados.empresa);
  cy.get('#billing_address_1').clear().type(dados.endereco);
  cy.get('#billing_city').clear().type(dados.cidade);
  cy.get('#billing_postcode').clear().type(dados.cep);
  cy.get('#billing_phone').clear().type(dados.telefone);
  cy.get('#billing_email').clear().type(dados.email);
  cy.get('#billing_state').select(dados.estado, { force: true });
});

When('seleciono a forma de pagamento {string}', (pagamento) => {
  cy.get('#payment_method_cod').check({ force: true });
});

When('aceito os termos e condições', () => {
  cy.get('#terms').check({ force: true });
});

When('finalizo o pedido', () => {
  cy.get('#place_order').click({ force: true });
  cy.wait(5000);
});

Then('devo ver a confirmação do pedido', () => {
  cy.url().should('include', '/order-received/');
  cy.get('.woocommerce-order').should('contain', 'Obrigado');
});

When('eu busco pelo produto {string}', (produto) => {
  cy.visit(`/?s=${produto}`);
});

Then('devo ver resultados da busca', () => {
  cy.get('.product').should('have.length.greaterThan', 0);
});