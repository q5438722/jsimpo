'use strict';
const _0x5647 = [
    'context',
    'addCACert',
    '103047hiZSsz',
    '445611FAovix',
    '991811QfHfQF',
    '71735UZqGzG',
    '1kdtbuh',
    '3QixAOe',
    '281998QmtWWa',
    '177963pSgNJq',
    '7WFjfjK',
    '1813231OdZkUS',
    '1gLDFgV',
    '../common',
    'hasCrypto',
    'missing\x20crypto',
    'assert',
    'path',
    'keys',
    '.pem',
    'readFileSync',
    'ca1-cert',
    'www.nodejs.org',
    'mustCall',
    'message',
    'unable\x20to\x20get\x20local\x20issuer\x20certificate',
    'fail',
    'secureContext',
    'createSecureContext',
    'connect'
];
const _0x476f85 = _0x6c84;
(function (_0x95a8e7, _0x4d027f) {
    const _0x14333e = _0x6c84;
    while (!![]) {
        try {
            const _0x49e46d = -parseInt(_0x14333e(0xb4)) + parseInt(_0x14333e(0xb5)) + -parseInt(_0x14333e(0xb6)) + parseInt(_0x14333e(0xb7)) * -parseInt(_0x14333e(0xb8)) + -parseInt(_0x14333e(0xb9)) * -parseInt(_0x14333e(0xba)) + -parseInt(_0x14333e(0xbb)) * parseInt(_0x14333e(0xbc)) + -parseInt(_0x14333e(0xbd)) * -parseInt(_0x14333e(0xbe));
            if (_0x49e46d === _0x4d027f)
                break;
            else
                _0x95a8e7['push'](_0x95a8e7['shift']());
        } catch (_0x5cec0c) {
            _0x95a8e7['push'](_0x95a8e7['shift']());
        }
    }
}(_0x5647, 0xa9116));
const common = require(_0x476f85(0xbf));
if (!common[_0x476f85(0xc0)])
    common['skip'](_0x476f85(0xc1));
const assert = require(_0x476f85(0xc2)), fs = require('fs'), fixtures = require('../common/fixtures'), tls = require('tls');
function filenamePEM(_0x2f10dd) {
    const _0x115826 = _0x476f85;
    return fixtures[_0x115826(0xc3)](_0x115826(0xc4), _0x2f10dd + _0x115826(0xc5));
}
function loadPEM(_0x52cde9) {
    const _0xb4adb8 = _0x476f85;
    return fs[_0xb4adb8(0xc6)](filenamePEM(_0x52cde9));
}
const caCert = loadPEM(_0x476f85(0xc7)), opts = {
        'host': _0x476f85(0xc8),
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
tls['connect'](opts, common[_0x476f85(0xc9)](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on']('error', common['mustCall'](_0x1fc257 => {
    const _0x565ecb = _0x476f85;
    assert['strictEqual'](_0x1fc257[_0x565ecb(0xca)], _0x565ecb(0xcb));
}));
function _0x6c84(_0x20ab86, _0x162e67) {
    return _0x6c84 = function (_0x564778, _0x6c84f1) {
        _0x564778 = _0x564778 - 0xb4;
        let _0x4894ee = _0x5647[_0x564778];
        return _0x4894ee;
    }, _0x6c84(_0x20ab86, _0x162e67);
}
function fail() {
    const _0x21c62b = _0x476f85;
    assert[_0x21c62b(0xcc)]('should\x20fail\x20to\x20connect');
}
opts[_0x476f85(0xcd)] = tls[_0x476f85(0xce)](), tls[_0x476f85(0xcf)](opts, common[_0x476f85(0xc9)](end)), opts[_0x476f85(0xcd)][_0x476f85(0xd0)][_0x476f85(0xd1)](caCert), tls['connect'](opts, common[_0x476f85(0xc9)](end));
function end() {
    this['end']();
}
