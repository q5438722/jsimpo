'use strict';
const astUtils = require('./utils/ast-utils');
function isCallOrNonVariadicApply(_0x2a4ad9) {
    const _0x52151b = {
            'xXfPE': function (_0x29a603, _0x29baf3) {
                return _0x29a603 === _0x29baf3;
            },
            'TjXdo': 'MemberExpression',
            'bzTJZ': function (_0x25ba5e, _0x1b7f0c) {
                return _0x25ba5e === _0x1b7f0c;
            },
            'espgz': 'Identifier',
            'Wdmdh': function (_0x5e035f, _0x1d0792) {
                return _0x5e035f === _0x1d0792;
            },
            'lKWIe': 'call',
            'QydjA': function (_0x3e2619, _0x20639a) {
                return _0x3e2619 >= _0x20639a;
            },
            'Uuifn': function (_0x1074ec, _0x149453) {
                return _0x1074ec === _0x149453;
            },
            'nnwvM': 'apply',
            'OkOFy': function (_0x2d469c, _0x155512) {
                return _0x2d469c === _0x155512;
            },
            'GErrf': 'ArrayExpression'
        }, _0x38cf92 = astUtils['skipChainExpression'](_0x2a4ad9['callee']);
    return _0x52151b['xXfPE'](_0x38cf92['type'], _0x52151b['TjXdo']) && _0x52151b['bzTJZ'](_0x38cf92['property']['type'], _0x52151b['espgz']) && _0x52151b['Wdmdh'](_0x38cf92['computed'], ![]) && (_0x52151b['Wdmdh'](_0x38cf92['property']['name'], _0x52151b['lKWIe']) && _0x52151b['QydjA'](_0x2a4ad9['arguments']['length'], 0x1) || _0x52151b['Uuifn'](_0x38cf92['property']['name'], _0x52151b['nnwvM']) && _0x52151b['Uuifn'](_0x2a4ad9['arguments']['length'], 0x2) && _0x52151b['OkOFy'](_0x2a4ad9['arguments'][0x1]['type'], _0x52151b['GErrf']));
}
function isValidThisArg(_0x25bd26, _0x38ace1, _0x1544fc) {
    if (!_0x25bd26)
        return astUtils['isNullOrUndefined'](_0x38ace1);
    return astUtils['equalTokens'](_0x25bd26, _0x38ace1, _0x1544fc);
}
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'disallow\x20unnecessary\x20calls\x20to\x20`.call()`\x20and\x20`.apply()`',
            'category': 'Best\x20Practices',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': 'Unnecessary\x20\x27.{{name}}()\x27.' }
    },
    'create'(_0x3884ea) {
        const _0x10befd = {
                'IpDyH': function (_0x7ed2d0, _0x330488) {
                    return _0x7ed2d0(_0x330488);
                },
                'FcAgW': function (_0x38aa52, _0x1d5e24) {
                    return _0x38aa52 === _0x1d5e24;
                },
                'YaLZm': 'MemberExpression',
                'PUZCB': function (_0x17b2dc, _0x5b9905, _0xfacc26, _0x47cfec) {
                    return _0x17b2dc(_0x5b9905, _0xfacc26, _0x47cfec);
                },
                'ncehy': 'unnecessaryCall'
            }, _0x34fc7f = _0x3884ea['getSourceCode']();
        return {
            'CallExpression'(_0x2e8892) {
                if (!_0x10befd['IpDyH'](isCallOrNonVariadicApply, _0x2e8892))
                    return;
                const _0x673b88 = astUtils['skipChainExpression'](_0x2e8892['callee']), _0x40928f = astUtils['skipChainExpression'](_0x673b88['object']), _0x265b7e = _0x10befd['FcAgW'](_0x40928f['type'], _0x10befd['YaLZm']) ? _0x40928f['object'] : null, _0x491bb1 = _0x2e8892['arguments'][0x0];
                _0x10befd['PUZCB'](isValidThisArg, _0x265b7e, _0x491bb1, _0x34fc7f) && _0x3884ea['report']({
                    'node': _0x2e8892,
                    'messageId': _0x10befd['ncehy'],
                    'data': { 'name': _0x673b88['property']['name'] }
                });
            }
        };
    }
};
