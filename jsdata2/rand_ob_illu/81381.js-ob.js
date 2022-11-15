const _0x1229 = ['./loader', './ensure-settings', '@tryghost/errors', '3d180d52c663d173a6be791ef411ed01', 'md5', 'binary', 'createHash', 'QuBfG', 'update', 'digest', 'OTjNk', 'exports', 'init settings service for:', 'knownSettings', 'xzxok', 'hDtZv', 'routes', 'cyzvb', 'indexOf', 'loadSettings', 'stringify', '779435BErAYc', '1649431CfJVIn', '1312687NyOiFf', '1EsjJRY', '61PUDdVC', '3985KeJduy', '753ysZONB', '1570TlthEi', '113PAaUem', '16357XxGNIX', '23DtEail', '119723ZMUSQw', '@tryghost/debug', 'frontend:services:settings:index'];
const _0x20374d = _0x4c40;

function _0x4c40(_0x1b93ed, _0x33fc34) {
    return _0x4c40 = function (_0x349419, _0x2438fb) {
        _0x349419 = _0x349419 - 422;
        const _0x151dcd = _0x1229[_0x349419];

        return _0x151dcd;
    }, _0x4c40(_0x1b93ed, _0x33fc34);
}
(function (_0x822a4a, _0x3be9fe) {
    const _0x5ed087 = _0x4c40;

    while (true) {
        try {
            const _0x42bcd5 = parseInt(_0x5ed087(0x1a6)) + -parseInt(_0x5ed087(0x1a7)) + -parseInt(_0x5ed087(0x1a8)) * -parseInt(_0x5ed087(0x1a9)) + -parseInt(_0x5ed087(0x1aa)) * -parseInt(_0x5ed087(0x1ab)) + parseInt(_0x5ed087(0x1ac)) * parseInt(_0x5ed087(0x1ad)) + -parseInt(_0x5ed087(0x1ae)) * -parseInt(_0x5ed087(0x1af)) + parseInt(_0x5ed087(0x1b0)) * -parseInt(_0x5ed087(0x1b1));

            if (_0x42bcd5 === _0x3be9fe) break;else _0x822a4a.push(_0x822a4a.shift());
        } catch (_0x4a6a15) {
            _0x822a4a.push(_0x822a4a.shift());
        }
    }
})(_0x1229, 962698);

const _ = require('lodash');

const crypto = require('crypto');

const debug = require(_0x20374d(0x1b2))(_0x20374d(0x1b3));

const SettingsLoader = require(_0x20374d(0x1b4));

const ensureSettingsFiles = require(_0x20374d(0x1b5));

const errors = require(_0x20374d(0x1b6));

const defaultHashes = { 'routes': _0x20374d(0x1b7) };

const calculateHash = _0x4fb552 => {
    const _0x28c149 = _0x20374d;
    const _0x4ad5b2 = {
        'QuBfG': _0x28c149(0x1b8),
        'TMgLR': _0x28c149(0x1b9),
        'OTjNk': 'hex'
    };

    return crypto[_0x28c149(0x1ba)](_0x4ad5b2[_0x28c149(0x1bb)])[_0x28c149(0x1bc)](_0x4fb552, _0x4ad5b2.TMgLR)[_0x28c149(0x1bd)](_0x4ad5b2[_0x28c149(0x1be)]);
};

module[_0x20374d(0x1bf)] = {
    'init': function () {
        const _0x3cd397 = _0x20374d;
        const _0x261dbc = {
            'xzxok': _0x3cd397(0x1c0),
            'hDtZv': function (_0x3f7ba7, _0x6eb007) {
                return _0x3f7ba7(_0x6eb007);
            }
        };

        const _0x16265b = this[_0x3cd397(0x1c1)]();

        return debug(_0x261dbc[_0x3cd397(0x1c2)], _0x16265b), _0x261dbc[_0x3cd397(0x1c3)](ensureSettingsFiles, _0x16265b);
    },
    'knownSettings': function knownSettings() {
        const _0x4a8075 = _0x20374d;
        const _0x2e47df = { 'cyzvb': _0x4a8075(0x1c4) };

        return [_0x2e47df[_0x4a8075(0x1c5)]];
    },
    'get': function get(_0x64cb10) {
        const _0x2d5df5 = _0x20374d;
        const _0x57a4b8 = {
            'vHQfp': function (_0x4f6add, _0x1cf872) {
                return _0x4f6add < _0x1cf872;
            }
        };

        const _0x187955 = this[_0x2d5df5(0x1c1)]();

        if (!_0x64cb10 || _0x57a4b8.vHQfp(_[_0x2d5df5(0x1c6)](_0x187955, _0x64cb10), 0)) throw new errors.IncorrectUsageError({
            'message': 'Requested setting is not supported: \'' + _0x64cb10 + '\'.',
            'help': 'Please use only the supported settings: ' + _0x187955 + '.'
        });
        return SettingsLoader(_0x64cb10);
    },
    'getAll': function getAll() {
        const _0x1b908d = _0x20374d;

        const _0x565904 = this[_0x1b908d(0x1c1)]();

        const _0x1f3529 = {};

        return _.each(_0x565904, function (_0x43b3a6) {
            _0x1f3529[_0x43b3a6] = SettingsLoader(_0x43b3a6);
        }), _0x1f3529;
    },
    'getDefaulHash': _0x3643ee => {
        return defaultHashes[_0x3643ee];
    },
    'getCurrentHash': async _0x1c2908 => {
        const _0x439426 = _0x20374d;

        const _0x566cf3 = await SettingsLoader[_0x439426(0x1c7)](_0x1c2908);

        return calculateHash(JSON[_0x439426(0x1c8)](_0x566cf3));
    }
};
