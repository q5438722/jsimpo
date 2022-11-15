description('This\x20tests\x20that\x20inlining\x20a\x20function\x20that\x20does\x20not\x20use\x20this\x20does\x20not\x20result\x20in\x20this\x20being\x20lost\x20entirely,\x20if\x20we\x20succeed\x20in\x20doing\x20method\x20check\x20optimizations.');
function foo(_0x329b0a, _0x34772b) {
    return _0x329b0a + _0x34772b;
}
function bar(_0x5ad220, _0x5dd69a) {
    return this['f'] + _0x5ad220 + _0x5dd69a;
}
function baz(_0x535ada, _0x45edbf, _0x2f69bd) {
    return _0x535ada['stuff'](_0x45edbf, _0x2f69bd);
}
var functionToCall = foo, offset = 0x36d * -0x5 + 0x2375 + -0x1254;
for (var i = -0x779 + 0x2 * 0x10f5 + -0x1a71; i < 0x1a26 + -0x2287 + 0xc49; ++i) {
    i == 0x241b + 0x1 * 0x237a + -0x2c5 * 0x19 && (functionToCall = bar, offset = 0x6e6 * 0x1 + 0x25ad + -0x2c69 * 0x1);
    var object = {};
    object['stuff'] = functionToCall, object['f'] = -0xab8 + -0x221f + 0x1 * 0x2d01, shouldBe('baz(object,\x20' + i + ',\x20' + i * (0x8 * -0x3a8 + -0x2315 + -0x931 * -0x7) + ')', '' + (offset + i + i * (-0x3 * -0x25f + 0x1f43 + -0xcca * 0x3)));
}
