import _0x432150 from '@/graphql/prompt/promptAnswer.gql';
export default function ({field, query, variables = null, updateQuery = null, update = null}) {
    return {
        'computed': {
            'configurationValid'() {
                return this['visiblePrompts']['filter'](p => p['error'] || p['value'] === null || JSON['parse'](p['value']) === '')['length'] === -0x26 * 0xc1 + 0x1 * -0x2143 + 0x3de9;
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
                    this['$emit']('has-changes', value);
                },
                'immediate': !![]
            }
        },
        'methods': {
            async 'answerPrompt'({
                prompt: prompt,
                value: value
            }) {
                await this['$apollo']['mutate']({
                    'mutation': _0x432150,
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
                        typeof vars === 'function' && (vars = vars['call'](this));
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
