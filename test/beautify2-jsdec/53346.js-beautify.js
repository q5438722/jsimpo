"use strict";const astUtils=require("./utils/ast-utils");const SIDE_EFFECT_FREE_NODE_TYPES=new Set(["Literal","Identifier","ThisExpression","FunctionExpression"]);module.exports={meta:{type:"suggestion",docs:{description:"disallow unnecessary calls to `.bind()`",category:"Best Practices",recommended:false,url:"https://eslint.org/docs/rules/no-extra-bind"},schema:[],fixable:"code",messages:{unexpected:"The function binding is unnecessary."}},create(context){const sourceCode=context.getSourceCode();let scopeInfo=null;function isSideEffectFree(node){return SIDE_EFFECT_FREE_NODE_TYPES.has(node.type)}function report(node){const memberNode=node.parent;const callNode=memberNode.parent.type==="ChainExpression"?memberNode.parent.parent:memberNode.parent;context.report({node:callNode,messageId:"unexpected",loc:memberNode.property.loc,fix(fixer){if(!isSideEffectFree(callNode.arguments[0])){return null}const tokenPairs=[[sourceCode.getTokenAfter(memberNode.object,astUtils.isNotClosingParenToken),sourceCode.getLastToken(memberNode)],[sourceCode.getTokenAfter(memberNode,astUtils.isNotClosingParenToken),sourceCode.getLastToken(callNode)]];const firstTokenToRemove=tokenPairs[0][0];const lastTokenToRemove=tokenPairs[1][1];if(sourceCode.commentsExistBetween(firstTokenToRemove,lastTokenToRemove)){return null}return tokenPairs.map(([start,end])=>fixer.removeRange([start.range[0],end.range[1]]))}})}function isCalleeOfBindMethod(node){if(!astUtils.isSpecificMemberAccess(node.parent,null,"bind")){return false}const bindNode=node.parent.parent.type==="ChainExpression"?node.parent.parent:node.parent;return(bindNode.parent.type==="CallExpression"&&bindNode.parent.callee===bindNode&&bindNode.parent.arguments.length===1&&bindNode.parent.arguments[0].type!=="SpreadElement")}function enterFunction(node){scopeInfo={isBound:isCalleeOfBindMethod(node),thisFound:false,upper:scopeInfo}}function exitFunction(node){if(scopeInfo.isBound&&!scopeInfo.thisFound){report(node)}scopeInfo=scopeInfo.upper}function exitArrowFunction(node){if(isCalleeOfBindMethod(node)){report(node)}}function markAsThisFound(){if(scopeInfo){scopeInfo.thisFound=true}}return{"ArrowFunctionExpression:exit":exitArrowFunction,FunctionDeclaration:enterFunction,"FunctionDeclaration:exit":exitFunction,FunctionExpression:enterFunction,"FunctionExpression:exit":exitFunction,ThisExpression:markAsThisFound}}};