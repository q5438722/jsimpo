'use strict';
const {
  expect : expect
} = require("chai");
const resolveMeta = require("../../../../../lib/configuration/variables/resolve-meta");
const isPropertyResolved = require("../../../../../lib/configuration/variables/is-property-resolved");
describe("test/unit/lib/configuration/variables/is-property-resolved.test.js", () => {
  let thirdSingleSelectCollection;
  before(() => {
    thirdSingleSelectCollection = resolveMeta({
      root : "${a:}",
      childParent : {
        child : "${a:}",
        ok : true
      },
      parent : "${a:}",
      rooto : "foo"
    });
  });
  it("should match property directly", () => {
    expect(isPropertyResolved(thirdSingleSelectCollection, "root")).to.be.false;
    expect(isPropertyResolved(thirdSingleSelectCollection, "childParent\x00child")).to.be.false;
  });
  it("should match if children are behind variables", () => {
    expect(isPropertyResolved(thirdSingleSelectCollection, "childParent")).to.be.false;
  });
  it("should match if parent is behind variables", () => {
    expect(isPropertyResolved(thirdSingleSelectCollection, "parent\x00parentChild")).to.be.false;
  });
  it("should not match not affected", () => {
    expect(isPropertyResolved(thirdSingleSelectCollection, "rooto")).to.be.true;
    expect(isPropertyResolved(thirdSingleSelectCollection, "childParent\x00ok")).to.be.true;
  });
  it("should not match not existing", () => {
    expect(isPropertyResolved(thirdSingleSelectCollection, "elo")).to.be.true;
    expect(isPropertyResolved(thirdSingleSelectCollection, "childParent\x00none")).to.be.true;
  });
});

