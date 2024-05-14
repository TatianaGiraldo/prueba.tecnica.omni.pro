describe('Create a new Amazon Colombia mobile account mobile', () => {
    it('You should complete the registration process', () => {
    cy.viewport('iphone-6');

      cy.visit('https://www.amazon.com/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=es&pageId=usflex&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fhz%2Fwishlist%2Fintro%3Fref_%3Dnav_ya_signin&prevRID=JT5YF0BJ0AVSCS3BF8XE&openid.assoc_handle=usflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'); 
      
      cy.get('input[name="customerName"]').type('TATI TEST');
      cy.get('input[name="email"]').type('tatigtest@gmail.com');
      cy.get('input[name="password"]').type('tatitest123');
      cy.get('#ap_password_check').type('tatitest123');

      cy.get('#continue').click();
    });
  });
  