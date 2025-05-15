import moment from 'moment-timezone'

describe('Exercise 2 - Table Elements', () => {
  const tableName = 'Test1'
  const targetDate = moment.tz('05/15/2024', 'MM/DD/YYYY', 'America/Los_Angeles').format('MM/DD/YYYY')

  beforeEach(() => {
    cy.visit('/')
    cy.exercises(2)
  })

  it('Should find and validate table elements', () => {
    // Locate the table row corresponding to the target date
    cy.get(`table[name="${tableName}"]`)
      .contains('td', targetDate)
      .parentsUntil('tbody')
      .as('test-table')

    // Validate the content of the <p> cell: "First"
    cy.verifyItem('p', 'First')

    // Validate the content of the <span>: "Accepted"
    cy.verifyItem('span', 'Accepted')

    // Validate the first button: "View"
    cy.verifyItem('button', 'View')

    // Validate and click the "Order More" button
    cy.verifyItem('.button-order-more', 'Order More', true)
  })
})
