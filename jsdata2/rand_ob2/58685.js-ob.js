var _0x2daa = [
    'push',
    'protoKeys',
    '[1,2,3]',
    'test',
    'testFunction(subclass2)',
    '146075KDYrAr',
    '1VuOaQD',
    '7057hYVwmN',
    '17TkOaAo',
    '1ATWDeL',
    '248706IqDYqL',
    '177043qPhdLI',
    '1hwBBaA',
    '5665wBzXEU',
    '22811UYDFGV',
    '9BmsJhO',
    '13ySdJdR',
    '12391qsAQdo',
    'Test\x20to\x20ensure\x20correct\x20behaviour\x20of\x20prototype\x20caching\x20with\x20dictionary\x20prototypes',
    'protoProp',
    'PASS',
    'foo',
    'propToRemove',
    '\x27PASS\x27',
    'fakeProtoProp',
    'FAIL',
    'meh'
];
var _0x1e4873 = _0x4cf4;
(function (_0x39c3c8, _0x5a9fb6) {
    var _0x172d4c = _0x4cf4;
    while (!![]) {
        try {
            var _0x1d64a5 = parseInt(_0x172d4c(0xdd)) * parseInt(_0x172d4c(0xde)) + -parseInt(_0x172d4c(0xdf)) * parseInt(_0x172d4c(0xe0)) + parseInt(_0x172d4c(0xe1)) * parseInt(_0x172d4c(0xe2)) + parseInt(_0x172d4c(0xe3)) * -parseInt(_0x172d4c(0xe4)) + parseInt(_0x172d4c(0xe5)) + parseInt(_0x172d4c(0xe6)) * parseInt(_0x172d4c(0xe7)) + parseInt(_0x172d4c(0xe8)) * -parseInt(_0x172d4c(0xe9));
            if (_0x1d64a5 === _0x5a9fb6)
                break;
            else
                _0x39c3c8['push'](_0x39c3c8['shift']());
        } catch (_0x1c730c) {
            _0x39c3c8['push'](_0x39c3c8['shift']());
        }
    }
}(_0x2daa, 0x240c2), description(_0x1e4873(0xea)));
function protoTest(_0x47c30e) {
    var _0x57f7a7 = _0x1e4873;
    return _0x47c30e[_0x57f7a7(0xeb)];
}
var proto = {
        'protoProp': _0x1e4873(0xec),
        'propToRemove': _0x1e4873(0xed)
    }, o = { '__proto__': proto };
delete proto[_0x1e4873(0xee)], protoTest(o), protoTest(o), protoTest(o), shouldBe('protoTest(o)', _0x1e4873(0xef)), delete proto['protoProp'], proto[_0x1e4873(0xf0)] = _0x1e4873(0xf1), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x2b0cfa) {
    return _0x2b0cfa['b'];
}
var proto = {
        'a': 0x1,
        'b': _0x1e4873(0xf2),
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 0x3, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x1e4873(0xf3)](proto[i]);
shouldBe(_0x1e4873(0xf4), _0x1e4873(0xf5));
function protoTest3(_0x17b1cc) {
    return _0x17b1cc['b'];
}
var proto = {
        'a': 0x1,
        'b': _0x1e4873(0xf2),
        'c': 0x2
    }, o = { '__proto__': proto };
function _0x4cf4(_0x3fbb8f, _0x2f4b0b) {
    return _0x4cf4 = function (_0x2daa79, _0x4cf4d7) {
        _0x2daa79 = _0x2daa79 - 0xdd;
        var _0x53e0ee = _0x2daa[_0x2daa79];
        return _0x53e0ee;
    }, _0x4cf4(_0x3fbb8f, _0x2f4b0b);
}
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 0x3;
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe(_0x1e4873(0xf4), _0x1e4873(0xf5));
function testFunction(_0x2c5258) {
    var _0x1ba82c = _0x1e4873;
    return _0x2c5258[_0x1ba82c(0xf6)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0x0; i < 0x1f4; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue('testFunction(subclass1)'), shouldBeTrue(_0x1e4873(0xf7)), proto[_0x1e4873(0xf6)] = ![], subclass2['test'] = !![], shouldBeTrue(_0x1e4873(0xf7));
