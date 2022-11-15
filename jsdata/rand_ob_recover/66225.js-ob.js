const semver = require(_0x137568(358)), url = require('url'), path = require(_0x137568(359)), log = require(_0x137568(360)), headersTarballRange = _0x137568(361), bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function _0x1319(_0x1ef4ae, _0x49d343) {
    return _0x1319 = function (_0x13db96, _0x7c838b) {
        _0x13db96 = _0x13db96 - (-125 * 37 + -6716 + 1 * 11689);
        var _0x1d701d = _0x408c[_0x13db96];
        return _0x1d701d;
    }, _0x1319(_0x1ef4ae, _0x49d343);
}
function processRelease(_0x56520f, _0x376ba2, _0xfe223b, _0x35fcd2) {
    var _0x267272 = _0x137568, _0x15eeae = {
            'SYkgA': _0x267272(362),
            'ZZEMd': function (_0x1380e1, _0x5ca0df) {
                return _0x1380e1 === _0x5ca0df;
            },
            'wYqdH': _0x267272(363),
            'IMhVP': function (_0x20562f, _0x4ffe62) {
                return _0x20562f >= _0x4ffe62;
            },
            'AXRkY': _0x267272(364),
            'oKJmr': 'download',
            'gpbFP': _0x267272(365),
            'OvPce': _0x267272(366),
            'ylhRl': function (_0x1c8888, _0x1d16e3) {
                return _0x1c8888 + _0x1d16e3;
            },
            'HuudA': '2|3|0|4|1',
            'sFdIk': function (_0x33138c, _0x960bfb, _0x5668a6, _0x544dd9, _0x3a83ad) {
                return _0x33138c(_0x960bfb, _0x5668a6, _0x544dd9, _0x3a83ad);
            },
            'ZgBSS': 'x64',
            'XbZvk': function (_0x3bddd9, _0x140c0e, _0x5a40e8, _0x44e8c4, _0x5456ff) {
                return _0x3bddd9(_0x140c0e, _0x5a40e8, _0x44e8c4, _0x5456ff);
            },
            'gOLcP': _0x267272(367),
            'rbJSF': _0x267272(368),
            'flxQd': function (_0x51012f, _0x50d60a) {
                return _0x51012f + _0x50d60a;
            },
            'ztnMm': function (_0x33dc3f, _0x3bfbea) {
                return _0x33dc3f + _0x3bfbea;
            },
            'RlBQe': _0x267272(369),
            'QFNhK': _0x267272(370),
            'rzILC': function (_0x29684d, _0x2369fb) {
                return _0x29684d + _0x2369fb;
            },
            'xJLPj': function (_0x5a06ee, _0x21b8dc) {
                return _0x5a06ee !== _0x21b8dc;
            },
            'aGNxD': function (_0x5665d1, _0x455854) {
                return _0x5665d1(_0x455854);
            },
            'RKHMA': function (_0x14c9be, _0x9fbbd) {
                return _0x14c9be(_0x9fbbd);
            }
        }, _0x4e4d54 = semver['valid'](_0x56520f[723 * -11 + -3883 + 11 * 1076]) && _0x56520f[9406 + 461 * 2 + -10328] || _0x376ba2[_0x267272(371)]['target'] || _0xfe223b, _0x4004e3 = semver[_0x267272(372)](_0x4e4d54), _0x2b6e42 = _0x376ba2[_0x267272(371)][_0x15eeae[_0x267272(373)]] || _0x376ba2[_0x267272(371)][_0x267272(374)], _0x38c565, _0x4775a9, _0x33f6d1, _0x4cdb1b, _0x509110, _0x11cf80, _0xe95e78, _0x432f36, _0x40a8b7, _0xc3d1f;
    if (!_0x4004e3)
        return { 'version': _0x4e4d54 };
    _0x4e4d54 = _0x4004e3[_0x267272(375)], _0x38c565 = _0x15eeae[_0x267272(376)](_0x4e4d54, semver['parse'](_0xfe223b)['version']);
    !_0x38c565 && (_0x35fcd2 = null);
    _0x35fcd2 ? _0x33f6d1 = _0x35fcd2[_0x267272(377)][_0x267272(378)](/io\.js/, _0x15eeae[_0x267272(379)]) : (_0x4775a9 = _0x15eeae[_0x267272(380)](_0x4004e3[_0x267272(381)], 3 * -2791 + -1123 + 1 * 9497) && _0x4004e3[_0x267272(381)] < -8415 + 7146 + 1273, _0x33f6d1 = _0x4775a9 ? _0x15eeae[_0x267272(379)] : _0x15eeae['AXRkY']);
    !_0x2b6e42 && process['env']['NODEJS_ORG_MIRROR'] && (_0x2b6e42 = process['env'][_0x267272(382)]);
    _0x2b6e42 && log['verbose'](_0x15eeae[_0x267272(383)], _0x15eeae[_0x267272(384)], _0x2b6e42);
    _0x2b6e42 ? _0x4cdb1b = _0x2b6e42['replace'](/\/+$/, '') : _0x4cdb1b = _0x15eeae['OvPce'];
    _0x4cdb1b += _0x15eeae['ylhRl']('/v', _0x4e4d54) + '/';
    if (_0x35fcd2 && _0x35fcd2[_0x267272(385)] && !_0x2b6e42) {
        var _0x101a69 = _0x15eeae[_0x267272(386)][_0x267272(387)]('|'), _0x48aa49 = -1 * -890 + 9662 + -10552;
        while (!![]) {
            switch (_0x101a69[_0x48aa49++]) {
            case '0':
                _0xe95e78 = _0x15eeae['sFdIk'](resolveLibUrl, _0x33f6d1, _0x35fcd2[_0x267272(388)] || _0x509110 || _0x4cdb1b, _0x15eeae[_0x267272(389)], _0x4004e3['major']);
                continue;
            case '1':
                _0x40a8b7 = _0x35fcd2[_0x267272(385)];
                continue;
            case '2':
                _0x509110 = url['resolve'](_0x35fcd2['headersUrl'], './');
                continue;
            case '3':
                _0x11cf80 = _0x15eeae['XbZvk'](resolveLibUrl, _0x33f6d1, _0x35fcd2[_0x267272(388)] || _0x509110 || _0x4cdb1b, _0x15eeae[_0x267272(390)], _0x4004e3['major']);
                continue;
            case '4':
                _0x432f36 = _0x15eeae['XbZvk'](resolveLibUrl, _0x33f6d1, _0x35fcd2[_0x267272(388)] || _0x509110 || _0x4cdb1b, _0x15eeae[_0x267272(391)], _0x4004e3[_0x267272(381)]);
                continue;
            }
            break;
        }
    } else
        _0x509110 = _0x4cdb1b, _0x11cf80 = resolveLibUrl(_0x33f6d1, _0x509110, _0x15eeae['gOLcP'], _0x4004e3[_0x267272(381)]), _0xe95e78 = _0x15eeae['XbZvk'](resolveLibUrl, _0x33f6d1, _0x509110, _0x15eeae[_0x267272(389)], _0x4004e3['major']), _0x432f36 = _0x15eeae['XbZvk'](resolveLibUrl, _0x33f6d1, _0x509110, _0x15eeae[_0x267272(391)], _0x4004e3[_0x267272(381)]), _0xc3d1f = semver[_0x267272(392)](_0x4004e3, headersTarballRange), _0x40a8b7 = url[_0x267272(393)](_0x509110, _0x15eeae[_0x267272(394)](_0x15eeae[_0x267272(394)](_0x15eeae[_0x267272(395)](_0x15eeae['ztnMm'](_0x33f6d1, '-v'), _0x4e4d54), _0xc3d1f ? _0x15eeae[_0x267272(396)] : ''), _0x267272(397)));
    return {
        'version': _0x4e4d54,
        'semver': _0x4004e3,
        'name': _0x33f6d1,
        'baseUrl': _0x509110,
        'tarballUrl': _0x40a8b7,
        'shasumsUrl': url[_0x267272(393)](_0x509110, _0x15eeae[_0x267272(398)]),
        'versionDir': _0x15eeae[_0x267272(399)](_0x15eeae['xJLPj'](_0x33f6d1, _0x15eeae[_0x267272(400)]) ? _0x33f6d1 + '-' : '', _0x4e4d54),
        'ia32': {
            'libUrl': _0x11cf80,
            'libPath': _0x15eeae[_0x267272(401)](normalizePath, path[_0x267272(402)](url[_0x267272(372)](_0x509110)[_0x267272(359)], url[_0x267272(372)](_0x11cf80)['path']))
        },
        'x64': {
            'libUrl': _0xe95e78,
            'libPath': _0x15eeae[_0x267272(403)](normalizePath, path[_0x267272(402)](url[_0x267272(372)](_0x509110)['path'], url['parse'](_0xe95e78)[_0x267272(359)]))
        },
        'arm64': {
            'libUrl': _0x432f36,
            'libPath': normalizePath(path[_0x267272(402)](url[_0x267272(372)](_0x509110)['path'], url[_0x267272(372)](_0x432f36)[_0x267272(359)]))
        }
    };
}
function normalizePath(_0x5e9910) {
    var _0x3795dc = _0x137568;
    return path[_0x3795dc(404)](_0x5e9910)[_0x3795dc(378)](/\\/g, '/');
}
function resolveLibUrl(_0x4f8aa1, _0x15f741, _0x3268f4, _0x2be339) {
    var _0x5e61de = _0x137568, _0x2f6bf6 = {
            'SHFEB': function (_0x575316, _0x4f5050) {
                return _0x575316 >= _0x4f5050;
            },
            'YjtSi': function (_0x27b148, _0x4a4c65) {
                return _0x27b148 + _0x4a4c65;
            },
            'vuPxb': function (_0x38e927, _0x134677) {
                return _0x38e927 + _0x134677;
            },
            'nAUlq': 'win-',
            'fcDNS': _0x5e61de(405),
            'Xaraf': function (_0x5cea47, _0x3a36d8) {
                return _0x5cea47 + _0x3a36d8;
            },
            'ubXkU': 'x86',
            'FbAbG': _0x5e61de(406)
        }, _0x3fc7cd = url[_0x5e61de(393)](_0x15f741, './'), _0x470c72 = bitsre[_0x5e61de(407)](_0x15f741) || _0x2be339 === 1617 + -5385 + 3771 && bitsreV3[_0x5e61de(407)](_0x15f741);
    if (!_0x470c72) {
        if (_0x2f6bf6[_0x5e61de(408)](_0x2be339, -30 * 242 + -1 * 5923 + 13184))
            return url[_0x5e61de(393)](_0x3fc7cd, _0x2f6bf6[_0x5e61de(409)](_0x2f6bf6[_0x5e61de(410)](_0x2f6bf6[_0x5e61de(411)], _0x3268f4) + '/' + _0x4f8aa1, _0x2f6bf6['fcDNS']));
        return url['resolve'](_0x3fc7cd, _0x2f6bf6[_0x5e61de(412)](_0x2f6bf6[_0x5e61de(412)](_0x3268f4 === _0x2f6bf6[_0x5e61de(413)] ? '' : _0x3268f4 + '/', _0x4f8aa1), _0x2f6bf6[_0x5e61de(414)]));
    }
    return _0x15f741[_0x5e61de(378)](_0x2be339 === -9927 + 3966 * -1 + -9 * -1544 ? bitsreV3 : bitsre, _0x2f6bf6[_0x5e61de(412)](_0x2f6bf6[_0x5e61de(415)], _0x3268f4) + '/');
}
module[_0x137568(416)] = processRelease;