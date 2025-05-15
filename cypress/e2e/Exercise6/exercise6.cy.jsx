import { button, product } from '../../support/locators'
import '../../support/verifyProductSelection_commands'

describe('Exercise 6 - Product Selection', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.exercises(6)
  })

  it('Should list all products and click wrong ones', () => {
    cy.listAndClickWrongProducts()
  })

  it('Should list all products and click the correct one', () => {
    cy.listAndClickCorrectProduct()
  })
})