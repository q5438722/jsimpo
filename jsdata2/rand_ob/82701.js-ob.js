const _0x3c7d = [
    '../../../../utils',
    '../../../../../core/shared/config',
    'url',
    'posts',
    '/?source=html',
    'Origin',
    'accepts\x20html\x20source',
    'WAdiA',
    'then',
    'get',
    'zfCGt',
    'eHfaM',
    'aMezw',
    'XUCMu',
    'chAKt',
    '<p>HTML\x20Ipsum\x20presents</p>',
    '{\x22version\x22:\x220.3.1\x22,\x22atoms\x22:[],\x22cards\x22:[],\x22markups\x22:[],\x22sections\x22:[[1,\x22p\x22,[[0,[],0,\x22HTML\x20Ipsum\x20presents\x22]]]]}',
    'API',
    'getApiQuery',
    'pages/',
    'DataGenerator',
    'Content',
    'nbqrg',
    'MfYKQ',
    'expect',
    'pages',
    'slug',
    'equal',
    'ugjoV',
    'put',
    'set',
    'send',
    'QBtLl',
    'body',
    'updated_at',
    'OyHUp',
    'private',
    'XpABN',
    '1828681hJXHFD',
    '186284fAyPTc',
    '43312JtmVsv',
    '8TxgKOh',
    '157463WhOyev',
    '1BcnLJR',
    '1174974RKfzXr',
    '3EpEWHM',
    '584501ETXVsw',
    '20IaRsRO',
    '101807sZseVq',
    'should',
    'supertest'
];
const _0x126f90 = _0x5257;
(function (_0x2df892, _0x389438) {
    const _0x17ba06 = _0x5257;
    while (!![]) {
        try {
            const _0x3a1fdc = parseInt(_0x17ba06(0xbb)) + parseInt(_0x17ba06(0xbc)) + parseInt(_0x17ba06(0xbd)) * -parseInt(_0x17ba06(0xbe)) + parseInt(_0x17ba06(0xbf)) * parseInt(_0x17ba06(0xc0)) + -parseInt(_0x17ba06(0xc1)) + parseInt(_0x17ba06(0xc2)) * -parseInt(_0x17ba06(0xc3)) + -parseInt(_0x17ba06(0xc4)) * -parseInt(_0x17ba06(0xc5));
            if (_0x3a1fdc === _0x389438)
                break;
            else
                _0x2df892['push'](_0x2df892['shift']());
        } catch (_0x182fe2) {
            _0x2df892['push'](_0x2df892['shift']());
        }
    }
}(_0x3c7d, 0x4e62c + -0x13aa29 + -0x4 * -0x740b6));
function _0x5257(_0x5aa89f, _0xe3423) {
    return _0x5257 = function (_0x5776f3, _0x1f4956) {
        _0x5776f3 = _0x5776f3 - (0x33 * 0x6 + 0x1b75 + 0xdf6 * -0x2);
        let _0x4b34a3 = _0x3c7d[_0x5776f3];
        return _0x4b34a3;
    }, _0x5257(_0x5aa89f, _0xe3423);
}
const should = require(_0x126f90(0xc6)), supertest = require(_0x126f90(0xc7)), testUtils = require(_0x126f90(0xc8)), config = require(_0x126f90(0xc9)), localUtils = require('./utils'), ghost = testUtils['startGhost'];
let request;
describe('Pages\x20API', function () {
    const _0x296c71 = _0x126f90, _0x39aebb = {
            'zfCGt': _0x296c71(0xca),
            'eHfaM': _0x296c71(0xcb),
            'YsnfK': 'static-page-test',
            'XUCMu': function (_0x4aa885, _0x3969ff) {
                return _0x4aa885 + _0x3969ff;
            },
            'IeEYu': _0x296c71(0xcc),
            'chAKt': _0x296c71(0xcd),
            'aMezw': function (_0x4c8d77, _0x50bb3c, _0x112afa) {
                return _0x4c8d77(_0x50bb3c, _0x112afa);
            },
            'zCApC': _0x296c71(0xce),
            'WAdiA': function (_0xaaed53, _0x4ca274) {
                return _0xaaed53(_0x4ca274);
            }
        };
    _0x39aebb[_0x296c71(0xcf)](before, function () {
        const _0x374115 = _0x296c71;
        return ghost()[_0x374115(0xd0)](function (_0x538e10) {
            const _0x44d80f = _0x374115;
            request = supertest['agent'](config[_0x44d80f(0xd1)](_0x39aebb[_0x44d80f(0xd2)]));
        })[_0x374115(0xd0)](function () {
            const _0x8fcef5 = _0x374115;
            return localUtils['doAuth'](request, _0x39aebb[_0x8fcef5(0xd3)]);
        });
    }), _0x39aebb[_0x296c71(0xd4)](describe, 'Edit', function () {
        const _0xba7ea1 = _0x296c71, _0x456a80 = {
                'ugjoV': _0x39aebb['YsnfK'],
                'WiMnL': function (_0xebae7c, _0x13d186) {
                    const _0xf4aa5d = _0x5257;
                    return _0x39aebb[_0xf4aa5d(0xd5)](_0xebae7c, _0x13d186);
                },
                'MKzGN': _0x39aebb['IeEYu'],
                'nbqrg': _0x39aebb[_0xba7ea1(0xd6)],
                'QBtLl': _0xba7ea1(0xd7),
                'OyHUp': 'Cache-Control',
                'MfYKQ': _0x39aebb[_0xba7ea1(0xd2)]
            };
        _0x39aebb['aMezw'](it, _0x39aebb['zCApC'], function () {
            const _0x46a351 = _0xba7ea1, _0x32f5a3 = { 'XpABN': _0x46a351(0xd8) };
            return request[_0x46a351(0xd1)](localUtils[_0x46a351(0xd9)][_0x46a351(0xda)](_0x46a351(0xdb) + testUtils[_0x46a351(0xdc)][_0x46a351(0xdd)]['posts'][0x6 * -0x20b + 0x11 * 0x197 + 0x3b0 * -0x4]['id'] + '/'))['set'](_0x456a80[_0x46a351(0xde)], config[_0x46a351(0xd1)](_0x456a80[_0x46a351(0xdf)]))[_0x46a351(0xe0)](-0x16ac + 0x6f * -0x53 + 0x3b71)['then'](_0x54bf9c => {
                const _0x4e116a = _0x46a351;
                return _0x54bf9c['body'][_0x4e116a(0xe1)][-0x20 * 0x53 + 0x2d7 * -0x7 + -0x1e41 * -0x1][_0x4e116a(0xe2)]['should'][_0x4e116a(0xe3)](_0x456a80[_0x4e116a(0xe4)]), request[_0x4e116a(0xe5)](localUtils[_0x4e116a(0xd9)]['getApiQuery'](_0x456a80['WiMnL'](_0x4e116a(0xdb) + testUtils['DataGenerator'][_0x4e116a(0xdd)][_0x4e116a(0xcb)][-0xfb5 + -0x1b2c + 0x2ae6]['id'], _0x456a80['MKzGN'])))[_0x4e116a(0xe6)](_0x456a80[_0x4e116a(0xde)], config[_0x4e116a(0xd1)](_0x4e116a(0xca)))[_0x4e116a(0xe7)]({
                    'pages': [{
                            'html': _0x456a80[_0x4e116a(0xe8)],
                            'updated_at': _0x54bf9c[_0x4e116a(0xe9)]['pages'][0x38 * -0x94 + -0x63e + -0x2 * -0x134f][_0x4e116a(0xea)]
                        }]
                })[_0x4e116a(0xe0)]('Content-Type', /json/)[_0x4e116a(0xe0)](_0x456a80[_0x4e116a(0xeb)], testUtils['cacheRules'][_0x4e116a(0xec)])[_0x4e116a(0xe0)](0x112c + 0xd1e * -0x1 + -0x346);
            })[_0x46a351(0xd0)](_0x4bb160 => {
                const _0x366fee = _0x46a351;
                _0x4bb160['body'][_0x366fee(0xe1)][0x1bb * 0x1 + -0x287 * 0x2 + 0x353 * 0x1]['mobiledoc'][_0x366fee(0xc6)][_0x366fee(0xe3)](_0x32f5a3[_0x366fee(0xed)]);
            });
        });
    });
});