const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.noon.com/uae-en/',
        searchBar: '#searchBar',
        firstProduct: '#productBox-N50840187A > .sc-9e9305b-0',
        productNmaeFromProductPage: '.sc-8a26e3fa-12',
        addToCartBtn: '.sc-8a26e3fa-14 > .sc-956a1cfb-1 > .cart-button > .loaderCtr',
        continueShopingBtn: '#continue-shopping-btn > .sc-af60a083-1',
        cartBtn: '.cartLink',
        productNameFromCartPage: 'div.sc-ce9d6f0f-7.cRyAUI > h1',
        removeBtn: '.sc-ce9d6f0f-24',
        mainBodySecstion: '.sc-64a8c7b2-0',

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
