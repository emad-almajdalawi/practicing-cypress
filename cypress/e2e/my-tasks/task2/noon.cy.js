/// <reference types="cypress" />

describe('cart', () => {
    const homePage = 'https://www.noon.com/uae-en/'
    const searchBar = '#searchBar'
    const firstProduct = '#productBox-N50840187A > .sc-9e9305b-0'
    const productNmaeFromProductPage = '.sc-8a26e3fa-12'
    const addToCartBtn = '.sc-8a26e3fa-14 > .sc-956a1cfb-1 > .cart-button > .loaderCtr'
    const continueShopingBtn = '#continue-shopping-btn > .sc-af60a083-1'
    const cartBtn = '.cartLink'
    const productNameFromCartPage = 'div.sc-ce9d6f0f-7.cRyAUI > h1'
    const removeBtn = '.sc-ce9d6f0f-24'
    const mainBodySecstion = '.sc-64a8c7b2-0'
    var productName = ''


    before(() => {
        cy.visit(homePage)
    })

    it('should search for a product then click on the first result', () => {
        cy.get(searchBar).type('iphone {enter}')
        cy.wait(4000)
        cy.get(firstProduct).click()
    })

    it("should save the product's name", () => {
        cy.get(productNmaeFromProductPage)
            .then(message => {
                productName = message.text()
                cy.wait(2000)
            })
    })

    it('should add the product to cart', () => {
        cy.get(addToCartBtn)
            .click()
        cy.wait(2000)
        cy.get(continueShopingBtn)
            .click()
        cy.wait(2000)

        cy.get(cartBtn)
            .click()
        cy.wait(2000)
        cy.get(productNameFromCartPage)
            .should('contain', `${productName}`)
    })

    it('should remove the product from cart', () => {
        cy.get(removeBtn)
            .click()
        cy.wait(2000)

        cy.get(cartBtn)
            .click()
        cy.wait(2000)
        cy.get(mainBodySecstion)
            .should('contain', 'Your shopping cart looks empty')
    })
})
