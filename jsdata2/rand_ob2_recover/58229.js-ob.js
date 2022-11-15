description(_0x3fa028(296));
function _0x4eac(_0x552c11, _0x46e2e0) {
    return _0x4eac = function (_0x534de1, _0x4eacaf) {
        _0x534de1 = _0x534de1 - 284;
        var _0x2220a7 = _0x534d[_0x534de1];
        return _0x2220a7;
    }, _0x4eac(_0x552c11, _0x46e2e0);
}
function foo(_0x2d203c, _0x51fb6c) {
    return _0x2d203c + _0x51fb6c;
}
function bar(_0x7e2428, _0x4da2ef) {
    return this['f'] + _0x7e2428 + _0x4da2ef;
}
function baz(_0x38d4ee, _0xa52ab0, _0x333576) {
    return _0x38d4ee['stuff'](_0xa52ab0, _0x333576);
}
var functionToCall = foo, offset = 0;
for (var i = 0; i < 1000; ++i) {
    i == 600 && (functionToCall = bar, offset = 42);
    var object = {};
    object['stuff'] = functionToCall, object['f'] = 42, shouldBe(_0x3fa028(297) + i + ', ' + i * 2 + ')', '' + (offset + i + i * 2));
}