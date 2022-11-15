function _0x1369(_0x200d15, _0x10d5d0) {
    return _0x1369 = function (_0x4281e6, _0x13695d) {
        _0x4281e6 = _0x4281e6 - 385;
        var _0x1dd07a = _0x4281[_0x4281e6];
        return _0x1dd07a;
    }, _0x1369(_0x200d15, _0x10d5d0);
}
var dp = Object[_0x1157ff(395)];
function getter() {
    return 111;
}
function setter(_0x31bfbc) {
    print(222);
}
function anotherGetter() {
    return 333;
}
function anotherSetter(_0x2186fd) {
    print(444);
}
var obj1, obj2;
obj1 = {}, dp(obj1, _0x1157ff(396), {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, 'alpha', { 'get': getter }), obj1 = {}, assertEquals(111, obj2[_0x1157ff(396)]), gc(), assertEquals(111, obj2[_0x1157ff(396)]), obj1 = {}, dp(obj1, _0x1157ff(396), {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, _0x1157ff(396), { 'get': getter }), obj1 = {}, gc(), obj3 = {}, dp(obj3, _0x1157ff(396), { 'get': getter }), obj1 = {}, dp(obj1, 'alpha', {
    'get': getter,
    'set': setter
}), obj1['beta'] = 10, obj2 = {}, dp(obj2, _0x1157ff(396), {
    'get': getter,
    'set': setter
}), obj1 = {}, assertEquals(111, obj2[_0x1157ff(396)]), gc(), obj2['alpha'] = 100, assertEquals(111, obj2[_0x1157ff(396)]);