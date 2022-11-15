description('Test for function.prototype\'s property descriptor.');
function test(_0x3b99a4) {
    var _0x2ee7e3 = _0x1bf0;
    descriptor = Object['getOwnPropertyDescriptor'](_0x3b99a4, _0x2ee7e3(196)), shouldBeTrue(_0x2ee7e3(197)), shouldBeFalse(_0x2ee7e3(198)), shouldBeFalse(_0x2ee7e3(199));
}
function a() {
}
test(a);
function b() {
}
b[_0x1e5c18(196)] = {}, test(b);
function c() {
}
function _0x1bf0(_0x41a72d, _0x9760fa) {
    return _0x1bf0 = function (_0x3bdd2f, _0x1bf0f2) {
        _0x3bdd2f = _0x3bdd2f - 184;
        var _0x49e769 = _0x3bdd[_0x3bdd2f];
        return _0x49e769;
    }, _0x1bf0(_0x41a72d, _0x9760fa);
}
shouldThrow(_0x1e5c18(200)), test(c);