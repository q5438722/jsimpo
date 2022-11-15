description(_0xcbf008(188));
function protoTest(_0x18d54a) {
    var _0x41802b = _0xcbf008;
    return _0x18d54a[_0x41802b(189)];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': 'foo'
    }, o = { '__proto__': proto };
delete proto[_0xcbf008(190)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0xcbf008(191), '\'PASS\''), delete proto['protoProp'], proto[_0xcbf008(192)] = _0xcbf008(193), shouldBeUndefined(_0xcbf008(191));
function _0x7277(_0x4238c0, _0x30a897) {
    return _0x7277 = function (_0x3777b4, _0x1dd8ae) {
        _0x3777b4 = _0x3777b4 - (-8014 * 1 + 851 + 1 * 7343);
        var _0x2a8261 = _0x51db[_0x3777b4];
        return _0x2a8261;
    }, _0x7277(_0x4238c0, _0x30a897);
}
function protoTest2(_0x542078) {
    return _0x542078['b'];
}
var proto = {
        'a': 1,
        'b': _0xcbf008(194),
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = -9370 + -13 * -379 + 6 * 741, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys[_0xcbf008(195)](proto[i]);
shouldBe(_0xcbf008(196), '[1,2,3]');
function protoTest3(_0x50a7cf) {
    return _0x50a7cf['b'];
}
var proto = {
        'a': 1,
        'b': 'meh',
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = -1 * -7502 + 2 * 4625 + -9 * 1861;
var protoKeys = [];
for (var i in proto)
    protoKeys[_0xcbf008(195)](proto[i]);
shouldBe(_0xcbf008(196), _0xcbf008(197));
function testFunction(_0x2a2533) {
    var _0x576d0c = _0xcbf008;
    return _0x2a2533[_0x576d0c(198)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 7766 + 5353 + -13119; i < 8466 + 2 * 717 + 470 * -20; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0xcbf008(199)), shouldBeTrue(_0xcbf008(200)), proto[_0xcbf008(198)] = ![], subclass2[_0xcbf008(198)] = !![], shouldBeTrue('testFunction(subclass2)');