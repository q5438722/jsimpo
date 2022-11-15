const {i18n} = require(_0x38074d(125)), urlUtils = require(_0x38074d(126)), logging = require(_0x38074d(127)), errors = require(_0x38074d(128)), middleware = require(_0x38074d(129)), router = require(_0x38074d(130)), registerHelpers = require(_0x38074d(131)), PRIVATE_KEYWORD = _0x38074d(132);
let checkSubdir = function checkSubdir() {
    const _0x16d41b = _0x38074d;
    let _0x51e2b7 = '';
    urlUtils[_0x16d41b(133)]() && (_0x51e2b7 = urlUtils['getSubdir']()[_0x16d41b(134)]('/'), _0x51e2b7['pop']() === PRIVATE_KEYWORD && (logging['error'](new errors[(_0x16d41b(135))]({
        'message': i18n['t']('errors.config.urlCannotContainPrivateSubdir.error'),
        'context': i18n['t']('errors.config.urlCannotContainPrivateSubdir.description'),
        'help': i18n['t'](_0x16d41b(136))
    })), process[_0x16d41b(137)](0)));
};
module[_0x38074d(138)] = {
    'activate': function activate(_0x3de12d) {
        const _0x5a80bc = _0x38074d;
        let _0x34545b = '/' + PRIVATE_KEYWORD + '/';
        checkSubdir(), _0x3de12d[_0x5a80bc(139)][_0x5a80bc(140)](_0x34545b, router), registerHelpers(_0x3de12d);
    },
    'setupMiddleware': function setupMiddleware(_0x5131e4) {
        const _0x470f17 = _0x38074d;
        _0x5131e4[_0x470f17(141)](middleware[_0x470f17(142)]), _0x5131e4[_0x470f17(141)](middleware[_0x470f17(143)]);
    },
    'setupErrorHandling': function setupErrorHandling(_0xf16f93) {
        const _0x57090c = _0x38074d;
        _0xf16f93[_0x57090c(141)](middleware[_0x57090c(144)]);
    }
};