'use strict';
const _0x1b4f = ["@tryghost/errors", "../../../../shared/url-utils", "exports", "/page/(.*)?/", "IcnBZ", "HgOBI", "uXoKX", "UUAbP", "YHooE", "NotFoundError", "params", "page", "tmoxL", "84215bcTESz", "130nSXINA", "4119iIucmh", "1662mWYYXB", "403dSjzDO", "90593lQrkHL", "13ugHBvL", "352470ryfohn", "61316hFHPSy", "4hZgEBQ", "542941uTeWPV"];
function _0xdb23(isBgroundImg, stgs) {
  return _0xdb23 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (4093 + -1304 + -2403);
    let _0x424968 = _0x1b4f[isBgroundImg];
    return _0x424968;
  }, _0xdb23(isBgroundImg, stgs);
}
const _0x2fc583 = _0xdb23;
(function(data, val) {
  const toMonths = _0xdb23;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(386)) + -parseInt(toMonths(387)) * -parseInt(toMonths(388)) + parseInt(toMonths(389)) * parseInt(toMonths(390)) + parseInt(toMonths(391)) * -parseInt(toMonths(392)) + parseInt(toMonths(393)) + -parseInt(toMonths(394)) * parseInt(toMonths(395)) + parseInt(toMonths(396));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x26f293) {
      data["push"](data["shift"]());
    }
  }
})(_0x1b4f, -411060 + -43805 * 3 + 2 * 567977);
const i18n = require("../../../../shared/i18n");
const errors = require(_0x2fc583(397));
const urlUtils = require(_0x2fc583(398));
module[_0x2fc583(399)] = function set(receiver, value, text, index) {
  const toPythonCase = _0x2fc583;
  const args = {
    "IcnBZ" : toPythonCase(400),
    "HgOBI" : function(require, load, callback) {
      return require(load, callback);
    },
    "uXoKX" : function(name, initialValue) {
      return name === initialValue;
    },
    "UUAbP" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "YHooE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tmoxL" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const B538 = new RegExp(args[toPythonCase(401)]);
  index = args[toPythonCase(402)](parseInt, index, 20 * 163 + -9779 + 6529);
  if (args[toPythonCase(403)](index, 578 + -9 * -665 + -6562)) {
    return urlUtils["redirect301"](value, receiver["originalUrl"]["replace"](B538, "/"));
  } else {
    return args[toPythonCase(404)](index, 5936 + 1 * -9649 + -2 * -1857) || args[toPythonCase(405)](isNaN, index) ? args[toPythonCase(405)](text, new (errors[toPythonCase(406)])({
      "message" : i18n["t"]("errors.errors.pageNotFound")
    })) : (receiver[toPythonCase(407)][toPythonCase(408)] = index, args[toPythonCase(409)](text));
  }
};

