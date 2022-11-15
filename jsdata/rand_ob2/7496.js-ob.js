const _0x570b = [
    '38QcjDoz',
    'visiblePrompts',
    'filter',
    'error',
    'value',
    'parse',
    'length',
    'prompts',
    'visible',
    '$emit',
    'has-changes',
    '$apollo',
    'mutate',
    'options',
    'variables',
    'function',
    'call',
    'readQuery',
    '2677tDdyJX',
    '505tsejOg',
    '37vUCjzH',
    '6349jcvGwL',
    '484610XtpRWq',
    '38120PShbXV',
    '1673406kdrhDA',
    '809LSBCfv',
    '1553WGtpVt',
    '46985aTCVKm'
];
(function (_0x2a3e0f, _0x11fe14) {
    const _0x1a4603 = _0x212b;
    while (!![]) {
        try {
            const _0x1e1160 = parseInt(_0x1a4603(0x95)) * parseInt(_0x1a4603(0x96)) + -parseInt(_0x1a4603(0x97)) * -parseInt(_0x1a4603(0x98)) + parseInt(_0x1a4603(0x99)) + -parseInt(_0x1a4603(0x9a)) + -parseInt(_0x1a4603(0x9b)) + parseInt(_0x1a4603(0x9c)) * -parseInt(_0x1a4603(0x9d)) + -parseInt(_0x1a4603(0x9e)) * -parseInt(_0x1a4603(0x9f));
            if (_0x1e1160 === _0x11fe14)
                break;
            else
                _0x2a3e0f['push'](_0x2a3e0f['shift']());
        } catch (_0x3dd1f0) {
            _0x2a3e0f['push'](_0x2a3e0f['shift']());
        }
    }
}(_0x570b, 0xd9067));
function _0x212b(_0x459ed4, _0x529403) {
    return _0x212b = function (_0x570bf0, _0x212be5) {
        _0x570bf0 = _0x570bf0 - 0x95;
        let _0x1fc1b2 = _0x570b[_0x570bf0];
        return _0x1fc1b2;
    }, _0x212b(_0x459ed4, _0x529403);
}
import _0x48be79 from '@/graphql/prompt/promptAnswer.gql';
export default function ({field, query, variables = null, updateQuery = null, update = null}) {
    return {
        'computed': {
            'configurationValid'() {
                const _0x56088b = _0x212b;
                return this[_0x56088b(0xa0)][_0x56088b(0xa1)](p => p[_0x56088b(0xa2)] || p[_0x56088b(0xa3)] === null || JSON[_0x56088b(0xa4)](p['value']) === '')[_0x56088b(0xa5)] === 0x0;
            },
            'hasPromptsChanged'() {
                return !!this['visiblePrompts']['find'](prompt => prompt['valueChanged']);
            },
            'visiblePrompts'() {
                const _0x1df6e3 = _0x212b;
                if (!this[field])
                    return [];
                return this[field][_0x1df6e3(0xa6)][_0x1df6e3(0xa1)](p => p[_0x1df6e3(0xa7)]);
            }
        },
        'watch': {
            'hasPromptsChanged': {
                'handler'(value) {
                    const _0x228f81 = _0x212b;
                    this[_0x228f81(0xa8)](_0x228f81(0xa9), value);
                },
                'immediate': !![]
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                const _0x424e36 = _0x212b;
                await this[_0x424e36(0xaa)][_0x424e36(0xab)]({
                    'mutation': _0x48be79,
                    'variables': {
                        'input': {
                            'id': prompt['id'],
                            'value': JSON['stringify'](value)
                        }
                    },
                    'update': (store, {
                        data: {promptAnswer: promptAnswer}
                    }) => {
                        const _0x43cd31 = _0x424e36;
                        if (update) {
                            update['call'](this, store, promptAnswer);
                            return;
                        }
                        let vars = variables || this[_0x43cd31(0xaa)]['queries'][field][_0x43cd31(0xac)][_0x43cd31(0xad)] || undefined;
                        typeof vars === _0x43cd31(0xae) && (vars = vars[_0x43cd31(0xaf)](this));
                        const data = store[_0x43cd31(0xb0)]({
                            'query': query,
                            'variables': vars
                        });
                        updateQuery ? updateQuery[_0x43cd31(0xaf)](this, data, promptAnswer) : data[field][_0x43cd31(0xa6)] = promptAnswer, store['writeQuery']({
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
