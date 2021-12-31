

  
describe('no login creds results in login failure test', () => {

  it('does not complete a successfull login when credentials are empty', () => {
    // fist we navigate to the login page
    cy.visit('https://qa-practical.qa.swimlane.io/login');
    
    // we clear the Username field
    cy.get('#input-1').clear()

    // we clear the Password field
    cy.get('#input-2').clear()

    // we get and click the login button
    cy.get('.btn-signin').click()

    
    // then we check if we get the login failure message
    cy.get('.login-error').should('have.text','Login failed.')
 
  })
})

describe('incorrect login  cred results in login failure test', () => {
  
  it('will not login suceedfully when invalid credentials are passed to login fields', () => {

    // fist we navigate to the login page
    cy.visit('https://qa-practical.qa.swimlane.io/login');

    // when we get the username field and enter invalid username cridentials
    cy.get('#input-1').type("NOTsam.shucher")

    // when we get the password field and enter invalid password credentials
    cy.get('#input-2').type("sAM1234d56@")

    // we get and click the login button
    cy.get('.btn-signin').click()

    // then we check if we get the login failure message
    cy.get('.login-error').should('have.text','Login failed.')

  })
})

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

    // then the URL should change to qa-practical site
    cy.url().should('eq','https://qa-practical.qa.swimlane.io/workspace/aMt05awx9fc7s8_uj/5ff37d6b7571db02a92372be')

    // click the current users icon
    cy.get('.acronym').click()

    //press the logout button
    cy.get('.logout-button').click()

    // verifies we landed on the 'you have successfully logged out page
    cy.get('.btn-primary').should('have.text',' Return to Swimlane ')

    
  })
})

