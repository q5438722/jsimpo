require("../spec_helper");
const _ = require("lodash");

const http = require("http");

const Bluebird = require("bluebird");

const Request = require(`${root}lib/request`);

const snapshot = require("snap-shot-it");

const request = Request({ timeout: 100 });

const testAttachingCookiesWith = function (e) {
  const t = sinon.spy(request, "setCookiesOnBrowser");
  const o = sinon.spy(request, "setRequestCookieHeader");
  nock("http://localhost:1234").get("/").reply(302, "", { "set-cookie": "one=1", location: "/second" }).get("/second").reply(302, "", { "set-cookie": "two=2", location: "/third" }).get("/third").reply(200, "", { "set-cookie": "three=3" });return e().then(() => {
    return snapshot({ setCalls: t.getCalls().map(e => {
        return { currentUrl: e.args[1], setCookie: e.args[0].headers.set-cookie };
      }), getCalls: o.getCalls().map(e => {
        return { newUrl: _.get(e, "args.1") };
      }) });
  });
};

describe("lib/request", () => {
  beforeEach(function () {
    this.fn = sinon.stub();this.fn.withArgs("set:cookie").resolves({});this.fn.withArgs("get:cookies").resolves([]);
  });it("is defined", () => {
    expect(request).to.be.an("object");
  });context("#getDelayForRetry", () => {
    it("divides by 10 when delay >= 1000 and err.code = ECONNREFUSED", () => {
      const e = [1, 2, 3, 4];
      const t = [0, 999, 1e3, 2e3];
      const o = { code: "ECONNREFUSED" };
      const s = sinon.stub();
      e.forEach(() => {
        return request.getDelayForRetry({ err: o, onNext: s, retryIntervals: e, delaysRemaining: t });
      });expect(t).to.be.empty;expect(s.args).to.deep.eq([[0, 1], [999, 2], [100, 3], [200, 4]]);
    });it("does not divide by 10 when err.code != ECONNREFUSED", () => {
      const e = [1, 2, 3, 4];
      const t = [2e3, 2e3, 2e3, 2e3];
      const o = { code: "ECONNRESET" };
      const s = sinon.stub();
      request.getDelayForRetry({ err: o, onNext: s, retryIntervals: e, delaysRemaining: t });expect(t).to.have.length(3);expect(s).to.be.calledWith(2e3, 1);
    });it("calls onElse when delaysRemaining is exhausted", () => {
      const e = [1, 2, 3, 4];
      const t = [];
      const o = sinon.stub();
      const s = sinon.stub();
      request.getDelayForRetry({ onElse: s, onNext: o, retryIntervals: e, delaysRemaining: t });expect(s).to.be.calledWithExactly();expect(o).not.to.be.called;
    });
  });context("#setDefaults", () => {
    it("delaysRemaining to retryIntervals clone", () => {
      const e = [1, 2, 3, 4];
      const t = request.setDefaults({ retryIntervals: e });
      expect(t.retryIntervals).to.eq(e);expect(t.delaysRemaining).not.to.eq(e);expect(t.delaysRemaining).to.deep.eq(e);
    });it("retryIntervals to [0, 1000, 2000, 2000] by default", () => {
      const e = request.setDefaults({});
      expect(e.retryIntervals).to.deep.eq([0, 1e3, 2e3, 2e3]);
    });it("delaysRemaining can be overridden", () => {
      const e = [1];
      const t = request.setDefaults({ delaysRemaining: e });
      expect(t.delaysRemaining).to.eq(e);
    });
  });context("#normalizeResponse", () => {
    beforeEach(function () {
      this.push = sinon.stub();
    });it("sets status to statusCode and deletes statusCode", function () {
      expect(request.normalizeResponse(this.push, { statusCode: 404, request: { headers: { foo: "bar" }, body: "body" } })).to.deep.eq({ status: 404, statusText: "Not Found", isOkStatusCode: false, requestHeaders: { foo: "bar" }, requestBody: "body" });expect(this.push).to.be.calledOnce;
    });it("picks out status body and headers", function () {
      expect(request.normalizeResponse(this.push, { foo: "bar", req: {}, originalHeaders: {}, headers: { "Content-Length": 50 }, body: "<html>foo</html>", statusCode: 200, request: { headers: { foo: "bar" }, body: "body" } })).to.deep.eq({ body: "<html>foo</html>", headers: { "Content-Length": 50 }, status: 200, statusText: "OK", isOkStatusCode: true, requestHeaders: { foo: "bar" }, requestBody: "body" });expect(this.push).to.be.calledOnce;
    });
  });context("#create", () => {
    beforeEach(function (e) {
      this.hits = 0;this.srv = http.createServer((e, t) => {
        this.hits++;switch (e.url) {case "/never-ends":
            t.writeHead(200);return t.write("foo\n");case "/econnreset":
            return e.socket.destroy();default:
            break;}
      });this.srv.listen(9988, e);
    });afterEach(function () {
      return this.srv.close();
    });context("retries for streams", () => {
      it("does not retry on a timeout", () => {
        const e = request.setDefaults({ url: "http://localhost:9988/never-ends", timeout: 1e3 });
        const t = request.create(e);
        var o = 0;
        t.on("retry", () => {
          o++;
        });const s = Bluebird.fromCallback(e => {
          t.on("error", e);
        });
        return expect(s).to.be.rejected.then(e => {
          expect(e.code).to.eq("ESOCKETTIMEDOUT");expect(o).to.eq(0);
        });
      });it("retries 4x on a connection reset", () => {
        const e = { url: "http://localhost:9988/econnreset", retryIntervals: [0, 1, 2, 3], timeout: 1e3 };
        const t = request.create(e);
        var o = 0;
        t.on("retry", () => {
          o++;
        });const s = Bluebird.fromCallback(e => {
          t.on("error", e);
        });
        return expect(s).to.be.rejected.then(e => {
          expect(e.code).to.eq("ECONNRESET");expect(o).to.eq(4);
        });
      });it("retries 4x on a NXDOMAIN (ENOTFOUND)", () => {
        nock.enableNetConnect();const e = { url: "http://will-never-exist.invalid.example.com", retryIntervals: [0, 1, 2, 3], timeout: 1e3 };
        const t = request.create(e);
        var o = 0;
        t.on("retry", () => {
          o++;
        });const s = Bluebird.fromCallback(e => {
          t.on("error", e);
        });
        return expect(s).to.be.rejected.then(e => {
          expect(e.code).to.eq("ENOTFOUND");expect(o).to.eq(4);
        });
      });
    });context("retries for promises", () => {
      it("does not retry on a timeout", function () {
        const e = { url: "http://localhost:9988/never-ends", timeout: 100 };
        return request.create(e, true).then(() => {
          throw new Error("should not reach");
        }).catch(e => {
          expect(e.error.code).to.eq("ESOCKETTIMEDOUT");expect(this.hits).to.eq(1);
        });
      });it("retries 4x on a connection reset", function () {
        const e = { url: "http://localhost:9988/econnreset", retryIntervals: [0, 1, 2, 3], timeout: 250 };
        return request.create(e, true).then(() => {
          throw new Error("should not reach");
        }).catch(e => {
          expect(e.error.code).to.eq("ECONNRESET");expect(this.hits).to.eq(5);
        });
      });
    });
  });context("#sendPromise", () => {
    it("sets strictSSL=false", function () {
      const e = sinon.spy(request.rp.Request.prototype, "init");
      nock("http://www.github.com").get("/foo").reply(200, "hello", { "Content-Type": "text/html" });return request.sendPromise({}, this.fn, { url: "http://www.github.com/foo", cookies: false }).then(() => {
        expect(e).to.be.calledWithMatch({ strictSSL: false });
      });
    });it("sets simple=false", function () {
      nock("http://www.github.com").get("/foo").reply(500, "");return request.sendPromise({}, this.fn, { url: "http://www.github.com/foo", cookies: false });
    });it("sets resolveWithFullResponse=true", function () {
      nock("http://www.github.com").get("/foo").reply(200, "hello", { "Content-Type": "text/html" });return request.sendPromise({}, this.fn, { url: "http://www.github.com/foo", cookies: false, body: "foobarbaz" }).then(e => {
        expect(e).to.have.keys("status", "body", "headers", "duration", "isOkStatusCode", "statusText", "allRequestResponses", "requestBody", "requestHeaders");expect(e.status).to.eq(200);expect(e.statusText).to.eq("OK");expect(e.body).to.eq("hello");expect(e.headers).to.deep.eq({ "content-type": "text/html" });expect(e.isOkStatusCode).to.be.true;expect(e.requestBody).to.eq("foobarbaz");expect(e.requestHeaders).to.deep.eq({ accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", "content-length": 9, host: "www.github.com" });expect(e.allRequestResponses).to.deep.eq([{ "Request Body": "foobarbaz", "Request Headers": { accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", "content-length": 9, host: "www.github.com" }, "Request URL": "http://www.github.com/foo", "Response Body": "hello", "Response Headers": { "content-type": "text/html" }, "Response Status": 200 }]);
      });
    });it("includes redirects", function () {
      this.fn.resolves();nock("http://www.github.com").get("/dashboard").reply(301, null, { location: "/auth" }).get("/auth").reply(302, null, { location: "/login" }).get("/login").reply(200, "log in", { "Content-Type": "text/html" });return request.sendPromise({}, this.fn, { url: "http://www.github.com/dashboard", cookies: false }).then(e => {
        expect(e).to.have.keys("status", "body", "headers", "duration", "isOkStatusCode", "statusText", "allRequestResponses", "redirects", "requestBody", "requestHeaders");expect(e.status).to.eq(200);expect(e.statusText).to.eq("OK");expect(e.body).to.eq("log in");expect(e.headers).to.deep.eq({ "content-type": "text/html" });expect(e.isOkStatusCode).to.be.true;expect(e.requestBody).to.be.undefined;expect(e.redirects).to.deep.eq(["301: http://www.github.com/auth", "302: http://www.github.com/login"]);expect(e.requestHeaders).to.deep.eq({ accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", referer: "http://www.github.com/auth", host: "www.github.com" });expect(e.allRequestResponses).to.deep.eq([{ "Request Body": null, "Request Headers": { accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", host: "www.github.com" }, "Request URL": "http://www.github.com/dashboard", "Response Body": null, "Response Headers": { "content-type": "application/json", location: "/auth" }, "Response Status": 301 }, { "Request Body": null, "Request Headers": { accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", host: "www.github.com", referer: "http://www.github.com/dashboard" }, "Request URL": "http://www.github.com/auth", "Response Body": null, "Response Headers": { "content-type": "application/json", location: "/login" }, "Response Status": 302 }, { "Request Body": null, "Request Headers": { accept: "*/*", "accept-encoding": "gzip, deflate", connection: "keep-alive", host: "www.github.com", referer: "http://www.github.com/auth" }, "Request URL": "http://www.github.com/login", "Response Body": "log in", "Response Headers": { "content-type": "text/html" }, "Response Status": 200 }]);
      });
    });it("catches errors", function () {
      nock.enableNetConnect();const e = Request({ timeout: 2e3 });
      return e.sendPromise({}, this.fn, { url: "http://localhost:1111/foo", cookies: false }).then(() => {
        throw new Error("should have failed but didnt");
      }).catch(e => {
        expect(e.message).to.eq("Error: connect ECONNREFUSED 127.0.0.1:1111");
      });
    });it("parses response body as json if content-type application/json response headers", function () {
      nock("http://localhost:8080").get("/status.json").reply(200, JSON.stringify({ status: "ok" }), { "Content-Type": "application/json" });return request.sendPromise({}, this.fn, { url: "http://localhost:8080/status.json", cookies: false }).then(e => {
        expect(e.body).to.deep.eq({ status: "ok" });
      });
    });it("parses response body as json if content-type application/vnd.api+json response headers", function () {
      nock("http://localhost:8080").get("/status.json").reply(200, JSON.stringify({ status: "ok" }), { "Content-Type": "application/vnd.api+json" });return request.sendPromise({}, this.fn, { url: "http://localhost:8080/status.json", cookies: false }).then(e => {
        expect(e.body).to.deep.eq({ status: "ok" });
      });
    });it("revives from parsing bad json", function () {
      nock("http://localhost:8080").get("/status.json").reply(200, "{bad: 'json'}", { "Content-Type": "application/json" });return request.sendPromise({}, this.fn, { url: "http://localhost:8080/status.json", cookies: false }).then(e => {
        expect(e.body).to.eq("{bad: 'json'}");
      });
    });it("sets duration on response", function () {
      nock("http://localhost:8080").get("/foo").delay(10).reply(200, "123", { "Content-Type": "text/plain" });return request.sendPromise({}, this.fn, { url: "http://localhost:8080/foo", cookies: false }).then(e => {
        expect(e.duration).to.be.a("Number");expect(e.duration).to.be.gt(0);
      });
    });it("sends up user-agent headers", function () {
      nock("http://localhost:8080").matchHeader("user-agent", "foobarbaz").get("/foo").reply(200, "derp");const e = {};
      e["user-agent"] = "foobarbaz";return request.sendPromise(e, this.fn, { url: "http://localhost:8080/foo", cookies: false }).then(e => {
        expect(e.body).to.eq("derp");
      });
    });it("sends connection: keep-alive by default", function () {
      nock("http://localhost:8080").matchHeader("connection", "keep-alive").get("/foo").reply(200, "it worked");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/foo", cookies: false }).then(e => {
        expect(e.body).to.eq("it worked");
      });
    });it("lower cases headers", function () {
      nock("http://localhost:8080").matchHeader("test", "true").get("/foo").reply(200, "derp");const e = {};
      e["user-agent"] = "foobarbaz";return request.sendPromise(e, this.fn, { url: "http://localhost:8080/foo", cookies: false, headers: { TEST: true } }).then(e => {
        expect(e.body).to.eq("derp");
      });
    });it("allows overriding user-agent in headers", function () {
      nock("http://localhost:8080").matchHeader("user-agent", "custom-agent").get("/foo").reply(200, "derp");const e = { "user-agent": "test" };
      return request.sendPromise(e, this.fn, { url: "http://localhost:8080/foo", cookies: false, headers: { "User-Agent": "custom-agent" } }).then(e => {
        expect(e.body).to.eq("derp");
      });
    });context("accept header", () => {
      it("sets to */* by default", function () {
        nock("http://localhost:8080").matchHeader("accept", "*/*").get("/headers").reply(200);return request.sendPromise({}, this.fn, { url: "http://localhost:8080/headers", cookies: false }).then(e => {
          expect(e.status).to.eq(200);
        });
      });it("can override accept header", function () {
        nock("http://localhost:8080").matchHeader("accept", "text/html").get("/headers").reply(200);return request.sendPromise({}, this.fn, { url: "http://localhost:8080/headers", cookies: false, headers: { accept: "text/html" } }).then(e => {
          expect(e.status).to.eq(200);
        });
      });it("can override Accept header", function () {
        nock("http://localhost:8080").matchHeader("accept", "text/plain").get("/headers").reply(200);return request.sendPromise({}, this.fn, { url: "http://localhost:8080/headers", cookies: false, headers: { Accept: "text/plain" } }).then(e => {
          expect(e.status).to.eq(200);
        });
      });
    });context("qs", () => {
      it("can accept qs", function () {
        nock("http://localhost:8080").get("/foo?bar=baz&q=1").reply(200);return request.sendPromise({}, this.fn, { url: "http://localhost:8080/foo", cookies: false, qs: { bar: "baz", q: 1 } }).then(e => {
          expect(e.status).to.eq(200);
        });
      });
    });context("followRedirect", () => {
      beforeEach(function () {
        this.fn.resolves();
      });it("by default follow redirects", function () {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", { location: "http://localhost:8080/login" }).get("/login").reply(200, "login");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/dashboard", cookies: false, followRedirect: true }).then(e => {
          expect(e.status).to.eq(200);expect(e.body).to.eq("login");expect(e).not.to.have.property("redirectedToUrl");
        });
      });it("follows non-GET redirects by default", function () {
        nock("http://localhost:8080").post("/login").reply(302, "", { location: "http://localhost:8080/dashboard" }).get("/dashboard").reply(200, "dashboard");return request.sendPromise({}, this.fn, { method: "POST", url: "http://localhost:8080/login", cookies: false }).then(e => {
          expect(e.status).to.eq(200);expect(e.body).to.eq("dashboard");expect(e).not.to.have.property("redirectedToUrl");
        });
      });it("can turn off following redirects", function () {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", { location: "http://localhost:8080/login" }).get("/login").reply(200, "login");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/dashboard", cookies: false, followRedirect: false }).then(e => {
          expect(e.status).to.eq(302);expect(e.body).to.eq("");expect(e.redirectedToUrl).to.eq("http://localhost:8080/login");
        });
      });it("resolves redirectedToUrl on relative redirects", function () {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", { location: "/login" }).get("/login").reply(200, "login");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/dashboard", cookies: false, followRedirect: false }).then(e => {
          expect(e.status).to.eq(302);expect(e.redirectedToUrl).to.eq("http://localhost:8080/login");
        });
      });it("resolves redirectedToUrl to another domain", function () {
        nock("http://localhost:8080").get("/dashboard").reply(301, "", { location: "https://www.google.com/login" }).get("/login").reply(200, "login");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/dashboard", cookies: false, followRedirect: false }).then(e => {
          expect(e.status).to.eq(301);expect(e.redirectedToUrl).to.eq("https://www.google.com/login");
        });
      });it("does not included redirectedToUrl when following redirects", function () {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", { location: "http://localhost:8080/login" }).get("/login").reply(200, "login");return request.sendPromise({}, this.fn, { url: "http://localhost:8080/dashboard", cookies: false }).then(e => {
          expect(e.status).to.eq(200);expect(e).not.to.have.property("redirectedToUrl");
        });
      });it("gets + attaches the cookies at each redirect", function () {
        return testAttachingCookiesWith(() => {
          return request.sendPromise({}, this.fn, { url: "http://localhost:1234/" });
        });
      });
    });context("form=true", () => {
      beforeEach(() => {
        nock("http://localhost:8080").matchHeader("Content-Type", "application/x-www-form-urlencoded").post("/login", "foo=bar&baz=quux").reply(200, "<html></html>");
      });it("takes converts body to x-www-form-urlencoded and sets header", function () {
        return request.sendPromise({}, this.fn, { url: "http://localhost:8080/login", method: "POST", cookies: false, form: true, body: { foo: "bar", baz: "quux" } }).then(e => {
          expect(e.status).to.eq(200);expect(e.body).to.eq("<html></html>");
        });
      });it("does not send body", function () {
        const t = sinon.spy(request.rp.Request.prototype, "init");
        const o = { foo: "bar", baz: "quux" };
        return request.sendPromise({}, this.fn, { url: "http://localhost:8080/login", method: "POST", cookies: false, form: true, json: true, body: o }).then(e => {
          expect(e.status).to.eq(200);expect(e.body).to.eq("<html></html>");expect(t).not.to.be.calledWithMatch({ body: o });
        });
      });it("does not set json=true", function () {
        const t = sinon.spy(request.rp.Request.prototype, "init");
        return request.sendPromise({}, this.fn, { url: "http://localhost:8080/login", method: "POST", cookies: false, form: true, json: true, body: { foo: "bar", baz: "quux" } }).then(e => {
          expect(e.status).to.eq(200);expect(e.body).to.eq("<html></html>");expect(t).not.to.be.calledWithMatch({ json: true });
        });
      });
    });context("bad headers", () => {
      beforeEach(function (e) {
        this.srv = http.createServer((e, t) => {
          t.writeHead(200);t.end();
        });this.srv.listen(9988, e);
      });afterEach(function () {
        return this.srv.close();
      });it("recovers from bad headers", function () {
        return request.sendPromise({}, this.fn, { url: "http://localhost:9988/foo", cookies: false, headers: { "x-text": "\u05D0\u05D1\u05D2\u05D3" } }).then(() => {
          throw new Error("should have failed");
        }).catch(e => {
          expect(e.message).to.eq("TypeError [ERR_INVALID_CHAR]: Invalid character in header content [\"x-text\"]");
        });
      });it("handles weird content in the body just fine", function () {
        return request.sendPromise({}, this.fn, { url: "http://localhost:9988/foo", cookies: false, json: true, body: { "x-text": "\u05D0\u05D1\u05D2\u05D3" } });
      });
    });
  });context("#sendStream", () => {
    it("allows overriding user-agent in headers", function () {
      nock("http://localhost:8080").matchHeader("user-agent", "custom-agent").get("/foo").reply(200, "derp");sinon.spy(request, "create");this.fn.resolves({});const e = { "user-agent": "test" };
      const t = { url: "http://localhost:8080/foo", cookies: false, headers: { "user-agent": "custom-agent" } };
      return request.sendStream(e, this.fn, t).then(e => {
        e();expect(request.create).to.be.calledOnce;expect(request.create).to.be.calledWith(t);
      });
    });it("gets + attaches the cookies at each redirect", function () {
      return testAttachingCookiesWith(() => {
        return request.sendStream({}, this.fn, { url: "http://localhost:1234/", followRedirect: _.stubTrue }).then(e => {
          const o = e();
          return new Promise((e, t) => {
            o.on("response", e);o.on("error", t);
          });
        });
      });
    });
  });
});
