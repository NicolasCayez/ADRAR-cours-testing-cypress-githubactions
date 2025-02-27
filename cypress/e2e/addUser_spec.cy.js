describe('Test formulaire addUser', () => {
  it('passes', () => {
    cy.visit('http://localhost/github_testing/addUser')
    cy.get('input[name=nom]').type('testNom')
    cy.get('input[name=prenom]').type('testPrenom')
    cy.get('input[name=mail]').type(Math.random().toString(36).substring(2, 15) + '@gmail.com')
    cy.get('input[name=mdp]').type('testPassword')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
  })
})