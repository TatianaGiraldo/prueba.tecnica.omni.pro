describe('Add product to wish list mobile', () => {
  it('You should add a product to the mobile wish list.', () => {
    cy.viewport('iphone-x');

    cy.visit('https://www.amazon.com.co');

    cy.get('input[id="twotabsearchtextbox"]').type('Bluetooth Speaker{enter}');
    cy.get('.a-size-medium.a-color-base.a-text-normal').first().click();

    cy.get('#wishListMainButton').click();

    cy.get('#ap_email').type('tatigtest@gmail.com');
    cy.get('#continue').click();
    cy.get('#ap_password').type('tatitest123');
    cy.get('#signInSubmit').click();

    cy.contains('Added to Wishlist').should('be.visible');

    cy.contains('Wishlist').click();
    cy.contains('Bluetooth Speaker').should('be.visible');
  });
});