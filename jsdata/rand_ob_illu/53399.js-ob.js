'use strict';

const _0x5ab8 = ['190578VXWwII', '8RsADMT', '33237lGcLcv', '912569iyonlc', '1mcyHwL', '200594stYUjg', '1274113HEKAeb', './utils/ast-utils', 'MemberExpression', 'Identifier', 'call', 'apply', 'callee', 'type', 'mFEhc', 'computed', 'IbWEj', 'property', 'cGRZQ', 'dnFrS', 'length', 'HwjAC', 'arguments', 'QrnGX', 'equalTokens', 'exports', 'suggestion', 'https://eslint.org/docs/rules/no-useless-call', 'Unnecessary \'.{{name}}()\'.', 'unnecessaryCall', 'getSourceCode', 'kfrib', 'skipChainExpression', 'object', 'report', 'name', '670613xZZFaA', '777544amfrBt'];
const _0x508378 = _0x216f;

(function (_0x23e5e, _0x2b7845) {
    const _0x38bfc1 = _0x216f;

    while (true) {
        try {
            const _0x153b4c = -parseInt(_0x38bfc1(0x1d2)) + -parseInt(_0x38bfc1(0x1d3)) + parseInt(_0x38bfc1(0x1d4)) + parseInt(_0x38bfc1(0x1d5)) * -parseInt(_0x38bfc1(0x1d6)) + parseInt(_0x38bfc1(0x1d7)) * parseInt(_0x38bfc1(0x1d8)) + -parseInt(_0x38bfc1(0x1d9)) + parseInt(_0x38bfc1(0x1da));

            if (_0x153b4c === _0x2b7845) break;else _0x23e5e.push(_0x23e5e.shift());
        } catch (_0x46b461) {
            _0x23e5e.push(_0x23e5e.shift());
        }
    }
})(_0x5ab8, 462613);

const astUtils = require(_0x508378(0x1db));

function _0x216f(_0x494fcf, _0x279c9a) {
    return _0x216f = function (_0x266e42, _0x14670d) {
        _0x266e42 = _0x266e42 - 466;
        const _0x1705ec = _0x5ab8[_0x266e42];

        return _0x1705ec;
    }, _0x216f(_0x494fcf, _0x279c9a);
}
function isCallOrNonVariadicApply(_0x28dfc8) {
    const _0x17f851 = _0x508378;
    const _0x252e03 = {
        'IbWEj': function (_0x46dc7b, _0x109e26) {
            return _0x46dc7b === _0x109e26;
        },
        'KPHiB': _0x17f851(0x1dc),
        'mFEhc': _0x17f851(0x1dd),
        'cGRZQ': _0x17f851(0x1de),
        'dnFrS': function (_0x113476, _0x506d4d) {
            return _0x113476 >= _0x506d4d;
        },
        'QrnGX': function (_0x129cc0, _0x3f1a9b) {
            return _0x129cc0 === _0x3f1a9b;
        },
        'HwjAC': _0x17f851(0x1df)
    };

    const _0xb9ae3d = astUtils.skipChainExpression(_0x28dfc8[_0x17f851(0x1e0)]);

    return _0x252e03.IbWEj(_0xb9ae3d[_0x17f851(0x1e1)], _0x252e03.KPHiB) && _0x252e03.IbWEj(_0xb9ae3d.property[_0x17f851(0x1e1)], _0x252e03[_0x17f851(0x1e2)]) && _0x252e03.IbWEj(_0xb9ae3d[_0x17f851(0x1e3)], false) && (_0x252e03[_0x17f851(0x1e4)](_0xb9ae3d[_0x17f851(0x1e5)].name, _0x252e03[_0x17f851(0x1e6)]) && _0x252e03[_0x17f851(0x1e7)](_0x28dfc8.arguments[_0x17f851(0x1e8)], 1) || _0x252e03.QrnGX(_0xb9ae3d.property.name, _0x252e03[_0x17f851(0x1e9)]) && _0x28dfc8[_0x17f851(0x1ea)].length === 2 && _0x252e03[_0x17f851(0x1eb)](_0x28dfc8.arguments[1].type, 'ArrayExpression'));
}
function isValidThisArg(_0x196b8a, _0x12f18c, _0x3b7ca6) {
    const _0x2e6d49 = _0x508378;

    if (!_0x196b8a) return astUtils.isNullOrUndefined(_0x12f18c);
    return astUtils[_0x2e6d49(0x1ec)](_0x196b8a, _0x12f18c, _0x3b7ca6);
}
module[_0x508378(0x1ed)] = {
    'meta': {
        'type': _0x508378(0x1ee),
        'docs': {
            'description': 'disallow unnecessary calls to `.call()` and `.apply()`',
            'category': 'Best Practices',
            'recommended': false,
            'url': _0x508378(0x1ef)
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x508378(0x1f0) }
    },
    'create'(_0x53b562) {
        const _0xda1a33 = _0x508378;
        const _0x555b3c = {
            'kfrib': function (_0x3208f1, _0x21814a) {
                return _0x3208f1(_0x21814a);
            },
            'tkUYu': function (_0x11d8d8, _0x1f892c) {
                return _0x11d8d8 === _0x1f892c;
            },
            'MDWoX': _0xda1a33(0x1f1)
        };

        const _0x2106d4 = _0x53b562[_0xda1a33(0x1f2)]();

        return {
            'CallExpression'(_0x38123c) {
                const _0x54f552 = _0xda1a33;

                if (!_0x555b3c[_0x54f552(0x1f3)](isCallOrNonVariadicApply, _0x38123c)) return;

                const _0x3fc6df = astUtils[_0x54f552(0x1f4)](_0x38123c[_0x54f552(0x1e0)]);

                const _0x3ab99c = astUtils[_0x54f552(0x1f4)](_0x3fc6df[_0x54f552(0x1f5)]);

                const _0x17edab = _0x555b3c.tkUYu(_0x3ab99c[_0x54f552(0x1e1)], _0x54f552(0x1dc)) ? _0x3ab99c[_0x54f552(0x1f5)] : null;

                const _0x51eee9 = _0x38123c[_0x54f552(0x1ea)][0];

                isValidThisArg(_0x17edab, _0x51eee9, _0x2106d4) && _0x53b562[_0x54f552(0x1f6)]({
                    'node': _0x38123c,
                    'messageId': _0x555b3c.MDWoX,
                    'data': { 'name': _0x3fc6df.property[_0x54f552(0x1f7)] }
                });
            }
        };
    }
};
