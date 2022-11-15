let nf = new Intl['NumberFormat']();
assertEquals('standard', nf['resolvedOptions']()['notation']), nf = new Intl['NumberFormat']('en'), assertEquals('standard', nf['resolvedOptions']()['notation']), nf = new Intl['NumberFormat']('en', { 'style': 'percent' }), assertEquals('standard', nf['resolvedOptions']()['notation']);
const testData = [
    [
        'standard',
        undefined,
        '987,654,321'
    ],
    [
        'scientific',
        undefined,
        '9.877E8'
    ],
    [
        'engineering',
        undefined,
        '987.654E6'
    ],
    [
        'compact',
        undefined,
        '988M'
    ],
    [
        'compact',
        'short',
        '988M'
    ],
    [
        'compact',
        'long',
        '988\x20million'
    ]
];
for (const [notation, compactDisplay, expect1] of testData) {
    nf = new Intl['NumberFormat']('en', {
        'notation': notation,
        'compactDisplay': compactDisplay
    }), assertEquals(notation, nf['resolvedOptions']()['notation']);
    if (notation != 'compact')
        assertEquals(undefined, nf['resolvedOptions']()['compactDisplay']);
    else
        compactDisplay == 'long' ? assertEquals('long', nf['resolvedOptions']()['compactDisplay']) : assertEquals('short', nf['resolvedOptions']()['compactDisplay']);
    assertEquals(expect1, nf['format'](-0x166db839 + 0x162bcfb * 0x8 + -0x231b1c89 * -0x2));
}
let notation = 'compact';
nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('988\u00a0Mio.', nf['format'](-0x2b833ea9 + 0x1571e8ae + -0xab2 * -0x79146)), assertEquals('99\u00a0Mio.', nf['format'](-0xab47b47 + 0x64651da + 0xa5133e5)), assertEquals('98.765', nf['format'](0x2d84b + 0x9 * -0x456e + 0x11a60)), assertEquals('9876', nf['format'](-0x6cb * 0x4 + -0x6 * 0x41 + 0x4f * 0xda)), nf = new Intl['NumberFormat']('de', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals('988\x20Millionen', nf['format'](0x182537 * -0x469 + 0x565bbe * -0xa7 + -0xd0a6012 * -0x11)), assertEquals('99\x20Millionen', nf['format'](-0x1b2e495 + 0x58c6c54 + 0x1 * 0x20982b9)), assertEquals('99\x20Tausend', nf['format'](0x281 * -0x127 + 0x1 * 0x268ac + 0x1fbc8)), assertEquals('9,9\x20Tausend', nf['format'](0x2232 * -0x2 + -0x1 * -0x2641 + -0x1 * -0x44b7)), nf = new Intl['NumberFormat']('zh-TW', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('9.9億', nf['format'](-0x79572c2 * -0xf + 0x1 * 0x60446c13 + -0x120 * 0x865c36)), assertEquals('9877萬', nf['format'](0x5654fe6 + -0x8af * -0xa815 + 0x10ac3f5 * -0x5)), assertEquals('9.9萬', nf['format'](-0x47d + 0x25ebd + 0xd873 * -0x1)), assertEquals('9876', nf['format'](-0x3b9e + 0x45d2 + 0x10 * 0x1c6)), nf = new Intl['NumberFormat']('zh-TW', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals('9.9億', nf['format'](0xa518f65 + -0x3da9e6d9 * 0x1 + -0x6e36c025 * -0x1)), assertEquals('9877萬', nf['format'](0x1 * -0x660e30b + -0x2bb74 * 0x305 + -0x7 * -0x2ee4741)), assertEquals('9.9萬', nf['format'](-0x1 * -0x269bf + 0x589 * 0xb + -0x124d5)), assertEquals('9876', nf['format'](0x1 * -0x2759 + -0x6 * 0x95c + 0x8615 * 0x1)), nf = new Intl['NumberFormat']('ja', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('9.9億', nf['format'](-0x13 * -0x268c77 + 0x2e1498ee * -0x1 + 0x6 * 0x1103c377)), assertEquals('9877万', nf['format'](0x83880cf * 0x1 + 0x5bf3378 + 0x1 * -0x814a9cf)), assertEquals('9.9万', nf['format'](-0x22c2d + 0xf7 * -0xdb + 0x3 * 0x1806d)), assertEquals('9876', nf['format'](0x1 * 0x1bb + 0x1 * 0x446f + 0x1f96 * -0x1)), nf = new Intl['NumberFormat']('ja', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals('9.9億', nf['format'](0x1f6eca35 * -0x3 + 0x70edd399 + 0x283cf3b7)), assertEquals('9877万', nf['format'](-0x31 * 0x35edb1 + 0x1a64ea2 * 0x1 + 0xe8f3ab7 * 0x1)), assertEquals('9.9万', nf['format'](0x1 * 0x18000 + -0x1445 * -0x9 + -0xb4a0)), assertEquals('9876', nf['format'](0x6 * 0x69 + -0x4a1d + 0x1 * 0x6e3b)), nf = new Intl['NumberFormat']('ko', {
    'notation': notation,
    'compactDisplay': 'short'
}), assertEquals('9.9억', nf['format'](0x30bfe297 * -0x2 + -0xf * -0x7a571cb + -0x2fa095b * -0xe)), assertEquals('9877만', nf['format'](-0xa698acb + 0x2 * -0xc0d26d + 0x11ce3a1d)), assertEquals('9.9만', nf['format'](0x1e619 + 0x2a876 + -0x30cc2)), assertEquals('9.9천', nf['format'](-0x2 * 0x1652 + 0x1bfb + 0x373d)), assertEquals('987', nf['format'](0x781 + 0x5 * 0x79f + 0x5f7 * -0x7)), nf = new Intl['NumberFormat']('ko', {
    'notation': notation,
    'compactDisplay': 'long'
}), assertEquals('9.9억', nf['format'](-0x6614c5a5 + -0x337875d5 + 0xd46ba42b)), assertEquals('9877만', nf['format'](-0xd * 0xf76e1 + 0x3821f4 + -0x213 * -0x31c6b)), assertEquals('9.9만', nf['format'](-0x64ea * 0x1 + -0x3264 + 0x2191b)), assertEquals('9.9천', nf['format'](-0x388 * -0xf + -0x4b8 + -0x9ac)), assertEquals('987', nf['format'](-0x1177 + -0x1 * 0x16b1 + 0x2c03));
