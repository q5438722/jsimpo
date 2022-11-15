const _0x3b65 = [
    'long',
    '988\x20million',
    'compactDisplay',
    'format',
    '98.765',
    '9876',
    '99\x20Millionen',
    '99\x20Tausend',
    '9,9\x20Tausend',
    '9.9億',
    '9877萬',
    '9.9萬',
    '9877万',
    '9.9万',
    '9.9억',
    '9.9만',
    '9.9천',
    '987',
    '9877만',
    '1meLXlL',
    '1414184mHyRxb',
    '133079QTwKTc',
    '3620cQpLwC',
    '439DIytGn',
    '545652XIWVne',
    '1616960tvVovU',
    '122967vnPZwX',
    '2099116iBQRkM',
    'NumberFormat',
    'standard',
    'resolvedOptions',
    'notation',
    'percent',
    'scientific',
    '9.877E8',
    'engineering',
    '988M',
    'compact',
    'short'
];
function _0x4323(_0x3d1118, _0x1e0cb7) {
    return _0x4323 = function (_0x3b65c4, _0x432334) {
        _0x3b65c4 = _0x3b65c4 - 0x12c;
        let _0x1dc2cd = _0x3b65[_0x3b65c4];
        return _0x1dc2cd;
    }, _0x4323(_0x3d1118, _0x1e0cb7);
}
const _0x15102b = _0x4323;
(function (_0x5eae59, _0x3270fe) {
    const _0x36d2f7 = _0x4323;
    while (!![]) {
        try {
            const _0x17c5b3 = -parseInt(_0x36d2f7(0x12c)) * -parseInt(_0x36d2f7(0x12d)) + -parseInt(_0x36d2f7(0x12e)) + parseInt(_0x36d2f7(0x12f)) * -parseInt(_0x36d2f7(0x130)) + parseInt(_0x36d2f7(0x131)) + -parseInt(_0x36d2f7(0x132)) + parseInt(_0x36d2f7(0x133)) + parseInt(_0x36d2f7(0x134));
            if (_0x17c5b3 === _0x3270fe)
                break;
            else
                _0x5eae59['push'](_0x5eae59['shift']());
        } catch (_0x4cf19b) {
            _0x5eae59['push'](_0x5eae59['shift']());
        }
    }
}(_0x3b65, 0xcdbcc));
let nf = new Intl[(_0x15102b(0x135))]();
assertEquals(_0x15102b(0x136), nf['resolvedOptions']()['notation']), nf = new Intl[(_0x15102b(0x135))]('en'), assertEquals(_0x15102b(0x136), nf[_0x15102b(0x137)]()[_0x15102b(0x138)]), nf = new Intl[(_0x15102b(0x135))]('en', { 'style': _0x15102b(0x139) }), assertEquals(_0x15102b(0x136), nf[_0x15102b(0x137)]()[_0x15102b(0x138)]);
const testData = [
    [
        _0x15102b(0x136),
        undefined,
        '987,654,321'
    ],
    [
        _0x15102b(0x13a),
        undefined,
        _0x15102b(0x13b)
    ],
    [
        _0x15102b(0x13c),
        undefined,
        '987.654E6'
    ],
    [
        'compact',
        undefined,
        _0x15102b(0x13d)
    ],
    [
        _0x15102b(0x13e),
        _0x15102b(0x13f),
        _0x15102b(0x13d)
    ],
    [
        _0x15102b(0x13e),
        _0x15102b(0x140),
        _0x15102b(0x141)
    ]
];
for (const [notation, compactDisplay, expect1] of testData) {
    nf = new Intl[(_0x15102b(0x135))]('en', {
        'notation': notation,
        'compactDisplay': compactDisplay
    }), assertEquals(notation, nf['resolvedOptions']()[_0x15102b(0x138)]);
    if (notation != 'compact')
        assertEquals(undefined, nf[_0x15102b(0x137)]()['compactDisplay']);
    else
        compactDisplay == _0x15102b(0x140) ? assertEquals(_0x15102b(0x140), nf[_0x15102b(0x137)]()[_0x15102b(0x142)]) : assertEquals(_0x15102b(0x13f), nf['resolvedOptions']()[_0x15102b(0x142)]);
    assertEquals(expect1, nf[_0x15102b(0x143)](0x3ade68b1));
}
let notation = _0x15102b(0x13e);
nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': _0x15102b(0x13f)
}), assertEquals('988\u00a0Mio.', nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals('99\u00a0Mio.', nf[_0x15102b(0x143)](0x5e30a78)), assertEquals(_0x15102b(0x144), nf['format'](0x181cd)), assertEquals(_0x15102b(0x145), nf['format'](0x2694)), nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': _0x15102b(0x140)
}), assertEquals('988\x20Millionen', nf['format'](0x3ade68b1)), assertEquals(_0x15102b(0x146), nf[_0x15102b(0x143)](0x5e30a78)), assertEquals(_0x15102b(0x147), nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x148), nf[_0x15102b(0x143)](0x2694)), nf = new Intl[(_0x15102b(0x135))]('zh-TW', {
    'notation': notation,
    'compactDisplay': _0x15102b(0x13f)
}), assertEquals(_0x15102b(0x149), nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals(_0x15102b(0x14a), nf[_0x15102b(0x143)](0x5e30a78)), assertEquals(_0x15102b(0x14b), nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x145), nf[_0x15102b(0x143)](0x2694)), nf = new Intl[(_0x15102b(0x135))]('zh-TW', {
    'notation': notation,
    'compactDisplay': _0x15102b(0x140)
}), assertEquals(_0x15102b(0x149), nf['format'](0x3ade68b1)), assertEquals(_0x15102b(0x14a), nf[_0x15102b(0x143)](0x5e30a78)), assertEquals('9.9萬', nf[_0x15102b(0x143)](0x181cd)), assertEquals('9876', nf[_0x15102b(0x143)](0x2694)), nf = new Intl[(_0x15102b(0x135))]('ja', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('9.9億', nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals(_0x15102b(0x14c), nf['format'](0x5e30a78)), assertEquals(_0x15102b(0x14d), nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x145), nf[_0x15102b(0x143)](0x2694)), nf = new Intl[(_0x15102b(0x135))]('ja', {
    'notation': notation,
    'compactDisplay': _0x15102b(0x140)
}), assertEquals(_0x15102b(0x149), nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals(_0x15102b(0x14c), nf['format'](0x5e30a78)), assertEquals(_0x15102b(0x14d), nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x145), nf[_0x15102b(0x143)](0x2694)), nf = new Intl[(_0x15102b(0x135))]('ko', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals(_0x15102b(0x14e), nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals('9877만', nf['format'](0x5e30a78)), assertEquals(_0x15102b(0x14f), nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x150), nf[_0x15102b(0x143)](0x2694)), assertEquals(_0x15102b(0x151), nf[_0x15102b(0x143)](0x3db)), nf = new Intl[(_0x15102b(0x135))]('ko', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals(_0x15102b(0x14e), nf[_0x15102b(0x143)](0x3ade68b1)), assertEquals(_0x15102b(0x152), nf[_0x15102b(0x143)](0x5e30a78)), assertEquals('9.9만', nf[_0x15102b(0x143)](0x181cd)), assertEquals(_0x15102b(0x150), nf[_0x15102b(0x143)](0x2694)), assertEquals('987', nf[_0x15102b(0x143)](0x3db));
