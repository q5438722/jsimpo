'use strict';
const leadingTextRegExp = /["'&<>]/;
function escapeHtml(str) {
  const string = "" + str;
  const matchFirst = leadingTextRegExp.exec(string);
  if (!matchFirst) {
    return string;
  }
  let hexValStr;
  let res = "";
  let index;
  let lastIndex = 0;
  index = matchFirst.index;
  for (; index < string.length; index++) {
    switch(string.charCodeAt(index)) {
      case 34:
        hexValStr = "&quot;";
        break;
      case 38:
        hexValStr = "&amp;";
        break;
      case 39:
        hexValStr = "&#x27;";
        break;
      case 60:
        hexValStr = "&lt;";
        break;
      case 62:
        hexValStr = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      res = res + string.substring(lastIndex, index);
    }
    lastIndex = index + 1;
    res = res + hexValStr;
  }
  return lastIndex !== index ? res + string.substring(lastIndex, index) : res;
}
function render(date) {
  if (typeof date === "boolean" || typeof date === "number") {
    return "" + date;
  }
  return escapeHtml(date);
}
export default render;

