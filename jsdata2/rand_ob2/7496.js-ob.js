const _0x4441 = [
    'prompts',
    'has-changes',
    '$apollo',
    'mutate',
    'stringify',
    'queries',
    'variables',
    'call',
    'readQuery',
    'writeQuery',
    '849umiIFm',
    '1397xeFmUl',
    '1074399rpqyQL',
    '859236naBLOE',
    '27114HValgF',
    '16SboqEV',
    '2083LWBckA',
    '257MVtran',
    '1lOzUbT',
    '211863zlUpeW',
    '2751743mdKtkM',
    'visiblePrompts',
    'filter',
    'error',
    'value',
    'length',
    'find',
    'valueChanged'
];
function _0x36fa(_0x202258, _0xf6eb1f) {
    return _0x36fa = function (_0x444143, _0x36fac5) {
        _0x444143 = _0x444143 - 0xad;
        let _0x50f9c4 = _0x4441[_0x444143];
        return _0x50f9c4;
    }, _0x36fa(_0x202258, _0xf6eb1f);
}
(function (_0x2ad785, _0x4814f1) {
    const _0x11f651 = _0x36fa;
    while (!![]) {
        try {
            const _0x584ac6 = parseInt(_0x11f651(0xad)) * -parseInt(_0x11f651(0xae)) + -parseInt(_0x11f651(0xaf)) + -parseInt(_0x11f651(0xb0)) + parseInt(_0x11f651(0xb1)) * parseInt(_0x11f651(0xb2)) + parseInt(_0x11f651(0xb3)) * parseInt(_0x11f651(0xb4)) + parseInt(_0x11f651(0xb5)) * parseInt(_0x11f651(0xb6)) + parseInt(_0x11f651(0xb7));
            if (_0x584ac6 === _0x4814f1)
                break;
            else
                _0x2ad785['push'](_0x2ad785['shift']());
        } catch (_0x1a57ff) {
            _0x2ad785['push'](_0x2ad785['shift']());
        }
    }
}(_0x4441, 0xc6811));
import _0x5b8f17 from '@/graphql/prompt/promptAnswer.gql';
export default function ({field, query, variables = null, updateQuery = null, update = null}) {
    return {
        'computed': {
            'configurationValid'() {
                const _0xe3e03 = _0x36fa;
                return this[_0xe3e03(0xb8)][_0xe3e03(0xb9)](p => p[_0xe3e03(0xba)] || p[_0xe3e03(0xbb)] === null || JSON['parse'](p[_0xe3e03(0xbb)]) === '')[_0xe3e03(0xbc)] === 0x0;
            },
            'hasPromptsChanged'() {
                const _0x39de7f = _0x36fa;
                return !!this['visiblePrompts'][_0x39de7f(0xbd)](prompt => prompt[_0x39de7f(0xbe)]);
            },
            'visiblePrompts'() {
                const _0x51e8e6 = _0x36fa;
                if (!this[field])
                    return [];
                return this[field][_0x51e8e6(0xbf)]['filter'](p => p['visible']);
            }
        },
        'watch': {
            'hasPromptsChanged': {
                'handler'(value) {
                    const _0x275273 = _0x36fa;
                    this['$emit'](_0x275273(0xc0), value);
                },
                'immediate': !![]
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                const _0x574e6b = _0x36fa;
                await this[_0x574e6b(0xc1)][_0x574e6b(0xc2)]({
                    'mutation': _0x5b8f17,
                    'variables': {
                        'input': {
                            'id': prompt['id'],
                            'value': JSON[_0x574e6b(0xc3)](value)
                        }
                    },
                    'update': (store, {
                        data: {promptAnswer: promptAnswer}
                    }) => {
                        const _0x18c18f = _0x574e6b;
                        if (update) {
                            update['call'](this, store, promptAnswer);
                            return;
                        }
                        let vars = variables || this['$apollo'][_0x18c18f(0xc4)][field]['options'][_0x18c18f(0xc5)] || undefined;
                        typeof vars === 'function' && (vars = vars[_0x18c18f(0xc6)](this));
                        const data = store[_0x18c18f(0xc7)]({
                            'query': query,
                            'variables': vars
                        });
                        updateQuery ? updateQuery[_0x18c18f(0xc6)](this, data, promptAnswer) : data[field][_0x18c18f(0xbf)] = promptAnswer, store[_0x18c18f(0xc8)]({
                            'query': query,
                            'variables': vars,
                            'data': data
                        });
                    }
                });
            }
        }
    };
}
