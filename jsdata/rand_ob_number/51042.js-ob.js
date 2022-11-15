'use strict';
const common = require('../common.js'), crypto = require('crypto'), bench = common['createBenchmark'](main, {
        'writes': [-0x1dac + -0x1c * -0x52 + -0xb54 * -0x2],
        'algo': [
            'sha256',
            'md5'
        ],
        'type': [
            'asc',
            'utf',
            'buf'
        ],
        'out': [
            'hex',
            'binary',
            'buffer'
        ],
        'len': [
            0xad * -0x16 + -0x67c + 0x155c,
            -0x2502 + -0x1a * -0x15b + 0x5c4,
            0x24cd3 + -0x300de * 0x1 + 0x2440b,
            (-0x155 * 0x6 + 0x59 * -0x13 + 0x1299) * (-0xe * 0x7 + -0x39 * -0x30 + -0x64e)
        ],
        'api': [
            'legacy',
            'stream'
        ]
    });
function main({
    api: _0x2d626f,
    type: _0x494886,
    len: _0x3b2726,
    out: _0x3e6590,
    writes: _0x59a62a,
    algo: _0x266e29
}) {
    _0x2d626f === 'stream' && /^v0\.[0-8]\./['test'](process['version']) && (console['error']('Crypto\x20streams\x20not\x20available\x20until\x20v0.10'), _0x2d626f = 'legacy');
    let _0x1144e5, _0x230233;
    switch (_0x494886) {
    case 'asc':
        _0x1144e5 = 'a'['repeat'](_0x3b2726), _0x230233 = 'ascii';
        break;
    case 'utf':
        _0x1144e5 = 'ü'['repeat'](_0x3b2726 / (-0x846 + -0x8f * -0x35 + -0x1553)), _0x230233 = 'utf8';
        break;
    case 'buf':
        _0x1144e5 = Buffer['alloc'](_0x3b2726, 'b');
        break;
    default:
        throw new Error('unknown\x20message\x20type:\x20' + _0x494886);
    }
    const _0x257268 = _0x2d626f === 'stream' ? streamWrite : legacyWrite;
    bench['start'](), _0x257268(_0x266e29, _0x1144e5, _0x230233, _0x59a62a, _0x3b2726, _0x3e6590);
}
function legacyWrite(_0x2294dd, _0x4382ef, _0x3c6f89, _0x1025a7, _0x2d9d01, _0x18f0c5) {
    const _0x3b0a7a = _0x1025a7 * _0x2d9d01, _0x36c767 = _0x3b0a7a * (-0x1 * -0x647 + -0xd63 + 0x724), _0x1bee81 = _0x36c767 / ((-0x1fb0 + 0x1 * 0x6f5 + 0x5bf * 0x5) * (0x193 + 0x1f67 + -0x1cfa) * (0x1651 + -0x2710 + -0x71 * -0x2f));
    while (_0x1025a7-- > 0x1 * -0x2029 + -0x2394 + 0x1 * 0x43bd) {
        const _0x3ad626 = crypto['createHash'](_0x2294dd);
        _0x3ad626['update'](_0x4382ef, _0x3c6f89);
        let _0x40b3eb = _0x3ad626['digest'](_0x18f0c5);
        if (_0x18f0c5 === 'buffer' && typeof _0x40b3eb === 'string')
            _0x40b3eb = Buffer['from'](_0x40b3eb, 'binary');
    }
    bench['end'](_0x1bee81);
}
function streamWrite(_0x541bee, _0x12ac67, _0x59ea46, _0x431cde, _0x5b6fd9, _0x2158cf) {
    const _0x364297 = _0x431cde * _0x5b6fd9, _0x5aa52e = _0x364297 * (0x1982 + -0xa6c + 0x1 * -0xf0e), _0xb79687 = _0x5aa52e / ((0xc * -0x16b + -0xec7 + 0x23cb) * (0x1 * -0x1bb8 + 0xd8 + 0x1ee0) * (0x95f * -0x3 + 0x26 + 0x1ff7));
    while (_0x431cde-- > 0x1 * 0x25ef + 0x106a + -0x3659 * 0x1) {
        const _0x149674 = crypto['createHash'](_0x541bee);
        if (_0x2158cf !== 'buffer')
            _0x149674['setEncoding'](_0x2158cf);
        _0x149674['write'](_0x12ac67, _0x59ea46), _0x149674['end'](), _0x149674['read']();
    }
    bench['end'](_0xb79687);
}
