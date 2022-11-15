'use strict';
const _0xd29b = [
    'agent3-cert.pem',
    'ca1-cert.pem',
    'ca2-cert.pem',
    'Agent',
    'listen',
    'requests',
    'expectCount',
    'push',
    'url',
    'statusCode',
    'setHeader',
    'agent',
    'isArray',
    'includes',
    'headers',
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
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    '/inv1-ca1',
    'ERR_TLS_CERT_ALTNAME_INVALID',
    '/inv1-ca1ca2',
    'agent1',
    '/inv1-ca2',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    '/inv2-ca1',
    'agent2',
    '/inv2-ca1ca2',
    '/inv3',
    '/val3-ca2',
    'agent3',
    '/inv3-ca1',
    'exit',
    'length',
    '215703fzOHsW',
    '1511WPWKVY',
    '757IKeCub',
    '325071FnBRqT',
    '3QzBskq',
    '674517LRBJkR',
    '298858DvlTxU',
    '5SjfEUy',
    '836589kyktKD',
    '23moeeCy',
    '52911JDKPHB',
    '../common/fixtures',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'expectWarning',
    'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20',
    'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20',
    'certificate\x20verification.',
    'https',
    'readKey',
    'agent1-key.pem',
    'agent2-key.pem',
    'agent2-cert.pem',
    'agent3-key.pem'
];
const _0x57953a = _0x213e;
(function (_0x108ff5, _0x165b84) {
    const _0x14e68c = _0x213e;
    while (!![]) {
        try {
            const _0x2ff93b = -parseInt(_0x14e68c(0x1d0)) + -parseInt(_0x14e68c(0x1d1)) * parseInt(_0x14e68c(0x1d2)) + -parseInt(_0x14e68c(0x1d3)) * -parseInt(_0x14e68c(0x1d4)) + -parseInt(_0x14e68c(0x1d5)) + parseInt(_0x14e68c(0x1d6)) * parseInt(_0x14e68c(0x1d7)) + -parseInt(_0x14e68c(0x1d8)) + -parseInt(_0x14e68c(0x1d9)) * -parseInt(_0x14e68c(0x1da));
            if (_0x2ff93b === _0x165b84)
                break;
            else
                _0x108ff5['push'](_0x108ff5['shift']());
        } catch (_0x201fd3) {
            _0x108ff5['push'](_0x108ff5['shift']());
        }
    }
}(_0xd29b, 0xc72cc));
const common = require('../common'), fixtures = require(_0x57953a(0x1db));
if (!common[_0x57953a(0x1dc)])
    common[_0x57953a(0x1dd)](_0x57953a(0x1de));
process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common[_0x57953a(0x1df)]('Warning', _0x57953a(0x1e0) + _0x57953a(0x1e1) + _0x57953a(0x1e2));
const assert = require('assert'), https = require(_0x57953a(0x1e3));
function read(_0x131213) {
    const _0xc037b4 = _0x57953a;
    return fixtures[_0xc037b4(0x1e4)](_0x131213);
}
const key1 = read(_0x57953a(0x1e5)), cert1 = read('agent1-cert.pem'), key2 = read(_0x57953a(0x1e6)), cert2 = read(_0x57953a(0x1e7)), key3 = read(_0x57953a(0x1e8)), cert3 = read(_0x57953a(0x1e9)), ca1 = read(_0x57953a(0x1ea)), ca2 = read(_0x57953a(0x1eb)), agent0 = new https[(_0x57953a(0x1ec))](), agent1 = new https[(_0x57953a(0x1ec))]({ 'ca': [ca1] }), agent2 = new https[(_0x57953a(0x1ec))]({ 'ca': [ca2] }), agent3 = new https[(_0x57953a(0x1ec))]({
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
server1['listen'](0x0, listening()), server2[_0x57953a(0x1ed)](0x0, listening()), server3['listen'](0x0, listening());
const responseErrors = {};
let pending = 0x0;
function server(_0xa1c9fc) {
    const _0x302698 = _0x57953a, _0xf7b1a3 = https['createServer'](_0xa1c9fc, handler);
    return _0xf7b1a3[_0x302698(0x1ee)] = [], _0xf7b1a3[_0x302698(0x1ef)] = 0x0, _0xf7b1a3;
}
function _0x213e(_0x17be56, _0x36c2f1) {
    return _0x213e = function (_0xd29b34, _0x213eba) {
        _0xd29b34 = _0xd29b34 - 0x1d0;
        let _0x2eb71d = _0xd29b[_0xd29b34];
        return _0x2eb71d;
    }, _0x213e(_0x17be56, _0x36c2f1);
}
function handler(_0x30723f, _0x28e403) {
    const _0x394d97 = _0x57953a;
    this[_0x394d97(0x1ee)][_0x394d97(0x1f0)](_0x30723f[_0x394d97(0x1f1)]), _0x28e403[_0x394d97(0x1f2)] = 0xc8, _0x28e403[_0x394d97(0x1f3)]('foo', 'bar'), _0x28e403['end']('hello,\x20world\x0a');
}
function listening() {
    return listenWait++, () => {
        listenWait--, listenWait === 0x0 && allListening();
    };
}
function makeReq(_0xe46289, _0x18e68a, _0x42b3a8, _0x595704, _0x56234b) {
    const _0x595645 = _0x57953a;
    pending++;
    const _0xf472bb = {
        'port': _0x18e68a,
        'path': _0xe46289,
        'ca': _0x56234b
    };
    if (!_0x56234b)
        _0xf472bb[_0x595645(0x1f4)] = agent0;
    else {
        if (!Array[_0x595645(0x1f5)](_0x56234b))
            _0x56234b = [_0x56234b];
        if (_0x56234b[_0x595645(0x1f6)](ca1) && _0x56234b[_0x595645(0x1f6)](ca2))
            _0xf472bb[_0x595645(0x1f4)] = agent3;
        else {
            if (_0x56234b[_0x595645(0x1f6)](ca1))
                _0xf472bb['agent'] = agent1;
            else
                _0x56234b[_0x595645(0x1f6)](ca2) ? _0xf472bb[_0x595645(0x1f4)] = agent2 : _0xf472bb[_0x595645(0x1f4)] = agent0;
        }
    }
    _0x595704 && (_0xf472bb[_0x595645(0x1f7)] = { 'host': _0x595704 });
    const _0x203721 = https[_0x595645(0x1f8)](_0xf472bb), _0x4d80dc = _0x18e68a === server1[_0x595645(0x1f9)]()[_0x595645(0x1fa)] ? server1 : _0x18e68a === server2['address']()[_0x595645(0x1fa)] ? server2 : _0x18e68a === server3[_0x595645(0x1f9)]()[_0x595645(0x1fa)] ? server3 : null;
    if (!_0x4d80dc)
        throw new Error(_0x595645(0x1fb) + _0x18e68a);
    _0x4d80dc[_0x595645(0x1ef)]++, _0x203721['on'](_0x595645(0x1fc), common[_0x595645(0x1fd)](_0xa6bbc1 => {
        const _0x4da1ad = _0x595645;
        assert[_0x4da1ad(0x1fe)](_0xa6bbc1['connection']['authorizationError'], _0x42b3a8), responseErrors[_0xe46289] = _0xa6bbc1[_0x4da1ad(0x1ff)][_0x4da1ad(0x200)], pending--, pending === 0x0 && (server1['close'](), server2[_0x4da1ad(0x201)](), server3[_0x4da1ad(0x201)]()), _0xa6bbc1[_0x4da1ad(0x202)]();
    }));
}
function allListening() {
    const _0xfaeb71 = _0x57953a, _0x359fab = server1[_0xfaeb71(0x1f9)]()[_0xfaeb71(0x1fa)], _0x2ca2a8 = server2[_0xfaeb71(0x1f9)]()['port'], _0x5024e9 = server3['address']()[_0xfaeb71(0x1fa)];
    makeReq(_0xfaeb71(0x203), _0x359fab, _0xfaeb71(0x204)), makeReq(_0xfaeb71(0x205), _0x359fab, _0xfaeb71(0x206), null, ca1), makeReq(_0xfaeb71(0x207), _0x359fab, _0xfaeb71(0x206), null, [
        ca1,
        ca2
    ]), makeReq('/val1-ca1', _0x359fab, null, _0xfaeb71(0x208), ca1), makeReq('/val1-ca1ca2', _0x359fab, null, _0xfaeb71(0x208), [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(0x209), _0x359fab, _0xfaeb71(0x204), 'agent1', ca2), makeReq('/inv2', _0x2ca2a8, _0xfaeb71(0x20a)), makeReq(_0xfaeb71(0x20b), _0x2ca2a8, _0xfaeb71(0x20a), _0xfaeb71(0x20c), ca1), makeReq(_0xfaeb71(0x20d), _0x2ca2a8, 'DEPTH_ZERO_SELF_SIGNED_CERT', _0xfaeb71(0x20c), [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(0x20e), _0x5024e9, _0xfaeb71(0x204)), makeReq('/inv3-ca2', _0x5024e9, _0xfaeb71(0x206), null, ca2), makeReq('/inv3-ca1ca2', _0x5024e9, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(0x20f), _0x5024e9, null, _0xfaeb71(0x210), ca2), makeReq('/val3-ca1ca2', _0x5024e9, null, 'agent3', [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(0x211), _0x5024e9, _0xfaeb71(0x204), _0xfaeb71(0x208), ca1);
}
process['on'](_0x57953a(0x212), () => {
    const _0x1f6af3 = _0x57953a;
    assert[_0x1f6af3(0x1fe)](server1[_0x1f6af3(0x1ee)]['length'], server1[_0x1f6af3(0x1ef)]), assert[_0x1f6af3(0x1fe)](server2[_0x1f6af3(0x1ee)]['length'], server2[_0x1f6af3(0x1ef)]), assert[_0x1f6af3(0x1fe)](server3[_0x1f6af3(0x1ee)][_0x1f6af3(0x213)], server3[_0x1f6af3(0x1ef)]);
});
