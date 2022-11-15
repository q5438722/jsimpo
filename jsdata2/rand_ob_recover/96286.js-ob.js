var parse = require('../'), test = require(_0x4d641e(227));
test('dotted alias', function (_0x4a13a9) {
    var _0x1acebc = _0x4d641e, _0x4bf6c8 = {
            'gVdLq': function (_0x13c1c8, _0x4ad969, _0x13f69d) {
                return _0x13c1c8(_0x4ad969, _0x13f69d);
            },
            'EBcKb': _0x1acebc(228),
            'iydHK': _0x1acebc(229)
        }, _0x32aa6b = _0x4bf6c8[_0x1acebc(230)](parse, [
            _0x4bf6c8[_0x1acebc(231)],
            '22'
        ], {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x4bf6c8['iydHK'] }
        });
    _0x4a13a9[_0x1acebc(232)](_0x32aa6b['a']['b'], -374 * -1 + -2377 + -3 * -675), _0x4a13a9[_0x1acebc(232)](_0x32aa6b['aa']['bb'], -10 * 764 + -6279 + 13941), _0x4a13a9[_0x1acebc(233)]();
}), test('dotted default', function (_0x1550fa) {
    var _0x3245d1 = _0x4d641e, _0x3359a6 = {
            'TmNmy': function (_0x21a205, _0x1bb4c8, _0x53541d) {
                return _0x21a205(_0x1bb4c8, _0x53541d);
            },
            'hUYRl': _0x3245d1(229)
        }, _0x52735d = _0x3359a6[_0x3245d1(234)](parse, '', {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x3359a6[_0x3245d1(235)] }
        });
    _0x1550fa[_0x3245d1(232)](_0x52735d['a']['b'], 8617 + -4293 * 1 + 1 * -4313), _0x1550fa[_0x3245d1(232)](_0x52735d['aa']['bb'], 8917 + 2 * -4367 + -172), _0x1550fa['end']();
}), test(_0x4d641e(236), function (_0x5668e4) {
    var _0x175f03 = _0x4d641e, _0x51995f = parse('', { 'default': { 'a.b': 11 } });
    _0x5668e4[_0x175f03(232)](_0x51995f['a']['b'], 7443 + -1 * -9992 + -8712 * 2), _0x5668e4[_0x175f03(233)]();
});