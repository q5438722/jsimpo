const common = require(_0x52018a(228)), fixtures = require(_0x52018a(229));
if (!common[_0x52018a(230)])
    common[_0x52018a(231)](_0x52018a(232));
function _0x558e(_0xa51e43, _0x55cb9c) {
    return _0x558e = function (_0x5d51bb, _0x3e97e0) {
        _0x5d51bb = _0x5d51bb - (550 * -14 + -1447 * 3 + 12259);
        let _0x2ce887 = _0x3337[_0x5d51bb];
        return _0x2ce887;
    }, _0x558e(_0xa51e43, _0x55cb9c);
}
process[_0x52018a(233)]['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common[_0x52018a(234)](_0x52018a(235), 'Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to \'0\' ' + 'makes TLS connections and HTTPS requests insecure by disabling ' + _0x52018a(236));
const assert = require(_0x52018a(237)), https = require('https');
function read(_0x26cee3) {
    const _0x4566cf = _0x52018a;
    return fixtures[_0x4566cf(238)](_0x26cee3);
}
const key1 = read('agent1-key.pem'), cert1 = read(_0x52018a(239)), key2 = read(_0x52018a(240)), cert2 = read('agent2-cert.pem'), key3 = read(_0x52018a(241)), cert3 = read(_0x52018a(242)), ca1 = read(_0x52018a(243)), ca2 = read('ca2-cert.pem'), agent0 = new https['Agent'](), agent1 = new https[(_0x52018a(244))]({ 'ca': [ca1] }), agent2 = new https[(_0x52018a(244))]({ 'ca': [ca2] }), agent3 = new https[(_0x52018a(244))]({
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
let listenWait = 2866 + 8 * 759 + -8938;
server1[_0x52018a(245)](9111 * 1 + 5273 + 31 * -464, listening()), server2[_0x52018a(245)](1349 + 3731 + 1 * -5080, listening()), server3[_0x52018a(245)](3 * 109 + 665 + -992, listening());
const responseErrors = {};
let pending = 1 * 4903 + 5 * 1926 + 1 * -14533;
function server(_0x1f7ae4) {
    const _0xf7bc54 = _0x52018a, _0xfde9dd = https['createServer'](_0x1f7ae4, handler);
    return _0xfde9dd[_0xf7bc54(246)] = [], _0xfde9dd[_0xf7bc54(247)] = -3169 + 5462 * -1 + 9 * 959, _0xfde9dd;
}
function handler(_0x24d15f, _0x4b6838) {
    const _0x763c09 = _0x52018a, _0x105efb = {
            'FKqtC': 'foo',
            'ybQlS': _0x763c09(248)
        };
    this[_0x763c09(246)][_0x763c09(249)](_0x24d15f[_0x763c09(250)]), _0x4b6838[_0x763c09(251)] = -755 + -8448 + 9403, _0x4b6838[_0x763c09(252)](_0x105efb[_0x763c09(253)], _0x105efb[_0x763c09(254)]), _0x4b6838[_0x763c09(255)]('hello, world\n');
}
function listening() {
    const _0x520a98 = {
        'vjrlv': function (_0x71f3f0) {
            return _0x71f3f0();
        }
    };
    return listenWait++, () => {
        const _0x40971e = _0x558e;
        listenWait--, listenWait === -6 * 1174 + 152 + 6892 && _0x520a98[_0x40971e(256)](allListening);
    };
}
function makeReq(_0x3496a1, _0x54ea26, _0x1000dd, _0x2c6e5e, _0x19c59e) {
    const _0x3de50c = _0x52018a, _0xc8d70e = {
            'ExwIP': _0x3de50c(257),
            'fnWNK': function (_0x5640d9, _0x44e71a) {
                return _0x5640d9 === _0x44e71a;
            },
            'BvBFf': _0x3de50c(258)
        };
    pending++;
    const _0x4ed1f5 = {
        'port': _0x54ea26,
        'path': _0x3496a1,
        'ca': _0x19c59e
    };
    if (!_0x19c59e)
        _0x4ed1f5[_0x3de50c(259)] = agent0;
    else {
        if (!Array[_0x3de50c(260)](_0x19c59e))
            _0x19c59e = [_0x19c59e];
        if (_0x19c59e[_0x3de50c(261)](ca1) && _0x19c59e[_0x3de50c(261)](ca2))
            _0x4ed1f5[_0x3de50c(259)] = agent3;
        else {
            if (_0x19c59e[_0x3de50c(261)](ca1))
                _0x4ed1f5['agent'] = agent1;
            else
                _0x19c59e[_0x3de50c(261)](ca2) ? _0x4ed1f5['agent'] = agent2 : _0x4ed1f5[_0x3de50c(259)] = agent0;
        }
    }
    _0x2c6e5e && (_0x4ed1f5[_0x3de50c(262)] = { 'host': _0x2c6e5e });
    const _0x18f85a = https['get'](_0x4ed1f5), _0x239094 = _0x54ea26 === server1[_0x3de50c(263)]()[_0x3de50c(264)] ? server1 : _0xc8d70e[_0x3de50c(265)](_0x54ea26, server2[_0x3de50c(263)]()['port']) ? server2 : _0xc8d70e[_0x3de50c(265)](_0x54ea26, server3[_0x3de50c(263)]()[_0x3de50c(264)]) ? server3 : null;
    if (!_0x239094)
        throw new Error(_0x3de50c(266) + _0x54ea26);
    _0x239094['expectCount']++, _0x18f85a['on'](_0xc8d70e['BvBFf'], common[_0x3de50c(267)](_0xca7408 => {
        const _0x19e66b = _0x3de50c, _0x521cfb = _0xc8d70e[_0x19e66b(268)][_0x19e66b(269)]('|');
        let _0x1895bf = 263 * -35 + -1603 * -1 + 7602;
        while (!![]) {
            switch (_0x521cfb[_0x1895bf++]) {
            case '0':
                pending--;
                continue;
            case '1':
                _0xca7408[_0x19e66b(270)]();
                continue;
            case '2':
                assert['strictEqual'](_0xca7408[_0x19e66b(271)][_0x19e66b(272)], _0x1000dd);
                continue;
            case '3':
                responseErrors[_0x3496a1] = _0xca7408['connection'][_0x19e66b(272)];
                continue;
            case '4':
                pending === -107 * -39 + -7305 + 12 * 261 && (server1[_0x19e66b(273)](), server2[_0x19e66b(273)](), server3[_0x19e66b(273)]());
                continue;
            }
            break;
        }
    }));
}
function allListening() {
    const _0x4d512d = _0x52018a, _0x43a964 = {
            'fpnNJ': _0x4d512d(274),
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
            'HmUrT': _0x4d512d(275),
            'NHrWw': 'agent1',
            'AAPLi': function (_0x39da61, _0x1731da, _0x36911d, _0x851f77, _0x2b9c94, _0x275e08) {
                return _0x39da61(_0x1731da, _0x36911d, _0x851f77, _0x2b9c94, _0x275e08);
            },
            'fFVos': _0x4d512d(276),
            'cBxCy': function (_0xd060c6, _0x577c16, _0x184441, _0x29b1ae) {
                return _0xd060c6(_0x577c16, _0x184441, _0x29b1ae);
            },
            'bqJqh': '/inv2',
            'eteNJ': _0x4d512d(277),
            'EjXpK': _0x4d512d(278),
            'ssGTd': 'DEPTH_ZERO_SELF_SIGNED_CERT',
            'rvKie': function (_0x5a39e9, _0x5e1703, _0x18aa76, _0x572650, _0x13a387, _0x45bac8) {
                return _0x5a39e9(_0x5e1703, _0x18aa76, _0x572650, _0x13a387, _0x45bac8);
            },
            'vxKqI': _0x4d512d(279),
            'LwRHe': function (_0x4a969f, _0x4f8901, _0x18f3f7, _0x1a10ee, _0x26163d, _0x5179cd) {
                return _0x4a969f(_0x4f8901, _0x18f3f7, _0x1a10ee, _0x26163d, _0x5179cd);
            },
            'lXQJP': function (_0x5f0d79, _0x547958, _0x553836, _0x2adb5d, _0xe14408, _0x29ac6d) {
                return _0x5f0d79(_0x547958, _0x553836, _0x2adb5d, _0xe14408, _0x29ac6d);
            },
            'uJQkX': _0x4d512d(280),
            'KIcKV': _0x4d512d(281)
        }, _0x261ad2 = server1[_0x4d512d(263)]()[_0x4d512d(264)], _0x16ea14 = server2[_0x4d512d(263)]()[_0x4d512d(264)], _0x4c9676 = server3[_0x4d512d(263)]()[_0x4d512d(264)];
    makeReq(_0x43a964[_0x4d512d(282)], _0x261ad2, _0x43a964[_0x4d512d(283)]), _0x43a964[_0x4d512d(284)](makeReq, '/inv1-ca1', _0x261ad2, _0x43a964[_0x4d512d(285)], null, ca1), _0x43a964[_0x4d512d(286)](makeReq, _0x43a964[_0x4d512d(287)], _0x261ad2, _0x43a964['lqxen'], null, [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(288)](makeReq, _0x43a964['HmUrT'], _0x261ad2, null, _0x43a964[_0x4d512d(289)], ca1), _0x43a964[_0x4d512d(290)](makeReq, _0x43a964['fFVos'], _0x261ad2, null, _0x43a964[_0x4d512d(289)], [
        ca1,
        ca2
    ]), makeReq(_0x4d512d(291), _0x261ad2, _0x43a964['MQIhr'], _0x4d512d(292), ca2), _0x43a964[_0x4d512d(293)](makeReq, _0x43a964['bqJqh'], _0x16ea14, 'DEPTH_ZERO_SELF_SIGNED_CERT'), _0x43a964[_0x4d512d(290)](makeReq, _0x4d512d(294), _0x16ea14, _0x4d512d(295), _0x43a964[_0x4d512d(296)], ca1), _0x43a964[_0x4d512d(290)](makeReq, _0x43a964[_0x4d512d(297)], _0x16ea14, _0x43a964[_0x4d512d(298)], _0x43a964['eteNJ'], [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(293)](makeReq, _0x4d512d(299), _0x4c9676, _0x43a964[_0x4d512d(283)]), _0x43a964[_0x4d512d(300)](makeReq, _0x43a964['vxKqI'], _0x4c9676, _0x43a964[_0x4d512d(285)], null, ca2), _0x43a964[_0x4d512d(301)](makeReq, _0x4d512d(302), _0x4c9676, _0x43a964[_0x4d512d(285)], null, [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(303)](makeReq, _0x4d512d(304), _0x4c9676, null, _0x4d512d(280), ca2), makeReq(_0x4d512d(305), _0x4c9676, null, _0x43a964[_0x4d512d(306)], [
        ca1,
        ca2
    ]), _0x43a964[_0x4d512d(303)](makeReq, _0x43a964['KIcKV'], _0x4c9676, _0x43a964[_0x4d512d(283)], _0x43a964[_0x4d512d(289)], ca1);
}
process['on'](_0x52018a(307), () => {
    const _0x47d54f = _0x52018a;
    assert['strictEqual'](server1[_0x47d54f(246)]['length'], server1['expectCount']), assert[_0x47d54f(308)](server2[_0x47d54f(246)][_0x47d54f(309)], server2[_0x47d54f(247)]), assert[_0x47d54f(308)](server3[_0x47d54f(246)][_0x47d54f(309)], server3[_0x47d54f(247)]);
});