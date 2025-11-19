describe('Fluxo de Compra - Versão Final Corrigida', () => {
  
  it('Compra rápida e direta', function() {
    // 1. Login
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('[name="username"]').type('testeMaicon@gmail.com');
    cy.get('#password').type('senha@123');
    cy.get('#customer_login [name="login"]').click();
    cy.wait(2000);
    
    // 2. Ir direto para o produto específico
    cy.visit('/product/augusta-pullover-jacket/');
    
    // 3. Selecionar opções
    cy.get('.button-variable-item-S').click();
    cy.get('.button-variable-item-Blue').click();
    
    // 4. Adicionar ao carrinho
    cy.get('.single_add_to_cart_button').click();
    cy.wait(2000);
    
    // 5. Ir para checkout
    cy.visit('/checkout/');
    
    // 6. Preencher dados
    cy.get('#billing_first_name').clear().type('Maicon');
    cy.get('#billing_last_name').clear().type('Figueredo');
    cy.get('#billing_company').clear().type('Quality');
    cy.get('#billing_address_1').clear().type('Avenida Brasil, 1234');
    cy.get('#billing_city').clear().type('Sao Jose dos Pinhais');
    cy.get('#billing_postcode').clear().type('83085190');
    cy.get('#billing_phone').clear().type('41995959595');
    cy.get('#billing_email').clear().type('testeMaicon@gmail.com');
    
    // 7. Selecionar estado COM FORCE
    cy.get('#billing_state').select('PR', { force: true });
    
    // 8. Método de pagamento COM FORCE
    cy.get('#payment_method_cod').check({ force: true });
    
    // 9. Termos COM FORCE (importante!)
    cy.get('#terms').check({ force: true });
    
    // 10. Finalizar pedido
    cy.get('#place_order').click({ force: true });
  });
});