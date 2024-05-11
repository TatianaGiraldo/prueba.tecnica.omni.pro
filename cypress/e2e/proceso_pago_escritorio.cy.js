describe('Proceso de Pago en Escritorio', () => {
    it('Completa el proceso de pago en la versión de escritorio de Amazon Colombia', () => {
      // Visita el sitio web de Amazon Colombia
      cy.visit('https://www.amazon.com.co');
      // Ingresa el término de búsqueda "libro" en el campo de búsqueda
      cy.get('#twotabsearchtextbox').type('libro');
      // Haz clic en el botón de búsqueda
      cy.get('.nav-input').click();
      // Haz clic en el primer resultado de la búsqueda
      cy.get('[data-component-type="s-search-result"]').first().find('span.a-price > span').click();
      // Haz clic en el botón "Añadir al carrito"
      cy.get('#add-to-cart-button').click();
      // Verifica que se haya agregado correctamente un elemento al carrito
      cy.get('#nav-cart-count').should('contain', '1');
      // Haz clic en el botón "Ir al carrito y pagar"
      cy.get('#hlb-ptc-btn-native').click();
      // Ingresa la contraseña en el campo de contraseña
      cy.get('#ap_password').type('tu_contraseña');
      // Haz clic en el botón "Iniciar sesión y pagar"
      cy.get('#signInSubmit').click();
      // Haz clic en el botón "Continuar"
      cy.get('#continue').click();
      // Haz clic en el botón "Realizar pedido"
      cy.get('#placeYourOrder').click();
      // Verifica que se haya completado el pedido con éxito
      cy.contains('Tu pedido ha sido realizado').should('exist');
      // Validación adicional: Verifica que el número de pedido esté presente en la página de confirmación
      cy.get('.a-box-group.a-spacing-base').contains('Número de pedido').should('exist');
    });
  });
  