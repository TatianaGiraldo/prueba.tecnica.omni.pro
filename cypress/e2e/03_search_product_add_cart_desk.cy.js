describe('Search and add product to cart desktop', () => {
  it('You should search for a product and add it to the shopping cart.', () => {
    cy.visit('https://www.amazon.com.co');

    cy.get('input[id="twotabsearchtextbox"]').type('audífonos');
    cy.get('input[id="nav-search-submit-button"]').click();

    cy.get('.a-size-medium.a-color-base.a-text-normal').first().click();
    cy.get('#nav-search-submit-button').click();

    cy.get('.a-button.a-button-primary.a-button-icon').contains('Agregar al carrito').click();
    cy.get('#nav-cart-count').should('contain', '1');
    
    // Verify that the cart is updated with the new product.
    cy.get('#nav-cart-count').click();
    cy.url().should('include', '/gp/cart/view.html');
  });
});