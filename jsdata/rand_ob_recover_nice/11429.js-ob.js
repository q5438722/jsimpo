'use strict';
const yup = require(_0x3692f2(231));
const {
  formatYupErrors : formatYupErrors
} = require(_0x3692f2(232));
const {
  isValidCategoryName : isValidCategoryName
} = require(_0x3692f2(233));
module["exports"] = (dayNamesShort) => {
  const getField = _0x3692f2;
  return componentCategorySchema["validate"](dayNamesShort, {
    "strict" : !![],
    "abortEarly" : ![]
  })[getField(234)]((mmCoreSplitViewBlock) => {
    return Promise[getField(235)](formatYupErrors(mmCoreSplitViewBlock));
  });
};
function _0x3548(isBgroundImg, stgs) {
  return _0x3548 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-4982 + -1 * 7253 + 12455);
    let _0x4ff844 = _0x6580[isBgroundImg];
    return _0x4ff844;
  }, _0x3548(isBgroundImg, stgs);
}
const componentCategorySchema = yup[_0x3692f2(236)]({
  "name" : yup[_0x3692f2(237)]()[_0x3692f2(238)](7001 * 1 + -11 * 527 + -1 * 1201)[_0x3692f2(239)](isValidCategoryName)[_0x3692f2(240)](_0x3692f2(241))
})[_0x3692f2(242)]();

