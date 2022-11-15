const i18n = require(_0x5d753b(237)), errors = require(_0x5d753b(238)), urlUtils = require(_0x5d753b(239));
function _0x43c4(_0x3493ff, _0x5bb663) {
    return _0x43c4 = function (_0x22d284, _0x43c408) {
        _0x22d284 = _0x22d284 - 227;
        let _0x5e342d = _0x22d2[_0x22d284];
        return _0x5e342d;
    }, _0x43c4(_0x3493ff, _0x5bb663);
}
module[_0x5d753b(240)] = function handlePageParam(_0x318fa2, _0x3e5273, _0x362d58, _0x93bb5d) {
    const _0x119e9b = _0x5d753b, _0x1ea72c = new RegExp(_0x119e9b(241));
    _0x93bb5d = parseInt(_0x93bb5d, 10);
    if (_0x93bb5d === 1)
        return urlUtils[_0x119e9b(242)](_0x3e5273, _0x318fa2[_0x119e9b(243)][_0x119e9b(244)](_0x1ea72c, '/'));
    else
        return _0x93bb5d < 1 || isNaN(_0x93bb5d) ? _0x362d58(new errors[(_0x119e9b(245))]({ 'message': i18n['t']('errors.errors.pageNotFound') })) : (_0x318fa2['params']['page'] = _0x93bb5d, _0x362d58());
};