"use strict";
module.exports = { meta: { type: "suggestion", docs: { description: "enforce a maximum depth that blocks can be nested", category: "Stylistic Issues", recommended: false, url: "https://eslint.org/docs/rules/max-depth" }, schema: [{ oneOf: [{ type: "integer", minimum: 0 }, { type: "object", properties: { maximum: { type: "integer", minimum: 0 }, max: { type: "integer", minimum: 0 } }, additionalProperties: false }] }], messages: { tooDeeply: "Blocks are nested too deeply ({{depth}}). Maximum allowed is {{maxDepth}}." } }, create(n) {
    const i = [];
    const t = n.options[0];
    var o = 4;
    if (typeof t === "object" && (Object.prototype.hasOwnProperty.call(t, "maximum") || Object.prototype.hasOwnProperty.call(t, "max"))) {
      o = t.maximum || t.max;
    }if (typeof t === "number") {
      o = t;
    }function e() {
      i.push(0);
    }function a() {
      i.pop();
    }function m(t) {
      const e = ++i[i.length - 1];
      if (e > o) {
        n.report({ node: t, messageId: "tooDeeply", data: { depth: e, maxDepth: o } });
      }
    }function r() {
      i[i.length - 1]--;
    }return { Program: e, FunctionDeclaration: e, FunctionExpression: e, ArrowFunctionExpression: e, IfStatement(t) {
        if (t.parent.type !== "IfStatement") {
          m(t);
        }
      }, SwitchStatement: m, TryStatement: m, DoWhileStatement: m, WhileStatement: m, WithStatement: m, ForStatement: m, ForInStatement: m, ForOfStatement: m, "IfStatement:exit": r, "SwitchStatement:exit": r, "TryStatement:exit": r, "DoWhileStatement:exit": r, "WhileStatement:exit": r, "WithStatement:exit": r, "ForStatement:exit": r, "ForInStatement:exit": r, "ForOfStatement:exit": r, "FunctionDeclaration:exit": a, "FunctionExpression:exit": a, "ArrowFunctionExpression:exit": a, "Program:exit": a };
  } };
