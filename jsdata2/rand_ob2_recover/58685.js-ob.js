description(_0x1e4873(234));
function protoTest(_0x47c30e) {
    var _0x57f7a7 = _0x1e4873;
    return _0x47c30e[_0x57f7a7(235)];
}
var proto = {
        'protoProp': _0x1e4873(236),
        'propToRemove': _0x1e4873(237)
    }, o = { '__proto__': proto };
delete proto[_0x1e4873(238)], protoTest(o), protoTest(o), protoTest(o), shouldBe('protoTest(o)', _0x1e4873(239)), delete proto['protoProp'], proto[_0x1e4873(240)] = _0x1e4873(241), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x2b0cfa) {
    return _0x2b0cfa['b'];
}
var proto = {
        'a': 1,
        'b': _0x1e4873(242),
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 3, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x1e4873(243)](proto[i]);
shouldBe(_0x1e4873(244), _0x1e4873(245));
function protoTest3(_0x17b1cc) {
    return _0x17b1cc['b'];
}
var proto = {
        'a': 1,
        'b': _0x1e4873(242),
        'c': 2
    }, o = { '__proto__': proto };
function _0x4cf4(_0x3fbb8f, _0x2f4b0b) {
    return _0x4cf4 = function (_0x2daa79, _0x4cf4d7) {
        _0x2daa79 = _0x2daa79 - 221;
        var _0x53e0ee = _0x2daa[_0x2daa79];
        return _0x53e0ee;
    }, _0x4cf4(_0x3fbb8f, _0x2f4b0b);
}
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 3;
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe(_0x1e4873(244), _0x1e4873(245));
function testFunction(_0x2c5258) {
    var _0x1ba82c = _0x1e4873;
    return _0x2c5258[_0x1ba82c(246)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0; i < 500; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue('testFunction(subclass1)'), shouldBeTrue(_0x1e4873(247)), proto[_0x1e4873(246)] = ![], subclass2['test'] = !![], shouldBeTrue(_0x1e4873(247));