const debug = require('@tryghost/debug')('api:v3:utils:serializers:output:tags');
const mapper = require('./utils/mapper');
module['exports'] = {
    'all'(_0x5a7a17, _0x9e7020, _0x2b0feb) {
        debug('all');
        if (!_0x5a7a17) {
            return;
        }
        if (_0x5a7a17['meta']) {
            _0x2b0feb['response'] = {
                'tags': _0x5a7a17['data']['map'](_0x3e6783 => mapper['mapTag'](_0x3e6783, _0x2b0feb)),
                'meta': _0x5a7a17['meta']
            };
            return;
        }
        _0x2b0feb['response'] = { 'tags': [mapper['mapTag'](_0x5a7a17, _0x2b0feb)] };
    }
};