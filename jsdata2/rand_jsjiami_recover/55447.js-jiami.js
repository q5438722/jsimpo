'use strict';
const common = require('../common');
const fixtures = require('../common/fixtures');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
common['expectWarning']('Warning', 'Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to \'0\' ' + 'makes TLS connections and HTTPS requests insecure by disabling ' + 'certificate verification.');
const assert = require('assert');
const https = require('https');
function read(_0x26a44c) {
    return fixtures['readKey'](_0x26a44c);
}
const key1 = read('agent1-key.pem');
const cert1 = read('agent1-cert.pem');
const key2 = read('agent2-key.pem');
const cert2 = read('agent2-cert.pem');
const key3 = read('agent3-key.pem');
const cert3 = read('agent3-cert.pem');
const ca1 = read('ca1-cert.pem');
const ca2 = read('ca2-cert.pem');
const agent0 = new https['Agent']();
const agent1 = new https['Agent']({ 'ca': [ca1] });
const agent2 = new https['Agent']({ 'ca': [ca2] });
const agent3 = new https['Agent']({
    'ca': [
        ca1,
        ca2
    ]
});
const options1 = {
    'key': key1,
    'cert': cert1
};
const options2 = {
    'key': key2,
    'cert': cert2
};
const options3 = {
    'key': key3,
    'cert': cert3
};
const server1 = server(options1);
const server2 = server(options2);
const server3 = server(options3);
let listenWait = 0;
server1['listen'](0, listening());
server2['listen'](0, listening());
server3['listen'](0, listening());
const responseErrors = {};
let pending = 0;
function server(_0x539789) {
    const _0xb74b6f = https['createServer'](_0x539789, handler);
    _0xb74b6f['requests'] = [];
    _0xb74b6f['expectCount'] = 0;
    return _0xb74b6f;
}
function handler(_0x3d671f, _0x29d681) {
    this['requests']['push'](_0x3d671f['url']);
    _0x29d681['statusCode'] = 200;
    _0x29d681['setHeader']('foo', 'bar');
    _0x29d681['end']('hello, world\n');
}
function listening() {
    listenWait++;
    return () => {
        listenWait--;
        if (listenWait === 0) {
            allListening();
        }
    };
}
function makeReq(_0x407271, _0x5a3c0a, _0x4e8f12, _0x55c88b, _0x40c7b8) {
    pending++;
    const _0x352f56 = {
        'port': _0x5a3c0a,
        'path': _0x407271,
        'ca': _0x40c7b8
    };
    if (!_0x40c7b8) {
        _0x352f56['agent'] = agent0;
    } else {
        if ('VzWkt' === 'VzWkt') {
            if (!Array['isArray'](_0x40c7b8))
                _0x40c7b8 = [_0x40c7b8];
            if (_0x40c7b8['includes'](ca1) && _0x40c7b8['includes'](ca2)) {
                _0x352f56['agent'] = agent3;
            } else if (_0x40c7b8['includes'](ca1)) {
                _0x352f56['agent'] = agent1;
            } else if (_0x40c7b8['includes'](ca2)) {
                _0x352f56['agent'] = agent2;
            } else {
                if ('CXNQF' !== 'CXNQF') {
                    _0x352f56['agent'] = agent0;
                } else {
                    _0x352f56['agent'] = agent0;
                }
            }
        } else {
            _0x352f56['headers'] = { 'host': _0x55c88b };
        }
    }
    if (_0x55c88b) {
        if ('FRWlG' === 'fXFdA') {
            const _0x100edc = server1['address']()['port'];
            const _0x52d0cb = server2['address']()['port'];
            const _0x4d6878 = server3['address']()['port'];
            makeReq('/inv1', _0x100edc, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE');
            makeReq('/inv1-ca1', _0x100edc, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca1);
            makeReq('/inv1-ca1ca2', _0x100edc, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
                ca1,
                ca2
            ]);
            makeReq('/val1-ca1', _0x100edc, null, 'agent1', ca1);
            makeReq('/val1-ca1ca2', _0x100edc, null, 'agent1', [
                ca1,
                ca2
            ]);
            makeReq('/inv1-ca2', _0x100edc, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca2);
            makeReq('/inv2', _0x52d0cb, 'DEPTH_ZERO_SELF_SIGNED_CERT');
            makeReq('/inv2-ca1', _0x52d0cb, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', ca1);
            makeReq('/inv2-ca1ca2', _0x52d0cb, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', [
                ca1,
                ca2
            ]);
            makeReq('/inv3', _0x4d6878, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE');
            makeReq('/inv3-ca2', _0x4d6878, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca2);
            makeReq('/inv3-ca1ca2', _0x4d6878, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
                ca1,
                ca2
            ]);
            makeReq('/val3-ca2', _0x4d6878, null, 'agent3', ca2);
            makeReq('/val3-ca1ca2', _0x4d6878, null, 'agent3', [
                ca1,
                ca2
            ]);
            makeReq('/inv3-ca1', _0x4d6878, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca1);
        } else {
            _0x352f56['headers'] = { 'host': _0x55c88b };
        }
    }
    const _0x226237 = https['get'](_0x352f56);
    const _0x1c58c5 = _0x5a3c0a === server1['address']()['port'] ? server1 : _0x5a3c0a === server2['address']()['port'] ? server2 : _0x5a3c0a === server3['address']()['port'] ? server3 : null;
    if (!_0x1c58c5)
        throw new Error('invalid port: ' + _0x5a3c0a);
    _0x1c58c5['expectCount']++;
    _0x226237['on']('response', common['mustCall'](_0xcecb3a => {
        var _0x2963f2 = {
            'Pgjwj': 'bar',
            'QCTIO': 'hello, world\n'
        };
        if ('bhxDq' !== 'bhxDq') {
            server1['close']();
            server2['close']();
            server3['close']();
        } else {
            assert['strictEqual'](_0xcecb3a['connection']['authorizationError'], _0x4e8f12);
            responseErrors[_0x407271] = _0xcecb3a['connection']['authorizationError'];
            pending--;
            if (pending === 0) {
                if ('dDNiJ' === 'dDNiJ') {
                    server1['close']();
                    server2['close']();
                    server3['close']();
                } else {
                    this['requests']['push'](_0x226237['url']);
                    _0xcecb3a['statusCode'] = 200;
                    _0xcecb3a['setHeader']('foo', _0x2963f2['Pgjwj']);
                    _0xcecb3a['end'](_0x2963f2['QCTIO']);
                }
            }
            _0xcecb3a['resume']();
        }
    }));
}
function allListening() {
    const _0x55eb11 = server1['address']()['port'];
    const _0x57fb70 = server2['address']()['port'];
    const _0x2cc975 = server3['address']()['port'];
    makeReq('/inv1', _0x55eb11, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE');
    makeReq('/inv1-ca1', _0x55eb11, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca1);
    makeReq('/inv1-ca1ca2', _0x55eb11, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]);
    makeReq('/val1-ca1', _0x55eb11, null, 'agent1', ca1);
    makeReq('/val1-ca1ca2', _0x55eb11, null, 'agent1', [
        ca1,
        ca2
    ]);
    makeReq('/inv1-ca2', _0x55eb11, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca2);
    makeReq('/inv2', _0x57fb70, 'DEPTH_ZERO_SELF_SIGNED_CERT');
    makeReq('/inv2-ca1', _0x57fb70, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', ca1);
    makeReq('/inv2-ca1ca2', _0x57fb70, 'DEPTH_ZERO_SELF_SIGNED_CERT', 'agent2', [
        ca1,
        ca2
    ]);
    makeReq('/inv3', _0x2cc975, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE');
    makeReq('/inv3-ca2', _0x2cc975, 'ERR_TLS_CERT_ALTNAME_INVALID', null, ca2);
    makeReq('/inv3-ca1ca2', _0x2cc975, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]);
    makeReq('/val3-ca2', _0x2cc975, null, 'agent3', ca2);
    makeReq('/val3-ca1ca2', _0x2cc975, null, 'agent3', [
        ca1,
        ca2
    ]);
    makeReq('/inv3-ca1', _0x2cc975, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'agent1', ca1);
}
process['on']('exit', () => {
    assert['strictEqual'](server1['requests']['length'], server1['expectCount']);
    assert['strictEqual'](server2['requests']['length'], server2['expectCount']);
    assert['strictEqual'](server3['requests']['length'], server3['expectCount']);
});