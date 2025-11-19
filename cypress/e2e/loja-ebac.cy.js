describe('Testes da Loja EBAC - Com Elementos Reais', () => {
  
  it('Deve fazer login com sucesso', () => {
    cy.visit('/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve navegar para a página "Comprar"', () => {
    cy.visit('/')
    
    // Clicar no menu "Comprar" que está visível
    cy.contains('Comprar').click()
    
    // Verificar se navegou para página de compras
    cy.url().should('include', '/comprar')
    cy.get('.page-title, h1, .products').should('exist')
  })

  it('Deve adicionar um produto ao carrinho', () => {
    cy.visit('/')
    
    // Clicar em um produto específico da lista
    cy.contains('Helena Hooded Fleece').click()
    
    // Na página do produto, adicionar ao carrinho
    cy.get('.single_add_to_cart_button').click()
    
    // Verificar mensagem de sucesso
    cy.get('.woocommerce-message').should('contain', 'adicionado')
  })

  it('Deve visualizar produtos em destaque', () => {
    cy.visit('/')
    
    // Verificar se a seção de produtos em destaque existe
    cy.contains('Produtos em destaque').should('be.visible')
    
    // Verificar se há produtos listados
    cy.get('.product, .product-block').should('have.length.greaterThan', 0)
    
    // Clicar no primeiro produto
    cy.get('.product, .product-block').first().click()
    
    // Verificar se carregou a página do produto
    cy.get('.product_title, h1').should('exist')
    cy.get('.price').should('be.visible')
  })

  it('Deve usar o menu categorias', () => {
    cy.visit('/')
    
    // Clicar em Categorias
    cy.contains('Categorias').click()
    
    // Verificar se o dropdown/menu abriu
    cy.get('.sub-menu, .dropdown-menu, .children').should('be.visible')
    
    // Clicar em uma categoria específica (ex: Roupas)
    cy.contains('Roupas').click({ force: true })
    
    // Verificar se carregou a página da categoria
    cy.get('.page-title, h1').should('contain', 'Roupas')
  })

  it('Deve ver carrinho vazio', () => {
    cy.visit('/')
    
    // Clicar no carrinho
    cy.contains('Cart').click()
    cy.contains('R$0,00').click()
    
    // Verificar página do carrinho
    cy.url().should('include', '/carrinho')
    cy.get('body').should('contain', 'Carrinho')
    cy.get('body').should('contain', 'vazio')
  })

  it('Deve testar busca por produto específico', () => {
    cy.visit('/')
    
    // Procurar campo de busca (pode estar oculto em mobile)
    cy.get('body').then(($body) => {
      const searchField = $body.find('input[type="search"], [name="s"]')
      if (searchField.length > 0 && searchField.is(':visible')) {
        cy.wrap(searchField).type('Jacket{enter}')
        cy.get('.products, .product').should('contain', 'Jacket')
      } else {
        // Se não encontrar campo visível, testar URL direta de busca
        cy.visit('/?s=Jacket')
        cy.get('body').should('contain', 'Jacket')
      }
    })
  })

  it('Deve navegar pelo blog', () => {
    cy.visit('/')
    
    // Clicar em Blog
    cy.contains('Blog').click()
    
    // Verificar página do blog
    cy.url().should('include', '/blog')
    cy.get('.page-title, h1').should('contain', 'Blog')
    cy.get('.post, .blog-post').should('have.length.greaterThan', 0)
  })
})