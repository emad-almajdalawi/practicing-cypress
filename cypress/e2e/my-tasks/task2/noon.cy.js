/// <reference types="cypress" />

describe('cart', () => {
    it('visit', () => {
        cy.visit('https://www.noon.com/uae-en/')
    })

    it('select one product and add it to the cart', () => {
        // search for a product (iphone)
        cy.get('#searchBar').type('iphone {enter}')

        // select the first product then open its page
        cy.wait(4000)
        cy.get('#productBox-N50840187A > .sc-9e9305b-0').click()

        // save the product's name
        cy.get('.sc-8a26e3fa-12')
            .then(message => {
                let product_name = message.text()
                console.log(product_name)
                cy.wait(2000)

                // add product to the cart
                cy.get('.sc-8a26e3fa-14 > .sc-956a1cfb-1 > .cart-button > .loaderCtr')
                    .click()
                cy.wait(2000)
                cy.get('#continue-shopping-btn > .sc-af60a083-1')
                    .click()
                cy.wait(2000)

                // open cart page
                cy.get('.cartLink')
                    .click()
                cy.wait(2000)
                cy.get(' div.sc-ce9d6f0f-7.cRyAUI > h1')
                    .should('contain', `${product_name}`)
            })

        // remove the product from the cart
        cy.get('.sc-ce9d6f0f-24')
            .click()
        cy.wait(2000)

        // check if the cart is empty
        cy.get('.cartLink')
            .click()
        cy.wait(2000)
        cy.get('.sc-64a8c7b2-0')
            .should('contain', 'Your shopping cart looks empty')
    })
})
