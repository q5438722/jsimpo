'use strict';
function assertGetterName(_0x254564, _0x476b6e, _0x496442) {
    var _0x2c0010 = Object['getOwnPropertyDescriptor'](_0x476b6e, _0x496442);
    assertSame(_0x254564, _0x2c0010['get']['name']);
}
function assertSetterName(_0x25ae12, _0x47f5f4, _0x4a5409) {
    var _0x42b754 = Object['getOwnPropertyDescriptor'](_0x47f5f4, _0x4a5409);
    assertSame(_0x25ae12, _0x42b754['set']['name']);
}
assertGetterName('get byteLength', ArrayBuffer['prototype'], 'byteLength');
assertGetterName('get size', Set['prototype'], 'size');
assertGetterName('get size', Map['prototype'], 'size');
let TypedArray = Uint8Array['__proto__'];
assertGetterName('get buffer', TypedArray['prototype'], 'buffer');
assertGetterName('get byteOffset', TypedArray['prototype'], 'byteOffset');
assertGetterName('get byteLength', TypedArray['prototype'], 'byteLength');
assertGetterName('get length', TypedArray['prototype'], 'length');
assertGetterName('get [Symbol.toStringTag]', TypedArray['prototype'], Symbol['toStringTag']);
assertGetterName('get buffer', DataView['prototype'], 'buffer');
assertGetterName('get byteOffset', DataView['prototype'], 'byteOffset');
assertGetterName('get byteLength', DataView['prototype'], 'byteLength');
assertGetterName('get __proto__', Object['prototype'], '__proto__');
assertSetterName('set __proto__', Object['prototype'], '__proto__');