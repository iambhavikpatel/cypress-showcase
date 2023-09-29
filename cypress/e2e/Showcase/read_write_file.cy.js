describe('Read-Write files content', function(){
	
    it('Write to a file', function(){
        cy.writeFile('sampleFile.txt', 'Hello World\n');
        cy.writeFile('sampleFile.txt', 'I am Bhavik', {flag: 'a+'})
        
    })

    it('Read from a file', function(){
       cy.readFile('sampleFile.txt').should('contains', 'Hello World')
    })
})