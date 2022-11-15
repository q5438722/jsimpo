'use strict';
const _0x2353 = ["1030428liIzsG", "438147uccwyB", "5XiTKRs", "181739rwYgzs", "1598DoiwvI", "3101nhJrcA", "../common", "assert", "http", "allocUnsafe", "length", "thanks", "data", "end", "close", "strictEqual", "writeHead", "write", "BQBUK", "mustCall", "POST", "address", "port", "cNpcj", "setEncoding", "WEBVq", "uwfWk", "757002ASLgYt", "37rOMDJQ", "26623vxrlbT", "18650iTrYZy", "47wAhZxY"];
function _0x4eb5(isBgroundImg, stgs) {
  return _0x4eb5 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-9921 + 13 * 179 + 249 * 31);
    let _0x341d96 = _0x2353[isBgroundImg];
    return _0x341d96;
  }, _0x4eb5(isBgroundImg, stgs);
}
const _0x6046f9 = _0x4eb5;
(function(data, val) {
  const toMonths = _0x4eb5;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(125)) + -parseInt(toMonths(126)) * parseInt(toMonths(127)) + -parseInt(toMonths(128)) * parseInt(toMonths(129)) + -parseInt(toMonths(130)) + parseInt(toMonths(131)) + -parseInt(toMonths(132)) * parseInt(toMonths(133)) + parseInt(toMonths(134)) * parseInt(toMonths(135));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x3aa004) {
      data["push"](data["shift"]());
    }
  }
})(_0x2353, 131 * 2311 + 12 * -96721 + -1 * -1693730);
const common = require(_0x6046f9(136));
const assert = require(_0x6046f9(137));
const http = require(_0x6046f9(138));
const bufferSize = (-103 * -89 + -2526 + -1 * 6636) * (-2409 + 2 * -3148 + -141 * -69) * (-2476 + -8569 + 3 * 4023);
let measuredSize = -4605 + -2994 + 7599;
const buffer = Buffer[_0x6046f9(139)](bufferSize);
for (let i = -7023 + -5 * 112 + -1 * -7583; i < buffer[_0x6046f9(140)]; i++) {
  buffer[i] = i % (2723 + -3201 + 734);
}
const server = http["Server"](function(p, myPreferences) {
  const gotoNewOfflinePage = _0x6046f9;
  const info = {
    "BQBUK" : gotoNewOfflinePage(141),
    "FSuiY" : gotoNewOfflinePage(142),
    "KFRcO" : gotoNewOfflinePage(143)
  };
  server[gotoNewOfflinePage(144)]();
  let bufidx = -4682 + 1 * -9651 + -11 * -1303;
  p["on"](info["FSuiY"], (data) => {
    const getRefreshTokenKey = gotoNewOfflinePage;
    measuredSize = measuredSize + data[getRefreshTokenKey(140)];
    for (let i = -1591 * -1 + 1 * -6127 + 4536; i < data[getRefreshTokenKey(140)]; i++) {
      assert[getRefreshTokenKey(145)](data[i], buffer[bufidx]);
      bufidx++;
    }
  });
  p["on"](info["KFRcO"], common["mustCall"](() => {
    const getPreferenceKey = gotoNewOfflinePage;
    assert[getPreferenceKey(145)](measuredSize, bufferSize);
    myPreferences[getPreferenceKey(146)](-2624 + 4997 + 41 * -53);
    myPreferences[getPreferenceKey(147)](info[getPreferenceKey(148)]);
    myPreferences[getPreferenceKey(143)]();
  }));
});
server["listen"](2710 + 2957 * -3 + -6161 * -1, common[_0x6046f9(149)](() => {
  const parseInt = _0x6046f9;
  const matches = {
    "OjtMO" : parseInt(141),
    "WEBVq" : "utf8",
    "eudaE" : parseInt(142),
    "uwfWk" : parseInt(143),
    "cNpcj" : parseInt(150)
  };
  const obj = http["request"]({
    "port" : server[parseInt(151)]()[parseInt(152)],
    "method" : matches[parseInt(153)],
    "path" : "/",
    "headers" : {
      "content-length" : buffer[parseInt(140)]
    }
  }, common[parseInt(149)]((p) => {
    const decodeURIComponent = parseInt;
    p[decodeURIComponent(154)](matches[decodeURIComponent(155)]);
    let expected = "";
    p["on"](matches["eudaE"], (stdout) => {
      return expected = expected + stdout;
    });
    p["on"](matches[decodeURIComponent(156)], common["mustCall"](() => {
      const gotoNewOfflinePage = decodeURIComponent;
      assert[gotoNewOfflinePage(145)](expected, matches["OjtMO"]);
    }));
  }));
  obj["end"](buffer);
}));

