var parse = require('../'), test = require('tape');
test('dotted\x20alias', function (_0x1128ca) {
    var _0x21260a = parse([
        '--a.b',
        '22'
    ], {
        'default': { 'a.b': 0xb },
        'alias': { 'a.b': 'aa.bb' }
    });
    _0x1128ca['equal'](_0x21260a['a']['b'], 0x165a + 0x5 * -0x56e + 0x4e2), _0x1128ca['equal'](_0x21260a['aa']['bb'], -0x20c3 + -0x2555 * 0x1 + 0x462e), _0x1128ca['end']();
}), test('dotted\x20default', function (_0x13fe58) {
    var _0x19996c = parse('', {
        'default': { 'a.b': 0xb },
        'alias': { 'a.b': 'aa.bb' }
    });
    _0x13fe58['equal'](_0x19996c['a']['b'], 0x187c + -0x31 * -0x89 + -0x32aa), _0x13fe58['equal'](_0x19996c['aa']['bb'], 0xb * -0x1b1 + 0x6 * -0x2c + 0x13ae), _0x13fe58['end']();
}), test('dotted\x20default\x20with\x20no\x20alias', function (_0x49b9ed) {
    var _0x8ffcf6 = parse('', { 'default': { 'a.b': 0xb } });
    _0x49b9ed['equal'](_0x8ffcf6['a']['b'], 0x2 * 0x9fc + 0x359 * -0x3 + -0x9e2), _0x49b9ed['end']();
});
