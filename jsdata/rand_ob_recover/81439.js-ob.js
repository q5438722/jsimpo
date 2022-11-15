const i18n = require('../../../../shared/i18n'), errors = require(_0x2fc583(397)), urlUtils = require(_0x2fc583(398));
module[_0x2fc583(399)] = function handlePageParam(_0x151dbb, _0x3ab2ae, _0xe13c12, _0x2c8a5f) {
    const _0x42609b = _0x2fc583, _0x4e2564 = {
            'IcnBZ': _0x42609b(400),
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
        }, _0x580a5c = new RegExp(_0x4e2564[_0x42609b(401)]);
    _0x2c8a5f = _0x4e2564[_0x42609b(402)](parseInt, _0x2c8a5f, 20 * 163 + -9779 + 6529);
    if (_0x4e2564[_0x42609b(403)](_0x2c8a5f, 578 + -9 * -665 + -6562))
        return urlUtils['redirect301'](_0x3ab2ae, _0x151dbb['originalUrl']['replace'](_0x580a5c, '/'));
    else
        return _0x4e2564[_0x42609b(404)](_0x2c8a5f, 5936 + 1 * -9649 + -2 * -1857) || _0x4e2564[_0x42609b(405)](isNaN, _0x2c8a5f) ? _0x4e2564[_0x42609b(405)](_0xe13c12, new errors[(_0x42609b(406))]({ 'message': i18n['t']('errors.errors.pageNotFound') })) : (_0x151dbb[_0x42609b(407)][_0x42609b(408)] = _0x2c8a5f, _0x4e2564[_0x42609b(409)](_0xe13c12));
};