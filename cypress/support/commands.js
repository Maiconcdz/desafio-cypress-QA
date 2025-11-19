// Comando personalizado para login
Cypress.Commands.add('login', (email, password) => {
  cy.get('.icon-user-unfollow').click()
  cy.get('#username').type(email)
  cy.get('#password').type(password)
  cy.get('.woocommerce-form > .button').click()
})