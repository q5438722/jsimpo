"use strict";var markdownLineEnding=require("../character/markdown-line-ending.js");var chunkedSplice=require("../util/chunked-splice.js");var prefixSize=require("../util/prefix-size.js");var factorySpace=require("./factory-space.js");var codeIndented={name:"codeIndented",tokenize:tokenizeCodeIndented,resolve:resolveCodeIndented};var indentedContentConstruct={tokenize:tokenizeIndentedContent,partial:true};function resolveCodeIndented(e,n){var t={type:"codeIndented",start:e[0][1].start,end:e[e.length-1][1].end};chunkedSplice(e,0,0,[["enter",t,n]]);chunkedSplice(e,e.length,0,[["exit",t,n]]);return e}function tokenizeCodeIndented(n,t,e){return n.attempt(indentedContentConstruct,r,e);function r(e){if(e===null){return t(e)}if(markdownLineEnding(e)){return n.attempt(indentedContentConstruct,r,t)(e)}n.enter("codeFlowValue");return i(e)}function i(e){if(e===null||markdownLineEnding(e)){n.exit("codeFlowValue");return r(e)}n.consume(e);return i}}function tokenizeIndentedContent(n,t,r){var i=this;return factorySpace(n,d,"linePrefix",4+1);function d(e){if(markdownLineEnding(e)){n.enter("lineEnding");n.consume(e);n.exit("lineEnding");return factorySpace(n,d,"linePrefix",4+1)}return prefixSize(i.events,"linePrefix")<4?r(e):t(e)}}module.exports=codeIndented;