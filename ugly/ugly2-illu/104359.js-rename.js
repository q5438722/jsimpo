const defaults = require("../../lib/defaults");

const utils = require("../../lib/utils");

describe("defaults", function () {
  const e = "CUSTOM-XSRF-TOKEN";
  beforeEach(function () {
    jasmine.Ajax.install();
  });afterEach(function () {
    jasmine.Ajax.uninstall();delete axios.defaults.baseURL;delete axios.defaults.headers.get.X-CUSTOM-HEADER;delete axios.defaults.headers.post.X-CUSTOM-HEADER;document.cookie = "CUSTOM-XSRF-TOKEN=;expires=" + new Date(Date.now() - 864e5).toGMTString();
  });it("should transform request json", function () {
    expect(defaults.transformRequest[0]({ foo: "bar" })).toEqual("{\"foo\":\"bar\"}");
  });it("should do nothing to request string", function () {
    expect(defaults.transformRequest[0]("foo=bar")).toEqual("foo=bar");
  });it("should transform response json", function () {
    const e = defaults.transformResponse[0].call(defaults, "{\"foo\":\"bar\"}");
    expect(typeof e).toEqual("object");expect(e.foo).toEqual("bar");
  });it("should do nothing to response string", function () {
    expect(defaults.transformResponse[0]("foo=bar")).toEqual("foo=bar");
  });it("should use global defaults config", function (t) {
    axios("/foo");getAjaxRequest().then(function (e) {
      expect(e.url).toBe("/foo");t();
    });
  });it("should use modified defaults config", function (t) {
    axios.defaults.baseURL = "http://example.com/";axios("/foo");getAjaxRequest().then(function (e) {
      expect(e.url).toBe("http://example.com/foo");t();
    });
  });it("should use request config", function (t) {
    axios("/foo", { baseURL: "http://www.example.com" });getAjaxRequest().then(function (e) {
      expect(e.url).toBe("http://www.example.com/foo");t();
    });
  });it("should use default config for custom instance", function (t) {
    const o = axios.create({ xsrfCookieName: e, xsrfHeaderName: "X-CUSTOM-XSRF-TOKEN" });
    document.cookie = o.defaults.xsrfCookieName + "=foobarbaz";o.get("/foo");getAjaxRequest().then(function (e) {
      expect(e.requestHeaders[o.defaults.xsrfHeaderName]).toEqual("foobarbaz");t();
    });
  });it("should use GET headers", function (t) {
    axios.defaults.headers.get["X-CUSTOM-HEADER"] = "foo";axios.get("/foo");getAjaxRequest().then(function (e) {
      expect(e.requestHeaders.X-CUSTOM-HEADER).toBe("foo");t();
    });
  });it("should use POST headers", function (t) {
    axios.defaults.headers.post["X-CUSTOM-HEADER"] = "foo";axios.post("/foo", {});getAjaxRequest().then(function (e) {
      expect(e.requestHeaders.X-CUSTOM-HEADER).toBe("foo");t();
    });
  });it("should use header config", function (t) {
    const e = axios.create({ headers: { common: { "X-COMMON-HEADER": "commonHeaderValue" }, get: { "X-GET-HEADER": "getHeaderValue" }, post: { "X-POST-HEADER": "postHeaderValue" } } });
    e.get("/foo", { headers: { "X-FOO-HEADER": "fooHeaderValue", "X-BAR-HEADER": "barHeaderValue" } });getAjaxRequest().then(function (e) {
      expect(e.requestHeaders).toEqual(utils.merge(defaults.headers.common, defaults.headers.get, { "X-COMMON-HEADER": "commonHeaderValue", "X-GET-HEADER": "getHeaderValue", "X-FOO-HEADER": "fooHeaderValue", "X-BAR-HEADER": "barHeaderValue" }));t();
    });
  });it("should be used by custom instance if set before instance created", function (t) {
    axios.defaults.baseURL = "http://example.org/";const e = axios.create();
    e.get("/foo");getAjaxRequest().then(function (e) {
      expect(e.url).toBe("http://example.org/foo");t();
    });
  });it("should not be used by custom instance if set after instance created", function (t) {
    const e = axios.create();
    axios.defaults.baseURL = "http://example.org/";e.get("/foo");getAjaxRequest().then(function (e) {
      expect(e.url).toBe("/foo");t();
    });
  });
});
