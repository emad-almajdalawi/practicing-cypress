/// <reference types="cypress" />

describe('cart', () => {
    context('Desktop Resolution', () => {
        var productName = ''

        it('Should visit the home page', () => {
            cy.visit(Cypress.config('baseUrl'))
        })

        it('Should search for a product then click on the first result', () => {
            cy.get(Cypress.config('searchBar')).type('iphone {enter}')
            cy.get(Cypress.config('firstProduct')).click()
        })

        it("Should save the product's name", () => {
            cy.get(Cypress.config('productNmaeFromProductPage'))
                .then(message => {
                    productName = message.text()

                })
        })

        it('Should add the product to cart', () => {
            cy.get(Cypress.config('addToCartBtn'))
                .click()
            cy.get(Cypress.config('continueShopingBtn'))
                .click()

            cy.get(Cypress.config('cartBtn'))
                .click()
            cy.get(Cypress.config('productNameFromCartPage'))
                .should('contain', `${productName}`)
        })

        it('Should remove the product from cart', () => {
            cy.get(Cypress.config('removeBtn'))
                .click()

            cy.get(Cypress.config('cartBtn'))
                .click()
            cy.get(Cypress.config('mainBodySecstion'))
                .should('contain', 'Your shopping cart looks empty')
        })
    })

    context('IPhone-X Resolution (375 x 812)', () => {
        var productName = ''

        beforeEach(() => {
            cy.viewport('iphone-x')
        })

        it('Should visit the home page', () => {
            cy.visit(Cypress.config('baseUrl'))
        })

        it('Should search for a product then click on the first result', () => {
            cy.get(Cypress.config('searchBar')).type('iphone {enter}')
            cy.wait(1000)
            cy.get(Cypress.config('firstProduct')).click()
        })

        it("Should save the product's name", () => {
            cy.get(Cypress.config('productNmaeFromProductPage'))
                .then(message => {
                    productName = message.text()

                })
        })

        it('Should add the product to cart', () => {
            cy.get(Cypress.config('addToCartBtn'))
                .click()
            cy.get(Cypress.config('continueShopingBtn'))
                .click()

            cy.get(Cypress.config('cartBtn'))
                .click()
            cy.get(Cypress.config('productNameFromCartPage'))
                .should('contain', `${productName}`)
        })

        it('Should remove the product from cart', () => {
            cy.get(Cypress.config('removeBtn'))
                .click()

            cy.get(Cypress.config('cartBtn'))
                .click()
            cy.get(Cypress.config('mainBodySecstion'))
                .should('contain', 'Your shopping cart looks empty')
        })
    })
})
