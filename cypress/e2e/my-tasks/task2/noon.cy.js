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


    it('Should visit the home page', () => {
        cy.visit(homePage)
    })

    it('Should search for a product then click on the first result', () => {
        cy.get(searchBar).type('iphone {enter}')
        cy.get(firstProduct).click()
    })

    it("Should save the product's name", () => {
        cy.get(productNmaeFromProductPage)
            .then(message => {
                productName = message.text()

            })
    })

    it('Should add the product to cart', () => {
        cy.get(addToCartBtn)
            .click()
        cy.get(continueShopingBtn)
            .click()

        cy.get(cartBtn)
            .click()
        cy.get(productNameFromCartPage)
            .should('contain', `${productName}`)
    })

    it('Should remove the product from cart', () => {
        cy.get(removeBtn)
            .click()

        cy.get(cartBtn)
            .click()
        cy.get(mainBodySecstion)
            .should('contain', 'Your shopping cart looks empty')
    })
})
