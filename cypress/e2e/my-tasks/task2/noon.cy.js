/// <reference types="cypress" />

describe('cart', () => {
    it('visit', () => {
        cy.visit('https://www.noon.com/uae-en/')
    })

    it('search', () => {
        cy.get('#searchBar').type('iphone {enter}')
        cy.wait(5000)
    })

    it('select product', () => {
        cy.get('#__next > div > section > div > div > div > div.sc-14577ffd-5.fYEHiF > div.sc-14577ffd-7.gxngsl.grid > span:nth-child(1)')
            .click()
        cy.wait(5000)
    })

    it('add to cart', () => {
        cy.get('.sc-8a26e3fa-14 > .sc-956a1cfb-1 > .cart-button > .loaderCtr')
            .click()
        cy.wait(2000)
        cy.get('#continue-shopping-btn > .sc-af60a083-1')
            .click()
        cy.wait(2000)
    })

    it('check adding to the cart', () => {
        cy.get('.cartLink')
            .click()
        cy.wait(5000)
        cy.get('#__next > div > section > div > div > div.sc-d66c1747-1.ruDHX > div.sc-ce9d6f0f-3.bxWqLd > div > div.sc-ce9d6f0f-5.hQMcxH > div.sc-ce9d6f0f-7.cRyAUI > h1')
            .should('contain', 'iPhone 13 Pro Max')
    })

    it('remove product from chart', () => {
        cy.get('button .sc-ce9d6f0f-13.hkOcUg')
            .click()
        cy.wait(2000)
    })

    it('check removing from the cart', () => {
        cy.get('.cartLink')
            .click()
        cy.wait(5000)
        cy.get('.sc-64a8c7b2-0')
            .should('contain', 'Your shopping cart looks empty')
    })
})
