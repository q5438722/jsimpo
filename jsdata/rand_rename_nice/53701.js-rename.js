'use strict';
const common = require("../common");
const assert = require("assert");
const domain = require("domain");
const d = new domain.Domain;
d.on("error", common.mustCall((er) => {
  assert.strictEqual(er.message, "foobar");
  assert.strictEqual(er.domain, d);
  assert.strictEqual(er.domainEmitter, undefined);
  assert.strictEqual(er.domainBound, undefined);
  assert.strictEqual(er.domainThrown, true);
}));
d.run(common.mustCall(() => {
  process.nextTick(common.mustCall(() => {
    throw new Error("foobar");
  }));
}));

