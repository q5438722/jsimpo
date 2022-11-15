'use strict';
const _0x5516 = [
    '302949LjqDou',
    '520708YwGeqA',
    '516575IKMZox',
    '432565ZHmTtm',
    '97AnkXbv',
    '2469cHdDzQ',
    '352472fsBVJa',
    '1vqvjrM',
    '../common.js',
    'perf_hooks',
    'all',
    'measure',
    'mark',
    'a\x20to\x20b',
    'end',
    'observe',
    'start',
    '71936MhXTjF'
];
function _0x3bef(_0x493c2b, _0x3add87) {
    return _0x3bef = function (_0x5516ed, _0x3bef5b) {
        _0x5516ed = _0x5516ed - 0x195;
        let _0x40bb74 = _0x5516[_0x5516ed];
        return _0x40bb74;
    }, _0x3bef(_0x493c2b, _0x3add87);
}
const _0x4a8142 = _0x3bef;
(function (_0x164b1f, _0x429587) {
    const _0x34d366 = _0x3bef;
    while (!![]) {
        try {
            const _0xeb2ade = parseInt(_0x34d366(0x195)) + parseInt(_0x34d366(0x196)) + parseInt(_0x34d366(0x197)) + parseInt(_0x34d366(0x198)) + -parseInt(_0x34d366(0x199)) + parseInt(_0x34d366(0x19a)) * -parseInt(_0x34d366(0x19b)) + -parseInt(_0x34d366(0x19c)) * parseInt(_0x34d366(0x19d));
            if (_0xeb2ade === _0x429587)
                break;
            else
                _0x164b1f['push'](_0x164b1f['shift']());
        } catch (_0x543819) {
            _0x164b1f['push'](_0x164b1f['shift']());
        }
    }
}(_0x5516, 0x5ea36));
const common = require(_0x4a8142(0x19e)), {PerformanceObserver, performance} = require(_0x4a8142(0x19f)), bench = common['createBenchmark'](main, {
        'n': [0x186a0],
        'observe': [
            _0x4a8142(0x1a0),
            _0x4a8142(0x1a1)
        ]
    });
function test() {
    const _0x353fff = _0x4a8142;
    performance['mark']('a'), performance[_0x353fff(0x1a2)]('b'), performance[_0x353fff(0x1a1)](_0x353fff(0x1a3), 'a', 'b');
}
function main({
    n: _0x30aa12,
    observe: _0x8ee9df
}) {
    const _0x1dd8b2 = _0x4a8142, _0x386e11 = _0x8ee9df === 'all' ? [
            _0x1dd8b2(0x1a2),
            _0x1dd8b2(0x1a1)
        ] : [_0x8ee9df], _0xaa20ea = new PerformanceObserver(() => {
            const _0x37d701 = _0x1dd8b2;
            bench[_0x37d701(0x1a4)](_0x30aa12);
        });
    _0xaa20ea[_0x1dd8b2(0x1a5)]({
        'entryTypes': _0x386e11,
        'buffered': !![]
    }), bench[_0x1dd8b2(0x1a6)](), performance[_0x1dd8b2(0x1a2)](_0x1dd8b2(0x1a6));
    for (let _0x5b9f81 = 0x0; _0x5b9f81 < 0x186a0; _0x5b9f81++)
        test();
}
