@ecommerce
Feature: Fluxo de Compra na Loja EBAC

  Como um cliente da loja EBAC
  Eu quero realizar uma compra completa
  Para receber meus produtos

  Background: 
    Dado que estou na página inicial da loja EBAC

  @compra-completa
  Scenario: Realizar compra completa com sucesso
    Quando eu faço login com minhas credenciais válidas
    E seleciono o produto "Augusta Pullover Jacket"
    E escolho as opções tamanho "S" e cor "Blue"
    E adiciono o produto ao carrinho
    E vou para o checkout
    E preencho meus dados pessoais:
      | nome          | Maicon           |
      | sobrenome     | Figueredo        |
      | empresa       | Quality          |
      | endereco      | Avenida Brasil, 1234 |
      | cidade        | Sao Jose dos Pinhais |
      | cep           | 83085190         |
      | telefone      | 41995959595      |
      | email         | testeMaicon@gmail.com |
      | estado        | PR               |
    E seleciono a forma de pagamento "Pagamento na entrega"
    E aceito os termos e condições
    E finalizo o pedido
    Então devo ver a confirmação do pedido

  @busca
  Scenario: Buscar produto no site
    Quando eu busco pelo produto "jacket"
    Então devo ver resultados da busca