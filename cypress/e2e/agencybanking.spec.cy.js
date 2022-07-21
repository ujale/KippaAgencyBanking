describe('Kippapay Agent App', () => {
  beforeEach('login as an agent', ()=> {
    cy.visit('/')
    cy.wait(3000)
    cy.get('#username-field').type('08126517717')
    cy.get('#password-field').type('01234')
    cy.get('.btn').click()
  })
    Cypress.on('uncaught:exception', () => {
      return false
    })
  afterEach('logout as an agent', ()=> {
    cy.get('.sidebarCollapse > .feather').click()
    cy.get(':nth-child(6) > .dropdown-toggle > div > span').click()
  })
  it('View dashboard information', () => { 
    //Dashboard is loaded
    cy.get('.usr-name').should('be.visible').and('include.text', 'Udeme Jalekun')
    //Total wallet balance is displayed
    cy.get('.wallet-balance > h5').should('be.visible')
    //Total credit & commission
    cy.get('.widget-amount').should('be.visible')
    //Transaction summary
    cy.get('.order-summary').should('be.visible')
    //Terminal recent activity
    cy.get(':nth-child(3) > .widget').should('be.visible')
    //Recent transaction table
    cy.get('.table').should('be.visible')
  })
  it('Navigate to the Terminal module', () => {
    cy.wait(3000)
    cy.get('.sidebarCollapse > .feather').click()
    cy.get(':nth-child(2) > .dropdown-toggle > div > span').click()
    cy.get('h3').should('contain.text', 'Terminals')
  })
  it('Navigate to Report Module', ()=> {
    cy.wait(3000)
    cy.get('.sidebarCollapse > .feather').click()
    cy.get(':nth-child(3) > .dropdown-toggle > div > span').click()
    cy.get('h3').should('contain.text', 'Generate Reports')
    cy.get('select[value="1"]').select('1')
  })  
})