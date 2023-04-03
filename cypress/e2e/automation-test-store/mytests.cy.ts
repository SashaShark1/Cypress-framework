describe("Create custom tests", () => {
   

   beforeEach(()=> {   
    cy.visit('https://www.automationteststore.com/')
    
   })

    it("Check item in basket", function () {
      const title = 'Tropiques Minerale Loose Bronzer'
       cy.get(`a[title='${title}']`).click()
       cy.get('.productpagecart').click()
       cy.get('.table-bordered').eq(0).should('contain', title)
  } )

    it("Pick up the country from dropdown ", function () {
      const title = 'Absolue Eye Precious Cells'
       cy.get(`a[title='${title}']`).eq(0).click()
       cy.get('.productpagecart').click()
       cy.get('.table-bordered').eq(0).should('contain', title)

       cy.get('[name="country[]"]').select('Belarus').should('contain.text', 'Belarus')
       cy.get('[name="country_zones[]"]').select('338').should('contain.text', "Homyel'skaya (Homyel')")
       cy.get('#estimate_postcode').type('123456').should('have.value', '123456')
       cy.get('.btn-default').contains('Continue Shopping').click()
  } )

    it("Apply a coupon", function () {
      const title = 'ck one Summer 3.4 oz'
       cy.get(`a[title='${title}']`).eq(0).click()
       cy.get('.productpagecart').click()
       cy.get('.table-bordered').eq(0).should('contain', title)

       cy.get('#coupon_coupon').type('123456').should('have.value', '123456')
       cy.get('#apply_coupon_btn').click()

       cy.get('.alert-error').should('be.visible')
       cy.get('.alert-error').should('contain.text', "Error: Coupon is either invalid, expired or reached it's usage limit!")
  } )

    it("Remove a coupon", function () {
      const title = 'ck one Summer 3.4 oz'
       cy.get(`a[title='${title}']`).eq(0).click()
       cy.get('.productpagecart').click()
       cy.get('.table-bordered').eq(0).should('contain', title)

       cy.get('#coupon_coupon').type('123456').should('have.value', '123456')
       cy.get('#apply_coupon_btn').click()

       cy.get('#remove_coupon_btn').click()

       cy.get('.alert-success').should('be.visible')
       cy.get('.alert-success').should('contain.text', "Success: Coupon has been removed!")
  } )

    it.only("Log in", function () {     
       
       cy.get('#customernav').click()
       cy.get('[value="register"]').should('be.checked')
       cy.get('[title="Continue"]').click()

       cy.get('[name="firstname"]').type('Aleks')
       cy.get('[name="lastname"]').type('Gordon')
      
       cy.get('#AccountFrm_email').type(`Gordon${new Date().getTime()}@test.com`)
       cy.get('[name="address_1"]').type('Address')

       cy.get('[name="country_id"]').select('Belarus')
       cy.get('[name="zone_id"]').select('338')
       cy.get('[name="postcode"]').type('123456')
       cy.get('[name="city"]').type('Homiel')

       cy.get('[name="loginname"]').type(`Gordon${new Date().getTime()}`)
       cy.get('[name="password"]').type('12345')
       cy.get('[name="confirm"]').type('12345')

       cy.get('#AccountFrm_newsletter0').check()
       cy.get('#AccountFrm_agree').check()

       cy.get('[title="Continue"]').click()

       cy.get('.maintext').should('contain', 'Your Account Has Been Created!')
     
  } )


})