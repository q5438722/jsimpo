'use strict';
const _0x6842 = [
    'NODE_TLS_REJECT_UNAUTHORIZED',
    'expectWarning',
    'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20',
    'certificate\x20verification.',
    'assert',
    'https',
    'agent2-key.pem',
    'agent2-cert.pem',
    'agent3-key.pem',
    'ca1-cert.pem',
    'ca2-cert.pem',
    'Agent',
    'listen',
    'createServer',
    'expectCount',
    'requests',
    'push',
    'url',
    'statusCode',
    'setHeader',
    'foo',
    'bar',
    'end',
    'hello,\x20world\x0a',
    'isArray',
    'includes',
    'agent',
    'get',
    'address',
    'port',
    'invalid\x20port:\x20',
    'response',
    'mustCall',
    'strictEqual',
    'connection',
    'authorizationError',
    'close',
    'resume',
    '/inv1',
    '/inv1-ca1',
    'ERR_TLS_CERT_ALTNAME_INVALID',
    '/inv1-ca1ca2',
    '/val1-ca1',
    'agent1',
    '/val1-ca1ca2',
    '/inv1-ca2',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    '/inv2',
    '/inv2-ca1',
    'agent2',
    '/inv2-ca1ca2',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    '/inv3',
    '/inv3-ca1ca2',
    '/val3-ca2',
    'agent3',
    '/inv3-ca1',
    'length',
    '3AZWokI',
    '132152mXLEqp',
    '2470VdyPDd',
    '295bWAzpt',
    '3lzrUjW',
    '644179fyFkqS',
    '19070DUVvqH',
    '501230lxdLTN',
    '87407rLcKKX',
    '1693045YnZVvg',
    '../common',
    '../common/fixtures',
    'hasCrypto',
    'skip'
];
function _0x6ccf(_0x4dae1e, _0xff4cc4) {
    return _0x6ccf = function (_0x684211, _0x6ccf64) {
        _0x684211 = _0x684211 - 0xec;
        let _0x49c0bf = _0x6842[_0x684211];
        return _0x49c0bf;
    }, _0x6ccf(_0x4dae1e, _0xff4cc4);
}
const _0x51544a = _0x6ccf;
(function (_0x216b81, _0x4b3ab9) {
    const _0x31c3a1 = _0x6ccf;
    while (!![]) {
        try {
            const _0x1296ee = -parseInt(_0x31c3a1(0xec)) * parseInt(_0x31c3a1(0xed)) + -parseInt(_0x31c3a1(0xee)) * -parseInt(_0x31c3a1(0xef)) + -parseInt(_0x31c3a1(0xf0)) * -parseInt(_0x31c3a1(0xf1)) + -parseInt(_0x31c3a1(0xf2)) + parseInt(_0x31c3a1(0xf3)) + -parseInt(_0x31c3a1(0xf4)) + -parseInt(_0x31c3a1(0xf5));
            if (_0x1296ee === _0x4b3ab9)
                break;
            else
                _0x216b81['push'](_0x216b81['shift']());
        } catch (_0xbbabbb) {
            _0x216b81['push'](_0x216b81['shift']());
        }
    }
}(_0x6842, 0xebf27));
const common = require(_0x51544a(0xf6)), fixtures = require(_0x51544a(0xf7));
if (!common[_0x51544a(0xf8)])
    common[_0x51544a(0xf9)]('missing\x20crypto');
process['env'][_0x51544a(0xfa)] = '0', common[_0x51544a(0xfb)]('Warning', 'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20' + _0x51544a(0xfc) + _0x51544a(0xfd));
const assert = require(_0x51544a(0xfe)), https = require(_0x51544a(0xff));
function read(_0x4688d0) {
    return fixtures['readKey'](_0x4688d0);
}
const key1 = read('agent1-key.pem'), cert1 = read('agent1-cert.pem'), key2 = read(_0x51544a(0x100)), cert2 = read(_0x51544a(0x101)), key3 = read(_0x51544a(0x102)), cert3 = read('agent3-cert.pem'), ca1 = read(_0x51544a(0x103)), ca2 = read(_0x51544a(0x104)), agent0 = new https[(_0x51544a(0x105))](), agent1 = new https[(_0x51544a(0x105))]({ 'ca': [ca1] }), agent2 = new https[(_0x51544a(0x105))]({ 'ca': [ca2] }), agent3 = new https[(_0x51544a(0x105))]({
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
server1[_0x51544a(0x106)](0x0, listening()), server2[_0x51544a(0x106)](0x0, listening()), server3['listen'](0x0, listening());
const responseErrors = {};
let pending = 0x0;
function server(_0x46b904) {
    const _0x352ca2 = _0x51544a, _0x117d23 = https[_0x352ca2(0x107)](_0x46b904, handler);
    return _0x117d23['requests'] = [], _0x117d23[_0x352ca2(0x108)] = 0x0, _0x117d23;
}
function handler(_0x5f7b4e, _0x1a51c4) {
    const _0x57617e = _0x51544a;
    this[_0x57617e(0x109)][_0x57617e(0x10a)](_0x5f7b4e[_0x57617e(0x10b)]), _0x1a51c4[_0x57617e(0x10c)] = 0xc8, _0x1a51c4[_0x57617e(0x10d)](_0x57617e(0x10e), _0x57617e(0x10f)), _0x1a51c4[_0x57617e(0x110)](_0x57617e(0x111));
}
function listening() {
    return listenWait++, () => {
        listenWait--, listenWait === 0x0 && allListening();
    };
}
function makeReq(_0x2def3d, _0x1dbda2, _0x3e0b2e, _0x4c3874, _0x7f8bd) {
    const _0x48e962 = _0x51544a;
    pending++;
    const _0x5a41f4 = {
        'port': _0x1dbda2,
        'path': _0x2def3d,
        'ca': _0x7f8bd
    };
    if (!_0x7f8bd)
        _0x5a41f4['agent'] = agent0;
    else {
        if (!Array[_0x48e962(0x112)](_0x7f8bd))
            _0x7f8bd = [_0x7f8bd];
        if (_0x7f8bd['includes'](ca1) && _0x7f8bd['includes'](ca2))
            _0x5a41f4['agent'] = agent3;
        else {
            if (_0x7f8bd[_0x48e962(0x113)](ca1))
                _0x5a41f4[_0x48e962(0x114)] = agent1;
            else
                _0x7f8bd[_0x48e962(0x113)](ca2) ? _0x5a41f4[_0x48e962(0x114)] = agent2 : _0x5a41f4[_0x48e962(0x114)] = agent0;
        }
    }
    _0x4c3874 && (_0x5a41f4['headers'] = { 'host': _0x4c3874 });
    const _0x3c6e8c = https[_0x48e962(0x115)](_0x5a41f4), _0x1518d4 = _0x1dbda2 === server1['address']()['port'] ? server1 : _0x1dbda2 === server2[_0x48e962(0x116)]()[_0x48e962(0x117)] ? server2 : _0x1dbda2 === server3[_0x48e962(0x116)]()[_0x48e962(0x117)] ? server3 : null;
    if (!_0x1518d4)
        throw new Error(_0x48e962(0x118) + _0x1dbda2);
    _0x1518d4['expectCount']++, _0x3c6e8c['on'](_0x48e962(0x119), common[_0x48e962(0x11a)](_0x4ce869 => {
        const _0x1cf5f0 = _0x48e962;
        assert[_0x1cf5f0(0x11b)](_0x4ce869[_0x1cf5f0(0x11c)][_0x1cf5f0(0x11d)], _0x3e0b2e), responseErrors[_0x2def3d] = _0x4ce869['connection'][_0x1cf5f0(0x11d)], pending--, pending === 0x0 && (server1[_0x1cf5f0(0x11e)](), server2[_0x1cf5f0(0x11e)](), server3[_0x1cf5f0(0x11e)]()), _0x4ce869[_0x1cf5f0(0x11f)]();
    }));
}
function allListening() {
    const _0x4fe47f = _0x51544a, _0xfb02b = server1[_0x4fe47f(0x116)]()[_0x4fe47f(0x117)], _0x4e06fc = server2[_0x4fe47f(0x116)]()[_0x4fe47f(0x117)], _0x3af076 = server3[_0x4fe47f(0x116)]()['port'];
    makeReq(_0x4fe47f(0x120), _0xfb02b, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq(_0x4fe47f(0x121), _0xfb02b, _0x4fe47f(0x122), null, ca1), makeReq(_0x4fe47f(0x123), _0xfb02b, _0x4fe47f(0x122), null, [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(0x124), _0xfb02b, null, _0x4fe47f(0x125), ca1), makeReq(_0x4fe47f(0x126), _0xfb02b, null, _0x4fe47f(0x125), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(0x127), _0xfb02b, _0x4fe47f(0x128), _0x4fe47f(0x125), ca2), makeReq(_0x4fe47f(0x129), _0x4e06fc, 'DEPTH_ZERO_SELF_SIGNED_CERT'), makeReq(_0x4fe47f(0x12a), _0x4e06fc, 'DEPTH_ZERO_SELF_SIGNED_CERT', _0x4fe47f(0x12b), ca1), makeReq(_0x4fe47f(0x12c), _0x4e06fc, _0x4fe47f(0x12d), _0x4fe47f(0x12b), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(0x12e), _0x3af076, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq('/inv3-ca2', _0x3af076, _0x4fe47f(0x122), null, ca2), makeReq(_0x4fe47f(0x12f), _0x3af076, _0x4fe47f(0x122), null, [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(0x130), _0x3af076, null, _0x4fe47f(0x131), ca2), makeReq('/val3-ca1ca2', _0x3af076, null, _0x4fe47f(0x131), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(0x132), _0x3af076, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', _0x4fe47f(0x125), ca1);
}
process['on']('exit', () => {
    const _0x27f2fa = _0x51544a;
    assert['strictEqual'](server1[_0x27f2fa(0x109)]['length'], server1[_0x27f2fa(0x108)]), assert[_0x27f2fa(0x11b)](server2[_0x27f2fa(0x109)]['length'], server2[_0x27f2fa(0x108)]), assert[_0x27f2fa(0x11b)](server3[_0x27f2fa(0x109)][_0x27f2fa(0x133)], server3[_0x27f2fa(0x108)]);
});
