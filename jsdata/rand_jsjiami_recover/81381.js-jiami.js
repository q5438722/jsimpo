const _ = require('lodash');
const crypto = require('crypto');
const debug = require('@tryghost/debug')('frontend:services:settings:index');
const SettingsLoader = require('./loader');
const ensureSettingsFiles = require('./ensure-settings');
const errors = require('@tryghost/errors');
const defaultHashes = {};
const calculateHash = _0x134da3 => {
    return crypto['createHash']('md5')['update'](_0x134da3, 'binary')['digest']('hex');
};
module['exports'] = {
    'init': function () {
        const _0x46f338 = this['knownSettings']();
        debug('init settings service for:', _0x46f338);
        return ensureSettingsFiles(_0x46f338);
    },
    'knownSettings': function knownSettings() {
        return ['routes'];
    },
    'get': function get(_0xb83913) {
        const _0x3629ae = this['knownSettings']();
        if (!_0xb83913 || _['indexOf'](_0x3629ae, _0xb83913) < 0) {
            throw new errors['IncorrectUsageError']({
                'message': 'Requested setting is not supported: \'' + _0xb83913 + '\'.',
                'help': 'Please use only the supported settings: ' + _0x3629ae + '.'
            });
        }
        return SettingsLoader(_0xb83913);
    },
    'getAll': function getAll() {
        const _0xe77ff2 = this['knownSettings']();
        _['each'](_0xe77ff2, function (_0x4840df) {
            _0x4d75aa[_0x4840df] = SettingsLoader(_0x4840df);
        });
        return _0x4d75aa;
    },
    'getDefaulHash': _0x2a7f79 => {
        return defaultHashes[_0x2a7f79];
    },
    'getCurrentHash': async _0x30052b => {
        const _0x5683e0 = await SettingsLoader['loadSettings'](_0x30052b);
        return calculateHash(JSON['stringify'](_0x5683e0));
    }
};