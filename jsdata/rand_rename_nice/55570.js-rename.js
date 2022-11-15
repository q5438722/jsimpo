'use strict';
const common = require("../common");
if (!common.hasCrypto) {
  common.skip("missing crypto");
}
const assert = require("assert");
const crypto = require("crypto");
const domain = require("domain");
const test = (vItem) => {
  const uExpected = new Error("BAM");
  const n = domain.create();
  n.on("error", common.mustCall(function(o) {
    assert.strictEqual(o, uExpected);
  }));
  const r = common.mustCall(function() {
    throw uExpected;
  });
  n.run(r);
};
test(function(callback) {
  crypto.pbkdf2("password", "salt", 1, 8, callback);
});
test(function(callback) {
  crypto.randomBytes(32, callback);
});

