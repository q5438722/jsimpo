const requiredExample = require("../../fixtures/example");

context("Files", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/files");
  });beforeEach(() => {
    cy.fixture("example.json").as("example");
  });it("cy.fixture() - load a fixture", () => {
    cy.server();cy.fixture("example.json").as("comment");cy.route("GET", "comments/*", "@comment").as("getComment");cy.get(".fixture-btn").click();cy.wait("@getComment").its("responseBody").should("have.property", "name").and("include", "Using fixtures to represent data");cy.route("GET", "comments/*", "fixture:example.json").as("getComment");cy.get(".fixture-btn").click();cy.wait("@getComment").its("responseBody").should("have.property", "name").and("include", "Using fixtures to represent data");cy.route("GET", "comments/*", "fx:example").as("getComment");cy.get(".fixture-btn").click();cy.wait("@getComment").its("responseBody").should("have.property", "name").and("include", "Using fixtures to represent data");
  });it("cy.fixture() or require - load a fixture", function () {
    expect(this.example, "fixture in the test context").to.deep.equal(requiredExample);cy.wrap(this.example, "fixture vs require").should("deep.equal", requiredExample);
  });it("cy.readFile() - read a files contents", () => {
    cy.readFile("cypress.json").then(e => {
      expect(e).to.be.an("object");
    });
  });it("cy.writeFile() - write to a file", () => {
    cy.request("https://jsonplaceholder.cypress.io/users").then(e => {
      cy.writeFile("cypress/fixtures/users.json", e.body);
    });cy.fixture("users").should(e => {
      expect(e[0].name).to.exist;
    });cy.writeFile("cypress/fixtures/profile.json", { id: 8739, name: "Jane", email: "jane@example.com" });cy.fixture("profile").should(e => {
      expect(e.name).to.eq("Jane");
    });
  });
});
