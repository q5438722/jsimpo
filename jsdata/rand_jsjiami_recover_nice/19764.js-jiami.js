'use strict';
var BaseController = function(cellProps) {
  function children() {
    return cellProps["apply"](this, arguments) || this;
  }
  babelHelpers["inheritsLoose"](children, cellProps);
  return children;
}(Chaplin["Controller"]);
var BaseController2 = function(cellProps) {
  function children() {
    return cellProps["apply"](this, arguments) || this;
  }
  babelHelpers["inheritsLoose"](children, cellProps);
  return children;
}(Chaplin["Controller"]["Another"]);

