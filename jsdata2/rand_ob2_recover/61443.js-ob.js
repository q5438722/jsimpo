function F() {
}
var a = new F();
function f(_0x301519) {
    return a[_0x301519]();
}
a[_0x3e29d5(390)] = function () {
    return 11;
}, a[0] = function () {
    return 22;
};
function _0x5bba(_0x4562e2, _0x4f0bc8) {
    return _0x5bba = function (_0x5c7a3b, _0x5bba08) {
        _0x5c7a3b = _0x5c7a3b - 379;
        var _0xf83eed = _0x5c7a[_0x5c7a3b];
        return _0xf83eed;
    }, _0x5bba(_0x4562e2, _0x4f0bc8);
}
var obj = {};
a[obj] = function () {
    return 33;
}, a[_0x3e29d5(391)] = 0, delete a[_0x3e29d5(391)];
var b = _0x3e29d5(390);
f(b), f(b), assertEquals(11, f(b)), assertEquals(22, f(0)), assertEquals(33, f(obj));