var dp = Object['defineProperty'];
function getter() {
    return 111;
}
function setter(_0x52428f) {
    print(222);
}
function _0x16ab(_0x264980, _0x284ae9) {
    return _0x16ab = function (_0x58cb52, _0x16abf5) {
        _0x58cb52 = _0x58cb52 - 152;
        var _0x2d1451 = _0x58cb[_0x58cb52];
        return _0x2d1451;
    }, _0x16ab(_0x264980, _0x284ae9);
}
function anotherGetter() {
    return 333;
}
function anotherSetter(_0x9fe47) {
    print(444);
}
var obj1, obj2;
obj1 = {}, dp(obj1, _0x59ec02(165), {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, 'alpha', { 'get': getter }), obj1 = {}, assertEquals(111, obj2[_0x59ec02(165)]), gc(), assertEquals(111, obj2[_0x59ec02(165)]), obj1 = {}, dp(obj1, _0x59ec02(165), {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, 'alpha', { 'get': getter }), obj1 = {}, gc(), obj3 = {}, dp(obj3, 'alpha', { 'get': getter }), obj1 = {}, dp(obj1, _0x59ec02(165), {
    'get': getter,
    'set': setter
}), obj1[_0x59ec02(166)] = 10, obj2 = {}, dp(obj2, _0x59ec02(165), {
    'get': getter,
    'set': setter
}), obj1 = {}, assertEquals(111, obj2['alpha']), gc(), obj2[_0x59ec02(165)] = 100, assertEquals(111, obj2[_0x59ec02(165)]);