'use strict';
function isForStatementUpdate(_0x44082b) {
    const _0x23f42e = _0x44082b['parent'];
    return _0x23f42e['type'] === 'ForStatement' && _0x23f42e['update'] === _0x44082b;
}
function isForLoopAfterthought(_0x5dd3eb) {
    const _0x3ce6c8 = _0x5dd3eb['parent'];
    if (_0x3ce6c8['type'] === 'SequenceExpression') {
        return isForLoopAfterthought(_0x3ce6c8);
    }
    return isForStatementUpdate(_0x5dd3eb);
}
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'disallow the unary operators `++` and `--`',
            'category': 'Stylistic Issues',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-plusplus'
        },
        'schema': [{
                'type': 'object',
                'properties': {
                    'allowForLoopAfterthoughts': {
                        'type': 'boolean',
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'unexpectedUnaryOp': 'Unary operator \'{{operator}}\' used.' }
    },
    'create'(_0x1b8b66) {
        const _0x2792dd = _0x1b8b66['options'][0];
        let _0x4f053a = ![];
        if (typeof _0x2792dd === 'object') {
            _0x4f053a = _0x2792dd['allowForLoopAfterthoughts'] === !![];
        }
        return {
            'UpdateExpression'(_0x516b1a) {
                if (_0x4f053a && isForLoopAfterthought(_0x516b1a)) {
                    return;
                }
                _0x1b8b66['report']({
                    'node': _0x516b1a,
                    'messageId': 'unexpectedUnaryOp',
                    'data': { 'operator': _0x516b1a['operator'] }
                });
            }
        };
    }
};