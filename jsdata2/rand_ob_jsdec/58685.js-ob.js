
var _0x2c8d68 = _0x4918;
(function (_0x9696fe, _0x5550ff) {
    var _0x374a37 = _0x4918;
    while (!![]) {
        try {
            var _0x2712f2 = parseInt(_0x374a37(0x16f)) + parseInt(_0x374a37(0x170)) * parseInt(_0x374a37(0x171)) + parseInt(_0x374a37(0x172)) + -parseInt(_0x374a37(0x173)) * -parseInt(_0x374a37(0x174)) + -parseInt(_0x374a37(0x175)) * parseInt(_0x374a37(0x176)) + -parseInt(_0x374a37(0x177)) * -parseInt(_0x374a37(0x178)) + -parseInt(_0x374a37(0x179));
            if (_0x2712f2 === _0x5550ff)
                break;
            else
                _0x9696fe['push'](_0x9696fe['shift']());
        } catch (_0x57cd81) {
            _0x9696fe['push'](_0x9696fe['shift']());
        }
    }
}(_0x7a1b, 0x1d * 0xa26e + 0x2b * -0x1661 + 0x1539 * -0x3b), description(_0x2c8d68(0x17a)));
function protoTest(_0x554a9d) {
    return _0x554a9d['protoProp'];
}
var proto = {
        'protoProp': _0x2c8d68(0x17b),
        'propToRemove': _0x2c8d68(0x17c)
    }, o = { '__proto__': proto };
delete proto[_0x2c8d68(0x17d)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0x2c8d68(0x17e), _0x2c8d68(0x17f)), delete proto[_0x2c8d68(0x180)], proto[_0x2c8d68(0x181)] = _0x2c8d68(0x182), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x314081) {
    return _0x314081['b'];
}
var proto = {
        'a': 0x1,
        'b': _0x2c8d68(0x183),
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 0x2d * -0x1 + -0x1a01 + -0x53d * -0x5, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x2c8d68(0x184)](proto[i]);
shouldBe(_0x2c8d68(0x185), _0x2c8d68(0x186));
function protoTest3(_0x230067) {
    return _0x230067['b'];
}
var proto = {
        'a': 0x1,
        'b': _0x2c8d68(0x183),
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = -0x143d + -0x1f * 0x137 + 0x39e9;
function _0x4918(_0x26aef6, _0x33486e) {
    return _0x4918 = function (_0x1e463e, _0x2e0515) {
        _0x1e463e = _0x1e463e - (-0x15b6 + 0x1 * 0x1fb5 + -0x890);
        var _0x5d43d4 = _0x7a1b[_0x1e463e];
        return _0x5d43d4;
    }, _0x4918(_0x26aef6, _0x33486e);
}
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x2c8d68(0x184)](proto[i]);
shouldBe('protoKeys', _0x2c8d68(0x186));
function testFunction(_0x122beb) {
    var _0x789d8 = _0x2c8d68;
    return _0x122beb[_0x789d8(0x187)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0x1345 * 0x1 + -0x123b + -0x10a; i < 0x6ef * 0x5 + 0xf * 0xc + -0x216b; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0x2c8d68(0x188)), shouldBeTrue('testFunction(subclass2)'), proto[_0x2c8d68(0x187)] = ![], subclass2[_0x2c8d68(0x187)] = !![], shouldBeTrue(_0x2c8d68(0x189));
