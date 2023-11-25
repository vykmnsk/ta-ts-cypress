describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
  })

  it('contains menu bar with 6 elements', () => {
    const topMenu = cy.get("[id='store.menu']");
    topMenu.get("nav ul li.level-top").should('have.length', 6);
  })
})