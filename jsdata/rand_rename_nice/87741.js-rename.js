'use strict';
var selftest = require("../tool-testing/selftest.js");
selftest.define("boot utils", function(canCreateDiscussions) {
  var route = require("../static-assets/server/boot-utils.js");
  selftest.expectTrue(route.validPid(123));
  selftest.expectTrue(route.validPid("123"));
  selftest.expectTrue(route.validPid(291));
  selftest.expectTrue(route.validPid("0x123"));
  selftest.expectFalse(route.validPid("foo123"));
  selftest.expectFalse(route.validPid("foobar"));
  selftest.expectFalse(route.validPid("123foo"));
});

