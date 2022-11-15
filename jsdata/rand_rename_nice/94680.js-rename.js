'use strict';
import Repeater from "./Repeater.vue";
import{
  mount as mount
}from "@cypress/vue";
describe("Repeater", () => {
  it("User can type and see output on the screen", () => {
    mount(Repeater);
    cy.get("#item").type("Cypress");
    cy.contains("You typed: Cypress");
  });
});

