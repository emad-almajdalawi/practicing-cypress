describe('Github', () => {
    const test = {
        "squadName": "Super Hero Squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "edited text",
                "age": 10000,
                "secretIdentity": "Emad",
                "powers": [
                    "Radiation resistance",
                    "Turning tiny",
                    "Radiation blast"
                ]
            }
        ]
    }

    it('should display the github page', () => {
        // load only 1 entry
        cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html')
        cy.wait(2000)
        cy.intercept('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', test).as('json obj')
        cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html')
    });
})
