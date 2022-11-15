"use strict";

var { expect } = require("chai");

const resolveMeta = require("../../../../../lib/configuration/variables/resolve-meta");

const isPropertyResolved = require("../../../../../lib/configuration/variables/is-property-resolved");

describe("test/unit/lib/configuration/variables/is-property-resolved.test.js", () => {
  var e;
  before(() => {
    e = resolveMeta({ root: "${a:}", childParent: { child: "${a:}", ok: true }, parent: "${a:}", rooto: "foo" });
  });it("should match property directly", () => {
    expect(isPropertyResolved(e, "root")).to.be.false;expect(isPropertyResolved(e, "childParent\0child")).to.be.false;
  });it("should match if children are behind variables", () => {
    expect(isPropertyResolved(e, "childParent")).to.be.false;
  });it("should match if parent is behind variables", () => {
    expect(isPropertyResolved(e, "parent\0parentChild")).to.be.false;
  });it("should not match not affected", () => {
    expect(isPropertyResolved(e, "rooto")).to.be.true;expect(isPropertyResolved(e, "childParent\0ok")).to.be.true;
  });it("should not match not existing", () => {
    expect(isPropertyResolved(e, "elo")).to.be.true;expect(isPropertyResolved(e, "childParent\0none")).to.be.true;
  });
});
