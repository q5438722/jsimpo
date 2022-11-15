"use strict";

const astUtils = require("./utils/ast-utils");

function isCallOrNonVariadicApply(e) {
  const s = astUtils.skipChainExpression(e.callee);
  return s.type === "MemberExpression" && s.property.type === "Identifier" && s.computed === false && (s.property.name === "call" && e.arguments.length >= 1 || s.property.name === "apply" && e.arguments.length === 2 && e.arguments[1].type === "ArrayExpression");
}function isValidThisArg(e, s, t) {
  if (!e) {
    return astUtils.isNullOrUndefined(s);
  }return astUtils.equalTokens(e, s, t);
}module.exports = { meta: { type: "suggestion", docs: { description: "disallow unnecessary calls to `.call()` and `.apply()`", category: "Best Practices", recommended: false, url: "https://eslint.org/docs/rules/no-useless-call" }, schema: [], messages: { unnecessaryCall: "Unnecessary '.{{name}}()'." } }, create(a) {
    const l = a.getSourceCode();
    return { CallExpression(e) {
        if (!isCallOrNonVariadicApply(e)) {
          return;
        }const s = astUtils.skipChainExpression(e.callee);
        const t = astUtils.skipChainExpression(s.object);
        const r = t.type === "MemberExpression" ? t.object : null;
        const n = e.arguments[0];
        if (isValidThisArg(r, n, l)) {
          a.report({ node: e, messageId: "unnecessaryCall", data: { name: s.property.name } });
        }
      } };
  } };
