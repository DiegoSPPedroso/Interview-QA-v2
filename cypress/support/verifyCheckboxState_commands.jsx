/**
 * Cypress command to verify if a specific checkbox is checked within a grid section.
 * @param {string} gridSelector - The grid section selector (e.g., '[data-cy="test-grid-3"]')
 * @param {string} textContent - The text content to find in the paragraph
 */
Cypress.Commands.add('verifyCheckboxState', (gridSelector, textContent) => {
  // First, verify if the grid exists
  cy.get(gridSelector).should('exist')

  // Find the item-content containing the paragraph with specific text
  cy.get(gridSelector)
    .find('div.item-content')
    .should('exist')
    .contains('p', textContent)
    .should('exist')
    .parents('div.item-content')
    .should('exist')
    .within(() => {
      // Verify if the checkbox exists and is checked
      cy.get('input[type="checkbox"]')
        .should('exist')
        .and('be.checked')
        .and('be.disabled')
    })
})