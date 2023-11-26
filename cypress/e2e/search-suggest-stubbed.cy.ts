describe('Search Suggestions', () => {

  it('shows suggestions in search dropdown', () => {
    cy.fixture('search-suggestions.json').then((stubbedSuggestions) => {

      cy.intercept('GET', '/', {fixture: 'homepage.html'});

      cy.intercept('GET', '/search/ajax/suggest/**',
        {
          statusCode: 200,
          body: stubbedSuggestions,
        }
      ).as('suggestions')

      cy.visitUrl('');

      cy.log('typing search criteria...');

      cy.get('#search').type('anything', { delay: 200 });
      cy.wait('@suggestions')

      cy.get('#search_autocomplete ul li').should(($items) => {
        expect($items).to.have.length(stubbedSuggestions.length);
        for (let i = 0; i < stubbedSuggestions.length; i++) {
          expect($items.eq(i)).to.include.text(
            stubbedSuggestions[i].title + stubbedSuggestions[i].num_results);
        }
      })

    })
  })
})