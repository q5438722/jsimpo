const _ = require('lodash'), crypto = require('crypto'), debug = require(_0x20374d(434))(_0x20374d(435)), SettingsLoader = require(_0x20374d(436)), ensureSettingsFiles = require(_0x20374d(437)), errors = require(_0x20374d(438)), defaultHashes = { 'routes': _0x20374d(439) }, calculateHash = _0x4fb552 => {
        const _0x28c149 = _0x20374d, _0x4ad5b2 = {
                'QuBfG': _0x28c149(440),
                'TMgLR': _0x28c149(441),
                'OTjNk': 'hex'
            };
        return crypto[_0x28c149(442)](_0x4ad5b2[_0x28c149(443)])[_0x28c149(444)](_0x4fb552, _0x4ad5b2['TMgLR'])[_0x28c149(445)](_0x4ad5b2[_0x28c149(446)]);
    };
module[_0x20374d(447)] = {
    'init': function () {
        const _0x3cd397 = _0x20374d, _0x261dbc = {
                'xzxok': _0x3cd397(448),
                'hDtZv': function (_0x3f7ba7, _0x6eb007) {
                    return _0x3f7ba7(_0x6eb007);
                }
            }, _0x16265b = this[_0x3cd397(449)]();
        return debug(_0x261dbc[_0x3cd397(450)], _0x16265b), _0x261dbc[_0x3cd397(451)](ensureSettingsFiles, _0x16265b);
    },
    'knownSettings': function knownSettings() {
        const _0x4a8075 = _0x20374d, _0x2e47df = { 'cyzvb': _0x4a8075(452) };
        return [_0x2e47df[_0x4a8075(453)]];
    },
    'get': function get(_0x64cb10) {
        const _0x2d5df5 = _0x20374d, _0x57a4b8 = {
                'vHQfp': function (_0x4f6add, _0x1cf872) {
                    return _0x4f6add < _0x1cf872;
                }
            }, _0x187955 = this[_0x2d5df5(449)]();
        if (!_0x64cb10 || _0x57a4b8['vHQfp'](_[_0x2d5df5(454)](_0x187955, _0x64cb10), -6591 + 831 + 240 * 24))
            throw new errors['IncorrectUsageError']({
                'message': 'Requested setting is not supported: \'' + _0x64cb10 + '\'.',
                'help': 'Please use only the supported settings: ' + _0x187955 + '.'
            });
        return SettingsLoader(_0x64cb10);
    },
    'getAll': function getAll() {
        const _0x1b908d = _0x20374d, _0x565904 = this[_0x1b908d(449)](), _0x1f3529 = {};
        return _['each'](_0x565904, function (_0x43b3a6) {
            _0x1f3529[_0x43b3a6] = SettingsLoader(_0x43b3a6);
        }), _0x1f3529;
    },
    'getDefaulHash': _0x3643ee => {
        return defaultHashes[_0x3643ee];
    },
    'getCurrentHash': async _0x1c2908 => {
        const _0x439426 = _0x20374d, _0x566cf3 = await SettingsLoader[_0x439426(455)](_0x1c2908);
        return calculateHash(JSON[_0x439426(456)](_0x566cf3));
    }
};