const common = require('../common');
if (!common['hasCrypto'])
    common[_0x4d611b(511)](_0x4d611b(512));
const assert = require('assert'), fs = require('fs'), fixtures = require(_0x4d611b(513)), tls = require('tls');
function _0x5473(_0xa87043, _0x3eede9) {
    return _0x5473 = function (_0x361174, _0x4d85fc) {
        _0x361174 = _0x361174 - (-6968 + -4667 * -1 + 2800);
        let _0x426076 = _0x1f3a[_0x361174];
        return _0x426076;
    }, _0x5473(_0xa87043, _0x3eede9);
}
function filenamePEM(_0x579626) {
    const _0x15e779 = _0x4d611b, _0x5885bc = { 'NZjUR': _0x15e779(514) };
    return fixtures[_0x15e779(515)](_0x5885bc['NZjUR'], _0x579626 + _0x15e779(516));
}
function loadPEM(_0x17de23) {
    const _0x260757 = _0x4d611b, _0x39eb58 = {
            'srocj': function (_0x5d9cc7, _0xdb1ec7) {
                return _0x5d9cc7(_0xdb1ec7);
            }
        };
    return fs[_0x260757(517)](_0x39eb58[_0x260757(518)](filenamePEM, _0x17de23));
}
const caCert = loadPEM(_0x4d611b(519)), opts = {
        'host': _0x4d611b(520),
        'port': 443,
        'rejectUnauthorized': !![]
    };
tls[_0x4d611b(521)](opts, common[_0x4d611b(522)](end)), opts['ca'] = caCert, tls[_0x4d611b(521)](opts, fail)['on']('error', common[_0x4d611b(522)](_0x21815c => {
    const _0x33b65e = _0x4d611b, _0x81a69d = { 'dsqgF': _0x33b65e(523) };
    assert['strictEqual'](_0x21815c[_0x33b65e(524)], _0x81a69d['dsqgF']);
}));
function fail() {
    const _0x3dad30 = _0x4d611b, _0x77b372 = { 'dDssp': 'should fail to connect' };
    assert['fail'](_0x77b372[_0x3dad30(525)]);
}
opts[_0x4d611b(526)] = tls[_0x4d611b(527)](), tls[_0x4d611b(521)](opts, common[_0x4d611b(522)](end)), opts[_0x4d611b(526)]['context'][_0x4d611b(528)](caCert), tls['connect'](opts, common[_0x4d611b(522)](end));
function end() {
    const _0x19a7d7 = _0x4d611b;
    this[_0x19a7d7(529)]();
}