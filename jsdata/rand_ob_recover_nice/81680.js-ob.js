'use strict';
const moment = require(_0x11a52c(316));
const settingsCache = require(_0x11a52c(317));
const format = (ts) => {
  const notColliding = _0x11a52c;
  return moment(ts)["tz"](settingsCache[notColliding(318)](notColliding(319)))["toISOString"](!![]);
};
const forPost = (widths) => {
  const now = _0x11a52c;
  const ALIGN = {
    "Bcbwn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "FJcti" : now(320),
    "vomIf" : now(321),
    "hwsad" : now(322)
  };
  return [ALIGN[now(323)], ALIGN["vomIf"], ALIGN[now(324)]][now(325)]((index) => {
    const edgeId = now;
    if (widths[index]) {
      widths[index] = ALIGN[edgeId(326)](format, widths[index]);
    }
  }), widths;
};
module[_0x11a52c(327)]["format"] = format, module["exports"][_0x11a52c(328)] = forPost;

