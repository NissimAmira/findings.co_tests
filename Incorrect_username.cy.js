describe('Findings 2nd test', () => {
  it('Incorrect username', () => {
    cy.visit('https://app.findings.co')
    cy.get('input[type*="email"]').type('nissim.amira@findings.co')
    cy.get('input[type*="password"]').type('nissim1234!')
    cy.get('button[type*="submit"]').click().as('clickLogIn')
    cy.get('div[data-test*="login-page-error-message"]').should('have.text','Invalid credentials')
  })
})