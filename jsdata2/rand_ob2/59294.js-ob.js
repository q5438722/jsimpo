const _0x504f = [
    '1iZIFkT',
    '93878CEvxwX',
    '422833oTGact',
    '16GfkkHd',
    '14012leFCXV',
    '1717915PPEeXl',
    'start',
    'Test\x20Counters\x20collection\x20enabling\x20and\x20disabling.',
    'log',
    'Expected\x20error:\x20\x22',
    'message',
    'Runtime',
    'enable',
    'getCounters',
    'Profiler',
    'enableCounters',
    'evaluate',
    'callee',
    'name',
    'result',
    'Some\x20counters\x20reported',
    'disableCounters',
    'length',
    'Less\x20counters\x20reported',
    'disable',
    'catch',
    'caught:\x20',
    '564090dBXvJF',
    '239303JZPExb',
    '196699IoLWgm'
];
const _0x3cd29d = _0x2f34;
(function (_0x4f3ea4, _0x56be92) {
    const _0x3150c4 = _0x2f34;
    while (!![]) {
        try {
            const _0x145b68 = -parseInt(_0x3150c4(0x8a)) + -parseInt(_0x3150c4(0x8b)) + -parseInt(_0x3150c4(0x8c)) * -parseInt(_0x3150c4(0x8d)) + -parseInt(_0x3150c4(0x8e)) + -parseInt(_0x3150c4(0x8f)) + -parseInt(_0x3150c4(0x90)) * parseInt(_0x3150c4(0x91)) + parseInt(_0x3150c4(0x92));
            if (_0x145b68 === _0x56be92)
                break;
            else
                _0x4f3ea4['push'](_0x4f3ea4['shift']());
        } catch (_0x309c54) {
            _0x4f3ea4['push'](_0x4f3ea4['shift']());
        }
    }
}(_0x504f, 0x5a68e));
let {session, contextGroup, Protocol} = InspectorTest[_0x3cd29d(0x93)](_0x3cd29d(0x94));
var source = '\x0afunction\x20fib(x)\x20{\x0a\x20\x20if\x20(x\x20<\x202)\x20return\x201;\x0a\x20\x20return\x20fib(x-1)\x20+\x20fib(x-2);\x0a}\x0afib(5);\x0a';
function _0x2f34(_0x406d5c, _0xca4e4) {
    return _0x2f34 = function (_0x504f5c, _0x2f3455) {
        _0x504f5c = _0x504f5c - 0x8a;
        let _0x4bfd89 = _0x504f[_0x504f5c];
        return _0x4bfd89;
    }, _0x2f34(_0x406d5c, _0xca4e4);
}
function logErrorMessage(_0x199ded) {
    const _0xa7af8f = _0x3cd29d;
    InspectorTest[_0xa7af8f(0x95)](_0xa7af8f(0x96) + _0x199ded['error'][_0xa7af8f(0x97)] + '\x22');
}
(async function test() {
    const _0x3bed2c = _0x3cd29d;
    await Protocol[_0x3bed2c(0x98)][_0x3bed2c(0x99)](), logErrorMessage(await Protocol['Profiler'][_0x3bed2c(0x9a)]()), await Protocol[_0x3bed2c(0x9b)]['enableCounters'](), logErrorMessage(await Protocol[_0x3bed2c(0x9b)][_0x3bed2c(0x9c)]()), await Protocol[_0x3bed2c(0x98)][_0x3bed2c(0x9d)]({
        'expression': source,
        'sourceURL': arguments[_0x3bed2c(0x9e)][_0x3bed2c(0x9f)],
        'persistScript': !![]
    });
    const _0x4b0733 = (await Protocol['Profiler']['getCounters']())[_0x3bed2c(0xa0)][_0x3bed2c(0xa0)];
    if (_0x4b0733['length'] > 0x0)
        InspectorTest[_0x3bed2c(0x95)](_0x3bed2c(0xa1));
    await Protocol[_0x3bed2c(0x9b)][_0x3bed2c(0xa2)](), logErrorMessage(await Protocol[_0x3bed2c(0x9b)][_0x3bed2c(0x9a)]()), await Protocol[_0x3bed2c(0x9b)][_0x3bed2c(0x9c)]();
    const _0x55ad84 = (await Protocol[_0x3bed2c(0x9b)][_0x3bed2c(0x9a)]())[_0x3bed2c(0xa0)][_0x3bed2c(0xa0)];
    if (_0x55ad84['length'] > 0x0 && _0x55ad84['length'] < _0x4b0733[_0x3bed2c(0xa3)])
        InspectorTest[_0x3bed2c(0x95)](_0x3bed2c(0xa4));
    await Protocol['Profiler'][_0x3bed2c(0xa2)](), await Protocol['Runtime'][_0x3bed2c(0xa5)](), InspectorTest['completeTest']();
}()[_0x3cd29d(0xa6)](_0x237950 => InspectorTest[_0x3cd29d(0x95)](_0x3cd29d(0xa7) + _0x237950)));
