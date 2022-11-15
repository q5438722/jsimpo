'use strict';
const cloudinary = require('cloudinary')['v2'], intoStream = require('into-stream'), {errors} = require('strapi-plugin-upload');
module['exports'] = {
    'init'(_0x51f03b) {
        const _0x34ebf4 = {
            'PjNEm': '1|0|3|2|4',
            'DMMaA': function (_0x35197e, _0x14c7c7) {
                return _0x35197e === _0x14c7c7;
            },
            'RyJbl': 'video',
            'AfBcs': 'scale',
            'SXQKC': 'File\x20size\x20too\x20large',
            'yqgAm': function (_0x1410c4, _0x5c9c4a) {
                return _0x1410c4(_0x5c9c4a);
            },
            'HVtyr': function (_0x3f5b5d) {
                return _0x3f5b5d();
            },
            'IziNo': 'auto',
            'dGeHb': function (_0x20de48, _0x3bea8c) {
                return _0x20de48 || _0x3bea8c;
            },
            'gGsaI': 'image',
            'jeXCz': function (_0x4418c0, _0x412fe7) {
                return _0x4418c0 !== _0x412fe7;
            },
            'PIXjw': function (_0x17103b, _0x5063ea) {
                return _0x17103b !== _0x5063ea;
            },
            'tYfkx': 'not\x20found'
        };
        return cloudinary['config'](_0x51f03b), {
            'upload'(_0x1d3dd3, _0x31cb0c = {}) {
                const _0xc1633b = {
                    'pzkEb': _0x34ebf4['PjNEm'],
                    'nZsvT': function (_0x311a0d, _0x5379ae) {
                        return _0x34ebf4['DMMaA'](_0x311a0d, _0x5379ae);
                    },
                    'hLUhP': _0x34ebf4['RyJbl'],
                    'zYoOi': _0x34ebf4['AfBcs'],
                    'tVnml': _0x34ebf4['SXQKC'],
                    'yRWxG': function (_0x40ad93, _0x1f8eac) {
                        return _0x34ebf4['yqgAm'](_0x40ad93, _0x1f8eac);
                    },
                    'OnwGf': function (_0x3893f1) {
                        return _0x34ebf4['HVtyr'](_0x3893f1);
                    },
                    'vCKNe': _0x34ebf4['IziNo']
                };
                return new Promise((_0x227774, _0x9f65ef) => {
                    const _0x58cac0 = {
                            'IYWlX': _0xc1633b['pzkEb'],
                            'iqhuR': function (_0x34d57f, _0x1e7035) {
                                return _0xc1633b['nZsvT'](_0x34d57f, _0x1e7035);
                            },
                            'VFbyz': _0xc1633b['hLUhP'],
                            'MOKQg': _0xc1633b['zYoOi'],
                            'kSubB': _0xc1633b['tVnml'],
                            'NdtwR': function (_0x3251a5, _0x552757) {
                                return _0xc1633b['yRWxG'](_0x3251a5, _0x552757);
                            },
                            'QYOCn': function (_0x29168b, _0x83befc) {
                                return _0xc1633b['yRWxG'](_0x29168b, _0x83befc);
                            },
                            'YDPES': function (_0x334b0d) {
                                return _0xc1633b['OnwGf'](_0x334b0d);
                            }
                        }, _0x1ab50c = {
                            'resource_type': _0xc1633b['vCKNe'],
                            'public_id': _0x1d3dd3['hash']
                        };
                    _0x1d3dd3['ext'] && (_0x1ab50c['filename'] = '' + _0x1d3dd3['hash'] + _0x1d3dd3['ext']);
                    const _0xfb1822 = cloudinary['uploader']['upload_stream']({
                        ..._0x1ab50c,
                        ..._0x31cb0c
                    }, (_0x3a87e8, _0x49e20b) => {
                        const _0x2bde3a = _0x58cac0['IYWlX']['split']('|');
                        let _0x27364f = 0x0;
                        while (!![]) {
                            switch (_0x2bde3a[_0x27364f++]) {
                            case '0':
                                _0x58cac0['iqhuR'](_0x49e20b['resource_type'], _0x58cac0['VFbyz']) && (_0x1d3dd3['previewUrl'] = cloudinary['url'](_0x49e20b['public_id'] + '.gif', {
                                    'video_sampling': 0x6,
                                    'delay': 0xc8,
                                    'width': 0xfa,
                                    'crop': _0x58cac0['MOKQg'],
                                    'resource_type': _0x58cac0['VFbyz']
                                }));
                                continue;
                            case '1':
                                if (_0x3a87e8) {
                                    if (_0x3a87e8['message']['includes'](_0x58cac0['kSubB']))
                                        return _0x58cac0['NdtwR'](_0x9f65ef, errors['entityTooLarge']());
                                    return _0x58cac0['QYOCn'](_0x9f65ef, errors['unknownError']('Error\x20uploading\x20to\x20cloudinary:\x20' + _0x3a87e8['message']));
                                }
                                continue;
                            case '2':
                                _0x1d3dd3['provider_metadata'] = {
                                    'public_id': _0x49e20b['public_id'],
                                    'resource_type': _0x49e20b['resource_type']
                                };
                                continue;
                            case '3':
                                _0x1d3dd3['url'] = _0x49e20b['secure_url'];
                                continue;
                            case '4':
                                _0x58cac0['YDPES'](_0x227774);
                                continue;
                            }
                            break;
                        }
                    });
                    _0xc1633b['yRWxG'](intoStream, _0x1d3dd3['buffer'])['pipe'](_0xfb1822);
                });
            },
            async 'delete'(_0x2c9aa2, _0x18fb2d = {}) {
                try {
                    const {
                            resource_type: _0x8d2f93,
                            public_id: _0x27130f
                        } = _0x2c9aa2['provider_metadata'], _0x29a4d0 = await cloudinary['uploader']['destroy'](_0x27130f, {
                            'invalidate': !![],
                            'resource_type': _0x34ebf4['dGeHb'](_0x8d2f93, _0x34ebf4['gGsaI']),
                            ..._0x18fb2d
                        });
                    if (_0x34ebf4['jeXCz'](_0x29a4d0['result'], 'ok') && _0x34ebf4['PIXjw'](_0x29a4d0['result'], _0x34ebf4['tYfkx']))
                        throw errors['unknownError']('Error\x20deleting\x20on\x20cloudinary:\x20' + _0x29a4d0['result']);
                } catch (_0x3fec4b) {
                    throw errors['unknownError']('Error\x20deleting\x20on\x20cloudinary:\x20' + _0x3fec4b['message']);
                }
            }
        };
    }
};
