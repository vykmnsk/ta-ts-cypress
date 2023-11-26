describe('Homepage', () => {
  beforeEach(() => {
    cy.visitPage('');
  })

  const menu = {
    bar: "[id='store.menu']",
    barItems: "nav ul li.level-top",
  }

  const home = {
    promos: {
      top: 'div.blocks-promo >  a img',
      other: 'div.block-promo-hp a img'
    },
    hotSellers: {
      title: 'h2.title',
      products: 'ol.product-items li.product-item',
    },
  }

  const product = {
    name: 'strong.product-item-name',
    price: 'span.price',
  }

  const footer = {
    links: 'footer ul li a'
  }

  it('contains menu bar with 6 elements', () => {
    cy.get(menu.bar).get(menu.barItems).should('have.length', 6);
  })

  it('contains promotions', () => {
    cy.get(home.promos.top).should('have.length', 1);
    cy.get(home.promos.other).should('have.length.at.least', 1);
  })

  it('contains hot sellers', () => {
    cy.get(home.hotSellers.title).should('have.text', 'Hot Sellers');
    cy.get(home.hotSellers.products).then(($products) => {
      expect($products).to.have.length.at.least(1);
      $products.each(($idx, $prod) => {
        cy.wrap($prod).find(product.name).should('have.length', 1);
        cy.wrap($prod).find(product.price).should('have.length', 1);;
      })
    })
  })

  it('contains footer links', () => {
    cy.get(footer.links).should('have.length.at.least', 1);
  })  

})