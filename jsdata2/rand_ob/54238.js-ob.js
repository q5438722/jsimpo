'use strict';
const _0xd027 = [
    'HJPdl',
    'address',
    'port',
    'end',
    'toString',
    'RjaTm',
    'close',
    'connect',
    'error',
    'strictEqual',
    'message',
    'Client\x20network\x20socket\x20disconnected\x20before\x20',
    'secure\x20TLS\x20connection\x20was\x20established',
    'UserA',
    'TLSv1.2',
    'TLSv1.3',
    'UserB',
    'UserC',
    '107560pFzlKe',
    '438045OijfOO',
    '760247IOlLmw',
    '4qvoZIc',
    '50274Lzntpa',
    '325757GLxoYI',
    '3teiZXr',
    '928933FKpEAE',
    '293595uxvZEs',
    '7xBNRUQ',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'assert',
    'tls',
    'allocUnsafe',
    '82072606b502b0f4025e90eb75fe137d',
    'hex',
    'string',
    'TLSSocket',
    'Alqbu',
    'uzHeT',
    'data',
    'mustCall',
    'mustNotCall',
    'createServer',
    'DOUli'
];
const _0x4913f6 = _0x859f;
(function (_0x56e6be, _0x13cf16) {
    const _0x38023f = _0x859f;
    while (!![]) {
        try {
            const _0x350b7e = -parseInt(_0x38023f(0x1d3)) + -parseInt(_0x38023f(0x1d4)) + -parseInt(_0x38023f(0x1d5)) + -parseInt(_0x38023f(0x1d6)) * parseInt(_0x38023f(0x1d7)) + parseInt(_0x38023f(0x1d8)) * -parseInt(_0x38023f(0x1d9)) + parseInt(_0x38023f(0x1da)) + -parseInt(_0x38023f(0x1db)) * -parseInt(_0x38023f(0x1dc));
            if (_0x350b7e === _0x13cf16)
                break;
            else
                _0x56e6be['push'](_0x56e6be['shift']());
        } catch (_0x68bdaa) {
            _0x56e6be['push'](_0x56e6be['shift']());
        }
    }
}(_0xd027, -0xb553d + -0x8bfb0 + 0x4 * 0x6ed65));
const common = require(_0x4913f6(0x1dd));
if (!common[_0x4913f6(0x1de)])
    common[_0x4913f6(0x1df)](_0x4913f6(0x1e0));
const assert = require(_0x4913f6(0x1e1)), tls = require(_0x4913f6(0x1e2)), CIPHERS = 'PSK+HIGH:TLS_AES_128_GCM_SHA256', USERS = {
        'UserA': Buffer[_0x4913f6(0x1e3)](0x63 * -0x1 + 0x5 * -0xf8 + -0x1 * -0x5bb),
        'UserB': Buffer['from'](_0x4913f6(0x1e4), _0x4913f6(0x1e5))
    }, TEST_DATA = 'x', serverOptions = {
        'ciphers': CIPHERS,
        'pskCallback'(_0x253b84, _0x29cc75) {
            const _0xf775ee = _0x4913f6, _0x37c5a9 = {
                    'Alqbu': function (_0xb82d9a, _0x41c7de) {
                        return _0xb82d9a === _0x41c7de;
                    },
                    'uzHeT': _0xf775ee(0x1e6)
                };
            return assert['ok'](_0x253b84 instanceof tls[_0xf775ee(0x1e7)]), assert['ok'](_0x37c5a9[_0xf775ee(0x1e8)](typeof _0x29cc75, _0x37c5a9[_0xf775ee(0x1e9)])), USERS[_0x29cc75];
        }
    };
function test(_0x511d40, _0x31ea7b, _0x2a0583) {
    const _0x553fde = _0x4913f6, _0x3e69d3 = {
            'DOUli': _0x553fde(0x1ea),
            'HJPdl': 'close'
        }, _0x4bd42c = !_0x2a0583 ? common[_0x553fde(0x1eb)](_0x29c984 => {
            _0x29c984['pipe'](_0x29c984);
        }) : common[_0x553fde(0x1ec)](), _0x39ea85 = tls[_0x553fde(0x1ed)](serverOptions, _0x4bd42c);
    _0x39ea85['listen'](0x25ca * -0x1 + 0x26fd + -0x133, common[_0x553fde(0x1eb)](() => {
        const _0xf8cc01 = _0x553fde, _0xaed5b8 = {
                'JzDXA': _0x3e69d3[_0xf8cc01(0x1ee)],
                'RjaTm': _0x3e69d3[_0xf8cc01(0x1ef)]
            }, _0x41f4c2 = {
                'port': _0x39ea85[_0xf8cc01(0x1f0)]()[_0xf8cc01(0x1f1)],
                'ciphers': CIPHERS,
                'checkServerIdentity': () => {
                },
                'pskCallback': common[_0xf8cc01(0x1eb)](() => _0x511d40),
                ..._0x31ea7b
            };
        if (!_0x2a0583) {
            const _0x41f01c = tls['connect'](_0x41f4c2, common[_0xf8cc01(0x1eb)](() => {
                const _0x2b4f75 = _0xf8cc01;
                _0x41f01c[_0x2b4f75(0x1f2)](TEST_DATA), _0x41f01c['on'](_0xaed5b8['JzDXA'], common['mustCall'](_0x139ef1 => {
                    const _0x9bc0ce = _0x2b4f75;
                    assert['strictEqual'](_0x139ef1[_0x9bc0ce(0x1f3)](), TEST_DATA);
                })), _0x41f01c['on'](_0xaed5b8[_0x2b4f75(0x1f4)], common[_0x2b4f75(0x1eb)](() => _0x39ea85[_0x2b4f75(0x1f5)]()));
            }));
        } else {
            const _0x4ec542 = tls[_0xf8cc01(0x1f6)](_0x41f4c2, common[_0xf8cc01(0x1ec)]());
            _0x4ec542['on'](_0xf8cc01(0x1f7), common[_0xf8cc01(0x1eb)](_0x3f5148 => {
                const _0x30c68a = _0xf8cc01;
                assert[_0x30c68a(0x1f8)](_0x3f5148[_0x30c68a(0x1f9)], _0x2a0583), _0x39ea85[_0x30c68a(0x1f5)]();
            }));
        }
    }));
}
const DISCONNECT_MESSAGE = _0x4913f6(0x1fa) + _0x4913f6(0x1fb);
function _0x859f(_0x6b33d3, _0x36e1d8) {
    return _0x859f = function (_0x309e93, _0x32df13) {
        _0x309e93 = _0x309e93 - (0x19ff + -0x19e8 + 0x1bc);
        let _0x234684 = _0xd027[_0x309e93];
        return _0x234684;
    }, _0x859f(_0x6b33d3, _0x36e1d8);
}
test({
    'psk': USERS[_0x4913f6(0x1fc)],
    'identity': 'UserA'
}), test({
    'psk': USERS[_0x4913f6(0x1fc)],
    'identity': _0x4913f6(0x1fc)
}, { 'maxVersion': _0x4913f6(0x1fd) }), test({
    'psk': USERS[_0x4913f6(0x1fc)],
    'identity': _0x4913f6(0x1fc)
}, { 'minVersion': _0x4913f6(0x1fe) }), test({
    'psk': USERS[_0x4913f6(0x1ff)],
    'identity': _0x4913f6(0x1ff)
}), test({
    'psk': USERS[_0x4913f6(0x1ff)],
    'identity': _0x4913f6(0x1ff)
}, { 'minVersion': 'TLSv1.3' }), test({
    'psk': USERS[_0x4913f6(0x1ff)],
    'identity': _0x4913f6(0x200)
}, {}, DISCONNECT_MESSAGE), test({
    'psk': USERS[_0x4913f6(0x1fc)],
    'identity': _0x4913f6(0x1ff)
}, {}, DISCONNECT_MESSAGE), test({
    'psk': USERS['UserB'],
    'identity': _0x4913f6(0x1ff)
});
