'use strict';
var _0x2c00 = [
    'fulfilled',
    'rejected',
    'result',
    'The\x20promise\x20is\x20not\x20rejected\x20now.',
    '1257QDRuHg',
    '812XHdiUJ',
    '327wbjcRl',
    '1930IStizv',
    '1682358ZjJxst',
    '10417uHueXD',
    '151mDUyDk',
    '919158AaMmAO',
    '569617gtItte',
    '1ZsUFAw',
    '3719uVrOHf',
    '1339dWsVgL',
    'value.then\x20is\x20called.',
    'thisValue',
    'value',
    'hello',
    'then'
];
var _0x28a389 = _0xa93f;
(function (_0x4254e3, _0x247fb4) {
    var _0xc7561f = _0xa93f;
    while (!![]) {
        try {
            var _0xfa87a7 = -parseInt(_0xc7561f(0x7d)) * parseInt(_0xc7561f(0x7e)) + parseInt(_0xc7561f(0x7f)) * parseInt(_0xc7561f(0x80)) + -parseInt(_0xc7561f(0x81)) + -parseInt(_0xc7561f(0x82)) * parseInt(_0xc7561f(0x83)) + -parseInt(_0xc7561f(0x84)) + parseInt(_0xc7561f(0x85)) * parseInt(_0xc7561f(0x86)) + -parseInt(_0xc7561f(0x87)) * -parseInt(_0xc7561f(0x88));
            if (_0xfa87a7 === _0x247fb4)
                break;
            else
                _0x4254e3['push'](_0x4254e3['shift']());
        } catch (_0x56dea2) {
            _0x4254e3['push'](_0x4254e3['shift']());
        }
    }
}(_0x2c00, 0xf08d5));
description('Test\x20whether\x20Promise\x20treats\x20thenable\x20correctly.');
function _0xa93f(_0x3d7b7e, _0x1b9f51) {
    return _0xa93f = function (_0x2c007e, _0xa93fef) {
        _0x2c007e = _0x2c007e - 0x7d;
        var _0x3a5b3b = _0x2c00[_0x2c007e];
        return _0x3a5b3b;
    }, _0xa93f(_0x3d7b7e, _0x1b9f51);
}
var thisValue, result, value = {
        'then': function (_0x3a39f0, _0x5b66e6) {
            var _0x4f4420 = _0xa93f;
            testPassed(_0x4f4420(0x89)), thisValue = this, shouldBe(_0x4f4420(0x8a), _0x4f4420(0x8b)), _0x5b66e6(_0x4f4420(0x8c));
        }
    };
new Promise(function (_0x28ae17) {
    _0x28ae17(value);
})[_0x28a389(0x8d)](function () {
    var _0x16fdb5 = _0x28a389;
    testFailed(_0x16fdb5(0x8e)), finishJSTest();
}, function (_0x2a0705) {
    var _0x26cb87 = _0x28a389;
    testPassed(_0x26cb87(0x8f)), result = _0x2a0705, shouldBeEqualToString(_0x26cb87(0x90), 'hello'), finishJSTest();
}), debug(_0x28a389(0x91));
