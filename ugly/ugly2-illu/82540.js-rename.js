const sessionMiddleware = require("../../../../../core/server/services/auth").session;

const models = require("../../../../../core/server/models");

const sinon = require("sinon");

const should = require("should");

describe("Session Service", function () {
  before(function () {
    models.init();
  });afterEach(function () {
    sinon.restore();
  });
  const t = function s() {
    return { session: { destroy() {} }, user: null, body: {}, get() {} };
  };

  const r = function s() {
    return { sendStatus() {} };
  };

  describe("createSession", function () {
    it("sets req.session.origin from the Referer header", function (s) {
      const e = t();
      const n = r();
      sinon.stub(e, "get").withArgs("user-agent").returns("").withArgs("origin").returns("").withArgs("referrer").returns("http://ghost.org/path");e.ip = "127.0.0.1";e.user = models.User.forge({ id: 23 });sinon.stub(n, "sendStatus").callsFake(function () {
        should.equal(e.session.origin, "http://ghost.org");s();
      });sessionMiddleware.createSession(e, n);
    });it("sets req.session.user_id,origin,user_agent,ip and calls sendStatus with 201 if the check succeeds", function (e) {
      const n = t();
      const s = r();
      sinon.stub(n, "get").withArgs("origin").returns("http://host.tld").withArgs("user-agent").returns("bububang");n.ip = "127.0.0.1";n.user = models.User.forge({ id: 23 });sinon.stub(s, "sendStatus").callsFake(function (s) {
        should.equal(n.session.user_id, 23);should.equal(n.session.origin, "http://host.tld");should.equal(n.session.user_agent, "bububang");should.equal(n.session.ip, "127.0.0.1");should.equal(s, 201);e();
      });sessionMiddleware.createSession(n, s);
    });
  });describe("destroySession", function () {
    it("calls req.session.destroy", function (s) {
      const e = t();
      const n = r();
      const o = sinon.stub(e.session, "destroy").callsFake(function (s) {
        s();
      });
      sinon.stub(n, "sendStatus").callsFake(function () {
        should.equal(o.callCount, 1);s();
      });sessionMiddleware.destroySession(e, n);
    });it("calls next with InternalServerError if destroy errors", function (n) {
      const s = t();
      const e = r();
      sinon.stub(s.session, "destroy").callsFake(function (s) {
        s(new Error("oops"));
      });sessionMiddleware.destroySession(s, e, function s(e) {
        should.equal(e.errorType, "InternalServerError");n();
      });
    });it("calls sendStatus with 204 if destroy does not error", function (e) {
      const s = t();
      const n = r();
      sinon.stub(s.session, "destroy").callsFake(function (s) {
        s();
      });sinon.stub(n, "sendStatus").callsFake(function (s) {
        should.equal(s, 204);e();
      });sessionMiddleware.destroySession(s, n);
    });
  });
});
