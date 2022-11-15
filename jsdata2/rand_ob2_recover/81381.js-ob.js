const _ = require('lodash'), crypto = require(_0x506efc(495)), debug = require(_0x506efc(496))('frontend:services:settings:index'), SettingsLoader = require('./loader'), ensureSettingsFiles = require('./ensure-settings'), errors = require(_0x506efc(497)), defaultHashes = { 'routes': '3d180d52c663d173a6be791ef411ed01' }, calculateHash = _0x3a4572 => {
        const _0x220b54 = _0x506efc;
        return crypto[_0x220b54(498)](_0x220b54(499))['update'](_0x3a4572, _0x220b54(500))[_0x220b54(501)](_0x220b54(502));
    };
module[_0x506efc(503)] = {
    'init': function () {
        const _0x24ca12 = _0x506efc, _0xdd2751 = this[_0x24ca12(504)]();
        return debug(_0x24ca12(505), _0xdd2751), ensureSettingsFiles(_0xdd2751);
    },
    'knownSettings': function knownSettings() {
        const _0x3d1e1a = _0x506efc;
        return [_0x3d1e1a(506)];
    },
    'get': function get(_0x4d70a5) {
        const _0x44122b = _0x506efc, _0x3cd8b7 = this[_0x44122b(504)]();
        if (!_0x4d70a5 || _[_0x44122b(507)](_0x3cd8b7, _0x4d70a5) < 0)
            throw new errors[(_0x44122b(508))]({
                'message': _0x44122b(509) + _0x4d70a5 + '\'.',
                'help': _0x44122b(510) + _0x3cd8b7 + '.'
            });
        return SettingsLoader(_0x4d70a5);
    },
    'getAll': function getAll() {
        const _0xa89130 = _0x506efc, _0xe6c747 = this[_0xa89130(504)](), _0x4b79f1 = {};
        return _[_0xa89130(511)](_0xe6c747, function (_0x3ec004) {
            _0x4b79f1[_0x3ec004] = SettingsLoader(_0x3ec004);
        }), _0x4b79f1;
    },
    'getDefaulHash': _0x266008 => {
        return defaultHashes[_0x266008];
    },
    'getCurrentHash': async _0x261e2c => {
        const _0x33176f = _0x506efc, _0x1a6405 = await SettingsLoader[_0x33176f(512)](_0x261e2c);
        return calculateHash(JSON[_0x33176f(513)](_0x1a6405));
    }
};