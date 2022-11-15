'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const http2 = require('http2');
function testServerTimeout(_0x49524d) {
    const _0xdec973 = http2['createServer']();
    _0x49524d(_0xdec973);
    const _0x41a6a2 = common['mustCall'](_0x3baee9 => {
        _0x3baee9['close']();
    });
    _0xdec973['on']('stream', common['mustNotCall']());
    _0xdec973['once']('timeout', _0x41a6a2);
    _0xdec973['listen'](0, common['mustCall'](() => {
        var _0x212cf1 = { 'ZFQFn': 'close' };
        const _0xc6cf4b = 'http://localhost:' + _0xdec973['address']()['port'];
        const _0xe1011a = http2['connect'](_0xc6cf4b);
        _0xe1011a['on']('close', common['mustCall'](() => {
            const _0x1259df = http2['connect'](_0xc6cf4b);
            _0x1259df['on'](_0x212cf1['ZFQFn'], common['mustCall'](() => _0xdec973['close']()));
        }));
    }));
}
const timeout = common['platformTimeout'](50);
testServerTimeout(_0xb1a994 => _0xb1a994['setTimeout'](timeout));
testServerTimeout(_0x106720 => _0x106720['timeout'] = timeout);