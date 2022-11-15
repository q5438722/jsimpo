const _0x8946 = [
    'replace',
    'errors.errors.pageNotFound',
    'page',
    '521435gZkyxq',
    '14mCPPWw',
    '43448fAqjeQ',
    '745236UyFYSJ',
    '1psrnHR',
    '30223oTbEfY',
    '598214DmpeuQ',
    '53441jdvdBx',
    '5AbBEFq',
    '2bGlEgx',
    '48889ZMjylH',
    '../../../../shared/i18n',
    '../../../../shared/url-utils',
    'exports',
    '/page/(.*)?/',
    'redirect301',
    'originalUrl'
];
const _0x5c2cc4 = _0x25b8;
(function (_0x4485bf, _0xcd0e27) {
    const _0x81cd50 = _0x25b8;
    while (!![]) {
        try {
            const _0x24fc1d = parseInt(_0x81cd50(0x148)) + parseInt(_0x81cd50(0x149)) * -parseInt(_0x81cd50(0x14a)) + parseInt(_0x81cd50(0x14b)) + parseInt(_0x81cd50(0x14c)) * parseInt(_0x81cd50(0x14d)) + -parseInt(_0x81cd50(0x14e)) + -parseInt(_0x81cd50(0x14f)) * -parseInt(_0x81cd50(0x150)) + -parseInt(_0x81cd50(0x151)) * -parseInt(_0x81cd50(0x152));
            if (_0x24fc1d === _0xcd0e27)
                break;
            else
                _0x4485bf['push'](_0x4485bf['shift']());
        } catch (_0x49461c) {
            _0x4485bf['push'](_0x4485bf['shift']());
        }
    }
}(_0x8946, 0x6f2df));
const i18n = require(_0x5c2cc4(0x153)), errors = require('@tryghost/errors'), urlUtils = require(_0x5c2cc4(0x154));
function _0x25b8(_0x5159f, _0x1464df) {
    return _0x25b8 = function (_0x8946cb, _0x25b888) {
        _0x8946cb = _0x8946cb - 0x148;
        let _0xd3828c = _0x8946[_0x8946cb];
        return _0xd3828c;
    }, _0x25b8(_0x5159f, _0x1464df);
}
module[_0x5c2cc4(0x155)] = function handlePageParam(_0xcac7cf, _0xd7ac51, _0x589f61, _0x101645) {
    const _0x20f8ef = _0x5c2cc4, _0x29898b = new RegExp(_0x20f8ef(0x156));
    _0x101645 = parseInt(_0x101645, 0xa);
    if (_0x101645 === 0x1)
        return urlUtils[_0x20f8ef(0x157)](_0xd7ac51, _0xcac7cf[_0x20f8ef(0x158)][_0x20f8ef(0x159)](_0x29898b, '/'));
    else
        return _0x101645 < 0x1 || isNaN(_0x101645) ? _0x589f61(new errors['NotFoundError']({ 'message': i18n['t'](_0x20f8ef(0x15a)) })) : (_0xcac7cf['params'][_0x20f8ef(0x15b)] = _0x101645, _0x589f61());
};
