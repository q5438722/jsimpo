var parse = require(_0x2d69ab(162)), test = require(_0x2d69ab(163));
test(_0x2d69ab(164), function (_0x57d472) {
    var _0x551790 = _0x2d69ab, _0x3e9214 = {
            'IncBG': function (_0x4cc64c, _0x3f873b, _0x5d4922) {
                return _0x4cc64c(_0x3f873b, _0x5d4922);
            },
            'MgITF': _0x551790(165),
            'miweO': _0x551790(166)
        }, _0x38747c = _0x3e9214[_0x551790(167)](parse, [
            _0x3e9214[_0x551790(168)],
            '22'
        ], {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x3e9214[_0x551790(169)] }
        });
    _0x57d472['equal'](_0x38747c['a']['b'], 48 * 11 + 1 * -4281 + 5 * 755), _0x57d472[_0x551790(170)](_0x38747c['aa']['bb'], -1019 * 4 + -2937 + -3 * -2345), _0x57d472[_0x551790(171)]();
}), test(_0x2d69ab(172), function (_0x6ef7d1) {
    var _0x131568 = _0x2d69ab, _0xe4ca99 = {
            'IhDDS': function (_0x4512d6, _0x54aebc, _0x419527) {
                return _0x4512d6(_0x54aebc, _0x419527);
            },
            'utnBm': _0x131568(166)
        }, _0x539260 = _0xe4ca99[_0x131568(173)](parse, '', {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0xe4ca99['utnBm'] }
        });
    _0x6ef7d1[_0x131568(170)](_0x539260['a']['b'], -7083 + -1 * 9601 + 16695), _0x6ef7d1[_0x131568(170)](_0x539260['aa']['bb'], 1 * -5315 + 394 * -21 + 13600), _0x6ef7d1[_0x131568(171)]();
}), test('dotted default with no alias', function (_0x435110) {
    var _0x4bf956 = _0x2d69ab, _0x284306 = {
            'jXeol': function (_0x27758b, _0x5b0dcb, _0x3db075) {
                return _0x27758b(_0x5b0dcb, _0x3db075);
            }
        }, _0x157d3a = _0x284306[_0x4bf956(174)](parse, '', { 'default': { 'a.b': 11 } });
    _0x435110[_0x4bf956(170)](_0x157d3a['a']['b'], 14 * 53 + 6777 + 2 * -3754), _0x435110[_0x4bf956(171)]();
});