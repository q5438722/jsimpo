'use strict';

const _0x48ef = ['TestInt64Truncation', '47021ppcvQU', '300006qgqkHd', '4yfrnZK', '59956bBZEOe', '265909PcMKoF', '1sjyPTU', '1ObkCUU', '202164aLBQwL', '22872LqqVMk', '1qYWfZS', '96013kzuhwt', '../../common', 'assert', './build/', 'buildType', '/test_number', 'strictEqual', 'Test', 'MIN_SAFE_INTEGER', 'MIN_VALUE', 'MAX_VALUE', 'POSITIVE_INFINITY', 'NEGATIVE_INFINITY', 'NaN', 'TestUint32Truncation', 'pow', 'MAX_SAFE_INTEGER'];
const _0x1aa398 = _0x6463;

(function (_0x3cc445, _0x4ebe1d) {
    const _0x5084c7 = _0x6463;

    while (true) {
        try {
            const _0xda9c90 = parseInt(_0x5084c7(0x100)) + -parseInt(_0x5084c7(0x101)) + parseInt(_0x5084c7(0x102)) * parseInt(_0x5084c7(0x103)) + parseInt(_0x5084c7(0x104)) * parseInt(_0x5084c7(0x105)) + parseInt(_0x5084c7(0x106)) * -parseInt(_0x5084c7(0x107)) + parseInt(_0x5084c7(0x108)) + parseInt(_0x5084c7(0x109)) * parseInt(_0x5084c7(0x10a));

            if (_0xda9c90 === _0x4ebe1d) break;else _0x3cc445.push(_0x3cc445.shift());
        } catch (_0x1d19ef) {
            _0x3cc445.push(_0x3cc445.shift());
        }
    }
})(_0x48ef, 169469);

const common = require(_0x1aa398(0x10b));

const assert = require(_0x1aa398(0x10c));

const test_number = require(_0x1aa398(0x10d) + common[_0x1aa398(0x10e)] + _0x1aa398(0x10f));

function testNumber(_0x2aa80c) {
    const _0x20e0d7 = _0x1aa398;

    assert[_0x20e0d7(0x110)](_0x2aa80c, test_number[_0x20e0d7(0x111)](_0x2aa80c));
}
testNumber(0), testNumber(0), testNumber(1), testNumber(-1), testNumber(100), testNumber(2121), testNumber(-1233), testNumber(986583), testNumber(-976675), testNumber(0xf015e11daa0a400000000000000000000000000000000000000000), testNumber(-4.350987086545761e+63), testNumber(Number[_0x1aa398(0x112)]), testNumber(Number.MAX_SAFE_INTEGER), testNumber(Number.MAX_SAFE_INTEGER + 10), testNumber(Number[_0x1aa398(0x113)]), testNumber(Number[_0x1aa398(0x114)]), testNumber(Number[_0x1aa398(0x114)] + 10), testNumber(Number[_0x1aa398(0x115)]), testNumber(Number[_0x1aa398(0x116)]), testNumber(Number[_0x1aa398(0x117)]);
function _0x6463(_0x228f5c, _0x414693) {
    return _0x6463 = function (_0x4ab75d, _0x148f8f) {
        _0x4ab75d = _0x4ab75d - 256;
        const _0x74c072 = _0x48ef[_0x4ab75d];

        return _0x74c072;
    }, _0x6463(_0x228f5c, _0x414693);
}
function testUint32(_0x4099b3, _0x21ad52 = _0x4099b3) {
    const _0x438821 = _0x1aa398;

    assert[_0x438821(0x110)](_0x21ad52, test_number[_0x438821(0x118)](_0x4099b3));
}
testUint32(0, 0), testUint32(0, 0), testUint32(4294967295), testUint32(4294967296, 0), testUint32(4294967297, 1), testUint32(73014444033, 1), testUint32(-1, 4294967295);
function testInt32(_0x9b74c8, _0x5157c0 = _0x9b74c8) {
    assert.strictEqual(_0x5157c0, test_number.TestInt32Truncation(_0x9b74c8));
}
testInt32(0, 0), testInt32(0, 0), testInt32(-Math[_0x1aa398(0x119)](2, 31)), testInt32(Math.pow(2, 31) - 1), testInt32(4294967297, 1), testInt32(4294967296, 0), testInt32(4294967295, -1), testInt32(21474836483, 3), testInt32(Number.MIN_SAFE_INTEGER, 1), testInt32(Number[_0x1aa398(0x11a)], -1), testInt32(-Math[_0x1aa398(0x119)](2, 63) + (Math.pow(2, 9) + 1), 1024), testInt32(Math[_0x1aa398(0x119)](2, 63) - (Math[_0x1aa398(0x119)](2, 9) + 1), -1024), testInt32(-Number[_0x1aa398(0x113)], 0), testInt32(Number[_0x1aa398(0x113)], 0), testInt32(-Number[_0x1aa398(0x114)], 0), testInt32(Number[_0x1aa398(0x114)], 0), testInt32(-Math.pow(2, 63) + Math[_0x1aa398(0x119)](2, 9), 0), testInt32(Math[_0x1aa398(0x119)](2, 63) - Math[_0x1aa398(0x119)](2, 9), 0), testInt32(Number[_0x1aa398(0x115)], 0), testInt32(Number[_0x1aa398(0x116)], 0), testInt32(Number[_0x1aa398(0x117)], 0);
function testInt64(_0x509e14, _0x577650 = _0x509e14) {
    const _0x5b0070 = _0x1aa398;

    assert[_0x5b0070(0x110)](_0x577650, test_number[_0x5b0070(0x11b)](_0x509e14));
}

const RANGEERROR_POSITIVE = Math[_0x1aa398(0x119)](2, 63);

const RANGEERROR_NEGATIVE = -Math[_0x1aa398(0x119)](2, 63);

testInt64(0, 0), testInt64(0, 0), testInt64(Number.MIN_SAFE_INTEGER), testInt64(Number[_0x1aa398(0x11a)]), testInt64(-Math[_0x1aa398(0x119)](2, 63) + (Math[_0x1aa398(0x119)](2, 9) + 1)), testInt64(Math.pow(2, 63) - (Math.pow(2, 9) + 1)), testInt64(-Number[_0x1aa398(0x113)], 0), testInt64(Number[_0x1aa398(0x113)], 0), testInt64(-Number[_0x1aa398(0x114)], RANGEERROR_NEGATIVE), testInt64(Number[_0x1aa398(0x114)], RANGEERROR_POSITIVE), testInt64(-Math[_0x1aa398(0x119)](2, 63) + Math[_0x1aa398(0x119)](2, 9), RANGEERROR_NEGATIVE), testInt64(Math[_0x1aa398(0x119)](2, 63) - Math[_0x1aa398(0x119)](2, 9), RANGEERROR_POSITIVE), testInt64(Number[_0x1aa398(0x115)], 0), testInt64(Number[_0x1aa398(0x116)], 0), testInt64(Number[_0x1aa398(0x117)], 0);
