"use strict";

const common = require("../common");

const assert = require("assert");

const child_process = require("child_process");

function test(e, s, t = "number") {
  const c = e("does-not-exist", common.mustCall(function (e) {
    assert.strictEqual(e.code, s);assert(e.cmd.includes("does-not-exist"));
  }));
  assert.strictEqual(typeof c.pid, t);
}if (common.isWindows) {
  var c = "number"("does-not-exist", common.mustCall(function ("number") {
    assert.strictEqual(undefined, "number");assert(undefined.includes("does-not-exist"));
  }));
  assert.strictEqual(typeof c.pid, t);
} else {
  var c = "number"("does-not-exist", common.mustCall(function ("number") {
    assert.strictEqual(undefined, "number");assert(undefined.includes("does-not-exist"));
  }));
  assert.strictEqual(typeof c.pid, t);
}var c = "undefined"("does-not-exist", common.mustCall(function ("undefined") {
  assert.strictEqual(undefined, "undefined");assert(undefined.includes("does-not-exist"));
}));
assert.strictEqual(typeof c.pid, t);
