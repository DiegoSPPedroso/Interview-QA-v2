import { faker } from '@faker-js/faker'

describe('Exercise 5 - Login Command', () => {
  const email = faker.internet.email().toLocaleLowerCase()
  const password = faker.internet.password()

  beforeEach(() => {
    cy.visit('/')
    cy.exercises(5)
  })

  it('Should use login command', () => {
    // Blank inputs
    cy.login('', '')
    cy.get('[data-cy="email-input"]').should('have.value', '')
    cy.get('[data-cy="password-input"]').should('have.value', '')

    // Inputs with spaces
    cy.login('     ', '    ')
    cy.get('[data-cy="email-input"]').should('have.value', '')
    cy.get('[data-cy="password-input"]').should('have.value', '    ')

    // Only valid email, empty password
    cy.login(email, '')
    cy.get('[data-cy="email-input"]').should('have.value', email)
    cy.get('[data-cy="password-input"]').should('have.value', '')

    // Only password, empty email
    cy.login('', password)
    cy.get('[data-cy="email-input"]').should('have.value', '')
    cy.get('[data-cy="password-input"]').should('have.value', password)

    // Invalid email (missing @)
    cy.login('test', password)
    cy.get('[data-cy="email-input"]').then($input => {
      expect($input[0].checkValidity()).to.be.false
      expect($input[0].validationMessage).to.contain('@')
    })

    // Invalid email (missing domain)
    cy.login('test@', password)
    cy.get('[data-cy="email-input"]').then($input => {
      expect($input[0].checkValidity()).to.be.false
    })

    // Login with both valid parameters
    cy.login(email, password)
    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .should('have.text', 'Welcome back!')
  })
})