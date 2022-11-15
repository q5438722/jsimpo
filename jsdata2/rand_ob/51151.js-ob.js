'use strict';
const _0x17df = [
    'end',
    'KYnOc',
    'qmDuw',
    'XQvrA',
    '14DsPuAw',
    '67306jqPUqD',
    '109958Fhinyv',
    '350867UDIpRq',
    '60NyJygW',
    '5659ahXzqT',
    '1106OCIKsG',
    '362xagxgj',
    '205GzEghk',
    '4454uDzPGh',
    '1evUHFF',
    '429987OuAmDe',
    '../common.js',
    'perf_hooks',
    'createBenchmark',
    'all',
    'a\x20to\x20b',
    'mark',
    'measure',
    'QgDgp',
    'start',
    'OQLYp',
    'qAsoq'
];
const _0x5b9778 = _0x369c;
(function (_0x836948, _0x31721) {
    const _0x5eb875 = _0x369c;
    while (!![]) {
        try {
            const _0x3a454a = parseInt(_0x5eb875(0x77)) * parseInt(_0x5eb875(0x78)) + parseInt(_0x5eb875(0x79)) + parseInt(_0x5eb875(0x7a)) + -parseInt(_0x5eb875(0x7b)) * -parseInt(_0x5eb875(0x7c)) + -parseInt(_0x5eb875(0x7d)) * -parseInt(_0x5eb875(0x7e)) + -parseInt(_0x5eb875(0x7f)) * parseInt(_0x5eb875(0x80)) + parseInt(_0x5eb875(0x81)) * -parseInt(_0x5eb875(0x82));
            if (_0x3a454a === _0x31721)
                break;
            else
                _0x836948['push'](_0x836948['shift']());
        } catch (_0x50c088) {
            _0x836948['push'](_0x836948['shift']());
        }
    }
}(_0x17df, -0xcdf * -0xf4 + 0x1223f1 + -0x1233a1 * 0x1));
function _0x369c(_0xc68ac0, _0x4d66e5) {
    return _0x369c = function (_0x2b1831, _0x206611) {
        _0x2b1831 = _0x2b1831 - (-0x14bc + -0xa * 0xfa + 0x1ef7);
        let _0x56aad7 = _0x17df[_0x2b1831];
        return _0x56aad7;
    }, _0x369c(_0xc68ac0, _0x4d66e5);
}
const common = require(_0x5b9778(0x83)), {PerformanceObserver, performance} = require(_0x5b9778(0x84)), bench = common[_0x5b9778(0x85)](main, {
        'n': [0x3c11 * -0xc + -0xe5e4 * -0x1 + -0x3 * -0x125d8],
        'observe': [
            _0x5b9778(0x86),
            'measure'
        ]
    });
function test() {
    const _0x4e1b3a = _0x5b9778, _0x23f38e = { 'QgDgp': _0x4e1b3a(0x87) };
    performance[_0x4e1b3a(0x88)]('a'), performance['mark']('b'), performance[_0x4e1b3a(0x89)](_0x23f38e[_0x4e1b3a(0x8a)], 'a', 'b');
}
function main({
    n: _0x1716be,
    observe: _0x2af115
}) {
    const _0x186c94 = _0x5b9778, _0x55d591 = {
            'OQLYp': _0x186c94(0x88),
            'qAsoq': _0x186c94(0x89),
            'KYnOc': _0x186c94(0x8b),
            'qmDuw': function (_0x26d29b, _0x2b7fd1) {
                return _0x26d29b < _0x2b7fd1;
            },
            'XQvrA': function (_0x518b0e) {
                return _0x518b0e();
            }
        }, _0x588cd = _0x2af115 === 'all' ? [
            _0x55d591[_0x186c94(0x8c)],
            _0x55d591[_0x186c94(0x8d)]
        ] : [_0x2af115], _0x2db61f = new PerformanceObserver(() => {
            const _0xf68ba = _0x186c94;
            bench[_0xf68ba(0x8e)](_0x1716be);
        });
    _0x2db61f['observe']({
        'entryTypes': _0x588cd,
        'buffered': !![]
    }), bench['start'](), performance[_0x186c94(0x88)](_0x55d591[_0x186c94(0x8f)]);
    for (let _0x39d9ec = 0x9fd * -0x2 + 0x19 * 0x149 + -0x11 * 0xb7; _0x55d591[_0x186c94(0x90)](_0x39d9ec, 0x28f2a + -0x25153 + 0x148c9 * 0x1); _0x39d9ec++)
        _0x55d591[_0x186c94(0x91)](test);
}
