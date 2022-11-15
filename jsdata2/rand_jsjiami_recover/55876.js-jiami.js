'use strict';
const common = require('../common');
const assert = require('assert');
const dgram = require('dgram');
const message_to_send = 'A message to send';
const server = dgram['createSocket']('udp4');
server['on']('message', common['mustCall']((_0x8275d5, _0x52f622) => {
    assert['strictEqual'](_0x52f622['address'], common['localhostIPv4']);
    assert['strictEqual'](_0x8275d5['toString'](), message_to_send['toString']());
    server['send'](_0x8275d5, 0, _0x8275d5['length'], _0x52f622['port'], _0x52f622['address']);
}));
server['on']('listening', common['mustCall'](() => {
    const _0x587dfa = dgram['createSocket']('udp4');
    const _0x355831 = server['address']()['port'];
    _0x587dfa['on']('message', common['mustCall']((_0x22509d, _0x31b774) => {
        assert['strictEqual'](_0x31b774['address'], common['localhostIPv4']);
        assert['strictEqual'](_0x31b774['port'], _0x355831);
        assert['strictEqual'](_0x22509d['toString'](), message_to_send['toString']());
        _0x587dfa['close']();
        server['close']();
    }));
    _0x587dfa['send'](message_to_send, 0, message_to_send['length'], _0x355831, 'localhost');
    _0x587dfa['on']('close', common['mustCall']());
}));
server['on']('close', common['mustCall']());
server['bind'](0);