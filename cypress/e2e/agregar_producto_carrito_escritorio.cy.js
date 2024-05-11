describe('Agregar Producto al Carrito desde Escritorio', () => {
    it('Agrega un producto al carrito desde la versión de escritorio de Amazon Colombia', () => {
      // Visita el sitio web de Amazon Colombia
      cy.visit('https://www.amazon.com.co');
      // Ingresa el término de búsqueda "audífonos" en el campo de búsqueda
      cy.get('#twotabsearchtextbox').type('audífonos');
      // Haz clic en el botón de búsqueda
      cy.get('.nav-input').click();
      // Obtén el precio del primer resultado de la búsqueda
      cy.get('[data-component-type="s-search-result"]').first().find('span.a-price > span').invoke('text').then(($price) => {
        // Convierte el precio a un número decimal
        const price = parseFloat($price.replace('$', ''));
        // Haz clic en el precio del primer resultado de la búsqueda
        cy.get('[data-component-type="s-search-result"]').first().find('span.a-price > span').click();
        // Haz clic en el botón "Añadir al carrito"
        cy.get('#add-to-cart-button').click();
        // Verifica que se haya agregado correctamente un elemento al carrito
        cy.get('#nav-cart-count').should('contain', '1');
        // Validación adicional: Verifica que el precio en el carrito coincida con el precio del producto
        cy.get('.a-size-medium.a-color-price').invoke('text').then(($cartPrice) => {
          const cartPrice = parseFloat($cartPrice.replace('$', ''));
          expect(cartPrice).to.equal(price);
        });
      });
    });
  });