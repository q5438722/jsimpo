'use strict';
const {mustCall} = require('../common'), assert = require('assert'), http = require('http'), net = require('net');
net['createServer'](mustCall(function (_0x2804a8) {
    _0x2804a8['write']('HTTP/1.1\x20101\x20Switching\x20Protocols\x0d\x0a' + 'Connection:\x20upgrade\x0d\x0a' + 'Transfer-Encoding:\x20chunked\x0d\x0a' + 'Upgrade:\x20websocket\x0d\x0a' + '\x0d\x0a' + '\u0080', 'latin1'), this['close']();
}))['listen'](-0xab1 + 0x154d * 0x1 + -0xa9c, mustCall(function () {
    http['get']({
        'host': this['address']()['host'],
        'port': this['address']()['port'],
        'headers': {
            'Connection': 'upgrade',
            'Upgrade': 'websocket'
        }
    })['on']('upgrade', mustCall((_0x4828f6, _0x3dac9c, _0x3854f8) => {
        assert['strictEqual'](_0x3854f8['length'], -0xa8d + -0x1f38 + 0x29c6), assert['strictEqual'](_0x3854f8[-0x9c6 + 0x1d11 + -0x1c1 * 0xb], 0x123 * -0x1 + 0xea7 + -0xc4 * 0x11), _0x3dac9c['destroy']();
    }));
}));
