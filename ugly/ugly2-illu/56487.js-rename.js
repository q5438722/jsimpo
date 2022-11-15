"use strict";

const common = require("../../common");

const assert = require("assert");

const addon = require(`./build/${common.buildType}/3_callbacks`);

addon.RunCallback(function (t) {
  assert.strictEqual(t, "hello world");
});function testRecv(t) {
  addon.RunCallbackWithRecv(function () {
    assert.strictEqual(this, t);
  }, t);
}addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, undefined);
}, undefined);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, null);
}, null);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, 5);
}, 5);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, true);
}, true);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, "Hello");
}, "Hello");addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, []);
}, []);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, {});
}, {});
