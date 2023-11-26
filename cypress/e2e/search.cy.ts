import { page } from "../support/page-elements";

describe('Search', () => {
  beforeEach(() => {
    cy.visitUrl('')
  })

  it('calls the search results page', () => {
    const criteria = 'pants';
    cy.get(page.header.search.box).type(`${criteria}{enter}`);
    cy.url().should('include', '/catalogsearch/result/?q=');
  })

})