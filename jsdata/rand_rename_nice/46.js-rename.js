'use strict';
const cheerio = require("cheerio");
describe("jsfiddle", () => {
  const jsfiddle = require("../../../lib/plugins/tag/jsfiddle");
  it("id", () => {
    const hookMessaging = cheerio.load(jsfiddle(["foo"]));
    hookMessaging("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");
  });
  it("tabs", () => {
    let hookMessaging = cheerio.load(jsfiddle(["foo", "default"]));
    hookMessaging("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");
    hookMessaging = cheerio.load(jsfiddle(["foo", "html,css"]));
    hookMessaging("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/html,css/light");
  });
  it("skin", () => {
    let hookMessaging = cheerio.load(jsfiddle(["foo", "default", "default"]));
    hookMessaging("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");
    hookMessaging = cheerio.load(jsfiddle(["foo", "default", "dark"]));
    hookMessaging("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark");
  });
  it("width", () => {
    let hookMessaging = cheerio.load(jsfiddle(["foo", "default", "default", "default"]));
    hookMessaging("iframe").attr("width").should.eql("100%");
    hookMessaging = cheerio.load(jsfiddle(["foo", "default", "default", "500"]));
    hookMessaging("iframe").attr("width").should.eql("500");
  });
  it("height", () => {
    let hookMessaging = cheerio.load(jsfiddle(["foo", "default", "default", "default", "default"]));
    hookMessaging("iframe").attr("height").should.eql("300");
    hookMessaging = cheerio.load(jsfiddle(["foo", "default", "default", "default", "500"]));
    hookMessaging("iframe").attr("height").should.eql("500");
  });
});

