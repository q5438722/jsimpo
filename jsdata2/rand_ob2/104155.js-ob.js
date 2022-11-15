'use strict';
var _0x1823 = [
    '703834mJQgHX',
    '848523AYOESy',
    '389GJcIXg',
    '954ioByhT',
    '55819cQwjKU',
    '23OIZOmW',
    '#\x20@format\x0a\x0a',
    '1074AyNQrX',
    '162ANxFWM',
    '5VzdBfj',
    '32795DnLtEc',
    '304611AVWlux',
    '3GwQluw'
];
(function (_0x44b9c3, _0x444299) {
    var _0x11afa5 = _0x4615;
    while (!![]) {
        try {
            var _0x5d36f9 = parseInt(_0x11afa5(0x69)) * -parseInt(_0x11afa5(0x6a)) + -parseInt(_0x11afa5(0x6b)) * parseInt(_0x11afa5(0x6c)) + -parseInt(_0x11afa5(0x6d)) * parseInt(_0x11afa5(0x6e)) + -parseInt(_0x11afa5(0x6f)) + parseInt(_0x11afa5(0x70)) + parseInt(_0x11afa5(0x71)) * parseInt(_0x11afa5(0x72)) + -parseInt(_0x11afa5(0x73)) * -parseInt(_0x11afa5(0x74));
            if (_0x5d36f9 === _0x444299)
                break;
            else
                _0x44b9c3['push'](_0x44b9c3['shift']());
        } catch (_0x559b28) {
            _0x44b9c3['push'](_0x44b9c3['shift']());
        }
    }
}(_0x1823, 0x85bfc));
function hasPragma(_0x213be9) {
    return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/['test'](_0x213be9);
}
function _0x4615(_0x3fa212, _0x3d38db) {
    return _0x4615 = function (_0x182304, _0x461554) {
        _0x182304 = _0x182304 - 0x69;
        var _0x30c074 = _0x1823[_0x182304];
        return _0x30c074;
    }, _0x4615(_0x3fa212, _0x3d38db);
}
function insertPragma(_0x2708c3) {
    var _0x4bbb79 = _0x4615;
    return _0x4bbb79(0x75) + _0x2708c3;
}
module['exports'] = {
    'hasPragma': hasPragma,
    'insertPragma': insertPragma
};
