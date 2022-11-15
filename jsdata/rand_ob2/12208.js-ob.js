'use strict';
const _0x72eb = [
    '.gif',
    'scale',
    'url',
    'secure_url',
    'provider_metadata',
    'public_id',
    'buffer',
    'uploader',
    'destroy',
    'image',
    'result',
    'not\x20found',
    'Error\x20deleting\x20on\x20cloudinary:\x20',
    '349380vqRKQo',
    '554657ytqXhb',
    '1598086eWzPIm',
    '1232083eCzqgF',
    '889123vGRNvP',
    '1259190RossiG',
    '736493MaPimJ',
    'cloudinary',
    'into-stream',
    'strapi-plugin-upload',
    'exports',
    'hash',
    'ext',
    'message',
    'includes',
    'File\x20size\x20too\x20large',
    'entityTooLarge',
    'unknownError',
    'Error\x20uploading\x20to\x20cloudinary:\x20',
    'resource_type',
    'video',
    'previewUrl'
];
const _0x26b872 = _0x443e;
(function (_0x33ec8a, _0x305cb9) {
    const _0x2bc83e = _0x443e;
    while (!![]) {
        try {
            const _0x3a691d = -parseInt(_0x2bc83e(0x1c4)) + parseInt(_0x2bc83e(0x1c5)) + parseInt(_0x2bc83e(0x1c6)) + -parseInt(_0x2bc83e(0x1c7)) + parseInt(_0x2bc83e(0x1c8)) + -parseInt(_0x2bc83e(0x1c9)) + parseInt(_0x2bc83e(0x1ca));
            if (_0x3a691d === _0x305cb9)
                break;
            else
                _0x33ec8a['push'](_0x33ec8a['shift']());
        } catch (_0x10778) {
            _0x33ec8a['push'](_0x33ec8a['shift']());
        }
    }
}(_0x72eb, 0xe4eea));
const cloudinary = require(_0x26b872(0x1cb))['v2'], intoStream = require(_0x26b872(0x1cc)), {errors} = require(_0x26b872(0x1cd));
function _0x443e(_0x505050, _0x883e24) {
    return _0x443e = function (_0x72ebf4, _0x443e55) {
        _0x72ebf4 = _0x72ebf4 - 0x1c4;
        let _0x4ac4b1 = _0x72eb[_0x72ebf4];
        return _0x4ac4b1;
    }, _0x443e(_0x505050, _0x883e24);
}
module[_0x26b872(0x1ce)] = {
    'init'(_0x4517ec) {
        return cloudinary['config'](_0x4517ec), {
            'upload'(_0x3bf3a7, _0x346bc7 = {}) {
                return new Promise((_0x48dba5, _0x39a9ba) => {
                    const _0x52fbdb = _0x443e, _0x4165ca = {
                            'resource_type': 'auto',
                            'public_id': _0x3bf3a7[_0x52fbdb(0x1cf)]
                        };
                    _0x3bf3a7[_0x52fbdb(0x1d0)] && (_0x4165ca['filename'] = '' + _0x3bf3a7[_0x52fbdb(0x1cf)] + _0x3bf3a7[_0x52fbdb(0x1d0)]);
                    const _0x2a5895 = cloudinary['uploader']['upload_stream']({
                        ..._0x4165ca,
                        ..._0x346bc7
                    }, (_0x177bc4, _0x54f4fc) => {
                        const _0x4b1970 = _0x52fbdb;
                        if (_0x177bc4) {
                            if (_0x177bc4[_0x4b1970(0x1d1)][_0x4b1970(0x1d2)](_0x4b1970(0x1d3)))
                                return _0x39a9ba(errors[_0x4b1970(0x1d4)]());
                            return _0x39a9ba(errors[_0x4b1970(0x1d5)](_0x4b1970(0x1d6) + _0x177bc4[_0x4b1970(0x1d1)]));
                        }
                        _0x54f4fc[_0x4b1970(0x1d7)] === _0x4b1970(0x1d8) && (_0x3bf3a7[_0x4b1970(0x1d9)] = cloudinary['url'](_0x54f4fc['public_id'] + _0x4b1970(0x1da), {
                            'video_sampling': 0x6,
                            'delay': 0xc8,
                            'width': 0xfa,
                            'crop': _0x4b1970(0x1db),
                            'resource_type': _0x4b1970(0x1d8)
                        })), _0x3bf3a7[_0x4b1970(0x1dc)] = _0x54f4fc[_0x4b1970(0x1dd)], _0x3bf3a7[_0x4b1970(0x1de)] = {
                            'public_id': _0x54f4fc[_0x4b1970(0x1df)],
                            'resource_type': _0x54f4fc[_0x4b1970(0x1d7)]
                        }, _0x48dba5();
                    });
                    intoStream(_0x3bf3a7[_0x52fbdb(0x1e0)])['pipe'](_0x2a5895);
                });
            },
            async 'delete'(_0x5cb80b, _0x147b32 = {}) {
                const _0x5b99ca = _0x443e;
                try {
                    const {
                            resource_type: _0x58cb3e,
                            public_id: _0x387177
                        } = _0x5cb80b[_0x5b99ca(0x1de)], _0x466fbe = await cloudinary[_0x5b99ca(0x1e1)][_0x5b99ca(0x1e2)](_0x387177, {
                            'invalidate': !![],
                            'resource_type': _0x58cb3e || _0x5b99ca(0x1e3),
                            ..._0x147b32
                        });
                    if (_0x466fbe['result'] !== 'ok' && _0x466fbe[_0x5b99ca(0x1e4)] !== _0x5b99ca(0x1e5))
                        throw errors[_0x5b99ca(0x1d5)](_0x5b99ca(0x1e6) + _0x466fbe[_0x5b99ca(0x1e4)]);
                } catch (_0x3d106d) {
                    throw errors[_0x5b99ca(0x1d5)](_0x5b99ca(0x1e6) + _0x3d106d['message']);
                }
            }
        };
    }
};
