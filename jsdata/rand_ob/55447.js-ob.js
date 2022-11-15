'use strict';
const _0x3337 = [
    'LwRHe',
    '/inv3-ca1ca2',
    'lXQJP',
    '/val3-ca2',
    '/val3-ca1ca2',
    'uJQkX',
    'exit',
    'strictEqual',
    'length',
    '1441381bOEPwF',
    '316797HnPTcU',
    '264817UMxLAt',
    '239vDUcmg',
    '691cmmlYN',
    '1688144nfduZt',
    '5hvHkwc',
    '16591sTTGra',
    '1DBDRxi',
    '478159CBBdkH',
    '../common',
    '../common/fixtures',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'env',
    'expectWarning',
    'Warning',
    'certificate\x20verification.',
    'assert',
    'readKey',
    'agent1-cert.pem',
    'agent2-key.pem',
    'agent3-key.pem',
    'agent3-cert.pem',
    'ca1-cert.pem',
    'Agent',
    'listen',
    'requests',
    'expectCount',
    'bar',
    'push',
    'url',
    'statusCode',
    'setHeader',
    'FKqtC',
    'ybQlS',
    'end',
    'vjrlv',
    '2|3|0|4|1',
    'response',
    'agent',
    'isArray',
    'includes',
    'headers',
    'address',
    'port',
    'fnWNK',
    'invalid\x20port:\x20',
    'mustCall',
    'ExwIP',
    'split',
    'resume',
    'connection',
    'authorizationError',
    'close',
    '/inv1',
    '/val1-ca1',
    '/val1-ca1ca2',
    'agent2',
    '/inv2-ca1ca2',
    '/inv3-ca2',
    'agent3',
    '/inv3-ca1',
    'fpnNJ',
    'MQIhr',
    'Unlrp',
    'lqxen',
    'rhslg',
    'uXqbu',
    'MwVyv',
    'NHrWw',
    'AAPLi',
    '/inv1-ca2',
    'agent1',
    'cBxCy',
    '/inv2-ca1',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    'eteNJ',
    'EjXpK',
    'ssGTd',
    '/inv3',
    'rvKie'
];
const _0x52018a = _0x558e;
(function (_0x56e03f, _0x537d60) {
    const _0x4e4f50 = _0x558e;
    while (!![]) {
        try {
            const _0x43fc69 = -parseInt(_0x4e4f50(0xda)) + -parseInt(_0x4e4f50(0xdb)) + parseInt(_0x4e4f50(0xdc)) + parseInt(_0x4e4f50(0xdd)) * parseInt(_0x4e4f50(0xde)) + parseInt(_0x4e4f50(0xdf)) + -parseInt(_0x4e4f50(0xe0)) * -parseInt(_0x4e4f50(0xe1)) + -parseInt(_0x4e4f50(0xe2)) * -parseInt(_0x4e4f50(0xe3));
            if (_0x43fc69 === _0x537d60)
                break;
            else
                _0x56e03f['push'](_0x56e03f['shift']());
        } catch (_0x470443) {
            _0x56e03f['push'](_0x56e03f['shift']());
        }
    }
}(_0x3337, 0x13b00d + 0x10f0ad + -0x1692e4));
const common = require(_0x52018a(0xe4)), fixtures = require(_0x52018a(0xe5));
if (!common[_0x52018a(0xe6)])
    common[_0x52018a(0xe7)](_0x52018a(0xe8));
function _0x558e(_0xa51e43, _0x55cb9c) {
    return _0x558e = function (_0x5d51bb, _0x3e97e0) {
        _0x5d51bb = _0x5d51bb - (0x226 * -0xe + -0x5a7 * 0x3 + 0x2fe3);
        let _0x2ce887 = _0x3337[_0x5d51bb];
        return _0x2ce887;
    }, _0x558e(_0xa51e43, _0x55cb9c);
}
process[_0x52018a(0xe9)]['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common[_0x52018a(0xea)](_0x52018a(0xeb), 'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20' + 'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20' + _0x52018a(0xec));
const assert = require(_0x52018a(0xed)), https = require('https');
function read(_0x26cee3) {
    const _0x4566cf = _0x52018a;
    return fixtures[_0x4566cf(0xee)](_0x26cee3);
}
const key1 = read('agent1-key.pem'), cert1 = read(_0x52018a(0xef)), key2 = read(_0x52018a(0xf0)), cert2 = read('agent2-cert.pem'), key3 = read(_0x52018a(0xf1)), cert3 = read(_0x52018a(0xf2)), ca1 = read(_0x52018a(0xf3)), ca2 = read('ca2-cert.pem'), agent0 = new https['Agent'](), agent1 = new https[(_0x52018a(0xf4))]({ 'ca': [ca1] }), agent2 = new https[(_0x52018a(0xf4))]({ 'ca': [ca2] }), agent3 = new https[(_0x52018a(0xf4))]({
        'ca': [
            ca1,
            ca2
        ]
    }), options1 = {
        'key': key1,
        'cert': cert1
    }, options2 = {
        'key': key2,
        'cert': cert2
    }, options3 = {
        'key': key3,
        'cert': cert3
    }, server1 = server(options1), server2 = server(options2), server3 = server(options3);
let listenWait = 0xb32 + 0x8 * 0x2f7 + -0x22ea;
server1[_0x52018a(0xf5)](0x2397 * 0x1 + 0x1499 + 0x1f * -0x1d0, listening()), server2[_0x52018a(0xf5)](0x545 + 0xe93 + 0x1 * -0x13d8, listening()), server3[_0x52018a(0xf5)](0x3 * 0x6d + 0x299 + -0x3e0, listening());
const responseErrors = {};
let pending = 0x1 * 0x1327 + 0x5 * 0x786 + 0x1 * -0x38c5;
function server(_0x1f7ae4) {
    const _0xf7bc54 = _0x52018a, _0xfde9dd = https['createServer'](_0x1f7ae4, handler);
    return _0xfde9dd[_0xf7bc54(0xf6)] = [], _0xfde9dd[_0xf7bc54(0xf7)] = -0xc61 + 0x1556 * -0x1 + 0x9 * 0x3bf, _0xfde9dd;
}
function handler(_0x24d15f, _0x4b6838) {
    const _0x763c09 = _0x52018a, _0x105efb = {
            'FKqtC': 'foo',
            'ybQlS': _0x763c09(0xf8)
        };
    this[_0x763c09(0xf6)][_0x763c09(0xf9)](_0x24d15f[_0x763c09(0xfa)]), _0x4b6838[_0x763c09(0xfb)] = -0x2f3 + -0x2100 + 0x24bb, _0x4b6838[_0x763c09(0xfc)](_0x105efb[_0x763c09(0xfd)], _0x105efb[_0x763c09(0xfe)]), _0x4b6838[_0x763c09(0xff)]('hello,\x20world\x0a');
}
function listening() {
    const _0x520a98 = {
        'vjrlv': function (_0x71f3f0) {
            return _0x71f3f0();
        }
    };
    return listenWait++, () => {
        const _0x40971e = _0x558e;
        listenWait--, listenWait === -0x6 * 0x496 + 0x98 + 0x1aec && _0x520a98[_0x40971e(0x100)](allListening);
    };
}
function makeReq(_0x3496a1, _0x54ea26, _0x1000dd, _0x2c6e5e, _0x19c59e) {
    const _0x3de50c = _0x52018a, _0xc8d70e = {
            'ExwIP': _0x3de50c(0x101),
            'fnWNK': function (_0x5640d9, _0x44e71a) {
                return _0x5640d9 === _0x44e71a;
            },
            'BvBFf': _0x3de50c(0x102)
        };
    pending++;
    const _0x4ed1f5 = {
        'port': _0x54ea26,
        'path': _0x3496a1,
        'ca': _0x19c59e
    };
    if (!_0x19c59e)
        _0x4ed1f5[_0x3de50c(0x103)] = agent0;
    else {
        if (!Array[_0x3de50c(0x104)](_0x19c59e))
            _0x19c59e = [_0x19c59e];
        if (_0x19c59e[_0x3de50c(0x105)](ca1) && _0x19c59e[_0x3de50c(0x105)](ca2))
            _0x4ed1f5[_0x3de50c(0x103)] = agent3;
        else {
            if (_0x19c59e[_0x3de50c(0x105)](ca1))
                _0x4ed1f5['agent'] = agent1;
            else
                _0x19c59e[_0x3de50c(0x105)](ca2) ? _0x4ed1f5['agent'] = agent2 : _0x4ed1f5[_0x3de50c(0x103)] = agent0;
        }
    }
    _0x2c6e5e && (_0x4ed1f5[_0x3de50c(0x106)] = { 'host': _0x2c6e5e });
    const _0x18f85a = https['get'](_0x4ed1f5), _0x239094 = _0x54ea26 === server1[_0x3de50c(0x107)]()[_0x3de50c(0x108)] ? server1 : _0xc8d70e[_0x3de50c(0x109)](_0x54ea26, server2[_0x3de50c(0x107)]()['port']) ? server2 : _0xc8d70e[_0x3de50c(0x109)](_0x54ea26, server3[_0x3de50c(0x107)]()[_0x3de50c(0x108)]) ? server3 : null;
    if (!_0x239094)
        throw new Error(_0x3de50c(0x10a) + _0x54ea26);
    _0x239094['expectCount']++, _0x18f85a['on'](_0xc8d70e['BvBFf'], common[_0x3de50c(0x10b)](_0xca7408 => {
        const _0x19e66b = _0x3de50c, _0x521cfb = _0xc8d70e[_0x19e66b(0x10c)][_0x19e66b(0x10d)]('|');
        let _0x1895bf = 0x107 * -0x23 + -0x643 * -0x1 + 0x1db2;
        while (!![]) {
            switch (_0x521cfb[_0x1895bf++]) {
            case '0':
                pending--;
                continue;
            case '1':
                _0xca7408[_0x19e66b(0x10e)]();
                continue;
            case '2':
                assert['strictEqual'](_0xca7408[_0x19e66b(0x10f)][_0x19e66b(0x110)], _0x1000dd);
                continue;
            case '3':
                responseErrors[_0x3496a1] = _0xca7408['connection'][_0x19e66b(0x110)];
                continue;
            case '4':
                pending === -0x6b * -0x27 + -0x1c89 + 0xc * 0x105 && (server1[_0x19e66b(0x111)](), server2[_0x19e66b(0x111)](), server3[_0x19e66b(0x111)]());
                continue;
            }
            break;
        }
    }));
}
function allListening() {
    const _0x4d512d = _0x52018a, _0x43a964 = {
            'fpnNJ': _0x4d512d(0x112),
            'MQIhr': 'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
            'Unlrp': function (_0x15699e, _0x3a3bcb, _0xb5b7b9, _0x5a7a09, _0x311e25, _0x21c779) {
                return _0x15699e(_0x3a3bcb, _0xb5b7b9, _0x5a7a09, _0x311e25, _0x21c779);
            },
            'lqxen': 'ERR_TLS_CERT_ALTNAME_INVALID',
            'rhslg': function (_0x1f53e2, _0x18deab, _0x22d364, _0x164dcd, _0x496efa, _0xac3844) {
                return _0x1f53e2(_0x18deab, _0x22d364, _0x164dcd, _0x496efa, _0xac3844);
            },
            'uXqbu': '/inv1-ca1ca2',
            'MwVyv': function (_0x1b7593, _0x30c815, _0xa4e636, _0x11cc12, _0x4925e7, _0x2c3a44) {
                return _0x1b7593(_0x30c815, _0xa4e636, _0x11cc12, _0x4925e7, _0x2c3a44);
            },
            'HmUrT': _0x4d512d(0x113),
            'NHrWw': 'agent1',
            'AAPLi': function (_0x39da61, _0x1731da, _0x36911d, _0x851f77, _0x2b9c94, _0x275e08) {
                return _0x39da61(_0x1731da, _0x36911d, _0x851f77, _0x2b9c94, _0x275e08);
            },
            'fFVos': _0x4d512d(0x114),
            'cBxCy': function (_0xd060c6, _0x577c16, _0x184441, _0x29b1ae) {
                return _0xd060c6(_0x577c16, _0x184441, _0x29b1ae);
            },
            'bqJqh': '/inv2',
            'eteNJ': _0x4d512d(0x115),
            'EjXpK': _0x4d512d(0x116),
            'ssGTd': 'DEPTH_ZERO_SELF_SIGNED_CERT',
            'rvKie': function (_0x5a39e9, _0x5e1703, _0x18aa76, _0x572650, _0x13a387, _0x45bac8) {
                return _0x5a39e9(_0x5e1703, _0x18aa76, _0x572650, _0x13a387, _0x45bac8);
            },
            'vxKqI': _0x4d512d(0x117),
            'LwRHe': function (_0x4a969f, _0x4f8901, _0x18f3f7, _0x1a10ee, _0x26163d, _0x5179cd) {
                return _0x4a969f(_0x4f8901, _0x18f3f7, _0x1a10ee, _0x26163d, _0x5179cd);
            },
            'lXQJP': function (_0x5f0d79, _0x547958, _0x553836, _0x2adb5d, _0xe14408, _0x29ac6d) {
                return _0x5f0d79(_0x547958, _0x553836, _0x2adb5d, _0xe14408, _0x29ac6d);
            },
            'uJQkX': _0x4d512d(0x118),
            'KIcKV': _0x4d512d(0x119)
        }, _0x261ad2 = server1[_0x4d512d(0x107)]()[_0x4d512d(0x108)], _0x16ea14 = server2[_0x4d512d(0x107)]()[_0x4d512d(0x108)], _0x4c9676 = server3[_0x4d512d(0x107)]()[_0x4d512d(0x108)];
    makeReq(_0x43a964[_0x4d512d(0x11a)], _0x261ad2, _0x43a964[_0x4d512d(0x11b)]), _0x43a964[_0x4d512d(0x11c)](makeReq, '/inv1-ca1', _0x261ad2, _0x43a964[_0x4d512d(0x11d)], null, ca1), _0x43a964[_0x4d512d(0x11e)](makeReq, _0x43a964[_0x4d512d(0x11f)], _0x261ad2, _0x43a964['lqxen'], null, [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(0x120)](makeReq, _0x43a964['HmUrT'], _0x261ad2, null, _0x43a964[_0x4d512d(0x121)], ca1), _0x43a964[_0x4d512d(0x122)](makeReq, _0x43a964['fFVos'], _0x261ad2, null, _0x43a964[_0x4d512d(0x121)], [
        ca1,
        ca2
    ]), makeReq(_0x4d512d(0x123), _0x261ad2, _0x43a964['MQIhr'], _0x4d512d(0x124), ca2), _0x43a964[_0x4d512d(0x125)](makeReq, _0x43a964['bqJqh'], _0x16ea14, 'DEPTH_ZERO_SELF_SIGNED_CERT'), _0x43a964[_0x4d512d(0x122)](makeReq, _0x4d512d(0x126), _0x16ea14, _0x4d512d(0x127), _0x43a964[_0x4d512d(0x128)], ca1), _0x43a964[_0x4d512d(0x122)](makeReq, _0x43a964[_0x4d512d(0x129)], _0x16ea14, _0x43a964[_0x4d512d(0x12a)], _0x43a964['eteNJ'], [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(0x125)](makeReq, _0x4d512d(0x12b), _0x4c9676, _0x43a964[_0x4d512d(0x11b)]), _0x43a964[_0x4d512d(0x12c)](makeReq, _0x43a964['vxKqI'], _0x4c9676, _0x43a964[_0x4d512d(0x11d)], null, ca2), _0x43a964[_0x4d512d(0x12d)](makeReq, _0x4d512d(0x12e), _0x4c9676, _0x43a964[_0x4d512d(0x11d)], null, [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(0x12f)](makeReq, _0x4d512d(0x130), _0x4c9676, null, _0x4d512d(0x118), ca2), makeReq(_0x4d512d(0x131), _0x4c9676, null, _0x43a964[_0x4d512d(0x132)], [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(0x12f)](makeReq, _0x43a964['KIcKV'], _0x4c9676, _0x43a964[_0x4d512d(0x11b)], _0x43a964[_0x4d512d(0x121)], ca1);
}
process['on'](_0x52018a(0x133), () => {
    const _0x47d54f = _0x52018a;
    assert['strictEqual'](server1[_0x47d54f(0xf6)]['length'], server1['expectCount']), assert[_0x47d54f(0x134)](server2[_0x47d54f(0xf6)][_0x47d54f(0x135)], server2[_0x47d54f(0xf7)]), assert[_0x47d54f(0x134)](server3[_0x47d54f(0xf6)][_0x47d54f(0x135)], server3[_0x47d54f(0xf7)]);
});
