"use strict";const createTree=require("functional-red-black-tree");const astUtils=require("./utils/ast-utils");const KNOWN_NODES=new Set(["AssignmentExpression","AssignmentPattern","ArrayExpression","ArrayPattern","ArrowFunctionExpression","AwaitExpression","BlockStatement","BinaryExpression","BreakStatement","CallExpression","CatchClause","ChainExpression","ClassBody","ClassDeclaration","ClassExpression","ConditionalExpression","ContinueStatement","DoWhileStatement","DebuggerStatement","EmptyStatement","ExperimentalRestProperty","ExperimentalSpreadProperty","ExpressionStatement","ForStatement","ForInStatement","ForOfStatement","FunctionDeclaration","FunctionExpression","Identifier","IfStatement","Literal","LabeledStatement","LogicalExpression","MemberExpression","MetaProperty","MethodDefinition","NewExpression","ObjectExpression","ObjectPattern","Program","Property","RestElement","ReturnStatement","SequenceExpression","SpreadElement","Super","SwitchCase","SwitchStatement","TaggedTemplateExpression","TemplateElement","TemplateLiteral","ThisExpression","ThrowStatement","TryStatement","UnaryExpression","UpdateExpression","VariableDeclaration","VariableDeclarator","WhileStatement","WithStatement","YieldExpression","JSXFragment","JSXOpeningFragment","JSXClosingFragment","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXEmptyExpression","JSXExpressionContainer","JSXElement","JSXClosingElement","JSXOpeningElement","JSXAttribute","JSXSpreadAttribute","JSXText","ExportDefaultDeclaration","ExportNamedDeclaration","ExportAllDeclaration","ExportSpecifier","ImportDeclaration","ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier","ImportExpression"]);class BinarySearchTree{constructor(){this._rbTree=createTree()}insert(key,value){const iterator=this._rbTree.find(key);if(iterator.valid){this._rbTree=iterator.update(value)}else{this._rbTree=this._rbTree.insert(key,value)}}findLe(key){const iterator=this._rbTree.le(key);return iterator&&{key:iterator.key,value:iterator.value}}deleteRange(start,end){if(start===end){return}const iterator=this._rbTree.ge(start);while(iterator.valid&&iterator.key<end){this._rbTree=this._rbTree.remove(iterator.key);iterator.next()}}}class TokenInfo{constructor(sourceCode){this.sourceCode=sourceCode;this.firstTokensByLineNumber=sourceCode.tokensAndComments.reduce((map,token)=>{if(!map.has(token.loc.start.line)){map.set(token.loc.start.line,token)}if(!map.has(token.loc.end.line)&&sourceCode.text.slice(token.range[1]-token.loc.end.column,token.range[1]).trim()){map.set(token.loc.end.line,token)}return map},new Map())}getFirstTokenOfLine(token){return this.firstTokensByLineNumber.get(token.loc.start.line)}isFirstTokenOfLine(token){return this.getFirstTokenOfLine(token)===token}getTokenIndent(token){return this.sourceCode.text.slice(token.range[0]-token.loc.start.column,token.range[0])}}class OffsetStorage{constructor(tokenInfo,indentSize,indentType){this._tokenInfo=tokenInfo;this._indentSize=indentSize;this._indentType=indentType;this._tree=new BinarySearchTree();this._tree.insert(0,{offset:0,from:null,force:false});this._lockedFirstTokens=new WeakMap();this._desiredIndentCache=new WeakMap();this._ignoredTokens=new WeakSet()}_getOffsetDescriptor(token){return this._tree.findLe(token.range[0]).value}matchOffsetOf(baseToken,offsetToken){this._lockedFirstTokens.set(offsetToken,baseToken)}setDesiredOffset(token,fromToken,offset){return this.setDesiredOffsets(token.range,fromToken,offset)}setDesiredOffsets(range,fromToken,offset,force){const descriptorToInsert={offset,from:fromToken,force};const descriptorAfterRange=this._tree.findLe(range[1]).value;const fromTokenIsInRange=fromToken&&fromToken.range[0]>=range[0]&&fromToken.range[1]<=range[1];const fromTokenDescriptor=fromTokenIsInRange&&this._getOffsetDescriptor(fromToken);this._tree.deleteRange(range[0]+1,range[1]);this._tree.insert(range[0],descriptorToInsert);if(fromTokenIsInRange){this._tree.insert(fromToken.range[0],fromTokenDescriptor);this._tree.insert(fromToken.range[1],descriptorToInsert)}this._tree.insert(range[1],descriptorAfterRange)}getDesiredIndent(token){if(!this._desiredIndentCache.has(token)){if(this._ignoredTokens.has(token)){this._desiredIndentCache.set(token,this._tokenInfo.getTokenIndent(token))}else if(this._lockedFirstTokens.has(token)){const firstToken=this._lockedFirstTokens.get(token);this._desiredIndentCache.set(token,this.getDesiredIndent(this._tokenInfo.getFirstTokenOfLine(firstToken))+this._indentType.repeat(firstToken.loc.start.column-this._tokenInfo.getFirstTokenOfLine(firstToken).loc.start.column))}else{const offsetInfo=this._getOffsetDescriptor(token);const offset=(offsetInfo.from&&offsetInfo.from.loc.start.line===token.loc.start.line&&!/^\s*?\n/u.test(token.value)&&!offsetInfo.force)?0:offsetInfo.offset*this._indentSize;this._desiredIndentCache.set(token,(offsetInfo.from?this.getDesiredIndent(offsetInfo.from):"")+this._indentType.repeat(offset))}}return this._desiredIndentCache.get(token)}ignoreToken(token){if(this._tokenInfo.isFirstTokenOfLine(token)){this._ignoredTokens.add(token)}}getFirstDependency(token){return this._getOffsetDescriptor(token).from}}const ELEMENT_LIST_SCHEMA={oneOf:[{type:"integer",minimum:0},{enum:["first","off"]}]};module.exports={meta:{type:"layout",docs:{description:"enforce consistent indentation",category:"Stylistic Issues",recommended:false,url:"https://eslint.org/docs/rules/indent"},fixable:"whitespace",schema:[{oneOf:[{enum:["tab"]},{type:"integer",minimum:0}]},{type:"object",properties:{SwitchCase:{type:"integer",minimum:0,default:0},VariableDeclarator:{oneOf:[ELEMENT_LIST_SCHEMA,{type:"object",properties:{var:ELEMENT_LIST_SCHEMA,let:ELEMENT_LIST_SCHEMA,const:ELEMENT_LIST_SCHEMA},additionalProperties:false}]},outerIIFEBody:{oneOf:[{type:"integer",minimum:0},{enum:["off"]}]},MemberExpression:{oneOf:[{type:"integer",minimum:0},{enum:["off"]}]},FunctionDeclaration:{type:"object",properties:{parameters:ELEMENT_LIST_SCHEMA,body:{type:"integer",minimum:0}},additionalProperties:false},FunctionExpression:{type:"object",properties:{parameters:ELEMENT_LIST_SCHEMA,body:{type:"integer",minimum:0}},additionalProperties:false},CallExpression:{type:"object",properties:{arguments:ELEMENT_LIST_SCHEMA},additionalProperties:false},ArrayExpression:ELEMENT_LIST_SCHEMA,ObjectExpression:ELEMENT_LIST_SCHEMA,ImportDeclaration:ELEMENT_LIST_SCHEMA,flatTernaryExpressions:{type:"boolean",default:false},offsetTernaryExpressions:{type:"boolean",default:false},ignoredNodes:{type:"array",items:{type:"string",not:{pattern:":exit$"}}},ignoreComments:{type:"boolean",default:false}},additionalProperties:false}],messages:{wrongIndentation:"Expected indentation of {{expected}} but found {{actual}}."}},create(context){const DEFAULT_VARIABLE_INDENT=1;const DEFAULT_PARAMETER_INDENT=1;const DEFAULT_FUNCTION_BODY_INDENT=1;let indentType="space";let indentSize=4;const options={SwitchCase:0,VariableDeclarator:{var:DEFAULT_VARIABLE_INDENT,let:DEFAULT_VARIABLE_INDENT,const:DEFAULT_VARIABLE_INDENT},outerIIFEBody:1,FunctionDeclaration:{parameters:DEFAULT_PARAMETER_INDENT,body:DEFAULT_FUNCTION_BODY_INDENT},FunctionExpression:{parameters:DEFAULT_PARAMETER_INDENT,body:DEFAULT_FUNCTION_BODY_INDENT},CallExpression:{arguments:DEFAULT_PARAMETER_INDENT},MemberExpression:1,ArrayExpression:1,ObjectExpression:1,ImportDeclaration:1,flatTernaryExpressions:false,ignoredNodes:[],ignoreComments:false};if(context.options.length){if(context.options[0]==="tab"){indentSize=1;indentType="tab"}else{indentSize=context.options[0];indentType="space"}if(context.options[1]){Object.assign(options,context.options[1]);if(typeof options.VariableDeclarator==="number"||options.VariableDeclarator==="first"){options.VariableDeclarator={var:options.VariableDeclarator,let:options.VariableDeclarator,const:options.VariableDeclarator}}}}const sourceCode=context.getSourceCode();const tokenInfo=new TokenInfo(sourceCode);const offsets=new OffsetStorage(tokenInfo,indentSize,indentType==="space"?" ":"\t");const parameterParens=new WeakSet();function createErrorMessageData(expectedAmount,actualSpaces,actualTabs){const expectedStatement=`${expectedAmount}${indentType}${expectedAmount===1?"":"s"}`;const foundSpacesWord=`space${actualSpaces===1?"":"s"}`;const foundTabsWord=`tab${actualTabs===1?"":"s"}`;let foundStatement;if(actualSpaces>0){foundStatement=indentType==="space"?actualSpaces:`${actualSpaces}${foundSpacesWord}`}else if(actualTabs>0){foundStatement=indentType==="tab"?actualTabs:`${actualTabs}${foundTabsWord}`}else{foundStatement="0"}return{expected:expectedStatement,actual:foundStatement}}function report(token,neededIndent){const actualIndent=Array.from(tokenInfo.getTokenIndent(token));const numSpaces=actualIndent.filter(char=>char===" ").length;const numTabs=actualIndent.filter(char=>char==="\t").length;context.report({node:token,messageId:"wrongIndentation",data:createErrorMessageData(neededIndent.length,numSpaces,numTabs),loc:{start:{line:token.loc.start.line,column:0},end:{line:token.loc.start.line,column:token.loc.start.column}},fix(fixer){const range=[token.range[0]-token.loc.start.column,token.range[0]];const newText=neededIndent;return fixer.replaceTextRange(range,newText)}})}function validateTokenIndent(token,desiredIndent){const indentation=tokenInfo.getTokenIndent(token);return indentation===desiredIndent||indentation.includes(" ")&&indentation.includes("\t")}function isOuterIIFE(node){if(!node.parent||node.parent.type!=="CallExpression"||node.parent.callee!==node){return false}let statement=node.parent&&node.parent.parent;while(statement.type==="UnaryExpression"&&["!","~","+","-"].indexOf(statement.operator)>-1||statement.type==="AssignmentExpression"||statement.type==="LogicalExpression"||statement.type==="SequenceExpression"||statement.type==="VariableDeclarator"){statement=statement.parent}return(statement.type==="ExpressionStatement"||statement.type==="VariableDeclaration")&&statement.parent.type==="Program"}function countTrailingLinebreaks(string){const trailingWhitespace=string.match(/\s*$/u)[0];const linebreakMatches=trailingWhitespace.match(astUtils.createGlobalLinebreakMatcher());return linebreakMatches===null?0:linebreakMatches.length}function addElementListIndent(elements,startToken,endToken,offset){function getFirstToken(element){let token=sourceCode.getTokenBefore(element);while(astUtils.isOpeningParenToken(token)&&token!==startToken){token=sourceCode.getTokenBefore(token)}return sourceCode.getTokenAfter(token)}offsets.setDesiredOffsets([startToken.range[1],endToken.range[0]],startToken,typeof offset==="number"?offset:1);offsets.setDesiredOffset(endToken,startToken,0);if(offset==="first"&&elements.length&&!elements[0]){return}elements.forEach((element,index)=>{if(!element){return}if(offset==="off"){offsets.ignoreToken(getFirstToken(element))}if(index===0){return}if(offset==="first"&&tokenInfo.isFirstTokenOfLine(getFirstToken(element))){offsets.matchOffsetOf(getFirstToken(elements[0]),getFirstToken(element))}else{const previousElement=elements[index-1];const firstTokenOfPreviousElement=previousElement&&getFirstToken(previousElement);const previousElementLastToken=previousElement&&sourceCode.getLastToken(previousElement);if(previousElement&&previousElementLastToken.loc.end.line-countTrailingLinebreaks(previousElementLastToken.value)>startToken.loc.end.line){offsets.setDesiredOffsets([previousElement.range[1],element.range[1]],firstTokenOfPreviousElement,0)}}})}function addBlocklessNodeIndent(node){if(node.type!=="BlockStatement"){const lastParentToken=sourceCode.getTokenBefore(node,astUtils.isNotOpeningParenToken);let firstBodyToken=sourceCode.getFirstToken(node);let lastBodyToken=sourceCode.getLastToken(node);while(astUtils.isOpeningParenToken(sourceCode.getTokenBefore(firstBodyToken))&&astUtils.isClosingParenToken(sourceCode.getTokenAfter(lastBodyToken))){firstBodyToken=sourceCode.getTokenBefore(firstBodyToken);lastBodyToken=sourceCode.getTokenAfter(lastBodyToken)}offsets.setDesiredOffsets([firstBodyToken.range[0],lastBodyToken.range[1]],lastParentToken,1);const lastToken=sourceCode.getLastToken(node);if(node.type!=="EmptyStatement"&&astUtils.isSemicolonToken(lastToken)){offsets.setDesiredOffset(lastToken,lastParentToken,0)}}}function addFunctionCallIndent(node){let openingParen;if(node.arguments.length){openingParen=sourceCode.getFirstTokenBetween(node.callee,node.arguments[0],astUtils.isOpeningParenToken)}else{openingParen=sourceCode.getLastToken(node,1)}const closingParen=sourceCode.getLastToken(node);parameterParens.add(openingParen);parameterParens.add(closingParen);if(node.optional){const dotToken=sourceCode.getTokenAfter(node.callee,astUtils.isQuestionDotToken);const calleeParenCount=sourceCode.getTokensBetween(node.callee,dotToken,{filter:astUtils.isClosingParenToken}).length;const firstTokenOfCallee=calleeParenCount?sourceCode.getTokenBefore(node.callee,{skip:calleeParenCount-1}):sourceCode.getFirstToken(node.callee);const lastTokenOfCallee=sourceCode.getTokenBefore(dotToken);const offsetBase=lastTokenOfCallee.loc.end.line===openingParen.loc.start.line?lastTokenOfCallee:firstTokenOfCallee;offsets.setDesiredOffset(dotToken,offsetBase,1)}const offsetAfterToken=node.callee.type==="TaggedTemplateExpression"?sourceCode.getFirstToken(node.callee.quasi):openingParen;const offsetToken=sourceCode.getTokenBefore(offsetAfterToken);offsets.setDesiredOffset(openingParen,offsetToken,0);addElementListIndent(node.arguments,openingParen,closingParen,options.CallExpression.arguments)}function addParensIndent(tokens){const parenStack=[];const parenPairs=[];tokens.forEach(nextToken=>{if(astUtils.isOpeningParenToken(nextToken)){parenStack.push(nextToken)}else if(astUtils.isClosingParenToken(nextToken)){parenPairs.unshift({left:parenStack.pop(),right:nextToken})}});parenPairs.forEach(pair=>{const leftParen=pair.left;const rightParen=pair.right;if(!parameterParens.has(leftParen)&&!parameterParens.has(rightParen)){const parenthesizedTokens=new Set(sourceCode.getTokensBetween(leftParen,rightParen));parenthesizedTokens.forEach(token=>{if(!parenthesizedTokens.has(offsets.getFirstDependency(token))){offsets.setDesiredOffset(token,leftParen,1)}})}offsets.setDesiredOffset(rightParen,leftParen,0)})}function ignoreNode(node){const unknownNodeTokens=new Set(sourceCode.getTokens(node,{includeComments:true}));unknownNodeTokens.forEach(token=>{if(!unknownNodeTokens.has(offsets.getFirstDependency(token))){const firstTokenOfLine=tokenInfo.getFirstTokenOfLine(token);if(token===firstTokenOfLine){offsets.ignoreToken(token)}else{offsets.setDesiredOffset(token,firstTokenOfLine,0)}}})}function isOnFirstLineOfStatement(token,leafNode){let node=leafNode;while(node.parent&&!node.parent.type.endsWith("Statement")&&!node.parent.type.endsWith("Declaration")){node=node.parent}node=node.parent;return!node||node.loc.start.line===token.loc.start.line}function hasBlankLinesBetween(firstToken,secondToken){const firstTokenLine=firstToken.loc.end.line;const secondTokenLine=secondToken.loc.start.line;if(firstTokenLine===secondTokenLine||firstTokenLine===secondTokenLine-1){return false}for(let line=firstTokenLine+1;line<secondTokenLine;++line){if(!tokenInfo.firstTokensByLineNumber.has(line)){return true}}return false}const ignoredNodeFirstTokens=new Set();const baseOffsetListeners={"ArrayExpression, ArrayPattern"(node){const openingBracket=sourceCode.getFirstToken(node);const closingBracket=sourceCode.getTokenAfter([...node.elements].reverse().find(_=>_)||openingBracket,astUtils.isClosingBracketToken);addElementListIndent(node.elements,openingBracket,closingBracket,options.ArrayExpression)},"ObjectExpression, ObjectPattern"(node){const openingCurly=sourceCode.getFirstToken(node);const closingCurly=sourceCode.getTokenAfter(node.properties.length?node.properties[node.properties.length-1]:openingCurly,astUtils.isClosingBraceToken);addElementListIndent(node.properties,openingCurly,closingCurly,options.ObjectExpression)},ArrowFunctionExpression(node){const maybeOpeningParen=sourceCode.getFirstToken(node,{skip:node.async?1:0});if(astUtils.isOpeningParenToken(maybeOpeningParen)){const openingParen=maybeOpeningParen;const closingParen=sourceCode.getTokenBefore(node.body,astUtils.isClosingParenToken);parameterParens.add(openingParen);parameterParens.add(closingParen);addElementListIndent(node.params,openingParen,closingParen,options.FunctionExpression.parameters)}addBlocklessNodeIndent(node.body)},AssignmentExpression(node){const operator=sourceCode.getFirstTokenBetween(node.left,node.right,token=>token.value===node.operator);offsets.setDesiredOffsets([operator.range[0],node.range[1]],sourceCode.getLastToken(node.left),1);offsets.ignoreToken(operator);offsets.ignoreToken(sourceCode.getTokenAfter(operator))},"BinaryExpression, LogicalExpression"(node){const operator=sourceCode.getFirstTokenBetween(node.left,node.right,token=>token.value===node.operator);const tokenAfterOperator=sourceCode.getTokenAfter(operator);offsets.ignoreToken(operator);offsets.ignoreToken(tokenAfterOperator);offsets.setDesiredOffset(tokenAfterOperator,operator,0)},"BlockStatement, ClassBody"(node){let blockIndentLevel;if(node.parent&&isOuterIIFE(node.parent)){blockIndentLevel=options.outerIIFEBody}else if(node.parent&&(node.parent.type==="FunctionExpression"||node.parent.type==="ArrowFunctionExpression")){blockIndentLevel=options.FunctionExpression.body}else if(node.parent&&node.parent.type==="FunctionDeclaration"){blockIndentLevel=options.FunctionDeclaration.body}else{blockIndentLevel=1}if(!astUtils.STATEMENT_LIST_PARENTS.has(node.parent.type)){offsets.setDesiredOffset(sourceCode.getFirstToken(node),sourceCode.getFirstToken(node.parent),0)}addElementListIndent(node.body,sourceCode.getFirstToken(node),sourceCode.getLastToken(node),blockIndentLevel)},CallExpression:addFunctionCallIndent,"ClassDeclaration[superClass], ClassExpression[superClass]"(node){const classToken=sourceCode.getFirstToken(node);const extendsToken=sourceCode.getTokenBefore(node.superClass,astUtils.isNotOpeningParenToken);offsets.setDesiredOffsets([extendsToken.range[0],node.body.range[0]],classToken,1)},ConditionalExpression(node){const firstToken=sourceCode.getFirstToken(node);if(!options.flatTernaryExpressions||!astUtils.isTokenOnSameLine(node.test,node.consequent)||isOnFirstLineOfStatement(firstToken,node)){const questionMarkToken=sourceCode.getFirstTokenBetween(node.test,node.consequent,token=>token.type==="Punctuator"&&token.value==="?");const colonToken=sourceCode.getFirstTokenBetween(node.consequent,node.alternate,token=>token.type==="Punctuator"&&token.value===":");const firstConsequentToken=sourceCode.getTokenAfter(questionMarkToken);const lastConsequentToken=sourceCode.getTokenBefore(colonToken);const firstAlternateToken=sourceCode.getTokenAfter(colonToken);offsets.setDesiredOffset(questionMarkToken,firstToken,1);offsets.setDesiredOffset(colonToken,firstToken,1);offsets.setDesiredOffset(firstConsequentToken,firstToken,firstConsequentToken.type==="Punctuator"&&options.offsetTernaryExpressions?2:1);if(lastConsequentToken.loc.end.line===firstAlternateToken.loc.start.line){offsets.setDesiredOffset(firstAlternateToken,firstConsequentToken,0)}else{offsets.setDesiredOffset(firstAlternateToken,firstToken,firstAlternateToken.type==="Punctuator"&&options.offsetTernaryExpressions?2:1)}}},"DoWhileStatement, WhileStatement, ForInStatement, ForOfStatement":node=>addBlocklessNodeIndent(node.body),ExportNamedDeclaration(node){if(node.declaration===null){const closingCurly=sourceCode.getLastToken(node,astUtils.isClosingBraceToken);addElementListIndent(node.specifiers,sourceCode.getFirstToken(node,{skip:1}),closingCurly,1);if(node.source){offsets.setDesiredOffsets([closingCurly.range[1],node.range[1]],sourceCode.getFirstToken(node),1)}}},ForStatement(node){const forOpeningParen=sourceCode.getFirstToken(node,1);if(node.init){offsets.setDesiredOffsets(node.init.range,forOpeningParen,1)}if(node.test){offsets.setDesiredOffsets(node.test.range,forOpeningParen,1)}if(node.update){offsets.setDesiredOffsets(node.update.range,forOpeningParen,1)}addBlocklessNodeIndent(node.body)},"FunctionDeclaration, FunctionExpression"(node){const closingParen=sourceCode.getTokenBefore(node.body);const openingParen=sourceCode.getTokenBefore(node.params.length?node.params[0]:closingParen);parameterParens.add(openingParen);parameterParens.add(closingParen);addElementListIndent(node.params,openingParen,closingParen,options[node.type].parameters)},IfStatement(node){addBlocklessNodeIndent(node.consequent);if(node.alternate&&node.alternate.type!=="IfStatement"){addBlocklessNodeIndent(node.alternate)}},ImportDeclaration(node){if(node.specifiers.some(specifier=>specifier.type==="ImportSpecifier")){const openingCurly=sourceCode.getFirstToken(node,astUtils.isOpeningBraceToken);const closingCurly=sourceCode.getLastToken(node,astUtils.isClosingBraceToken);addElementListIndent(node.specifiers.filter(specifier=>specifier.type==="ImportSpecifier"),openingCurly,closingCurly,options.ImportDeclaration)}const fromToken=sourceCode.getLastToken(node,token=>token.type==="Identifier"&&token.value==="from");const sourceToken=sourceCode.getLastToken(node,token=>token.type==="String");const semiToken=sourceCode.getLastToken(node,token=>token.type==="Punctuator"&&token.value===";");if(fromToken){const end=semiToken&&semiToken.range[1]===sourceToken.range[1]?node.range[1]:sourceToken.range[1];offsets.setDesiredOffsets([fromToken.range[0],end],sourceCode.getFirstToken(node),1)}},ImportExpression(node){const openingParen=sourceCode.getFirstToken(node,1);const closingParen=sourceCode.getLastToken(node);parameterParens.add(openingParen);parameterParens.add(closingParen);offsets.setDesiredOffset(openingParen,sourceCode.getTokenBefore(openingParen),0);addElementListIndent([node.source],openingParen,closingParen,options.CallExpression.arguments)},"MemberExpression, JSXMemberExpression, MetaProperty"(node){const object=node.type==="MetaProperty"?node.meta:node.object;const firstNonObjectToken=sourceCode.getFirstTokenBetween(object,node.property,astUtils.isNotClosingParenToken);const secondNonObjectToken=sourceCode.getTokenAfter(firstNonObjectToken);const objectParenCount=sourceCode.getTokensBetween(object,node.property,{filter:astUtils.isClosingParenToken}).length;const firstObjectToken=objectParenCount?sourceCode.getTokenBefore(object,{skip:objectParenCount-1}):sourceCode.getFirstToken(object);const lastObjectToken=sourceCode.getTokenBefore(firstNonObjectToken);const firstPropertyToken=node.computed?firstNonObjectToken:secondNonObjectToken;if(node.computed){offsets.setDesiredOffset(sourceCode.getLastToken(node),firstNonObjectToken,0);offsets.setDesiredOffsets(node.property.range,firstNonObjectToken,1)}const offsetBase=lastObjectToken.loc.end.line===firstPropertyToken.loc.start.line?lastObjectToken:firstObjectToken;if(typeof options.MemberExpression==="number"){offsets.setDesiredOffset(firstNonObjectToken,offsetBase,options.MemberExpression);offsets.setDesiredOffset(secondNonObjectToken,node.computed?firstNonObjectToken:offsetBase,options.MemberExpression)}else{offsets.ignoreToken(firstNonObjectToken);offsets.ignoreToken(secondNonObjectToken);offsets.setDesiredOffset(firstNonObjectToken,offsetBase,0);offsets.setDesiredOffset(secondNonObjectToken,firstNonObjectToken,0)}},NewExpression(node){if(node.arguments.length>0||astUtils.isClosingParenToken(sourceCode.getLastToken(node))&&astUtils.isOpeningParenToken(sourceCode.getLastToken(node,1))){addFunctionCallIndent(node)}},Property(node){if(!node.shorthand&&!node.method&&node.kind==="init"){const colon=sourceCode.getFirstTokenBetween(node.key,node.value,astUtils.isColonToken);offsets.ignoreToken(sourceCode.getTokenAfter(colon))}},SwitchStatement(node){const openingCurly=sourceCode.getTokenAfter(node.discriminant,astUtils.isOpeningBraceToken);const closingCurly=sourceCode.getLastToken(node);offsets.setDesiredOffsets([openingCurly.range[1],closingCurly.range[0]],openingCurly,options.SwitchCase);if(node.cases.length){sourceCode.getTokensBetween(node.cases[node.cases.length-1],closingCurly,{includeComments:true,filter:astUtils.isCommentToken}).forEach(token=>offsets.ignoreToken(token))}},SwitchCase(node){if(!(node.consequent.length===1&&node.consequent[0].type==="BlockStatement")){const caseKeyword=sourceCode.getFirstToken(node);const tokenAfterCurrentCase=sourceCode.getTokenAfter(node);offsets.setDesiredOffsets([caseKeyword.range[1],tokenAfterCurrentCase.range[0]],caseKeyword,1)}},TemplateLiteral(node){node.expressions.forEach((expression,index)=>{const previousQuasi=node.quasis[index];const nextQuasi=node.quasis[index+1];const tokenToAlignFrom=previousQuasi.loc.start.line===previousQuasi.loc.end.line?sourceCode.getFirstToken(previousQuasi):null;offsets.setDesiredOffsets([previousQuasi.range[1],nextQuasi.range[0]],tokenToAlignFrom,1);offsets.setDesiredOffset(sourceCode.getFirstToken(nextQuasi),tokenToAlignFrom,0)})},VariableDeclaration(node){let variableIndent=Object.prototype.hasOwnProperty.call(options.VariableDeclarator,node.kind)?options.VariableDeclarator[node.kind]:DEFAULT_VARIABLE_INDENT;const firstToken=sourceCode.getFirstToken(node),lastToken=sourceCode.getLastToken(node);if(options.VariableDeclarator[node.kind]==="first"){if(node.declarations.length>1){addElementListIndent(node.declarations,firstToken,lastToken,"first");return}variableIndent=DEFAULT_VARIABLE_INDENT}if(node.declarations[node.declarations.length-1].loc.start.line>node.loc.start.line){offsets.setDesiredOffsets(node.range,firstToken,variableIndent,true)}else{offsets.setDesiredOffsets(node.range,firstToken,variableIndent)}if(astUtils.isSemicolonToken(lastToken)){offsets.ignoreToken(lastToken)}},VariableDeclarator(node){if(node.init){const equalOperator=sourceCode.getTokenBefore(node.init,astUtils.isNotOpeningParenToken);const tokenAfterOperator=sourceCode.getTokenAfter(equalOperator);offsets.ignoreToken(equalOperator);offsets.ignoreToken(tokenAfterOperator);offsets.setDesiredOffsets([tokenAfterOperator.range[0],node.range[1]],equalOperator,1);offsets.setDesiredOffset(equalOperator,sourceCode.getLastToken(node.id),0)}},"JSXAttribute[value]"(node){const equalsToken=sourceCode.getFirstTokenBetween(node.name,node.value,token=>token.type==="Punctuator"&&token.value==="=");offsets.setDesiredOffsets([equalsToken.range[0],node.value.range[1]],sourceCode.getFirstToken(node.name),1)},JSXElement(node){if(node.closingElement){addElementListIndent(node.children,sourceCode.getFirstToken(node.openingElement),sourceCode.getFirstToken(node.closingElement),1)}},JSXOpeningElement(node){const firstToken=sourceCode.getFirstToken(node);let closingToken;if(node.selfClosing){closingToken=sourceCode.getLastToken(node,{skip:1});offsets.setDesiredOffset(sourceCode.getLastToken(node),closingToken,0)}else{closingToken=sourceCode.getLastToken(node)}offsets.setDesiredOffsets(node.name.range,sourceCode.getFirstToken(node));addElementListIndent(node.attributes,firstToken,closingToken,1)},JSXClosingElement(node){const firstToken=sourceCode.getFirstToken(node);offsets.setDesiredOffsets(node.name.range,firstToken,1)},JSXFragment(node){const firstOpeningToken=sourceCode.getFirstToken(node.openingFragment);const firstClosingToken=sourceCode.getFirstToken(node.closingFragment);addElementListIndent(node.children,firstOpeningToken,firstClosingToken,1)},JSXOpeningFragment(node){const firstToken=sourceCode.getFirstToken(node);const closingToken=sourceCode.getLastToken(node);offsets.setDesiredOffsets(node.range,firstToken,1);offsets.matchOffsetOf(firstToken,closingToken)},JSXClosingFragment(node){const firstToken=sourceCode.getFirstToken(node);const slashToken=sourceCode.getLastToken(node,{skip:1});const closingToken=sourceCode.getLastToken(node);const tokenToMatch=astUtils.isTokenOnSameLine(slashToken,closingToken)?slashToken:closingToken;offsets.setDesiredOffsets(node.range,firstToken,1);offsets.matchOffsetOf(firstToken,tokenToMatch)},JSXExpressionContainer(node){const openingCurly=sourceCode.getFirstToken(node);const closingCurly=sourceCode.getLastToken(node);offsets.setDesiredOffsets([openingCurly.range[1],closingCurly.range[0]],openingCurly,1)},JSXSpreadAttribute(node){const openingCurly=sourceCode.getFirstToken(node);const closingCurly=sourceCode.getLastToken(node);offsets.setDesiredOffsets([openingCurly.range[1],closingCurly.range[0]],openingCurly,1)},"*"(node){const firstToken=sourceCode.getFirstToken(node);if(firstToken&&!ignoredNodeFirstTokens.has(firstToken)){offsets.setDesiredOffsets(node.range,firstToken,0)}}};const listenerCallQueue=[];const offsetListeners={};for(const[selector,listener]of Object.entries(baseOffsetListeners)){offsetListeners[selector]=node=>listenerCallQueue.push({listener,node})}const ignoredNodes=new Set();function addToIgnoredNodes(node){ignoredNodes.add(node);ignoredNodeFirstTokens.add(sourceCode.getFirstToken(node))}const ignoredNodeListeners=options.ignoredNodes.reduce((listeners,ignoredSelector)=>Object.assign(listeners,{[ignoredSelector]:addToIgnoredNodes}),{});return Object.assign(offsetListeners,ignoredNodeListeners,{"*:exit"(node){if(!KNOWN_NODES.has(node.type)){addToIgnoredNodes(node)}},"Program:exit"(){if(options.ignoreComments){sourceCode.getAllComments().forEach(comment=>offsets.ignoreToken(comment))}listenerCallQueue.filter(nodeInfo=>!ignoredNodes.has(nodeInfo.node)).forEach(nodeInfo=>nodeInfo.listener(nodeInfo.node));ignoredNodes.forEach(ignoreNode);addParensIndent(sourceCode.ast.tokens);const precedingTokens=sourceCode.ast.comments.reduce((commentMap,comment)=>{const tokenOrCommentBefore=sourceCode.getTokenBefore(comment,{includeComments:true});return commentMap.set(comment,commentMap.has(tokenOrCommentBefore)?commentMap.get(tokenOrCommentBefore):tokenOrCommentBefore)},new WeakMap());sourceCode.lines.forEach((line,lineIndex)=>{const lineNumber=lineIndex+1;if(!tokenInfo.firstTokensByLineNumber.has(lineNumber)){return}const firstTokenOfLine=tokenInfo.firstTokensByLineNumber.get(lineNumber);if(firstTokenOfLine.loc.start.line!==lineNumber){return}if(astUtils.isCommentToken(firstTokenOfLine)){const tokenBefore=precedingTokens.get(firstTokenOfLine);const tokenAfter=tokenBefore?sourceCode.getTokenAfter(tokenBefore):sourceCode.ast.tokens[0];const mayAlignWithBefore=tokenBefore&&!hasBlankLinesBetween(tokenBefore,firstTokenOfLine);const mayAlignWithAfter=tokenAfter&&!hasBlankLinesBetween(firstTokenOfLine,tokenAfter);if(tokenAfter&&astUtils.isSemicolonToken(tokenAfter)&&!astUtils.isTokenOnSameLine(firstTokenOfLine,tokenAfter)){offsets.setDesiredOffset(firstTokenOfLine,tokenAfter,0)}if(mayAlignWithBefore&&validateTokenIndent(firstTokenOfLine,offsets.getDesiredIndent(tokenBefore))||mayAlignWithAfter&&validateTokenIndent(firstTokenOfLine,offsets.getDesiredIndent(tokenAfter))){return}}if(validateTokenIndent(firstTokenOfLine,offsets.getDesiredIndent(firstTokenOfLine))){return}report(firstTokenOfLine,offsets.getDesiredIndent(firstTokenOfLine))})}})}};