"use strict";

const fixtures = require("../__test_fixtures__/fixtures.js");

const generator = require("../GeneratePropsJavaInterface.js");

describe("GeneratePropsJavaInterface", () => {
  Object.keys(fixtures).sort().forEach(e => {
    const t = fixtures[e];
    it(`can generate fixture ${e}`, () => {
      expect(generator.generate(e, t)).toMatchSnapshot();
    });
  });
});
