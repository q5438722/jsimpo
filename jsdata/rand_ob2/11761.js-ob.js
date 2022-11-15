'use strict';
const _0x1b1a = [
    'toBe',
    'POST',
    'body',
    'toMatchObject',
    'any',
    'anything',
    'objectContaining',
    'isArray',
    'field',
    'PUT',
    'arrayContaining',
    'The\x20media\x20are\x20populated\x20on\x20the\x20components',
    'Contains\x20components\x20with\x20nested\x20components\x20having\x20medias',
    'The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20nested\x20components\x20on\x20creation',
    '97975HOwtOo',
    '1249525pWXaPO',
    '1106949IQTgpJ',
    '2297QzvGDX',
    '311DNOrbQ',
    '9731AJVQhI',
    '143ArZBYU',
    '5COxWAl',
    '128671biRuMS',
    '2507152MeLToR',
    'path',
    '../../../../test/helpers/strapi',
    '../../../../test/helpers/request',
    'join',
    'media',
    'multiple-media',
    'component',
    'default.multiple-media',
    'withdynamiczonemedia',
    'dynamiczone',
    'default.single-media',
    'default.with-nested',
    'each',
    '/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia',
    'GENERATED\x20API',
    '/withdynamiczonemedias',
    'singleMedia',
    'addComponent',
    'multipleMedia',
    'withNested',
    'addContentType',
    'setURLPrefix',
    'destroy',
    'The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20creation',
    'statusCode'
];
const _0x3fd78b = _0x5829;
function _0x5829(_0x42b309, _0x558583) {
    return _0x5829 = function (_0x1b1a4b, _0x5829df) {
        _0x1b1a4b = _0x1b1a4b - 0x8f;
        let _0x1567ad = _0x1b1a[_0x1b1a4b];
        return _0x1567ad;
    }, _0x5829(_0x42b309, _0x558583);
}
(function (_0xb033ba, _0x1814a3) {
    const _0xef0534 = _0x5829;
    while (!![]) {
        try {
            const _0x55d34a = -parseInt(_0xef0534(0x8f)) + -parseInt(_0xef0534(0x90)) + parseInt(_0xef0534(0x91)) + -parseInt(_0xef0534(0x92)) * -parseInt(_0xef0534(0x93)) + parseInt(_0xef0534(0x94)) * -parseInt(_0xef0534(0x95)) + parseInt(_0xef0534(0x96)) * -parseInt(_0xef0534(0x97)) + parseInt(_0xef0534(0x98));
            if (_0x55d34a === _0x1814a3)
                break;
            else
                _0xb033ba['push'](_0xb033ba['shift']());
        } catch (_0x35b3b1) {
            _0xb033ba['push'](_0xb033ba['shift']());
        }
    }
}(_0x1b1a, 0xe6fa0));
const fs = require('fs'), path = require(_0x3fd78b(0x99)), {createTestBuilder} = require('../../../../test/helpers/builder'), {createStrapiInstance} = require(_0x3fd78b(0x9a)), {createAuthRequest} = require(_0x3fd78b(0x9b));
let strapi, rq, baseRq;
const uploadImg = () => {
        const _0x5f0ace = _0x3fd78b;
        return baseRq({
            'method': 'POST',
            'url': '/upload',
            'formData': { 'files': fs['createReadStream'](path[_0x5f0ace(0x9c)](__dirname, 'rec.jpg')) }
        });
    }, components = {
        'singleMedia': {
            'name': 'single-media',
            'attributes': { 'media': { 'type': _0x3fd78b(0x9d) } }
        },
        'multipleMedia': {
            'name': _0x3fd78b(0x9e),
            'attributes': {
                'media': {
                    'type': _0x3fd78b(0x9d),
                    'multiple': !![]
                }
            }
        },
        'withNested': {
            'name': 'with-nested',
            'attributes': {
                'singleMedia': {
                    'type': _0x3fd78b(0x9f),
                    'component': 'default.single-media'
                },
                'multipleMedia': {
                    'type': _0x3fd78b(0x9f),
                    'component': _0x3fd78b(0xa0)
                }
            }
        }
    }, ct = {
        'name': _0x3fd78b(0xa1),
        'attributes': {
            'field': {
                'type': _0x3fd78b(0xa2),
                'components': [
                    _0x3fd78b(0xa3),
                    _0x3fd78b(0xa0),
                    _0x3fd78b(0xa4)
                ]
            }
        }
    };
describe[_0x3fd78b(0xa5)]([
    [
        'CONTENT\x20MANAGER',
        _0x3fd78b(0xa6)
    ],
    [
        _0x3fd78b(0xa7),
        _0x3fd78b(0xa8)
    ]
])('[%s]\x20=>\x20Not\x20required\x20dynamiczone', (_0x4e797c, _0x521f44) => {
    const _0x28681c = _0x3fd78b, _0x40bb3d = createTestBuilder();
    beforeAll(async () => {
        const _0x2c52f1 = _0x5829;
        await _0x40bb3d['addComponent'](components[_0x2c52f1(0xa9)])[_0x2c52f1(0xaa)](components[_0x2c52f1(0xab)])[_0x2c52f1(0xaa)](components[_0x2c52f1(0xac)])[_0x2c52f1(0xad)](ct)['build'](), strapi = await createStrapiInstance(), baseRq = await createAuthRequest({ 'strapi': strapi }), rq = await createAuthRequest({ 'strapi': strapi }), rq[_0x2c52f1(0xae)](_0x521f44);
    }), afterAll(async () => {
        const _0x554e51 = _0x5829;
        await strapi[_0x554e51(0xaf)](), await _0x40bb3d['cleanup']();
    }), describe('Contains\x20components\x20with\x20medias', () => {
        const _0x393a41 = _0x5829;
        test(_0x393a41(0xb0), async () => {
            const _0xd5aee1 = _0x393a41, _0x4b4748 = await uploadImg();
            expect(_0x4b4748[_0xd5aee1(0xb1)])[_0xd5aee1(0xb2)](0xc8);
            const _0x1399ea = _0x4b4748['body'][0x0]['id'], _0x40b465 = await rq({
                    'method': _0xd5aee1(0xb3),
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0xd5aee1(0xa3),
                                'media': _0x1399ea
                            },
                            {
                                '__component': _0xd5aee1(0xa0),
                                'media': [
                                    _0x1399ea,
                                    _0x1399ea
                                ]
                            }
                        ]
                    }
                });
            expect(_0x40b465[_0xd5aee1(0xb1)])[_0xd5aee1(0xb2)](0xc8), expect(Array['isArray'](_0x40b465[_0xd5aee1(0xb4)]['field']))[_0xd5aee1(0xb2)](!![]), expect(_0x40b465[_0xd5aee1(0xb4)])[_0xd5aee1(0xb5)]({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': _0xd5aee1(0xa3),
                        'media': {
                            'id': _0x1399ea,
                            'url': expect[_0xd5aee1(0xb6)](String)
                        }
                    },
                    {
                        'id': expect[_0xd5aee1(0xb7)](),
                        '__component': _0xd5aee1(0xa0),
                        'media': expect['arrayContaining']([expect[_0xd5aee1(0xb8)]({
                                'id': _0x1399ea,
                                'url': expect[_0xd5aee1(0xb6)](String)
                            })])
                    }
                ]
            });
        }), test('The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20edition', async () => {
            const _0x4d955c = _0x393a41, _0x1f208f = await uploadImg();
            expect(_0x1f208f[_0x4d955c(0xb1)])[_0x4d955c(0xb2)](0xc8);
            const _0x4ae117 = _0x1f208f[_0x4d955c(0xb4)][0x0]['id'], _0x562833 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x4d955c(0xa3),
                                'media': _0x4ae117
                            },
                            {
                                '__component': _0x4d955c(0xa0),
                                'media': [
                                    _0x4ae117,
                                    _0x4ae117
                                ]
                            }
                        ]
                    }
                });
            expect(_0x562833[_0x4d955c(0xb1)])[_0x4d955c(0xb2)](0xc8), expect(Array[_0x4d955c(0xb9)](_0x562833[_0x4d955c(0xb4)][_0x4d955c(0xba)]))[_0x4d955c(0xb2)](!![]);
            const _0x1e5537 = await uploadImg();
            expect(_0x1e5537[_0x4d955c(0xb1)])[_0x4d955c(0xb2)](0xc8);
            const _0xfbb4bd = _0x1e5537['body'][0x0]['id'], _0x274948 = await rq({
                    'method': _0x4d955c(0xbb),
                    'url': '/' + _0x562833[_0x4d955c(0xb4)]['id'],
                    'body': {
                        'field': [
                            {
                                '__component': _0x4d955c(0xa3),
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
            expect(_0x274948[_0x4d955c(0xb4)])[_0x4d955c(0xb5)]({
                'field': [
                    {
                        'id': expect[_0x4d955c(0xb7)](),
                        '__component': _0x4d955c(0xa3),
                        'media': {
                            'id': _0xfbb4bd,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect[_0x4d955c(0xb7)](),
                        '__component': _0x4d955c(0xa0),
                        'media': expect[_0x4d955c(0xbc)]([expect[_0x4d955c(0xb8)]({
                                'id': _0xfbb4bd,
                                'url': expect[_0x4d955c(0xb6)](String)
                            })])
                    }
                ]
            });
        }), test(_0x393a41(0xbd), async () => {
            const _0x452a61 = _0x393a41, _0x45972c = await uploadImg();
            expect(_0x45972c[_0x452a61(0xb1)])[_0x452a61(0xb2)](0xc8);
            const _0x1d54a9 = _0x45972c[_0x452a61(0xb4)][0x0]['id'], _0x261c13 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x452a61(0xa3),
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
            expect(_0x261c13[_0x452a61(0xb1)])[_0x452a61(0xb2)](0xc8);
            const _0x4e6125 = await rq({
                'method': 'GET',
                'url': '/' + _0x261c13[_0x452a61(0xb4)]['id']
            });
            expect(_0x4e6125[_0x452a61(0xb4)])[_0x452a61(0xb5)]({
                'field': [
                    {
                        'id': expect[_0x452a61(0xb7)](),
                        '__component': _0x452a61(0xa3),
                        'media': {
                            'id': _0x1d54a9,
                            'url': expect[_0x452a61(0xb6)](String)
                        }
                    },
                    {
                        'id': expect[_0x452a61(0xb7)](),
                        '__component': 'default.multiple-media',
                        'media': expect[_0x452a61(0xbc)]([expect[_0x452a61(0xb8)]({
                                'id': _0x1d54a9,
                                'url': expect[_0x452a61(0xb6)](String)
                            })])
                    }
                ]
            });
        });
    }), describe(_0x28681c(0xbe), () => {
        const _0x18b93f = _0x28681c;
        test(_0x18b93f(0xbf), async () => {
            const _0x35aa04 = _0x18b93f, _0x41189e = await uploadImg();
            expect(_0x41189e[_0x35aa04(0xb1)])['toBe'](0xc8);
            const _0x406b30 = _0x41189e[_0x35aa04(0xb4)][0x0]['id'], _0x534d3b = await rq({
                    'method': _0x35aa04(0xb3),
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
            expect(_0x534d3b[_0x35aa04(0xb1)])['toBe'](0xc8), expect(Array[_0x35aa04(0xb9)](_0x534d3b[_0x35aa04(0xb4)][_0x35aa04(0xba)]))[_0x35aa04(0xb2)](!![]), expect(_0x534d3b[_0x35aa04(0xb4)])[_0x35aa04(0xb5)]({
                'field': [{
                        'id': expect[_0x35aa04(0xb7)](),
                        '__component': _0x35aa04(0xa4),
                        'singleMedia': {
                            'media': {
                                'id': _0x406b30,
                                'url': expect[_0x35aa04(0xb6)](String)
                            }
                        },
                        'multipleMedia': {
                            'media': expect[_0x35aa04(0xbc)]([expect[_0x35aa04(0xb8)]({
                                    'id': _0x406b30,
                                    'url': expect['any'](String)
                                })])
                        }
                    }]
            });
        });
    });
});
