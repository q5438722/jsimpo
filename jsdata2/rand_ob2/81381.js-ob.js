const _0x1773 = [
    'IncorrectUsageError',
    'Requested\x20setting\x20is\x20not\x20supported:\x20\x27',
    'Please\x20use\x20only\x20the\x20supported\x20settings:\x20',
    'each',
    'loadSettings',
    'stringify',
    '39fJePkW',
    '1363LUqjMG',
    '9297vqjqxt',
    '27CpAMxr',
    '360570BoXxLL',
    '467759DttKmM',
    '18719heAlNz',
    '41DGiqdm',
    '855636fbULzH',
    '10ASNeYU',
    '64851JaHCcR',
    'crypto',
    '@tryghost/debug',
    '@tryghost/errors',
    'createHash',
    'md5',
    'binary',
    'digest',
    'hex',
    'exports',
    'knownSettings',
    'init\x20settings\x20service\x20for:',
    'routes',
    'indexOf'
];
const _0x506efc = _0x3414;
function _0x3414(_0x44b0c9, _0x584f90) {
    return _0x3414 = function (_0x1773ce, _0x34140e) {
        _0x1773ce = _0x1773ce - 0x1e4;
        let _0x3e19eb = _0x1773[_0x1773ce];
        return _0x3e19eb;
    }, _0x3414(_0x44b0c9, _0x584f90);
}
(function (_0x1d4816, _0x1f3db1) {
    const _0x392ced = _0x3414;
    while (!![]) {
        try {
            const _0x166e71 = -parseInt(_0x392ced(0x1e4)) * -parseInt(_0x392ced(0x1e5)) + -parseInt(_0x392ced(0x1e6)) * -parseInt(_0x392ced(0x1e7)) + parseInt(_0x392ced(0x1e8)) + parseInt(_0x392ced(0x1e9)) + parseInt(_0x392ced(0x1ea)) * -parseInt(_0x392ced(0x1eb)) + parseInt(_0x392ced(0x1ec)) + parseInt(_0x392ced(0x1ed)) * -parseInt(_0x392ced(0x1ee));
            if (_0x166e71 === _0x1f3db1)
                break;
            else
                _0x1d4816['push'](_0x1d4816['shift']());
        } catch (_0x10044b) {
            _0x1d4816['push'](_0x1d4816['shift']());
        }
    }
}(_0x1773, 0x8baf8));
const _ = require('lodash'), crypto = require(_0x506efc(0x1ef)), debug = require(_0x506efc(0x1f0))('frontend:services:settings:index'), SettingsLoader = require('./loader'), ensureSettingsFiles = require('./ensure-settings'), errors = require(_0x506efc(0x1f1)), defaultHashes = { 'routes': '3d180d52c663d173a6be791ef411ed01' }, calculateHash = _0x3a4572 => {
        const _0x220b54 = _0x506efc;
        return crypto[_0x220b54(0x1f2)](_0x220b54(0x1f3))['update'](_0x3a4572, _0x220b54(0x1f4))[_0x220b54(0x1f5)](_0x220b54(0x1f6));
    };
module[_0x506efc(0x1f7)] = {
    'init': function () {
        const _0x24ca12 = _0x506efc, _0xdd2751 = this[_0x24ca12(0x1f8)]();
        return debug(_0x24ca12(0x1f9), _0xdd2751), ensureSettingsFiles(_0xdd2751);
    },
    'knownSettings': function knownSettings() {
        const _0x3d1e1a = _0x506efc;
        return [_0x3d1e1a(0x1fa)];
    },
    'get': function get(_0x4d70a5) {
        const _0x44122b = _0x506efc, _0x3cd8b7 = this[_0x44122b(0x1f8)]();
        if (!_0x4d70a5 || _[_0x44122b(0x1fb)](_0x3cd8b7, _0x4d70a5) < 0x0)
            throw new errors[(_0x44122b(0x1fc))]({
                'message': _0x44122b(0x1fd) + _0x4d70a5 + '\x27.',
                'help': _0x44122b(0x1fe) + _0x3cd8b7 + '.'
            });
        return SettingsLoader(_0x4d70a5);
    },
    'getAll': function getAll() {
        const _0xa89130 = _0x506efc, _0xe6c747 = this[_0xa89130(0x1f8)](), _0x4b79f1 = {};
        return _[_0xa89130(0x1ff)](_0xe6c747, function (_0x3ec004) {
            _0x4b79f1[_0x3ec004] = SettingsLoader(_0x3ec004);
        }), _0x4b79f1;
    },
    'getDefaulHash': _0x266008 => {
        return defaultHashes[_0x266008];
    },
    'getCurrentHash': async _0x261e2c => {
        const _0x33176f = _0x506efc, _0x1a6405 = await SettingsLoader[_0x33176f(0x200)](_0x261e2c);
        return calculateHash(JSON[_0x33176f(0x201)](_0x1a6405));
    }
};
