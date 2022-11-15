'use strict';
function _0x2168(isBgroundImg, stgs) {
  return _0x2168 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-1138 + -1023 + 2276);
    let _0x1fb5c2 = _0x16e3[isBgroundImg];
    return _0x1fb5c2;
  }, _0x2168(isBgroundImg, stgs);
}
const path = require(_0x14fa20(126));
const spawn = require(_0x14fa20(127));
const httpServer = require(_0x14fa20(128));
const server = httpServer[_0x14fa20(129)]({
  "root" : path["resolve"](__dirname, "../../")
});
server[_0x14fa20(130)](-15391 + -15030 + -1 * -38501);
let args = process[_0x14fa20(131)][_0x14fa20(132)](-2310 + 17 * 518 + -6494);
if (args[_0x14fa20(133)](_0x14fa20(134)) === -(9303 + 23 * -153 + -1 * 5783)) {
  args = args[_0x14fa20(135)](["--config", _0x14fa20(136)]);
}
if (args[_0x14fa20(133)](_0x14fa20(137)) === -(48 * 125 + 268 + 3 * -2089)) {
  args = args[_0x14fa20(135)]([_0x14fa20(137), _0x14fa20(138)]);
}
const i = args[_0x14fa20(133)](_0x14fa20(139));
if (i > -(-28 * -311 + -2412 + -6295)) {
  args[i + (-1475 * -5 + -8557 + 13 * 91)] = _0x14fa20(140) + args[i + (-200 * 24 + -1 * -1478 + 3323)] + ".js";
}
const runner = spawn(_0x14fa20(141), args, {
  "stdio" : "inherit"
});
runner["on"]("exit", function(status) {
  const gotoNewOfflinePage = _0x14fa20;
  server[gotoNewOfflinePage(142)]();
  process["exit"](status);
}), runner["on"]("error", function(canCreateDiscussions) {
  const gotoNewOfflinePage = _0x14fa20;
  server[gotoNewOfflinePage(142)]();
  throw canCreateDiscussions;
});

