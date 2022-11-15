'use strict';

const common = require('../../common');

const assert = require('assert');

const addon = require(`./build/${common.buildType}/3_callbacks`);

addon.RunCallback(function (msg) {
  assert.strictEqual(msg, 'hello world');
});

function testRecv(desiredRecv) {
  addon.RunCallbackWithRecv(function () {
    assert.strictEqual(this, desiredRecv);
  }, desiredRecv);
}

addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, undefined);
}, undefined);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, null);
}, null);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, 5);
}, 5);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, true);
}, true);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, 'Hello');
}, 'Hello');addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, []);
}, []);addon.RunCallbackWithRecv(function () {
  assert.strictEqual(this, {});
}, {});
