"use strict";

const f = require("react");

var g = 60103;
exports.Fragment = 60107;if ("function" === typeof Symbol && Symbol.for) {
  const h = Symbol.for;
  g = h("react.element");exports.Fragment = h("react.fragment");
}
const m = require("react/lib/ReactCurrentOwner");

const n = Object.prototype.hasOwnProperty;
const p = { key: true, ref: true, __self: true, __source: true };
function q(r, e, t) {
  var o;
  const f = {};
  var a = null;
  var s = null;
  void 0 !== t && (a = "" + t);void 0 !== e.key && (a = "" + e.key);void 0 !== e.ref && (s = e.ref);for (o in e) n.call(e, o) && !p.hasOwnProperty(o) && (f[o] = e[o]);if (r && r.defaultProps) for (o in e = r.defaultProps, e) void 0 === f[o] && (f[o] = e[o]);return { $$typeof: g, type: r, key: a, ref: s, props: f, _owner: m.current };
}exports.jsx = q;exports.jsxs = q;
