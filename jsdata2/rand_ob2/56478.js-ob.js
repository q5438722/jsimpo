'use strict';
const _0x1f21 = [
    '3352gJPByu',
    '350367rBwAFE',
    '904ibAAHy',
    '24tLAEfy',
    '364163ViGuIC',
    '43367gaApeH',
    '679234nVGiSP',
    '1STMSIx',
    '../../common',
    'assert',
    'buildType',
    '/test_number',
    'strictEqual',
    'Test',
    'MIN_SAFE_INTEGER',
    'MAX_SAFE_INTEGER',
    'MAX_VALUE',
    'POSITIVE_INFINITY',
    'TestInt32Truncation',
    'pow',
    'MIN_VALUE',
    'NEGATIVE_INFINITY',
    'NaN',
    'TestInt64Truncation',
    '2426WXtofu',
    '44sERNAp',
    '10wpnmUN'
];
function _0x5278(_0x4c9d7e, _0x52d285) {
    return _0x5278 = function (_0x1f2188, _0x52784a) {
        _0x1f2188 = _0x1f2188 - 0xc7;
        let _0x299b25 = _0x1f21[_0x1f2188];
        return _0x299b25;
    }, _0x5278(_0x4c9d7e, _0x52d285);
}
const _0x41cff5 = _0x5278;
(function (_0x2e716f, _0x358cef) {
    const _0x1f36a8 = _0x5278;
    while (!![]) {
        try {
            const _0xa20148 = -parseInt(_0x1f36a8(0xc7)) * -parseInt(_0x1f36a8(0xc8)) + -parseInt(_0x1f36a8(0xc9)) * -parseInt(_0x1f36a8(0xca)) + parseInt(_0x1f36a8(0xcb)) + parseInt(_0x1f36a8(0xcc)) * parseInt(_0x1f36a8(0xcd)) + parseInt(_0x1f36a8(0xce)) + parseInt(_0x1f36a8(0xcf)) + parseInt(_0x1f36a8(0xd0)) * -parseInt(_0x1f36a8(0xd1));
            if (_0xa20148 === _0x358cef)
                break;
            else
                _0x2e716f['push'](_0x2e716f['shift']());
        } catch (_0xc88f0b) {
            _0x2e716f['push'](_0x2e716f['shift']());
        }
    }
}(_0x1f21, 0x3abef));
const common = require(_0x41cff5(0xd2)), assert = require(_0x41cff5(0xd3)), test_number = require('./build/' + common[_0x41cff5(0xd4)] + _0x41cff5(0xd5));
function testNumber(_0x2628a1) {
    const _0x209f06 = _0x41cff5;
    assert[_0x209f06(0xd6)](_0x2628a1, test_number[_0x209f06(0xd7)](_0x2628a1));
}
testNumber(0x0), testNumber(-0x0), testNumber(0x1), testNumber(-0x1), testNumber(0x64), testNumber(0x849), testNumber(-0x4d1), testNumber(0xf0dd7), testNumber(-0xee723), testNumber(0xf015e11daa0a400000000000000000000000000000000000000000), testNumber(-0xa93a03bb9aa5e0000000000000000000000000000000000000000), testNumber(Number[_0x41cff5(0xd8)]), testNumber(Number[_0x41cff5(0xd9)]), testNumber(Number[_0x41cff5(0xd9)] + 0xa), testNumber(Number['MIN_VALUE']), testNumber(Number[_0x41cff5(0xda)]), testNumber(Number[_0x41cff5(0xda)] + 0xa), testNumber(Number[_0x41cff5(0xdb)]), testNumber(Number['NEGATIVE_INFINITY']), testNumber(Number['NaN']);
function testUint32(_0x739f73, _0x37d774 = _0x739f73) {
    const _0x3a0987 = _0x41cff5;
    assert[_0x3a0987(0xd6)](_0x37d774, test_number['TestUint32Truncation'](_0x739f73));
}
testUint32(0x0, 0x0), testUint32(-0x0, 0x0), testUint32(0xffffffff), testUint32(0x100000000, 0x0), testUint32(0x100000001, 0x1), testUint32(0x11 * 0x100000000 + 0x1, 0x1), testUint32(-0x1, 0xffffffff);
function testInt32(_0x48c424, _0x324c0e = _0x48c424) {
    const _0x5183d9 = _0x41cff5;
    assert['strictEqual'](_0x324c0e, test_number[_0x5183d9(0xdc)](_0x48c424));
}
testInt32(0x0, 0x0), testInt32(-0x0, 0x0), testInt32(-Math[_0x41cff5(0xdd)](0x2, 0x1f)), testInt32(Math[_0x41cff5(0xdd)](0x2, 0x1f) - 0x1), testInt32(0x100000001, 0x1), testInt32(0x100000000, 0x0), testInt32(0xffffffff, -0x1), testInt32(0x100000000 * 0x5 + 0x3, 0x3), testInt32(Number['MIN_SAFE_INTEGER'], 0x1), testInt32(Number[_0x41cff5(0xd9)], -0x1), testInt32(-Math[_0x41cff5(0xdd)](0x2, 0x3f) + (Math[_0x41cff5(0xdd)](0x2, 0x9) + 0x1), 0x400), testInt32(Math[_0x41cff5(0xdd)](0x2, 0x3f) - (Math[_0x41cff5(0xdd)](0x2, 0x9) + 0x1), -0x400), testInt32(-Number[_0x41cff5(0xde)], 0x0), testInt32(Number['MIN_VALUE'], 0x0), testInt32(-Number[_0x41cff5(0xda)], 0x0), testInt32(Number['MAX_VALUE'], 0x0), testInt32(-Math[_0x41cff5(0xdd)](0x2, 0x3f) + Math[_0x41cff5(0xdd)](0x2, 0x9), 0x0), testInt32(Math[_0x41cff5(0xdd)](0x2, 0x3f) - Math[_0x41cff5(0xdd)](0x2, 0x9), 0x0), testInt32(Number[_0x41cff5(0xdb)], 0x0), testInt32(Number[_0x41cff5(0xdf)], 0x0), testInt32(Number[_0x41cff5(0xe0)], 0x0);
function testInt64(_0x34a274, _0x821b3b = _0x34a274) {
    const _0x483fc0 = _0x41cff5;
    assert[_0x483fc0(0xd6)](_0x821b3b, test_number[_0x483fc0(0xe1)](_0x34a274));
}
const RANGEERROR_POSITIVE = Math[_0x41cff5(0xdd)](0x2, 0x3f), RANGEERROR_NEGATIVE = -Math[_0x41cff5(0xdd)](0x2, 0x3f);
testInt64(0x0, 0x0), testInt64(-0x0, 0x0), testInt64(Number[_0x41cff5(0xd8)]), testInt64(Number['MAX_SAFE_INTEGER']), testInt64(-Math['pow'](0x2, 0x3f) + (Math[_0x41cff5(0xdd)](0x2, 0x9) + 0x1)), testInt64(Math[_0x41cff5(0xdd)](0x2, 0x3f) - (Math[_0x41cff5(0xdd)](0x2, 0x9) + 0x1)), testInt64(-Number[_0x41cff5(0xde)], 0x0), testInt64(Number[_0x41cff5(0xde)], 0x0), testInt64(-Number[_0x41cff5(0xda)], RANGEERROR_NEGATIVE), testInt64(Number[_0x41cff5(0xda)], RANGEERROR_POSITIVE), testInt64(-Math[_0x41cff5(0xdd)](0x2, 0x3f) + Math[_0x41cff5(0xdd)](0x2, 0x9), RANGEERROR_NEGATIVE), testInt64(Math[_0x41cff5(0xdd)](0x2, 0x3f) - Math[_0x41cff5(0xdd)](0x2, 0x9), RANGEERROR_POSITIVE), testInt64(Number[_0x41cff5(0xdb)], 0x0), testInt64(Number['NEGATIVE_INFINITY'], 0x0), testInt64(Number[_0x41cff5(0xe0)], 0x0);