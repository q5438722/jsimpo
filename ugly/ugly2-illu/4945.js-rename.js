const assert = require("assert");

const vows = require("vows");

const director = require("../../../lib/director");

function assertRoute(o, t, e) {
  if (t.length === 1) {
    return assert.strictEqual(e[t.shift()], o);
  }e = e[t.shift()];assert.isObject(e);assertRoute(o, t, e);
}vows.describe("director/core/mount").addBatch({ "An instance of director.Router": { "with no preconfigured params": { topic: new director.Router(), "the mount() method": { "should sanitize the routes correctly": function (o) {
          function t() {}function e() {}function r() {}function s() {}function u() {}const n = [t, e];
          o.mount({ "/": { before: u, on: u, after: u, "/nesting": { on: t, "/deep": e } }, "/foo": { "/bar": t, "/*": e, "/jitsu/then": { before: t } }, "/foo/bazz": { "/buzz": r }, "/foo/jitsu": { "/then": n }, "/foo/jitsu/then/now": e, "/foo/:dog": s });assertRoute(u, ["on"], o.routes);assertRoute(u, ["after"], o.routes);assertRoute(u, ["before"], o.routes);assertRoute(t, ["nesting", "on"], o.routes);assertRoute(e, ["nesting", "deep", "on"], o.routes);assertRoute(t, ["foo", "bar", "on"], o.routes);assertRoute(e, ["foo", "([_.()!\\ %@&a-zA-Z0-9-]+)", "on"], o.routes);assertRoute(n, ["foo", "jitsu", "then", "on"], o.routes);assertRoute(t, ["foo", "jitsu", "then", "before"], o.routes);assertRoute(r, ["foo", "bazz", "buzz", "on"], o.routes);assertRoute(e, ["foo", "jitsu", "then", "now", "on"], o.routes);assertRoute(s, ["foo", "([._a-zA-Z0-9-%()]+)", "on"], o.routes);
        }, "should accept string path": function (o) {
          function t() {}o.mount({ "/dogs": { on: t } }, "/api");assertRoute(t, ["api", "dogs", "on"], o.routes);
        } } }, "with preconfigured params": { topic: function () {
        const o = new director.Router();
        o.param("city", "([\\w\\-]+)");o.param(":country", /([A-Z][A-Za-z]+)/);o.param(":zip", /([\d]{5})/);return o;
      }, "should sanitize the routes correctly": function (o) {
        function t() {}function e() {}o.mount({ "/usa/:city/:zip": t, "/world": { "/:country": { "/:city/:zip": e } } });assertRoute(t, ["usa", "([\\w\\-]+)", "([\\d]{5})", "on"], o.routes);assertRoute(e, ["world", "([A-Z][A-Za-z]+)", "([\\w\\-]+)", "([\\d]{5})", "on"], o.routes);
      } } } }).export(module);