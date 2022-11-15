'use strict';
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'require `Reflect` methods where applicable',
            'category': 'ECMAScript 6',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/prefer-reflect'
        },
        'deprecated': !![],
        'replacedBy': [],
        'schema': [{
                'type': 'object',
                'properties': {
                    'exceptions': {
                        'type': 'array',
                        'items': {
                            'enum': [
                                'apply',
                                'call',
                                'delete',
                                'defineProperty',
                                'getOwnPropertyDescriptor',
                                'getPrototypeOf',
                                'setPrototypeOf',
                                'isExtensible',
                                'getOwnPropertyNames',
                                'preventExtensions'
                            ]
                        },
                        'uniqueItems': !![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'preferReflect': 'Avoid using {{existing}}, instead use {{substitute}}.' }
    },
    'create'(_0x366a15) {
        const _0x385d63 = {
            'getOwnPropertyDescriptor': 'Object.getOwnPropertyDescriptor',
            'setPrototypeOf': 'Object.setPrototypeOf'
        };
        const _0x13d458 = {
            'apply': 'Reflect.apply',
            'getOwnPropertyDescriptor': 'Reflect.getOwnPropertyDescriptor',
            'getPrototypeOf': 'Reflect.getPrototypeOf',
            'setPrototypeOf': 'Reflect.setPrototypeOf',
            'getOwnPropertyNames': 'Reflect.getOwnPropertyNames',
            'preventExtensions': 'Reflect.preventExtensions'
        };
        const _0x29459e = (_0x366a15['options'][0] || {})['exceptions'] || [];
        function _0x2f2c10(_0x505647, _0x4ed5a6, _0x12d128) {
            if ('IAOhM' === 'DICfF') {
                const _0x557251 = (_0x505647['callee']['property'] || {})['name'];
                const _0x3522f6 = (_0x505647['callee']['object'] || {})['name'] === 'Reflect';
                const _0x57d8fd = Object['prototype']['hasOwnProperty']['call'](_0x13d458, _0x557251);
                const _0x4863f7 = _0x29459e['indexOf'](_0x557251) !== -1;
                if (_0x57d8fd && !_0x3522f6 && !_0x4863f7) {
                    _0x2f2c10(_0x505647, _0x385d63[_0x557251], _0x13d458[_0x557251]);
                }
            } else {
                _0x366a15['report']({
                    'node': _0x505647,
                    'messageId': 'preferReflect',
                    'data': {
                        'existing': _0x4ed5a6,
                        'substitute': _0x12d128
                    }
                });
            }
        }
        return {
            'CallExpression'(_0x351a7e) {
                const _0xdec192 = (_0x351a7e['callee']['property'] || {})['name'];
                const _0x5cfa8f = (_0x351a7e['callee']['object'] || {})['name'] === 'Reflect';
                const _0xbadb4e = Object['prototype']['hasOwnProperty']['call'](_0x13d458, _0xdec192);
                const _0x33e690 = _0x29459e['indexOf'](_0xdec192) !== -1;
                if (_0xbadb4e && !_0x5cfa8f && !_0x33e690) {
                    if ('AAEyz' === 'kDQvH') {
                        const _0x1984bf = _0x351a7e['operator'] === 'delete';
                        const _0x5c2df9 = _0x351a7e['argument']['type'] === 'Identifier';
                        const _0x232ead = _0x29459e['indexOf']('delete') !== -1;
                        if (_0x1984bf && !_0x5c2df9 && !_0x232ead) {
                            _0x2f2c10(_0x351a7e, 'the delete keyword', 'Reflect.deleteProperty');
                        }
                    } else {
                        _0x2f2c10(_0x351a7e, _0x385d63[_0xdec192], _0x13d458[_0xdec192]);
                    }
                }
            },
            'UnaryExpression'(_0x3da9a4) {
                var _0x10ac44 = {
                    'mCPNJ': 'the delete keyword',
                    'VWadw': 'Reflect.deleteProperty'
                };
                if ('hFVYv' === 'DmjRI') {
                    _0x2f2c10(_0x3da9a4, _0x10ac44['mCPNJ'], _0x10ac44['VWadw']);
                } else {
                    const _0x50c59c = _0x3da9a4['operator'] === 'delete';
                    const _0x474495 = _0x3da9a4['argument']['type'] === 'Identifier';
                    const _0x57f161 = _0x29459e['indexOf']('delete') !== -1;
                    if (_0x50c59c && !_0x474495 && !_0x57f161) {
                        _0x2f2c10(_0x3da9a4, 'the delete keyword', 'Reflect.deleteProperty');
                    }
                }
            }
        };
    }
};