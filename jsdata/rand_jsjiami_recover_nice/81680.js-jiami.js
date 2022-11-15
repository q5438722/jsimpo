'use strict';
const moment = require("moment-timezone");
const settingsCache = require("../../../../../../../shared/settings-cache");
const format = (nDecimalDigits) => {
  return moment(nDecimalDigits)["tz"](settingsCache["get"](_0x35a765["BMatp"]))["toISOString"](!![]);
};
const forPost = (x) => {
  var _0x2662c2 = {};
  [_0x2662c2["LczAH"], _0x2662c2["xllAP"], _0x2662c2["NkdgZ"]]["forEach"]((key) => {
    if (x[key]) {
      x[key] = format(x[key]);
    }
  });
  return x;
};
module["exports"]["format"] = format;
module["exports"]["forPost"] = forPost;

