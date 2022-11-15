'use strict';
const fs = require('fs'), path = require('path'), {createTestBuilder} = require('../../../../test/helpers/builder'), {createStrapiInstance} = require('../../../../test/helpers/strapi'), {createAuthRequest} = require('../../../../test/helpers/request');
let strapi, rq, baseRq;
const uploadImg = () => {
        const _0x1932a6 = {
            'TIIrG': function (_0x43f1af, _0x510c22) {
                return _0x43f1af(_0x510c22);
            },
            'KHYkY': 'POST',
            'WwObd': '/upload',
            'POGvZ': 'rec.jpg'
        };
        return _0x1932a6['TIIrG'](baseRq, {
            'method': _0x1932a6['KHYkY'],
            'url': _0x1932a6['WwObd'],
            'formData': { 'files': fs['createReadStream'](path['join'](__dirname, _0x1932a6['POGvZ'])) }
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
])('[%s]\x20=>\x20Not\x20required\x20dynamiczone', (_0x45957b, _0x57bff0) => {
    const _0x3c341e = {
            'RlHXf': '2|1|0|4|3',
            'DXDFA': function (_0x2f3d17, _0x8142ed) {
                return _0x2f3d17(_0x8142ed);
            },
            'ibpAm': function (_0x574dfb) {
                return _0x574dfb();
            },
            'rKTnU': function (_0x40f325, _0x29b98d) {
                return _0x40f325(_0x29b98d);
            },
            'gMVMm': function (_0x346fe2) {
                return _0x346fe2();
            },
            'pdtUi': 'POST',
            'mbFCk': 'default.single-media',
            'PoYlg': 'default.multiple-media',
            'vxBfF': function (_0x12f2f4, _0xdc3b4c) {
                return _0x12f2f4(_0xdc3b4c);
            },
            'cSXhh': function (_0x5689ec, _0x1282f0) {
                return _0x5689ec(_0x1282f0);
            },
            'imgAD': function (_0x202751, _0x2e452f) {
                return _0x202751(_0x2e452f);
            },
            'vwigv': 'PUT',
            'UBxjG': function (_0x16614a) {
                return _0x16614a();
            },
            'lWomt': function (_0x575fce, _0x16fb66) {
                return _0x575fce(_0x16fb66);
            },
            'iUzDS': function (_0x599ed1, _0x38d835) {
                return _0x599ed1(_0x38d835);
            },
            'jQVfE': 'GET',
            'sByIh': function (_0x585bbb, _0x11cfab) {
                return _0x585bbb(_0x11cfab);
            },
            'MVxUZ': function (_0x5a20e4, _0x2aad72, _0x19295e) {
                return _0x5a20e4(_0x2aad72, _0x19295e);
            },
            'RjVdi': 'The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20creation',
            'pyagc': function (_0xaa16ae, _0x5d11f8, _0x571dca) {
                return _0xaa16ae(_0x5d11f8, _0x571dca);
            },
            'rZtPJ': 'The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20components\x20on\x20edition',
            'IoOSu': function (_0x3e67a5, _0x5567e9, _0x15a828) {
                return _0x3e67a5(_0x5567e9, _0x15a828);
            },
            'fZcNK': 'The\x20media\x20are\x20populated\x20on\x20the\x20components',
            'VujgZ': function (_0x1b34c5, _0x42bbca) {
                return _0x1b34c5(_0x42bbca);
            },
            'yyQeE': function (_0x5a06d4, _0x32f5b2) {
                return _0x5a06d4(_0x32f5b2);
            },
            'zEMYJ': 'default.with-nested',
            'EWfVC': function (_0x5bc459, _0xcbcbc0) {
                return _0x5bc459(_0xcbcbc0);
            },
            'PRSpv': function (_0x502aa6, _0x343101) {
                return _0x502aa6(_0x343101);
            },
            'QGiSx': function (_0x248fcc, _0x8bfab1, _0x35b3e1) {
                return _0x248fcc(_0x8bfab1, _0x35b3e1);
            },
            'VZkBU': 'The\x20medias\x20are\x20correctly\x20related\x20to\x20the\x20nested\x20components\x20on\x20creation',
            'pJeEQ': function (_0x17d5b9, _0x534e0b, _0x31fd0e) {
                return _0x17d5b9(_0x534e0b, _0x31fd0e);
            },
            'OjsMW': 'Contains\x20components\x20with\x20medias',
            'xHSvR': 'Contains\x20components\x20with\x20nested\x20components\x20having\x20medias'
        }, _0x5b7b99 = _0x3c341e['UBxjG'](createTestBuilder);
    _0x3c341e['PRSpv'](beforeAll, async () => {
        const _0x1691d4 = _0x3c341e['RlHXf']['split']('|');
        let _0x53b422 = 0x0;
        while (!![]) {
            switch (_0x1691d4[_0x53b422++]) {
            case '0':
                baseRq = await _0x3c341e['DXDFA'](createAuthRequest, { 'strapi': strapi });
                continue;
            case '1':
                strapi = await _0x3c341e['ibpAm'](createStrapiInstance);
                continue;
            case '2':
                await _0x5b7b99['addComponent'](components['singleMedia'])['addComponent'](components['multipleMedia'])['addComponent'](components['withNested'])['addContentType'](ct)['build']();
                continue;
            case '3':
                rq['setURLPrefix'](_0x57bff0);
                continue;
            case '4':
                rq = await _0x3c341e['rKTnU'](createAuthRequest, { 'strapi': strapi });
                continue;
            }
            break;
        }
    }), _0x3c341e['PRSpv'](afterAll, async () => {
        await strapi['destroy'](), await _0x5b7b99['cleanup']();
    }), _0x3c341e['pJeEQ'](describe, _0x3c341e['OjsMW'], () => {
        const _0x4895a2 = {
            'znalj': function (_0x2e0aed) {
                return _0x3c341e['UBxjG'](_0x2e0aed);
            },
            'wgHfC': function (_0x3d18a1, _0x3c480c) {
                return _0x3c341e['lWomt'](_0x3d18a1, _0x3c480c);
            },
            'sPUDl': function (_0x556c1c, _0xaf49c8) {
                return _0x3c341e['iUzDS'](_0x556c1c, _0xaf49c8);
            },
            'hPIBv': _0x3c341e['pdtUi'],
            'sgVrf': _0x3c341e['mbFCk'],
            'mWmLK': _0x3c341e['PoYlg'],
            'LQhMY': function (_0x561657, _0x1703b8) {
                return _0x3c341e['iUzDS'](_0x561657, _0x1703b8);
            },
            'NScNP': _0x3c341e['jQVfE'],
            'nVIJg': function (_0x4c9c20, _0x5226bd) {
                return _0x3c341e['sByIh'](_0x4c9c20, _0x5226bd);
            }
        };
        _0x3c341e['MVxUZ'](test, _0x3c341e['RjVdi'], async () => {
            const _0x3fc290 = await _0x3c341e['gMVMm'](uploadImg);
            _0x3c341e['rKTnU'](expect, _0x3fc290['statusCode'])['toBe'](0xc8);
            const _0x586567 = _0x3fc290['body'][0x0]['id'], _0x61af26 = await _0x3c341e['rKTnU'](rq, {
                    'method': _0x3c341e['pdtUi'],
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x3c341e['mbFCk'],
                                'media': _0x586567
                            },
                            {
                                '__component': _0x3c341e['PoYlg'],
                                'media': [
                                    _0x586567,
                                    _0x586567
                                ]
                            }
                        ]
                    }
                });
            _0x3c341e['rKTnU'](expect, _0x61af26['statusCode'])['toBe'](0xc8), _0x3c341e['rKTnU'](expect, Array['isArray'](_0x61af26['body']['field']))['toBe'](!![]), _0x3c341e['rKTnU'](expect, _0x61af26['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': _0x3c341e['mbFCk'],
                        'media': {
                            'id': _0x586567,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': _0x3c341e['PoYlg'],
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x586567,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        }), _0x3c341e['pyagc'](test, _0x3c341e['rZtPJ'], async () => {
            const _0x324944 = await _0x3c341e['gMVMm'](uploadImg);
            _0x3c341e['rKTnU'](expect, _0x324944['statusCode'])['toBe'](0xc8);
            const _0x446edd = _0x324944['body'][0x0]['id'], _0x40932d = await _0x3c341e['vxBfF'](rq, {
                    'method': _0x3c341e['pdtUi'],
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x3c341e['mbFCk'],
                                'media': _0x446edd
                            },
                            {
                                '__component': _0x3c341e['PoYlg'],
                                'media': [
                                    _0x446edd,
                                    _0x446edd
                                ]
                            }
                        ]
                    }
                });
            _0x3c341e['vxBfF'](expect, _0x40932d['statusCode'])['toBe'](0xc8), _0x3c341e['vxBfF'](expect, Array['isArray'](_0x40932d['body']['field']))['toBe'](!![]);
            const _0x13162d = await _0x3c341e['gMVMm'](uploadImg);
            _0x3c341e['cSXhh'](expect, _0x13162d['statusCode'])['toBe'](0xc8);
            const _0x2d641e = _0x13162d['body'][0x0]['id'], _0x2dd8b1 = await _0x3c341e['imgAD'](rq, {
                    'method': _0x3c341e['vwigv'],
                    'url': '/' + _0x40932d['body']['id'],
                    'body': {
                        'field': [
                            {
                                '__component': _0x3c341e['mbFCk'],
                                'media': _0x2d641e
                            },
                            {
                                '__component': _0x3c341e['PoYlg'],
                                'media': [
                                    _0x2d641e,
                                    _0x2d641e
                                ]
                            }
                        ]
                    }
                });
            _0x3c341e['imgAD'](expect, _0x2dd8b1['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': _0x3c341e['mbFCk'],
                        'media': {
                            'id': _0x2d641e,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': _0x3c341e['PoYlg'],
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x2d641e,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        }), _0x3c341e['IoOSu'](test, _0x3c341e['fZcNK'], async () => {
            const _0x35a130 = await _0x4895a2['znalj'](uploadImg);
            _0x4895a2['wgHfC'](expect, _0x35a130['statusCode'])['toBe'](0xc8);
            const _0x503c98 = _0x35a130['body'][0x0]['id'], _0x5d0a51 = await _0x4895a2['sPUDl'](rq, {
                    'method': _0x4895a2['hPIBv'],
                    'url': '/',
                    'body': {
                        'field': [
                            {
                                '__component': _0x4895a2['sgVrf'],
                                'media': _0x503c98
                            },
                            {
                                '__component': _0x4895a2['mWmLK'],
                                'media': [
                                    _0x503c98,
                                    _0x503c98
                                ]
                            }
                        ]
                    }
                });
            _0x4895a2['sPUDl'](expect, _0x5d0a51['statusCode'])['toBe'](0xc8);
            const _0x4e308e = await _0x4895a2['LQhMY'](rq, {
                'method': _0x4895a2['NScNP'],
                'url': '/' + _0x5d0a51['body']['id']
            });
            _0x4895a2['nVIJg'](expect, _0x4e308e['body'])['toMatchObject']({
                'field': [
                    {
                        'id': expect['anything'](),
                        '__component': _0x4895a2['sgVrf'],
                        'media': {
                            'id': _0x503c98,
                            'url': expect['any'](String)
                        }
                    },
                    {
                        'id': expect['anything'](),
                        '__component': _0x4895a2['mWmLK'],
                        'media': expect['arrayContaining']([expect['objectContaining']({
                                'id': _0x503c98,
                                'url': expect['any'](String)
                            })])
                    }
                ]
            });
        });
    }), _0x3c341e['pJeEQ'](describe, _0x3c341e['xHSvR'], () => {
        _0x3c341e['QGiSx'](test, _0x3c341e['VZkBU'], async () => {
            const _0x3fb3ff = await _0x3c341e['UBxjG'](uploadImg);
            _0x3c341e['VujgZ'](expect, _0x3fb3ff['statusCode'])['toBe'](0xc8);
            const _0x3741b4 = _0x3fb3ff['body'][0x0]['id'], _0x15d4a3 = await _0x3c341e['yyQeE'](rq, {
                    'method': _0x3c341e['pdtUi'],
                    'url': '/',
                    'body': {
                        'field': [{
                                '__component': _0x3c341e['zEMYJ'],
                                'singleMedia': { 'media': _0x3741b4 },
                                'multipleMedia': {
                                    'media': [
                                        _0x3741b4,
                                        _0x3741b4
                                    ]
                                }
                            }]
                    }
                });
            _0x3c341e['EWfVC'](expect, _0x15d4a3['statusCode'])['toBe'](0xc8), _0x3c341e['PRSpv'](expect, Array['isArray'](_0x15d4a3['body']['field']))['toBe'](!![]), _0x3c341e['PRSpv'](expect, _0x15d4a3['body'])['toMatchObject']({
                'field': [{
                        'id': expect['anything'](),
                        '__component': _0x3c341e['zEMYJ'],
                        'singleMedia': {
                            'media': {
                                'id': _0x3741b4,
                                'url': expect['any'](String)
                            }
                        },
                        'multipleMedia': {
                            'media': expect['arrayContaining']([expect['objectContaining']({
                                    'id': _0x3741b4,
                                    'url': expect['any'](String)
                                })])
                        }
                    }]
            });
        });
    });
});
