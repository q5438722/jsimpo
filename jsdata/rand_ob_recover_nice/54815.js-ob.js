'use strict';
require("../common");
const assert = require(_0x3061b1(177));
const fork = require(_0x3061b1(178))[_0x3061b1(179)];
if (process[_0x3061b1(180)][-833 + -8016 + 8851] === _0x3061b1(181)) {
  process[_0x3061b1(182)]("1");
  setTimeout(function() {
    const gotoNewOfflinePage = _0x3061b1;
    process[gotoNewOfflinePage(182)]("2");
  }, 15 * 279 + 5199 + 1148 * -8);
  process["on"]("disconnect", function() {
    const gotoNewOfflinePage = _0x3061b1;
    process[gotoNewOfflinePage(183)][gotoNewOfflinePage(184)]("3");
  });
} else {
  const cp = fork(__filename, [_0x3061b1(181)], {
    "silent" : !![]
  });
  const container = [];
  let index = "";
  cp["on"](_0x3061b1(185), function(data) {
    const now = _0x3061b1;
    const rpm_traffic = {
      "FkIWT" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    container[now(186)](data);
    if (rpm_traffic[now(187)](data, "2")) {
      cp["disconnect"]();
    }
  });
  cp[_0x3061b1(183)]["on"](_0x3061b1(188), function(numLon) {
    index = index + numLon;
  });
  cp[_0x3061b1(189)](_0x3061b1(190), function() {
    assert["deepStrictEqual"](container, ["1", "2"]);
    assert["strictEqual"](index, "3");
  });
}
;
