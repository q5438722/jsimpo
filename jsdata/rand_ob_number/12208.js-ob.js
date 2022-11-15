'use strict';
const cloudinary = require('cloudinary')['v2'], intoStream = require('into-stream'), {errors} = require('strapi-plugin-upload');
module['exports'] = {
    'init'(_0x25de89) {
        return cloudinary['config'](_0x25de89), {
            'upload'(_0x19d6d8, _0x34e5bf = {}) {
                return new Promise((_0x40ebe4, _0xc8a442) => {
                    const _0x11dd17 = {
                        'resource_type': 'auto',
                        'public_id': _0x19d6d8['hash']
                    };
                    _0x19d6d8['ext'] && (_0x11dd17['filename'] = '' + _0x19d6d8['hash'] + _0x19d6d8['ext']);
                    const _0x31766e = cloudinary['uploader']['upload_stream']({
                        ..._0x11dd17,
                        ..._0x34e5bf
                    }, (_0x2370e2, _0xb4b479) => {
                        if (_0x2370e2) {
                            if (_0x2370e2['message']['includes']('File\x20size\x20too\x20large'))
                                return _0xc8a442(errors['entityTooLarge']());
                            return _0xc8a442(errors['unknownError']('Error\x20uploading\x20to\x20cloudinary:\x20' + _0x2370e2['message']));
                        }
                        _0xb4b479['resource_type'] === 'video' && (_0x19d6d8['previewUrl'] = cloudinary['url'](_0xb4b479['public_id'] + '.gif', {
                            'video_sampling': 0x6,
                            'delay': 0xc8,
                            'width': 0xfa,
                            'crop': 'scale',
                            'resource_type': 'video'
                        })), _0x19d6d8['url'] = _0xb4b479['secure_url'], _0x19d6d8['provider_metadata'] = {
                            'public_id': _0xb4b479['public_id'],
                            'resource_type': _0xb4b479['resource_type']
                        }, _0x40ebe4();
                    });
                    intoStream(_0x19d6d8['buffer'])['pipe'](_0x31766e);
                });
            },
            async 'delete'(_0x22e914, _0x513db8 = {}) {
                try {
                    const {
                            resource_type: _0x50123d,
                            public_id: _0x5a1719
                        } = _0x22e914['provider_metadata'], _0x592d5e = await cloudinary['uploader']['destroy'](_0x5a1719, {
                            'invalidate': !![],
                            'resource_type': _0x50123d || 'image',
                            ..._0x513db8
                        });
                    if (_0x592d5e['result'] !== 'ok' && _0x592d5e['result'] !== 'not\x20found')
                        throw errors['unknownError']('Error\x20deleting\x20on\x20cloudinary:\x20' + _0x592d5e['result']);
                } catch (_0x2fc473) {
                    throw errors['unknownError']('Error\x20deleting\x20on\x20cloudinary:\x20' + _0x2fc473['message']);
                }
            }
        };
    }
};
