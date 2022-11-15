"use strict";

const URL = require("url").URL;

const Arborist = require("@npmcli/arborist");

function normalizeFunding(e) {
  const n = e => typeof e === "string" ? { url: e } : e;

  const r = [].concat(e || []).map(n);
  return Array.isArray(e) ? r : r[0];
}function isValidFunding(e) {
  if (!e) return false;if (Array.isArray(e)) return e.every(e => !Array.isArray(e) && isValidFunding(e));try {
    const n = new URL(e.url || e);
  } catch (e) {
    return false;
  }if (n.protocol !== "https:" && n.protocol !== "http:") return false;return Boolean(n.host);
}
const empty = () => Object.create(null);

function readTree(e, n) {
  var r = 0;
  const t = new Set();
  var { countOnly: a } = n || {};
  const s = Symbol("trailingDependencies");
  var o;
  if (n && n.workspaces && n.workspaces.length) {
    const p = new Arborist(n);
    o = p.workspaceDependencySet(e, n.workspaces);
  }function c(e, n) {
    const r = String(e) + String(n);
    if (t.has(r)) return true;t.add(r);
  }function u(e) {
    const n = e[s];
    if (n) {
      return Object.assign(empty(), e, n);
    }return e;
  }function d(e) {
    return e && (Object.keys(e).length || e[s]);
  }function g(e, n) {
    if (n && isValidFunding(n)) {
      e.funding = normalizeFunding(n);r++;
    }
  }function f(e) {
    const n = e && e.edgesOut && e.edgesOut.values();
    if (!n) return empty();const r = Array.from(n).map(e => {
      if (!e || !e.to) return empty();const n = e.to.target || e.to;
      if (!n.package) return empty();if (o && o.size > 0 && !o.has(n)) return empty();var { name: r, funding: t, version: i } = n.package;
      if (c(r, i)) return empty();const a = {};
      if (i) a.version = i;g(a, t);return { node: n, fundingItem: a };
    });
    return r.reduce((e, { node: n, fundingItem: r }, t) => {
      if (!r || r.length === 0 || !n) return e;const i = n.edgesOut && n.edgesOut.size > 0 && f(n);
      if (a) return null;if (d(i)) {
        r.dependencies = u(i);
      }if (isValidFunding(r.funding)) e[n.package.name] = r;else if (d(r.dependencies)) {
        e[s] = Object.assign(empty(), e[s], r.dependencies);
      }return e;
    }, a ? null : empty());
  }const i = f(e);
  const l = { length: r };
  if (!a) {
    const m = e && e.package && e.package.name || e && e.name;
    l.name = m || e && e.path;if (e && e.package && e.package.version) l.version = e.package.version;if (e && e.package && e.package.funding) l.funding = normalizeFunding(e.package.funding);l.dependencies = u(i);
  }return l;
}async function read(e) {
  const n = new Arborist(e);
  const r = await n.loadActual(e);
  return readTree(r, e);
}module.exports = { read: read, readTree: readTree, normalizeFunding: normalizeFunding, isValidFunding: isValidFunding };
