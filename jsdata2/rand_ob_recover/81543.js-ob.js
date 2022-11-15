const debug = require('@tryghost/debug')(_0x242daa(467)), {URL} = require(_0x242daa(468)), cors = require('cors'), bodyParser = require(_0x242daa(469)), express = require('../../../shared/express'), urlUtils = require(_0x242daa(470)), membersService = require(_0x242daa(471)), middleware = membersService[_0x242daa(472)], shared = require(_0x242daa(473));
module['exports'] = function setupMembersApp() {
    const _0x87faeb = _0x242daa, _0x26b975 = {
            'gMldX': function (_0x36150d, _0x41c45c) {
                return _0x36150d(_0x41c45c);
            },
            'IRclt': 'Members App setup start',
            'kSkmt': _0x87faeb(467),
            'DPogI': _0x87faeb(474),
            'MwwmQ': '/api/member',
            'GXass': _0x87faeb(475),
            'gNIia': _0x87faeb(476),
            'XYDtD': '/api/send-magic-link',
            'yerHm': _0x87faeb(477),
            'bCmoY': _0x87faeb(478),
            'GGTXc': _0x87faeb(479),
            'dojGx': '/webhooks',
            'BUMIp': function (_0x3c9da0, _0x2c0b00) {
                return _0x3c9da0(_0x2c0b00);
            },
            'WjBCE': _0x87faeb(480)
        };
    _0x26b975['gMldX'](debug, _0x26b975[_0x87faeb(481)]);
    const _0x365853 = _0x26b975[_0x87faeb(482)](express, _0x26b975['kSkmt']);
    _0x365853['use'](shared[_0x87faeb(483)][_0x87faeb(484)]), _0x365853[_0x87faeb(485)](shared[_0x87faeb(483)][_0x87faeb(486)](_0x26b975[_0x87faeb(487)]));
    const _0x56e923 = new URL(urlUtils[_0x87faeb(488)]());
    return _0x365853[_0x87faeb(485)](cors(_0x56e923[_0x87faeb(489)])), _0x365853[_0x87faeb(485)](middleware[_0x87faeb(490)]), _0x365853[_0x87faeb(491)](_0x87faeb(492), middleware[_0x87faeb(493)]), _0x365853[_0x87faeb(494)](_0x26b975[_0x87faeb(495)], middleware['getMemberData']), _0x365853['put'](_0x26b975[_0x87faeb(495)], bodyParser[_0x87faeb(496)]({ 'limit': _0x26b975['GXass'] }), middleware[_0x87faeb(497)]), _0x365853[_0x87faeb(494)](_0x26b975['gNIia'], middleware[_0x87faeb(498)]), _0x365853['delete']('/api/session', middleware['deleteSession']), _0x365853[_0x87faeb(494)]('/api/site', middleware[_0x87faeb(499)]), _0x365853[_0x87faeb(491)](_0x26b975[_0x87faeb(500)], bodyParser[_0x87faeb(496)](), shared[_0x87faeb(483)][_0x87faeb(501)][_0x87faeb(502)], (_0xb189ae, _0x307f06, _0x193f14) => membersService['api'][_0x87faeb(472)]['sendMagicLink'](_0xb189ae, _0x307f06, _0x193f14)), _0x365853[_0x87faeb(491)](_0x26b975[_0x87faeb(503)], (_0x16df42, _0x2d3616, _0x152095) => membersService[_0x87faeb(504)][_0x87faeb(472)]['createCheckoutSession'](_0x16df42, _0x2d3616, _0x152095)), _0x365853[_0x87faeb(491)](_0x26b975[_0x87faeb(505)], (_0x325f3e, _0x3d1455, _0x26e5f2) => membersService['api'][_0x87faeb(472)][_0x87faeb(506)](_0x325f3e, _0x3d1455, _0x26e5f2)), _0x365853[_0x87faeb(507)]('/api/subscriptions/:id', (_0x5f2451, _0xa8303a, _0x28b2d6) => membersService[_0x87faeb(504)]['middleware'][_0x87faeb(508)](_0x5f2451, _0xa8303a, _0x28b2d6)), _0x365853[_0x87faeb(485)](_0x87faeb(479), shared[_0x87faeb(483)][_0x87faeb(509)]['resourceNotFound']), _0x365853['use'](_0x26b975[_0x87faeb(510)], shared[_0x87faeb(483)]['errorHandler']['handleJSONResponseV2']), _0x365853[_0x87faeb(485)](_0x26b975[_0x87faeb(511)], shared[_0x87faeb(483)][_0x87faeb(509)][_0x87faeb(512)]), _0x365853[_0x87faeb(485)](_0x26b975[_0x87faeb(511)], shared['middlewares']['errorHandler'][_0x87faeb(513)]), _0x26b975[_0x87faeb(514)](debug, _0x26b975[_0x87faeb(515)]), _0x365853;
};