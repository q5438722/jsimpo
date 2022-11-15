var _0x3bdd = [
    'descriptor[\x27configurable\x27]',
    'Object.defineProperty(c,\x20\x27prototype\x27,\x20{\x20get:\x20function(){}\x20})',
    '45148YhrgWx',
    '8LqPiex',
    '216953gROimt',
    '3DmnXIi',
    '97907lboVPh',
    '44236hlfQml',
    '1VJGtLi',
    '2066eaCZUW',
    '4kaaATF',
    '78826bXvLvI',
    '3OuBYzw',
    '349677elnPfY',
    'prototype',
    'descriptor[\x27writable\x27]',
    'descriptor[\x27enumerable\x27]'
];
var _0x1e5c18 = _0x1bf0;
(function (_0x2328d0, _0x4cabee) {
    var _0x1e66ca = _0x1bf0;
    while (!![]) {
        try {
            var _0x59789c = -parseInt(_0x1e66ca(0xb8)) * parseInt(_0x1e66ca(0xb9)) + parseInt(_0x1e66ca(0xba)) + parseInt(_0x1e66ca(0xbb)) * -parseInt(_0x1e66ca(0xbc)) + parseInt(_0x1e66ca(0xbd)) * parseInt(_0x1e66ca(0xbe)) + parseInt(_0x1e66ca(0xbf)) * -parseInt(_0x1e66ca(0xc0)) + parseInt(_0x1e66ca(0xc1)) * parseInt(_0x1e66ca(0xc2)) + parseInt(_0x1e66ca(0xc3));
            if (_0x59789c === _0x4cabee)
                break;
            else
                _0x2328d0['push'](_0x2328d0['shift']());
        } catch (_0x2fb404) {
            _0x2328d0['push'](_0x2328d0['shift']());
        }
    }
}(_0x3bdd, 0x2cf6f), description('Test\x20for\x20function.prototype\x27s\x20property\x20descriptor.'));
function test(_0x3b99a4) {
    var _0x2ee7e3 = _0x1bf0;
    descriptor = Object['getOwnPropertyDescriptor'](_0x3b99a4, _0x2ee7e3(0xc4)), shouldBeTrue(_0x2ee7e3(0xc5)), shouldBeFalse(_0x2ee7e3(0xc6)), shouldBeFalse(_0x2ee7e3(0xc7));
}
function a() {
}
test(a);
function b() {
}
b[_0x1e5c18(0xc4)] = {}, test(b);
function c() {
}
function _0x1bf0(_0x41a72d, _0x9760fa) {
    return _0x1bf0 = function (_0x3bdd2f, _0x1bf0f2) {
        _0x3bdd2f = _0x3bdd2f - 0xb8;
        var _0x49e769 = _0x3bdd[_0x3bdd2f];
        return _0x49e769;
    }, _0x1bf0(_0x41a72d, _0x9760fa);
}
shouldThrow(_0x1e5c18(0xc8)), test(c);
