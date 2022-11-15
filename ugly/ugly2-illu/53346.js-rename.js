"use strict";

const astUtils = require("./utils/ast-utils");

const SIDE_EFFECT_FREE_NODE_TYPES = new Set(["Literal", "Identifier", "ThisExpression", "FunctionExpression"]);
module.exports = { meta: { type: "suggestion", docs: { description: "disallow unnecessary calls to `.bind()`", category: "Best Practices", recommended: false, url: "https://eslint.org/docs/rules/no-extra-bind" }, schema: [], fixable: "code", messages: { unexpected: "The function binding is unnecessary." } }, create(n) {
    const o = n.getSourceCode();
    var t = null;
    function a(e) {
      return SIDE_EFFECT_FREE_NODE_TYPES.has(e.type);
    }function s(e) {
      const r = e.parent;
      const i = r.parent.type === "ChainExpression" ? r.parent.parent : r.parent;
      n.report({ node: i, messageId: "unexpected", loc: r.property.loc, fix(t) {
          if (!a(i.arguments[0])) {
            return null;
          }const e = [[o.getTokenAfter(r.object, astUtils.isNotClosingParenToken), o.getLastToken(r)], [o.getTokenAfter(r, astUtils.isNotClosingParenToken), o.getLastToken(i)]];
          const n = e[0][0];
          const s = e[1][1];
          if (o.commentsExistBetween(n, s)) {
            return null;
          }return e.map(([e, n]) => t.removeRange([e.range[0], n.range[1]]));
        } });
    }function r(e) {
      if (!astUtils.isSpecificMemberAccess(e.parent, null, "bind")) {
        return false;
      }const n = e.parent.parent.type === "ChainExpression" ? e.parent.parent : e.parent;
      return n.parent.type === "CallExpression" && n.parent.callee === n && n.parent.arguments.length === 1 && n.parent.arguments[0].type !== "SpreadElement";
    }function e(e) {
      t = { isBound: r(e), thisFound: false, upper: t };
    }function i(e) {
      if (t.isBound && !t.thisFound) {
        s(e);
      }t = t.upper;
    }function c(e) {
      if (r(e)) {
        s(e);
      }
    }function u() {
      if (t) {
        t.thisFound = true;
      }
    }return { "ArrowFunctionExpression:exit": c, FunctionDeclaration: e, "FunctionDeclaration:exit": i, FunctionExpression: e, "FunctionExpression:exit": i, ThisExpression: u };
  } };
