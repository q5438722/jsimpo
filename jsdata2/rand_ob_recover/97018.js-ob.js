const http2Server = require(_0x236145(268)), httpServer = require(_0x236145(269)), {existsSync, statSync, createReadStream} = require('fs'), {join} = require(_0x236145(270)), argv = require(_0x236145(271))(process[_0x236145(272)]['slice'](1782 * -5 + 7429 + 1 * 1483)), mime = require('mime');
function sendFile(_0x239e5c, _0x34dd2e) {
    const _0x3427c6 = _0x236145, _0x197481 = {
            'pTvpF': _0x3427c6(273),
            'ECLkS': _0x3427c6(274)
        };
    _0x34dd2e[_0x3427c6(275)](_0x197481[_0x3427c6(276)], mime[_0x3427c6(277)](_0x239e5c)), _0x34dd2e[_0x3427c6(278)](862 * 2 + 1 * 3163 + -4687);
    const _0x57f734 = createReadStream(_0x239e5c);
    _0x57f734[_0x3427c6(279)](_0x34dd2e), _0x57f734['on'](_0x197481[_0x3427c6(280)], _0x34dd2e[_0x3427c6(281)]);
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
            const _0x3712ee = _0x41e8, _0x4cf2f7 = _0x2f2d55[_0x3712ee(282)](join, __dirname, _0x2f2d55[_0x3712ee(283)], _0x545783, _0x2fa7b1[_0x3712ee(284)])[_0x3712ee(285)](/\?.*/g, '');
            if (existsSync(_0x4cf2f7) && _0x2f2d55['AUzxy'](statSync, _0x4cf2f7)[_0x3712ee(286)]())
                sendFile(_0x4cf2f7, _0x6841ce);
            else {
                const _0x1e0be8 = _0x2f2d55[_0x3712ee(287)](join, _0x4cf2f7, _0x2f2d55[_0x3712ee(288)]);
                existsSync(_0x1e0be8) ? _0x2f2d55[_0x3712ee(289)](sendFile, _0x1e0be8, _0x6841ce) : (_0x6841ce[_0x3712ee(278)](-6 * -902 + -66 * 47 + -1 * 1906), _0x6841ce['end']());
            }
        });
    return _0x3b5654[_0x342d53(290)](11800 + -11038 + 1 * 7318), _0x3b5654;
}
function createHTTPServer() {
    const _0x557516 = _0x236145, _0xf7a687 = {
            'rKbES': function (_0x2ef7d8, _0x3dbdc9, _0x2e9f0b) {
                return _0x2ef7d8(_0x3dbdc9, _0x2e9f0b);
            },
            'uxMvX': 'benchmarks',
            'BGFKb': _0x557516(291)
        }, _0x235e3a = httpServer[_0x557516(292)]({
            'root': _0xf7a687[_0x557516(293)](join, __dirname, _0xf7a687['uxMvX']),
            'robots': !![],
            'cache': _0xf7a687['BGFKb'],
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': _0x557516(294)
            }
        });
    return _0x235e3a[_0x557516(290)](-5982 * 2 + -6527 + -1563 * -17), _0x235e3a;
}
function _0x41e8(_0x2c3054, _0x5277cb) {
    return _0x41e8 = function (_0x137998, _0x41f479) {
        _0x137998 = _0x137998 - (36 * 114 + 7069 + -10917 * 1);
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
    return _0x154a0c ? _0x13f4ed[_0x2f5daf(295)](createHTTP2Server, _0x3b97aa) : _0x13f4ed[_0x2f5daf(296)](createHTTPServer);
}
if (require[_0x236145(297)] === module) {
    const benchmarkInput = argv['_'][-1545 + 5708 + -4163 * 1];
    benchmarkInput ? serveBenchmark(benchmarkInput) : (console['error']('Please specify a benchmark directory to serve!'), process[_0x236145(298)](-2684 + -59 * 5 + -298 * -10));
}
module[_0x236145(299)] = serveBenchmark;