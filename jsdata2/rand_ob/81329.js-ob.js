const _0x3629 = [
    'AOqSJ',
    'registerRouter',
    'bVgXN',
    'use',
    'checkIsPrivate',
    'filterPrivateRoutes',
    '9SGYaQu',
    '98391PiUbRG',
    '702492ArzxgD',
    '4998GsmmeV',
    '62QbGKET',
    '708810cUJEBT',
    '927146vTCWTw',
    '1kznHhG',
    '605638sRVeXs',
    '1FRszXw',
    '1230868yGrlBI',
    '../../../shared/url-utils',
    '@tryghost/logging',
    '@tryghost/errors',
    './lib/middleware',
    './lib/router',
    'private',
    'errors.config.urlCannotContainPrivateSubdir.error',
    'getSubdir',
    'split',
    'pop',
    'error',
    'GhostError',
    'hijtj',
    'errors.config.urlCannotContainPrivateSubdir.description',
    'exports'
];
const _0x26ca91 = _0x4584;
function _0x4584(_0x23fe1f, _0xa94956) {
    return _0x4584 = function (_0x2d257d, _0x7aff07) {
        _0x2d257d = _0x2d257d - (-0x238d * -0x1 + -0x22e * -0x1 + -0x2505);
        let _0x20c32e = _0x3629[_0x2d257d];
        return _0x20c32e;
    }, _0x4584(_0x23fe1f, _0xa94956);
}
(function (_0x876d47, _0x1d222f) {
    const _0xc87819 = _0x4584;
    while (!![]) {
        try {
            const _0x19a9bf = parseInt(_0xc87819(0xb6)) * -parseInt(_0xc87819(0xb7)) + parseInt(_0xc87819(0xb8)) + -parseInt(_0xc87819(0xb9)) * parseInt(_0xc87819(0xba)) + parseInt(_0xc87819(0xbb)) + -parseInt(_0xc87819(0xbc)) * -parseInt(_0xc87819(0xbd)) + -parseInt(_0xc87819(0xbe)) * -parseInt(_0xc87819(0xbf)) + -parseInt(_0xc87819(0xc0));
            if (_0x19a9bf === _0x1d222f)
                break;
            else
                _0x876d47['push'](_0x876d47['shift']());
        } catch (_0x21deb3) {
            _0x876d47['push'](_0x876d47['shift']());
        }
    }
}(_0x3629, -0x50f2c * -0x1 + 0x359e1 + -0x824e));
const {i18n} = require('../../services/proxy'), urlUtils = require(_0x26ca91(0xc1)), logging = require(_0x26ca91(0xc2)), errors = require(_0x26ca91(0xc3)), middleware = require(_0x26ca91(0xc4)), router = require(_0x26ca91(0xc5)), registerHelpers = require('./lib/helpers'), PRIVATE_KEYWORD = _0x26ca91(0xc6);
let checkSubdir = function checkSubdir() {
    const _0x4c0af5 = _0x26ca91, _0x350e8c = {
            'qiEwM': function (_0x153ea5, _0x24176f) {
                return _0x153ea5 === _0x24176f;
            },
            'hijtj': _0x4c0af5(0xc7),
            'eJeYH': 'errors.config.urlCannotContainPrivateSubdir.help'
        };
    let _0x290e04 = '';
    urlUtils[_0x4c0af5(0xc8)]() && (_0x290e04 = urlUtils[_0x4c0af5(0xc8)]()[_0x4c0af5(0xc9)]('/'), _0x350e8c['qiEwM'](_0x290e04[_0x4c0af5(0xca)](), PRIVATE_KEYWORD) && (logging[_0x4c0af5(0xcb)](new errors[(_0x4c0af5(0xcc))]({
        'message': i18n['t'](_0x350e8c[_0x4c0af5(0xcd)]),
        'context': i18n['t'](_0x4c0af5(0xce)),
        'help': i18n['t'](_0x350e8c['eJeYH'])
    })), process['exit'](0x671 + -0x5 * -0xe9 + -0xafe)));
};
module[_0x26ca91(0xcf)] = {
    'activate': function activate(_0x949ef4) {
        const _0x1eab45 = _0x26ca91, _0x52f1ae = {
                'AOqSJ': function (_0x189adc) {
                    return _0x189adc();
                },
                'bVgXN': function (_0x43bbe0, _0x56486d) {
                    return _0x43bbe0(_0x56486d);
                }
            };
        let _0x9babef = '/' + PRIVATE_KEYWORD + '/';
        _0x52f1ae[_0x1eab45(0xd0)](checkSubdir), _0x949ef4['routeService'][_0x1eab45(0xd1)](_0x9babef, router), _0x52f1ae[_0x1eab45(0xd2)](registerHelpers, _0x949ef4);
    },
    'setupMiddleware': function setupMiddleware(_0x381c9d) {
        const _0x5403ad = _0x26ca91;
        _0x381c9d[_0x5403ad(0xd3)](middleware[_0x5403ad(0xd4)]), _0x381c9d[_0x5403ad(0xd3)](middleware[_0x5403ad(0xd5)]);
    },
    'setupErrorHandling': function setupErrorHandling(_0x1ac374) {
        _0x1ac374['use'](middleware['handle404']);
    }
};
