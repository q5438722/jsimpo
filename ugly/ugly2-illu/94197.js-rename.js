const urls = ["http://localhost:3434", "http://localhost:4545", "http://localhost:5656"];
function incrState(t) {
  cy.log(t);cy.task("incrState", t);
}describe("suite 1.0", () => {
  var t = null;
  before(() => {
    t = true;incrState("b1.0.1");
  });it("test 1.0.1", () => {
    incrState("t1.0.1");cy.visit("http://localhost:3434").then(() => {
      expect(t).eq(true);
    });
  });it("test 1.0.2", () => {
    expect(t).eq(true);incrState("t1.0.2");
  });it("test 1.0.3", () => {
    incrState("t1.0.3");cy.visit("http://localhost:4545").then(() => {
      expect(t).eq(true);
    });
  });after(() => {
    incrState("a1.0.1");
  });
});describe("suite 1.1", () => {
  before(() => {
    cy.log("b1.1.1");cy.task("incrState", "b1.1.1");cy.visit("http://localhost:3434");
  });before(() => {
    cy.log("b1.1.2");cy.task("incrState", "b1.1.2");
  });it("test 1.1.1", () => {
    cy.log("t1.1.1");cy.task("incrState", "t1.1.1");
  });it("test 1.1.2", () => {
    cy.log("t1.1.2");cy.task("incrState", "t1.1.2");
  });
});describe("suite 1.2", () => {
  before(() => {
    cy.log("b1.2.1");cy.task("incrState", "b1.2.1");
  });beforeEach(() => {
    cy.log("b1.2.2");cy.task("incrState", "b1.2.2");cy.visit("http://localhost:4545");
  });beforeEach(() => {
    cy.log("b1.2.3");cy.task("incrState", "b1.2.3");
  });it("test 1.2.1", () => {
    cy.log("t1.2.1");cy.task("incrState", "t1.2.1");
  });it("test 1.2.2", () => {
    cy.log("t1.2.2");cy.task("incrState", "t1.2.2");
  });after(() => {
    cy.log("a1.2.1");cy.task("incrState", "a1.2.1");
  });
});after(() => {
  cy.task("getState").then(t => {
    expect(t).deep.eq({ "b1.0.1": 3, "t1.0.1": 2, "t1.0.2": 1, "t1.0.3": 2, "a1.0.1": 1, "b1.1.1": 2, "b1.1.2": 1, "t1.1.1": 1, "t1.1.2": 1, "b1.2.1": 2, "b1.2.2": 3, "b1.2.3": 2, "t1.2.1": 1, "t1.2.2": 1, "a1.2.1": 1 });
  });
});
