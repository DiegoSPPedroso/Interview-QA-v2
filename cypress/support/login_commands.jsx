import { button, input, message } from "./locators"

/**
 * Custom command to handle user login
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @example
 * cy.login('test@example.com', 'password123')
 */
Cypress.Commands.add('login', (email, password) => {
  // Ensure form is ready and has correct structure
  cy.get('form.login-form')
    .should('exist')
    .should('be.visible')
    .should('have.attr', 'class', 'login-form')

  // Type email with retry-ability
  cy.get(input('email'))
    .should('be.visible')
    .should('be.enabled')
    .should('have.attr', 'type', 'email')
    .should('have.attr', 'placeholder', 'Email')
    .clear()
    .then(($el) => {
      if (email) {
        cy.wrap($el).type(email, { delay: 100 })
      }
    })

  // Type password with retry-ability
  cy.get(input('password'))
    .should('be.visible')
    .should('be.enabled')
    .should('have.attr', 'type', 'password')
    .should('have.attr', 'placeholder', 'Password')
    .clear()
    .then(($el) => {
      if (password) {
        cy.wrap($el).type(password, { delay: 100 })
      }
    })

  // Submit form with retry-ability
  cy.get(button('submit'))
    .should('be.visible')
    .should('be.enabled')
    .should('have.text', 'Login')
    .should('have.attr', 'type', 'submit')
    .click()
})