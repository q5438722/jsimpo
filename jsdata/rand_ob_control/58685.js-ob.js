description('Test\x20to\x20ensure\x20correct\x20behaviour\x20of\x20prototype\x20caching\x20with\x20dictionary\x20prototypes');
function protoTest(_0x3929b8) {
    return _0x3929b8['protoProp'];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': 'foo'
    }, o = { '__proto__': proto };
delete proto['propToRemove'], protoTest(o), protoTest(o), protoTest(o), shouldBe('protoTest(o)', '\x27PASS\x27'), delete proto['protoProp'], proto['fakeProtoProp'] = 'FAIL', shouldBeUndefined('protoTest(o)');
function protoTest2(_0x499ae7) {
    return _0x499ae7['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = 0x3, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function protoTest3(_0x39c0eb) {
    return _0x39c0eb['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 0x3;
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function testFunction(_0x538573) {
    return _0x538573['test'];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = 0x0; i < 0x1f4; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue('testFunction(subclass1)'), shouldBeTrue('testFunction(subclass2)'), proto['test'] = ![], subclass2['test'] = !![], shouldBeTrue('testFunction(subclass2)');
