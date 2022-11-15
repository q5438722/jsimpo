const test = require(_0x2e0e18(264))[_0x2e0e18(265)], path = require('path'), findNodeDirectory = require(_0x2e0e18(266)), platforms = [
        _0x2e0e18(267),
        'freebsd',
        _0x2e0e18(268),
        _0x2e0e18(269),
        _0x2e0e18(270),
        _0x2e0e18(271)
    ];
test(_0x2e0e18(272), function (_0x375ce6) {
    var _0x3fa906 = _0x2e0e18, _0x1d8123 = {
            'CXWMO': function (_0x3d72cd, _0x1560ea) {
                return _0x3d72cd < _0x1560ea;
            },
            'TXeER': _0x3fa906(273)
        };
    _0x375ce6['plan'](platforms['length']);
    for (var _0x516f39 = 5652 * -1 + 8705 + -3053; _0x1d8123[_0x3fa906(274)](_0x516f39, platforms[_0x3fa906(275)]); _0x516f39++) {
        var _0x2b8ea2 = {
            'execPath': _0x3fa906(276),
            'platform': platforms[_0x516f39]
        };
        _0x375ce6[_0x3fa906(277)](findNodeDirectory(_0x1d8123[_0x3fa906(278)], _0x2b8ea2), path[_0x3fa906(279)]('/x'));
    }
}), test('test find-node-directory - node build', function (_0x2b7e64) {
    var _0x2392fe = _0x2e0e18, _0x2830fb = {
            'txxgi': function (_0x46210f, _0x47f058) {
                return _0x46210f < _0x47f058;
            },
            'jrZyA': _0x2392fe(276),
            'DIeSZ': function (_0x4d326a, _0x396335) {
                return _0x4d326a === _0x396335;
            },
            'WIRLK': function (_0x1cc4c6, _0xf8c456, _0x52ad76) {
                return _0x1cc4c6(_0xf8c456, _0x52ad76);
            },
            'pfarQ': _0x2392fe(280),
            'eJPZa': _0x2392fe(281)
        };
    _0x2b7e64[_0x2392fe(282)](platforms[_0x2392fe(275)]);
    for (var _0x4dffc3 = 5563 + 8 * -160 + 4283 * -1; _0x2830fb[_0x2392fe(283)](_0x4dffc3, platforms[_0x2392fe(275)]); _0x4dffc3++) {
        var _0x11bf5d = {
            'execPath': _0x2830fb[_0x2392fe(284)],
            'platform': platforms[_0x4dffc3]
        };
        _0x2830fb[_0x2392fe(285)](platforms[_0x4dffc3], 'win32') ? _0x2b7e64[_0x2392fe(277)](_0x2830fb[_0x2392fe(286)](findNodeDirectory, _0x2830fb[_0x2392fe(287)], _0x11bf5d), path[_0x2392fe(279)]('/y')) : _0x2b7e64[_0x2392fe(277)](findNodeDirectory(_0x2830fb['eJPZa'], _0x11bf5d), path[_0x2392fe(279)]('/y'));
    }
}), test('test find-node-directory - node in bin directory', function (_0x237685) {
    var _0x49e4e6 = _0x2e0e18, _0x204033 = {
            'kOtsv': function (_0x585127, _0x4e8cea) {
                return _0x585127 < _0x4e8cea;
            },
            'Wzvww': '/x/y/bin/node',
            'ANEbJ': function (_0x5126fb, _0x2f83ce, _0x1c1590) {
                return _0x5126fb(_0x2f83ce, _0x1c1590);
            },
            'DFsLo': _0x49e4e6(288)
        };
    _0x237685['plan'](platforms['length']);
    for (var _0x10db5e = 9556 + 1 * 3011 + 71 * -177; _0x204033['kOtsv'](_0x10db5e, platforms['length']); _0x10db5e++) {
        var _0x204d2a = {
            'execPath': _0x204033[_0x49e4e6(289)],
            'platform': platforms[_0x10db5e]
        };
        _0x237685[_0x49e4e6(277)](_0x204033[_0x49e4e6(290)](findNodeDirectory, _0x204033['DFsLo'], _0x204d2a), path['join']('/x/y'));
    }
}), test('test find-node-directory - node in build release dir', function (_0x341eff) {
    var _0x2fcd4c = _0x2e0e18, _0x5b8b29 = {
            'DVUEC': function (_0x44dd7e, _0x16583b) {
                return _0x44dd7e < _0x16583b;
            },
            'EpGuW': function (_0x47f1a0, _0x971e89) {
                return _0x47f1a0 === _0x971e89;
            },
            'AlSPK': _0x2fcd4c(270),
            'oeIrK': _0x2fcd4c(291),
            'kYJRe': '/x/y/out/Release/node',
            'ODtre': function (_0x2ab27e, _0x4091af, _0x2cb31b) {
                return _0x2ab27e(_0x4091af, _0x2cb31b);
            },
            'MCUQg': _0x2fcd4c(288)
        };
    _0x341eff[_0x2fcd4c(282)](platforms[_0x2fcd4c(275)]);
    for (var _0x3d5a59 = -9106 + -4345 * 1 + 1 * 13451; _0x5b8b29[_0x2fcd4c(292)](_0x3d5a59, platforms[_0x2fcd4c(275)]); _0x3d5a59++) {
        var _0x7bd48a;
        _0x5b8b29['EpGuW'](platforms[_0x3d5a59], _0x5b8b29['AlSPK']) ? _0x7bd48a = {
            'execPath': _0x5b8b29['oeIrK'],
            'platform': platforms[_0x3d5a59]
        } : _0x7bd48a = {
            'execPath': _0x5b8b29['kYJRe'],
            'platform': platforms[_0x3d5a59]
        }, _0x341eff[_0x2fcd4c(277)](_0x5b8b29[_0x2fcd4c(293)](findNodeDirectory, _0x5b8b29[_0x2fcd4c(294)], _0x7bd48a), path[_0x2fcd4c(279)]('/x/y'));
    }
}), test(_0x2e0e18(295), function (_0x56ca67) {
    var _0x6263b2 = _0x2e0e18, _0x571c80 = {
            'pDmTO': function (_0x51f1fa, _0x257ea4) {
                return _0x51f1fa === _0x257ea4;
            },
            'dLCXs': 'win32',
            'iePRE': _0x6263b2(296),
            'ehFNV': function (_0x246b2d, _0x4c0f4e, _0x3cdd20) {
                return _0x246b2d(_0x4c0f4e, _0x3cdd20);
            },
            'WtUBu': _0x6263b2(288),
            'wBWWq': _0x6263b2(297)
        };
    _0x56ca67[_0x6263b2(282)](platforms[_0x6263b2(275)]);
    for (var _0x5a9a7d = 1832 + 1 * -4677 + 2845; _0x5a9a7d < platforms[_0x6263b2(275)]; _0x5a9a7d++) {
        var _0x3c4cfd;
        _0x571c80[_0x6263b2(298)](platforms[_0x5a9a7d], _0x571c80[_0x6263b2(299)]) ? _0x3c4cfd = {
            'execPath': _0x6263b2(300),
            'platform': platforms[_0x5a9a7d]
        } : _0x3c4cfd = {
            'execPath': _0x571c80['iePRE'],
            'platform': platforms[_0x5a9a7d]
        }, _0x56ca67[_0x6263b2(277)](_0x571c80[_0x6263b2(301)](findNodeDirectory, _0x571c80[_0x6263b2(302)], _0x3c4cfd), path[_0x6263b2(279)](_0x571c80[_0x6263b2(303)]));
    }
}), test(_0x2e0e18(304), function (_0x23d819) {
    var _0x2fe00f = _0x2e0e18, _0x28d059 = {
            'iBDjz': function (_0x3078c5, _0x166c65) {
                return _0x3078c5 < _0x166c65;
            },
            'EIQGz': _0x2fe00f(305),
            'Ifvyd': _0x2fe00f(306)
        };
    _0x23d819[_0x2fe00f(282)](platforms[_0x2fe00f(275)]);
    for (var _0x4042ae = 4 * -1668 + 4981 + 1691; _0x28d059[_0x2fe00f(307)](_0x4042ae, platforms[_0x2fe00f(275)]); _0x4042ae++) {
        var _0x5d3c4f = {
            'execPath': _0x28d059['EIQGz'],
            'platform': _0x4042ae
        };
        _0x23d819['equal'](findNodeDirectory(_0x28d059['Ifvyd'], _0x5d3c4f), '');
    }
}), test(_0x2e0e18(272), function (_0x417f48) {
    var _0x3240a6 = _0x2e0e18, _0x1904d2 = {
            'TaucM': function (_0x343995, _0x231bad) {
                return _0x343995 < _0x231bad;
            },
            'sqNaN': _0x3240a6(276),
            'YwAKA': function (_0x2e6c84, _0x29cae0, _0x29031c) {
                return _0x2e6c84(_0x29cae0, _0x29031c);
            },
            'aBgCj': _0x3240a6(308),
            'MdZIm': _0x3240a6(309)
        };
    _0x417f48[_0x3240a6(282)](platforms[_0x3240a6(275)]);
    for (var _0x46678f = -15 * 398 + 2787 + 3 * 1061; _0x1904d2[_0x3240a6(310)](_0x46678f, platforms['length']); _0x46678f++) {
        var _0x4f5eaf = {
            'execPath': _0x1904d2[_0x3240a6(311)],
            'platform': platforms[_0x46678f]
        };
        _0x417f48['equal'](_0x1904d2[_0x3240a6(312)](findNodeDirectory, _0x1904d2['aBgCj'], _0x4f5eaf), path['join'](_0x1904d2[_0x3240a6(313)]));
    }
});