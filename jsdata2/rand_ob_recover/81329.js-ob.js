const {i18n} = require('../../services/proxy'), urlUtils = require(_0x26ca91(193)), logging = require(_0x26ca91(194)), errors = require(_0x26ca91(195)), middleware = require(_0x26ca91(196)), router = require(_0x26ca91(197)), registerHelpers = require('./lib/helpers'), PRIVATE_KEYWORD = _0x26ca91(198);
let checkSubdir = function checkSubdir() {
    const _0x4c0af5 = _0x26ca91, _0x350e8c = {
            'qiEwM': function (_0x153ea5, _0x24176f) {
                return _0x153ea5 === _0x24176f;
            },
            'hijtj': _0x4c0af5(199),
            'eJeYH': 'errors.config.urlCannotContainPrivateSubdir.help'
        };
    let _0x290e04 = '';
    urlUtils[_0x4c0af5(200)]() && (_0x290e04 = urlUtils[_0x4c0af5(200)]()[_0x4c0af5(201)]('/'), _0x350e8c['qiEwM'](_0x290e04[_0x4c0af5(202)](), PRIVATE_KEYWORD) && (logging[_0x4c0af5(203)](new errors[(_0x4c0af5(204))]({
        'message': i18n['t'](_0x350e8c[_0x4c0af5(205)]),
        'context': i18n['t'](_0x4c0af5(206)),
        'help': i18n['t'](_0x350e8c['eJeYH'])
    })), process['exit'](1649 + -5 * -233 + -2814)));
};
module[_0x26ca91(207)] = {
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
        _0x52f1ae[_0x1eab45(208)](checkSubdir), _0x949ef4['routeService'][_0x1eab45(209)](_0x9babef, router), _0x52f1ae[_0x1eab45(210)](registerHelpers, _0x949ef4);
    },
    'setupMiddleware': function setupMiddleware(_0x381c9d) {
        const _0x5403ad = _0x26ca91;
        _0x381c9d[_0x5403ad(211)](middleware[_0x5403ad(212)]), _0x381c9d[_0x5403ad(211)](middleware[_0x5403ad(213)]);
    },
    'setupErrorHandling': function setupErrorHandling(_0x1ac374) {
        _0x1ac374['use'](middleware['handle404']);
    }
};