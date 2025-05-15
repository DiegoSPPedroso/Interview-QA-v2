import { product } from '../../support/locators'

describe('Exercise 1 - Find Product with Specific Price', () => {
  const targetPrice = '$59'

  beforeEach(() => {
    cy.visit('/')
    cy.exercises(1)
  })

  it('Should identify and log products that DO NOT have the target price', () => {
    let totalProductsAnalyzed = 0
    const nonMatchingProducts = []

    cy.get(product('item'))
      .each(($el) => {
        totalProductsAnalyzed++
        const productName = Cypress.$($el).find(product('name')).text().trim()
        const productPrice = Cypress.$($el).find(product('price')).text().trim()

        if (productPrice !== targetPrice) {
          nonMatchingProducts.push({ name: productName, price: productPrice })
        }
      })
      .then(() => {
        cy.log(`Total products analyzed: ${totalProductsAnalyzed}.`)
        if (nonMatchingProducts.length > 0) {
          cy.log(
            `${nonMatchingProducts.length} product(s) found that DO NOT have the target price of ${targetPrice}:`
          )
          nonMatchingProducts.forEach((p) => {
            cy.log(`Product: ${p.name}, Price: ${p.price}`)
          })
        } else if (totalProductsAnalyzed > 0) {
          cy.log(`All ${totalProductsAnalyzed} analyzed product(s) have the target price of ${targetPrice}.`)
        } else {
          cy.log('No products found on the page to analyze.')
        }
      })
  })

  it('Should find and validate products with price $59', () => {
    cy.findProduct(targetPrice).as('matchedProducts')

    cy.get('@matchedProducts')
      .then(($products) => {
        if ($products.length === 0) {
          cy.log('No product found with the price ' + targetPrice)
        }
      })

    cy.get('@matchedProducts').each(($product) => {
      cy.wrap($product).within(() => {
        cy.get(product('price')).should('have.text', targetPrice)
        cy.get(product('name'))
          .invoke('text')
          .then((name) => {
            cy.log(`Product found: ${name} - ${targetPrice}`)
          })
      })
    })
  })
})
