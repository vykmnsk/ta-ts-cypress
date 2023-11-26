import { page } from "../support/page-elements";


describe('Search Results', () => {

  it('updates page titles with search query', () => {
    const query = 'something';
    cy.savedSearchFor(query);

    const expectedTitle = `Search results for: '${query}'`;
    const normText = (t: string) => t.trim().toLocaleLowerCase();

    cy.title().should(($text) => {
      expect(normText($text)).to.equal(normText(expectedTitle));
    })

    cy.get(page.title).should(($div) => {
      expect(normText($div.text())).to.equal(normText(expectedTitle));
    })
  })

  it('finds existing products', () => {
    cy.savedSearchFor('pants');
    cy.verifyProducts();
  })

  it('shows no results for non-existing products', () => {
    cy.savedSearchFor('dummy');
    cy.contains('Your search returned no results');
  })

})