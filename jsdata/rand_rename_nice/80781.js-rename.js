'use strict';
var express = require("../");
var request = require("supertest");
var cookie = require("cookie");
var cookieParser = require("cookie-parser");
var merge = require("utils-merge");
describe("res", function() {
  describe(".cookie(name, object)", function() {
    it("should generate a JSON cookie", function(length) {
      var app = express();
      app.use(function(canCreateDiscussions, o) {
        o.cookie("user", {
          name : "tobi"
        }).end();
      });
      request(app).get("/").expect("Set-Cookie", "user=j%3A%7B%22name%22%3A%22tobi%22%7D; Path=/").expect(200, length);
    });
  });
  describe(".cookie(name, string)", function() {
    it("should set a cookie", function(length) {
      var app = express();
      app.use(function(canCreateDiscussions, res) {
        res.cookie("name", "tobi").end();
      });
      request(app).get("/").expect("Set-Cookie", "name=tobi; Path=/").expect(200, length);
    });
    it("should allow multiple calls", function(saveNotifs) {
      var app = express();
      app.use(function(canCreateDiscussions, res) {
        res.cookie("name", "tobi");
        res.cookie("age", 1);
        res.cookie("gender", "?");
        res.end();
      });
      request(app).get("/").end(function(canCreateDiscussions, res) {
        var innerVar = ["name=tobi; Path=/", "age=1; Path=/", "gender=%3F; Path=/"];
        res.headers["set-cookie"].should.eql(innerVar);
        saveNotifs();
      });
    });
  });
  describe(".cookie(name, string, options)", function() {
    it("should set params", function(length) {
      var app = express();
      app.use(function(canCreateDiscussions, res) {
        res.cookie("name", "tobi", {
          httpOnly : true,
          secure : true
        });
        res.end();
      });
      request(app).get("/").expect("Set-Cookie", "name=tobi; Path=/; HttpOnly; Secure").expect(200, length);
    });
    describe("maxAge", function() {
      it("should set relative expires", function(saveNotifs) {
        var app = express();
        app.use(function(canCreateDiscussions, res) {
          res.cookie("name", "tobi", {
            maxAge : 1e3
          });
          res.end();
        });
        request(app).get("/").end(function(canCreateDiscussions, res) {
          res.headers["set-cookie"][0].should.not.containEql("Thu, 01 Jan 1970 00:00:01 GMT");
          saveNotifs();
        });
      });
      it("should set max-age", function(done) {
        var app = express();
        app.use(function(canCreateDiscussions, res) {
          res.cookie("name", "tobi", {
            maxAge : 1e3
          });
          res.end();
        });
        request(app).get("/").expect("Set-Cookie", /Max-Age=1/, done);
      });
      it("should not mutate the options object", function(ariaLabel) {
        var app = express();
        var options = {
          maxAge : 1e3
        };
        var done = merge({}, options);
        app.use(function(canCreateDiscussions, res) {
          res.cookie("name", "tobi", options);
          res.json(options);
        });
        request(app).get("/").expect(200, done, ariaLabel);
      });
    });
    describe("signed", function() {
      it("should generate a signed JSON cookie", function(saveNotifs) {
        var app = express();
        app.use(cookieParser("foo bar baz"));
        app.use(function(canCreateDiscussions, res) {
          res.cookie("user", {
            name : "tobi"
          }, {
            signed : true
          }).end();
        });
        request(app).get("/").end(function(canCreateDiscussions, res) {
          var t = res.headers["set-cookie"][0];
          t = cookie.parse(t.split(".")[0]);
          t.user.should.equal('s:j:{"name":"tobi"}');
          saveNotifs();
        });
      });
    });
    describe("signed without secret", function() {
      it("should throw an error", function(done) {
        var app = express();
        app.use(cookieParser());
        app.use(function(canCreateDiscussions, res) {
          res.cookie("name", "tobi", {
            signed : true
          }).end();
        });
        request(app).get("/").expect(500, /secret\S+ required for signed cookies/, done);
      });
    });
    describe(".signedCookie(name, string)", function() {
      it("should set a signed cookie", function(length) {
        var app = express();
        app.use(cookieParser("foo bar baz"));
        app.use(function(canCreateDiscussions, res) {
          res.cookie("name", "tobi", {
            signed : true
          }).end();
        });
        request(app).get("/").expect("Set-Cookie", "name=s%3Atobi.xJjV2iZ6EI7C8E5kzwbfA9PVLl1ZR07UTnuTgQQ4EnQ; Path=/").expect(200, length);
      });
    });
  });
});

