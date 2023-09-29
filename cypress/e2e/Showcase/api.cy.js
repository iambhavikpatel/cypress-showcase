describe('API Testing', () => {
    
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1');
    
    it('GET - read', () => {
        cy.request('/employees').then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
            expect(response.body.data).to.have.length(24);
        })
    })
})