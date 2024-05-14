describe('Search and filter products on mobile', () => {
    it('You should search for a product and apply filters', () => {
      cy.viewport('iphone-6');
  
      cy.visit('https://www.amazon.com.co');
  
      cy.get('input[id="twotabsearchtextbox"]').type('Smartphone{enter}');
  
      cy.get('.a-list-item').contains('Motorola').click();
      cy.get('.a-size-medium.a-color-base.a-text-normal').first().click();

    });
  });
  