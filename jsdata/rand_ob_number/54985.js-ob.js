'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), http2 = require('http2'), errCheck = common['expectsError']({
        'name': 'Error',
        'code': 'ERR_STREAM_WRITE_AFTER_END',
        'message': 'write\x20after\x20end'
    }, 0x3b6 + -0x100 + -0x2b5), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2['constants'], server = http2['createServer']();
server['on']('stream', (_0x3443e2, _0x5d494f) => {
    assert['strictEqual'](_0x5d494f[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x3443e2['respond']({ [HTTP2_HEADER_STATUS]: -0x1e6 + -0xacb * -0x1 + -0x81d }), _0x3443e2['on']('error', errCheck), _0x3443e2['write']('data');
}), server['listen'](-0xf97 + 0x8d3 * 0x2 + -0x20f, () => {
    const _0x22ed9c = http2['connect']('http://localhost:' + server['address']()['port']), _0x4170cc = _0x22ed9c['request']({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x4170cc['on']('response', common['mustCall']((_0x170a01, _0x55e570) => {
        assert['strictEqual'](_0x170a01[HTTP2_HEADER_STATUS], 0x9d4 + 0x1d * 0x10f + -0x27bf), assert['strictEqual'](_0x55e570, 0x2a1 * 0x1 + -0x22c8 + 0x202c);
    })), _0x4170cc['on']('data', common['mustNotCall']()), _0x4170cc['on']('end', common['mustCall'](() => {
        server['close'](), _0x22ed9c['close']();
    }));
});
