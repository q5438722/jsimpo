'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), http2 = require('http2'), errCheck = common['expectsError']({
        'name': 'Error',
        'code': 'ERR_STREAM_WRITE_AFTER_END',
        'message': 'write\x20after\x20end'
    }, 0x1), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2['constants'], server = http2['createServer']();
server['on']('stream', (_0x12bb63, _0x203c69) => {
    const _0x449190 = {
        'fTIsZ': 'error',
        'fvlob': 'data'
    };
    assert['strictEqual'](_0x203c69[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x12bb63['respond']({ [HTTP2_HEADER_STATUS]: 0xc8 }), _0x12bb63['on'](_0x449190['fTIsZ'], errCheck), _0x12bb63['write'](_0x449190['fvlob']);
}), server['listen'](0x0, () => {
    const _0x5889de = {
            'nkOxu': 'response',
            'iaqsb': 'data',
            'GnMBP': 'end'
        }, _0x1761e0 = http2['connect']('http://localhost:' + server['address']()['port']), _0x433d50 = _0x1761e0['request']({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x433d50['on'](_0x5889de['nkOxu'], common['mustCall']((_0x4d9721, _0x37bb99) => {
        assert['strictEqual'](_0x4d9721[HTTP2_HEADER_STATUS], 0xc8), assert['strictEqual'](_0x37bb99, 0x5);
    })), _0x433d50['on'](_0x5889de['iaqsb'], common['mustNotCall']()), _0x433d50['on'](_0x5889de['GnMBP'], common['mustCall'](() => {
        server['close'](), _0x1761e0['close']();
    }));
});
