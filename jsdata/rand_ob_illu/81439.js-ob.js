const _0x1b4f = ['@tryghost/errors', '../../../../shared/url-utils', 'exports', '/page/(.*)?/', 'IcnBZ', 'HgOBI', 'uXoKX', 'UUAbP', 'YHooE', 'NotFoundError', 'params', 'page', 'tmoxL', '84215bcTESz', '130nSXINA', '4119iIucmh', '1662mWYYXB', '403dSjzDO', '90593lQrkHL', '13ugHBvL', '352470ryfohn', '61316hFHPSy', '4hZgEBQ', '542941uTeWPV'];

function _0xdb23(_0x593775, _0xddc4a7) {
    return _0xdb23 = function (_0x3e1050, _0x2f29b7) {
        _0x3e1050 = _0x3e1050 - 386;
        const _0x424968 = _0x1b4f[_0x3e1050];

        return _0x424968;
    }, _0xdb23(_0x593775, _0xddc4a7);
}
const _0x2fc583 = _0xdb23;

(function (_0x21ea6a, _0x480b47) {
    const _0x5e688d = _0xdb23;

    while (true) {
        try {
            const _0x44bfb7 = -parseInt(_0x5e688d(0x182)) + -parseInt(_0x5e688d(0x183)) * -parseInt(_0x5e688d(0x184)) + parseInt(_0x5e688d(0x185)) * parseInt(_0x5e688d(0x186)) + parseInt(_0x5e688d(0x187)) * -parseInt(_0x5e688d(0x188)) + parseInt(_0x5e688d(0x189)) + -parseInt(_0x5e688d(0x18a)) * parseInt(_0x5e688d(0x18b)) + parseInt(_0x5e688d(0x18c));

            if (_0x44bfb7 === _0x480b47) break;else _0x21ea6a.push(_0x21ea6a.shift());
        } catch (_0x26f293) {
            _0x21ea6a.push(_0x21ea6a.shift());
        }
    }
})(_0x1b4f, 593479);

const i18n = require('../../../../shared/i18n');

const errors = require(_0x2fc583(0x18d));

const urlUtils = require(_0x2fc583(0x18e));

module[_0x2fc583(0x18f)] = function handlePageParam(_0x151dbb, _0x3ab2ae, _0xe13c12, _0x2c8a5f) {
    const _0x42609b = _0x2fc583;
    const _0x4e2564 = {
        'IcnBZ': _0x42609b(0x190),
        'HgOBI': function (_0x3210fc, _0x4f1433, _0x3cfa5d) {
            return _0x3210fc(_0x4f1433, _0x3cfa5d);
        },
        'uXoKX': function (_0x5c23d4, _0x337fb9) {
            return _0x5c23d4 === _0x337fb9;
        },
        'UUAbP': function (_0x54ff37, _0x16a381) {
            return _0x54ff37 < _0x16a381;
        },
        'YHooE': function (_0x10e218, _0x1c4c8a) {
            return _0x10e218(_0x1c4c8a);
        },
        'tmoxL': function (_0x540260) {
            return _0x540260();
        }
    };

    const _0x580a5c = new RegExp(_0x4e2564[_0x42609b(0x191)]);

    _0x2c8a5f = _0x4e2564[_0x42609b(0x192)](parseInt, _0x2c8a5f, 10);
    if (_0x4e2564[_0x42609b(0x193)](_0x2c8a5f, 1)) return urlUtils.redirect301(_0x3ab2ae, _0x151dbb.originalUrl.replace(_0x580a5c, '/'));else return _0x4e2564[_0x42609b(0x194)](_0x2c8a5f, 1) || _0x4e2564[_0x42609b(0x195)](isNaN, _0x2c8a5f) ? _0x4e2564[_0x42609b(0x195)](_0xe13c12, new errors[_0x42609b(0x196)]({ 'message': i18n.t('errors.errors.pageNotFound') })) : (_0x151dbb[_0x42609b(0x197)][_0x42609b(0x198)] = _0x2c8a5f, _0x4e2564[_0x42609b(0x199)](_0xe13c12));
};
