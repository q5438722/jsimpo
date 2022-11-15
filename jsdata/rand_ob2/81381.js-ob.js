const _0x252f = [
    'createHash',
    'md5',
    'binary',
    'digest',
    'exports',
    'knownSettings',
    'routes',
    'indexOf',
    'Requested\x20setting\x20is\x20not\x20supported:\x20\x27',
    'Please\x20use\x20only\x20the\x20supported\x20settings:\x20',
    'loadSettings',
    'stringify',
    '1412117NqtNzj',
    '3627tCENsJ',
    '429LiFnvU',
    '152574dvfDuc',
    '937262VZgGVt',
    '476927MvzWda',
    '4agyzHp',
    '2dPJTrB',
    '329972BTvoiu',
    '1dMTORs',
    '6285067UUbUgl',
    'lodash',
    'crypto',
    '@tryghost/debug',
    './loader',
    './ensure-settings',
    '3d180d52c663d173a6be791ef411ed01'
];
const _0x140b55 = _0x2541;
function _0x2541(_0x4c7123, _0x5995f9) {
    return _0x2541 = function (_0x252f9b, _0x25418c) {
        _0x252f9b = _0x252f9b - 0x181;
        let _0x47b094 = _0x252f[_0x252f9b];
        return _0x47b094;
    }, _0x2541(_0x4c7123, _0x5995f9);
}
(function (_0x56a883, _0x534d9a) {
    const _0x1eee2f = _0x2541;
    while (!![]) {
        try {
            const _0x84ea21 = -parseInt(_0x1eee2f(0x181)) + parseInt(_0x1eee2f(0x182)) * -parseInt(_0x1eee2f(0x183)) + -parseInt(_0x1eee2f(0x184)) + -parseInt(_0x1eee2f(0x185)) + parseInt(_0x1eee2f(0x186)) * -parseInt(_0x1eee2f(0x187)) + -parseInt(_0x1eee2f(0x188)) * -parseInt(_0x1eee2f(0x189)) + -parseInt(_0x1eee2f(0x18a)) * -parseInt(_0x1eee2f(0x18b));
            if (_0x84ea21 === _0x534d9a)
                break;
            else
                _0x56a883['push'](_0x56a883['shift']());
        } catch (_0x4bb320) {
            _0x56a883['push'](_0x56a883['shift']());
        }
    }
}(_0x252f, 0xef1a7));
const _ = require(_0x140b55(0x18c)), crypto = require(_0x140b55(0x18d)), debug = require(_0x140b55(0x18e))('frontend:services:settings:index'), SettingsLoader = require(_0x140b55(0x18f)), ensureSettingsFiles = require(_0x140b55(0x190)), errors = require('@tryghost/errors'), defaultHashes = { 'routes': _0x140b55(0x191) }, calculateHash = _0x55482d => {
        const _0x371957 = _0x140b55;
        return crypto[_0x371957(0x192)](_0x371957(0x193))['update'](_0x55482d, _0x371957(0x194))[_0x371957(0x195)]('hex');
    };
module[_0x140b55(0x196)] = {
    'init': function () {
        const _0x482be8 = _0x140b55, _0x17e756 = this[_0x482be8(0x197)]();
        return debug('init\x20settings\x20service\x20for:', _0x17e756), ensureSettingsFiles(_0x17e756);
    },
    'knownSettings': function knownSettings() {
        const _0x52e5c4 = _0x140b55;
        return [_0x52e5c4(0x198)];
    },
    'get': function get(_0x59094d) {
        const _0xa01ba4 = _0x140b55, _0x5bf282 = this[_0xa01ba4(0x197)]();
        if (!_0x59094d || _[_0xa01ba4(0x199)](_0x5bf282, _0x59094d) < 0x0)
            throw new errors['IncorrectUsageError']({
                'message': _0xa01ba4(0x19a) + _0x59094d + '\x27.',
                'help': _0xa01ba4(0x19b) + _0x5bf282 + '.'
            });
        return SettingsLoader(_0x59094d);
    },
    'getAll': function getAll() {
        const _0x598e92 = _0x140b55, _0x50bed0 = this[_0x598e92(0x197)](), _0x2031ae = {};
        return _['each'](_0x50bed0, function (_0x102460) {
            _0x2031ae[_0x102460] = SettingsLoader(_0x102460);
        }), _0x2031ae;
    },
    'getDefaulHash': _0xd4a55c => {
        return defaultHashes[_0xd4a55c];
    },
    'getCurrentHash': async _0x9a539c => {
        const _0x2af559 = _0x140b55, _0x5efb1d = await SettingsLoader[_0x2af559(0x19c)](_0x9a539c);
        return calculateHash(JSON[_0x2af559(0x19d)](_0x5efb1d));
    }
};
