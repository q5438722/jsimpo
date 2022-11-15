description(_0x8dd511(301));
function protoTest(_0x41b1e5) {
    var _0x3999ca = _0x8dd511;
    return _0x41b1e5[_0x3999ca(302)];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': _0x8dd511(303)
    }, o = { '__proto__': proto };
delete proto[_0x8dd511(304)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0x8dd511(305), _0x8dd511(306)), delete proto[_0x8dd511(302)], proto['fakeProtoProp'] = _0x8dd511(307), shouldBeUndefined('protoTest(o)');
function protoTest2(_0x326180) {
    return _0x326180['b'];
}
function _0x278d(_0x510f20, _0x2b0dc1) {
    return _0x278d = function (_0x34504a, _0x278d5b) {
        _0x34504a = _0x34504a - 290;
        var _0xd472a0 = _0x3450[_0x34504a];
        return _0xd472a0;
    }, _0x278d(_0x510f20, _0x2b0dc1);
}
var proto = {
        'a': 1,
        'b': _0x8dd511(308),
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 3, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe(_0x8dd511(309), '[1,2,3]');
function protoTest3(_0x10aa8d) {
    return _0x10aa8d['b'];
}
var proto = {
        'a': 1,
        'b': 'meh',
        'c': 2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 3;
var protoKeys = [];
for (var i in proto)
    protoKeys[_0x8dd511(310)](proto[i]);
shouldBe(_0x8dd511(309), _0x8dd511(311));
function testFunction(_0x1ef14c) {
    var _0x117e9a = _0x8dd511;
    return _0x1ef14c[_0x117e9a(312)];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0; i < 500; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue(_0x8dd511(313)), shouldBeTrue(_0x8dd511(314)), proto['test'] = ![], subclass2[_0x8dd511(312)] = !![], shouldBeTrue(_0x8dd511(314));