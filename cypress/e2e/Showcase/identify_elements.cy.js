function signIn() {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.title().should('eq','Conduit');
    cy.location('protocol').should('eq','https:');
    cy.get('input[type="email"]').type('bhaviktest2303@gmail.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('.btn').contains('Sign in').should('be.visible').click();
    cy.contains('Your Feed', {timeout:10000}).should('be.visible');
}

describe('Create and mark-unmark as favorite', function () {

    it('Create a post', function () {
        signIn();
        cy.get('ul.navbar-nav').children().contains('New Post').click();
        cy.hash().should('include', '#/editor');
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test');
            cy.get('input').eq(1).type('Test 1');
            cy.get('textarea').last().type('Test 2');
            cy.contains('Publish Article').click();
        })
        cy.url().should('include', 'article');
    })

    it('Mark-unmark as favorite', function () {
        signIn();
        cy.get('ul.navbar-nav').children().contains('BhavikTest').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').first().click();
        cy.contains('Favorited Articles').click();
        cy.url().should('include', 'favorites');
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart').first().click();
        cy.reload();
        cy.contains('No articles are here... yet.').should('be.visible');
        cy.go('back');
    })
})