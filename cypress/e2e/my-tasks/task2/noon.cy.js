/// <reference types="cypress" />

describe('cart', () => {
    const firstProduct = '#productBox-N50840187A > .sc-9e9305b-0'
    const productNmaeFromProductPage = '.sc-8a26e3fa-12'
    const addToCartBtn = '.sc-8a26e3fa-14 > .sc-956a1cfb-1 > .cart-button > .loaderCtr'
    const continueShopingBtn = '#continue-shopping-btn > .sc-af60a083-1'
    const productNameFromCartPage = 'div.sc-ce9d6f0f-7.cRyAUI > h1'
    const removeBtn = '.sc-ce9d6f0f-24'
    const mainBodySecstion = '.sc-64a8c7b2-0'

    it('should visit the home page', () => {
        cy.visit('https://www.noon.com/uae-en/')
    })

    it('should search for a product then click on it', () => {
        // search for a product (iphone)
        cy.get('#searchBar').type('iphone {enter}')
        cy.wait(4000)

        // select the first product then open its page
        cy.get(firstProduct).click()
    })

    it('should add the product to cart', () => {
        // save the product's name
        cy.get(productNmaeFromProductPage)
            .then(message => {
                const productName = message.text()
                console.log(productName)
                cy.wait(2000)

                // add product to the cart
                cy.get(addToCartBtn)
                    .click()
                cy.wait(2000)
                cy.get(continueShopingBtn)
                    .click()
                cy.wait(2000)

                // open cart page
                cy.get('.cartLink')
                    .click()
                cy.wait(2000)
                cy.get(productNameFromCartPage)
                    .should('contain', `${productName}`)
            })
    })

    it('should remove the product from cart', () => {
        // remove the product from the cart
        cy.get(removeBtn)
            .click()
        cy.wait(2000)

        // check if the cart is empty
        cy.get('.cartLink')
            .click()
        cy.wait(2000)
        cy.get(mainBodySecstion)
            .should('contain', 'Your shopping cart looks empty')
    })
})
