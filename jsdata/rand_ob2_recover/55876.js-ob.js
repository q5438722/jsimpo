const common = require('../common'), assert = require('assert'), dgram = require('dgram'), message_to_send = 'A message to send', server = dgram[_0x409c10(418)](_0x409c10(419));
server['on']('message', common[_0x409c10(420)]((_0x5a8904, _0x1033fb) => {
    const _0x2a2b91 = _0x409c10;
    assert[_0x2a2b91(421)](_0x1033fb[_0x2a2b91(422)], common[_0x2a2b91(423)]), assert[_0x2a2b91(421)](_0x5a8904[_0x2a2b91(424)](), message_to_send[_0x2a2b91(424)]()), server[_0x2a2b91(425)](_0x5a8904, 0, _0x5a8904['length'], _0x1033fb['port'], _0x1033fb[_0x2a2b91(422)]);
})), server['on'](_0x409c10(426), common['mustCall'](() => {
    const _0x13c076 = _0x409c10, _0x53fa0b = dgram[_0x13c076(418)]('udp4'), _0x1207e6 = server['address']()['port'];
    _0x53fa0b['on'](_0x13c076(427), common[_0x13c076(420)]((_0x15d6d6, _0x426b3a) => {
        const _0x20a6f5 = _0x13c076;
        assert['strictEqual'](_0x426b3a[_0x20a6f5(422)], common['localhostIPv4']), assert[_0x20a6f5(421)](_0x426b3a[_0x20a6f5(428)], _0x1207e6), assert[_0x20a6f5(421)](_0x15d6d6[_0x20a6f5(424)](), message_to_send[_0x20a6f5(424)]()), _0x53fa0b[_0x20a6f5(429)](), server[_0x20a6f5(429)]();
    })), _0x53fa0b['send'](message_to_send, 0, message_to_send[_0x13c076(430)], _0x1207e6, 'localhost'), _0x53fa0b['on'](_0x13c076(429), common['mustCall']());
})), server['on'](_0x409c10(429), common[_0x409c10(420)]()), server[_0x409c10(431)](0);