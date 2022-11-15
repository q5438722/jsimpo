'use strict';
let Array = function SelectorRow() {
  babelHelpers.classCallCheck(this, SelectorRow);
};
let List = function(Validatable) {
  function SelectorRow() {
    babelHelpers.classCallCheck(this, SelectorRow);
    return oldSetupComputes.apply(this, arguments);
  }
  babelHelpers.inherits(SelectorRow, Validatable);
  var oldSetupComputes = babelHelpers.createSuper(SelectorRow);
  return SelectorRow;
}(Array);

