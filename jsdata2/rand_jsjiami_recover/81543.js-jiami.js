const debug = require('@tryghost/debug')('members');
const {URL} = require('url');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('../../../shared/express');
const urlUtils = require('../../../shared/url-utils');
const membersService = require('../../services/members');
const middleware = membersService['middleware'];
const shared = require('../shared');
module['exports'] = function setupMembersApp() {
    debug('Members App setup start');
    const _0x130f90 = express('members');
    _0x130f90['use'](shared['middlewares']['maintenance']);
    _0x130f90['use'](shared['middlewares']['cacheControl']('private'));
    const _0x42cc79 = new URL(urlUtils['getSiteUrl']());
    _0x130f90['use'](cors(_0x42cc79['origin']));
    _0x130f90['use'](middleware['createSessionFromMagicLink']);
    _0x130f90['post']('/webhooks/stripe', middleware['stripeWebhooks']);
    _0x130f90['get']('/api/member', middleware['getMemberData']);
    _0x130f90['put']('/api/member', bodyParser['json']({ 'limit': '1mb' }), middleware['updateMemberData']);
    _0x130f90['get']('/api/session', middleware['getIdentityToken']);
    _0x130f90['delete']('/api/session', middleware['deleteSession']);
    _0x130f90['get']('/api/site', middleware['getMemberSiteData']);
    _0x130f90['post']('/api/send-magic-link', bodyParser['json'](), shared['middlewares']['brute']['membersAuth'], (_0x174ef3, _0x361c52, _0x3b36b0) => membersService['api']['middleware']['sendMagicLink'](_0x174ef3, _0x361c52, _0x3b36b0));
    _0x130f90['post']('/api/create-stripe-checkout-session', (_0x24b359, _0x502fee, _0x5a0be9) => membersService['api']['middleware']['createCheckoutSession'](_0x24b359, _0x502fee, _0x5a0be9));
    _0x130f90['post']('/api/create-stripe-update-session', (_0x153e84, _0x1c40ea, _0x47ccd3) => membersService['api']['middleware']['createCheckoutSetupSession'](_0x153e84, _0x1c40ea, _0x47ccd3));
    _0x130f90['put']('/api/subscriptions/:id', (_0x2850c5, _0x30b8bd, _0x42ccd3) => membersService['api']['middleware']['updateSubscription'](_0x2850c5, _0x30b8bd, _0x42ccd3));
    _0x130f90['use']('/api', shared['middlewares']['errorHandler']['resourceNotFound']);
    _0x130f90['use']('/api', shared['middlewares']['errorHandler']['handleJSONResponseV2']);
    _0x130f90['use']('/webhooks', shared['middlewares']['errorHandler']['resourceNotFound']);
    _0x130f90['use']('/webhooks', shared['middlewares']['errorHandler']['handleJSONResponseV2']);
    debug('Members App setup end');
    return _0x130f90;
};