describe('Search', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('finds existing products', () => {
    const criteria = 'pants';

    cy.get('#search').type(`${criteria}{enter}`);
    cy.url().should('include', '/catalogsearch/result/?q=');

    const expectedTitle = `Search results for: '${criteria}'`;
    const normText = (t) => t.trim().toLocaleLowerCase();

    cy.title().should(($text) => {
      expect(normText($text)).to.equal(normText(expectedTitle));
    })

    cy.get("h1").should(($div) => {
      expect(normText($div.text())).to.equal(normText(expectedTitle));
    })

    cy.get('div.product-item-info').should('have.length.above', 0);
  })
})