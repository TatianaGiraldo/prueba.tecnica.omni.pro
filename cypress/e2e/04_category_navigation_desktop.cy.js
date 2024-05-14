describe('Category navigation desktop', () => {
    it('You should browse through different categories and select a product', () => {
      cy.visit('https://www.amazon.com.co');

      cy.get('.hm-icon-label').click();
      cy.get('#hmenu-content').contains('Computadoras').click();

      cy.contains('Computadoras y tablets').click();
      cy.get('input[id="twotabsearchtextbox"]').type('HP Pavilion');
      
      cy.get('input[id="nav-search-submit-button"]').click();
      cy.get('.a-size-medium.a-color-base.a-text-normal').should('contain', 'HP Pavilion');
    });
  });
  