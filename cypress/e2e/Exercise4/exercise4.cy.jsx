describe('Exercise 4 - Element Relations', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.exercises(4)
  })

  it('Should verify element relations', () => {
    // 1. Verify "old-car" is within an element with class "my-class"
    cy.verifyTextInClass('my-class', 'old-car')

    // 2. Verify that the number "1" is a sibling of "old-car"
    cy.verifySiblingNumber('my-class', 'old-car', '1')
  })
})