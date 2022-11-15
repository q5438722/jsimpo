description('Test whether Promise treats thenable correctly.');
function _0xa93f(_0x3d7b7e, _0x1b9f51) {
    return _0xa93f = function (_0x2c007e, _0xa93fef) {
        _0x2c007e = _0x2c007e - 125;
        var _0x3a5b3b = _0x2c00[_0x2c007e];
        return _0x3a5b3b;
    }, _0xa93f(_0x3d7b7e, _0x1b9f51);
}
var thisValue, result, value = {
        'then': function (_0x3a39f0, _0x5b66e6) {
            var _0x4f4420 = _0xa93f;
            testPassed(_0x4f4420(137)), thisValue = this, shouldBe(_0x4f4420(138), _0x4f4420(139)), _0x5b66e6(_0x4f4420(140));
        }
    };
new Promise(function (_0x28ae17) {
    _0x28ae17(value);
})[_0x28a389(141)](function () {
    var _0x16fdb5 = _0x28a389;
    testFailed(_0x16fdb5(142)), finishJSTest();
}, function (_0x2a0705) {
    var _0x26cb87 = _0x28a389;
    testPassed(_0x26cb87(143)), result = _0x2a0705, shouldBeEqualToString(_0x26cb87(144), 'hello'), finishJSTest();
}), debug(_0x28a389(145));