var _0x3450 = [
    'propToRemove',
    'protoTest(o)',
    '\x27PASS\x27',
    'FAIL',
    'meh',
    'protoKeys',
    'push',
    '[1,2,3]',
    'test',
    'testFunction(subclass1)',
    'testFunction(subclass2)',
    '399919ghUSdN',
    '1OulqdR',
    '67295sObrFs',
    '3MCVEpp',
    '154642FghgYE',
    '649813qUQspS',
    '2459gfsruK',
    '46gSjEtu',
    '635095cziVnX',
    '1232343ezkvpa',
    '1xxyBsc',
    'Test\x20to\x20ensure\x20correct\x20behaviour\x20of\x20prototype\x20caching\x20with\x20dictionary\x20prototypes',
    'protoProp',
    'foo'
];
var _0x8dd511 = _0x278d;
(function (_0x42934c, _0x5db1ea) {
    var _0x39555d = _0x278d;
    while (!![]) {
        try {
            var _0x2d2c74 = -parseInt(_0x39555d(0x122)) * parseInt(_0x39555d(0x123)) + -parseInt(_0x39555d(0x124)) * parseInt(_0x39555d(0x125)) + -parseInt(_0x39555d(0x126)) + parseInt(_0x39555d(0x127)) + -parseInt(_0x39555d(0x128)) * parseInt(_0x39555d(0x129)) + -parseInt(_0x39555d(0x12a)) + -parseInt(_0x39555d(0x12b)) * -parseInt(_0x39555d(0x12c));
            if (_0x2d2c74 === _0x5db1ea)
                break;
            else
                _0x42934c['push'](_0x42934c['shift']());
        } catch (_0x4a588c) {
            _0x42934c['push'](_0x42934c['shift']());
        }
    }
}(_0x3450, 0x5c29d), description(_0x8dd511(0x12d)));
function protoTest(_0x41b1e5) {
    var _0x3999ca = _0x8dd511;
    return _0x41b1e5[_0x3999ca(0x12e)];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': _0x8dd511(0x12f)
    }, o = { '__proto__': proto };
delete proto[_0x8dd511(0x130)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0x8dd511(0x131), _0x8dd511(0x132)), delete proto[_0x8dd511(0x12e)], proto['fakeProtoProp'] = _0x8dd511(0x133), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x326180) {
    return _0x326180['b'];
}
function _0x278d(_0x510f20, _0x2b0dc1) {
    return _0x278d = function (_0x34504a, _0x278d5b) {
        _0x34504a = _0x34504a - 0x122;
        var _0xd472a0 = _0x3450[_0x34504a];
        return _0xd472a0;
    }, _0x278d(_0x510f20, _0x2b0dc1);
}
var proto = {
        'a': 0x1,
        'b': _0x8dd511(0x134),
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 0x3, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe(_0x8dd511(0x135), '[1,2,3]');
function protoTest3(_0x10aa8d) {
    return _0x10aa8d['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 0x3;
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x8dd511(0x136)](proto[i]);
shouldBe(_0x8dd511(0x135), _0x8dd511(0x137));
function testFunction(_0x1ef14c) {
    var _0x117e9a = _0x8dd511;
    return _0x1ef14c[_0x117e9a(0x138)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0x0; i < 0x1f4; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0x8dd511(0x139)), shouldBeTrue(_0x8dd511(0x13a)), proto['test'] = ![], subclass2[_0x8dd511(0x138)] = !![], shouldBeTrue(_0x8dd511(0x13a));
