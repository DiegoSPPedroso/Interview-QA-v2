import { product } from './locators'

/**
 * Cypress command to find products with a specific price.
 * Example usage: cy.findProduct('$59')
 * @param {string} price - The exact product price (e.g., '$59')
 * @returns {Cypress.Chainable} - Returns the found products
 */
Cypress.Commands.add('findProduct', (price) => {
  return cy.get(product('item')).should('exist').filter((_, item) => {
    const productPrice = Cypress.$(item).find(product('price')).text().trim()
    return productPrice === price

  })
}) 