/// <reference types="cypress" />

import { page } from "./page-elements";


const BASE_URL = 'https://magento.softwaretestingboard.com';
const SEARCH_RESULT_URL = '/catalogsearch/result';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      visitUrl(pageName: string): void,
      savedSearchFor(query: string): void,
      verifyProducts(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('visitUrl', (pageName) => {
  cy.visit(`${BASE_URL}/${pageName}`)
});

Cypress.Commands.add('savedSearchFor', (query) => {
  cy.visitUrl(`${SEARCH_RESULT_URL}/?q=${query}`)
});

Cypress.Commands.add('verifyProducts', () => {
  cy.get(page.products).then(($products) => {
    expect($products).to.have.length.at.least(1);
    $products.each(($_, $prod) => {
      cy.wrap($prod).find(page.product.name).should('have.length', 1);
    })
  });
});

export { }


