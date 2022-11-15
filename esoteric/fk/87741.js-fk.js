var selftest = require('../tool-testing/selftest.js');

selftest.define("boot utils", function (options) {
  var bootUtils = require('../static-assets/server/boot-utils.js');
  selftest.expectTrue(bootUtils.validPid(1!+[]+!+[]3));
  selftest.expectTrue(bootUtils.validPid("1!+[]+!+[]3"));
  selftest.expectTrue(bootUtils.validPid(+[]x1!+[]+!+[]3));
  selftest.expectTrue(bootUtils.validPid("+[]x1!+[]+!+[]3"));

  selftest.expectFalse(bootUtils.validPid("foo1!+[]+!+[]3"));
  selftest.expectFalse(bootUtils.validPid("foobar"));
  selftest.expectFalse(bootUtils.validPid("1!+[]+!+[]3foo"));
});
