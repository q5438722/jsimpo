"use strict";
function assertGetterName(e, t, r) {
  const a = Object.getOwnPropertyDescriptor(t, r);
  assertSame(e, a.get.name);
}function assertSetterName(e, t, r) {
  const a = Object.getOwnPropertyDescriptor(t, r);
  assertSame(e, a.set.name);
}var a = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength");
assertSame("get byteLength", a.get.name);var a = Object.getOwnPropertyDescriptor(Set.prototype, "size");
assertSame("get size", a.get.name);var a = Object.getOwnPropertyDescriptor(Map.prototype, "size");
assertSame("get size", a.get.name);const TypedArray = Uint8Array.__proto__;
var a = Object.getOwnPropertyDescriptor(TypedArray.prototype, "buffer");
assertSame("get buffer", a.get.name);var a = Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteOffset");
assertSame("get byteOffset", a.get.name);var a = Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteLength");
assertSame("get byteLength", a.get.name);var a = Object.getOwnPropertyDescriptor(TypedArray.prototype, "length");
assertSame("get length", a.get.name);var a = Object.getOwnPropertyDescriptor(TypedArray.prototype, Symbol.toStringTag);
assertSame("get [Symbol.toStringTag]", a.get.name);var a = Object.getOwnPropertyDescriptor(DataView.prototype, "buffer");
assertSame("get buffer", a.get.name);var a = Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset");
assertSame("get byteOffset", a.get.name);var a = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength");
assertSame("get byteLength", a.get.name);var a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertSame("get __proto__", a.get.name);var a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertSame("set __proto__", a.set.name);
