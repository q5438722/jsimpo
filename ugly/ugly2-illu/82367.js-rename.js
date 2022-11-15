const should = require("should");

const sinon = require("sinon");

const routing = require("../../../core/frontend/services/routing");

const getRssUrl = require("../../../core/frontend/meta/rss-url");

describe("getRssUrl", function () {
  beforeEach(function () {
    sinon.stub(routing.registry, "getRssUrl").returns("/rss/");
  });afterEach(function () {
    sinon.restore();
  });it("should return rss url", function () {
    const s = getRssUrl({ secure: false });
    should.equal(s, "/rss/");
  });it("forwards absolute/secure flags", function () {
    const s = getRssUrl({ secure: false }, true);
    routing.registry.getRssUrl.calledWith({ secure: false, absolute: true }).should.be.true();
  });
});
