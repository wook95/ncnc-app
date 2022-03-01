describe('should click buy button in the detail page', () => {
  it('should not buy: not logged in', () => {
    cy.visit('http://localhost:3000/items/137');
    cy.get('button').contains('옵션 선택하기').click();
    cy.get('li:first').click();
    cy.get('button').contains('구매하기').click();
    cy.on('window:alert', str => {
      expect(str).to.equal('로그인을 해주세요!');
    });
    cy.url().should('include', '/');
  });
});
