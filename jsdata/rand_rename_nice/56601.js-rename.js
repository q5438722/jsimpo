'use strict';
const common = require("../common");
const assert = require("assert");
const async_hooks = require("async_hooks");
const fnsToTest = [setTimeout, (saveNotifs) => {
  setImmediate(() => {
    saveNotifs();
    setImmediate(() => {
      hook.disable();
    });
  });
}, (saveNotifs) => {
  setImmediate(() => {
    process.nextTick(() => {
      saveNotifs();
      setImmediate(() => {
        hook.disable();
        assert.strictEqual(fnsToTest.length, 0);
      });
    });
  });
}];
const hook = async_hooks.createHook({
  before : common.mustNotCall(),
  after : common.mustCall(() => {
  }, 3),
  destroy : common.mustCall(() => {
    hook.disable();
    nextTest();
  }, 3)
});
nextTest();
function nextTest() {
  if (fnsToTest.length > 0) {
    fnsToTest.shift()(common.mustCall(() => {
      hook.enable();
    }));
  }
}
;