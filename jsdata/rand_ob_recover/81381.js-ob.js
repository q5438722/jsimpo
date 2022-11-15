function _0x50c6(_0x32c853, _0x4de4a8) {
    return _0x50c6 = function (_0x164154, _0x534944) {
        _0x164154 = _0x164154 - (-3874 + 3 * -334 + 5254);
        let _0xb227ea = _0xc6e4[_0x164154];
        return _0xb227ea;
    }, _0x50c6(_0x32c853, _0x4de4a8);
}
const _ = require(_0x53f8cc(387)), crypto = require(_0x53f8cc(388)), debug = require(_0x53f8cc(389))('frontend:services:settings:index'), SettingsLoader = require(_0x53f8cc(390)), ensureSettingsFiles = require(_0x53f8cc(391)), errors = require('@tryghost/errors'), defaultHashes = { 'routes': _0x53f8cc(392) }, calculateHash = _0x54841c => {
        const _0xa32f1a = _0x53f8cc, _0x3ad6a2 = {
                'VAvvy': _0xa32f1a(393),
                'rZZxA': _0xa32f1a(394),
                'fvBwx': _0xa32f1a(395)
            };
        return crypto['createHash'](_0x3ad6a2[_0xa32f1a(396)])[_0xa32f1a(397)](_0x54841c, _0x3ad6a2[_0xa32f1a(398)])[_0xa32f1a(399)](_0x3ad6a2['fvBwx']);
    };
module[_0x53f8cc(400)] = {
    'init': function () {
        const _0x5daa41 = _0x53f8cc, _0x45e184 = {
                'uwFtR': function (_0x4290f3, _0x48704f, _0x1ebcac) {
                    return _0x4290f3(_0x48704f, _0x1ebcac);
                }
            }, _0x506ae1 = this['knownSettings']();
        return _0x45e184[_0x5daa41(401)](debug, 'init settings service for:', _0x506ae1), ensureSettingsFiles(_0x506ae1);
    },
    'knownSettings': function knownSettings() {
        const _0x21ac08 = _0x53f8cc, _0x206530 = { 'OrREx': _0x21ac08(402) };
        return [_0x206530[_0x21ac08(403)]];
    },
    'get': function get(_0x16d626) {
        const _0x204de9 = _0x53f8cc, _0x46bf58 = {
                'bIjQb': function (_0x2bce8b, _0x45cdca) {
                    return _0x2bce8b < _0x45cdca;
                }
            }, _0x305857 = this[_0x204de9(404)]();
        if (!_0x16d626 || _0x46bf58['bIjQb'](_[_0x204de9(405)](_0x305857, _0x16d626), -431 * -4 + -3 * 899 + 973))
            throw new errors[(_0x204de9(406))]({
                'message': _0x204de9(407) + _0x16d626 + '\'.',
                'help': 'Please use only the supported settings: ' + _0x305857 + '.'
            });
        return SettingsLoader(_0x16d626);
    },
    'getAll': function getAll() {
        const _0xcc9649 = _0x53f8cc, _0x6bb177 = {
                'ZnQds': function (_0x3d9d9, _0x2b765f) {
                    return _0x3d9d9(_0x2b765f);
                }
            }, _0x2d681b = this[_0xcc9649(404)](), _0x1d1f65 = {};
        return _[_0xcc9649(408)](_0x2d681b, function (_0x113a01) {
            const _0x251056 = _0xcc9649;
            _0x1d1f65[_0x113a01] = _0x6bb177[_0x251056(409)](SettingsLoader, _0x113a01);
        }), _0x1d1f65;
    },
    'getDefaulHash': _0x5bee77 => {
        return defaultHashes[_0x5bee77];
    },
    'getCurrentHash': async _0x2c2839 => {
        const _0x3bd03d = _0x53f8cc, _0x483622 = await SettingsLoader[_0x3bd03d(410)](_0x2c2839);
        return calculateHash(JSON[_0x3bd03d(411)](_0x483622));
    }
};