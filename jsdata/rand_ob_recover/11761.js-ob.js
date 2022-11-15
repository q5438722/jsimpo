const fs = require('fs'), path = require(_0x3f803c(483)), {createTestBuilder} = require(_0x3f803c(484)), {createStrapiInstance} = require('../../../../test/helpers/strapi'), {createAuthRequest} = require(_0x3f803c(485));
let strapi, rq, baseRq;
const uploadImg = () => {
        const _0x375482 = _0x3f803c, _0x5a7ec4 = {
                'IQxyl': function (_0x1fd63a, _0xdfd673) {
                    return _0x1fd63a(_0xdfd673);
                },
                'rmukp': '/upload',
                'vvoBj': _0x375482(486)
            };
        return _0x5a7ec4[_0x375482(487)](baseRq, {
            'method': _0x375482(488),
            'url': _0x5a7ec4[_0x375482(489)],
            'formData': { 'files': fs['createReadStream'](path['join'](__dirname, _0x5a7ec4[_0x375482(490)])) }
        });
    }, components = {
        'singleMedia': {
            'name': _0x3f803c(491),
            'attributes': { 'media': { 'type': _0x3f803c(492) } }
        },
        'multipleMedia': {
            'name': 'multiple-media',
            'attributes': {
                'media': {
                    'type': _0x3f803c(492),
                    'multiple': !![]
                }
            }
        },
        'withNested': {
            'name': _0x3f803c(493),
            'attributes': {
                'singleMedia': {
                    'type': _0x3f803c(494),
                    'component': _0x3f803c(495)
                },
                'multipleMedia': {
                    'type': 'component',
                    'component': _0x3f803c(496)
                }
            }
        }
    }, ct = {
        'name': _0x3f803c(497),
        'attributes': {
            'field': {
                'type': 'dynamiczone',
                'components': [
                    _0x3f803c(495),
                    _0x3f803c(496),
                    _0x3f803c(498)
                ]
            }
        }
    };
function _0x213d(_0x4c42e9, _0x4b556a) {
    return _0x213d = function (_0x4f72e0, _0xb4b07d) {
        _0x4f72e0 = _0x4f72e0 - (9262 + 1602 + -10393);
        let _0x37e3e5 = _0x988e[_0x4f72e0];
        return _0x37e3e5;
    }, _0x213d(_0x4c42e9, _0x4b556a);
}
describe[_0x3f803c(499)]([
    [
        'CONTENT MANAGER',
        _0x3f803c(500)
    ],
    [
        _0x3f803c(501),
        _0x3f803c(502)
    ]
])(_0x3f803c(503), (_0x3d967e, _0x516e65) => {
    const _0x6f8501 = _0x3f803c, _0x494f87 = {
            'CYGoD': _0x6f8501(504),
            'jhNoG': function (_0x276012, _0x15d188) {
                return _0x276012(_0x15d188);
            },
            'zqlXB': function (_0x298ef3) {
                return _0x298ef3();
            },
            'tGQtO': function (_0x24de65) {
                return _0x24de65();
            },
            'JihXE': _0x6f8501(496),
            'UYNmE': function (_0x22cd9c, _0x19f20a) {
                return _0x22cd9c(_0x19f20a);
            },
            'GDNHl': function (_0x3cbb28, _0x13e159) {
                return _0x3cbb28(_0x13e159);
            },
            'fFceI': function (_0x4cacf0, _0x53e020) {
                return _0x4cacf0(_0x53e020);
            },
            'xazru': _0x6f8501(488),
            'wWIRK': _0x6f8501(495),
            'hMTfC': function (_0x2821d1, _0x51f56a) {
                return _0x2821d1(_0x51f56a);
            },
            'xAJjm': function (_0x449a3e, _0x440df6) {
                return _0x449a3e(_0x440df6);
            },
            'gnhJC': function (_0xdfa3b0, _0x160b79) {
                return _0xdfa3b0(_0x160b79);
            },
            'SGJKL': function (_0x209718, _0x48cd8e) {
                return _0x209718(_0x48cd8e);
            },
            'OjOjh': function (_0x4bd0f7, _0xde473c) {
                return _0x4bd0f7(_0xde473c);
            },
            'PtlHv': _0x6f8501(505),
            'ZvbIf': function (_0x210117, _0x129193, _0x5e6c02) {
                return _0x210117(_0x129193, _0x5e6c02);
            },
            'TmEUI': _0x6f8501(506),
            'ZjLRM': _0x6f8501(507),
            'LEhBn': function (_0x19764c, _0x1059d9, _0x8c7f53) {
                return _0x19764c(_0x1059d9, _0x8c7f53);
            },
            'FvukK': 'The media are populated on the components',
            'AEtdi': _0x6f8501(498),
            'iimzs': function (_0x2c6bf3, _0x4497fc, _0x18f052) {
                return _0x2c6bf3(_0x4497fc, _0x18f052);
            },
            'jkzOa': _0x6f8501(508),
            'oOkLF': function (_0x38b966) {
                return _0x38b966();
            },
            'MQiml': function (_0x468b45, _0x1cc1b9, _0xeddff1) {
                return _0x468b45(_0x1cc1b9, _0xeddff1);
            },
            'gTMGc': 'Contains components with medias',
            'BJKCq': function (_0x1c2681, _0x564a3e, _0x23dde3) {
                return _0x1c2681(_0x564a3e, _0x23dde3);
            },
            'VvljG': _0x6f8501(509)
        }, _0x5cd64e = _0x494f87['oOkLF'](createTestBuilder);
    _0x494f87['OjOjh'](beforeAll, async () => {
        const _0x44b943 = _0x6f8501, _0x4292b4 = _0x494f87[_0x44b943(510)][_0x44b943(511)]('|');
        let _0x462f41 = 6284 + 6828 + -13112;
        while (!![]) {
            switch (_0x4292b4[_0x462f41++]) {
            case '0':
                rq[_0x44b943(512)](_0x516e65);
                continue;
            case '1':
                baseRq = await _0x494f87['jhNoG'](createAuthRequest, { 'strapi': strapi });
                continue;
            case '2':
                await _0x5cd64e['addComponent'](components[_0x44b943(513)])['addComponent'](components[_0x44b943(514)])[_0x44b943(515)](components[_0x44b943(516)])[_0x44b943(517)](ct)[_0x44b943(518)]();
                continue;
            case '3':
                rq = await createAuthRequest({ 'strapi': strapi });
                continue;
            case '4':
                strapi = await _0x494f87[_0x44b943(519)](createStrapiInstance);
                continue;
            }
            break;
        }
    }), afterAll(async () => {
        const _0x4f5cfa = _0x6f8501;
        await strapi[_0x4f5cfa(520)](), await _0x5cd64e[_0x4f5cfa(521)]();
    }), _0x494f87[_0x6f8501(522)](describe, _0x494f87['gTMGc'], () => {
        const _0x52a1b7 = _0x6f8501;
        _0x494f87[_0x52a1b7(523)](test, _0x494f87[_0x52a1b7(524)], async () => {
            const _0x5b0f63 = _0x52a1b7, _0x82d558 = await _0x494f87[_0x5b0f63(525)](uploadImg);
            _0x494f87[_0x5b0f63(526)](expect, _0x82d558['statusCode'])[_0x5b0f63(527)](1 * -7369 + -5 * -331 + -5914 * -1);
            const _0x524bbe = _0x82d558[_0x5b0f63(528)][2576 + -9986 + 3 * 2470]['id'], _0x1b38cb = await rq({
                    'method': _0x5b0f63(488),
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x524bbe
                            },
                            {
                                '__component': _0x494f87[_0x5b0f63(529)],
                                'media': [
                                    _0x524bbe,
                                    _0x524bbe
                                ]
                            }
                        ]
                    }
                });
            _0x494f87[_0x5b0f63(530)](expect, _0x1b38cb[_0x5b0f63(531)])[_0x5b0f63(527)](-5814 + -4804 + 10818), _0x494f87[_0x5b0f63(532)](expect, Array[_0x5b0f63(533)](_0x1b38cb[_0x5b0f63(528)][_0x5b0f63(534)]))['toBe'](!![]), _0x494f87[_0x5b0f63(532)](expect, _0x1b38cb['body'])[_0x5b0f63(535)]({
                'field': [
                    {
                        'id': expect[_0x5b0f63(536)](),
                        '__component': _0x5b0f63(495),
                        'media': {
                            'id': _0x524bbe,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect[_0x5b0f63(536)](),
                        '__component': _0x494f87[_0x5b0f63(529)],
                        'media': expect[_0x5b0f63(537)]([expect[_0x5b0f63(538)]({
                                'id': _0x524bbe,
                                'url': expect[_0x5b0f63(539)](String)
                            })])
                    }
                ]
            });
        }), _0x494f87[_0x52a1b7(523)](test, _0x494f87[_0x52a1b7(540)], async () => {
            const _0x199690 = _0x52a1b7, _0x13e1ae = await _0x494f87[_0x199690(525)](uploadImg);
            _0x494f87[_0x199690(541)](expect, _0x13e1ae[_0x199690(531)])[_0x199690(527)](7276 + 271 * 1 + -7347);
            const _0x2ced49 = _0x13e1ae['body'][6333 + 1 * -6433 + 100]['id'], _0x3d566e = await _0x494f87[_0x199690(541)](rq, {
                    'method': _0x494f87[_0x199690(542)],
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x494f87['wWIRK'],
                                'media': _0x2ced49
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x2ced49,
                                    _0x2ced49
                                ]
                            }
                        ]
                    }
                });
            _0x494f87[_0x199690(541)](expect, _0x3d566e[_0x199690(531)])[_0x199690(527)](1717 * 5 + -3644 + -431 * 11), _0x494f87['fFceI'](expect, Array[_0x199690(533)](_0x3d566e[_0x199690(528)][_0x199690(534)]))['toBe'](!![]);
            const _0x2b96aa = await _0x494f87[_0x199690(525)](uploadImg);
            _0x494f87['hMTfC'](expect, _0x2b96aa[_0x199690(531)])[_0x199690(527)](-6676 + 1 * -2172 + -6 * -1508);
            const _0x2d0311 = _0x2b96aa[_0x199690(528)][193 + -1143 + 950]['id'], _0x3d950 = await _0x494f87[_0x199690(543)](rq, {
                    'method': 'PUT',
                    'url': '/' + _0x3d566e[_0x199690(528)]['id'],
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x2d0311
                            },
                            {
                                '__component': _0x494f87['JihXE'],
                                'media': [
                                    _0x2d0311,
                                    _0x2d0311
                                ]
                            }
                        ]
                    }
                });
            _0x494f87[_0x199690(543)](expect, _0x3d950['body'])[_0x199690(535)]({
                'field': [
                    {
                        'id': expect[_0x199690(536)](),
                        '__component': 'default.single-media',
                        'media': {
                            'id': _0x2d0311,
                            'url': expect[_0x199690(539)](String)
                        }
                    },
                    {
                        'id': expect[_0x199690(536)](),
                        '__component': _0x494f87[_0x199690(529)],
                        'media': expect[_0x199690(537)]([expect[_0x199690(538)]({
                                'id': _0x2d0311,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        }), _0x494f87[_0x52a1b7(544)](test, _0x494f87[_0x52a1b7(545)], async () => {
            const _0x31582d = _0x52a1b7, _0x2cf593 = await _0x494f87[_0x31582d(525)](uploadImg);
            _0x494f87[_0x31582d(546)](expect, _0x2cf593[_0x31582d(531)])[_0x31582d(527)](41 * -170 + 1 * -2143 + 9313);
            const _0x46cea4 = _0x2cf593[_0x31582d(528)][-3192 * -2 + -1 * -2117 + -8501 * 1]['id'], _0x5b5003 = await rq({
                    'method': _0x494f87[_0x31582d(542)],
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x494f87[_0x31582d(547)],
                                'media': _0x46cea4
                            },
                            {
                                '__component': _0x494f87['JihXE'],
                                'media': [
                                    _0x46cea4,
                                    _0x46cea4
                                ]
                            }
                        ]
                    }
                });
            _0x494f87[_0x31582d(548)](expect, _0x5b5003[_0x31582d(531)])[_0x31582d(527)](47 * 25 + 6332 + -7307);
            const _0x275ff4 = await _0x494f87[_0x31582d(549)](rq, {
                'method': _0x494f87[_0x31582d(550)],
                'url': '/' + _0x5b5003[_0x31582d(528)]['id']
            });
            _0x494f87[_0x31582d(549)](expect, _0x275ff4[_0x31582d(528)])[_0x31582d(535)]({
                'field': [
                    {
                        'id': expect[_0x31582d(536)](),
                        '__component': _0x494f87[_0x31582d(547)],
                        'media': {
                            'id': _0x46cea4,
                            'url': expect[_0x31582d(539)](String)
                        }
                    },
                    {
                        'id': expect[_0x31582d(536)](),
                        '__component': _0x494f87[_0x31582d(529)],
                        'media': expect[_0x31582d(537)]([expect[_0x31582d(538)]({
                                'id': _0x46cea4,
                                'url': expect[_0x31582d(539)](String)
                            })])
                    }
                ]
            });
        });
    }), _0x494f87[_0x6f8501(551)](describe, _0x494f87[_0x6f8501(552)], () => {
        const _0x33fe23 = _0x6f8501, _0x2e638c = {
                'SLtle': function (_0x411a70, _0x2a6596) {
                    const _0x5094b6 = _0x213d;
                    return _0x494f87[_0x5094b6(549)](_0x411a70, _0x2a6596);
                },
                'RBpdw': _0x494f87[_0x33fe23(542)],
                'LrOMJ': _0x494f87['AEtdi']
            };
        _0x494f87[_0x33fe23(553)](test, _0x494f87[_0x33fe23(554)], async () => {
            const _0x54f526 = _0x33fe23, _0x19ab0d = await uploadImg();
            _0x2e638c[_0x54f526(555)](expect, _0x19ab0d[_0x54f526(531)])[_0x54f526(527)](-67 * -56 + -35 * 227 + 4393);
            const _0x126a58 = _0x19ab0d[_0x54f526(528)][-29 * 123 + -983 * -2 + 1601]['id'], _0x2df79a = await _0x2e638c['SLtle'](rq, {
                    'method': _0x2e638c['RBpdw'],
                    'url': '/',
                    'body': {
                        'field': [{
                                '__component': _0x2e638c['LrOMJ'],
                                'singleMedia': { 'media': _0x126a58 },
                                'multipleMedia': {
                                    'media': [
                                        _0x126a58,
                                        _0x126a58
                                    ]
                                }
                            }]
                    }
                });
            _0x2e638c[_0x54f526(555)](expect, _0x2df79a[_0x54f526(531)])[_0x54f526(527)](1 * -6568 + -1 * 2439 + 33 * 279), _0x2e638c[_0x54f526(555)](expect, Array[_0x54f526(533)](_0x2df79a[_0x54f526(528)]['field']))['toBe'](!![]), expect(_0x2df79a[_0x54f526(528)])[_0x54f526(535)]({
                'field': [{
                        'id': expect[_0x54f526(536)](),
                        '__component': _0x2e638c['LrOMJ'],
                        'singleMedia': {
                            'media': {
                                'id': _0x126a58,
                                'url': expect['any'](String)
                            }
                        },
                        'multipleMedia': {
                            'media': expect[_0x54f526(537)]([expect[_0x54f526(538)]({
                                    'id': _0x126a58,
                                    'url': expect[_0x54f526(539)](String)
                                })])
                        }
                    }]
            });
        });
    });
});