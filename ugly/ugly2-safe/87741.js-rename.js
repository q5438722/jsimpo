  var raccoon; // selftest
  
  raccoon = require("../tool-testing/selftest.js");
  raccoon.define("boot utils", function (hamster) {
    var chinchilla; // t
    
      chinchilla = require("../static-assets/server/boot-utils.js");
    raccoon.expectTrue(chinchilla.validPid(123));
    raccoon.expectTrue(chinchilla.validPid("123"));
    raccoon.expectTrue(chinchilla.validPid(291));
    raccoon.expectTrue(chinchilla.validPid("0x123"));
    raccoon.expectFalse(chinchilla.validPid("foo123"));
    raccoon.expectFalse(chinchilla.validPid("foobar"));
    raccoon.expectFalse(chinchilla.validPid("123foo"));
  });
  