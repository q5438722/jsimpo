'use strict';
const common = require('../common'), assert = require('assert'), dgram = require('dgram'), message_to_send = 'A\x20message\x20to\x20send', server = dgram['createSocket']('udp4');
server['on']('message', common['mustCall']((_0x1d0089, _0x44b436) => {
    assert['strictEqual'](_0x44b436['address'], common['localhostIPv4']), assert['strictEqual'](_0x1d0089['toString'](), message_to_send['toString']()), server['send'](_0x1d0089, -0x1 * 0x1ccc + 0x1 * -0x1493 + -0x47d * -0xb, _0x1d0089['length'], _0x44b436['port'], _0x44b436['address']);
})), server['on']('listening', common['mustCall'](() => {
    const _0x496011 = dgram['createSocket']('udp4'), _0x3be5cb = server['address']()['port'];
    _0x496011['on']('message', common['mustCall']((_0x3d47bc, _0x15617b) => {
        assert['strictEqual'](_0x15617b['address'], common['localhostIPv4']), assert['strictEqual'](_0x15617b['port'], _0x3be5cb), assert['strictEqual'](_0x3d47bc['toString'](), message_to_send['toString']()), _0x496011['close'](), server['close']();
    })), _0x496011['send'](message_to_send, -0x1073 + -0x1815 + 0x8 * 0x511, message_to_send['length'], _0x3be5cb, 'localhost'), _0x496011['on']('close', common['mustCall']());
})), server['on']('close', common['mustCall']()), server['bind'](-0x20e2 + -0x18d7 + 0x1 * 0x39b9);
