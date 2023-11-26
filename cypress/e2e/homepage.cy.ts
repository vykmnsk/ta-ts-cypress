import {home, page} from '../support/page-elements';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visitUrl('');
  })

  it('contains menu bar with 6 elements', () => {
    cy.get(page.header.menu.bar)
    .find(page.header.menu.barItems)
    .should('have.length', 6);
  })

  it('contains promotions', () => {
    cy.get(home.promos.top).should('have.length', 1);
    cy.get(home.promos.other).should('have.length.at.least', 1);
  })

  it('contains hot sellers', () => {
    cy.get(home.hotSellers.title).should('have.text', 'Hot Sellers');
    cy.verifyProducts();
  })

  it('contains footer links', () => {
    cy.get(page.footer.links).should('have.length.at.least', 1);
  })  

})