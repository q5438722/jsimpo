const fs = require('fs'), path = require(_0x3fd78b(153)), {createTestBuilder} = require('../../../../test/helpers/builder'), {createStrapiInstance} = require(_0x3fd78b(154)), {createAuthRequest} = require(_0x3fd78b(155));
let strapi, rq, baseRq;
const uploadImg = () => {
        const _0x5f0ace = _0x3fd78b;
        return baseRq({
            'method': 'POST',
            'url': '/upload',
            'formData': { 'files': fs['createReadStream'](path[_0x5f0ace(156)](__dirname, 'rec.jpg')) }
        });
    }, components = {
        'singleMedia': {
            'name': 'single-media',
            'attributes': { 'media': { 'type': _0x3fd78b(157) } }
        },
        'multipleMedia': {
            'name': _0x3fd78b(158),
            'attributes': {
                'media': {
                    'type': _0x3fd78b(157),
                    'multiple': !![]
                }
            }
        },
        'withNested': {
            'name': 'with-nested',
            'attributes': {
                'singleMedia': {
                    'type': _0x3fd78b(159),
                    'component': 'default.single-media'
                },
                'multipleMedia': {
                    'type': _0x3fd78b(159),
                    'component': _0x3fd78b(160)
                }
            }
        }
    }, ct = {
        'name': _0x3fd78b(161),
        'attributes': {
            'field': {
                'type': _0x3fd78b(162),
                'components': [
                    _0x3fd78b(163),
                    _0x3fd78b(160),
                    _0x3fd78b(164)
                ]
            }
        }
    };
describe[_0x3fd78b(165)]([
    [
        'CONTENT MANAGER',
        _0x3fd78b(166)
    ],
    [
        _0x3fd78b(167),
        _0x3fd78b(168)
    ]
])('[%s] => Not required dynamiczone', (_0x4e797c, _0x521f44) => {
    const _0x28681c = _0x3fd78b, _0x40bb3d = createTestBuilder();
    beforeAll(async () => {
        const _0x2c52f1 = _0x5829;
        await _0x40bb3d['addComponent'](components[_0x2c52f1(169)])[_0x2c52f1(170)](components[_0x2c52f1(171)])[_0x2c52f1(170)](components[_0x2c52f1(172)])[_0x2c52f1(173)](ct)['build'](), strapi = await createStrapiInstance(), baseRq = await createAuthRequest({ 'strapi': strapi }), rq = await createAuthRequest({ 'strapi': strapi }), rq[_0x2c52f1(174)](_0x521f44);
    }), afterAll(async () => {
        const _0x554e51 = _0x5829;
        await strapi[_0x554e51(175)](), await _0x40bb3d['cleanup']();
    }), describe('Contains components with medias', () => {
        const _0x393a41 = _0x5829;
        test(_0x393a41(176), async () => {
            const _0xd5aee1 = _0x393a41, _0x4b4748 = await uploadImg();
            expect(_0x4b4748[_0xd5aee1(177)])[_0xd5aee1(178)](200);
            const _0x1399ea = _0x4b4748['body'][0]['id'], _0x40b465 = await rq({
                    'method': _0xd5aee1(179),
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0xd5aee1(163),
                                'media': _0x1399ea
                            },
                            {
                                '__component': _0xd5aee1(160),
                                'media': [
                                    _0x1399ea,
                                    _0x1399ea
                                ]
                            }
                        ]
                    }
                });
            expect(_0x40b465[_0xd5aee1(177)])[_0xd5aee1(178)](200), expect(Array['isArray'](_0x40b465[_0xd5aee1(180)]['field']))[_0xd5aee1(178)](!![]), expect(_0x40b465[_0xd5aee1(180)])[_0xd5aee1(181)]({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': _0xd5aee1(163),
                        'media': {
                            'id': _0x1399ea,
                            'url': expect[_0xd5aee1(182)](String)
                        }
                    },
                    {
                        'id': expect[_0xd5aee1(183)](),
                        '__component': _0xd5aee1(160),
                        'media': expect['arrayContaining']([expect[_0xd5aee1(184)]({
                                'id': _0x1399ea,
                                'url': expect[_0xd5aee1(182)](String)
                            })])
                    }
                ]
            });
        }), test('The medias are correctly related to the components on edition', async () => {
            const _0x4d955c = _0x393a41, _0x1f208f = await uploadImg();
            expect(_0x1f208f[_0x4d955c(177)])[_0x4d955c(178)](200);
            const _0x4ae117 = _0x1f208f[_0x4d955c(180)][0]['id'], _0x562833 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x4d955c(163),
                                'media': _0x4ae117
                            },
                            {
                                '__component': _0x4d955c(160),
                                'media': [
                                    _0x4ae117,
                                    _0x4ae117
                                ]
                            }
                        ]
                    }
                });
            expect(_0x562833[_0x4d955c(177)])[_0x4d955c(178)](200), expect(Array[_0x4d955c(185)](_0x562833[_0x4d955c(180)][_0x4d955c(186)]))[_0x4d955c(178)](!![]);
            const _0x1e5537 = await uploadImg();
            expect(_0x1e5537[_0x4d955c(177)])[_0x4d955c(178)](200);
            const _0xfbb4bd = _0x1e5537['body'][0]['id'], _0x274948 = await rq({
                    'method': _0x4d955c(187),
                    'url': '/' + _0x562833[_0x4d955c(180)]['id'],
                    'body': {
                        'field': [
                            {
                                '__component': _0x4d955c(163),
                                'media': _0xfbb4bd
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0xfbb4bd,
                                    _0xfbb4bd
                                ]
                            }
                        ]
                    }
                });
            expect(_0x274948[_0x4d955c(180)])[_0x4d955c(181)]({
                'field': [
                    {
                        'id': expect[_0x4d955c(183)](),
                        '__component': _0x4d955c(163),
                        'media': {
                            'id': _0xfbb4bd,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect[_0x4d955c(183)](),
                        '__component': _0x4d955c(160),
                        'media': expect[_0x4d955c(188)]([expect[_0x4d955c(184)]({
                                'id': _0xfbb4bd,
                                'url': expect[_0x4d955c(182)](String)
                            })])
                    }
                ]
            });
        }), test(_0x393a41(189), async () => {
            const _0x452a61 = _0x393a41, _0x45972c = await uploadImg();
            expect(_0x45972c[_0x452a61(177)])[_0x452a61(178)](200);
            const _0x1d54a9 = _0x45972c[_0x452a61(180)][0]['id'], _0x261c13 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x452a61(163),
                                'media': _0x1d54a9
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x1d54a9,
                                    _0x1d54a9
                                ]
                            }
                        ]
                    }
                });
            expect(_0x261c13[_0x452a61(177)])[_0x452a61(178)](200);
            const _0x4e6125 = await rq({
                'method': 'GET',
                'url': '/' + _0x261c13[_0x452a61(180)]['id']
            });
            expect(_0x4e6125[_0x452a61(180)])[_0x452a61(181)]({
                'field': [
                    {
                        'id': expect[_0x452a61(183)](),
                        '__component': _0x452a61(163),
                        'media': {
                            'id': _0x1d54a9,
                            'url': expect[_0x452a61(182)](String)
                        }
                    },
                    {
                        'id': expect[_0x452a61(183)](),
                        '__component': 'default.multiple-media',
                        'media': expect[_0x452a61(188)]([expect[_0x452a61(184)]({
                                'id': _0x1d54a9,
                                'url': expect[_0x452a61(182)](String)
                            })])
                    }
                ]
            });
        });
    }), describe(_0x28681c(190), () => {
        const _0x18b93f = _0x28681c;
        test(_0x18b93f(191), async () => {
            const _0x35aa04 = _0x18b93f, _0x41189e = await uploadImg();
            expect(_0x41189e[_0x35aa04(177)])['toBe'](200);
            const _0x406b30 = _0x41189e[_0x35aa04(180)][0]['id'], _0x534d3b = await rq({
                    'method': _0x35aa04(179),
                    'url': '/',
                    'body': {
                        'field': [{
                                '__component': 'default.with-nested',
                                'singleMedia': { 'media': _0x406b30 },
                                'multipleMedia': {
                                    'media': [
                                        _0x406b30,
                                        _0x406b30
                                    ]
                                }
                            }]
                    }
                });
            expect(_0x534d3b[_0x35aa04(177)])['toBe'](200), expect(Array[_0x35aa04(185)](_0x534d3b[_0x35aa04(180)][_0x35aa04(186)]))[_0x35aa04(178)](!![]), expect(_0x534d3b[_0x35aa04(180)])[_0x35aa04(181)]({
                'field': [{
                        'id': expect[_0x35aa04(183)](),
                        '__component': _0x35aa04(164),
                        'singleMedia': {
                            'media': {
                                'id': _0x406b30,
                                'url': expect[_0x35aa04(182)](String)
                            }
                        },
                        'multipleMedia': {
                            'media': expect[_0x35aa04(188)]([expect[_0x35aa04(184)]({
                                    'id': _0x406b30,
                                    'url': expect['any'](String)
                                })])
                        }
                    }]
            });
        });
    });
});