const {DefinePlugin} = require('../../../../');
module['exports'] = {
    'mode': 'development',
    'devtool': ![],
    'target': 'web',
    'plugins': [new DefinePlugin({
            '_VALUE_': {
                '_DEFINED_': 0x1,
                '_PROP_': { '_DEFINED_': 0x2 }
            }
        })]
};
