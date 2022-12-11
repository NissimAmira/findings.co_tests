describe('Findings 4th test', () => {
    it('Reset password', () => {
        cy.visit('https://app.findings.co')
        cy.get('a[data-test*="login-page-reset-password-link"]').click()
        cy.get('input[data-test*="reset-password-input"]').type("nissim.amira@findings.co")
        cy.get('button[type*="submit"]').click()
        cy.get('p[class*="reset-password-success"]').should('have.text','Password reset instructions have been emailed.')

    })
})