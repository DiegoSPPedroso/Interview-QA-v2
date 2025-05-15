import { grid } from "../../support/locators"

describe('Exercise 3 - Checkbox Verification', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.exercises(3)
  })

  it('Should verify checkbox state', () => {
    cy.verifyCheckboxState(grid('3'), 'Test2')
  })
})