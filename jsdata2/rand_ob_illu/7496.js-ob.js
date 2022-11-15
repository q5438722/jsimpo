const _0x44ba = ['valueChanged', 'prompts', 'visible', '$emit', 'OLJig', 'rOOBk', '$apollo', 'mutate', 'stringify', 'call', 'queries', 'options', 'variables', 'fMsWa', 'jIRIM', 'readQuery', 'writeQuery', '1RAEHyk', '275227UzcvTA', '1719803ZptVvB', '516654myBSZF', '132799EqCWqP', '914091EqUyfQ', '4nzsrtY', '357859NxMvLh', '1TUzTUM', '3819401SAXiRj', 'has-changes', 'visiblePrompts', 'filter', 'value', 'parse', 'length', 'find'];

function _0x3456(_0x580dc9, _0xa77199) {
    return _0x3456 = function (_0x3c9b06, _0x582d33) {
        _0x3c9b06 = _0x3c9b06 - 177;
        const _0x234afd = _0x44ba[_0x3c9b06];

        return _0x234afd;
    }, _0x3456(_0x580dc9, _0xa77199);
}
(function (_0xb0523e, _0x57e603) {
    const _0x253540 = _0x3456;

    while (true) {
        try {
            const _0x21cabf = parseInt(_0x253540(0xb1)) * parseInt(_0x253540(0xb2)) + parseInt(_0x253540(0xb3)) + parseInt(_0x253540(0xb4)) + -parseInt(_0x253540(0xb5)) + parseInt(_0x253540(0xb6)) + -parseInt(_0x253540(0xb7)) * -parseInt(_0x253540(0xb8)) + -parseInt(_0x253540(0xb9)) * parseInt(_0x253540(0xba));

            if (_0x21cabf === _0x57e603) break;else _0xb0523e.push(_0xb0523e.shift());
        } catch (_0x31b70d) {
            _0xb0523e.push(_0xb0523e.shift());
        }
    }
})(_0x44ba, 905011);
import _0x14dd00 from '@/graphql/prompt/promptAnswer.gql';
export default function ({ field, query, variables = null, updateQuery = null, update = null }) {
    const _0x28770d = _0x3456;
    const fHwhtk = {
        'rOOBk': function (x, y) {
            return x === y;
        },
        'OLJig': _0x28770d(0xbb)
    };

    return {
        'computed': {
            'configurationValid'() {
                const _0x1fad15 = _0x28770d;

                return fHwhtk.rOOBk(this[_0x1fad15(0xbc)][_0x1fad15(0xbd)](p => p.error || p[_0x1fad15(0xbe)] === null || JSON[_0x1fad15(0xbf)](p[_0x1fad15(0xbe)]) === '')[_0x1fad15(0xc0)], 0);
            },
            'hasPromptsChanged'() {
                const _0x423b40 = _0x28770d;

                return !!this[_0x423b40(0xbc)][_0x423b40(0xc1)](prompt => prompt[_0x423b40(0xc2)]);
            },
            'visiblePrompts'() {
                const _0x5f0309 = _0x28770d;

                if (!this[field]) return [];
                return this[field][_0x5f0309(0xc3)][_0x5f0309(0xbd)](p => p[_0x5f0309(0xc4)]);
            }
        },
        'watch': {
            'hasPromptsChanged': {
                'handler'(value) {
                    const _0x371e6e = _0x28770d;

                    this[_0x371e6e(0xc5)](fHwhtk[_0x371e6e(0xc6)], value);
                },
                'immediate': true
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                const _0x53d009 = _0x28770d;
                const vsSVuX = {
                    'fMsWa': function (x, y) {
                        const _0x2a1159 = _0x3456;

                        return fHwhtk[_0x2a1159(0xc7)](x, y);
                    },
                    'jIRIM': 'function'
                };

                await this[_0x53d009(0xc8)][_0x53d009(0xc9)]({
                    'mutation': _0x14dd00,
                    'variables': {
                        'input': {
                            'id': prompt.id,
                            'value': JSON[_0x53d009(0xca)](value)
                        }
                    },
                    'update': (store, {
                        data: { promptAnswer: promptAnswer }
                    }) => {
                        const _0x26876b = _0x53d009;

                        if (update) {
                            update[_0x26876b(0xcb)](this, store, promptAnswer);
                            return;
                        }
                        var vars = variables || this[_0x26876b(0xc8)][_0x26876b(0xcc)][field][_0x26876b(0xcd)][_0x26876b(0xce)] || undefined;

                        vsSVuX[_0x26876b(0xcf)](typeof vars, vsSVuX[_0x26876b(0xd0)]) && (vars = vars[_0x26876b(0xcb)](this));

                        const data = store[_0x26876b(0xd1)]({
                            'query': query,
                            'variables': vars
                        });

                        updateQuery ? updateQuery[_0x26876b(0xcb)](this, data, promptAnswer) : data[field][_0x26876b(0xc3)] = promptAnswer, store[_0x26876b(0xd2)]({
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
