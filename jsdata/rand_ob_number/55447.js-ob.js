'use strict';
const common = require('../common'), fixtures = require('../common/fixtures');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common['expectWarning']('Warning', 'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20' + 'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20' + 'certificate\x20verification.');
const assert = require('assert'), https = require('https');
function read(_0x5c8715) {
    return fixtures['readKey'](_0x5c8715);
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
let listenWait = -0x1101 * -0x1 + -0x1b81 + -0xc * -0xe0;
server1['listen'](0x1 * -0x1529 + 0x8a1 * 0x3 + -0x4ba, listening()), server2['listen'](0x57 * -0x40 + 0x2b * 0x2f + 0xddb, listening()), server3['listen'](0xd7c + -0xe4a + 0xce, listening());
const responseErrors = {};
let pending = -0xf9 * 0x21 + 0x2 * -0x2e9 + 0x25eb;
function server(_0x26c1c4) {
    const _0x3d21d5 = https['createServer'](_0x26c1c4, handler);
    return _0x3d21d5['requests'] = [], _0x3d21d5['expectCount'] = -0x1 * -0xe3 + -0x10c1 * 0x2 + 0x209f, _0x3d21d5;
}
function handler(_0x135dd3, _0x437593) {
    this['requests']['push'](_0x135dd3['url']), _0x437593['statusCode'] = -0x2b * -0x31 + 0x1499 * 0x1 + -0x1c0c, _0x437593['setHeader']('foo', 'bar'), _0x437593['end']('hello,\x20world\x0a');
}
function listening() {
    return listenWait++, () => {
        listenWait--, listenWait === 0xaf * -0x5 + 0x901 + -0x596 && allListening();
    };
}
function makeReq(_0x30112d, _0x158d0e, _0x4a8611, _0x48e509, _0x21fa8f) {
    pending++;
    const _0x3650e4 = {
        'port': _0x158d0e,
        'path': _0x30112d,
        'ca': _0x21fa8f
    };
    if (!_0x21fa8f)
        _0x3650e4['agent'] = agent0;
    else {
        if (!Array['isArray'](_0x21fa8f))
            _0x21fa8f = [_0x21fa8f];
        if (_0x21fa8f['includes'](ca1) && _0x21fa8f['includes'](ca2))
            _0x3650e4['agent'] = agent3;
        else {
            if (_0x21fa8f['includes'](ca1))
                _0x3650e4['agent'] = agent1;
            else
                _0x21fa8f['includes'](ca2) ? _0x3650e4['agent'] = agent2 : _0x3650e4['agent'] = agent0;
        }
    }
    _0x48e509 && (_0x3650e4['headers'] = { 'host': _0x48e509 });
    const _0x4791a9 = https['get'](_0x3650e4), _0x4b7994 = _0x158d0e === server1['address']()['port'] ? server1 : _0x158d0e === server2['address']()['port'] ? server2 : _0x158d0e === server3['address']()['port'] ? server3 : null;
    if (!_0x4b7994)
        throw new Error('invalid\x20port:\x20' + _0x158d0e);
    _0x4b7994['expectCount']++, _0x4791a9['on']('response', common['mustCall'](_0x3be100 => {
        assert['strictEqual'](_0x3be100['connection']['authorizationError'], _0x4a8611), responseErrors[_0x30112d] = _0x3be100['connection']['authorizationError'], pending--, pending === 0x2173 * -0x1 + 0x15f5 + 0xb7e && (server1['close'](), server2['close'](), server3['close']()), _0x3be100['resume']();
    }));
}
function allListening() {
    const _0x8f62a3 = server1['address']()['port'], _0x42ad47 = server2['address']()['port'], _0x2644b6 = server3['address']()['port'];
    makeReq('/inv1', _0x8f62a3, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq('/inv1-ca1', _0x8f62a3, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca1), makeReq('/inv1-ca1ca2', _0x8f62a3, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]), makeReq('/val1-ca1', _0x8f62a3, null, 'agent1', ca1), makeReq('/val1-ca1ca2', _0x8f62a3, null, 'agent1', [
        ca1,
        ca2
    ]), makeReq('/inv1-ca2', _0x8f62a3, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca2), makeReq('/inv2', _0x42ad47, 'DEPTH_ZERO_SELF_SIGNED_CERT'), makeReq('/inv2-ca1', _0x42ad47, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', ca1), makeReq('/inv2-ca1ca2', _0x42ad47, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', [
        ca1,
        ca2
    ]), makeReq('/inv3', _0x2644b6, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq('/inv3-ca2', _0x2644b6, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca2), makeReq('/inv3-ca1ca2', _0x2644b6, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]), makeReq('/val3-ca2', _0x2644b6, null, 'agent3', ca2), makeReq('/val3-ca1ca2', _0x2644b6, null, 'agent3', [
        ca1,
        ca2
    ]), makeReq('/inv3-ca1', _0x2644b6, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca1);
}
process['on']('exit', () => {
    assert['strictEqual'](server1['requests']['length'], server1['expectCount']), assert['strictEqual'](server2['requests']['length'], server2['expectCount']), assert['strictEqual'](server3['requests']['length'], server3['expectCount']);
});
