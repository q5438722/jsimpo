'use strict';
const _0x51f4 = [
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'allocUnsafe',
    'from',
    'hex',
    'TLSSocket',
    'string',
    'mustCall',
    'createServer',
    'listen',
    'port',
    'connect',
    'end',
    'strictEqual',
    'toString',
    'close',
    'mustNotCall',
    'message',
    'Client\x20network\x20socket\x20disconnected\x20before\x20',
    'secure\x20TLS\x20connection\x20was\x20established',
    'UserA',
    'TLSv1.2',
    'TLSv1.3',
    'UserB',
    'UserC',
    '8PRgKWV',
    '6208ATKvGq',
    '895eFsUVx',
    '443qSEhPJ',
    '149034XWZSYl',
    '913Denhye',
    '307LOFLgt',
    '377366IHdLRS',
    '71LrEWvq',
    '5606rzJPiT',
    '543717xfyyHw'
];
const _0x48104e = _0x2b6d;
(function (_0x5a0c33, _0x25bbfa) {
    const _0x382c27 = _0x2b6d;
    while (!![]) {
        try {
            const _0xe4ad63 = parseInt(_0x382c27(0x16d)) * -parseInt(_0x382c27(0x16e)) + -parseInt(_0x382c27(0x16f)) * -parseInt(_0x382c27(0x170)) + parseInt(_0x382c27(0x171)) + parseInt(_0x382c27(0x172)) * parseInt(_0x382c27(0x173)) + parseInt(_0x382c27(0x174)) + parseInt(_0x382c27(0x175)) * -parseInt(_0x382c27(0x176)) + -parseInt(_0x382c27(0x177));
            if (_0xe4ad63 === _0x25bbfa)
                break;
            else
                _0x5a0c33['push'](_0x5a0c33['shift']());
        } catch (_0x387250) {
            _0x5a0c33['push'](_0x5a0c33['shift']());
        }
    }
}(_0x51f4, 0x33b39));
const common = require('../common');
if (!common[_0x48104e(0x178)])
    common[_0x48104e(0x179)](_0x48104e(0x17a));
function _0x2b6d(_0x133f4e, _0x58623e) {
    return _0x2b6d = function (_0x51f460, _0x2b6d00) {
        _0x51f460 = _0x51f460 - 0x16d;
        let _0x8cd3eb = _0x51f4[_0x51f460];
        return _0x8cd3eb;
    }, _0x2b6d(_0x133f4e, _0x58623e);
}
const assert = require('assert'), tls = require('tls'), CIPHERS = 'PSK+HIGH:TLS_AES_128_GCM_SHA256', USERS = {
        'UserA': Buffer[_0x48104e(0x17b)](0x80),
        'UserB': Buffer[_0x48104e(0x17c)]('82072606b502b0f4025e90eb75fe137d', _0x48104e(0x17d))
    }, TEST_DATA = 'x', serverOptions = {
        'ciphers': CIPHERS,
        'pskCallback'(_0x454de8, _0xd8be3e) {
            const _0x1c8506 = _0x48104e;
            return assert['ok'](_0x454de8 instanceof tls[_0x1c8506(0x17e)]), assert['ok'](typeof _0xd8be3e === _0x1c8506(0x17f)), USERS[_0xd8be3e];
        }
    };
function test(_0x3ee5f9, _0x15d154, _0x4535b9) {
    const _0x51cf99 = _0x48104e, _0x161c27 = !_0x4535b9 ? common[_0x51cf99(0x180)](_0x46c6ae => {
            _0x46c6ae['pipe'](_0x46c6ae);
        }) : common['mustNotCall'](), _0x46b6fc = tls[_0x51cf99(0x181)](serverOptions, _0x161c27);
    _0x46b6fc[_0x51cf99(0x182)](0x0, common[_0x51cf99(0x180)](() => {
        const _0x153399 = _0x51cf99, _0x52a7fd = {
                'port': _0x46b6fc['address']()[_0x153399(0x183)],
                'ciphers': CIPHERS,
                'checkServerIdentity': () => {
                },
                'pskCallback': common[_0x153399(0x180)](() => _0x3ee5f9),
                ..._0x15d154
            };
        if (!_0x4535b9) {
            const _0x11e891 = tls[_0x153399(0x184)](_0x52a7fd, common[_0x153399(0x180)](() => {
                const _0x11535e = _0x153399;
                _0x11e891[_0x11535e(0x185)](TEST_DATA), _0x11e891['on']('data', common['mustCall'](_0x170fbc => {
                    const _0x30aa3e = _0x11535e;
                    assert[_0x30aa3e(0x186)](_0x170fbc[_0x30aa3e(0x187)](), TEST_DATA);
                })), _0x11e891['on'](_0x11535e(0x188), common[_0x11535e(0x180)](() => _0x46b6fc[_0x11535e(0x188)]()));
            }));
        } else {
            const _0xca9459 = tls['connect'](_0x52a7fd, common[_0x153399(0x189)]());
            _0xca9459['on']('error', common[_0x153399(0x180)](_0x1573b4 => {
                const _0x1460a5 = _0x153399;
                assert[_0x1460a5(0x186)](_0x1573b4[_0x1460a5(0x18a)], _0x4535b9), _0x46b6fc[_0x1460a5(0x188)]();
            }));
        }
    }));
}
const DISCONNECT_MESSAGE = _0x48104e(0x18b) + _0x48104e(0x18c);
test({
    'psk': USERS['UserA'],
    'identity': 'UserA'
}), test({
    'psk': USERS[_0x48104e(0x18d)],
    'identity': _0x48104e(0x18d)
}, { 'maxVersion': _0x48104e(0x18e) }), test({
    'psk': USERS[_0x48104e(0x18d)],
    'identity': 'UserA'
}, { 'minVersion': _0x48104e(0x18f) }), test({
    'psk': USERS[_0x48104e(0x190)],
    'identity': 'UserB'
}), test({
    'psk': USERS['UserB'],
    'identity': _0x48104e(0x190)
}, { 'minVersion': _0x48104e(0x18f) }), test({
    'psk': USERS['UserB'],
    'identity': _0x48104e(0x191)
}, {}, DISCONNECT_MESSAGE), test({
    'psk': USERS[_0x48104e(0x18d)],
    'identity': _0x48104e(0x190)
}, {}, DISCONNECT_MESSAGE), test({
    'psk': USERS[_0x48104e(0x190)],
    'identity': _0x48104e(0x190)
});
