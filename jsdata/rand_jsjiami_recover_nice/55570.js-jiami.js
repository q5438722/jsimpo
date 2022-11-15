'use strict';
const common = require("../common");
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
const assert = require("assert");
const crypto = require("crypto");
const domain = require("domain");
const test = (singleSequence) => {
  var value = {};
  const rule = new Error(value["DqfQH"]);
  const config = domain["create"]();
  config["on"](value["MJuCR"], common["mustCall"](function(a) {
    assert["strictEqual"](a, rule);
  }));
  const start = common["mustCall"](function() {
    throw rule;
  });
  config["run"](start);
};
test(function(mmCoreSplitViewBlock) {
  var _0x1fa8a5 = {};
  crypto["pbkdf2"]("password", _0x1fa8a5["YTRBe"], 1, 8, mmCoreSplitViewBlock);
});
test(function(mmCoreSplitViewBlock) {
  crypto["randomBytes"](32, mmCoreSplitViewBlock);
});

