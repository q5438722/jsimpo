'use strict';
const _0x51ab = [
    'exports',
    '1VbIXQh',
    '32464ycmdov',
    '1736uvgclD',
    '331yqRfAn',
    '5883ukFWHF',
    '75XQwYuO',
    '393qwtTxN',
    '902YPcKzb',
    '136225wnXuwP',
    '458933vZSxNS',
    '1JguWnh',
    '823323MjNNAu',
    'http2',
    'http-server',
    'path',
    'minimist',
    'argv',
    'Content-Type',
    'finish',
    'setHeader',
    'pTvpF',
    'lookup',
    'writeHead',
    'pipe',
    'ECLkS',
    'end',
    'LbCBy',
    'TTPrK',
    'url',
    'replace',
    'isFile',
    'qXpZz',
    'AiZck',
    'AuCnR',
    'listen',
    'no-store',
    'createServer',
    'rKbES',
    'true',
    'nWJHl',
    'tucpA',
    'main',
    'exit'
];
const _0x236145 = _0x41e8;
(function (_0x47e54d, _0x5e2a05) {
    const _0xdc455a = _0x41e8;
    while (!![]) {
        try {
            const _0x2c7721 = -parseInt(_0xdc455a(0x100)) * -parseInt(_0xdc455a(0x101)) + -parseInt(_0xdc455a(0x102)) * -parseInt(_0xdc455a(0x103)) + -parseInt(_0xdc455a(0x104)) * parseInt(_0xdc455a(0x105)) + parseInt(_0xdc455a(0x106)) * parseInt(_0xdc455a(0x107)) + parseInt(_0xdc455a(0x108)) + parseInt(_0xdc455a(0x109)) + -parseInt(_0xdc455a(0x10a)) * parseInt(_0xdc455a(0x10b));
            if (_0x2c7721 === _0x5e2a05)
                break;
            else
                _0x47e54d['push'](_0x47e54d['shift']());
        } catch (_0x22df90) {
            _0x47e54d['push'](_0x47e54d['shift']());
        }
    }
}(_0x51ab, -0x12bd5 * 0x2 + -0x981 * -0x49 + 0x41731));
const http2Server = require(_0x236145(0x10c)), httpServer = require(_0x236145(0x10d)), {existsSync, statSync, createReadStream} = require('fs'), {join} = require(_0x236145(0x10e)), argv = require(_0x236145(0x10f))(process[_0x236145(0x110)]['slice'](0x6f6 * -0x5 + 0x1d05 + 0x1 * 0x5cb)), mime = require('mime');
function sendFile(_0x239e5c, _0x34dd2e) {
    const _0x3427c6 = _0x236145, _0x197481 = {
            'pTvpF': _0x3427c6(0x111),
            'ECLkS': _0x3427c6(0x112)
        };
    _0x34dd2e[_0x3427c6(0x113)](_0x197481[_0x3427c6(0x114)], mime[_0x3427c6(0x115)](_0x239e5c)), _0x34dd2e[_0x3427c6(0x116)](0x35e * 0x2 + 0x1 * 0xc5b + -0x124f);
    const _0x57f734 = createReadStream(_0x239e5c);
    _0x57f734[_0x3427c6(0x117)](_0x34dd2e), _0x57f734['on'](_0x197481[_0x3427c6(0x118)], _0x34dd2e[_0x3427c6(0x119)]);
}
function createHTTP2Server(_0x545783) {
    const _0x342d53 = _0x236145, _0x2f2d55 = {
            'LbCBy': function (_0x5d7d64, _0x1676a8, _0x123cc6, _0x532e82, _0x4c7ab4) {
                return _0x5d7d64(_0x1676a8, _0x123cc6, _0x532e82, _0x4c7ab4);
            },
            'TTPrK': 'benchmarks',
            'AUzxy': function (_0x2d07eb, _0x208015) {
                return _0x2d07eb(_0x208015);
            },
            'qXpZz': function (_0xad2db0, _0x333a59, _0x58c5be) {
                return _0xad2db0(_0x333a59, _0x58c5be);
            },
            'AiZck': 'index.html',
            'AuCnR': function (_0x2b0e0d, _0x490972, _0x1b1b7b) {
                return _0x2b0e0d(_0x490972, _0x1b1b7b);
            }
        }, _0x3b5654 = http2Server['createServer']({}, (_0x2fa7b1, _0x6841ce) => {
            const _0x3712ee = _0x41e8, _0x4cf2f7 = _0x2f2d55[_0x3712ee(0x11a)](join, __dirname, _0x2f2d55[_0x3712ee(0x11b)], _0x545783, _0x2fa7b1[_0x3712ee(0x11c)])[_0x3712ee(0x11d)](/\?.*/g, '');
            if (existsSync(_0x4cf2f7) && _0x2f2d55['AUzxy'](statSync, _0x4cf2f7)[_0x3712ee(0x11e)]())
                sendFile(_0x4cf2f7, _0x6841ce);
            else {
                const _0x1e0be8 = _0x2f2d55[_0x3712ee(0x11f)](join, _0x4cf2f7, _0x2f2d55[_0x3712ee(0x120)]);
                existsSync(_0x1e0be8) ? _0x2f2d55[_0x3712ee(0x121)](sendFile, _0x1e0be8, _0x6841ce) : (_0x6841ce[_0x3712ee(0x116)](-0x6 * -0x386 + -0x42 * 0x2f + -0x1 * 0x772), _0x6841ce['end']());
            }
        });
    return _0x3b5654[_0x342d53(0x122)](0x2e18 + -0x2b1e + 0x1 * 0x1c96), _0x3b5654;
}
function createHTTPServer() {
    const _0x557516 = _0x236145, _0xf7a687 = {
            'rKbES': function (_0x2ef7d8, _0x3dbdc9, _0x2e9f0b) {
                return _0x2ef7d8(_0x3dbdc9, _0x2e9f0b);
            },
            'uxMvX': 'benchmarks',
            'BGFKb': _0x557516(0x123)
        }, _0x235e3a = httpServer[_0x557516(0x124)]({
            'root': _0xf7a687[_0x557516(0x125)](join, __dirname, _0xf7a687['uxMvX']),
            'robots': !![],
            'cache': _0xf7a687['BGFKb'],
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': _0x557516(0x126)
            }
        });
    return _0x235e3a[_0x557516(0x122)](-0x175e * 0x2 + -0x197f + -0x61b * -0x11), _0x235e3a;
}
function _0x41e8(_0x2c3054, _0x5277cb) {
    return _0x41e8 = function (_0x137998, _0x41f479) {
        _0x137998 = _0x137998 - (0x24 * 0x72 + 0x1b9d + -0x2aa5 * 0x1);
        let _0x1911ce = _0x51ab[_0x137998];
        return _0x1911ce;
    }, _0x41e8(_0x2c3054, _0x5277cb);
}
function serveBenchmark(_0x3b97aa, _0x154a0c) {
    const _0x2f5daf = _0x236145, _0x13f4ed = {
            'nWJHl': function (_0x5626bd, _0x129502) {
                return _0x5626bd(_0x129502);
            },
            'tucpA': function (_0x55e05c) {
                return _0x55e05c();
            }
        };
    return _0x154a0c ? _0x13f4ed[_0x2f5daf(0x127)](createHTTP2Server, _0x3b97aa) : _0x13f4ed[_0x2f5daf(0x128)](createHTTPServer);
}
if (require[_0x236145(0x129)] === module) {
    const benchmarkInput = argv['_'][-0x609 + 0x164c + -0x1043 * 0x1];
    benchmarkInput ? serveBenchmark(benchmarkInput) : (console['error']('Please\x20specify\x20a\x20benchmark\x20directory\x20to\x20serve!'), process[_0x236145(0x12a)](-0xa7c + -0x3b * 0x5 + -0x12a * -0xa));
}
module[_0x236145(0x12b)] = serveBenchmark;
