"use strict";

const markdownLineEnding = require("../character/markdown-line-ending.js");

const chunkedSplice = require("../util/chunked-splice.js");

const prefixSize = require("../util/prefix-size.js");

const factorySpace = require("./factory-space.js");

const codeIndented = { name: "codeIndented", tokenize: tokenizeCodeIndented, resolve: resolveCodeIndented };
const indentedContentConstruct = { tokenize: tokenizeIndentedContent, partial: true };
function resolveCodeIndented(e, n) {
  const t = { type: "codeIndented", start: e[0][1].start, end: e[e.length - 1][1].end };
  chunkedSplice(e, 0, 0, [["enter", { type: "codeIndented", start: e[0][1].start, end: e[e.length - 1][1].end }, n]]);chunkedSplice(e, e.length, 0, [["exit", { type: "codeIndented", start: e[0][1].start, end: e[e.length - 1][1].end }, n]]);return e;
}function tokenizeCodeIndented(n, t, e) {
  return n.attempt(indentedContentConstruct, r, e);function r(e) {
    if (e === null) {
      return t(e);
    }if (markdownLineEnding(e)) {
      return n.attempt(indentedContentConstruct, r, t)(e);
    }n.enter("codeFlowValue");return i(e);
  }function i(e) {
    if (e === null || markdownLineEnding(e)) {
      n.exit("codeFlowValue");return r(e);
    }n.consume(e);return i;
  }
}function tokenizeIndentedContent(n, t, r) {
  const i = this;
  return factorySpace(n, d, "linePrefix", 5);function d(e) {
    if (markdownLineEnding(e)) {
      n.enter("lineEnding");n.consume(e);n.exit("lineEnding");return factorySpace(n, d, "linePrefix", 5);
    }return prefixSize(i.events, "linePrefix") < 4 ? r(e) : t(e);
  }
}module.exports = codeIndented;
