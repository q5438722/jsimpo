'use strict';
const astUtils = require("./utils/ast-utils");
function isCallOrNonVariadicApply(node) {
  const inner = astUtils.skipChainExpression(node.callee);
  return inner.type === "MemberExpression" && inner.property.type === "Identifier" && inner.computed === false && (inner.property.name === "call" && node.arguments.length >= 1 || inner.property.name === "apply" && node.arguments.length === 2 && node.arguments[1].type === "ArrayExpression");
}
function isValidThisArg(expectedThis, thisArg, context) {
  if (!expectedThis) {
    return astUtils.isNullOrUndefined(thisArg);
  }
  return astUtils.equalTokens(expectedThis, thisArg, context);
}
module.exports = {
  meta : {
    type : "suggestion",
    docs : {
      description : "disallow unnecessary calls to `.call()` and `.apply()`",
      category : "Best Practices",
      recommended : false,
      url : "https://eslint.org/docs/rules/no-useless-call"
    },
    schema : [],
    messages : {
      unnecessaryCall : "Unnecessary '.{{name}}()'."
    }
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      CallExpression(node) {
        if (!isCallOrNonVariadicApply(node)) {
          return;
        }
        const parent = astUtils.skipChainExpression(node.callee);
        const applied = astUtils.skipChainExpression(parent.object);
        const expectedThis = applied.type === "MemberExpression" ? applied.object : null;
        const thisArg = node.arguments[0];
        if (isValidThisArg(expectedThis, thisArg, sourceCode)) {
          context.report({
            node : node,
            messageId : "unnecessaryCall",
            data : {
              name : parent.property.name
            }
          });
        }
      }
    };
  }
};

