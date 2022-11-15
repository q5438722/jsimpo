'use strict';

const _0x40c2 = ['90647BLJAQG', '436770DZFcWU', '2045dkfaMv', '1591YOAUOU', './utils/ast-utils', 'MemberExpression', 'Identifier', 'call', 'ArrayExpression', 'callee', 'ljgjI', 'type', 'txShQ', 'name', 'EZmRx', 'diZMC', 'arguments', 'length', 'xqqGD', 'property', 'apply', 'AXZET', 'ghOuw', 'isNullOrUndefined', 'equalTokens', 'suggestion', 'disallow unnecessary calls to `.call()` and `.apply()`', 'Unnecessary \'.{{name}}()\'.', 'unnecessaryCall', 'getSourceCode', 'njcTH', 'skipChainExpression', 'object', 'VzFmP', 'wFkdA', '791929NgYXJG', '1WgOkZs', '433vFWoNm', '1798kquhvL', '9IXRFpS', '39925JmWlgS', '64567pEcvkU', '4uDrGdm'];
const _0x5d72c0 = _0x556a;

(function (_0x308822, _0x3de89b) {
    const _0x2e80d5 = _0x556a;

    while (true) {
        try {
            const _0x185555 = -parseInt(_0x2e80d5(0x7c)) * parseInt(_0x2e80d5(0x7d)) + parseInt(_0x2e80d5(0x7e)) * -parseInt(_0x2e80d5(0x7f)) + parseInt(_0x2e80d5(0x80)) * -parseInt(_0x2e80d5(0x81)) + -parseInt(_0x2e80d5(0x82)) + parseInt(_0x2e80d5(0x83)) * -parseInt(_0x2e80d5(0x84)) + -parseInt(_0x2e80d5(0x85)) + parseInt(_0x2e80d5(0x86)) * parseInt(_0x2e80d5(0x87));

            if (_0x185555 === _0x3de89b) break;else _0x308822.push(_0x308822.shift());
        } catch (_0x6ec63a) {
            _0x308822.push(_0x308822.shift());
        }
    }
})(_0x40c2, 459882);

const astUtils = require(_0x5d72c0(0x88));

function _0x556a(_0x1075e4, _0x4a3331) {
    return _0x556a = function (_0x15e815, _0x5c3f39) {
        _0x15e815 = _0x15e815 - 124;
        const _0x1fb5da = _0x40c2[_0x15e815];

        return _0x1fb5da;
    }, _0x556a(_0x1075e4, _0x4a3331);
}
function isCallOrNonVariadicApply(_0x2b5614) {
    const _0x520ab8 = _0x5d72c0;
    const _0x2526fd = {
        'ljgjI': function (_0x5144c5, _0x3db286) {
            return _0x5144c5 === _0x3db286;
        },
        'ndKGZ': _0x520ab8(0x89),
        'txShQ': _0x520ab8(0x8a),
        'qDNyS': function (_0x57f6a5, _0xe11962) {
            return _0x57f6a5 === _0xe11962;
        },
        'EZmRx': _0x520ab8(0x8b),
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
        'ghOuw': _0x520ab8(0x8c)
    };

    const _0x11f119 = astUtils.skipChainExpression(_0x2b5614[_0x520ab8(0x8d)]);

    return _0x2526fd[_0x520ab8(0x8e)](_0x11f119[_0x520ab8(0x8f)], _0x2526fd.ndKGZ) && _0x2526fd[_0x520ab8(0x8e)](_0x11f119.property[_0x520ab8(0x8f)], _0x2526fd[_0x520ab8(0x90)]) && _0x2526fd.qDNyS(_0x11f119.computed, false) && (_0x11f119.property[_0x520ab8(0x91)] === _0x2526fd[_0x520ab8(0x92)] && _0x2526fd[_0x520ab8(0x93)](_0x2b5614[_0x520ab8(0x94)][_0x520ab8(0x95)], 1) || _0x2526fd[_0x520ab8(0x96)](_0x11f119[_0x520ab8(0x97)][_0x520ab8(0x91)], _0x520ab8(0x98)) && _0x2526fd[_0x520ab8(0x99)](_0x2b5614[_0x520ab8(0x94)][_0x520ab8(0x95)], 2) && _0x2526fd.jHbrn(_0x2b5614[_0x520ab8(0x94)][1].type, _0x2526fd[_0x520ab8(0x9a)]));
}
function isValidThisArg(_0x26976d, _0x392f4c, _0x37b1d9) {
    const _0x5be3a9 = _0x5d72c0;

    if (!_0x26976d) return astUtils[_0x5be3a9(0x9b)](_0x392f4c);
    return astUtils[_0x5be3a9(0x9c)](_0x26976d, _0x392f4c, _0x37b1d9);
}
module['exports'] = {
    'meta': {
        'type': _0x5d72c0(0x9d),
        'docs': {
            'description': _0x5d72c0(0x9e),
            'category': 'Best Practices',
            'recommended': false,
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x5d72c0(0x9f) }
    },
    'create'(_0x3f4dec) {
        const _0x5802a6 = _0x5d72c0;
        const _0xb8edaa = {
            'njcTH': function (_0x485a86, _0xec6307) {
                return _0x485a86(_0xec6307);
            },
            'VzFmP': _0x5802a6(0x89),
            'wFkdA': function (_0x3bb032, _0x1d6db9, _0x22b938, _0x456ad3) {
                return _0x3bb032(_0x1d6db9, _0x22b938, _0x456ad3);
            },
            'rfGns': _0x5802a6(0xa0)
        };

        const _0x664aac = _0x3f4dec[_0x5802a6(0xa1)]();

        return {
            'CallExpression'(_0x48d4bc) {
                const _0x274704 = _0x5802a6;

                if (!_0xb8edaa[_0x274704(0xa2)](isCallOrNonVariadicApply, _0x48d4bc)) return;

                const _0x262379 = astUtils[_0x274704(0xa3)](_0x48d4bc[_0x274704(0x8d)]);

                const _0x1856ad = astUtils[_0x274704(0xa3)](_0x262379[_0x274704(0xa4)]);

                const _0x1dca14 = _0x1856ad[_0x274704(0x8f)] === _0xb8edaa[_0x274704(0xa5)] ? _0x1856ad[_0x274704(0xa4)] : null;

                const _0x19e2b9 = _0x48d4bc[_0x274704(0x94)][0];

                _0xb8edaa[_0x274704(0xa6)](isValidThisArg, _0x1dca14, _0x19e2b9, _0x664aac) && _0x3f4dec.report({
                    'node': _0x48d4bc,
                    'messageId': _0xb8edaa.rfGns,
                    'data': { 'name': _0x262379[_0x274704(0x97)][_0x274704(0x91)] }
                });
            }
        };
    }
};
