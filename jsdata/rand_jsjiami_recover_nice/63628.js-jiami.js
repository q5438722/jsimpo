'use strict';
function assertGetterName(mimeTypes, descriptor, prop) {
  var oldProto = Object["getOwnPropertyDescriptor"](descriptor, prop);
  assertSame(mimeTypes, oldProto["get"]["name"]);
}
function assertSetterName(mimeTypes, descriptor, property) {
  var oldProto = Object["getOwnPropertyDescriptor"](descriptor, property);
  assertSame(mimeTypes, oldProto["set"]["name"]);
}
assertGetterName("get byteLength", ArrayBuffer["prototype"], "byteLength");
assertGetterName("get size", Set["prototype"], "size");
assertGetterName("get size", Map["prototype"], "size");
let TypedArray = Uint8Array["__proto__"];
assertGetterName("get buffer", TypedArray["prototype"], "buffer");
assertGetterName("get byteOffset", TypedArray["prototype"], "byteOffset");
assertGetterName("get byteLength", TypedArray["prototype"], "byteLength");
assertGetterName("get length", TypedArray["prototype"], "length");
assertGetterName("get [Symbol.toStringTag]", TypedArray["prototype"], Symbol["toStringTag"]);
assertGetterName("get buffer", DataView["prototype"], "buffer");
assertGetterName("get byteOffset", DataView["prototype"], "byteOffset");
assertGetterName("get byteLength", DataView["prototype"], "byteLength");
assertGetterName("get __proto__", Object["prototype"], "__proto__");
assertSetterName("set __proto__", Object["prototype"], "__proto__");

