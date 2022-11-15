function F() {
}
var a = new F();
function f(_0x5ec63d) {
    return a[_0x5ec63d]();
}
a[_0x46b415(221)] = function () {
    return 11;
}, a[0] = function () {
    return 22;
};
var obj = {};
a[obj] = function () {
    return 33;
}, a['foo'] = 0, delete a[_0x46b415(222)];
var b = _0x46b415(221);
function _0x53d5(_0x39428a, _0x4bee67) {
    return _0x53d5 = function (_0x8358a0, _0x53d59) {
        _0x8358a0 = _0x8358a0 - 213;
        var _0x546514 = _0x8358[_0x8358a0];
        return _0x546514;
    }, _0x53d5(_0x39428a, _0x4bee67);
}
f(b), f(b), assertEquals(11, f(b)), assertEquals(22, f(0)), assertEquals(33, f(obj));