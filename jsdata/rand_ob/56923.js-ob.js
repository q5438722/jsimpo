'use strict';
const _0x1f3a = [
    'www.nodejs.org',
    'connect',
    'mustCall',
    'unable\x20to\x20get\x20local\x20issuer\x20certificate',
    'message',
    'dDssp',
    'secureContext',
    'createSecureContext',
    'addCACert',
    'end',
    '148225Gqlimn',
    '1mlDSji',
    '509452lYJvoK',
    '368312qihrcy',
    '151ZhKiBu',
    '1018prmkTE',
    '14849LtiLdT',
    '21wfILlg',
    '1GWwmgu',
    '405241nLXFpD',
    '492969YadKLv',
    '1mnvryf',
    'skip',
    'missing\x20crypto',
    '../common/fixtures',
    'keys',
    'path',
    '.pem',
    'readFileSync',
    'srocj',
    'ca1-cert'
];
const _0x4d611b = _0x5473;
(function (_0x566b9e, _0x2454ad) {
    const _0x56730d = _0x5473;
    while (!![]) {
        try {
            const _0x4e79dd = parseInt(_0x56730d(0x1f3)) * parseInt(_0x56730d(0x1f4)) + parseInt(_0x56730d(0x1f5)) + parseInt(_0x56730d(0x1f6)) + -parseInt(_0x56730d(0x1f7)) * parseInt(_0x56730d(0x1f8)) + parseInt(_0x56730d(0x1f9)) * parseInt(_0x56730d(0x1fa)) + parseInt(_0x56730d(0x1fb)) * -parseInt(_0x56730d(0x1fc)) + -parseInt(_0x56730d(0x1fd)) * parseInt(_0x56730d(0x1fe));
            if (_0x4e79dd === _0x2454ad)
                break;
            else
                _0x566b9e['push'](_0x566b9e['shift']());
        } catch (_0x2cef7f) {
            _0x566b9e['push'](_0x566b9e['shift']());
        }
    }
}(_0x1f3a, 0x3 * 0x2aed + 0x2 * 0x238e1 + -0x95c7));
const common = require('../common');
if (!common['hasCrypto'])
    common[_0x4d611b(0x1ff)](_0x4d611b(0x200));
const assert = require('assert'), fs = require('fs'), fixtures = require(_0x4d611b(0x201)), tls = require('tls');
function _0x5473(_0xa87043, _0x3eede9) {
    return _0x5473 = function (_0x361174, _0x4d85fc) {
        _0x361174 = _0x361174 - (-0x1b38 + -0x123b * -0x1 + 0xaf0);
        let _0x426076 = _0x1f3a[_0x361174];
        return _0x426076;
    }, _0x5473(_0xa87043, _0x3eede9);
}
function filenamePEM(_0x579626) {
    const _0x15e779 = _0x4d611b, _0x5885bc = { 'NZjUR': _0x15e779(0x202) };
    return fixtures[_0x15e779(0x203)](_0x5885bc['NZjUR'], _0x579626 + _0x15e779(0x204));
}
function loadPEM(_0x17de23) {
    const _0x260757 = _0x4d611b, _0x39eb58 = {
            'srocj': function (_0x5d9cc7, _0xdb1ec7) {
                return _0x5d9cc7(_0xdb1ec7);
            }
        };
    return fs[_0x260757(0x205)](_0x39eb58[_0x260757(0x206)](filenamePEM, _0x17de23));
}
const caCert = loadPEM(_0x4d611b(0x207)), opts = {
        'host': _0x4d611b(0x208),
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
tls[_0x4d611b(0x209)](opts, common[_0x4d611b(0x20a)](end)), opts['ca'] = caCert, tls[_0x4d611b(0x209)](opts, fail)['on']('error', common[_0x4d611b(0x20a)](_0x21815c => {
    const _0x33b65e = _0x4d611b, _0x81a69d = { 'dsqgF': _0x33b65e(0x20b) };
    assert['strictEqual'](_0x21815c[_0x33b65e(0x20c)], _0x81a69d['dsqgF']);
}));
function fail() {
    const _0x3dad30 = _0x4d611b, _0x77b372 = { 'dDssp': 'should\x20fail\x20to\x20connect' };
    assert['fail'](_0x77b372[_0x3dad30(0x20d)]);
}
opts[_0x4d611b(0x20e)] = tls[_0x4d611b(0x20f)](), tls[_0x4d611b(0x209)](opts, common[_0x4d611b(0x20a)](end)), opts[_0x4d611b(0x20e)]['context'][_0x4d611b(0x210)](caCert), tls['connect'](opts, common[_0x4d611b(0x20a)](end));
function end() {
    const _0x19a7d7 = _0x4d611b;
    this[_0x19a7d7(0x211)]();
}
