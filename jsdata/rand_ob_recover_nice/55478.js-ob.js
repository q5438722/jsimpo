'use strict';
function _0xa6b5(isBgroundImg, stgs) {
  return _0xa6b5 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (6031 + -2196 + -3592);
    let _0xa44831 = _0x69c8[isBgroundImg];
    return _0xa44831;
  }, _0xa6b5(isBgroundImg, stgs);
}
const common = require("../common");
if (!common[_0x63992(253)]) {
  common[_0x63992(254)](_0x63992(255));
}
const Countdown = require("../common/countdown");
const http2 = require(_0x63992(256));
const server = http2["createServer"]();
let session;
const countdown = new Countdown(3064 + -5447 + 2385, () => {
  const gotoNewOfflinePage = _0x63992;
  server[gotoNewOfflinePage(257)](common[gotoNewOfflinePage(258)]());
  session["destroy"]();
});
server[_0x63992(259)](-6127 + -3159 + 9286, common[_0x63992(260)](() => {
  const now = _0x63992;
  const rpm_traffic = {
    "gSMzx" : now(261)
  };
  const p = http2["connect"](now(262) + server["address"]()[now(263)]);
  p["on"](rpm_traffic[now(264)], common["mustCall"](() => {
    return countdown["dec"]();
  }));
})), server["on"]("session", common[_0x63992(260)]((s) => {
  session = s;
  countdown["dec"]();
}));

