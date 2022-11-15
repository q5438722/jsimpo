const i18n = require(_0x5c2cc4(339)), errors = require('@tryghost/errors'), urlUtils = require(_0x5c2cc4(340));
function _0x25b8(_0x5159f, _0x1464df) {
    return _0x25b8 = function (_0x8946cb, _0x25b888) {
        _0x8946cb = _0x8946cb - 328;
        let _0xd3828c = _0x8946[_0x8946cb];
        return _0xd3828c;
    }, _0x25b8(_0x5159f, _0x1464df);
}
module[_0x5c2cc4(341)] = function handlePageParam(_0xcac7cf, _0xd7ac51, _0x589f61, _0x101645) {
    const _0x20f8ef = _0x5c2cc4, _0x29898b = new RegExp(_0x20f8ef(342));
    _0x101645 = parseInt(_0x101645, 10);
    if (_0x101645 === 1)
        return urlUtils[_0x20f8ef(343)](_0xd7ac51, _0xcac7cf[_0x20f8ef(344)][_0x20f8ef(345)](_0x29898b, '/'));
    else
        return _0x101645 < 1 || isNaN(_0x101645) ? _0x589f61(new errors['NotFoundError']({ 'message': i18n['t'](_0x20f8ef(346)) })) : (_0xcac7cf['params'][_0x20f8ef(347)] = _0x101645, _0x589f61());
};