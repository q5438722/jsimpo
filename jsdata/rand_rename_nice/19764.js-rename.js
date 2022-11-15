'use strict';
var BaseController = function(r) {
  function SelectorRow() {
    return r.apply(this, arguments) || this;
  }
  babelHelpers.inheritsLoose(SelectorRow, r);
  return SelectorRow;
}(Chaplin.Controller);
var BaseController2 = function(r) {
  function SelectorRow() {
    return r.apply(this, arguments) || this;
  }
  babelHelpers.inheritsLoose(SelectorRow, r);
  return SelectorRow;
}(Chaplin.Controller.Another);

