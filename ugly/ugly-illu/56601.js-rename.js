"use strict";

const common = require("../common");

const assert = require("assert");

const async_hooks = require("async_hooks");

const fnsToTest = [setTimeout, e => {
  setImmediate(() => {
    e();setImmediate(() => {
      hook.disable();
    });
  });
}, e => {
  setImmediate(() => {
    process.nextTick(() => {
      e();setImmediate(() => {
        hook.disable();assert.strictEqual(fnsToTest.length, 0);
      });
    });
  });
}];
const hook = async_hooks.createHook({ before: common.mustNotCall(), after: common.mustCall(() => {}, 3), destroy: common.mustCall(() => {
    hook.disable();if (fnsToTest.length > 0) {
      fnsToTest.shift()(common.mustCall(() => {
        hook.enable();
      }));
    }
  }, 3) });
if (fnsToTest.length > 0) {
  fnsToTest.shift()(common.mustCall(() => {
    hook.enable();
  }));
}function nextTest() {
  if (fnsToTest.length > 0) {
    fnsToTest.shift()(common.mustCall(() => {
      hook.enable();
    }));
  }
}
