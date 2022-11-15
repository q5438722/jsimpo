const _0x172e = [
    '296350GIQiEA',
    '72245bXYxhd',
    '381256UIqYLs',
    '471042SJqREo',
    '316200aIkSkZ',
    '../../services/proxy',
    '../../../shared/url-utils',
    '@tryghost/logging',
    '@tryghost/errors',
    './lib/middleware',
    './lib/router',
    './lib/helpers',
    'private',
    'getSubdir',
    'split',
    'GhostError',
    'errors.config.urlCannotContainPrivateSubdir.help',
    'exit',
    'exports',
    'routeService',
    'registerRouter',
    'use',
    'checkIsPrivate',
    'filterPrivateRoutes',
    'handle404',
    '208171KyOYsC',
    '515389axgfiJ'
];
const _0x38074d = _0x1af7;
function _0x1af7(_0x56ec3d, _0x46d7fb) {
    return _0x1af7 = function (_0x172eb5, _0x1af722) {
        _0x172eb5 = _0x172eb5 - 0x76;
        let _0x2cccfd = _0x172e[_0x172eb5];
        return _0x2cccfd;
    }, _0x1af7(_0x56ec3d, _0x46d7fb);
}
(function (_0x46e84f, _0x4b1d66) {
    const _0x55a225 = _0x1af7;
    while (!![]) {
        try {
            const _0x2fcc77 = parseInt(_0x55a225(0x76)) + -parseInt(_0x55a225(0x77)) + parseInt(_0x55a225(0x78)) + -parseInt(_0x55a225(0x79)) + -parseInt(_0x55a225(0x7a)) + parseInt(_0x55a225(0x7b)) + parseInt(_0x55a225(0x7c));
            if (_0x2fcc77 === _0x4b1d66)
                break;
            else
                _0x46e84f['push'](_0x46e84f['shift']());
        } catch (_0x4af956) {
            _0x46e84f['push'](_0x46e84f['shift']());
        }
    }
}(_0x172e, 0x4ed39));
const {i18n} = require(_0x38074d(0x7d)), urlUtils = require(_0x38074d(0x7e)), logging = require(_0x38074d(0x7f)), errors = require(_0x38074d(0x80)), middleware = require(_0x38074d(0x81)), router = require(_0x38074d(0x82)), registerHelpers = require(_0x38074d(0x83)), PRIVATE_KEYWORD = _0x38074d(0x84);
let checkSubdir = function checkSubdir() {
    const _0x16d41b = _0x38074d;
    let _0x51e2b7 = '';
    urlUtils[_0x16d41b(0x85)]() && (_0x51e2b7 = urlUtils['getSubdir']()[_0x16d41b(0x86)]('/'), _0x51e2b7['pop']() === PRIVATE_KEYWORD && (logging['error'](new errors[(_0x16d41b(0x87))]({
        'message': i18n['t']('errors.config.urlCannotContainPrivateSubdir.error'),
        'context': i18n['t']('errors.config.urlCannotContainPrivateSubdir.description'),
        'help': i18n['t'](_0x16d41b(0x88))
    })), process[_0x16d41b(0x89)](0x0)));
};
module[_0x38074d(0x8a)] = {
    'activate': function activate(_0x3de12d) {
        const _0x5a80bc = _0x38074d;
        let _0x34545b = '/' + PRIVATE_KEYWORD + '/';
        checkSubdir(), _0x3de12d[_0x5a80bc(0x8b)][_0x5a80bc(0x8c)](_0x34545b, router), registerHelpers(_0x3de12d);
    },
    'setupMiddleware': function setupMiddleware(_0x5131e4) {
        const _0x470f17 = _0x38074d;
        _0x5131e4[_0x470f17(0x8d)](middleware[_0x470f17(0x8e)]), _0x5131e4[_0x470f17(0x8d)](middleware[_0x470f17(0x8f)]);
    },
    'setupErrorHandling': function setupErrorHandling(_0xf16f93) {
        const _0x57090c = _0x38074d;
        _0xf16f93[_0x57090c(0x8d)](middleware[_0x57090c(0x90)]);
    }
};
