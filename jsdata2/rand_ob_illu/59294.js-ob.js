const _0x10d0 = ['log', 'TEmvB', 'XCcol', 'error', 'Less counters reported', 'Runtime', 'Profiler', 'getCounters', 'enableCounters', 'evaluate', 'callee', 'name', 'result', 'hohah', 'Some counters reported', 'disableCounters', 'mNZwL', 'length', 'npYCd', 'completeTest', 'catch', 'caught: ', '62GoJSxw', '17uNXjLI', '318267cjOnIC', '315768xNzapi', '1uCmIac', '485971FXLiEK', '638212bRicJf', '701pecXlA', '1048AFdXxV', '906145mUHtxi', '1PFAHVB', 'Test Counters collection enabling and disabling.', 'Expected error: "'];

function _0x3f01(_0x276de5, _0x4e9b17) {
    return _0x3f01 = function (_0xa07b48, _0x4ab7d1) {
        _0xa07b48 = _0xa07b48 - 239;
        const _0x462480 = _0x10d0[_0xa07b48];

        return _0x462480;
    }, _0x3f01(_0x276de5, _0x4e9b17);
}
const _0x30aed0 = _0x3f01;

(function (_0x5e7abd, _0x3fe1e4) {
    const _0x10fab6 = _0x3f01;

    while (true) {
        try {
            const _0x507079 = -parseInt(_0x10fab6(0xef)) * parseInt(_0x10fab6(0xf0)) + -parseInt(_0x10fab6(0xf1)) + parseInt(_0x10fab6(0xf2)) + -parseInt(_0x10fab6(0xf3)) * parseInt(_0x10fab6(0xf4)) + -parseInt(_0x10fab6(0xf5)) + parseInt(_0x10fab6(0xf6)) * parseInt(_0x10fab6(0xf7)) + -parseInt(_0x10fab6(0xf8)) * -parseInt(_0x10fab6(0xf9));

            if (_0x507079 === _0x3fe1e4) break;else _0x5e7abd.push(_0x5e7abd.shift());
        } catch (_0x100af7) {
            _0x5e7abd.push(_0x5e7abd.shift());
        }
    }
})(_0x10d0, 513057);
var { session, contextGroup, Protocol } = InspectorTest.start(_0x30aed0(0xfa));
const source = '\nfunction fib(x) {\n  if (x < 2) return 1;\n  return fib(x-1) + fib(x-2);\n}\nfib(5);\n';

function logErrorMessage(_0x12046a) {
    const _0x1edca4 = _0x30aed0;
    const _0x3e4c16 = {
        'TEmvB': function (_0x2510a7, _0x384f7c) {
            return _0x2510a7 + _0x384f7c;
        },
        'XCcol': _0x1edca4(0xfb)
    };

    InspectorTest[_0x1edca4(0xfc)](_0x3e4c16[_0x1edca4(0xfd)](_0x3e4c16[_0x1edca4(0xfd)](_0x3e4c16[_0x1edca4(0xfe)], _0x12046a[_0x1edca4(0xff)].message), '"'));
}
(async function test() {
    const _0x4bd3e1 = _0x30aed0;
    const _0xdd12f3 = {
        'mNZwL': function (_0x375ca8, _0x145fca) {
            return _0x375ca8(_0x145fca);
        },
        'hohah': function (_0x382172, _0x473006) {
            return _0x382172 > _0x473006;
        },
        'npYCd': function (_0x3c7c77, _0x25c5ee) {
            return _0x3c7c77 < _0x25c5ee;
        },
        'AiMcW': _0x4bd3e1(0x100)
    };

    await Protocol[_0x4bd3e1(0x101)].enable(), _0xdd12f3.mNZwL(logErrorMessage, (await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]())), await Protocol.Profiler[_0x4bd3e1(0x104)](), _0xdd12f3.mNZwL(logErrorMessage, (await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x104)]())), await Protocol[_0x4bd3e1(0x101)][_0x4bd3e1(0x105)]({
        'expression': source,
        'sourceURL': arguments[_0x4bd3e1(0x106)][_0x4bd3e1(0x107)],
        'persistScript': true
    });

    const _0x5847c5 = (await Protocol.Profiler[_0x4bd3e1(0x103)]())[_0x4bd3e1(0x108)][_0x4bd3e1(0x108)];

    if (_0xdd12f3[_0x4bd3e1(0x109)](_0x5847c5.length, 0)) InspectorTest[_0x4bd3e1(0xfc)](_0x4bd3e1(0x10a));
    await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x10b)](), _0xdd12f3[_0x4bd3e1(0x10c)](logErrorMessage, (await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]())), await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x104)]();

    const _0x308628 = (await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]()).result[_0x4bd3e1(0x108)];

    if (_0x308628[_0x4bd3e1(0x10d)] > 0 && _0xdd12f3[_0x4bd3e1(0x10e)](_0x308628[_0x4bd3e1(0x10d)], _0x5847c5[_0x4bd3e1(0x10d)])) InspectorTest[_0x4bd3e1(0xfc)](_0xdd12f3.AiMcW);
    await Protocol.Profiler[_0x4bd3e1(0x10b)](), await Protocol.Runtime.disable(), InspectorTest[_0x4bd3e1(0x10f)]();
})()[_0x30aed0(0x110)](_0x2640dd => InspectorTest[_0x30aed0(0xfc)](_0x30aed0(0x111) + _0x2640dd));
