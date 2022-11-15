description(_0x2c8d68(378));
function protoTest(_0x554a9d) {
    return _0x554a9d['protoProp'];
}
var proto = {
        'protoProp': _0x2c8d68(379),
        'propToRemove': _0x2c8d68(380)
    }, o = { '__proto__': proto };
delete proto[_0x2c8d68(381)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0x2c8d68(382), _0x2c8d68(383)), delete proto[_0x2c8d68(384)], proto[_0x2c8d68(385)] = _0x2c8d68(386), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x314081) {
    return _0x314081['b'];
}
var proto = {
        'a': 1,
        'b': _0x2c8d68(387),
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 45 * -1 + -6657 + -1341 * -5, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x2c8d68(388)](proto[i]);
shouldBe(_0x2c8d68(389), _0x2c8d68(390));
function protoTest3(_0x230067) {
    return _0x230067['b'];
}
var proto = {
        'a': 1,
        'b': _0x2c8d68(387),
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = -5181 + -31 * 311 + 14825;
function _0x4918(_0x26aef6, _0x33486e) {
    return _0x4918 = function (_0x1e463e, _0x2e0515) {
        _0x1e463e = _0x1e463e - (-5558 + 1 * 8117 + -2192);
        var _0x5d43d4 = _0x7a1b[_0x1e463e];
        return _0x5d43d4;
    }, _0x4918(_0x26aef6, _0x33486e);
}
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x2c8d68(388)](proto[i]);
shouldBe('protoKeys', _0x2c8d68(390));
function testFunction(_0x122beb) {
    var _0x789d8 = _0x2c8d68;
    return _0x122beb[_0x789d8(391)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 4933 * 1 + -4667 + -266; i < 1775 * 5 + 15 * 12 + -8555; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0x2c8d68(392)), shouldBeTrue('testFunction(subclass2)'), proto[_0x2c8d68(391)] = ![], subclass2[_0x2c8d68(391)] = !![], shouldBeTrue(_0x2c8d68(393));