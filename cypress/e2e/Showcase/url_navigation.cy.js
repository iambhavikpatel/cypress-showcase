function signIn() {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.title().should('eq','Conduit');
    cy.location('protocol').should('eq','https:');
    cy.get('input[type="email"]').type('bhaviktest2303@gmail.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('.btn').contains('Sign in').should('be.visible').click();
    cy.contains('Your Feed', {timeout:10000}).should('be.visible');
}
describe('Create and mark-unmark as favorite', function(){

    it('Create a post', function(){
        signIn();
        cy.visit('https://react-redux.realworld.io/#/editor?_k=b0mgqa');
        cy.hash().should('include','#/editor');
        cy.get('input[placeholder="Article Title"]').type('Test');
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2');
        cy.contains('Publish Article').click();
        cy.url().should('include','article');
    })
})