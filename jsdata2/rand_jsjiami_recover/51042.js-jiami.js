'use strict';
const common = require('../common.js');
const crypto = require('crypto');
const bench = common['createBenchmark'](main, {
    'writes': [500],
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
        2,
        1024,
        102400,
        1024 * 1024
    ],
    'api': [
        'legacy',
        'stream'
    ]
});
function main({api, type, len, out, writes, algo}) {
    if (api === 'stream' && /^v0\.[0-8]\./['test'](process['version'])) {
        if ('EHbGT' !== 'EHbGT') {
            const _0x177d06 = crypto['createHash'](algo);
            if (outEnc !== 'buffer')
                _0x177d06['setEncoding'](outEnc);
            _0x177d06['write'](_0x4b314c, _0x2b416c);
            _0x177d06['end']();
            _0x177d06['read']();
        } else {
            console['error']('Crypto streams not available until v0.10');
            api = 'legacy';
        }
    }
    let _0x4b314c;
    let _0x2b416c;
    switch (type) {
    case 'asc':
        _0x4b314c = 'a'['repeat'](len);
        _0x2b416c = 'ascii';
        break;
    case 'utf':
        _0x4b314c = 'ü'['repeat'](len / 2);
        _0x2b416c = 'utf8';
        break;
    case 'buf':
        _0x4b314c = Buffer['alloc'](len, 'b');
        break;
    default:
        throw new Error('unknown message type: ' + type);
    }
    const _0x431960 = api === 'stream' ? streamWrite : legacyWrite;
    bench['start']();
    _0x431960(algo, _0x4b314c, _0x2b416c, writes, len, out);
}
function legacyWrite(_0x54f5b9, _0x256ecc, _0x265f13, _0x8bd2f9, _0x1b33cf, _0x484e00) {
    const _0x205186 = _0x8bd2f9 * _0x1b33cf;
    const _0x2a14a7 = _0x205186 * 8;
    const _0x5768a3 = _0x2a14a7 / (1024 * 1024 * 1024);
    while (_0x8bd2f9-- > 0) {
        if ('pTTlB' !== 'pTTlB') {
            const _0x1f0283 = _0x8bd2f9 * _0x1b33cf;
            const _0x43dd29 = _0x1f0283 * 8;
            const _0x53bc1b = _0x43dd29 / (1024 * 1024 * 1024);
            while (_0x8bd2f9-- > 0) {
                const _0x1d2cec = crypto['createHash'](_0x54f5b9);
                _0x1d2cec['update'](_0x256ecc, _0x265f13);
                let _0x3fae46 = _0x1d2cec['digest'](_0x484e00);
                if (_0x484e00 === 'buffer' && typeof _0x3fae46 === 'string')
                    _0x3fae46 = Buffer['from'](_0x3fae46, 'binary');
            }
            bench['end'](_0x53bc1b);
        } else {
            const _0x496efd = crypto['createHash'](_0x54f5b9);
            _0x496efd['update'](_0x256ecc, _0x265f13);
            let _0x47f2e4 = _0x496efd['digest'](_0x484e00);
            if (_0x484e00 === 'buffer' && typeof _0x47f2e4 === 'string')
                _0x47f2e4 = Buffer['from'](_0x47f2e4, 'binary');
        }
    }
    bench['end'](_0x5768a3);
}
function streamWrite(_0x1bc8e5, _0x734752, _0x4543e5, _0x421d89, _0x2835d3, _0x23e66f) {
    const _0x357d7f = _0x421d89 * _0x2835d3;
    const _0x1f4736 = _0x357d7f * 8;
    const _0x1002ef = _0x1f4736 / (1024 * 1024 * 1024);
    while (_0x421d89-- > 0) {
        const _0x5d76d6 = crypto['createHash'](_0x1bc8e5);
        if (_0x23e66f !== 'buffer')
            _0x5d76d6['setEncoding'](_0x23e66f);
        _0x5d76d6['write'](_0x734752, _0x4543e5);
        _0x5d76d6['end']();
        _0x5d76d6['read']();
    }
    bench['end'](_0x1002ef);
}