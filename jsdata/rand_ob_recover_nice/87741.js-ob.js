'use strict';
var selftest = require("../tool-testing/selftest.js");
selftest[_0x552b2a(132)](_0x552b2a(133), function(canCreateDiscussions) {
  var parseInt = _0x552b2a;
  var data = {
    "TtaPl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ACOpi" : "../static-assets/server/boot-utils.js",
    "iqUpJ" : "123",
    "MPgGj" : "foo123",
    "lkLjY" : parseInt(134)
  };
  var packByNumType = data[parseInt(135)](require, data[parseInt(136)]);
  selftest[parseInt(137)](packByNumType["validPid"](3018 + -1911 * 3 + -2 * -1419));
  selftest[parseInt(137)](packByNumType[parseInt(138)](data[parseInt(139)]));
  selftest[parseInt(137)](packByNumType[parseInt(138)](-5265 + 1 * 7538 + -1 * 1982));
  selftest[parseInt(137)](packByNumType[parseInt(138)]("0x123"));
  selftest[parseInt(140)](packByNumType[parseInt(138)](data["MPgGj"]));
  selftest["expectFalse"](packByNumType[parseInt(138)](data[parseInt(141)]));
  selftest["expectFalse"](packByNumType[parseInt(138)]("123foo"));
});

