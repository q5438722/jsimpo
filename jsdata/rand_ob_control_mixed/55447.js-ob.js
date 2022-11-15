'use strict';
const common = require('../common'), fixtures = require('../common/fixtures');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common['expectWarning']('Warning', 'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20' + 'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20' + 'certificate\x20verification.');
const assert = require('assert'), https = require('https');
function read(_0x2c4038) {
    return fixtures['readKey'](_0x2c4038);
}
const key1 = read('agent1-key.pem'), cert1 = read('agent1-cert.pem'), key2 = read('agent2-key.pem'), cert2 = read('agent2-cert.pem'), key3 = read('agent3-key.pem'), cert3 = read('agent3-cert.pem'), ca1 = read('ca1-cert.pem'), ca2 = read('ca2-cert.pem'), agent0 = new https['Agent'](), agent1 = new https['Agent']({ 'ca': [ca1] }), agent2 = new https['Agent']({ 'ca': [ca2] }), agent3 = new https['Agent']({
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
let listenWait = 0x0;
server1['listen'](0x0, listening()), server2['listen'](0x0, listening()), server3['listen'](0x0, listening());
const responseErrors = {};
let pending = 0x0;
function server(_0xba039e) {
    const _0x21f207 = https['createServer'](_0xba039e, handler);
    return _0x21f207['requests'] = [], _0x21f207['expectCount'] = 0x0, _0x21f207;
}
function handler(_0x52f761, _0x649600) {
    const _0x5c9b88 = {
        'YYAfw': 'foo',
        'VgYBN': 'bar',
        'VLyya': 'hello,\x20world\x0a'
    };
    this['requests']['push'](_0x52f761['url']), _0x649600['statusCode'] = 0xc8, _0x649600['setHeader'](_0x5c9b88['YYAfw'], _0x5c9b88['VgYBN']), _0x649600['end'](_0x5c9b88['VLyya']);
}
function listening() {
    const _0x30a33a = {
        'vmZwk': function (_0x17eb7a, _0x4baf04) {
            return _0x17eb7a === _0x4baf04;
        },
        'kKnDS': function (_0x465c77) {
            return _0x465c77();
        }
    };
    return listenWait++, () => {
        listenWait--, _0x30a33a['vmZwk'](listenWait, 0x0) && _0x30a33a['kKnDS'](allListening);
    };
}
function makeReq(_0x3dec5e, _0x3ccd69, _0x40f2f1, _0x346d97, _0x1261f2) {
    const _0x14ec2d = {
        'kCMGk': '0|3|1|4|2',
        'VhHuc': function (_0x1cf16c, _0x503bb0) {
            return _0x1cf16c === _0x503bb0;
        },
        'aRhWJ': function (_0xf414f1, _0x5c2897) {
            return _0xf414f1 === _0x5c2897;
        },
        'SbiZw': function (_0x4a8821, _0x2a3f2b) {
            return _0x4a8821 === _0x2a3f2b;
        },
        'FHZAC': function (_0x5e4b8b, _0x53e6c6) {
            return _0x5e4b8b === _0x53e6c6;
        },
        'CBVJU': 'response'
    };
    pending++;
    const _0x115356 = {
        'port': _0x3ccd69,
        'path': _0x3dec5e,
        'ca': _0x1261f2
    };
    if (!_0x1261f2)
        _0x115356['agent'] = agent0;
    else {
        if (!Array['isArray'](_0x1261f2))
            _0x1261f2 = [_0x1261f2];
        if (_0x1261f2['includes'](ca1) && _0x1261f2['includes'](ca2))
            _0x115356['agent'] = agent3;
        else {
            if (_0x1261f2['includes'](ca1))
                _0x115356['agent'] = agent1;
            else
                _0x1261f2['includes'](ca2) ? _0x115356['agent'] = agent2 : _0x115356['agent'] = agent0;
        }
    }
    _0x346d97 && (_0x115356['headers'] = { 'host': _0x346d97 });
    const _0x494942 = https['get'](_0x115356), _0x10c83b = _0x14ec2d['aRhWJ'](_0x3ccd69, server1['address']()['port']) ? server1 : _0x14ec2d['SbiZw'](_0x3ccd69, server2['address']()['port']) ? server2 : _0x14ec2d['FHZAC'](_0x3ccd69, server3['address']()['port']) ? server3 : null;
    if (!_0x10c83b)
        throw new Error('invalid\x20port:\x20' + _0x3ccd69);
    _0x10c83b['expectCount']++, _0x494942['on'](_0x14ec2d['CBVJU'], common['mustCall'](_0x1f4c05 => {
        const _0x29c1fe = _0x14ec2d['kCMGk']['split']('|');
        let _0x487a61 = 0x0;
        while (!![]) {
            switch (_0x29c1fe[_0x487a61++]) {
            case '0':
                assert['strictEqual'](_0x1f4c05['connection']['authorizationError'], _0x40f2f1);
                continue;
            case '1':
                pending--;
                continue;
            case '2':
                _0x1f4c05['resume']();
                continue;
            case '3':
                responseErrors[_0x3dec5e] = _0x1f4c05['connection']['authorizationError'];
                continue;
            case '4':
                _0x14ec2d['VhHuc'](pending, 0x0) && (server1['close'](), server2['close'](), server3['close']());
                continue;
            }
            break;
        }
    }));
}
function allListening() {
    const _0x57ed0e = {
            'Pzhnr': function (_0xc83316, _0x3e8ddb, _0x17be6b, _0x5164fd) {
                return _0xc83316(_0x3e8ddb, _0x17be6b, _0x5164fd);
            },
            'LbABr': '/inv1',
            'SgmQZ': 'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
            'fxuVG': function (_0x1bd5a4, _0x4bfae0, _0x19d0bd, _0x2a1742, _0x287c61, _0x21ed3a) {
                return _0x1bd5a4(_0x4bfae0, _0x19d0bd, _0x2a1742, _0x287c61, _0x21ed3a);
            },
            'AkNDy': '/inv1-ca1',
            'fQAUp': 'ERR_TLS_CERT_ALTNAME_INVALID',
            'ItQhR': '/inv1-ca1ca2',
            'uUjBo': function (_0x5d20bd, _0x18ea0f, _0x3fa0a2, _0x4a371e, _0x5a7d25, _0x555a51) {
                return _0x5d20bd(_0x18ea0f, _0x3fa0a2, _0x4a371e, _0x5a7d25, _0x555a51);
            },
            'RpSII': '/val1-ca1',
            'CkCFT': 'agent1',
            'qUkvl': function (_0x558259, _0x3ad496, _0x4fd868, _0x51ec80, _0x59e362, _0xb27084) {
                return _0x558259(_0x3ad496, _0x4fd868, _0x51ec80, _0x59e362, _0xb27084);
            },
            'VZgzt': '/val1-ca1ca2',
            'eWXCe': '/inv1-ca2',
            'Iauyl': '/inv2',
            'dCZtP': 'DEPTH_ZERO_SELF_SIGNED_CERT',
            'cunGt': function (_0x571d02, _0x3c2980, _0x5a0b83, _0x1c834a, _0xd76843, _0x247784) {
                return _0x571d02(_0x3c2980, _0x5a0b83, _0x1c834a, _0xd76843, _0x247784);
            },
            'ulAKJ': '/inv2-ca1',
            'xROFE': 'agent2',
            'WkyKE': '/inv2-ca1ca2',
            'kwGJR': function (_0x52f9af, _0xdbc01f, _0x8b553c, _0x3c6581) {
                return _0x52f9af(_0xdbc01f, _0x8b553c, _0x3c6581);
            },
            'WLqoj': '/inv3',
            'Nygbu': function (_0x525306, _0x4da7a1, _0x347f75, _0x3bdf75, _0x1f3e76, _0x30d67d) {
                return _0x525306(_0x4da7a1, _0x347f75, _0x3bdf75, _0x1f3e76, _0x30d67d);
            },
            'GQMwZ': '/inv3-ca2',
            'MgBXB': '/inv3-ca1ca2',
            'tNeCt': '/val3-ca2',
            'NWOQO': 'agent3',
            'simRE': function (_0x16dac9, _0x248f9f, _0x55c857, _0x1c9820, _0x4f8947, _0x423ac2) {
                return _0x16dac9(_0x248f9f, _0x55c857, _0x1c9820, _0x4f8947, _0x423ac2);
            },
            'iHrgA': '/val3-ca1ca2',
            'SNEWG': '/inv3-ca1'
        }, _0x35f2f9 = server1['address']()['port'], _0x140348 = server2['address']()['port'], _0x586d2f = server3['address']()['port'];
    _0x57ed0e['Pzhnr'](makeReq, _0x57ed0e['LbABr'], _0x35f2f9, _0x57ed0e['SgmQZ']), _0x57ed0e['fxuVG'](makeReq, _0x57ed0e['AkNDy'], _0x35f2f9, _0x57ed0e['fQAUp'], null, ca1), _0x57ed0e['fxuVG'](makeReq, _0x57ed0e['ItQhR'], _0x35f2f9, _0x57ed0e['fQAUp'], null, [
        ca1,
        ca2
    ]), _0x57ed0e['uUjBo'](makeReq, _0x57ed0e['RpSII'], _0x35f2f9, null, _0x57ed0e['CkCFT'], ca1), _0x57ed0e['qUkvl'](makeReq, _0x57ed0e['VZgzt'], _0x35f2f9, null, _0x57ed0e['CkCFT'], [
        ca1,
        ca2
    ]), _0x57ed0e['qUkvl'](makeReq, _0x57ed0e['eWXCe'], _0x35f2f9, _0x57ed0e['SgmQZ'], _0x57ed0e['CkCFT'], ca2), _0x57ed0e['Pzhnr'](makeReq, _0x57ed0e['Iauyl'], _0x140348, _0x57ed0e['dCZtP']), _0x57ed0e['cunGt'](makeReq, _0x57ed0e['ulAKJ'], _0x140348, _0x57ed0e['dCZtP'], _0x57ed0e['xROFE'], ca1), _0x57ed0e['cunGt'](makeReq, _0x57ed0e['WkyKE'], _0x140348, _0x57ed0e['dCZtP'], _0x57ed0e['xROFE'], [
        ca1,
        ca2
    ]), _0x57ed0e['kwGJR'](makeReq, _0x57ed0e['WLqoj'], _0x586d2f, _0x57ed0e['SgmQZ']), _0x57ed0e['Nygbu'](makeReq, _0x57ed0e['GQMwZ'], _0x586d2f, _0x57ed0e['fQAUp'], null, ca2), _0x57ed0e['Nygbu'](makeReq, _0x57ed0e['MgBXB'], _0x586d2f, _0x57ed0e['fQAUp'], null, [
        ca1,
        ca2
    ]), _0x57ed0e['Nygbu'](makeReq, _0x57ed0e['tNeCt'], _0x586d2f, null, _0x57ed0e['NWOQO'], ca2), _0x57ed0e['simRE'](makeReq, _0x57ed0e['iHrgA'], _0x586d2f, null, _0x57ed0e['NWOQO'], [
        ca1,
        ca2
    ]), _0x57ed0e['simRE'](makeReq, _0x57ed0e['SNEWG'], _0x586d2f, _0x57ed0e['SgmQZ'], _0x57ed0e['CkCFT'], ca1);
}
process['on']('exit', () => {
    assert['strictEqual'](server1['requests']['length'], server1['expectCount']), assert['strictEqual'](server2['requests']['length'], server2['expectCount']), assert['strictEqual'](server3['requests']['length'], server3['expectCount']);
});
