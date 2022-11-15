'use strict';
const _0x1f67 = [
    'www.nodejs.org',
    'mustCall',
    'connect',
    'error',
    'unable\x20to\x20get\x20local\x20issuer\x20certificate',
    'CTMtF',
    'should\x20fail\x20to\x20connect',
    'kLbzk',
    'secureContext',
    'context',
    'addCACert',
    'end',
    '458895oNFjKl',
    '1SipRmA',
    '472144nThiil',
    '224945ajkmmK',
    '1ZDsaRn',
    '8055nrLehA',
    '36WKwxuA',
    '264228yMLsRG',
    '516317ZuvcPH',
    '1okgpNC',
    '2037017yDgBDe',
    '1rXluil',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'assert',
    '../common/fixtures',
    'tls',
    'keys',
    'path',
    'oxCYr',
    '.pem',
    'readFileSync',
    'TwddT',
    'ca1-cert'
];
const _0x81911c = _0x10b2;
(function (_0x586f5d, _0x3b6c49) {
    const _0x4a8062 = _0x10b2;
    while (!![]) {
        try {
            const _0x1fce74 = parseInt(_0x4a8062(0x1e0)) * -parseInt(_0x4a8062(0x1e1)) + -parseInt(_0x4a8062(0x1e2)) + parseInt(_0x4a8062(0x1e3)) * parseInt(_0x4a8062(0x1e4)) + parseInt(_0x4a8062(0x1e5)) * -parseInt(_0x4a8062(0x1e6)) + -parseInt(_0x4a8062(0x1e7)) + -parseInt(_0x4a8062(0x1e8)) * parseInt(_0x4a8062(0x1e9)) + -parseInt(_0x4a8062(0x1ea)) * -parseInt(_0x4a8062(0x1eb));
            if (_0x1fce74 === _0x3b6c49)
                break;
            else
                _0x586f5d['push'](_0x586f5d['shift']());
        } catch (_0x2731b6) {
            _0x586f5d['push'](_0x586f5d['shift']());
        }
    }
}(_0x1f67, 0x65c0f * 0x1 + 0x11 * -0x4453 + 0x226a2));
const common = require(_0x81911c(0x1ec));
if (!common[_0x81911c(0x1ed)])
    common[_0x81911c(0x1ee)](_0x81911c(0x1ef));
const assert = require(_0x81911c(0x1f0)), fs = require('fs'), fixtures = require(_0x81911c(0x1f1)), tls = require(_0x81911c(0x1f2));
function filenamePEM(_0xf95b38) {
    const _0x33607a = _0x81911c, _0x2a7c70 = { 'oxCYr': _0x33607a(0x1f3) };
    return fixtures[_0x33607a(0x1f4)](_0x2a7c70[_0x33607a(0x1f5)], _0xf95b38 + _0x33607a(0x1f6));
}
function loadPEM(_0x47bee4) {
    const _0x190d3b = _0x81911c, _0x156d4e = {
            'TwddT': function (_0x2c145d, _0x50969d) {
                return _0x2c145d(_0x50969d);
            }
        };
    return fs[_0x190d3b(0x1f7)](_0x156d4e[_0x190d3b(0x1f8)](filenamePEM, _0x47bee4));
}
const caCert = loadPEM(_0x81911c(0x1f9)), opts = {
        'host': _0x81911c(0x1fa),
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
function _0x10b2(_0x5a2275, _0xc2ffa4) {
    return _0x10b2 = function (_0x3f0ab5, _0x3576f1) {
        _0x3f0ab5 = _0x3f0ab5 - (-0xf33 + -0xd50 + 0x1e63);
        let _0x1b3029 = _0x1f67[_0x3f0ab5];
        return _0x1b3029;
    }, _0x10b2(_0x5a2275, _0xc2ffa4);
}
tls['connect'](opts, common[_0x81911c(0x1fb)](end)), opts['ca'] = caCert, tls[_0x81911c(0x1fc)](opts, fail)['on'](_0x81911c(0x1fd), common[_0x81911c(0x1fb)](_0x2c3aa1 => {
    const _0x172e1d = _0x81911c, _0x4850e9 = { 'CTMtF': _0x172e1d(0x1fe) };
    assert['strictEqual'](_0x2c3aa1['message'], _0x4850e9[_0x172e1d(0x1ff)]);
}));
function fail() {
    const _0x35ea02 = _0x81911c, _0x75d0f = { 'kLbzk': _0x35ea02(0x200) };
    assert['fail'](_0x75d0f[_0x35ea02(0x201)]);
}
opts[_0x81911c(0x202)] = tls['createSecureContext'](), tls[_0x81911c(0x1fc)](opts, common[_0x81911c(0x1fb)](end)), opts[_0x81911c(0x202)][_0x81911c(0x203)][_0x81911c(0x204)](caCert), tls[_0x81911c(0x1fc)](opts, common[_0x81911c(0x1fb)](end));
function end() {
    const _0x16d5d1 = _0x81911c;
    this[_0x16d5d1(0x205)]();
}
