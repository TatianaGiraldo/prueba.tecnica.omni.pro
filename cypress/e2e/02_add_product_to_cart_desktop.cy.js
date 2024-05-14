describe('Add Product to Cart from Desktop', () => {
  it('Add a product to the cart from the desktop version of Amazon Colombia', () => {
    cy.visit('https://www.amazon.com.co');

    cy.get('input[id="twotabsearchtextbox"]').type('audífonos');
    cy.get('#nav-search-submit-button').click();
    
      cy.get('.a-button.a-button-primary.a-button-icon').contains('Agregar al carrito').click();
      cy.get('#nav-cart-count').should('contain', '1');
    });
  });
  