'use strict';
const fs = require('fs'), path = require('path'), {createTestBuilder} = require('../../../../test/helpers/builder'), {createStrapiInstance} = require('../../../../test/helpers/strapi'), {createAuthRequest} = require('../../../../test/helpers/request');
let strapi, rq, baseRq;
const uploadImg = () => {
        return baseRq({
            'method': 'POST',
            'url': '/upload',
            'formData': { 'files': fs['createReadStream'](path['join'](__dirname, 'rec.jpg')) }
        });
    }, components = {
        'singleMedia': {
            'name': 'single-media',
            'attributes': { 'media': { 'type': 'media' } }
        },
        'multipleMedia': {
            'name': 'multiple-media',
            'attributes': {
                'media': {
                    'type': 'media',
                    'multiple': !![]
                }
            }
        },
        'withNested': {
            'name': 'with-nested',
            'attributes': {
                'singleMedia': {
                    'type': 'component',
                    'component': 'default.single-media'
                },
                'multipleMedia': {
                    'type': 'component',
                    'component': 'default.multiple-media'
                }
            }
        }
    }, ct = {
        'name': 'withdynamiczonemedia',
        'attributes': {
            'field': {
                'type': 'dynamiczone',
                'components': [
                    'default.single-media',
                    'default.multiple-media',
                    'default.with-nested'
                ]
            }
        }
    };
describe['each']([
    [
        'CONTENT\x20MANAGER',
        '/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia'
    ],
    [
        'GENERATED\x20API',
        '/withdynamiczonemedias'
    ]
])('[%s]\x20=>\x20Not\x20required\x20dynamiczone', (_0xeb0c13, _0x208c5c) => {
    const _0x4a23ec = createTestBuilder();
    beforeAll(async () => {
        await _0x4a23ec['addComponent'](components['singleMedia'])['addComponent'](components['multipleMedia'])['addComponent'](components['withNested'])['addContentType'](ct)['build'](), strapi = await createStrapiInstance(), baseRq = await createAuthRequest({ 'strapi': strapi }), rq = await createAuthRequest({ 'strapi': strapi }), rq['setURLPrefix'](_0x208c5c);
    }), afterAll(async () => {
        await strapi['destroy'](), await _0x4a23ec['cleanup']();
    }), describe('Contains\x20components\x20with\x20medias', () => {
        test('The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20creation', async () => {
            const _0x3dcc03 = await uploadImg();
            expect(_0x3dcc03['statusCode'])['toBe'](0x59 * -0x4f + -0x1b3b + 0x377a);
            const _0x1cf2cd = _0x3dcc03['body'][-0x4 * 0x4f0 + -0x399 + -0x1 * -0x1759]['id'], _0x2d4fe0 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x1cf2cd
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x1cf2cd,
                                    _0x1cf2cd
                                ]
                            }
                        ]
                    }
                });
            expect(_0x2d4fe0['statusCode'])['toBe'](0x8e5 + -0x885 + 0x68), expect(Array['isArray'](_0x2d4fe0['body']['field']))['toBe'](!![]), expect(_0x2d4fe0['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': 'default.single-media',
                        'media': {
                            'id': _0x1cf2cd,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': 'default.multiple-media',
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x1cf2cd,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        }), test('The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20edition', async () => {
            const _0x183d35 = await uploadImg();
            expect(_0x183d35['statusCode'])['toBe'](0x1281 + -0x3e * 0x4 + -0x1 * 0x10c1);
            const _0x1427ad = _0x183d35['body'][-0x19d9 * 0x1 + -0x1 * -0x206f + -0x696 * 0x1]['id'], _0x115676 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x1427ad
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x1427ad,
                                    _0x1427ad
                                ]
                            }
                        ]
                    }
                });
            expect(_0x115676['statusCode'])['toBe'](0x1 * 0x3a5 + -0x1b43 + 0x1866), expect(Array['isArray'](_0x115676['body']['field']))['toBe'](!![]);
            const _0x43fa06 = await uploadImg();
            expect(_0x43fa06['statusCode'])['toBe'](0x11 * 0xbc + -0x11 * 0xff + 0x53b);
            const _0x53adf0 = _0x43fa06['body'][0xbc * -0x34 + 0x200c + -0x83 * -0xc]['id'], _0x407c0b = await rq({
                    'method': 'PUT',
                    'url': '/' + _0x115676['body']['id'],
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x53adf0
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x53adf0,
                                    _0x53adf0
                                ]
                            }
                        ]
                    }
                });
            expect(_0x407c0b['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': 'default.single-media',
                        'media': {
                            'id': _0x53adf0,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': 'default.multiple-media',
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x53adf0,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        }), test('The\x20media\x20are\x20populated\x20on\x20the\x20components', async () => {
            const _0x18a1d7 = await uploadImg();
            expect(_0x18a1d7['statusCode'])['toBe'](0x515 + 0x51 * -0x48 + -0x53 * -0x39);
            const _0x16f797 = _0x18a1d7['body'][0x6 * -0x1fe + -0x539 + 0x112d]['id'], _0x528015 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': 'default.single-media',
                                'media': _0x16f797
                            },
                            {
                                '__component': 'default.multiple-media',
                                'media': [
                                    _0x16f797,
                                    _0x16f797
                                ]
                            }
                        ]
                    }
                });
            expect(_0x528015['statusCode'])['toBe'](-0xcaa + 0x165e + -0x2 * 0x476);
            const _0x4a017e = await rq({
                'method': 'GET',
                'url': '/' + _0x528015['body']['id']
            });
            expect(_0x4a017e['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': 'default.single-media',
                        'media': {
                            'id': _0x16f797,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': 'default.multiple-media',
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x16f797,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        });
    }), describe('Contains\x20components\x20with\x20nested\x20components\x20having\x20medias', () => {
        test('The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20nested\x20components\x20on\x20creation', async () => {
            const _0x418bf0 = await uploadImg();
            expect(_0x418bf0['statusCode'])['toBe'](0xd30 + 0x25da + -0x72e * 0x7);
            const _0x34358d = _0x418bf0['body'][-0x242e * 0x1 + 0x2 * -0xf65 + 0x42f8]['id'], _0x221d20 = await rq({
                    'method': 'POST',
                    'url': '/',
                    'body': {
                        'field': [{
                                '__component': 'default.with-nested',
                                'singleMedia': { 'media': _0x34358d },
                                'multipleMedia': {
                                    'media': [
                                        _0x34358d,
                                        _0x34358d
                                    ]
                                }
                            }]
                    }
                });
            expect(_0x221d20['statusCode'])['toBe'](0xe * -0x52 + -0x3 * 0x61f + 0x17a1), expect(Array['isArray'](_0x221d20['body']['field']))['toBe'](!![]), expect(_0x221d20['body'])['toMatchObject']({
                'field': [{
                        'id': expect['anything'](),
                        '__component': 'default.with-nested',
                        'singleMedia': {
                            'media': {
                                'id': _0x34358d,
                                'url': expect['any'](String)
                            }
                        },
                        'multipleMedia': {
                            'media': expect['arrayContaining']([expect['objectContaining']({
                                    'id': _0x34358d,
                                    'url': expect['any'](String)
                                })])
                        }
                    }]
            });
        });
    });
});
