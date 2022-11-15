'use strict';
const fixtures = require("../__test_fixtures__/fixtures.js");
const generator = require("../GeneratePropsJavaInterface.js");
describe("GeneratePropsJavaInterface", () => {
  Object.keys(fixtures).sort().forEach((fixture) => {
    const t = fixtures[fixture];
    it(`can generate fixture ${fixture}`, () => {
      expect(generator.generate(fixture, t)).toMatchSnapshot();
    });
  });
});

