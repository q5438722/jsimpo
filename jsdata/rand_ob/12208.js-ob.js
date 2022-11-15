'use strict';
const _0x46e5 = [
    'cloudinary',
    'into-stream',
    'strapi-plugin-upload',
    'auto',
    'image',
    'not\x20found',
    'config',
    'rnHuV',
    'iSXmw',
    'VqbXr',
    'hash',
    'ext',
    'filename',
    'upload_stream',
    'message',
    'File\x20size\x20too\x20large',
    'DmIcT',
    'entityTooLarge',
    'unknownError',
    'tsxlN',
    'resource_type',
    'previewUrl',
    'url',
    'public_id',
    '.gif',
    'BLzZO',
    'secure_url',
    'provider_metadata',
    'tJHKS',
    'pipe',
    'uploader',
    'dthov',
    'tcyMX',
    'result',
    'ZWTyM',
    'Error\x20deleting\x20on\x20cloudinary:\x20',
    '406224yCIfFU',
    '486509qOhGCv',
    '1naRNRc',
    '587NtQJQx',
    '1289Vqguik',
    '169RDphGL',
    '7142GMNmji',
    '24JIXVPu',
    '10480jwebsr',
    '10ZUKjll',
    '14339uoOZfZ',
    '595505jwDvKB'
];
const _0x16c25f = _0x35cc;
(function (_0x3e1841, _0x2c4674) {
    const _0x13a8d4 = _0x35cc;
    while (!![]) {
        try {
            const _0x1cc7e1 = parseInt(_0x13a8d4(0xb1)) + -parseInt(_0x13a8d4(0xb2)) * -parseInt(_0x13a8d4(0xb3)) + parseInt(_0x13a8d4(0xb4)) * -parseInt(_0x13a8d4(0xb5)) + parseInt(_0x13a8d4(0xb6)) * parseInt(_0x13a8d4(0xb7)) + parseInt(_0x13a8d4(0xb8)) * -parseInt(_0x13a8d4(0xb9)) + -parseInt(_0x13a8d4(0xba)) * -parseInt(_0x13a8d4(0xbb)) + -parseInt(_0x13a8d4(0xbc));
            if (_0x1cc7e1 === _0x2c4674)
                break;
            else
                _0x3e1841['push'](_0x3e1841['shift']());
        } catch (_0x4b3f51) {
            _0x3e1841['push'](_0x3e1841['shift']());
        }
    }
}(_0x46e5, -0x48b6c + 0x106cb7 + -0x21f6e));
const cloudinary = require(_0x16c25f(0xbd))['v2'], intoStream = require(_0x16c25f(0xbe)), {errors} = require(_0x16c25f(0xbf));
function _0x35cc(_0x48d365, _0x2ae6d9) {
    return _0x35cc = function (_0x1aa04f, _0x488f1f) {
        _0x1aa04f = _0x1aa04f - (0x357 + 0xcff + -0x537 * 0x3);
        let _0x31ae24 = _0x46e5[_0x1aa04f];
        return _0x31ae24;
    }, _0x35cc(_0x48d365, _0x2ae6d9);
}
module['exports'] = {
    'init'(_0x1271db) {
        const _0x11d6c1 = _0x16c25f, _0x2336f8 = {
                'VqbXr': _0x11d6c1(0xc0),
                'tJHKS': function (_0x5e420d, _0x149ae7) {
                    return _0x5e420d(_0x149ae7);
                },
                'ixmCi': function (_0x1c9cc7, _0x4644cf) {
                    return _0x1c9cc7(_0x4644cf);
                },
                'BqfVA': function (_0x3bc23e, _0x1ded8c) {
                    return _0x3bc23e === _0x1ded8c;
                },
                'rnHuV': 'scale',
                'iSXmw': 'video',
                'dthov': function (_0x4afe3b, _0x1313a0) {
                    return _0x4afe3b || _0x1313a0;
                },
                'WSaYC': _0x11d6c1(0xc1),
                'tcyMX': function (_0x51375b, _0x4670a0) {
                    return _0x51375b !== _0x4670a0;
                },
                'ZWTyM': _0x11d6c1(0xc2)
            };
        return cloudinary[_0x11d6c1(0xc3)](_0x1271db), {
            'upload'(_0x2cdfa0, _0x6a22fa = {}) {
                const _0x18ec53 = _0x11d6c1, _0x460e05 = {
                        'DmIcT': function (_0x3df872, _0x86a024) {
                            return _0x2336f8['ixmCi'](_0x3df872, _0x86a024);
                        },
                        'tsxlN': function (_0x231d04, _0x319fbf) {
                            return _0x2336f8['BqfVA'](_0x231d04, _0x319fbf);
                        },
                        'YzRTf': _0x2336f8[_0x18ec53(0xc4)],
                        'BLzZO': _0x2336f8[_0x18ec53(0xc5)]
                    };
                return new Promise((_0x4643a8, _0x12443d) => {
                    const _0x568124 = _0x18ec53, _0x537326 = {
                            'resource_type': _0x2336f8[_0x568124(0xc6)],
                            'public_id': _0x2cdfa0[_0x568124(0xc7)]
                        };
                    _0x2cdfa0[_0x568124(0xc8)] && (_0x537326[_0x568124(0xc9)] = '' + _0x2cdfa0[_0x568124(0xc7)] + _0x2cdfa0[_0x568124(0xc8)]);
                    const _0x1e85b5 = cloudinary['uploader'][_0x568124(0xca)]({
                        ..._0x537326,
                        ..._0x6a22fa
                    }, (_0x30cd70, _0x4b9db4) => {
                        const _0x33545d = _0x568124;
                        if (_0x30cd70) {
                            if (_0x30cd70[_0x33545d(0xcb)]['includes'](_0x33545d(0xcc)))
                                return _0x460e05[_0x33545d(0xcd)](_0x12443d, errors[_0x33545d(0xce)]());
                            return _0x460e05['DmIcT'](_0x12443d, errors[_0x33545d(0xcf)]('Error\x20uploading\x20to\x20cloudinary:\x20' + _0x30cd70[_0x33545d(0xcb)]));
                        }
                        _0x460e05[_0x33545d(0xd0)](_0x4b9db4[_0x33545d(0xd1)], 'video') && (_0x2cdfa0[_0x33545d(0xd2)] = cloudinary[_0x33545d(0xd3)](_0x4b9db4[_0x33545d(0xd4)] + _0x33545d(0xd5), {
                            'video_sampling': 0x6,
                            'delay': 0xc8,
                            'width': 0xfa,
                            'crop': _0x460e05['YzRTf'],
                            'resource_type': _0x460e05[_0x33545d(0xd6)]
                        })), _0x2cdfa0[_0x33545d(0xd3)] = _0x4b9db4[_0x33545d(0xd7)], _0x2cdfa0[_0x33545d(0xd8)] = {
                            'public_id': _0x4b9db4[_0x33545d(0xd4)],
                            'resource_type': _0x4b9db4[_0x33545d(0xd1)]
                        }, _0x4643a8();
                    });
                    _0x2336f8[_0x568124(0xd9)](intoStream, _0x2cdfa0['buffer'])[_0x568124(0xda)](_0x1e85b5);
                });
            },
            async 'delete'(_0xe1fc32, _0x1da496 = {}) {
                const _0x5d8e24 = _0x11d6c1;
                try {
                    const {
                            resource_type: _0x163be7,
                            public_id: _0x2388ea
                        } = _0xe1fc32[_0x5d8e24(0xd8)], _0x28fdbb = await cloudinary[_0x5d8e24(0xdb)]['destroy'](_0x2388ea, {
                            'invalidate': !![],
                            'resource_type': _0x2336f8[_0x5d8e24(0xdc)](_0x163be7, _0x2336f8['WSaYC']),
                            ..._0x1da496
                        });
                    if (_0x2336f8[_0x5d8e24(0xdd)](_0x28fdbb[_0x5d8e24(0xde)], 'ok') && _0x2336f8[_0x5d8e24(0xdd)](_0x28fdbb[_0x5d8e24(0xde)], _0x2336f8[_0x5d8e24(0xdf)]))
                        throw errors[_0x5d8e24(0xcf)]('Error\x20deleting\x20on\x20cloudinary:\x20' + _0x28fdbb['result']);
                } catch (_0x2b2a47) {
                    throw errors[_0x5d8e24(0xcf)](_0x5d8e24(0xe0) + _0x2b2a47[_0x5d8e24(0xcb)]);
                }
            }
        };
    }
};
