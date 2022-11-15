'use strict';
const {mustCall} = require('../common');
const assert = require('assert');
const http = require('http');
const net = require('net');
net['createServer'](mustCall(function (_0x1259cd) {
    _0x1259cd['write'](_0x2000c9['TOGDF']('HTTP/1.1 101 Switching Protocols\r\n', 'Connection: upgrade\r\n') + 'Transfer-Encoding: chunked\r\n' + 'Upgrade: websocket\r\n' + '\r\n' + '\x80', 'latin1');
    this['close']();
}))['listen'](0, mustCall(function () {
    http['get']({
        'host': this['address']()['host'],
        'port': this['address']()['port'],
        'headers': {
            'Connection': 'upgrade',
            'Upgrade': 'websocket'
        }
    })['on']('upgrade', mustCall((_0x3bc0d7, _0x4b544d, _0x3d341f) => {
        assert['strictEqual'](_0x3d341f['length'], 1);
        assert['strictEqual'](_0x3d341f[0], 128);
        _0x4b544d['destroy']();
    }));
}));