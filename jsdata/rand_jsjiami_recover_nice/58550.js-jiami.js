'use strict';
description("Test for function.prototype's property descriptor.");
function test(obj) {
  descriptor = Object["getOwnPropertyDescriptor"](obj, _0x2187ef["IMYDu"]);
  shouldBeTrue("descriptor['writable']");
  shouldBeFalse(_0x2187ef["mAVGc"]);
  shouldBeFalse(_0x2187ef["TfTGj"]);
}
function a() {
}
test(a);
function b() {
}
b["prototype"] = {};
test(b);
function c() {
}
shouldThrow("Object.defineProperty(c, 'prototype', { get: function(){} })");
test(c);

