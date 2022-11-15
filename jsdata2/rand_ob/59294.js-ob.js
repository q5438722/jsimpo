const _0x10d0 = [
    'log',
    'TEmvB',
    'XCcol',
    'error',
    'Less\x20counters\x20reported',
    'Runtime',
    'Profiler',
    'getCounters',
    'enableCounters',
    'evaluate',
    'callee',
    'name',
    'result',
    'hohah',
    'Some\x20counters\x20reported',
    'disableCounters',
    'mNZwL',
    'length',
    'npYCd',
    'completeTest',
    'catch',
    'caught:\x20',
    '62GoJSxw',
    '17uNXjLI',
    '318267cjOnIC',
    '315768xNzapi',
    '1uCmIac',
    '485971FXLiEK',
    '638212bRicJf',
    '701pecXlA',
    '1048AFdXxV',
    '906145mUHtxi',
    '1PFAHVB',
    'Test\x20Counters\x20collection\x20enabling\x20and\x20disabling.',
    'Expected\x20error:\x20\x22'
];
function _0x3f01(_0x276de5, _0x4e9b17) {
    return _0x3f01 = function (_0xa07b48, _0x4ab7d1) {
        _0xa07b48 = _0xa07b48 - (0x637 + 0x3 * -0x2d5 + 0x337);
        let _0x462480 = _0x10d0[_0xa07b48];
        return _0x462480;
    }, _0x3f01(_0x276de5, _0x4e9b17);
}
const _0x30aed0 = _0x3f01;
(function (_0x5e7abd, _0x3fe1e4) {
    const _0x10fab6 = _0x3f01;
    while (!![]) {
        try {
            const _0x507079 = -parseInt(_0x10fab6(0xef)) * parseInt(_0x10fab6(0xf0)) + -parseInt(_0x10fab6(0xf1)) + parseInt(_0x10fab6(0xf2)) + -parseInt(_0x10fab6(0xf3)) * parseInt(_0x10fab6(0xf4)) + -parseInt(_0x10fab6(0xf5)) + parseInt(_0x10fab6(0xf6)) * parseInt(_0x10fab6(0xf7)) + -parseInt(_0x10fab6(0xf8)) * -parseInt(_0x10fab6(0xf9));
            if (_0x507079 === _0x3fe1e4)
                break;
            else
                _0x5e7abd['push'](_0x5e7abd['shift']());
        } catch (_0x100af7) {
            _0x5e7abd['push'](_0x5e7abd['shift']());
        }
    }
}(_0x10d0, -0x1 * -0xa95f2 + -0xdc741 * 0x1 + 0xb0570));
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x30aed0(0xfa));
var source = '\x0afunction\x20fib(x)\x20{\x0a\x20\x20if\x20(x\x20<\x202)\x20return\x201;\x0a\x20\x20return\x20fib(x-1)\x20+\x20fib(x-2);\x0a}\x0afib(5);\x0a';
function logErrorMessage(_0x12046a) {
    const _0x1edca4 = _0x30aed0, _0x3e4c16 = {
            'TEmvB': function (_0x2510a7, _0x384f7c) {
                return _0x2510a7 + _0x384f7c;
            },
            'XCcol': _0x1edca4(0xfb)
        };
    InspectorTest[_0x1edca4(0xfc)](_0x3e4c16[_0x1edca4(0xfd)](_0x3e4c16[_0x1edca4(0xfd)](_0x3e4c16[_0x1edca4(0xfe)], _0x12046a[_0x1edca4(0xff)]['message']), '\x22'));
}
(async function test() {
    const _0x4bd3e1 = _0x30aed0, _0xdd12f3 = {
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
    await Protocol[_0x4bd3e1(0x101)]['enable'](), _0xdd12f3['mNZwL'](logErrorMessage, await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]()), await Protocol['Profiler'][_0x4bd3e1(0x104)](), _0xdd12f3['mNZwL'](logErrorMessage, await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x104)]()), await Protocol[_0x4bd3e1(0x101)][_0x4bd3e1(0x105)]({
        'expression': source,
        'sourceURL': arguments[_0x4bd3e1(0x106)][_0x4bd3e1(0x107)],
        'persistScript': !![]
    });
    const _0x5847c5 = (await Protocol['Profiler'][_0x4bd3e1(0x103)]())[_0x4bd3e1(0x108)][_0x4bd3e1(0x108)];
    if (_0xdd12f3[_0x4bd3e1(0x109)](_0x5847c5['length'], 0x85 * 0x2b + -0x24b9 + 0xe62))
        InspectorTest[_0x4bd3e1(0xfc)](_0x4bd3e1(0x10a));
    await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x10b)](), _0xdd12f3[_0x4bd3e1(0x10c)](logErrorMessage, await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]()), await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x104)]();
    const _0x308628 = (await Protocol[_0x4bd3e1(0x102)][_0x4bd3e1(0x103)]())['result'][_0x4bd3e1(0x108)];
    if (_0x308628[_0x4bd3e1(0x10d)] > 0x19a4 + 0x1724 + -0xe * 0x37c && _0xdd12f3[_0x4bd3e1(0x10e)](_0x308628[_0x4bd3e1(0x10d)], _0x5847c5[_0x4bd3e1(0x10d)]))
        InspectorTest[_0x4bd3e1(0xfc)](_0xdd12f3['AiMcW']);
    await Protocol['Profiler'][_0x4bd3e1(0x10b)](), await Protocol['Runtime']['disable'](), InspectorTest[_0x4bd3e1(0x10f)]();
}()[_0x30aed0(0x110)](_0x2640dd => InspectorTest[_0x30aed0(0xfc)](_0x30aed0(0x111) + _0x2640dd)));
