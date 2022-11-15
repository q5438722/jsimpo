"use strict";

const common = require("../common");

const assert = require("assert");

const domain = require("domain");

const d = new domain.Domain();
d.on("error", common.mustCall(o => {
  assert.strictEqual(o.message, "foobar");assert.strictEqual(o.domain, d);assert.strictEqual(o.domainEmitter, undefined);assert.strictEqual(o.domainBound, undefined);assert.strictEqual(o.domainThrown, true);
}));d.run(common.mustCall(() => {
  process.nextTick(common.mustCall(() => {
    throw new Error("foobar");
  }));
}));
