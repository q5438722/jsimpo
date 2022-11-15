'use strict';
function assertGetterName(_0x542cb6, _0x58b17a, _0x4e79d6) {
    var _0xce938f = Object['getOwnPropertyDescriptor'](_0x58b17a, _0x4e79d6);
    assertSame(_0x542cb6, _0xce938f['get']['name']);
}
function assertSetterName(_0x390fa7, _0x1b4647, _0x3e3fa5) {
    var _0x5adab1 = Object['getOwnPropertyDescriptor'](_0x1b4647, _0x3e3fa5);
    assertSame(_0x390fa7, _0x5adab1['set']['name']);
}
assertGetterName('get\x20byteLength', ArrayBuffer['prototype'], 'byteLength'), assertGetterName('get\x20size', Set['prototype'], 'size'), assertGetterName('get\x20size', Map['prototype'], 'size');
let TypedArray = Uint8Array['__proto__'];
assertGetterName('get\x20buffer', TypedArray['prototype'], 'buffer'), assertGetterName('get\x20byteOffset', TypedArray['prototype'], 'byteOffset'), assertGetterName('get\x20byteLength', TypedArray['prototype'], 'byteLength'), assertGetterName('get\x20length', TypedArray['prototype'], 'length'), assertGetterName('get\x20[Symbol.toStringTag]', TypedArray['prototype'], Symbol['toStringTag']), assertGetterName('get\x20buffer', DataView['prototype'], 'buffer'), assertGetterName('get\x20byteOffset', DataView['prototype'], 'byteOffset'), assertGetterName('get\x20byteLength', DataView['prototype'], 'byteLength'), assertGetterName('get\x20__proto__', Object['prototype'], '__proto__'), assertSetterName('set\x20__proto__', Object['prototype'], '__proto__');
