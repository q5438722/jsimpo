'use strict';
import PizzaShop from "./PizzaShop";
import router from "./PizzaShop/router";
import{
  mountCallback as mountCallback
}from "@cypress/vue";
describe("Vue Router - Pizza Shop", () => {
  const extensions = {
    plugins : [router],
    components : {
      PizzaShop : PizzaShop
    }
  };
  const Show2Template = "<router-view />";
  beforeEach(mountCallback({
    template : Show2Template,
    router : router
  }, {
    extensions : extensions
  }));
  it("go to order page", () => {
    cy.get("button.order").click();
    cy.contains("Toppings");
  });
  it("order veggie option", () => {
    cy.get("a.home").click();
    cy.get("a.order-veggie").click().then(() => {
      const {
        path : url,
        params : packageJson
      } = Cypress.vue.$route;
      expect(url).to.eql("/order/veggie");
      expect(packageJson).to.eql({
        preset : "veggie"
      });
    });
    for (const photoUrl of ["chicken", "steak", "bacon", "ham"]) {
      cy.get(".order-overview > ul > li").should("not.contain", photoUrl);
    }
  });
  it("order meatlover option", () => {
    cy.get("a.home").click().then(() => {
      const {
        path : id,
        query : packageJson,
        params : size
      } = Cypress.vue.$route;
      expect(id).to.eql("/");
      expect(packageJson).to.be.empty;
      expect(size).to.be.empty;
    });
    cy.get("a.order-meatlover").click().then(() => {
      const {
        path : url,
        params : packageJson
      } = Cypress.vue.$route;
      expect(url).to.eql("/order/meatlover");
      expect(packageJson).to.eql({
        preset : "meatlover"
      });
    });
  });
  it("order cheese option", () => {
    cy.wrap(Cypress.vue.$router).then((e) => {
      return e.push({
        name : "home"
      });
    });
    cy.get("a.order-cheese").click().then(() => {
      const {
        path : id,
        query : packageJson
      } = Cypress.vue.$route;
      expect(id).to.eql("/order");
      expect(packageJson).to.eql({
        cheese : "true"
      });
    });
    cy.get(".order-overview > ul > li").contains("cheese");
  });
  it("order hawaian + peppers pizza without using UI", () => {
    cy.wrap(Cypress.vue.$router).then((e) => {
      return e.push({
        name : "home"
      });
    }).then((con) => {
      return con.push({
        name : "order",
        params : {
          preset : "hawaian"
        },
        query : {
          peppers : true
        }
      });
    });
  });
});

