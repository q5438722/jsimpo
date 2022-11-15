"use strict";

const cheerio = require("cheerio");

describe("jsfiddle", () => {
  const t = require("../../../lib/plugins/tag/jsfiddle");

  it("id", () => {
    const e = cheerio.load(t(["foo"]));
    e("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");
  });it("tabs", () => {
    var e = cheerio.load(t(["foo", "default"]));
    e("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");e = cheerio.load(t(["foo", "html,css"]));e("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/html,css/light");
  });it("skin", () => {
    var e = cheerio.load(t(["foo", "default", "default"]));
    e("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/light");e = cheerio.load(t(["foo", "default", "dark"]));e("iframe").attr("src").should.eql("https://jsfiddle.net/foo/embedded/js,resources,html,css,result/dark");
  });it("width", () => {
    var e = cheerio.load(t(["foo", "default", "default", "default"]));
    e("iframe").attr("width").should.eql("100%");e = cheerio.load(t(["foo", "default", "default", "500"]));e("iframe").attr("width").should.eql("500");
  });it("height", () => {
    var e = cheerio.load(t(["foo", "default", "default", "default", "default"]));
    e("iframe").attr("height").should.eql("300");e = cheerio.load(t(["foo", "default", "default", "default", "500"]));e("iframe").attr("height").should.eql("500");
  });
});
