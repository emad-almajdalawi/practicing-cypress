/// <reference types="cypress" />

describe('cart', () => {
    let views = ['Desktop Resolution', 'IPhone-X view', 'Phone view 1080 x 1920']

    views.forEach(view => {
        context(view, () => {
            var productName = ''

            if (view == 'IPhone-X view') {
                beforeEach(() => {
                    cy.viewport('iphone-x')
                })
            }

            if (view == 'Phone view 1080 x 1920') {
                beforeEach(() => {
                    cy.viewport(1080, 1920)
                })
            }

            it('Should visit the home page', () => {
                cy.visit(Cypress.config('baseUrl'))
            })

            it('Should search for a product then click on the first result', () => {
                cy.get(Cypress.env('searchBar')).type('iphone {enter}')
                cy.wait(1000)
                cy.get(Cypress.env('firstProduct')).click()
            })

            it("Should save the product's name", () => {
                cy.get(Cypress.env('productNmaeFromProductPage'))
                    .then(message => {
                        productName = message.text()

                    })
            })

            it('Should add the product to cart', () => {
                cy.get(Cypress.env('addToCartBtn'))
                    .click()
                cy.get(Cypress.env('continueShopingBtn'))
                    .click()

                cy.get(Cypress.env('cartBtn'))
                    .click()
                cy.wait(1000)
                cy.get(Cypress.env('productNameFromCartPage'))
                    .should('contain', `${productName}`)
            })

            it('Should remove the product from cart', () => {
                cy.get(Cypress.env('removeBtn'))
                    .click()

                cy.get(Cypress.env('cartBtn'))
                    .click()
                cy.get(Cypress.env('mainBodySecstion'))
                    .should('contain', 'Your shopping cart looks empty')
            })
        })
    })
})
