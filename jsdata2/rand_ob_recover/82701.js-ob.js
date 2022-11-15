function _0x5257(_0x5aa89f, _0xe3423) {
    return _0x5257 = function (_0x5776f3, _0x1f4956) {
        _0x5776f3 = _0x5776f3 - (51 * 6 + 7029 + 3574 * -2);
        let _0x4b34a3 = _0x3c7d[_0x5776f3];
        return _0x4b34a3;
    }, _0x5257(_0x5aa89f, _0xe3423);
}
const should = require(_0x126f90(198)), supertest = require(_0x126f90(199)), testUtils = require(_0x126f90(200)), config = require(_0x126f90(201)), localUtils = require('./utils'), ghost = testUtils['startGhost'];
let request;
describe('Pages API', function () {
    const _0x296c71 = _0x126f90, _0x39aebb = {
            'zfCGt': _0x296c71(202),
            'eHfaM': _0x296c71(203),
            'YsnfK': 'static-page-test',
            'XUCMu': function (_0x4aa885, _0x3969ff) {
                return _0x4aa885 + _0x3969ff;
            },
            'IeEYu': _0x296c71(204),
            'chAKt': _0x296c71(205),
            'aMezw': function (_0x4c8d77, _0x50bb3c, _0x112afa) {
                return _0x4c8d77(_0x50bb3c, _0x112afa);
            },
            'zCApC': _0x296c71(206),
            'WAdiA': function (_0xaaed53, _0x4ca274) {
                return _0xaaed53(_0x4ca274);
            }
        };
    _0x39aebb[_0x296c71(207)](before, function () {
        const _0x374115 = _0x296c71;
        return ghost()[_0x374115(208)](function (_0x538e10) {
            const _0x44d80f = _0x374115;
            request = supertest['agent'](config[_0x44d80f(209)](_0x39aebb[_0x44d80f(210)]));
        })[_0x374115(208)](function () {
            const _0x8fcef5 = _0x374115;
            return localUtils['doAuth'](request, _0x39aebb[_0x8fcef5(211)]);
        });
    }), _0x39aebb[_0x296c71(212)](describe, 'Edit', function () {
        const _0xba7ea1 = _0x296c71, _0x456a80 = {
                'ugjoV': _0x39aebb['YsnfK'],
                'WiMnL': function (_0xebae7c, _0x13d186) {
                    const _0xf4aa5d = _0x5257;
                    return _0x39aebb[_0xf4aa5d(213)](_0xebae7c, _0x13d186);
                },
                'MKzGN': _0x39aebb['IeEYu'],
                'nbqrg': _0x39aebb[_0xba7ea1(214)],
                'QBtLl': _0xba7ea1(215),
                'OyHUp': 'Cache-Control',
                'MfYKQ': _0x39aebb[_0xba7ea1(210)]
            };
        _0x39aebb['aMezw'](it, _0x39aebb['zCApC'], function () {
            const _0x46a351 = _0xba7ea1, _0x32f5a3 = { 'XpABN': _0x46a351(216) };
            return request[_0x46a351(209)](localUtils[_0x46a351(217)][_0x46a351(218)](_0x46a351(219) + testUtils[_0x46a351(220)][_0x46a351(221)]['posts'][6 * -523 + 17 * 407 + 944 * -4]['id'] + '/'))['set'](_0x456a80[_0x46a351(222)], config[_0x46a351(209)](_0x456a80[_0x46a351(223)]))[_0x46a351(224)](-5804 + 111 * -83 + 15217)['then'](_0x54bf9c => {
                const _0x4e116a = _0x46a351;
                return _0x54bf9c['body'][_0x4e116a(225)][-32 * 83 + 727 * -7 + -7745 * -1][_0x4e116a(226)]['should'][_0x4e116a(227)](_0x456a80[_0x4e116a(228)]), request[_0x4e116a(229)](localUtils[_0x4e116a(217)]['getApiQuery'](_0x456a80['WiMnL'](_0x4e116a(219) + testUtils['DataGenerator'][_0x4e116a(221)][_0x4e116a(203)][-4021 + -6956 + 10982]['id'], _0x456a80['MKzGN'])))[_0x4e116a(230)](_0x456a80[_0x4e116a(222)], config[_0x4e116a(209)](_0x4e116a(202)))[_0x4e116a(231)]({
                    'pages': [{
                            'html': _0x456a80[_0x4e116a(232)],
                            'updated_at': _0x54bf9c[_0x4e116a(233)]['pages'][56 * -148 + -1598 + -2 * -4943][_0x4e116a(234)]
                        }]
                })[_0x4e116a(224)]('Content-Type', /json/)[_0x4e116a(224)](_0x456a80[_0x4e116a(235)], testUtils['cacheRules'][_0x4e116a(236)])[_0x4e116a(224)](4396 + 3358 * -1 + -838);
            })[_0x46a351(208)](_0x4bb160 => {
                const _0x366fee = _0x46a351;
                _0x4bb160['body'][_0x366fee(225)][443 * 1 + -647 * 2 + 851 * 1]['mobiledoc'][_0x366fee(198)][_0x366fee(227)](_0x32f5a3[_0x366fee(237)]);
            });
        });
    });
});