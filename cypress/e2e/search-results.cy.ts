import { page } from "../support/page-elements";

describe('Search Results', () => {
  beforeEach(() => {
    const query = 'pants';
    cy.visitUrl(`/catalogsearch/result/?q=${query}`)
  })

  it('updates page titles with search query', () => {
    const criteria = 'pants';

    const expectedTitle = `Search results for: '${criteria}'`;
    const normText = (t: string) => t.trim().toLocaleLowerCase();

    cy.title().should(($text) => {
      expect(normText($text)).to.equal(normText(expectedTitle));
    })

    cy.get(page.title).should(($div) => {
      expect(normText($div.text())).to.equal(normText(expectedTitle));
    })

  })

  it('finds existing products', () => {
    cy.verifyProducts();
  })

})