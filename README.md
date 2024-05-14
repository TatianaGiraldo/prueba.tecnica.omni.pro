Prueba Técnica - QA Engineer
Descripción
Este repositorio contiene los scripts de prueba desarrollados en Cypress como parte de la prueba técnica para la vacante de QA Engineer en OMNI.PRO. Los scripts están diseñados para automatizar la verificación de funcionalidades clave del sitio web y asegurar que todo funcione según lo esperado.

Estructura del Proyecto
La estructura del proyecto es la siguiente:
.
├── cypress/
│   ├── e2e/
│   │   ├── 01_search_product_desktop.cy.js
│   │   ├── 02_add_product_to_cart_desktop.cy.js
│   │   ├── 03_search_product_add_cart_desk.cy.js
│   │   ├── 04_category_navigation_desktop.cy.js
│   │   ├── 05_search_filter_products_mobile.cy.js
│   │   ├── 06_verify_user_exp_h_p_mobile.cy.js
│   │   ├── 07_create_account_mobile.cy.js
│   │   ├── 08_add_product_wish_list_mobile.cy.js
│   ├── screenshots/
│   ├── support/
│   │   ├── component-index.html
│   │   ├── component.js
├── cypress.config.js

Pre-requisitos
Para ejecutar estos scripts de prueba, asegúrate de tener las siguientes herramientas instaladas:

Node.js (v12 o superior)
Cypress

Instalación
   1. Clona el repositorio en tu máquina local:
      git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   2. Navega al directorio del proyecto:
      cd nombre-del-repositorio
   3. Instala las dependencias:
      npm install

Ejecución de Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:
npx cypress open

Esto abrirá la interfaz de usuario de Cypress donde podrás seleccionar y ejecutar las pruebas disponibles.

Descripción de los Scripts de Prueba

01_search_product_desktop.cy.js: Verifica la funcionalidad de búsqueda de productos en la versión de escritorio.
02_add_product_to_cart_desktop.cy.js: Prueba la adición de productos al carrito en la versión de escritorio.
03_search_product_add_cart_desk.cy.js: Combinación de búsqueda y adición al carrito en escritorio.
04_category_navigation_desktop.cy.js: Navegación por categorías en la versión de escritorio.
05_search_filter_products_mobile.cy.js: Búsqueda y filtrado de productos en la versión móvil.
06_verify_user_exp_h_p_mobile.cy.js: Verificación de la experiencia del usuario en la página principal en móvil.
07_create_account_mobile.cy.js: Prueba de la creación de una cuenta de usuario en la versión móvil.
08_add_product_wish_list_mobile.cy.js: Adición de productos a la lista de deseos en la versión móvil.

Notas
Asegúrate de configurar correctamente el entorno y las variables necesarias antes de ejecutar las pruebas.
Los scripts están diseñados para ser ejecutados en el entorno de prueba especificado. Pueden necesitar ajustes si se ejecutan en un entorno diferente.

Tatiana Giraldo Porras
Ingeniera de software
atgiraldo9@gmail.com
