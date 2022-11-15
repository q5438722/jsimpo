var parse = require('../');
var test = require('tape');
test('dotted alias', function (_0x3b45ef) {
    var _0x3603fa = parse([
        '--a.b',
        '22'
    ], {
        'default': { 'a.b': 11 },
        'alias': { 'a.b': 'aa.bb' }
    });
    _0x3b45ef['equal'](_0x3603fa['a']['b'], 22);
    _0x3b45ef['equal'](_0x3603fa['aa']['bb'], 22);
    _0x3b45ef['end']();
});
test('dotted default', function (_0x48d457) {
    var _0x248354 = parse('', {
        'default': { 'a.b': 11 },
        'alias': { 'a.b': 'aa.bb' }
    });
    _0x48d457['equal'](_0x248354['a']['b'], 11);
    _0x48d457['equal'](_0x248354['aa']['bb'], 11);
    _0x48d457['end']();
});
test('dotted default with no alias', function (_0x1da357) {
    var _0x567ed4 = parse('', { 'default': { 'a.b': 11 } });
    _0x1da357['equal'](_0x567ed4['a']['b'], 11);
    _0x1da357['end']();
});