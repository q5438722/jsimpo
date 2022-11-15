var _0x57e5 = [
    '368695bxbIMX',
    '844400BcNdld',
    '626759yuBoDG',
    '1bRdJlE',
    '277843kpFCpz',
    '374249HOParX',
    '1dUogig',
    'getOwnPropertyDescriptor',
    'prototype',
    'arguments',
    'name',
    'configurable',
    'enumerable',
    'writable',
    'foo',
    'length',
    'isFrozen',
    '1IEbuSi',
    '815388ZLQmmm',
    '791611bKYZDo',
    '1pWyDNf'
];
var _0x2f393a = _0x2cc4;
(function (_0x4fc6c5, _0x258702) {
    var _0x2f2b83 = _0x2cc4;
    while (!![]) {
        try {
            var _0x1656e8 = parseInt(_0x2f2b83(0x143)) * parseInt(_0x2f2b83(0x144)) + -parseInt(_0x2f2b83(0x145)) * parseInt(_0x2f2b83(0x146)) + parseInt(_0x2f2b83(0x147)) + parseInt(_0x2f2b83(0x148)) + -parseInt(_0x2f2b83(0x149)) + parseInt(_0x2f2b83(0x14a)) * parseInt(_0x2f2b83(0x14b)) + -parseInt(_0x2f2b83(0x14c)) * parseInt(_0x2f2b83(0x14d));
            if (_0x1656e8 === _0x258702)
                break;
            else
                _0x4fc6c5['push'](_0x4fc6c5['shift']());
        } catch (_0x50d27c) {
            _0x4fc6c5['push'](_0x4fc6c5['shift']());
        }
    }
}(_0x57e5, 0x7d6ab));
function _0x2cc4(_0x53e852, _0x4cfbef) {
    return _0x2cc4 = function (_0x57e50c, _0x2cc414) {
        _0x57e50c = _0x57e50c - 0x143;
        var _0x2f90b9 = _0x57e5[_0x57e50c];
        return _0x2f90b9;
    }, _0x2cc4(_0x53e852, _0x4cfbef);
}
var throwTypeErrorFunction = Object[_0x2f393a(0x14e)](Function[_0x2f393a(0x14f)], _0x2f393a(0x150))['get'], nameDesc = Object[_0x2f393a(0x14e)](throwTypeErrorFunction, _0x2f393a(0x151));
assertFalse(nameDesc[_0x2f393a(0x152)], 'configurable'), assertFalse(nameDesc['enumerable'], _0x2f393a(0x153)), assertFalse(nameDesc[_0x2f393a(0x154)], _0x2f393a(0x154)), assertThrows(function () {
    'use strict';
    var _0x1b9a45 = _0x2f393a;
    throwTypeErrorFunction[_0x1b9a45(0x151)] = _0x1b9a45(0x155);
}, TypeError);
var lengthDesc = Object['getOwnPropertyDescriptor'](throwTypeErrorFunction, _0x2f393a(0x156));
assertFalse(lengthDesc[_0x2f393a(0x152)], _0x2f393a(0x152)), assertFalse(lengthDesc[_0x2f393a(0x153)], _0x2f393a(0x153)), assertFalse(lengthDesc['writable'], 'writable'), assertThrows(function () {
    'use strict';
    var _0x51d49a = _0x2f393a;
    throwTypeErrorFunction[_0x51d49a(0x156)] = 0x2a;
}, TypeError), assertTrue(Object[_0x2f393a(0x157)](throwTypeErrorFunction));
