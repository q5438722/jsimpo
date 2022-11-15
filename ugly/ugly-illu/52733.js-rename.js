"use strict";

const YAMLException = require("./exception");

const TYPE_CONSTRUCTOR_OPTIONS = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"];
const YAML_NODE_KINDS = ["scalar", "sequence", "mapping"];
function compileStyleAliases(e) {
  const n = {};
  if (e !== null) {
    Object.keys(e).forEach(function (t) {
      e[t].forEach(function (e) {
        n[String(e)] = t;
      });
    });
  }return n;
}function Type(t, e) {
  e = e || {};Object.keys(e).forEach(function (e) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(e) === -1) {
      throw new YAMLException("Unknown option \"" + e + "\" is met in definition of \"" + t + "\" YAML type.");
    }
  });this.tag = t;this.kind = e.kind || null;this.resolve = e.resolve || function () {
    return true;
  };this.construct = e.construct || function (e) {
    return e;
  };this.instanceOf = e.instanceOf || null;this.predicate = e.predicate || null;this.represent = e.represent || null;this.defaultStyle = e.defaultStyle || null;this.styleAliases = compileStyleAliases(e.styleAliases || null);if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException("Unknown kind \"" + this.kind + "\" is specified for \"" + t + "\" YAML type.");
  }
}module.exports = Type;
