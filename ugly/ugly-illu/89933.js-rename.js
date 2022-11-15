const tracedTestId = `image-traced`;
describe(`fixed`, () => {
  beforeEach(() => {
    cy.visit(`/traced`).waitForRouteChange();
  });it(`renders a traced svg`, () => {
    cy.getTestElement(tracedTestId).find(`.gatsby-image-wrapper > img`).should(`have.attr`, `src`).and(t => {
      [`data:image/svg+xml`].forEach(e => expect(t).to.include(e));
    });
  });it(`works on png files`, () => {
    cy.getTestElement(`image-traced-png`).find(`.gatsby-image-wrapper`).should(`exist`);
  });it(`works on relative paths outside of src`, () => {
    cy.getTestElement(`image-traced-relative`).find(`.gatsby-image-wrapper`).should(`exist`);
  });
});
