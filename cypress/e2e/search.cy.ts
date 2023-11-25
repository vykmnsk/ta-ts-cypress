describe('Search', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('finds existing products', () => {
    const criteria = 'pants';

    cy.get('#search').type(`${criteria}{enter}`);
    cy.url().should('include', '/catalogsearch/result/?q=');
    const expectedTitle = `Search results for: '${criteria}'`;
    cy.get("h1").should('include.text', expectedTitle);

    cy.get('div.product-item-info').should('have.length.above', 0);
  })
})