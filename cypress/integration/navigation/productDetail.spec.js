describe('My First Test', () => {
  it('should navigate from homepage to the detail page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('p').contains('카페').click();
    cy.url().should('include', '/categories');
    cy.get('p').contains('스타벅스').click();
    cy.url().should('include', '/brands');
    cy.get('a:first').click();
    cy.url().should('include', '/items');
  });
});
