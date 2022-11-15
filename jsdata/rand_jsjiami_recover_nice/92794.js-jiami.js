'use strict';
const fixtures = require("../__test_fixtures__/fixtures.js");
const generator = require("../GeneratePropsJavaInterface.js");
describe("GeneratePropsJavaInterface", () => {
  Object["keys"](fixtures)["sort"]()["forEach"]((version) => {
    const options = fixtures[version];
    it("can generate fixture " + version, () => {
      expect(generator["generate"](version, options))["toMatchSnapshot"]();
    });
  });
});

