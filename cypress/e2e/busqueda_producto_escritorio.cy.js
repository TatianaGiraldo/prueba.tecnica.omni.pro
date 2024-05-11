describe('Búsqueda de Producto en Escritorio', () => {
  it('Realiza una búsqueda de producto en la versión de escritorio de Amazon Colombia', () => {
    // Visita el sitio web de Amazon Colombia
    cy.visit('https://www.amazon.com.co');
    cy.get('input[id="twotabsearchtextbox"]').type('iphone');
    cy.get('input[id="nav-search-submit-button"]').click();
    // Haz clic en el primer resultado de la búsqueda
    cy.get('.s-result-item').first().click();
    cy.get('.s-result-item').should('exist');
  });
});
