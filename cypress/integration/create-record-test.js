
// positive login test
describe('login with valid credentials results in a successfull login', () => {

    it('sucessfully logins', () => {
      // fist we navigate to the login page
      cy.visit('https://qa-practical.qa.swimlane.io/login');
      
      // when we get the username field and enter valid username cridentials
      cy.get('#input-1').type("sam.shucher")
  
      // when we get the password field and enter password credentials
      cy.get('#input-2').type("Sam123456!")
      
      // when we get and click the login button
      cy.get('.btn-signin').click()
    
    })
  })

describe('navigate to new record page', () => {

    it('does not complete a successfull login when credentials are empty', () => {

      // we get and click twice using cypress to actually display the plus sign
      cy.wait(1000)
      cy.get('.nav-label').contains("Application Records").click()
      cy.wait(1000)
      cy.get('.nav-label').contains("Application Records").click()
      cy.wait(1000)
    //   // we get and click the plus sign
      cy.get('.ngx-plus').click()
  
    //   // then we check if we get the login failure message
      cy.url().should('eq','https://qa-practical.qa.swimlane.io/record/aaUiorxB5O4lm4Cye/')
   
    })
  })



  describe('City field is left empty', () => {

    it(' misses the required fields and cant save the record', () => {

    /////// ========================================vvvvvvvvvvvvvvvvvvvvvvvvvv
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================vvvvvvvvvvvvvvvvvvvvvvvvvv

      cy.visit('https://qa-practical.qa.swimlane.io/login');
    
    // when we get the username field and enter valid username cridentials
      cy.get('#input-1').type("sam.shucher")

    // when we get the password field and enter password credentials
      cy.get('#input-2').type("Sam123456!")
    
    // when we get and click the login button
      cy.get('.btn-signin').click()
      // we get and click twice using cypress to actually display the plus sign
      cy.get('.nav-label').contains("Application Records").click()
      cy.get('.nav-label').contains("Application Records").click()
      
    //  we get and click the plus sign
      cy.get('.app-buttons').click()


    /////// ========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================^^^^^^^^^^^^^^^^^^^^^^^^^^

    // get the first name field and input a valid first name 
       cy.get('.form-input').first().type("123")
       
    // get the Last name field and input a valid first name 
       cy.get('.form-input').eq(1).type("456")

    // get and press the save button 
       cy.get('.text').contains("Save").click()

    // get and press the save button on the Time Spent  
       cy.get('.btn-primary').contains("Save").click()

    // verify an error pop-up message is displayed when we attempt to a required field as blank
      cy.get('.title').should('have.text','The record has validation error(s)!')


//============================================================================================
//    A S S E R T     N E E D E D 
//============================================================================================
    })
})

describe('first name field is left empty', () => {

    it(' misses the required fields and cant save the record', () => {

    /////// ========================================vvvvvvvvvvvvvvvvvvvvvvvvvv
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================vvvvvvvvvvvvvvvvvvvvvvvvvv

      cy.visit('https://qa-practical.qa.swimlane.io/login');
    
    // when we get the username field and enter valid username cridentials
      cy.get('#input-1').type("sam.shucher")

    // when we get the password field and enter password credentials
      cy.get('#input-2').type("Sam123456!")
    
    // when we get and click the login button
      cy.get('.btn-signin').click()
      // we get and click twice using cypress to actually display the plus sign
      cy.get('.nav-label').contains("Application Records").click()
      cy.get('.nav-label').contains("Application Records").click()
      
    //  we get and click the plus sign
      cy.get('.app-buttons').click()


    /////// ========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
 

    // get the city name field and input a valid first name 
        cy.get('.form-input').eq(3).type("987")
       
    // get the Last name field and input a valid first name 
        cy.get('.form-input').eq(1).type("456")

    // get and press the save button 
        cy.get('.text').contains("Save").click()

    // get and press the save button on the Time Spent  
        cy.get('.btn-primary').contains("Save").click()

    // verify an error pop-up message is displayed when we attempt to a required field as blank
    cy.get('.title').should('have.text','The record has validation error(s)!')

    })
})


describe('last name field is left empty', () => {

    it(' misses the required fields and cant save the record', () => {

    /////// ========================================vvvvvvvvvvvvvvvvvvvvvvvvvv
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================vvvvvvvvvvvvvvvvvvvvvvvvvv

      cy.visit('https://qa-practical.qa.swimlane.io/login');
    
    // when we get the username field and enter valid username cridentials
      cy.get('#input-1').type("sam.shucher")

    // when we get the password field and enter password credentials
      cy.get('#input-2').type("Sam123456!")
    
    // when we get and click the login button
      cy.get('.btn-signin').click()
      // we get and click twice using cypress to actually display the plus sign
      cy.get('.nav-label').contains("Application Records").click()
      cy.get('.nav-label').contains("Application Records").click()
      
    //  we get and click the plus sign
      cy.get('.app-buttons').click()


    /////// ========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
    //////  This code sectiion would ideally be replaced by maintining cookies
    ////// =========================================^^^^^^^^^^^^^^^^^^^^^^^^^^

    // get the first name field and input a valid first name 

    // get the city name field and input a valid first name 
        cy.get('.form-input').eq(3).type("987")
       
    // get the Last name field and input a valid first name 
        cy.get('.form-input').eq(1).type("456")

    // get and press the save button 
        cy.get('.text').contains("Save").click()

    // get and press the save button on the Time Spent  
        cy.get('.btn-primary').contains("Save").click()

    // verify an error pop-up message is displayed when we attempt to a required field as blank
        cy.get('.title').should('have.text','The record has validation error(s)!')

      
      
    })
})

describe('successfully create as a new user record', () => {

  it('generates a new user record', () => {

  /////// ========================================vvvvvvvvvvvvvvvvvvvvvvvvvv
  //////  This code sectiion would ideally be replaced by maintining cookies
  ////// =========================================vvvvvvvvvvvvvvvvvvvvvvvvvv



    cy.visit('https://qa-practical.qa.swimlane.io/login');
  
  // when we get the username field and enter valid username cridentials
    cy.get('#input-1').type("sam.shucher")

  // when we get the password field and enter password credentials
    cy.get('#input-2').type("Sam123456!")
  
  // when we get and click the login button
    cy.get('.btn-signin').click()
    // we get and click twice using cypress to actually display the plus sign
    cy.wait(1000)
    cy.get('.nav-label').contains("Application Records").click()
    cy.wait(1000)
    cy.get('.nav-label').contains("Application Records").click()
    cy.wait(1000)
  //  we get and click the plus sign
    cy.get('.ngx-plus').click()



  /////// ========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
  //////  This code sectiion would ideally be replaced by maintining cookies
  ////// =========================================^^^^^^^^^^^^^^^^^^^^^^^^^^
    
  
  // get the first name field and input a valid first name 
     cy.get('.form-input').first().type("abcD")
     
  // get the Last name field and input a valid first name 
     cy.get('.form-input').eq(1).type("EFG")

  // get the city name field and input a valid first name 
     cy.get('.form-input').eq(3).type("hijk")
    cy.wait(1000)
  // input an employe id to use for garbage colletion later
    cy.get('.form-input').eq(9 ).type("424242")
    cy.wait(1000)
  // get and press the save button 
     cy.get('.text').contains("Save").click()

  // get and press the save button on the Time Spent  
     cy.get('.btn-primary').contains("Save").click()
     
  // we navigate to new employee submissions
     cy.get('.subnav-label').contains("New Employee Submission").click()
     cy.wait(1000)
     // garbage collection 
     // we select the newly created record 
     cy.get('.dt-cell-content').contains('424242').click()
     cy.wait(1000)

     cy.get('.ngx-trash').click()
     cy.wait(1000)
         // get and press the save button on the Time Spent  
     cy.get('.btn-primary').contains("Ok").click()
     //wait one second
     cy.wait(1000)
     //verifies that the test user is no longer there
     cy.contains('424242').should('not.exist')

  })
})