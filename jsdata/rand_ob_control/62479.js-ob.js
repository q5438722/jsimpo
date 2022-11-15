var dp = Object['defineProperty'];
function getter() {
    return 0x6f;
}
function setter(_0x30aec3) {
    var _0x7fbc67 = {
        'TASbm': function (_0x265be3, _0x382dfc) {
            return _0x265be3(_0x382dfc);
        }
    };
    _0x7fbc67['TASbm'](print, 0xde);
}
function anotherGetter() {
    return 0x14d;
}
function anotherSetter(_0x22f1fc) {
    var _0x4d80cf = {
        'leUza': function (_0x30e519, _0x1c681c) {
            return _0x30e519(_0x1c681c);
        }
    };
    _0x4d80cf['leUza'](print, 0x1bc);
}
var obj1, obj2;
obj1 = {}, dp(obj1, 'alpha', {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, 'alpha', { 'get': getter }), obj1 = {}, assertEquals(0x6f, obj2['alpha']), gc(), assertEquals(0x6f, obj2['alpha']), obj1 = {}, dp(obj1, 'alpha', {
    'get': getter,
    'set': setter
}), obj2 = {}, dp(obj2, 'alpha', { 'get': getter }), obj1 = {}, gc(), obj3 = {}, dp(obj3, 'alpha', { 'get': getter }), obj1 = {}, dp(obj1, 'alpha', {
    'get': getter,
    'set': setter
}), obj1['beta'] = 0xa, obj2 = {}, dp(obj2, 'alpha', {
    'get': getter,
    'set': setter
}), obj1 = {}, assertEquals(0x6f, obj2['alpha']), gc(), obj2['alpha'] = 0x64, assertEquals(0x6f, obj2['alpha']);
