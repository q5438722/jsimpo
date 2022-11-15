const _0x3656 = [
    '/api/create-stripe-checkout-session',
    'api',
    'createCheckoutSession',
    '/api/create-stripe-update-session',
    'createCheckoutSetupSession',
    'updateSubscription',
    '/api',
    '/webhooks',
    'resourceNotFound',
    'handleJSONResponseV2',
    'Members\x20App\x20setup\x20end',
    '136768qWabOX',
    '2wONXgx',
    '23591uRLqIz',
    '29gwrQQy',
    '620481XdKadC',
    '611863iNyvDv',
    '2lihXzZ',
    '469631xbEMQA',
    '1nJfHdl',
    '1416496XGEIyp',
    '4029282HoyBNH',
    'url',
    'cors',
    '../../../shared/express',
    '../../../shared/url-utils',
    '../../services/members',
    '../shared',
    'exports',
    'Members\x20App\x20setup\x20start',
    'members',
    'use',
    'middlewares',
    'maintenance',
    'cacheControl',
    'private',
    'getSiteUrl',
    'createSessionFromMagicLink',
    'post',
    'stripeWebhooks',
    'get',
    '/api/member',
    'json',
    'getIdentityToken',
    'delete',
    '/api/session',
    'deleteSession',
    'getMemberSiteData',
    '/api/send-magic-link',
    'membersAuth',
    'middleware',
    'sendMagicLink'
];
const _0x2266b6 = _0x53e8;
(function (_0x5e3e29, _0x4b8bcd) {
    const _0x4b5592 = _0x53e8;
    while (!![]) {
        try {
            const _0x5136e2 = -parseInt(_0x4b5592(0x150)) * -parseInt(_0x4b5592(0x151)) + -parseInt(_0x4b5592(0x152)) * parseInt(_0x4b5592(0x153)) + -parseInt(_0x4b5592(0x154)) + parseInt(_0x4b5592(0x155)) * -parseInt(_0x4b5592(0x156)) + parseInt(_0x4b5592(0x157)) * parseInt(_0x4b5592(0x158)) + -parseInt(_0x4b5592(0x159)) + parseInt(_0x4b5592(0x15a));
            if (_0x5136e2 === _0x4b8bcd)
                break;
            else
                _0x5e3e29['push'](_0x5e3e29['shift']());
        } catch (_0x297ce0) {
            _0x5e3e29['push'](_0x5e3e29['shift']());
        }
    }
}(_0x3656, 0xca0d7));
function _0x53e8(_0xa355c3, _0x2e6220) {
    return _0x53e8 = function (_0x365693, _0x53e838) {
        _0x365693 = _0x365693 - 0x150;
        let _0x3432d3 = _0x3656[_0x365693];
        return _0x3432d3;
    }, _0x53e8(_0xa355c3, _0x2e6220);
}
const debug = require('@tryghost/debug')('members'), {URL} = require(_0x2266b6(0x15b)), cors = require(_0x2266b6(0x15c)), bodyParser = require('body-parser'), express = require(_0x2266b6(0x15d)), urlUtils = require(_0x2266b6(0x15e)), membersService = require(_0x2266b6(0x15f)), middleware = membersService['middleware'], shared = require(_0x2266b6(0x160));
module[_0x2266b6(0x161)] = function setupMembersApp() {
    const _0x1c24af = _0x2266b6;
    debug(_0x1c24af(0x162));
    const _0x418a29 = express(_0x1c24af(0x163));
    _0x418a29[_0x1c24af(0x164)](shared[_0x1c24af(0x165)][_0x1c24af(0x166)]), _0x418a29[_0x1c24af(0x164)](shared[_0x1c24af(0x165)][_0x1c24af(0x167)](_0x1c24af(0x168)));
    const _0x1b5794 = new URL(urlUtils[_0x1c24af(0x169)]());
    return _0x418a29['use'](cors(_0x1b5794['origin'])), _0x418a29[_0x1c24af(0x164)](middleware[_0x1c24af(0x16a)]), _0x418a29[_0x1c24af(0x16b)]('/webhooks/stripe', middleware[_0x1c24af(0x16c)]), _0x418a29[_0x1c24af(0x16d)](_0x1c24af(0x16e), middleware['getMemberData']), _0x418a29['put'](_0x1c24af(0x16e), bodyParser[_0x1c24af(0x16f)]({ 'limit': '1mb' }), middleware['updateMemberData']), _0x418a29['get']('/api/session', middleware[_0x1c24af(0x170)]), _0x418a29[_0x1c24af(0x171)](_0x1c24af(0x172), middleware[_0x1c24af(0x173)]), _0x418a29[_0x1c24af(0x16d)]('/api/site', middleware[_0x1c24af(0x174)]), _0x418a29[_0x1c24af(0x16b)](_0x1c24af(0x175), bodyParser['json'](), shared[_0x1c24af(0x165)]['brute'][_0x1c24af(0x176)], (_0x370af3, _0x23e459, _0x420e18) => membersService['api'][_0x1c24af(0x177)][_0x1c24af(0x178)](_0x370af3, _0x23e459, _0x420e18)), _0x418a29[_0x1c24af(0x16b)](_0x1c24af(0x179), (_0x2cad72, _0x1b2c12, _0x16b267) => membersService[_0x1c24af(0x17a)][_0x1c24af(0x177)][_0x1c24af(0x17b)](_0x2cad72, _0x1b2c12, _0x16b267)), _0x418a29['post'](_0x1c24af(0x17c), (_0x77c41d, _0x3deeb3, _0x30049d) => membersService[_0x1c24af(0x17a)][_0x1c24af(0x177)][_0x1c24af(0x17d)](_0x77c41d, _0x3deeb3, _0x30049d)), _0x418a29['put']('/api/subscriptions/:id', (_0x5d6022, _0x249208, _0x22bf12) => membersService['api'][_0x1c24af(0x177)][_0x1c24af(0x17e)](_0x5d6022, _0x249208, _0x22bf12)), _0x418a29['use'](_0x1c24af(0x17f), shared[_0x1c24af(0x165)]['errorHandler']['resourceNotFound']), _0x418a29[_0x1c24af(0x164)]('/api', shared[_0x1c24af(0x165)]['errorHandler']['handleJSONResponseV2']), _0x418a29[_0x1c24af(0x164)](_0x1c24af(0x180), shared[_0x1c24af(0x165)]['errorHandler'][_0x1c24af(0x181)]), _0x418a29[_0x1c24af(0x164)](_0x1c24af(0x180), shared[_0x1c24af(0x165)]['errorHandler'][_0x1c24af(0x182)]), debug(_0x1c24af(0x183)), _0x418a29;
};
