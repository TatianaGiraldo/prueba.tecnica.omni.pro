describe('Verify user experience on the mobile home page', () => {
  it('You should check the home page on mobile devices', () => {
    cy.viewport('iphone-x');

    cy.visit('https://www.amazon.com.co');

    cy.contains('Gaming accessories').should('be.visible');
    cy.contains('FREE Shipping to Colombia').should('be.visible');
    cy.contains('Deals in PCs').should('be.visible');
  });
});
  
  