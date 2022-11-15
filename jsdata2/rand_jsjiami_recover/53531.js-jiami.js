'use strict';
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'enforce a maximum depth that blocks can be nested',
            'category': 'Stylistic Issues',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/max-depth'
        },
        'schema': [{
                'oneOf': [
                    {
                        'type': 'integer',
                        'minimum': 0
                    },
                    {
                        'type': 'object',
                        'properties': {
                            'maximum': {
                                'type': 'integer',
                                'minimum': 0
                            },
                            'max': {
                                'type': 'integer',
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    }
                ]
            }],
        'messages': { 'tooDeeply': 'Blocks are nested too deeply ({{depth}}). Maximum allowed is {{maxDepth}}.' }
    },
    'create'(_0x93f3c4) {
        const _0xa3b23 = [], _0x312a08 = _0x93f3c4['options'][0];
        let _0x428146 = 4;
        if (typeof _0x312a08 === 'object' && (Object['prototype']['hasOwnProperty']['call'](_0x312a08, 'maximum') || Object['prototype']['hasOwnProperty']['call'](_0x312a08, 'max'))) {
            _0x428146 = _0x312a08['maximum'] || _0x312a08['max'];
        }
        if (typeof _0x312a08 === 'number') {
            if ('vACjl' === 'vACjl') {
                _0x428146 = _0x312a08;
            } else {
                _0xa3b23['pop']();
            }
        }
        function _0x17d596() {
            if ('gawKx' !== 'gawKx') {
                if (node['parent']['type'] !== 'IfStatement') {
                    _0x226363(node);
                }
            } else {
                _0xa3b23['push'](0);
            }
        }
        function _0x2f667f() {
            if ('ICEAQ' !== 'ICEAQ') {
                _0x428146 = _0x312a08['maximum'] || _0x312a08['max'];
            } else {
                _0xa3b23['pop']();
            }
        }
        function _0x226363(_0x3e6246) {
            if ('WatuA' !== 'WatuA') {
                const _0x3a89c9 = ++_0xa3b23[_0xa3b23['length'] - 1];
                if (_0x3a89c9 > _0x428146) {
                    _0x93f3c4['report']({
                        'node': _0x3e6246,
                        'messageId': 'tooDeeply',
                        'data': {
                            'depth': _0x3a89c9,
                            'maxDepth': _0x428146
                        }
                    });
                }
            } else {
                const _0x59e985 = ++_0xa3b23[_0xa3b23['length'] - 1];
                if (_0x59e985 > _0x428146) {
                    _0x93f3c4['report']({
                        'node': _0x3e6246,
                        'messageId': 'tooDeeply',
                        'data': {
                            'depth': _0x59e985,
                            'maxDepth': _0x428146
                        }
                    });
                }
            }
        }
        function _0x2749a7() {
            if ('uDSCJ' !== 'uDSCJ') {
                _0x226363(node);
            } else {
                _0xa3b23[_0xa3b23['length'] - 1]--;
            }
        }
        return {
            'Program': _0x17d596,
            'FunctionDeclaration': _0x17d596,
            'FunctionExpression': _0x17d596,
            'ArrowFunctionExpression': _0x17d596,
            'IfStatement'(_0x27b0fb) {
                if ('HrDkS' !== 'btWAj') {
                    if (_0x27b0fb['parent']['type'] !== 'IfStatement') {
                        _0x226363(_0x27b0fb);
                    }
                } else {
                    _0x428146 = _0x312a08;
                }
            },
            'SwitchStatement': _0x226363,
            'TryStatement': _0x226363,
            'DoWhileStatement': _0x226363,
            'WhileStatement': _0x226363,
            'WithStatement': _0x226363,
            'ForStatement': _0x226363,
            'ForInStatement': _0x226363,
            'ForOfStatement': _0x226363,
            'IfStatement:exit': _0x2749a7,
            'SwitchStatement:exit': _0x2749a7,
            'TryStatement:exit': _0x2749a7,
            'DoWhileStatement:exit': _0x2749a7,
            'WhileStatement:exit': _0x2749a7,
            'WithStatement:exit': _0x2749a7,
            'ForStatement:exit': _0x2749a7,
            'ForInStatement:exit': _0x2749a7,
            'ForOfStatement:exit': _0x2749a7,
            'FunctionDeclaration:exit': _0x2f667f,
            'FunctionExpression:exit': _0x2f667f,
            'ArrowFunctionExpression:exit': _0x2f667f,
            'Program:exit': _0x2f667f
        };
    }
};