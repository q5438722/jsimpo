'use strict';
function _0x60a9(isBgroundImg, stgs) {
  return _0x60a9 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-8552 + 291 + -1 * -8395);
    let _0x1e3b93 = _0x2455[isBgroundImg];
    return _0x1e3b93;
  }, _0x60a9(isBgroundImg, stgs);
}
const _ = require("lodash");
const Debug = require(_0x9d2895(145));
const debug = Debug(_0x9d2895(146));
let suppressed = ![];
const suppress = () => {
  const freezeSuppress = _0x9d2895;
  const console = {
    "nJmSp" : freezeSuppress(147),
    "ipgzF" : function(name, initialValue) {
      return name === initialValue;
    },
    "eckAw" : "DEP0005",
    "Ecdzl" : freezeSuppress(148),
    "OQFrq" : function(require, load, callback) {
      return require(load, callback);
    },
    "mrKdZ" : "suppressed emitWarning from node: %o"
  };
  if (suppressed) {
    return;
  }
  suppressed = !![];
  const special = process[freezeSuppress(149)];
  process[freezeSuppress(149)] = (el, handler, a, ...argstring) => {
    const getConsoleMethod = freezeSuppress;
    if (_[getConsoleMethod(150)](el) && _[getConsoleMethod(151)](el, console[getConsoleMethod(152)])) {
      return;
    }
    if (console[getConsoleMethod(153)](a, console[getConsoleMethod(154)])) {
      return;
    }
    if (process[getConsoleMethod(155)][getConsoleMethod(156)] === console[getConsoleMethod(157)]) {
      console[getConsoleMethod(158)](debug, console[getConsoleMethod(159)], {
        "process" : process,
        "warning" : el,
        "type" : handler,
        "code" : a,
        "args" : argstring
      });
      return;
    }
    return special[getConsoleMethod(160)](process, el, handler, a, ...argstring);
  };
};
module[_0x9d2895(161)] = {
  "suppress" : suppress
};

