const debug = require('@tryghost/debug')('api:v3:utils:serializers:output:tags'), mapper = require('./utils/mapper');
module['exports'] = {
    'all'(_0x59a036, _0x1a4a55, _0x3a17b3) {
        debug('all');
        if (!_0x59a036)
            return;
        if (_0x59a036['meta']) {
            _0x3a17b3['response'] = {
                'tags': _0x59a036['data']['map'](_0x34fc1b => mapper['mapTag'](_0x34fc1b, _0x3a17b3)),
                'meta': _0x59a036['meta']
            };
            return;
        }
        _0x3a17b3['response'] = { 'tags': [mapper['mapTag'](_0x59a036, _0x3a17b3)] };
    }
};
