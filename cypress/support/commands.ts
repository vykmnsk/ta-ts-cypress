/// <reference types="cypress" />

import { page } from "./page-elements";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


const BASE_URL = 'https://magento.softwaretestingboard.com';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      visitUrl(pageName: string): void
      verifyProducts(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('visitUrl', (pageName) => {
  cy.visit(`${BASE_URL}/${pageName}`)
});

Cypress.Commands.add('verifyProducts', () => {
  cy.get(page.products).then(($products) => {
    expect($products).to.have.length.at.least(1);
    $products.each(($_, $prod) => {
      cy.wrap($prod).find(page.product.name).should('have.length', 1);
      // cy.wrap($prod).find(page.product.price).should('have.length', 1);
    })
  });
});


export { }


