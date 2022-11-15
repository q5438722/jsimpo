'use strict';
var defaults = require("../../lib/defaults");
var utils = require("../../lib/utils");
describe("defaults", function() {
  var XSRF_COOKIE_NAME = "CUSTOM-XSRF-TOKEN";
  beforeEach(function() {
    jasmine.Ajax.install();
  });
  afterEach(function() {
    jasmine.Ajax.uninstall();
    delete axios.defaults.baseURL;
    delete axios.defaults.headers.get["X-CUSTOM-HEADER"];
    delete axios.defaults.headers.post["X-CUSTOM-HEADER"];
    document.cookie = XSRF_COOKIE_NAME + "=;expires=" + (new Date(Date.now() - 864e5)).toGMTString();
  });
  it("should transform request json", function() {
    expect(defaults.transformRequest[0]({
      foo : "bar"
    })).toEqual('{"foo":"bar"}');
  });
  it("should do nothing to request string", function() {
    expect(defaults.transformRequest[0]("foo=bar")).toEqual("foo=bar");
  });
  it("should transform response json", function() {
    var e = defaults.transformResponse[0].call(defaults, '{"foo":"bar"}');
    expect(typeof e).toEqual("object");
    expect(e.foo).toEqual("bar");
  });
  it("should do nothing to response string", function() {
    expect(defaults.transformResponse[0]("foo=bar")).toEqual("foo=bar");
  });
  it("should use global defaults config", function(saveNotifs) {
    axios("/foo");
    getAjaxRequest().then(function(e) {
      expect(e.url).toBe("/foo");
      saveNotifs();
    });
  });
  it("should use modified defaults config", function(saveNotifs) {
    axios.defaults.baseURL = "http://example.com/";
    axios("/foo");
    getAjaxRequest().then(function(e) {
      expect(e.url).toBe("http://example.com/foo");
      saveNotifs();
    });
  });
  it("should use request config", function(saveNotifs) {
    axios("/foo", {
      baseURL : "http://www.example.com"
    });
    getAjaxRequest().then(function(e) {
      expect(e.url).toBe("http://www.example.com/foo");
      saveNotifs();
    });
  });
  it("should use default config for custom instance", function(saveNotifs) {
    var $http = axios.create({
      xsrfCookieName : XSRF_COOKIE_NAME,
      xsrfHeaderName : "X-CUSTOM-XSRF-TOKEN"
    });
    document.cookie = $http.defaults.xsrfCookieName + "=foobarbaz";
    $http.get("/foo");
    getAjaxRequest().then(function(request) {
      expect(request.requestHeaders[$http.defaults.xsrfHeaderName]).toEqual("foobarbaz");
      saveNotifs();
    });
  });
  it("should use GET headers", function(saveNotifs) {
    axios.defaults.headers.get["X-CUSTOM-HEADER"] = "foo";
    axios.get("/foo");
    getAjaxRequest().then(function(request) {
      expect(request.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
      saveNotifs();
    });
  });
  it("should use POST headers", function(saveNotifs) {
    axios.defaults.headers.post["X-CUSTOM-HEADER"] = "foo";
    axios.post("/foo", {});
    getAjaxRequest().then(function(request) {
      expect(request.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
      saveNotifs();
    });
  });
  it("should use header config", function(saveNotifs) {
    var readerAPI = axios.create({
      headers : {
        common : {
          "X-COMMON-HEADER" : "commonHeaderValue"
        },
        get : {
          "X-GET-HEADER" : "getHeaderValue"
        },
        post : {
          "X-POST-HEADER" : "postHeaderValue"
        }
      }
    });
    readerAPI.get("/foo", {
      headers : {
        "X-FOO-HEADER" : "fooHeaderValue",
        "X-BAR-HEADER" : "barHeaderValue"
      }
    });
    getAjaxRequest().then(function(configuration) {
      expect(configuration.requestHeaders).toEqual(utils.merge(defaults.headers.common, defaults.headers.get, {
        "X-COMMON-HEADER" : "commonHeaderValue",
        "X-GET-HEADER" : "getHeaderValue",
        "X-FOO-HEADER" : "fooHeaderValue",
        "X-BAR-HEADER" : "barHeaderValue"
      }));
      saveNotifs();
    });
  });
  it("should be used by custom instance if set before instance created", function(saveNotifs) {
    axios.defaults.baseURL = "http://example.org/";
    var readerAPI = axios.create();
    readerAPI.get("/foo");
    getAjaxRequest().then(function(e) {
      expect(e.url).toBe("http://example.org/foo");
      saveNotifs();
    });
  });
  it("should not be used by custom instance if set after instance created", function(saveNotifs) {
    var readerAPI = axios.create();
    axios.defaults.baseURL = "http://example.org/";
    readerAPI.get("/foo");
    getAjaxRequest().then(function(e) {
      expect(e.url).toBe("/foo");
      saveNotifs();
    });
  });
});

