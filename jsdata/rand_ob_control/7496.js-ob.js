import _0x5d1b55 from '@/graphql/prompt/promptAnswer.gql';
export default function ({field, query, variables = null, updateQuery = null, update = null}) {
    const gCtyUo = {
        'AaapR': function (x, y) {
            return x === y;
        },
        'woKJV': 'has-changes',
        'YhAAN': 'function'
    };
    return {
        'computed': {
            'configurationValid'() {
                return gCtyUo['AaapR'](this['visiblePrompts']['filter'](p => p['error'] || p['value'] === null || JSON['parse'](p['value']) === '')['length'], 0x0);
            },
            'hasPromptsChanged'() {
                return !!this['visiblePrompts']['find'](prompt => prompt['valueChanged']);
            },
            'visiblePrompts'() {
                if (!this[field])
                    return [];
                return this[field]['prompts']['filter'](p => p['visible']);
            }
        },
        'watch': {
            'hasPromptsChanged': {
                'handler'(value) {
                    this['$emit'](gCtyUo['woKJV'], value);
                },
                'immediate': !![]
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                const uDADuV = {
                    'vGpUz': function (x, y) {
                        return gCtyUo['AaapR'](x, y);
                    },
                    'GdPTy': gCtyUo['YhAAN']
                };
                await this['$apollo']['mutate']({
                    'mutation': _0x5d1b55,
                    'variables': {
                        'input': {
                            'id': prompt['id'],
                            'value': JSON['stringify'](value)
                        }
                    },
                    'update': (store, {
                        data: {promptAnswer: promptAnswer}
                    }) => {
                        if (update) {
                            update['call'](this, store, promptAnswer);
                            return;
                        }
                        let vars = variables || this['$apollo']['queries'][field]['options']['variables'] || undefined;
                        uDADuV['vGpUz'](typeof vars, uDADuV['GdPTy']) && (vars = vars['call'](this));
                        const data = store['readQuery']({
                            'query': query,
                            'variables': vars
                        });
                        updateQuery ? updateQuery['call'](this, data, promptAnswer) : data[field]['prompts'] = promptAnswer, store['writeQuery']({
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
