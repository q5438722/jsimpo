'use strict';
function assertGetterName(_0x171a58, _0x5b01cf, _0xdca881) {
    var _0x391160 = {
            'MZEAy': function (_0x34563b, _0x5db1bd, _0x22c728) {
                return _0x34563b(_0x5db1bd, _0x22c728);
            }
        }, _0x153542 = Object['getOwnPropertyDescriptor'](_0x5b01cf, _0xdca881);
    _0x391160['MZEAy'](assertSame, _0x171a58, _0x153542['get']['name']);
}
function assertSetterName(_0x103267, _0xdfb2fe, _0x2a877a) {
    var _0x214857 = {
            'bLbyZ': function (_0x25ca72, _0x149d80, _0x5b8257) {
                return _0x25ca72(_0x149d80, _0x5b8257);
            }
        }, _0x4d46a7 = Object['getOwnPropertyDescriptor'](_0xdfb2fe, _0x2a877a);
    _0x214857['bLbyZ'](assertSame, _0x103267, _0x4d46a7['set']['name']);
}
assertGetterName('get\x20byteLength', ArrayBuffer['prototype'], 'byteLength'), assertGetterName('get\x20size', Set['prototype'], 'size'), assertGetterName('get\x20size', Map['prototype'], 'size');
let TypedArray = Uint8Array['__proto__'];
assertGetterName('get\x20buffer', TypedArray['prototype'], 'buffer'), assertGetterName('get\x20byteOffset', TypedArray['prototype'], 'byteOffset'), assertGetterName('get\x20byteLength', TypedArray['prototype'], 'byteLength'), assertGetterName('get\x20length', TypedArray['prototype'], 'length'), assertGetterName('get\x20[Symbol.toStringTag]', TypedArray['prototype'], Symbol['toStringTag']), assertGetterName('get\x20buffer', DataView['prototype'], 'buffer'), assertGetterName('get\x20byteOffset', DataView['prototype'], 'byteOffset'), assertGetterName('get\x20byteLength', DataView['prototype'], 'byteLength'), assertGetterName('get\x20__proto__', Object['prototype'], '__proto__'), assertSetterName('set\x20__proto__', Object['prototype'], '__proto__');
