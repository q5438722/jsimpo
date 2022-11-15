const _0x22d2 = [
    '157411XyzZye',
    '7807dJwFcS',
    '17mOEAnV',
    '57303TUdwmD',
    '9ZhWhud',
    '369672QIOjjv',
    '76331xnsOPF',
    '1LgfJeu',
    '220249guCFCb',
    '1479446fdGMjH',
    '../../../../shared/i18n',
    '@tryghost/errors',
    '../../../../shared/url-utils',
    'exports',
    '/page/(.*)?/',
    'redirect301',
    'originalUrl',
    'replace',
    'NotFoundError'
];
const _0x5d753b = _0x43c4;
(function (_0x5aa9f4, _0x3e8e46) {
    const _0x367519 = _0x43c4;
    while (!![]) {
        try {
            const _0x2929e9 = -parseInt(_0x367519(0xe3)) + parseInt(_0x367519(0xe4)) * parseInt(_0x367519(0xe5)) + parseInt(_0x367519(0xe6)) * -parseInt(_0x367519(0xe7)) + -parseInt(_0x367519(0xe8)) + -parseInt(_0x367519(0xe9)) + -parseInt(_0x367519(0xea)) * parseInt(_0x367519(0xeb)) + parseInt(_0x367519(0xec));
            if (_0x2929e9 === _0x3e8e46)
                break;
            else
                _0x5aa9f4['push'](_0x5aa9f4['shift']());
        } catch (_0xdac013) {
            _0x5aa9f4['push'](_0x5aa9f4['shift']());
        }
    }
}(_0x22d2, 0x42987));
const i18n = require(_0x5d753b(0xed)), errors = require(_0x5d753b(0xee)), urlUtils = require(_0x5d753b(0xef));
function _0x43c4(_0x3493ff, _0x5bb663) {
    return _0x43c4 = function (_0x22d284, _0x43c408) {
        _0x22d284 = _0x22d284 - 0xe3;
        let _0x5e342d = _0x22d2[_0x22d284];
        return _0x5e342d;
    }, _0x43c4(_0x3493ff, _0x5bb663);
}
module[_0x5d753b(0xf0)] = function handlePageParam(_0x318fa2, _0x3e5273, _0x362d58, _0x93bb5d) {
    const _0x119e9b = _0x5d753b, _0x1ea72c = new RegExp(_0x119e9b(0xf1));
    _0x93bb5d = parseInt(_0x93bb5d, 0xa);
    if (_0x93bb5d === 0x1)
        return urlUtils[_0x119e9b(0xf2)](_0x3e5273, _0x318fa2[_0x119e9b(0xf3)][_0x119e9b(0xf4)](_0x1ea72c, '/'));
    else
        return _0x93bb5d < 0x1 || isNaN(_0x93bb5d) ? _0x362d58(new errors[(_0x119e9b(0xf5))]({ 'message': i18n['t']('errors.errors.pageNotFound') })) : (_0x318fa2['params']['page'] = _0x93bb5d, _0x362d58());
};
