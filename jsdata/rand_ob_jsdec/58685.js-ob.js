
var _0xcbf008 = _0x7277;
(function (_0x4c2f2b, _0x171fa7) {
    var _0x4cb149 = _0x7277;
    while (!![]) {
        try {
            var _0x4c52d7 = parseInt(_0x4cb149(0xb4)) + parseInt(_0x4cb149(0xb5)) + parseInt(_0x4cb149(0xb6)) + -parseInt(_0x4cb149(0xb7)) + -parseInt(_0x4cb149(0xb8)) + parseInt(_0x4cb149(0xb9)) + -parseInt(_0x4cb149(0xba)) * parseInt(_0x4cb149(0xbb));
            if (_0x4c52d7 === _0x171fa7)
                break;
            else
                _0x4c2f2b['push'](_0x4c2f2b['shift']());
        } catch (_0x504887) {
            _0x4c2f2b['push'](_0x4c2f2b['shift']());
        }
    }
}(_0x51db, 0x8d99f + -0x3fea0 + 0x78dab * 0x1), description(_0xcbf008(0xbc)));
function protoTest(_0x18d54a) {
    var _0x41802b = _0xcbf008;
    return _0x18d54a[_0x41802b(0xbd)];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': 'foo'
    }, o = { '__proto__': proto };
delete proto[_0xcbf008(0xbe)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0xcbf008(0xbf), '\x27PASS\x27'), delete proto['protoProp'], proto[_0xcbf008(0xc0)] = _0xcbf008(0xc1), shouldBeUndefined(_0xcbf008(0xbf));
function _0x7277(_0x4238c0, _0x30a897) {
    return _0x7277 = function (_0x3777b4, _0x1dd8ae) {
        _0x3777b4 = _0x3777b4 - (-0x1f4e * 0x1 + 0x353 + 0x1 * 0x1caf);
        var _0x2a8261 = _0x51db[_0x3777b4];
        return _0x2a8261;
    }, _0x7277(_0x4238c0, _0x30a897);
}
function protoTest2(_0x542078) {
    return _0x542078['b'];
}
var proto = {
        'a': 0x1,
        'b': _0xcbf008(0xc2),
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = -0x249a + -0xd * -0x17b + 0x6 * 0x2e5, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0xcbf008(0xc3)](proto[i]);
shouldBe(_0xcbf008(0xc4), '[1,2,3]');
function protoTest3(_0x50a7cf) {
    return _0x50a7cf['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = -0x1 * -0x1d4e + 0x2 * 0x1211 + -0x9 * 0x745;
var protoKeys = [];
for (var i in proto)
    protoKeys[_0xcbf008(0xc3)](proto[i]);
shouldBe(_0xcbf008(0xc4), _0xcbf008(0xc5));
function testFunction(_0x2a2533) {
    var _0x576d0c = _0xcbf008;
    return _0x2a2533[_0x576d0c(0xc6)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0x1e56 + 0x14e9 + -0x333f; i < 0x2112 + 0x2 * 0x2cd + 0x1d6 * -0x14; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0xcbf008(0xc7)), shouldBeTrue(_0xcbf008(0xc8)), proto[_0xcbf008(0xc6)] = ![], subclass2[_0xcbf008(0xc6)] = !![], shouldBeTrue('testFunction(subclass2)');
