'use strict';
module['exports'] = {
    'meta': {
        'type': 'layout',
        'docs': {
            'description': 'require or disallow Unicode byte order mark (BOM)',
            'category': 'Stylistic Issues',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/unicode-bom'
        },
        'fixable': 'whitespace',
        'schema': [{
                'enum': [
                    'always',
                    'never'
                ]
            }],
        'messages': {
            'expected': 'Expected Unicode BOM (Byte Order Mark).',
            'unexpected': 'Unexpected Unicode BOM (Byte Order Mark).'
        }
    },
    'create'(_0x1524ef) {
        return {
            'Program': function checkUnicodeBOM(_0x12e0c8) {
                const _0x44b2d2 = _0x1524ef['getSourceCode'](), _0x4e1cc2 = {}, _0x46ec26 = _0x1524ef['options'][0] || 'never';
                if (!_0x44b2d2['hasBOM'] && _0x46ec26 === 'always') {
                    _0x1524ef['report']({
                        'node': _0x12e0c8,
                        'loc': _0x4e1cc2,
                        'messageId': 'expected',
                        'fix'(_0x5ee14a) {
                            return _0x5ee14a['insertTextBeforeRange']([
                                0,
                                1
                            ], '\uFEFF');
                        }
                    });
                } else if (_0x44b2d2['hasBOM'] && _0x46ec26 === 'never') {
                    _0x1524ef['report']({
                        'node': _0x12e0c8,
                        'loc': _0x4e1cc2,
                        'messageId': 'unexpected',
                        'fix'(_0x3eca8a) {
                            return _0x3eca8a['removeRange']([
                                -1,
                                0
                            ]);
                        }
                    });
                }
            }
        };
    }
};