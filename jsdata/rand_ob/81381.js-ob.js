const _0xc6e4 = [
    'md5',
    'binary',
    'hex',
    'VAvvy',
    'update',
    'rZZxA',
    'digest',
    'exports',
    'uwFtR',
    'routes',
    'OrREx',
    'knownSettings',
    'indexOf',
    'IncorrectUsageError',
    'Requested\x20setting\x20is\x20not\x20supported:\x20\x27',
    'each',
    'ZnQds',
    'loadSettings',
    'stringify',
    '728944GGuFhe',
    '652679SaFKdL',
    '1354967UoulBT',
    '585117yVBwSA',
    '1JJvoQD',
    '192047hQrrQC',
    '8dSaUbF',
    '130159iZfewh',
    '2310057neVNqG',
    'lodash',
    'crypto',
    '@tryghost/debug',
    './loader',
    './ensure-settings',
    '3d180d52c663d173a6be791ef411ed01'
];
const _0x53f8cc = _0x50c6;
(function (_0x12c6a6, _0x886be3) {
    const _0x47be3e = _0x50c6;
    while (!![]) {
        try {
            const _0x7ff7f2 = parseInt(_0x47be3e(0x17a)) + -parseInt(_0x47be3e(0x17b)) + -parseInt(_0x47be3e(0x17c)) + parseInt(_0x47be3e(0x17d)) + parseInt(_0x47be3e(0x17e)) * parseInt(_0x47be3e(0x17f)) + -parseInt(_0x47be3e(0x180)) * parseInt(_0x47be3e(0x181)) + parseInt(_0x47be3e(0x182));
            if (_0x7ff7f2 === _0x886be3)
                break;
            else
                _0x12c6a6['push'](_0x12c6a6['shift']());
        } catch (_0x184632) {
            _0x12c6a6['push'](_0x12c6a6['shift']());
        }
    }
}(_0xc6e4, 0xb959a + -0x14 * 0xb521 + 0xe4609));
function _0x50c6(_0x32c853, _0x4de4a8) {
    return _0x50c6 = function (_0x164154, _0x534944) {
        _0x164154 = _0x164154 - (-0xf22 + 0x3 * -0x14e + 0x1486);
        let _0xb227ea = _0xc6e4[_0x164154];
        return _0xb227ea;
    }, _0x50c6(_0x32c853, _0x4de4a8);
}
const _ = require(_0x53f8cc(0x183)), crypto = require(_0x53f8cc(0x184)), debug = require(_0x53f8cc(0x185))('frontend:services:settings:index'), SettingsLoader = require(_0x53f8cc(0x186)), ensureSettingsFiles = require(_0x53f8cc(0x187)), errors = require('@tryghost/errors'), defaultHashes = { 'routes': _0x53f8cc(0x188) }, calculateHash = _0x54841c => {
        const _0xa32f1a = _0x53f8cc, _0x3ad6a2 = {
                'VAvvy': _0xa32f1a(0x189),
                'rZZxA': _0xa32f1a(0x18a),
                'fvBwx': _0xa32f1a(0x18b)
            };
        return crypto['createHash'](_0x3ad6a2[_0xa32f1a(0x18c)])[_0xa32f1a(0x18d)](_0x54841c, _0x3ad6a2[_0xa32f1a(0x18e)])[_0xa32f1a(0x18f)](_0x3ad6a2['fvBwx']);
    };
module[_0x53f8cc(0x190)] = {
    'init': function () {
        const _0x5daa41 = _0x53f8cc, _0x45e184 = {
                'uwFtR': function (_0x4290f3, _0x48704f, _0x1ebcac) {
                    return _0x4290f3(_0x48704f, _0x1ebcac);
                }
            }, _0x506ae1 = this['knownSettings']();
        return _0x45e184[_0x5daa41(0x191)](debug, 'init\x20settings\x20service\x20for:', _0x506ae1), ensureSettingsFiles(_0x506ae1);
    },
    'knownSettings': function knownSettings() {
        const _0x21ac08 = _0x53f8cc, _0x206530 = { 'OrREx': _0x21ac08(0x192) };
        return [_0x206530[_0x21ac08(0x193)]];
    },
    'get': function get(_0x16d626) {
        const _0x204de9 = _0x53f8cc, _0x46bf58 = {
                'bIjQb': function (_0x2bce8b, _0x45cdca) {
                    return _0x2bce8b < _0x45cdca;
                }
            }, _0x305857 = this[_0x204de9(0x194)]();
        if (!_0x16d626 || _0x46bf58['bIjQb'](_[_0x204de9(0x195)](_0x305857, _0x16d626), -0x1af * -0x4 + -0x3 * 0x383 + 0x3cd))
            throw new errors[(_0x204de9(0x196))]({
                'message': _0x204de9(0x197) + _0x16d626 + '\x27.',
                'help': 'Please\x20use\x20only\x20the\x20supported\x20settings:\x20' + _0x305857 + '.'
            });
        return SettingsLoader(_0x16d626);
    },
    'getAll': function getAll() {
        const _0xcc9649 = _0x53f8cc, _0x6bb177 = {
                'ZnQds': function (_0x3d9d9, _0x2b765f) {
                    return _0x3d9d9(_0x2b765f);
                }
            }, _0x2d681b = this[_0xcc9649(0x194)](), _0x1d1f65 = {};
        return _[_0xcc9649(0x198)](_0x2d681b, function (_0x113a01) {
            const _0x251056 = _0xcc9649;
            _0x1d1f65[_0x113a01] = _0x6bb177[_0x251056(0x199)](SettingsLoader, _0x113a01);
        }), _0x1d1f65;
    },
    'getDefaulHash': _0x5bee77 => {
        return defaultHashes[_0x5bee77];
    },
    'getCurrentHash': async _0x2c2839 => {
        const _0x3bd03d = _0x53f8cc, _0x483622 = await SettingsLoader[_0x3bd03d(0x19a)](_0x2c2839);
        return calculateHash(JSON[_0x3bd03d(0x19b)](_0x483622));
    }
};
