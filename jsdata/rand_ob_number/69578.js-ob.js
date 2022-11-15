require['ensure']([], function (_0x5c95b3) {
    _0x5c95b3('./split.js');
}), require['ensure']([], function (_0x4572e4) {
    _0x4572e4('./split-2.js');
}, 'split'), it('sorts\x20the\x20usedIds\x20array\x20to\x20prevent\x20churn', function () {
    var _0x54fc7a = require('fs'), _0x72ca2e = require('path'), _0x1f038e = JSON['parse'](_0x54fc7a['readFileSync'](_0x72ca2e['join'](__dirname, 'records.json'), 'utf-8'));
    expect(_0x1f038e['chunks']['usedIds'])['toEqual']([
        0x19fc * -0x1 + 0x1 * 0x566 + 0x136 * 0x11,
        -0xf20 + -0x14af * -0x1 + 0x4f * -0x12,
        -0x2d3 + -0x1 * -0x257a + -0x22a5
    ]);
});
