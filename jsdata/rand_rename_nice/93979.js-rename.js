'use strict';
require("../spec_helper");
const _ = require("lodash");
const http = require("http");
const Bluebird = require("bluebird");
const Request = require(`${root}lib/request`);
const snapshot = require("snap-shot-it");
const request = Request({
  timeout : 100
});
const testAttachingCookiesWith = function(saveNotifs) {
  const myRecordFunction = sinon.spy(request, "setCookiesOnBrowser");
  const spy = sinon.spy(request, "setRequestCookieHeader");
  nock("http://localhost:1234").get("/").reply(302, "", {
    "set-cookie" : "one=1",
    location : "/second"
  }).get("/second").reply(302, "", {
    "set-cookie" : "two=2",
    location : "/third"
  }).get("/third").reply(200, "", {
    "set-cookie" : "three=3"
  });
  return saveNotifs().then(() => {
    return snapshot({
      setCalls : myRecordFunction.getCalls().map((exprData) => {
        return {
          currentUrl : exprData.args[1],
          setCookie : exprData.args[0].headers["set-cookie"]
        };
      }),
      getCalls : spy.getCalls().map((url) => {
        return {
          newUrl : _.get(url, "args.1")
        };
      })
    });
  });
};
describe("lib/request", () => {
  beforeEach(function() {
    this.fn = sinon.stub();
    this.fn.withArgs("set:cookie").resolves({});
    this.fn.withArgs("get:cookies").resolves([]);
  });
  it("is defined", () => {
    expect(request).to.be.an("object");
  });
  context("#getDelayForRetry", () => {
    it("divides by 10 when delay >= 1000 and err.code = ECONNREFUSED", () => {
      const pipelets = [1, 2, 3, 4];
      const button2Component = [0, 999, 1e3, 2e3];
      const err = {
        code : "ECONNREFUSED"
      };
      const add = sinon.stub();
      pipelets.forEach(() => {
        return request.getDelayForRetry({
          err : err,
          onNext : add,
          retryIntervals : pipelets,
          delaysRemaining : button2Component
        });
      });
      expect(button2Component).to.be.empty;
      expect(add.args).to.deep.eq([[0, 1], [999, 2], [100, 3], [200, 4]]);
    });
    it("does not divide by 10 when err.code != ECONNREFUSED", () => {
      const e = [1, 2, 3, 4];
      const button2Component = [2e3, 2e3, 2e3, 2e3];
      const err = {
        code : "ECONNRESET"
      };
      const onNext = sinon.stub();
      request.getDelayForRetry({
        err : err,
        onNext : onNext,
        retryIntervals : e,
        delaysRemaining : button2Component
      });
      expect(button2Component).to.have.length(3);
      expect(onNext).to.be.calledWith(2e3, 1);
    });
    it("calls onElse when delaysRemaining is exhausted", () => {
      const e = [1, 2, 3, 4];
      const t = [];
      const add = sinon.stub();
      const button2Component = sinon.stub();
      request.getDelayForRetry({
        onElse : button2Component,
        onNext : add,
        retryIntervals : e,
        delaysRemaining : t
      });
      expect(button2Component).to.be.calledWithExactly();
      expect(add).not.to.be.called;
    });
  });
  context("#setDefaults", () => {
    it("delaysRemaining to retryIntervals clone", () => {
      const adminInx = [1, 2, 3, 4];
      const gradientEvent = request.setDefaults({
        retryIntervals : adminInx
      });
      expect(gradientEvent.retryIntervals).to.eq(adminInx);
      expect(gradientEvent.delaysRemaining).not.to.eq(adminInx);
      expect(gradientEvent.delaysRemaining).to.deep.eq(adminInx);
    });
    it("retryIntervals to [0, 1000, 2000, 2000] by default", () => {
      const gradientEvent = request.setDefaults({});
      expect(gradientEvent.retryIntervals).to.deep.eq([0, 1e3, 2e3, 2e3]);
    });
    it("delaysRemaining can be overridden", () => {
      const adminInx = [1];
      const gradientEvent = request.setDefaults({
        delaysRemaining : adminInx
      });
      expect(gradientEvent.delaysRemaining).to.eq(adminInx);
    });
  });
  context("#normalizeResponse", () => {
    beforeEach(function() {
      this.push = sinon.stub();
    });
    it("sets status to statusCode and deletes statusCode", function() {
      expect(request.normalizeResponse(this.push, {
        statusCode : 404,
        request : {
          headers : {
            foo : "bar"
          },
          body : "body"
        }
      })).to.deep.eq({
        status : 404,
        statusText : "Not Found",
        isOkStatusCode : false,
        requestHeaders : {
          foo : "bar"
        },
        requestBody : "body"
      });
      expect(this.push).to.be.calledOnce;
    });
    it("picks out status body and headers", function() {
      expect(request.normalizeResponse(this.push, {
        foo : "bar",
        req : {},
        originalHeaders : {},
        headers : {
          "Content-Length" : 50
        },
        body : "<html>foo</html>",
        statusCode : 200,
        request : {
          headers : {
            foo : "bar"
          },
          body : "body"
        }
      })).to.deep.eq({
        body : "<html>foo</html>",
        headers : {
          "Content-Length" : 50
        },
        status : 200,
        statusText : "OK",
        isOkStatusCode : true,
        requestHeaders : {
          foo : "bar"
        },
        requestBody : "body"
      });
      expect(this.push).to.be.calledOnce;
    });
  });
  context("#create", () => {
    beforeEach(function(e) {
      this.hits = 0;
      this.srv = http.createServer((e, res) => {
        this.hits++;
        switch(e.url) {
          case "/never-ends":
            res.writeHead(200);
            return res.write("foo\n");
          case "/econnreset":
            return e.socket.destroy();
          default:
            break;
        }
      });
      this.srv.listen(9988, e);
    });
    afterEach(function() {
      return this.srv.close();
    });
    context("retries for streams", () => {
      it("does not retry on a timeout", () => {
        const e = request.setDefaults({
          url : "http://localhost:9988/never-ends",
          timeout : 1e3
        });
        const connection = request.create(e);
        let button2Component = 0;
        connection.on("retry", () => {
          button2Component++;
        });
        const localBosco = Bluebird.fromCallback((e) => {
          connection.on("error", e);
        });
        return expect(localBosco).to.be.rejected.then((e) => {
          expect(e.code).to.eq("ESOCKETTIMEDOUT");
          expect(button2Component).to.eq(0);
        });
      });
      it("retries 4x on a connection reset", () => {
        const e = {
          url : "http://localhost:9988/econnreset",
          retryIntervals : [0, 1, 2, 3],
          timeout : 1E3
        };
        const connection = request.create(e);
        let button2Component = 0;
        connection.on("retry", () => {
          button2Component++;
        });
        const localBosco = Bluebird.fromCallback((e) => {
          connection.on("error", e);
        });
        return expect(localBosco).to.be.rejected.then((e) => {
          expect(e.code).to.eq("ECONNRESET");
          expect(button2Component).to.eq(4);
        });
      });
      it("retries 4x on a NXDOMAIN (ENOTFOUND)", () => {
        nock.enableNetConnect();
        const e = {
          url : "http://will-never-exist.invalid.example.com",
          retryIntervals : [0, 1, 2, 3],
          timeout : 1E3
        };
        const connection = request.create(e);
        let button2Component = 0;
        connection.on("retry", () => {
          button2Component++;
        });
        const localBosco = Bluebird.fromCallback((e) => {
          connection.on("error", e);
        });
        return expect(localBosco).to.be.rejected.then((e) => {
          expect(e.code).to.eq("ENOTFOUND");
          expect(button2Component).to.eq(4);
        });
      });
    });
    context("retries for promises", () => {
      it("does not retry on a timeout", function() {
        const e = {
          url : "http://localhost:9988/never-ends",
          timeout : 100
        };
        return request.create(e, true).then(() => {
          throw new Error("should not reach");
        }).catch((e) => {
          expect(e.error.code).to.eq("ESOCKETTIMEDOUT");
          expect(this.hits).to.eq(1);
        });
      });
      it("retries 4x on a connection reset", function() {
        const e = {
          url : "http://localhost:9988/econnreset",
          retryIntervals : [0, 1, 2, 3],
          timeout : 250
        };
        return request.create(e, true).then(() => {
          throw new Error("should not reach");
        }).catch((e) => {
          expect(e.error.code).to.eq("ECONNRESET");
          expect(this.hits).to.eq(5);
        });
      });
    });
  });
  context("#sendPromise", () => {
    it("sets strictSSL=false", function() {
      const button2Component = sinon.spy(request.rp.Request.prototype, "init");
      nock("http://www.github.com").get("/foo").reply(200, "hello", {
        "Content-Type" : "text/html"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://www.github.com/foo",
        cookies : false
      }).then(() => {
        expect(button2Component).to.be.calledWithMatch({
          strictSSL : false
        });
      });
    });
    it("sets simple=false", function() {
      nock("http://www.github.com").get("/foo").reply(500, "");
      return request.sendPromise({}, this.fn, {
        url : "http://www.github.com/foo",
        cookies : false
      });
    });
    it("sets resolveWithFullResponse=true", function() {
      nock("http://www.github.com").get("/foo").reply(200, "hello", {
        "Content-Type" : "text/html"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://www.github.com/foo",
        cookies : false,
        body : "foobarbaz"
      }).then((request) => {
        expect(request).to.have.keys("status", "body", "headers", "duration", "isOkStatusCode", "statusText", "allRequestResponses", "requestBody", "requestHeaders");
        expect(request.status).to.eq(200);
        expect(request.statusText).to.eq("OK");
        expect(request.body).to.eq("hello");
        expect(request.headers).to.deep.eq({
          "content-type" : "text/html"
        });
        expect(request.isOkStatusCode).to.be.true;
        expect(request.requestBody).to.eq("foobarbaz");
        expect(request.requestHeaders).to.deep.eq({
          accept : "*/*",
          "accept-encoding" : "gzip, deflate",
          connection : "keep-alive",
          "content-length" : 9,
          host : "www.github.com"
        });
        expect(request.allRequestResponses).to.deep.eq([{
          "Request Body" : "foobarbaz",
          "Request Headers" : {
            accept : "*/*",
            "accept-encoding" : "gzip, deflate",
            connection : "keep-alive",
            "content-length" : 9,
            host : "www.github.com"
          },
          "Request URL" : "http://www.github.com/foo",
          "Response Body" : "hello",
          "Response Headers" : {
            "content-type" : "text/html"
          },
          "Response Status" : 200
        }]);
      });
    });
    it("includes redirects", function() {
      this.fn.resolves();
      nock("http://www.github.com").get("/dashboard").reply(301, null, {
        location : "/auth"
      }).get("/auth").reply(302, null, {
        location : "/login"
      }).get("/login").reply(200, "log in", {
        "Content-Type" : "text/html"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://www.github.com/dashboard",
        cookies : false
      }).then((request) => {
        expect(request).to.have.keys("status", "body", "headers", "duration", "isOkStatusCode", "statusText", "allRequestResponses", "redirects", "requestBody", "requestHeaders");
        expect(request.status).to.eq(200);
        expect(request.statusText).to.eq("OK");
        expect(request.body).to.eq("log in");
        expect(request.headers).to.deep.eq({
          "content-type" : "text/html"
        });
        expect(request.isOkStatusCode).to.be.true;
        expect(request.requestBody).to.be.undefined;
        expect(request.redirects).to.deep.eq(["301: http://www.github.com/auth", "302: http://www.github.com/login"]);
        expect(request.requestHeaders).to.deep.eq({
          accept : "*/*",
          "accept-encoding" : "gzip, deflate",
          connection : "keep-alive",
          referer : "http://www.github.com/auth",
          host : "www.github.com"
        });
        expect(request.allRequestResponses).to.deep.eq([{
          "Request Body" : null,
          "Request Headers" : {
            accept : "*/*",
            "accept-encoding" : "gzip, deflate",
            connection : "keep-alive",
            host : "www.github.com"
          },
          "Request URL" : "http://www.github.com/dashboard",
          "Response Body" : null,
          "Response Headers" : {
            "content-type" : "application/json",
            location : "/auth"
          },
          "Response Status" : 301
        }, {
          "Request Body" : null,
          "Request Headers" : {
            accept : "*/*",
            "accept-encoding" : "gzip, deflate",
            connection : "keep-alive",
            host : "www.github.com",
            referer : "http://www.github.com/dashboard"
          },
          "Request URL" : "http://www.github.com/auth",
          "Response Body" : null,
          "Response Headers" : {
            "content-type" : "application/json",
            location : "/login"
          },
          "Response Status" : 302
        }, {
          "Request Body" : null,
          "Request Headers" : {
            accept : "*/*",
            "accept-encoding" : "gzip, deflate",
            connection : "keep-alive",
            host : "www.github.com",
            referer : "http://www.github.com/auth"
          },
          "Request URL" : "http://www.github.com/login",
          "Response Body" : "log in",
          "Response Headers" : {
            "content-type" : "text/html"
          },
          "Response Status" : 200
        }]);
      });
    });
    it("catches errors", function() {
      nock.enableNetConnect();
      const dojo = Request({
        timeout : 2E3
      });
      return dojo.sendPromise({}, this.fn, {
        url : "http://localhost:1111/foo",
        cookies : false
      }).then(() => {
        throw new Error("should have failed but didnt");
      }).catch((e) => {
        expect(e.message).to.eq("Error: connect ECONNREFUSED 127.0.0.1:1111");
      });
    });
    it("parses response body as json if content-type application/json response headers", function() {
      nock("http://localhost:8080").get("/status.json").reply(200, JSON.stringify({
        status : "ok"
      }), {
        "Content-Type" : "application/json"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://localhost:8080/status.json",
        cookies : false
      }).then((e) => {
        expect(e.body).to.deep.eq({
          status : "ok"
        });
      });
    });
    it("parses response body as json if content-type application/vnd.api+json response headers", function() {
      nock("http://localhost:8080").get("/status.json").reply(200, JSON.stringify({
        status : "ok"
      }), {
        "Content-Type" : "application/vnd.api+json"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://localhost:8080/status.json",
        cookies : false
      }).then((e) => {
        expect(e.body).to.deep.eq({
          status : "ok"
        });
      });
    });
    it("revives from parsing bad json", function() {
      nock("http://localhost:8080").get("/status.json").reply(200, "{bad: 'json'}", {
        "Content-Type" : "application/json"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://localhost:8080/status.json",
        cookies : false
      }).then((e) => {
        expect(e.body).to.eq("{bad: 'json'}");
      });
    });
    it("sets duration on response", function() {
      nock("http://localhost:8080").get("/foo").delay(10).reply(200, "123", {
        "Content-Type" : "text/plain"
      });
      return request.sendPromise({}, this.fn, {
        url : "http://localhost:8080/foo",
        cookies : false
      }).then((e) => {
        expect(e.duration).to.be.a("Number");
        expect(e.duration).to.be.gt(0);
      });
    });
    it("sends up user-agent headers", function() {
      nock("http://localhost:8080").matchHeader("user-agent", "foobarbaz").get("/foo").reply(200, "derp");
      const req = {};
      req["user-agent"] = "foobarbaz";
      return request.sendPromise(req, this.fn, {
        url : "http://localhost:8080/foo",
        cookies : false
      }).then((e) => {
        expect(e.body).to.eq("derp");
      });
    });
    it("sends connection: keep-alive by default", function() {
      nock("http://localhost:8080").matchHeader("connection", "keep-alive").get("/foo").reply(200, "it worked");
      return request.sendPromise({}, this.fn, {
        url : "http://localhost:8080/foo",
        cookies : false
      }).then((e) => {
        expect(e.body).to.eq("it worked");
      });
    });
    it("lower cases headers", function() {
      nock("http://localhost:8080").matchHeader("test", "true").get("/foo").reply(200, "derp");
      const req = {};
      req["user-agent"] = "foobarbaz";
      return request.sendPromise(req, this.fn, {
        url : "http://localhost:8080/foo",
        cookies : false,
        headers : {
          TEST : true
        }
      }).then((e) => {
        expect(e.body).to.eq("derp");
      });
    });
    it("allows overriding user-agent in headers", function() {
      nock("http://localhost:8080").matchHeader("user-agent", "custom-agent").get("/foo").reply(200, "derp");
      const e = {
        "user-agent" : "test"
      };
      return request.sendPromise(e, this.fn, {
        url : "http://localhost:8080/foo",
        cookies : false,
        headers : {
          "User-Agent" : "custom-agent"
        }
      }).then((e) => {
        expect(e.body).to.eq("derp");
      });
    });
    context("accept header", () => {
      it("sets to */* by default", function() {
        nock("http://localhost:8080").matchHeader("accept", "*/*").get("/headers").reply(200);
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/headers",
          cookies : false
        }).then((e) => {
          expect(e.status).to.eq(200);
        });
      });
      it("can override accept header", function() {
        nock("http://localhost:8080").matchHeader("accept", "text/html").get("/headers").reply(200);
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/headers",
          cookies : false,
          headers : {
            accept : "text/html"
          }
        }).then((e) => {
          expect(e.status).to.eq(200);
        });
      });
      it("can override Accept header", function() {
        nock("http://localhost:8080").matchHeader("accept", "text/plain").get("/headers").reply(200);
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/headers",
          cookies : false,
          headers : {
            Accept : "text/plain"
          }
        }).then((e) => {
          expect(e.status).to.eq(200);
        });
      });
    });
    context("qs", () => {
      it("can accept qs", function() {
        nock("http://localhost:8080").get("/foo?bar=baz&q=1").reply(200);
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/foo",
          cookies : false,
          qs : {
            bar : "baz",
            q : 1
          }
        }).then((e) => {
          expect(e.status).to.eq(200);
        });
      });
    });
    context("followRedirect", () => {
      beforeEach(function() {
        this.fn.resolves();
      });
      it("by default follow redirects", function() {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", {
          location : "http://localhost:8080/login"
        }).get("/login").reply(200, "login");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/dashboard",
          cookies : false,
          followRedirect : true
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e.body).to.eq("login");
          expect(e).not.to.have.property("redirectedToUrl");
        });
      });
      it("follows non-GET redirects by default", function() {
        nock("http://localhost:8080").post("/login").reply(302, "", {
          location : "http://localhost:8080/dashboard"
        }).get("/dashboard").reply(200, "dashboard");
        return request.sendPromise({}, this.fn, {
          method : "POST",
          url : "http://localhost:8080/login",
          cookies : false
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e.body).to.eq("dashboard");
          expect(e).not.to.have.property("redirectedToUrl");
        });
      });
      it("can turn off following redirects", function() {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", {
          location : "http://localhost:8080/login"
        }).get("/login").reply(200, "login");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/dashboard",
          cookies : false,
          followRedirect : false
        }).then((resp) => {
          expect(resp.status).to.eq(302);
          expect(resp.body).to.eq("");
          expect(resp.redirectedToUrl).to.eq("http://localhost:8080/login");
        });
      });
      it("resolves redirectedToUrl on relative redirects", function() {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", {
          location : "/login"
        }).get("/login").reply(200, "login");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/dashboard",
          cookies : false,
          followRedirect : false
        }).then((resp) => {
          expect(resp.status).to.eq(302);
          expect(resp.redirectedToUrl).to.eq("http://localhost:8080/login");
        });
      });
      it("resolves redirectedToUrl to another domain", function() {
        nock("http://localhost:8080").get("/dashboard").reply(301, "", {
          location : "https://www.google.com/login"
        }).get("/login").reply(200, "login");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/dashboard",
          cookies : false,
          followRedirect : false
        }).then((resp) => {
          expect(resp.status).to.eq(301);
          expect(resp.redirectedToUrl).to.eq("https://www.google.com/login");
        });
      });
      it("does not included redirectedToUrl when following redirects", function() {
        nock("http://localhost:8080").get("/dashboard").reply(302, "", {
          location : "http://localhost:8080/login"
        }).get("/login").reply(200, "login");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/dashboard",
          cookies : false
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e).not.to.have.property("redirectedToUrl");
        });
      });
      it("gets + attaches the cookies at each redirect", function() {
        return testAttachingCookiesWith(() => {
          return request.sendPromise({}, this.fn, {
            url : "http://localhost:1234/"
          });
        });
      });
    });
    context("form=true", () => {
      beforeEach(() => {
        nock("http://localhost:8080").matchHeader("Content-Type", "application/x-www-form-urlencoded").post("/login", "foo=bar&baz=quux").reply(200, "<html></html>");
      });
      it("takes converts body to x-www-form-urlencoded and sets header", function() {
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/login",
          method : "POST",
          cookies : false,
          form : true,
          body : {
            foo : "bar",
            baz : "quux"
          }
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e.body).to.eq("<html></html>");
        });
      });
      it("does not send body", function() {
        const listenerNotCall = sinon.spy(request.rp.Request.prototype, "init");
        const whisperMessage = {
          foo : "bar",
          baz : "quux"
        };
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/login",
          method : "POST",
          cookies : false,
          form : true,
          json : true,
          body : whisperMessage
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e.body).to.eq("<html></html>");
          expect(listenerNotCall).not.to.be.calledWithMatch({
            body : whisperMessage
          });
        });
      });
      it("does not set json=true", function() {
        const listenerNotCall = sinon.spy(request.rp.Request.prototype, "init");
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:8080/login",
          method : "POST",
          cookies : false,
          form : true,
          json : true,
          body : {
            foo : "bar",
            baz : "quux"
          }
        }).then((e) => {
          expect(e.status).to.eq(200);
          expect(e.body).to.eq("<html></html>");
          expect(listenerNotCall).not.to.be.calledWithMatch({
            json : true
          });
        });
      });
    });
    context("bad headers", () => {
      beforeEach(function(e) {
        this.srv = http.createServer((canCreateDiscussions, res) => {
          res.writeHead(200);
          res.end();
        });
        this.srv.listen(9988, e);
      });
      afterEach(function() {
        return this.srv.close();
      });
      it("recovers from bad headers", function() {
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:9988/foo",
          cookies : false,
          headers : {
            "x-text" : "\u05d0\u05d1\u05d2\u05d3"
          }
        }).then(() => {
          throw new Error("should have failed");
        }).catch((e) => {
          expect(e.message).to.eq('TypeError [ERR_INVALID_CHAR]: Invalid character in header content ["x-text"]');
        });
      });
      it("handles weird content in the body just fine", function() {
        return request.sendPromise({}, this.fn, {
          url : "http://localhost:9988/foo",
          cookies : false,
          json : true,
          body : {
            "x-text" : "\u05d0\u05d1\u05d2\u05d3"
          }
        });
      });
    });
  });
  context("#sendStream", () => {
    it("allows overriding user-agent in headers", function() {
      nock("http://localhost:8080").matchHeader("user-agent", "custom-agent").get("/foo").reply(200, "derp");
      sinon.spy(request, "create");
      this.fn.resolves({});
      const e = {
        "user-agent" : "test"
      };
      const callback = {
        url : "http://localhost:8080/foo",
        cookies : false,
        headers : {
          "user-agent" : "custom-agent"
        }
      };
      return request.sendStream(e, this.fn, callback).then((saveNotifs) => {
        saveNotifs();
        expect(request.create).to.be.calledOnce;
        expect(request.create).to.be.calledWith(callback);
      });
    });
    it("gets + attaches the cookies at each redirect", function() {
      return testAttachingCookiesWith(() => {
        return request.sendStream({}, this.fn, {
          url : "http://localhost:1234/",
          followRedirect : _.stubTrue
        }).then((saveNotifs) => {
          const o = saveNotifs();
          return new Promise((e, t) => {
            o.on("response", e);
            o.on("error", t);
          });
        });
      });
    });
  });
});

