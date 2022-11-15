const _0x3ef4 = [
    '313IgNljS',
    '2SoEYYi',
    '178243BgigFG',
    '142261KfQTub',
    '369196TQlJls',
    '1vWVVHw',
    '1083773kCzEKn',
    'moZZp',
    'filter',
    'error',
    'value',
    'parse',
    'length',
    'find',
    'valueChanged',
    'prompts',
    'visible',
    '$emit',
    'stringify',
    'call',
    '$apollo',
    'options',
    'variables',
    'function',
    'readQuery',
    'writeQuery',
    '193480UjZpEz',
    '173136CBShsU',
    '730EsaSBU'
];
function _0x1805(_0x520f5e, _0x50bad5) {
    return _0x1805 = function (_0x18e46e, _0x3b565b) {
        _0x18e46e = _0x18e46e - (-0x2b * 0x53 + -0x1478 + 0x1 * 0x243a);
        let _0x51ac63 = _0x3ef4[_0x18e46e];
        return _0x51ac63;
    }, _0x1805(_0x520f5e, _0x50bad5);
}
(function (_0x3e6b99, _0x3c100b) {
    const _0x47f7e4 = _0x1805;
    while (!![]) {
        try {
            const _0x39badb = parseInt(_0x47f7e4(0x1d1)) + -parseInt(_0x47f7e4(0x1d2)) + -parseInt(_0x47f7e4(0x1d3)) * -parseInt(_0x47f7e4(0x1d4)) + parseInt(_0x47f7e4(0x1d5)) * -parseInt(_0x47f7e4(0x1d6)) + -parseInt(_0x47f7e4(0x1d7)) + -parseInt(_0x47f7e4(0x1d8)) + -parseInt(_0x47f7e4(0x1d9)) * -parseInt(_0x47f7e4(0x1da));
            if (_0x39badb === _0x3c100b)
                break;
            else
                _0x3e6b99['push'](_0x3e6b99['shift']());
        } catch (_0x1f0fa7) {
            _0x3e6b99['push'](_0x3e6b99['shift']());
        }
    }
}(_0x3ef4, -0x1 * -0xd3ce6 + -0x1d293 + 0x9e2d * -0x7));
import _0x1cbb86 from '@/graphql/prompt/promptAnswer.gql';
export default function ({field, query, variables = null, updateQuery = null, update = null}) {
    const UDspOk = {
        'moZZp': function (x, y) {
            return x === y;
        },
        'qgctv': 'has-changes'
    };
    return {
        'computed': {
            'configurationValid'() {
                const _0xb39340 = _0x1805;
                return UDspOk[_0xb39340(0x1db)](this['visiblePrompts'][_0xb39340(0x1dc)](p => p[_0xb39340(0x1dd)] || p[_0xb39340(0x1de)] === null || JSON[_0xb39340(0x1df)](p['value']) === '')[_0xb39340(0x1e0)], -0x15ad * -0x1 + -0x11 * 0x5a + -0x1 * 0xfb3);
            },
            'hasPromptsChanged'() {
                const _0x1154fe = _0x1805;
                return !!this['visiblePrompts'][_0x1154fe(0x1e1)](prompt => prompt[_0x1154fe(0x1e2)]);
            },
            'visiblePrompts'() {
                const _0x514bb6 = _0x1805;
                if (!this[field])
                    return [];
                return this[field][_0x514bb6(0x1e3)][_0x514bb6(0x1dc)](p => p[_0x514bb6(0x1e4)]);
            }
        },
        'watch': {
            'hasPromptsChanged': {
                'handler'(value) {
                    const _0x43c187 = _0x1805;
                    this[_0x43c187(0x1e5)](UDspOk['qgctv'], value);
                },
                'immediate': !![]
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                const _0x5f17a2 = _0x1805;
                await this['$apollo']['mutate']({
                    'mutation': _0x1cbb86,
                    'variables': {
                        'input': {
                            'id': prompt['id'],
                            'value': JSON[_0x5f17a2(0x1e6)](value)
                        }
                    },
                    'update': (store, {
                        data: {promptAnswer: promptAnswer}
                    }) => {
                        const _0x2fab9f = _0x5f17a2;
                        if (update) {
                            update[_0x2fab9f(0x1e7)](this, store, promptAnswer);
                            return;
                        }
                        let vars = variables || this[_0x2fab9f(0x1e8)]['queries'][field][_0x2fab9f(0x1e9)][_0x2fab9f(0x1ea)] || undefined;
                        UDspOk[_0x2fab9f(0x1db)](typeof vars, _0x2fab9f(0x1eb)) && (vars = vars[_0x2fab9f(0x1e7)](this));
                        const data = store[_0x2fab9f(0x1ec)]({
                            'query': query,
                            'variables': vars
                        });
                        updateQuery ? updateQuery['call'](this, data, promptAnswer) : data[field]['prompts'] = promptAnswer, store[_0x2fab9f(0x1ed)]({
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
