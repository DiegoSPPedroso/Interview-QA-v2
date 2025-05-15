import { button, product } from "./locators"

Cypress.Commands.add('listAndClickWrongProducts', (correctProductName = 'Gaming Headset') => {
  cy.get(product('', 'class'))
    .should('have.length.at.least', 1)
    .each(($product) => {
      const name = $product.find('h2').text().trim()

      if (name && name !== correctProductName) {
        cy.wrap($product).within(() => {
          cy.get(button('add'))
            .should('be.visible')
            .should('be.enabled')
            .click()
        })

        cy.get('svg[data-testid="ErrorOutlineIcon"]').should('be.visible')

        cy.get('.MuiAlert-message', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .should('have.text', `Incorrect. Try selecting the ${correctProductName}.`)
          .should('have.css', 'color', 'rgb(95, 33, 32)')
      }
    })
})

Cypress.Commands.add('listAndClickCorrectProduct', (productName = 'Gaming Headset') => {
  cy.get(product('', 'class'))
    .should('have.length.at.least', 1)
    .each(($product) => {
      const name = $product.find('h2').text().trim()

      if (name === productName) {
        cy.wrap($product).within(() => {
          cy.get(button('add'))
            .should('be.visible')
            .should('be.enabled')
            .click()
        })

        cy.get('svg[data-testid="SuccessOutlinedIcon"]').should('be.visible')

        cy.get('.MuiAlert-message', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .should('have.text', `Correct! You selected the ${productName}.`)
          .should('have.css', 'color', 'rgb(30, 70, 32)')
      }
    })
})
