let nf = new Intl[(_0x15102b(309))]();
assertEquals(_0x15102b(310), nf['resolvedOptions']()['notation']), nf = new Intl[(_0x15102b(309))]('en'), assertEquals(_0x15102b(310), nf[_0x15102b(311)]()[_0x15102b(312)]), nf = new Intl[(_0x15102b(309))]('en', { 'style': _0x15102b(313) }), assertEquals(_0x15102b(310), nf[_0x15102b(311)]()[_0x15102b(312)]);
const testData = [
    [
        _0x15102b(310),
        undefined,
        '987,654,321'
    ],
    [
        _0x15102b(314),
        undefined,
        _0x15102b(315)
    ],
    [
        _0x15102b(316),
        undefined,
        '987.654E6'
    ],
    [
        'compact',
        undefined,
        _0x15102b(317)
    ],
    [
        _0x15102b(318),
        _0x15102b(319),
        _0x15102b(317)
    ],
    [
        _0x15102b(318),
        _0x15102b(320),
        _0x15102b(321)
    ]
];
for (const [notation, compactDisplay, expect1] of testData) {
    nf = new Intl[(_0x15102b(309))]('en', {
        'notation': notation,
        'compactDisplay': compactDisplay
    }), assertEquals(notation, nf['resolvedOptions']()[_0x15102b(312)]);
    if (notation != 'compact')
        assertEquals(undefined, nf[_0x15102b(311)]()['compactDisplay']);
    else
        compactDisplay == _0x15102b(320) ? assertEquals(_0x15102b(320), nf[_0x15102b(311)]()[_0x15102b(322)]) : assertEquals(_0x15102b(319), nf['resolvedOptions']()[_0x15102b(322)]);
    assertEquals(expect1, nf[_0x15102b(323)](987654321));
}
let notation = _0x15102b(318);
nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': _0x15102b(319)
}), assertEquals('988\xA0Mio.', nf[_0x15102b(323)](987654321)), assertEquals('99\xA0Mio.', nf[_0x15102b(323)](98765432)), assertEquals(_0x15102b(324), nf['format'](98765)), assertEquals(_0x15102b(325), nf['format'](9876)), nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': _0x15102b(320)
}), assertEquals('988 Millionen', nf['format'](987654321)), assertEquals(_0x15102b(326), nf[_0x15102b(323)](98765432)), assertEquals(_0x15102b(327), nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(328), nf[_0x15102b(323)](9876)), nf = new Intl[(_0x15102b(309))]('zh-TW', {
    'notation': notation,
    'compactDisplay': _0x15102b(319)
}), assertEquals(_0x15102b(329), nf[_0x15102b(323)](987654321)), assertEquals(_0x15102b(330), nf[_0x15102b(323)](98765432)), assertEquals(_0x15102b(331), nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(325), nf[_0x15102b(323)](9876)), nf = new Intl[(_0x15102b(309))]('zh-TW', {
    'notation': notation,
    'compactDisplay': _0x15102b(320)
}), assertEquals(_0x15102b(329), nf['format'](987654321)), assertEquals(_0x15102b(330), nf[_0x15102b(323)](98765432)), assertEquals('9.9萬', nf[_0x15102b(323)](98765)), assertEquals('9876', nf[_0x15102b(323)](9876)), nf = new Intl[(_0x15102b(309))]('ja', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('9.9億', nf[_0x15102b(323)](987654321)), assertEquals(_0x15102b(332), nf['format'](98765432)), assertEquals(_0x15102b(333), nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(325), nf[_0x15102b(323)](9876)), nf = new Intl[(_0x15102b(309))]('ja', {
    'notation': notation,
    'compactDisplay': _0x15102b(320)
}), assertEquals(_0x15102b(329), nf[_0x15102b(323)](987654321)), assertEquals(_0x15102b(332), nf['format'](98765432)), assertEquals(_0x15102b(333), nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(325), nf[_0x15102b(323)](9876)), nf = new Intl[(_0x15102b(309))]('ko', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals(_0x15102b(334), nf[_0x15102b(323)](987654321)), assertEquals('9877만', nf['format'](98765432)), assertEquals(_0x15102b(335), nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(336), nf[_0x15102b(323)](9876)), assertEquals(_0x15102b(337), nf[_0x15102b(323)](987)), nf = new Intl[(_0x15102b(309))]('ko', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals(_0x15102b(334), nf[_0x15102b(323)](987654321)), assertEquals(_0x15102b(338), nf[_0x15102b(323)](98765432)), assertEquals('9.9만', nf[_0x15102b(323)](98765)), assertEquals(_0x15102b(336), nf[_0x15102b(323)](9876)), assertEquals('987', nf[_0x15102b(323)](987));