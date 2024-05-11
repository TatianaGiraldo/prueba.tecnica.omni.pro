describe('Agregar Producto al Carrito desde Dispositivos Móviles', () => {
    it('Agrega un producto al carrito desde la versión móvil de Amazon Colombia', () => {
      // Establece la vista del dispositivo móvil
      cy.viewport('iphone-x');
      // Visita el sitio web de Amazon Colombia
      cy.visit('https://www.amazon.com.co');
      // Ingresa el término de búsqueda "tableta" en el campo de búsqueda
      cy.get('#twotabsearchtextbox').type('tableta');
      // Haz clic en el botón de búsqueda
      cy.get('.nav-input').click();
      // Haz clic en el primer resultado de la búsqueda
      cy.get('[data-component-type="s-search-result"]').first().find('span.a
  