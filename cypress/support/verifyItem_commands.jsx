/**
 * Cypress command to verify and optionally click elements within the test table.
 * Example usage: cy.verifyItem('p', 'First')
 * @param {string} selector - The element selector (e.g., 'p', 'span', 'button', '.button-order-more')
 * @param {string} text - The expected text content
 * @param {boolean} shouldClick - Whether to click the element (default: false)
 */
Cypress.Commands.add('verifyItem', (selector, text, shouldClick = false) => {
  const element = cy.get('@test-table').find(selector)

  // If it's a button, use contains to find the specific text
  if (selector === 'button' || selector === '.button-order-more') {
      element.contains(text)
          .should('be.visible')
          .and('be.enabled')
          .then(($el) => {
              if (shouldClick) {
                  cy.wrap($el).click()
              }
          })
  } else {
      // For other elements, check exact text match
      element.should('be.visible')
          .and('have.text', text)
  }
})
