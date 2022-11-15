'use strict';
var _0x584e = [
    '310634XjudaD',
    '3zSIYoC',
    '187011cTRYEL',
    '662372VqaZnA',
    '14227fcRcyL',
    '59csXedn',
    '446600UaTBKt',
    '300056rXwjOW',
    '1eKjqjO',
    '1284071qYZfGM',
    'get',
    'name',
    'getOwnPropertyDescriptor',
    'prototype',
    'byteLength',
    'get\x20size',
    'size',
    'get\x20buffer',
    'buffer',
    'get\x20byteLength',
    'get\x20length',
    'length',
    'byteOffset',
    'get\x20__proto__',
    'set\x20__proto__',
    '__proto__'
];
var _0x34b425 = _0x184f;
function _0x184f(_0x2b6e0e, _0x2c969b) {
    return _0x184f = function (_0x584e71, _0x184fbb) {
        _0x584e71 = _0x584e71 - 0x1a6;
        var _0xfc2bf2 = _0x584e[_0x584e71];
        return _0xfc2bf2;
    }, _0x184f(_0x2b6e0e, _0x2c969b);
}
(function (_0x568f1b, _0x55bda2) {
    var _0x398a42 = _0x184f;
    while (!![]) {
        try {
            var _0x32cb21 = parseInt(_0x398a42(0x1a6)) + -parseInt(_0x398a42(0x1a7)) * -parseInt(_0x398a42(0x1a8)) + -parseInt(_0x398a42(0x1a9)) + parseInt(_0x398a42(0x1aa)) * parseInt(_0x398a42(0x1ab)) + parseInt(_0x398a42(0x1ac)) + parseInt(_0x398a42(0x1ad)) + -parseInt(_0x398a42(0x1ae)) * parseInt(_0x398a42(0x1af));
            if (_0x32cb21 === _0x55bda2)
                break;
            else
                _0x568f1b['push'](_0x568f1b['shift']());
        } catch (_0xe6b905) {
            _0x568f1b['push'](_0x568f1b['shift']());
        }
    }
}(_0x584e, 0x7cd29));
function assertGetterName(_0x2d4cb2, _0x58564d, _0x4fb1d9) {
    var _0x52f2ed = _0x184f, _0x529722 = Object['getOwnPropertyDescriptor'](_0x58564d, _0x4fb1d9);
    assertSame(_0x2d4cb2, _0x529722[_0x52f2ed(0x1b0)][_0x52f2ed(0x1b1)]);
}
function assertSetterName(_0x27492c, _0x7fd4e1, _0x26499f) {
    var _0x3f940b = _0x184f, _0x28fc1e = Object[_0x3f940b(0x1b2)](_0x7fd4e1, _0x26499f);
    assertSame(_0x27492c, _0x28fc1e['set'][_0x3f940b(0x1b1)]);
}
assertGetterName('get\x20byteLength', ArrayBuffer[_0x34b425(0x1b3)], _0x34b425(0x1b4)), assertGetterName(_0x34b425(0x1b5), Set[_0x34b425(0x1b3)], _0x34b425(0x1b6)), assertGetterName(_0x34b425(0x1b5), Map[_0x34b425(0x1b3)], 'size');
let TypedArray = Uint8Array['__proto__'];
assertGetterName(_0x34b425(0x1b7), TypedArray[_0x34b425(0x1b3)], _0x34b425(0x1b8)), assertGetterName('get\x20byteOffset', TypedArray[_0x34b425(0x1b3)], 'byteOffset'), assertGetterName(_0x34b425(0x1b9), TypedArray['prototype'], 'byteLength'), assertGetterName(_0x34b425(0x1ba), TypedArray[_0x34b425(0x1b3)], _0x34b425(0x1bb)), assertGetterName('get\x20[Symbol.toStringTag]', TypedArray['prototype'], Symbol['toStringTag']), assertGetterName(_0x34b425(0x1b7), DataView[_0x34b425(0x1b3)], 'buffer'), assertGetterName('get\x20byteOffset', DataView[_0x34b425(0x1b3)], _0x34b425(0x1bc)), assertGetterName(_0x34b425(0x1b9), DataView['prototype'], _0x34b425(0x1b4)), assertGetterName(_0x34b425(0x1bd), Object[_0x34b425(0x1b3)], '__proto__'), assertSetterName(_0x34b425(0x1be), Object['prototype'], _0x34b425(0x1bf));
