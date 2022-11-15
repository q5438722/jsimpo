'use strict';
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

