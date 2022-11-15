const selftest = require("../tool-testing/selftest.js");

selftest.define("boot utils", function (e) {
  const t = require("../static-assets/server/boot-utils.js");

  selftest.expectTrue(t.validPid(123));selftest.expectTrue(t.validPid("123"));selftest.expectTrue(t.validPid(291));selftest.expectTrue(t.validPid("0x123"));selftest.expectFalse(t.validPid("foo123"));selftest.expectFalse(t.validPid("foobar"));selftest.expectFalse(t.validPid("123foo"));
});
