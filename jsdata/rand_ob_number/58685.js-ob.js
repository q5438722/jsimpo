description('Test\x20to\x20ensure\x20correct\x20behaviour\x20of\x20prototype\x20caching\x20with\x20dictionary\x20prototypes');
function protoTest(_0x5f0637) {
    return _0x5f0637['protoProp'];
}
var proto = {
        'protoProp': 'PASS',
        'propToRemove': 'foo'
    }, o = { '__proto__': proto };
delete proto['propToRemove'], protoTest(o), protoTest(o), protoTest(o), shouldBe('protoTest(o)', '\x27PASS\x27'), delete proto['protoProp'], proto['fakeProtoProp'] = 'FAIL', shouldBeUndefined('protoTest(o)');
function protoTest2(_0x2e9fb8) {
    return _0x2e9fb8['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], proto['d'] = -0x14f0 + -0xc01 + 0x13 * 0x1bc, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function protoTest3(_0x5ad8ce) {
    return _0x5ad8ce['b'];
}
var proto = {
        'a': 0x1,
        'b': 'meh',
        'c': 0x2
    }, o = { '__proto__': proto };
delete proto['b'], protoTest2(o), protoTest2(o), protoTest2(o), proto['d'] = 0x5c * 0x6b + -0x2 * -0x17b + -0x3 * 0xdcd;
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function testFunction(_0x46a197) {
    return _0x46a197['test'];
}
var proto = { 'test': !![] }, subclass1 = { '__proto__': proto }, subclass2 = { '__proto__': proto };
for (var i = -0x1ced + 0x1f * -0x134 + -0x1613 * -0x3; i < 0x6b6 * -0x1 + 0x22e2 + -0x1a38; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1), shouldBeTrue('testFunction(subclass1)'), shouldBeTrue('testFunction(subclass2)'), proto['test'] = ![], subclass2['test'] = !![], shouldBeTrue('testFunction(subclass2)');
