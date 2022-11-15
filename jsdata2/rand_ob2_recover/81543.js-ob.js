function _0x53e8(_0xa355c3, _0x2e6220) {
    return _0x53e8 = function (_0x365693, _0x53e838) {
        _0x365693 = _0x365693 - 336;
        let _0x3432d3 = _0x3656[_0x365693];
        return _0x3432d3;
    }, _0x53e8(_0xa355c3, _0x2e6220);
}
const debug = require('@tryghost/debug')('members'), {URL} = require(_0x2266b6(347)), cors = require(_0x2266b6(348)), bodyParser = require('body-parser'), express = require(_0x2266b6(349)), urlUtils = require(_0x2266b6(350)), membersService = require(_0x2266b6(351)), middleware = membersService['middleware'], shared = require(_0x2266b6(352));
module[_0x2266b6(353)] = function setupMembersApp() {
    const _0x1c24af = _0x2266b6;
    debug(_0x1c24af(354));
    const _0x418a29 = express(_0x1c24af(355));
    _0x418a29[_0x1c24af(356)](shared[_0x1c24af(357)][_0x1c24af(358)]), _0x418a29[_0x1c24af(356)](shared[_0x1c24af(357)][_0x1c24af(359)](_0x1c24af(360)));
    const _0x1b5794 = new URL(urlUtils[_0x1c24af(361)]());
    return _0x418a29['use'](cors(_0x1b5794['origin'])), _0x418a29[_0x1c24af(356)](middleware[_0x1c24af(362)]), _0x418a29[_0x1c24af(363)]('/webhooks/stripe', middleware[_0x1c24af(364)]), _0x418a29[_0x1c24af(365)](_0x1c24af(366), middleware['getMemberData']), _0x418a29['put'](_0x1c24af(366), bodyParser[_0x1c24af(367)]({ 'limit': '1mb' }), middleware['updateMemberData']), _0x418a29['get']('/api/session', middleware[_0x1c24af(368)]), _0x418a29[_0x1c24af(369)](_0x1c24af(370), middleware[_0x1c24af(371)]), _0x418a29[_0x1c24af(365)]('/api/site', middleware[_0x1c24af(372)]), _0x418a29[_0x1c24af(363)](_0x1c24af(373), bodyParser['json'](), shared[_0x1c24af(357)]['brute'][_0x1c24af(374)], (_0x370af3, _0x23e459, _0x420e18) => membersService['api'][_0x1c24af(375)][_0x1c24af(376)](_0x370af3, _0x23e459, _0x420e18)), _0x418a29[_0x1c24af(363)](_0x1c24af(377), (_0x2cad72, _0x1b2c12, _0x16b267) => membersService[_0x1c24af(378)][_0x1c24af(375)][_0x1c24af(379)](_0x2cad72, _0x1b2c12, _0x16b267)), _0x418a29['post'](_0x1c24af(380), (_0x77c41d, _0x3deeb3, _0x30049d) => membersService[_0x1c24af(378)][_0x1c24af(375)][_0x1c24af(381)](_0x77c41d, _0x3deeb3, _0x30049d)), _0x418a29['put']('/api/subscriptions/:id', (_0x5d6022, _0x249208, _0x22bf12) => membersService['api'][_0x1c24af(375)][_0x1c24af(382)](_0x5d6022, _0x249208, _0x22bf12)), _0x418a29['use'](_0x1c24af(383), shared[_0x1c24af(357)]['errorHandler']['resourceNotFound']), _0x418a29[_0x1c24af(356)]('/api', shared[_0x1c24af(357)]['errorHandler']['handleJSONResponseV2']), _0x418a29[_0x1c24af(356)](_0x1c24af(384), shared[_0x1c24af(357)]['errorHandler'][_0x1c24af(385)]), _0x418a29[_0x1c24af(356)](_0x1c24af(384), shared[_0x1c24af(357)]['errorHandler'][_0x1c24af(386)]), debug(_0x1c24af(387)), _0x418a29;
};