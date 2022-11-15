'use strict';
const _0x1fd6 = [
    '8flwTvA',
    '27023gMCNTs',
    '1104663iDUWhf',
    'createSocket',
    'udp4',
    'mustCall',
    'strictEqual',
    'address',
    'localhostIPv4',
    'toString',
    'send',
    'listening',
    'message',
    'port',
    'close',
    'length',
    'bind',
    '286194ZVhPeH',
    '25943BegJMJ',
    '18xtXQLF',
    '345489oMdTTv',
    '274571jktLTk',
    '224359SUELNW',
    '1cSAEWL'
];
function _0x12f2(_0x2ffecf, _0x571ad1) {
    return _0x12f2 = function (_0x1fd6d1, _0x12f2f3) {
        _0x1fd6d1 = _0x1fd6d1 - 0x198;
        let _0x3b459e = _0x1fd6[_0x1fd6d1];
        return _0x3b459e;
    }, _0x12f2(_0x2ffecf, _0x571ad1);
}
const _0x409c10 = _0x12f2;
(function (_0xfeb015, _0x17e438) {
    const _0xae42e3 = _0x12f2;
    while (!![]) {
        try {
            const _0x2cd978 = -parseInt(_0xae42e3(0x198)) + parseInt(_0xae42e3(0x199)) * -parseInt(_0xae42e3(0x19a)) + -parseInt(_0xae42e3(0x19b)) + parseInt(_0xae42e3(0x19c)) + parseInt(_0xae42e3(0x19d)) * parseInt(_0xae42e3(0x19e)) + parseInt(_0xae42e3(0x19f)) * -parseInt(_0xae42e3(0x1a0)) + parseInt(_0xae42e3(0x1a1));
            if (_0x2cd978 === _0x17e438)
                break;
            else
                _0xfeb015['push'](_0xfeb015['shift']());
        } catch (_0x5a69cc) {
            _0xfeb015['push'](_0xfeb015['shift']());
        }
    }
}(_0x1fd6, 0x467f0));
const common = require('../common'), assert = require('assert'), dgram = require('dgram'), message_to_send = 'A\x20message\x20to\x20send', server = dgram[_0x409c10(0x1a2)](_0x409c10(0x1a3));
server['on']('message', common[_0x409c10(0x1a4)]((_0x5a8904, _0x1033fb) => {
    const _0x2a2b91 = _0x409c10;
    assert[_0x2a2b91(0x1a5)](_0x1033fb[_0x2a2b91(0x1a6)], common[_0x2a2b91(0x1a7)]), assert[_0x2a2b91(0x1a5)](_0x5a8904[_0x2a2b91(0x1a8)](), message_to_send[_0x2a2b91(0x1a8)]()), server[_0x2a2b91(0x1a9)](_0x5a8904, 0x0, _0x5a8904['length'], _0x1033fb['port'], _0x1033fb[_0x2a2b91(0x1a6)]);
})), server['on'](_0x409c10(0x1aa), common['mustCall'](() => {
    const _0x13c076 = _0x409c10, _0x53fa0b = dgram[_0x13c076(0x1a2)]('udp4'), _0x1207e6 = server['address']()['port'];
    _0x53fa0b['on'](_0x13c076(0x1ab), common[_0x13c076(0x1a4)]((_0x15d6d6, _0x426b3a) => {
        const _0x20a6f5 = _0x13c076;
        assert['strictEqual'](_0x426b3a[_0x20a6f5(0x1a6)], common['localhostIPv4']), assert[_0x20a6f5(0x1a5)](_0x426b3a[_0x20a6f5(0x1ac)], _0x1207e6), assert[_0x20a6f5(0x1a5)](_0x15d6d6[_0x20a6f5(0x1a8)](), message_to_send[_0x20a6f5(0x1a8)]()), _0x53fa0b[_0x20a6f5(0x1ad)](), server[_0x20a6f5(0x1ad)]();
    })), _0x53fa0b['send'](message_to_send, 0x0, message_to_send[_0x13c076(0x1ae)], _0x1207e6, 'localhost'), _0x53fa0b['on'](_0x13c076(0x1ad), common['mustCall']());
})), server['on'](_0x409c10(0x1ad), common[_0x409c10(0x1a4)]()), server[_0x409c10(0x1af)](0x0);
