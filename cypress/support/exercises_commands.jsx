const exerciseNumber = {
    exercise1: {
        header: 'Exercise 1 - Find Product',
        title: 'Exercise 1: Find Product with Specific Price'
    },
    exercise2: {
        header: 'Exercise 2 - Table Elements',
        title: 'Exercise 2: Find Table Elements'
    },
    exercise3: {
        header: 'Exercise 3 - Checkbox Verification',
        title: 'Exercise 3: Verify Checkbox State'
    },
    exercise4: {
        header: 'Exercise 4 - Element Relations',
        title: 'Exercise 4: Element Relations'
    },
    exercise5: {
        header: 'Exercise 5 - Login Command',
        title: 'Exercise 5: Login Command'
    },
    exercise6: {
        header: 'Exercise 6 - Product Selection',
        title: 'Exercise 6: Product Selection'
    },
    exercise7: {
        header: 'Exercise 7 - API Intercept',
        title: 'Exercise 7: API Interception'
    }
}

/**
 * Cypress command to navigate to a specific exercise.
 * Example usage: cy.exercises(1)
 * @param {number} number - The exercise number (1-7)
 */
Cypress.Commands.add('exercises', (number) => {
    const exerciseKey = `exercise${number}`
    const exercise = exerciseNumber[exerciseKey]

    if (!exercise) {
        cy.log(`Exercise ${number} not found in exerciseNumber object`)
    }
    if (number === 5 || number === 6 || number === 7) {
        cy.get('svg[data-testid="KeyboardArrowRightIcon"]').should('be.visible').click()
    }
    cy.contains('button', exercise.header).should('be.visible').click()
    cy.contains('h4', exercise.title).should('be.visible')
}) 