'use strict';
const astUtils = require('./utils/ast-utils');
const SIDE_EFFECT_FREE_NODE_TYPES = new Set([
    'Literal',
    'Identifier',
    'ThisExpression',
    'FunctionExpression'
]);
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'disallow unnecessary calls to `.bind()`',
            'category': 'Best Practices',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-extra-bind'
        },
        'schema': [],
        'fixable': 'code',
        'messages': { 'unexpected': 'The function binding is unnecessary.' }
    },
    'create'(_0x292d11) {
        const _0x60367a = _0x292d11['getSourceCode']();
        let _0x1668e5 = null;
        function _0x274825(_0x568ccf) {
            return SIDE_EFFECT_FREE_NODE_TYPES['has'](_0x568ccf['type']);
        }
        function _0xf95886(_0x18698c) {
            if ('KJWPK' !== 'GfEUO') {
                const _0xc8d356 = _0x18698c['parent'];
                const _0x4956db = _0xc8d356['parent']['type'] === 'ChainExpression' ? _0xc8d356['parent']['parent'] : _0xc8d356['parent'];
                _0x292d11['report']({
                    'node': _0x4956db,
                    'messageId': 'unexpected',
                    'loc': _0xc8d356['property']['loc'],
                    'fix'(_0x519bd1) {
                        if (!_0x274825(_0x4956db['arguments'][0])) {
                            return null;
                        }
                        const _0x5cc09e = [
                            [
                                _0x60367a['getTokenAfter'](_0xc8d356['object'], astUtils['isNotClosingParenToken']),
                                _0x60367a['getLastToken'](_0xc8d356)
                            ],
                            [
                                _0x60367a['getTokenAfter'](_0xc8d356, astUtils['isNotClosingParenToken']),
                                _0x60367a['getLastToken'](_0x4956db)
                            ]
                        ];
                        const _0xc94c3d = _0x5cc09e[0][0];
                        const _0x14d45d = _0x5cc09e[1][1];
                        if (_0x60367a['commentsExistBetween'](_0xc94c3d, _0x14d45d)) {
                            if ('ORvWd' !== 'ORvWd') {
                                _0x1668e5['thisFound'] = !![];
                            } else {
                                return null;
                            }
                        }
                        return _0x5cc09e['map'](([_0x498e7d, _0xca580e]) => _0x519bd1['removeRange']([
                            _0x498e7d['range'][0],
                            _0xca580e['range'][1]
                        ]));
                    }
                });
            } else {
                return SIDE_EFFECT_FREE_NODE_TYPES['has'](_0x18698c['type']);
            }
        }
        function _0x249746(_0x2f44cc) {
            if ('TwJJJ' !== 'pufQr') {
                if (!astUtils['isSpecificMemberAccess'](_0x2f44cc['parent'], null, 'bind')) {
                    return ![];
                }
                const _0x534473 = _0x2f44cc['parent']['parent']['type'] === 'ChainExpression' ? _0x2f44cc['parent']['parent'] : _0x2f44cc['parent'];
                return _0x534473['parent']['type'] === 'CallExpression' && _0x534473['parent']['callee'] === _0x534473 && _0x534473['parent']['arguments']['length'] === 1 && _0x534473['parent']['arguments'][0]['type'] !== 'SpreadElement';
            } else {
                _0xf95886(_0x2f44cc);
            }
        }
        function _0x1a0e75(_0x38bff1) {
            if ('VKlFk' !== 'qPyum') {
                _0x1668e5 = {
                    'isBound': _0x249746(_0x38bff1),
                    'thisFound': ![],
                    'upper': _0x1668e5
                };
            } else {
                _0x1668e5 = {
                    'isBound': _0x249746(_0x38bff1),
                    'thisFound': ![],
                    'upper': _0x1668e5
                };
            }
        }
        function _0x39eaa0(_0x3a2c9f) {
            if ('uEtOe' === 'uEtOe') {
                if (_0x1668e5['isBound'] && !_0x1668e5['thisFound']) {
                    _0xf95886(_0x3a2c9f);
                }
                _0x1668e5 = _0x1668e5['upper'];
            } else {
                if (_0x1668e5) {
                    _0x1668e5['thisFound'] = !![];
                }
            }
        }
        function _0x2bafbe(_0x477a01) {
            if (_0x249746(_0x477a01)) {
                _0xf95886(_0x477a01);
            }
        }
        function _0x560528() {
            if (_0x1668e5) {
                _0x1668e5['thisFound'] = !![];
            }
        }
        return {
            'ArrowFunctionExpression:exit': _0x2bafbe,
            'FunctionDeclaration': _0x1a0e75,
            'FunctionDeclaration:exit': _0x39eaa0,
            'FunctionExpression': _0x1a0e75,
            'FunctionExpression:exit': _0x39eaa0,
            'ThisExpression': _0x560528
        };
    }
};