'use strict';
import{
  injectGlobal as injectGlobal
}from "@emotion/css";
const colors = {
  dark : `#282c34`,
  white : `#ffffff`
};
const options = {
  char : `#D8DEE9`,
  comment : `#999999`,
  keyword : `#c5a5c5`,
  lineHighlight : `#14161a`,
  primitive : `#5a9bcf`,
  string : `#8dc891`,
  variable : `#d7deea`,
  boolean : `#ff8b50`,
  punctuation : `#5FB3B3`,
  tag : `#fc929e`,
  function : `#79b6f2`,
  className : `#FAC863`,
  method : `#6699CC`,
  operator : `#fc929e`
};
injectGlobal`\n  .gatsby-highlight {\n    background: ${colors.dark};\n    color: ${colors.white};\n    border-radius: 1em;\n    overflow: auto;\n    tab-size: 1.5em;\n    padding: 1em;\n    margin: 1em 0;\n  }\n  .gatsby-highlight code[class*="language-"],\n  .gatsby-highlight pre[class*="language-"]\n  {\n    height: auto !important;\n    margin: 1rem;\n    font-size: 14px;\n    line-height: 20px;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n  code {\n  font-size: 1em;\n  font-family: 'Source Code Pro',\n  ;\n  }\n  .gatsby-highlight + .gatsby-highlight {\n    margin-top: 1.250em;\n  }\n  .gatsby-highlight-code-line {\n    background-color: ${options.lineHighlight};\n    display: block;\n    margin: -0.125rem calc(-1rem - 15px);\n    padding: 0.125rem calc(1rem + 15px);\n  }\n  .token.attr-name {\n    color: ${options.keyword};\n  }\n  .token.comment,\n  .token.block-comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata\n  {\n    color: ${options.comment};\n  }\n  .token.property,\n  .token.number,\n  .token.function-name,\n  .token.constant,\n  .token.symbol,\n  .token.deleted\n  {\n    color: ${options.primitive};\n  }\n  .token.boolean {\n    color: ${options.boolean};\n  }\n  span.token.tag {\n    color: ${options.tag};\n  }\n  .token.string {\n    color: ${options.string};\n  }\n  .token.punctuation {\n    color: ${options.punctuation};\n  }\n  .token.selector,\n  .token.char,\n  .token.builtin,\n  .token.inserted\n  {\n    color: ${options.char};\n  }\n  .token.function {\n    color: ${options.function};\n  }\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable\n  {\n    color: ${options.variable};\n  }\n  .token.attr-value {\n    color: ${options.string};\n  }\n  .token.keyword {\n    color: ${options.keyword};\n  }\n  .token.atrule,\n  .token.class-name\n  {\n    color: ${options.className};\n  }\n  .token.important {\n    font-weight: 400;\n  }\n  .token.bold {\n    font-weight: 700;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n  .token.entity {\n    cursor: help;\n  }\n  .namespace {\n    opacity: 0.7;\n  }\n`;

