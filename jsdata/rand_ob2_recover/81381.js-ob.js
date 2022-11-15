const _ = require(_0x140b55(396)), crypto = require(_0x140b55(397)), debug = require(_0x140b55(398))('frontend:services:settings:index'), SettingsLoader = require(_0x140b55(399)), ensureSettingsFiles = require(_0x140b55(400)), errors = require('@tryghost/errors'), defaultHashes = { 'routes': _0x140b55(401) }, calculateHash = _0x55482d => {
        const _0x371957 = _0x140b55;
        return crypto[_0x371957(402)](_0x371957(403))['update'](_0x55482d, _0x371957(404))[_0x371957(405)]('hex');
    };
module[_0x140b55(406)] = {
    'init': function () {
        const _0x482be8 = _0x140b55, _0x17e756 = this[_0x482be8(407)]();
        return debug('init settings service for:', _0x17e756), ensureSettingsFiles(_0x17e756);
    },
    'knownSettings': function knownSettings() {
        const _0x52e5c4 = _0x140b55;
        return [_0x52e5c4(408)];
    },
    'get': function get(_0x59094d) {
        const _0xa01ba4 = _0x140b55, _0x5bf282 = this[_0xa01ba4(407)]();
        if (!_0x59094d || _[_0xa01ba4(409)](_0x5bf282, _0x59094d) < 0)
            throw new errors['IncorrectUsageError']({
                'message': _0xa01ba4(410) + _0x59094d + '\'.',
                'help': _0xa01ba4(411) + _0x5bf282 + '.'
            });
        return SettingsLoader(_0x59094d);
    },
    'getAll': function getAll() {
        const _0x598e92 = _0x140b55, _0x50bed0 = this[_0x598e92(407)](), _0x2031ae = {};
        return _['each'](_0x50bed0, function (_0x102460) {
            _0x2031ae[_0x102460] = SettingsLoader(_0x102460);
        }), _0x2031ae;
    },
    'getDefaulHash': _0xd4a55c => {
        return defaultHashes[_0xd4a55c];
    },
    'getCurrentHash': async _0x9a539c => {
        const _0x2af559 = _0x140b55, _0x5efb1d = await SettingsLoader[_0x2af559(412)](_0x9a539c);
        return calculateHash(JSON[_0x2af559(413)](_0x5efb1d));
    }
};