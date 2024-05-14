describe('Product Search Desktop', () => {
  it('Perform a product search on the desktop version of Amazon Colombia', () => {
    cy.visit('https://www.amazon.com.co');
    
    cy.get('input[id="twotabsearchtextbox"]').type('iphone');
    cy.get('input[id="nav-search-submit-button"]').click();
    cy.get('.a-size-medium.a-color-base.a-text-normal').first().click();
  });
});