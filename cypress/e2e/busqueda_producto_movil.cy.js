describe('Búsqueda de Producto en Dispositivos Móviles', () => {
    it('Realiza una búsqueda de producto en la versión móvil de Amazon Colombia', () => {
      // Establece la vista del dispositivo móvil
      cy.viewport('iphone-x');
      // Visita el sitio web de Amazon Colombia
      cy.visit('https://www.amazon.com.co');
      // Ingresa el término de búsqueda "cámara" en el campo de búsqueda
      cy.get('#twotabsearchtextbox').type('cámara');
      // Haz clic en el botón de búsqueda
      cy.get('.nav-input').click();
      // Haz clic en el primer resultado de la búsqueda
      cy.get('.s-result-item').first().click();
      // Verifica que la URL incluya "/dp/", lo que indica que se redirigió a la página de un producto
      cy.url().should('include', '/dp/');
      // Validación adicional: Verifica que el nombre del producto esté presente en la página del producto
      cy.get('#productTitle').should('exist');
    });
  });
  