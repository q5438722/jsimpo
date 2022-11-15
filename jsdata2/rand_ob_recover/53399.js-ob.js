const astUtils = require(_0x5d72c0(136));
function _0x556a(_0x1075e4, _0x4a3331) {
    return _0x556a = function (_0x15e815, _0x5c3f39) {
        _0x15e815 = _0x15e815 - (676 * -8 + -9130 + -14662 * -1);
        let _0x1fb5da = _0x40c2[_0x15e815];
        return _0x1fb5da;
    }, _0x556a(_0x1075e4, _0x4a3331);
}
function isCallOrNonVariadicApply(_0x2b5614) {
    const _0x520ab8 = _0x5d72c0, _0x2526fd = {
            'ljgjI': function (_0x5144c5, _0x3db286) {
                return _0x5144c5 === _0x3db286;
            },
            'ndKGZ': _0x520ab8(137),
            'txShQ': _0x520ab8(138),
            'qDNyS': function (_0x57f6a5, _0xe11962) {
                return _0x57f6a5 === _0xe11962;
            },
            'EZmRx': _0x520ab8(139),
            'diZMC': function (_0x1b93b7, _0x4411c1) {
                return _0x1b93b7 >= _0x4411c1;
            },
            'xqqGD': function (_0x2e2c94, _0x1b5e4a) {
                return _0x2e2c94 === _0x1b5e4a;
            },
            'AXZET': function (_0x1423ca, _0x8917c9) {
                return _0x1423ca === _0x8917c9;
            },
            'jHbrn': function (_0x4693bd, _0x587dab) {
                return _0x4693bd === _0x587dab;
            },
            'ghOuw': _0x520ab8(140)
        }, _0x11f119 = astUtils['skipChainExpression'](_0x2b5614[_0x520ab8(141)]);
    return _0x2526fd[_0x520ab8(142)](_0x11f119[_0x520ab8(143)], _0x2526fd['ndKGZ']) && _0x2526fd[_0x520ab8(142)](_0x11f119['property'][_0x520ab8(143)], _0x2526fd[_0x520ab8(144)]) && _0x2526fd['qDNyS'](_0x11f119['computed'], ![]) && (_0x11f119['property'][_0x520ab8(145)] === _0x2526fd[_0x520ab8(146)] && _0x2526fd[_0x520ab8(147)](_0x2b5614[_0x520ab8(148)][_0x520ab8(149)], 239 * 17 + 3817 + -7879 * 1) || _0x2526fd[_0x520ab8(150)](_0x11f119[_0x520ab8(151)][_0x520ab8(145)], _0x520ab8(152)) && _0x2526fd[_0x520ab8(153)](_0x2b5614[_0x520ab8(148)][_0x520ab8(149)], -2 * 2411 + 1217 + -3607 * -1) && _0x2526fd['jHbrn'](_0x2b5614[_0x520ab8(148)][58 * 44 + -6200 + 3649]['type'], _0x2526fd[_0x520ab8(154)]));
}
function isValidThisArg(_0x26976d, _0x392f4c, _0x37b1d9) {
    const _0x5be3a9 = _0x5d72c0;
    if (!_0x26976d)
        return astUtils[_0x5be3a9(155)](_0x392f4c);
    return astUtils[_0x5be3a9(156)](_0x26976d, _0x392f4c, _0x37b1d9);
}
module['exports'] = {
    'meta': {
        'type': _0x5d72c0(157),
        'docs': {
            'description': _0x5d72c0(158),
            'category': 'Best Practices',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x5d72c0(159) }
    },
    'create'(_0x3f4dec) {
        const _0x5802a6 = _0x5d72c0, _0xb8edaa = {
                'njcTH': function (_0x485a86, _0xec6307) {
                    return _0x485a86(_0xec6307);
                },
                'VzFmP': _0x5802a6(137),
                'wFkdA': function (_0x3bb032, _0x1d6db9, _0x22b938, _0x456ad3) {
                    return _0x3bb032(_0x1d6db9, _0x22b938, _0x456ad3);
                },
                'rfGns': _0x5802a6(160)
            }, _0x664aac = _0x3f4dec[_0x5802a6(161)]();
        return {
            'CallExpression'(_0x48d4bc) {
                const _0x274704 = _0x5802a6;
                if (!_0xb8edaa[_0x274704(162)](isCallOrNonVariadicApply, _0x48d4bc))
                    return;
                const _0x262379 = astUtils[_0x274704(163)](_0x48d4bc[_0x274704(141)]), _0x1856ad = astUtils[_0x274704(163)](_0x262379[_0x274704(164)]), _0x1dca14 = _0x1856ad[_0x274704(143)] === _0xb8edaa[_0x274704(165)] ? _0x1856ad[_0x274704(164)] : null, _0x19e2b9 = _0x48d4bc[_0x274704(148)][8838 + 8953 + 1 * -17791];
                _0xb8edaa[_0x274704(166)](isValidThisArg, _0x1dca14, _0x19e2b9, _0x664aac) && _0x3f4dec['report']({
                    'node': _0x48d4bc,
                    'messageId': _0xb8edaa['rfGns'],
                    'data': { 'name': _0x262379[_0x274704(151)][_0x274704(145)] }
                });
            }
        };
    }
};