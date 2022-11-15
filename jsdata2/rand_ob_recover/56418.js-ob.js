function _0x3a07(_0x11f51d, _0xfe123d) {
    return _0x3a07 = function (_0x33e674, _0x35bad2) {
        _0x33e674 = _0x33e674 - (-6092 * 1 + 2 * -1637 + 9605);
        let _0x5e70c3 = _0x55ca[_0x33e674];
        return _0x5e70c3;
    }, _0x3a07(_0x11f51d, _0xfe123d);
}
const common = require(_0x3b14cc(251));
if (!common[_0x3b14cc(252)])
    common[_0x3b14cc(253)](_0x3b14cc(254));
const assert = require('assert'), tls = require('tls'), fixtures = require(_0x3b14cc(255)), options = {
        'key': fixtures[_0x3b14cc(256)](_0x3b14cc(257)),
        'cert': fixtures[_0x3b14cc(256)](_0x3b14cc(258))
    }, server = tls[_0x3b14cc(259)](options, function (_0x506dd0) {
        const _0xec3f6e = _0x3b14cc;
        _0x506dd0[_0xec3f6e(260)](_0x506dd0), _0x506dd0['on'](_0xec3f6e(261), () => _0x506dd0[_0xec3f6e(261)]());
    })[_0x3b14cc(262)](9195 * -1 + -8965 + 40 * 454, common[_0x3b14cc(263)](function () {
        const _0x348cdc = _0x3b14cc, _0xea4b58 = {
                'thYRm': function (_0x541dea) {
                    return _0x541dea();
                }
            };
        _0xea4b58[_0x348cdc(264)](unauthorized);
    }));
function unauthorized() {
    const _0x1e287f = _0x3b14cc, _0x228668 = {
            'iVwns': function (_0x558139, _0x424b10, _0x19c4bd) {
                return _0x558139(_0x424b10, _0x19c4bd);
            },
            'ybHeE': function (_0x253d7c, _0x39cbff) {
                return _0x253d7c(_0x39cbff);
            },
            'AkuSd': _0x1e287f(265),
            'CIomp': _0x1e287f(261),
            'HLlOr': _0x1e287f(266),
            'LlDZE': _0x1e287f(267),
            'SPRtL': _0x1e287f(268)
        };
    console[_0x1e287f(269)](_0x228668['HLlOr']);
    const _0xb51c2f = tls[_0x1e287f(270)]({
        'port': server[_0x1e287f(271)]()[_0x1e287f(272)],
        'servername': _0x1e287f(273),
        'rejectUnauthorized': ![]
    }, common[_0x1e287f(263)](function () {
        const _0x1afb42 = _0x1e287f, _0x143b8c = {
                'tioIX': function (_0x35f0ef, _0x244e7e, _0x17f459) {
                    return _0x228668['iVwns'](_0x35f0ef, _0x244e7e, _0x17f459);
                }
            };
        let _0x15c96a;
        _0x228668[_0x1afb42(274)](assert, !_0xb51c2f[_0x1afb42(275)]), _0xb51c2f['on'](_0x228668[_0x1afb42(276)], common[_0x1afb42(263)](_0x120626 => {
            const _0x112fd5 = _0x1afb42;
            assert[_0x112fd5(277)](_0x120626[_0x112fd5(278)](), 'ok'), _0x15c96a = _0x120626;
        })), _0xb51c2f['on'](_0x228668['CIomp'], common['mustCall'](() => {
            const _0x12ff01 = _0x1afb42;
            _0x143b8c[_0x12ff01(279)](assert, _0x15c96a, _0x12ff01(280));
        })), _0xb51c2f['on'](_0x228668[_0x1afb42(281)], () => rejectUnauthorized());
    }));
    _0xb51c2f[_0x1e287f(282)](_0x228668['LlDZE'], common[_0x1e287f(263)](() => {
    })), _0xb51c2f['on'](_0x228668['SPRtL'], common[_0x1e287f(283)]()), _0xb51c2f['end']('ok');
}
function rejectUnauthorized() {
    const _0x3f6359 = _0x3b14cc, _0x29d9f5 = {
            'WUDlB': function (_0x2037d5) {
                return _0x2037d5();
            },
            'BxHnk': 'localhost',
            'MmUXw': _0x3f6359(268)
        };
    console[_0x3f6359(269)](_0x3f6359(284));
    const _0x229bea = tls['connect'](server['address']()[_0x3f6359(272)], { 'servername': _0x29d9f5[_0x3f6359(285)] }, common[_0x3f6359(283)]());
    _0x229bea['on'](_0x3f6359(265), common[_0x3f6359(283)]()), _0x229bea['on'](_0x29d9f5[_0x3f6359(286)], common[_0x3f6359(263)](function (_0xd4a1ed) {
        const _0x357517 = _0x3f6359;
        _0x29d9f5[_0x357517(287)](rejectUnauthorizedUndefined);
    })), _0x229bea[_0x3f6359(261)]('ng');
}
function rejectUnauthorizedUndefined() {
    const _0x27cb04 = _0x3b14cc, _0x63b245 = {
            'RJcKs': function (_0x62e519) {
                return _0x62e519();
            },
            'OqlgL': 'reject unauthorized undefined',
            'FaiXl': _0x27cb04(273),
            'cVQWd': 'data',
            'dcJya': 'error'
        };
    console[_0x27cb04(269)](_0x63b245[_0x27cb04(288)]);
    const _0x4f7e7c = tls[_0x27cb04(270)](server[_0x27cb04(271)]()[_0x27cb04(272)], {
        'servername': _0x63b245[_0x27cb04(289)],
        'rejectUnauthorized': undefined
    }, common[_0x27cb04(283)]());
    _0x4f7e7c['on'](_0x63b245[_0x27cb04(290)], common['mustNotCall']()), _0x4f7e7c['on'](_0x63b245[_0x27cb04(291)], common[_0x27cb04(263)](function (_0x2410ad) {
        _0x63b245['RJcKs'](authorized);
    })), _0x4f7e7c[_0x27cb04(261)]('ng');
}
function authorized() {
    const _0x15ce4f = _0x3b14cc, _0x59484f = {
            'eFnIj': _0x15ce4f(292),
            'YunsO': function (_0x233996, _0xd1ae43) {
                return _0x233996(_0xd1ae43);
            },
            'eKHDq': _0x15ce4f(265),
            'syKeX': _0x15ce4f(261),
            'WikKo': _0x15ce4f(293),
            'VMwWA': _0x15ce4f(273),
            'QgCdA': _0x15ce4f(268)
        };
    console['log'](_0x59484f[_0x15ce4f(294)]);
    const _0x2bbafa = tls[_0x15ce4f(270)](server['address']()[_0x15ce4f(272)], {
        'ca': [fixtures[_0x15ce4f(256)](_0x15ce4f(258))],
        'servername': _0x59484f[_0x15ce4f(295)]
    }, common[_0x15ce4f(263)](function () {
        const _0x3872de = _0x15ce4f;
        console[_0x3872de(269)](_0x59484f[_0x3872de(296)]), _0x59484f[_0x3872de(297)](assert, _0x2bbafa['authorized']), _0x2bbafa['on'](_0x59484f[_0x3872de(298)], common[_0x3872de(263)](_0x5df678 => {
            const _0x1dac2d = _0x3872de;
            assert[_0x1dac2d(277)](_0x5df678['toString'](), 'ok');
        })), _0x2bbafa['on'](_0x59484f['syKeX'], () => server[_0x3872de(299)]());
    }));
    _0x2bbafa['on'](_0x59484f['QgCdA'], common[_0x15ce4f(283)]()), _0x2bbafa[_0x15ce4f(261)]('ok');
}