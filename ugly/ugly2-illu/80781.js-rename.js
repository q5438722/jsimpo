const express = require("../");

const request = require("supertest");

const cookie = require("cookie");

const cookieParser = require("cookie-parser");

const merge = require("utils-merge");

describe("res", function () {
  describe(".cookie(name, object)", function () {
    it("should generate a JSON cookie", function (e) {
      const o = express();
      o.use(function (e, o) {
        o.cookie("user", { name: "tobi" }).end();
      });request(o).get("/").expect("Set-Cookie", "user=j%3A%7B%22name%22%3A%22tobi%22%7D; Path=/").expect(200, e);
    });
  });describe(".cookie(name, string)", function () {
    it("should set a cookie", function (e) {
      const o = express();
      o.use(function (e, o) {
        o.cookie("name", "tobi").end();
      });request(o).get("/").expect("Set-Cookie", "name=tobi; Path=/").expect(200, e);
    });it("should allow multiple calls", function (i) {
      const e = express();
      e.use(function (e, o) {
        o.cookie("name", "tobi");o.cookie("age", 1);o.cookie("gender", "?");o.end();
      });request(e).get("/").end(function (e, o) {
        const t = ["name=tobi; Path=/", "age=1; Path=/", "gender=%3F; Path=/"];
        o.headers.set-cookie.should.eql(t);i();
      });
    });
  });describe(".cookie(name, string, options)", function () {
    it("should set params", function (e) {
      const o = express();
      o.use(function (e, o) {
        o.cookie("name", "tobi", { httpOnly: true, secure: true });o.end();
      });request(o).get("/").expect("Set-Cookie", "name=tobi; Path=/; HttpOnly; Secure").expect(200, e);
    });describe("maxAge", function () {
      it("should set relative expires", function (t) {
        const e = express();
        e.use(function (e, o) {
          o.cookie("name", "tobi", { maxAge: 1e3 });o.end();
        });request(e).get("/").end(function (e, o) {
          o.headers.set-cookie[0].should.not.containEql("Thu, 01 Jan 1970 00:00:01 GMT");t();
        });
      });it("should set max-age", function (e) {
        const o = express();
        o.use(function (e, o) {
          o.cookie("name", "tobi", { maxAge: 1e3 });o.end();
        });request(o).get("/").expect("Set-Cookie", /Max-Age=1/, e);
      });it("should not mutate the options object", function (e) {
        const o = express();
        const t = { maxAge: 1e3 };
        const i = merge({}, t);
        o.use(function (e, o) {
          o.cookie("name", "tobi", t);o.json(t);
        });request(o).get("/").expect(200, i, e);
      });
    });describe("signed", function () {
      it("should generate a signed JSON cookie", function (i) {
        const e = express();
        e.use(cookieParser("foo bar baz"));e.use(function (e, o) {
          o.cookie("user", { name: "tobi" }, { signed: true }).end();
        });request(e).get("/").end(function (e, o) {
          var t = o.headers.set-cookie[0];
          t = cookie.parse(t.split(".")[0]);t.user.should.equal("s:j:{\"name\":\"tobi\"}");i();
        });
      });
    });describe("signed without secret", function () {
      it("should throw an error", function (e) {
        const o = express();
        o.use(cookieParser());o.use(function (e, o) {
          o.cookie("name", "tobi", { signed: true }).end();
        });request(o).get("/").expect(500, /secret\S+ required for signed cookies/, e);
      });
    });describe(".signedCookie(name, string)", function () {
      it("should set a signed cookie", function (e) {
        const o = express();
        o.use(cookieParser("foo bar baz"));o.use(function (e, o) {
          o.cookie("name", "tobi", { signed: true }).end();
        });request(o).get("/").expect("Set-Cookie", "name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ; Path=/").expect(200, e);
      });
    });
  });
});