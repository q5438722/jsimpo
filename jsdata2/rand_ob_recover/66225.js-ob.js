const semver = require(_0x4c650d(440)), url = require(_0x4c650d(441)), path = require('path'), log = require(_0x4c650d(442)), headersTarballRange = _0x4c650d(443), bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function _0x14a3(_0xc220ad, _0xa9e8d0) {
    return _0x14a3 = function (_0x20863d, _0x101fc3) {
        _0x20863d = _0x20863d - (5056 + -729 + 1299 * -3);
        var _0x4764ab = _0x2e0f[_0x20863d];
        return _0x4764ab;
    }, _0x14a3(_0xc220ad, _0xa9e8d0);
}
function processRelease(_0x1831cc, _0x1fd895, _0x7ca3f, _0x4d276e) {
    var _0x23ccf8 = _0x4c650d, _0x27c36c = {
            'BRsOj': _0x23ccf8(444),
            'iWSwL': function (_0xebbf5e, _0x123c08) {
                return _0xebbf5e === _0x123c08;
            },
            'abREs': function (_0x3f6f23, _0x49d25a) {
                return _0x3f6f23 >= _0x49d25a;
            },
            'TnSFe': function (_0x7a622b, _0x3b8496) {
                return _0x7a622b < _0x3b8496;
            },
            'MTIzx': _0x23ccf8(445),
            'UOwpP': _0x23ccf8(446),
            'nIxkF': 'using dist-url',
            'NXCcu': 'https://nodejs.org/dist',
            'UyPPm': function (_0xeb3a1f, _0x472fd2) {
                return _0xeb3a1f + _0x472fd2;
            },
            'naoVx': function (_0x366199, _0x5a516c, _0x429aff, _0x2dcbc9, _0xc422d2) {
                return _0x366199(_0x5a516c, _0x429aff, _0x2dcbc9, _0xc422d2);
            },
            'ovNye': _0x23ccf8(447),
            'FnoZz': _0x23ccf8(448),
            'QMjuy': _0x23ccf8(449),
            'QHTLW': _0x23ccf8(450),
            'mtRkc': function (_0x5e60c3, _0x1d39db) {
                return _0x5e60c3 + _0x1d39db;
            },
            'FSzoJ': function (_0x23a0f4, _0x47e3cc) {
                return _0x23a0f4 + _0x47e3cc;
            },
            'Wjgje': function (_0x20977f, _0xa54ee) {
                return _0x20977f + _0xa54ee;
            },
            'LnTOH': _0x23ccf8(451),
            'luJUv': '.tar.gz',
            'FcBKx': function (_0x297d35, _0x259f1e, _0x1210f7, _0x2e5828, _0x427798) {
                return _0x297d35(_0x259f1e, _0x1210f7, _0x2e5828, _0x427798);
            },
            'gcbcd': function (_0x253a30, _0x280882) {
                return _0x253a30 + _0x280882;
            },
            'JCchE': function (_0x1e8610, _0x277839) {
                return _0x1e8610 + _0x277839;
            },
            'RVjKf': function (_0x7c3376, _0x3ee2c8) {
                return _0x7c3376(_0x3ee2c8);
            },
            'GWJEC': function (_0x219841, _0x1286b0) {
                return _0x219841(_0x1286b0);
            }
        }, _0x393444 = semver['valid'](_0x1831cc[-1752 + -5 * -603 + 1263 * -1]) && _0x1831cc[2498 * -1 + 9830 + 6 * -1222] || _0x1fd895[_0x23ccf8(452)][_0x23ccf8(453)] || _0x7ca3f, _0x26059b = semver[_0x23ccf8(454)](_0x393444), _0x43e45d = _0x1fd895[_0x23ccf8(452)][_0x27c36c['BRsOj']] || _0x1fd895[_0x23ccf8(452)][_0x23ccf8(455)], _0x10dd49, _0x58b8bb, _0x5ebe73, _0x5c0c8b, _0x2e3d98, _0x3dee6a, _0x342e94, _0x3c05da, _0x44cb9c, _0x5b6b8e;
    if (!_0x26059b)
        return { 'version': _0x393444 };
    _0x393444 = _0x26059b[_0x23ccf8(456)], _0x10dd49 = _0x27c36c['iWSwL'](_0x393444, semver[_0x23ccf8(454)](_0x7ca3f)[_0x23ccf8(456)]);
    !_0x10dd49 && (_0x4d276e = null);
    _0x4d276e ? _0x5ebe73 = _0x4d276e[_0x23ccf8(457)][_0x23ccf8(458)](/io\.js/, _0x23ccf8(459)) : (_0x58b8bb = _0x27c36c[_0x23ccf8(460)](_0x26059b['major'], 373 * -6 + -6116 + 8355) && _0x27c36c[_0x23ccf8(461)](_0x26059b[_0x23ccf8(462)], -318 * 23 + -868 * 2 + 9054), _0x5ebe73 = _0x58b8bb ? 'iojs' : _0x27c36c[_0x23ccf8(463)]);
    !_0x43e45d && process[_0x23ccf8(464)]['NODEJS_ORG_MIRROR'] && (_0x43e45d = process['env'][_0x23ccf8(465)]);
    _0x43e45d && log['verbose'](_0x27c36c[_0x23ccf8(466)], _0x27c36c[_0x23ccf8(467)], _0x43e45d);
    _0x43e45d ? _0x5c0c8b = _0x43e45d[_0x23ccf8(458)](/\/+$/, '') : _0x5c0c8b = _0x27c36c[_0x23ccf8(468)];
    _0x5c0c8b += _0x27c36c[_0x23ccf8(469)]('/v', _0x393444) + '/';
    if (_0x4d276e && _0x4d276e[_0x23ccf8(470)] && !_0x43e45d)
        _0x2e3d98 = url[_0x23ccf8(471)](_0x4d276e[_0x23ccf8(470)], './'), _0x3dee6a = _0x27c36c[_0x23ccf8(472)](resolveLibUrl, _0x5ebe73, _0x4d276e['libUrl'] || _0x2e3d98 || _0x5c0c8b, _0x27c36c[_0x23ccf8(473)], _0x26059b['major']), _0x342e94 = resolveLibUrl(_0x5ebe73, _0x4d276e['libUrl'] || _0x2e3d98 || _0x5c0c8b, _0x27c36c[_0x23ccf8(474)], _0x26059b[_0x23ccf8(462)]), _0x3c05da = resolveLibUrl(_0x5ebe73, _0x4d276e['libUrl'] || _0x2e3d98 || _0x5c0c8b, _0x27c36c[_0x23ccf8(475)], _0x26059b['major']), _0x44cb9c = _0x4d276e[_0x23ccf8(470)];
    else {
        var _0x314a7e = _0x27c36c[_0x23ccf8(476)][_0x23ccf8(477)]('|'), _0x4d866c = 2244 + 6031 * 1 + -331 * 25;
        while (!![]) {
            switch (_0x314a7e[_0x4d866c++]) {
            case '0':
                _0x44cb9c = url['resolve'](_0x2e3d98, _0x27c36c['UyPPm'](_0x27c36c[_0x23ccf8(478)](_0x27c36c[_0x23ccf8(479)](_0x27c36c['Wjgje'](_0x5ebe73, '-v'), _0x393444), _0x5b6b8e ? _0x27c36c[_0x23ccf8(480)] : ''), _0x27c36c['luJUv']));
                continue;
            case '1':
                _0x3dee6a = resolveLibUrl(_0x5ebe73, _0x2e3d98, _0x27c36c[_0x23ccf8(473)], _0x26059b[_0x23ccf8(462)]);
                continue;
            case '2':
                _0x5b6b8e = semver[_0x23ccf8(481)](_0x26059b, headersTarballRange);
                continue;
            case '3':
                _0x342e94 = _0x27c36c[_0x23ccf8(472)](resolveLibUrl, _0x5ebe73, _0x2e3d98, _0x23ccf8(448), _0x26059b['major']);
                continue;
            case '4':
                _0x3c05da = _0x27c36c[_0x23ccf8(482)](resolveLibUrl, _0x5ebe73, _0x2e3d98, _0x27c36c[_0x23ccf8(475)], _0x26059b['major']);
                continue;
            case '5':
                _0x2e3d98 = _0x5c0c8b;
                continue;
            }
            break;
        }
    }
    return {
        'version': _0x393444,
        'semver': _0x26059b,
        'name': _0x5ebe73,
        'baseUrl': _0x2e3d98,
        'tarballUrl': _0x44cb9c,
        'shasumsUrl': url[_0x23ccf8(471)](_0x2e3d98, _0x23ccf8(483)),
        'versionDir': _0x27c36c[_0x23ccf8(484)](_0x5ebe73 !== _0x27c36c[_0x23ccf8(463)] ? _0x27c36c[_0x23ccf8(485)](_0x5ebe73, '-') : '', _0x393444),
        'ia32': {
            'libUrl': _0x3dee6a,
            'libPath': _0x27c36c[_0x23ccf8(486)](normalizePath, path[_0x23ccf8(487)](url[_0x23ccf8(454)](_0x2e3d98)[_0x23ccf8(488)], url['parse'](_0x3dee6a)[_0x23ccf8(488)]))
        },
        'x64': {
            'libUrl': _0x342e94,
            'libPath': _0x27c36c[_0x23ccf8(489)](normalizePath, path['relative'](url['parse'](_0x2e3d98)[_0x23ccf8(488)], url[_0x23ccf8(454)](_0x342e94)[_0x23ccf8(488)]))
        },
        'arm64': {
            'libUrl': _0x3c05da,
            'libPath': _0x27c36c[_0x23ccf8(489)](normalizePath, path['relative'](url[_0x23ccf8(454)](_0x2e3d98)[_0x23ccf8(488)], url[_0x23ccf8(454)](_0x3c05da)[_0x23ccf8(488)]))
        }
    };
}
function normalizePath(_0x4e630e) {
    var _0x2c9fb7 = _0x4c650d;
    return path[_0x2c9fb7(490)](_0x4e630e)[_0x2c9fb7(458)](/\\/g, '/');
}
function resolveLibUrl(_0x11ce01, _0x48e8eb, _0x5af2b8, _0x156ab0) {
    var _0x32de37 = _0x4c650d, _0x2a4bd9 = {
            'HCsCN': function (_0x3ef767, _0x81ad4a) {
                return _0x3ef767 === _0x81ad4a;
            },
            'QAJrG': function (_0x532084, _0x2eb96d) {
                return _0x532084 >= _0x2eb96d;
            },
            'xMbTj': function (_0x256025, _0x10d93a) {
                return _0x256025 + _0x10d93a;
            },
            'NLanN': function (_0x4e6469, _0x1c1df9) {
                return _0x4e6469 + _0x1c1df9;
            },
            'ovdbe': _0x32de37(491),
            'zATGD': _0x32de37(492),
            'HcStB': function (_0x4d09a1, _0x2915a2) {
                return _0x4d09a1 + _0x2915a2;
            },
            'urVMh': _0x32de37(447),
            'ETfYe': function (_0x24cbee, _0x44fdfa) {
                return _0x24cbee + _0x44fdfa;
            },
            'RwPJC': function (_0x24d5ad, _0x2379f9) {
                return _0x24d5ad === _0x2379f9;
            },
            'EYwGT': function (_0x582674, _0x57069a) {
                return _0x582674 + _0x57069a;
            },
            'qkOKa': _0x32de37(493)
        }, _0x307f47 = url[_0x32de37(471)](_0x48e8eb, './'), _0x38059d = bitsre[_0x32de37(494)](_0x48e8eb) || _0x2a4bd9['HCsCN'](_0x156ab0, 4324 + 1 * -2058 + -2263 * 1) && bitsreV3['test'](_0x48e8eb);
    if (!_0x38059d) {
        if (_0x2a4bd9[_0x32de37(495)](_0x156ab0, 5225 + -2 * -3209 + -11642))
            return url[_0x32de37(471)](_0x307f47, _0x2a4bd9[_0x32de37(496)](_0x2a4bd9[_0x32de37(496)](_0x2a4bd9[_0x32de37(496)](_0x2a4bd9['NLanN'](_0x2a4bd9[_0x32de37(497)], _0x5af2b8), '/'), _0x11ce01), _0x2a4bd9['zATGD']));
        return url[_0x32de37(471)](_0x307f47, _0x2a4bd9[_0x32de37(498)](_0x2a4bd9['HCsCN'](_0x5af2b8, _0x2a4bd9[_0x32de37(499)]) ? '' : _0x2a4bd9[_0x32de37(500)](_0x5af2b8, '/'), _0x11ce01) + _0x2a4bd9[_0x32de37(501)]);
    }
    return _0x48e8eb[_0x32de37(458)](_0x2a4bd9[_0x32de37(502)](_0x156ab0, 14 * -232 + 8847 + -1 * 5596) ? bitsreV3 : bitsre, _0x2a4bd9[_0x32de37(503)](_0x2a4bd9['EYwGT'](_0x2a4bd9['qkOKa'], _0x5af2b8), '/'));
}
module[_0x4c650d(504)] = processRelease;