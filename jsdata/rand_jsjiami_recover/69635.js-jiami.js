const {ConsumeSharedPlugin} = require('../../../../')['sharing'];
module['exports'] = {
    'plugins': [new ConsumeSharedPlugin({
            'consumes': {
                'shared': {
                    'import': ![],
                    'strictVersion': !![]
                },
                'shared2': { 'import': ![] }
            }
        })]
};