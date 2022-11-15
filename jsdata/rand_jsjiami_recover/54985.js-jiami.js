'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const http2 = require('http2');
const errCheck = common['expectsError']({
    'name': 'Error',
    'code': 'ERR_STREAM_WRITE_AFTER_END',
    'message': 'write after end'
}, 1);
const {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2['constants'];
const server = http2['createServer']();
server['on']('stream', (_0x552820, _0x51a49e) => {
    assert['strictEqual'](_0x51a49e[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD);
    _0x552820['respond']({ [HTTP2_HEADER_STATUS]: 200 });
    _0x552820['on']('error', errCheck);
    _0x552820['write']('data');
});
server['listen'](0, () => {
    const _0x5b964b = http2['connect']('http://localhost:' + server['address']()['port']);
    const _0x43a3f7 = _0x5b964b['request']({
        [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
        [HTTP2_HEADER_PATH]: '/'
    });
    _0x43a3f7['on']('response', common['mustCall']((_0x3d81d1, _0x3a2e01) => {
        assert['strictEqual'](_0x3d81d1[HTTP2_HEADER_STATUS], 200);
        assert['strictEqual'](_0x3a2e01, 5);
    }));
    _0x43a3f7['on']('data', common['mustNotCall']());
    _0x43a3f7['on']('end', common['mustCall'](() => {
        server['close']();
        _0x5b964b['close']();
    }));
});