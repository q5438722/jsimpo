'use strict';
function _0x3038(isBgroundImg, stgs) {
  return _0x3038 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-1598 + 2056 + 167 * -1);
    let _0xf3b81d = _0xeed1[isBgroundImg];
    return _0xf3b81d;
  }, _0x3038(isBgroundImg, stgs);
}
const _ = require(_0x19c7eb(301));
const pluralize = require(_0x19c7eb(302));
const toPlural = (string) => {
  return pluralize(_["camelCase"](string));
};
const toSingular = (string) => {
  return _[_0x19c7eb(303)](pluralize["singular"](string));
};
const toInputName = (attr) => {
  return _["upperFirst"](toSingular(attr)) + _0x19c7eb(304);
};
module[_0x19c7eb(305)] = {
  "toSingular" : toSingular,
  "toPlural" : toPlural,
  "toInputName" : toInputName
};

