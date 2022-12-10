describe('Findings 1st test', () => {
  it('Successfull Login', () => {
    cy.visit('https://app.findings.co')
    cy.get('input[type*="email"]').type('nissim.amira@findings.co')
    cy.get('input[type*="password"]').type('nissim123!')
    cy.get('button[type*="submit"]').click().as('clickLogIn')
    cy.wait(10000)
    cy.url().should('include', 'app.findings.co/site/2c8c5484-0662-46a3-9f26-191035f875b2')
  })
})