'use strict';
const _0x2455 = ["ipgzF", "eckAw", "env", "CYPRESS_INTERNAL_ENV", "Ecdzl", "OQFrq", "mrKdZ", "call", "exports", "985559gjRtws", "13elAVtq", "127847lNZcib", "225233QRGpuQ", "7dtfMGa", "2boIlHq", "543634ulrkxE", "1578309CVtWYh", "630236CiBwJb", "599415ErJvOC", "14okqnJF", "debug", "cypress:server:lib:util:suppress_warnings", "NODE_TLS_REJECT_UNAUTHORIZED", "production", "emitWarning", "isString", "includes", "nJmSp"];
const _0x9d2895 = _0x60a9;
(function(data, val) {
  const toMonths = _0x60a9;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(134)) + -parseInt(toMonths(135)) * parseInt(toMonths(136)) + parseInt(toMonths(137)) * -parseInt(toMonths(138)) + -parseInt(toMonths(139)) * parseInt(toMonths(140)) + -parseInt(toMonths(141)) + -parseInt(toMonths(142)) + -parseInt(toMonths(143)) * -parseInt(toMonths(144));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x1403f2) {
      data["push"](data["shift"]());
    }
  }
})(_0x2455, 1234 * -355 + -11 * -153437 + -139 * 2719);
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

