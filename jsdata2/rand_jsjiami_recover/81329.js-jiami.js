const {i18n} = require('../../services/proxy');
const urlUtils = require('../../../shared/url-utils');
const logging = require('@tryghost/logging');
const errors = require('@tryghost/errors');
const middleware = require('./lib/middleware');
const router = require('./lib/router');
const registerHelpers = require('./lib/helpers');
const PRIVATE_KEYWORD = 'private';
let checkSubdir = function checkSubdir() {
    let _0x55ac05 = '';
    if (urlUtils['getSubdir']()) {
        _0x55ac05 = urlUtils['getSubdir']()['split']('/');
        if (_0x55ac05['pop']() === PRIVATE_KEYWORD) {
            logging['error'](new errors['GhostError']({
                'message': i18n['t']('errors.config.urlCannotContainPrivateSubdir.error'),
                'context': i18n['t']('errors.config.urlCannotContainPrivateSubdir.description'),
                'help': i18n['t']('errors.config.urlCannotContainPrivateSubdir.help')
            }));
            process['exit'](0);
        }
    }
};
module['exports'] = {
    'activate': function activate(_0x48d05e) {
        let _0x29dc96 = '/' + PRIVATE_KEYWORD + '/';
        checkSubdir();
        _0x48d05e['routeService']['registerRouter'](_0x29dc96, router);
        registerHelpers(_0x48d05e);
    },
    'setupMiddleware': function setupMiddleware(_0xdb6d19) {
        _0xdb6d19['use'](middleware['checkIsPrivate']);
        _0xdb6d19['use'](middleware['filterPrivateRoutes']);
    },
    'setupErrorHandling': function setupErrorHandling(_0x35280e) {
        _0x35280e['use'](middleware['handle404']);
    }
};