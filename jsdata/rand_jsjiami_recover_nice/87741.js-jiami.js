'use strict';
var selftest = require("../tool-testing/selftest.js");
selftest["define"]("boot utils", function(canCreateDiscussions) {
  var TagHourlyStat = require("../static-assets/server/boot-utils.js");
  selftest["expectTrue"](TagHourlyStat["validPid"](123));
  selftest["expectTrue"](TagHourlyStat["validPid"](_0xbcf1c2["sODQC"]));
  selftest["expectTrue"](TagHourlyStat["validPid"](291));
  selftest["expectTrue"](TagHourlyStat["validPid"]("0x123"));
  selftest["expectFalse"](TagHourlyStat["validPid"](_0xbcf1c2["PXcWO"]));
  selftest["expectFalse"](TagHourlyStat["validPid"](_0xbcf1c2["CLBIV"]));
  selftest["expectFalse"](TagHourlyStat["validPid"](_0xbcf1c2["LqEqq"]));
});

