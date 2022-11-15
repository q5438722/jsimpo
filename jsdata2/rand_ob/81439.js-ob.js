const _0x3451 = [
    'FWUTx',
    '534056VXGfpn',
    '520581NxXwuK',
    '16091qneChN',
    '70394mUegOs',
    '2tTAvmB',
    '3GBPFKu',
    '46711qCoLPE',
    '351uFpGIG',
    '383iWXlVz',
    '1185255pUKpbq',
    '@tryghost/errors',
    '../../../../shared/url-utils',
    'exports',
    '/page/(.*)?/',
    'errors.errors.pageNotFound',
    'UxGed',
    'oLEhs',
    'JAKEJ',
    'originalUrl',
    'replace',
    'nRjuk',
    'NotFoundError',
    'params',
    'page'
];
const _0x8469a8 = _0x1b1d;
(function (_0x66ddd3, _0x5d4a72) {
    const _0x5beb4d = _0x1b1d;
    while (!![]) {
        try {
            const _0x360935 = -parseInt(_0x5beb4d(0x140)) + -parseInt(_0x5beb4d(0x141)) + -parseInt(_0x5beb4d(0x142)) + -parseInt(_0x5beb4d(0x143)) * -parseInt(_0x5beb4d(0x144)) + -parseInt(_0x5beb4d(0x145)) * -parseInt(_0x5beb4d(0x146)) + parseInt(_0x5beb4d(0x147)) * parseInt(_0x5beb4d(0x148)) + parseInt(_0x5beb4d(0x149));
            if (_0x360935 === _0x5d4a72)
                break;
            else
                _0x66ddd3['push'](_0x66ddd3['shift']());
        } catch (_0x3da2c3) {
            _0x66ddd3['push'](_0x66ddd3['shift']());
        }
    }
}(_0x3451, -0x3 * -0x15661 + 0x121c1 * -0xe + 0x4fad1 * 0x4));
function _0x1b1d(_0x3ec957, _0x252ed0) {
    return _0x1b1d = function (_0x4e4202, _0x1a379c) {
        _0x4e4202 = _0x4e4202 - (-0x15 * 0x2f + -0x1 * 0x19e4 + -0x159 * -0x17);
        let _0x32c6c3 = _0x3451[_0x4e4202];
        return _0x32c6c3;
    }, _0x1b1d(_0x3ec957, _0x252ed0);
}
const i18n = require('../../../../shared/i18n'), errors = require(_0x8469a8(0x14a)), urlUtils = require(_0x8469a8(0x14b));
module[_0x8469a8(0x14c)] = function handlePageParam(_0x4c3431, _0x32294a, _0x17af40, _0xaba5dc) {
    const _0x3b93e5 = _0x8469a8, _0x3d13c9 = {
            'UxGed': _0x3b93e5(0x14d),
            'oLEhs': function (_0x4c3c95, _0x2eab12, _0x4789f1) {
                return _0x4c3c95(_0x2eab12, _0x4789f1);
            },
            'JAKEJ': function (_0x172e4b, _0x5b4d05) {
                return _0x172e4b === _0x5b4d05;
            },
            'nRjuk': function (_0x207756, _0x46a701) {
                return _0x207756 < _0x46a701;
            },
            'hHHLm': _0x3b93e5(0x14e),
            'FWUTx': function (_0x5104b9) {
                return _0x5104b9();
            }
        }, _0x3e4016 = new RegExp(_0x3d13c9[_0x3b93e5(0x14f)]);
    _0xaba5dc = _0x3d13c9[_0x3b93e5(0x150)](parseInt, _0xaba5dc, 0x1e47 + 0x1b74 * 0x1 + 0x669 * -0x9);
    if (_0x3d13c9[_0x3b93e5(0x151)](_0xaba5dc, 0x1c49 + 0x2366 + -0x3fae))
        return urlUtils['redirect301'](_0x32294a, _0x4c3431[_0x3b93e5(0x152)][_0x3b93e5(0x153)](_0x3e4016, '/'));
    else
        return _0x3d13c9[_0x3b93e5(0x154)](_0xaba5dc, -0x1191 + -0x13e8 + 0x257a) || isNaN(_0xaba5dc) ? _0x17af40(new errors[(_0x3b93e5(0x155))]({ 'message': i18n['t'](_0x3d13c9['hHHLm']) })) : (_0x4c3431[_0x3b93e5(0x156)][_0x3b93e5(0x157)] = _0xaba5dc, _0x3d13c9[_0x3b93e5(0x158)](_0x17af40));
};
