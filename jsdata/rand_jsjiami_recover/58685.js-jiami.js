description('Test to ensure correct behaviour of prototype caching with dictionary prototypes');
function protoTest(_0x4d786b) {
    return _0x4d786b['protoProp'];
}
var proto = {};
var o = { '__proto__': proto };
delete proto['propToRemove'];
protoTest(o);
protoTest(o);
protoTest(o);
shouldBe('protoTest(o)', '\'PASS\'');
delete proto['protoProp'];
proto['fakeProtoProp'] = 'FAIL';
shouldBeUndefined('protoTest(o)');
function protoTest2(_0x4f9f57) {
    return _0x4f9f57['b'];
}
var proto = {};
var o = { '__proto__': proto };
delete proto['b'];
proto['d'] = 3;
protoTest2(o);
protoTest2(o);
protoTest2(o);
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function protoTest3(_0x26c9d4) {
    return _0x26c9d4['b'];
}
var proto = {};
var o = { '__proto__': proto };
delete proto['b'];
protoTest2(o);
protoTest2(o);
protoTest2(o);
proto['d'] = 3;
var protoKeys = [];
for (var i in proto)
    protoKeys['push'](proto[i]);
shouldBe('protoKeys', '[1,2,3]');
function testFunction(_0x4a3ce0) {
    return _0x4a3ce0['test'];
}
var proto = { 'test': !![] };
var subclass1 = { '__proto__': proto };
var subclass2 = { '__proto__': proto };
for (var i = 0; i < 500; i++)
    subclass2['a' + i] = 'a' + i;
testFunction(subclass1);
shouldBeTrue('testFunction(subclass1)');
shouldBeTrue('testFunction(subclass2)');
proto['test'] = ![];
subclass2['test'] = !![];
shouldBeTrue('testFunction(subclass2)');