/**
 * Verifies if a text is within an element with a specific class
 * @param {string} className - The class name to search for
 * @param {string} text - The text to verify
 */
Cypress.Commands.add('verifyTextInClass', (className, text) => {
  cy.get(`.${className}`)
    .should('exist')
    .contains(text)
    .should('exist')
})

/**
 * Verifies if a number is present as a sibling (or nearby) of the target text within a specific class section
 * Works even if there are multiple "old-car" texts and numbers
 * Assumes structure like: <div class="details"><p>old-car</p><span>1</span></div>
 * @param {string} className - The class name to scope the search
 * @param {string} text - The reference text to find (e.g., "old-car")
 * @param {string} number - The number expected to appear next to the text
 */
Cypress.Commands.add('verifySiblingNumber', (className, text, number) => {
  cy.get(`.${className}`)
    .should('exist')
    .contains(text)
    .should('exist')
    .parents(`.${className}`)
    .within(() => {
      // Find the element that contains the target text
      cy.contains(text)
        .parent()
        .within(() => {
          // Verify that the number exists in a sibling <span>
          cy.get('span').contains(number).should('exist')
        })
    })
})
