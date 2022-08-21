/// <reference types="cypress" />

describe('title', () => {
    it('h1 LOREM IPSUM', () => {
        cy.request('https://www.lipsum.com').its('status').should('eq', 200);
        cy.request('https://www.lipsum.com').its('body').should('contain', '<h1>Lorem Ipsum</h1>')
        // cy.get('h1').should('have.text', 'LOREM IPSUM');
    })
})