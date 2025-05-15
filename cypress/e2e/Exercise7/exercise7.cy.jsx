describe('Exercise 7 - API Intercept', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.exercises(7)
  })

  it('API Intercept', () => {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {
      // Callback function to verify request payload
      expect(req.body).to.have.property('title').and.to.be.a('string')
      expect(req.body).to.have.property('body').and.to.be.a('string')
      expect(req.body).to.have.property('userId').and.to.be.a('number')

      // Callback function to handle response
      req.reply({
        statusCode: 201,
        body: {
          id: 101,
          title: req.body.title,
          body: req.body.body,
          userId: req.body.userId
        }
      })
    }).as('postRequest')

    // Simulate the request in the browser context
    cy.window().then((win) => {
      win.fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Product Added',
          body: 'Added product to cart',
          userId: 1
        })
      })
    })

    // Wait for the intercepted request
    cy.wait('@postRequest').then((interception) => {
      expect(interception.response.body).to.have.property('id').and.to.be.a('number')
      cy.log('Request Payload:', JSON.stringify(interception.request.body))
      cy.log('Response:', JSON.stringify(interception.response.body))
    })
  })
})