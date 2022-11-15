description('This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.');
function foo(_0x131ecf, _0x3f4d01) {
    return _0x131ecf + _0x3f4d01;
}
function bar(_0x404cae, _0x4732c9) {
    return this['f'] + _0x404cae + _0x4732c9;
}
function baz(_0x3dcdcc, _0x5be435, _0x5d420c) {
    return _0x3dcdcc['stuff'](_0x5be435, _0x5d420c);
}
var functionToCall = foo, offset = 0;
function _0x4c1a(_0x52382d, _0x4c5e68) {
    return _0x4c1a = function (_0x8cf8a5, _0x4c1a42) {
        _0x8cf8a5 = _0x8cf8a5 - 160;
        var _0x33eef7 = _0x8cf8[_0x8cf8a5];
        return _0x33eef7;
    }, _0x4c1a(_0x52382d, _0x4c5e68);
}
for (var i = 0; i < 1000; ++i) {
    i == 600 && (functionToCall = bar, offset = 42);
    var object = {};
    object['stuff'] = functionToCall, object['f'] = 42, shouldBe(_0x5b2330(168) + i + ', ' + i * 2 + ')', '' + (offset + i + i * 2));
}