'use strict';
const Prism = require(_0x116069(307));
const prismComponents = require(_0x116069(308));
const getBaseLanguageName = (key, self = prismComponents) => {
  const zoneSymbol = _0x116069;
  const UPDATE_OPERATORS = {
    "lLqQs" : function(name, initialValue) {
      return name === initialValue;
    }
  };
  if (self["languages"][key]) {
    return key;
  }
  return Object[zoneSymbol(309)](self[zoneSymbol(310)])["find"]((name) => {
    const camelize = zoneSymbol;
    const {
      alias : data
    } = self[camelize(310)][name];
    if (!data) {
      return ![];
    }
    return Array[camelize(311)](data) ? data[camelize(312)](key) : UPDATE_OPERATORS[camelize(313)](data, key);
  });
};
function _0x3e43(isBgroundImg, stgs) {
  return _0x3e43 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-8195 + 17 * -379 + -14933 * -1);
    let _0x2f15de = _0x2837[isBgroundImg];
    return _0x2f15de;
  }, _0x3e43(isBgroundImg, stgs);
}
module[_0x116069(314)] = function build(excludeQuery) {
  const parseInt = _0x116069;
  const map = {
    "qhvYH" : function(name, initialValue) {
      return name === initialValue;
    },
    "GcEDL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const i = getBaseLanguageName(excludeQuery);
  if (!i) {
    throw new Error(parseInt(315) + excludeQuery + "'.");
  }
  if (Prism[parseInt(310)][i]) {
    return;
  }
  const obj = prismComponents["languages"][i];
  if (map["qhvYH"](obj["option"], parseInt(316))) {
    return;
  }
  if (obj[parseInt(317)]) {
    if (Array["isArray"](obj[parseInt(317)])) {
      obj[parseInt(317)][parseInt(318)](build);
    } else {
      build(obj["require"]);
    }
  }
  map[parseInt(319)](require, parseInt(320) + i + parseInt(321));
}, module["exports"][_0x116069(322)] = getBaseLanguageName;

