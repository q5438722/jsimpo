const _ = require('lodash'), crypto = require('crypto'), debug = require('@tryghost/debug')('frontend:services:settings:index'), SettingsLoader = require('./loader'), ensureSettingsFiles = require('./ensure-settings'), errors = require('@tryghost/errors'), defaultHashes = { 'routes': '3d180d52c663d173a6be791ef411ed01' }, calculateHash = _0x3357eb => {
        return crypto['createHash']('md5')['update'](_0x3357eb, 'binary')['digest']('hex');
    };
module['exports'] = {
    'init': function () {
        const _0x261484 = this['knownSettings']();
        return debug('init\x20settings\x20service\x20for:', _0x261484), ensureSettingsFiles(_0x261484);
    },
    'knownSettings': function knownSettings() {
        return ['routes'];
    },
    'get': function get(_0x1fa202) {
        const _0x2a7ef3 = this['knownSettings']();
        if (!_0x1fa202 || _['indexOf'](_0x2a7ef3, _0x1fa202) < -0x2689 + 0x1 * -0xcab + 0x3334)
            throw new errors['IncorrectUsageError']({
                'message': 'Requested\x20setting\x20is\x20not\x20supported:\x20\x27' + _0x1fa202 + '\x27.',
                'help': 'Please\x20use\x20only\x20the\x20supported\x20settings:\x20' + _0x2a7ef3 + '.'
            });
        return SettingsLoader(_0x1fa202);
    },
    'getAll': function getAll() {
        const _0xaa458 = this['knownSettings'](), _0x2f0b04 = {};
        return _['each'](_0xaa458, function (_0xc34e62) {
            _0x2f0b04[_0xc34e62] = SettingsLoader(_0xc34e62);
        }), _0x2f0b04;
    },
    'getDefaulHash': _0x1e559a => {
        return defaultHashes[_0x1e559a];
    },
    'getCurrentHash': async _0x35c51a => {
        const _0x5b59f2 = await SettingsLoader['loadSettings'](_0x35c51a);
        return calculateHash(JSON['stringify'](_0x5b59f2));
    }
};
