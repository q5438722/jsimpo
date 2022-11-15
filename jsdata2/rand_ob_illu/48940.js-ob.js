const _0x427b = ['56JwPHZD', '1008925yMHTnl', '1HfXNDR', '231649FkCROJ', '3005007tRhYTS', 'JWGOr', 'env', 'SECRET_COOKIE_PASSWORD', 'next.js/examples/with-iron-session', 'NODE_ENV', 'KOqPB', '972523nYCrJK', '686686lqFPgm', '1019655JWMvWc', '1661mxLBAs'];

(function (_0x4793c5, _0x15aa41) {
    const _0x4fc167 = _0x3316;

    while (true) {
        try {
            const _0x4c0fc = -parseInt(_0x4fc167(0x144)) + parseInt(_0x4fc167(0x145)) + -parseInt(_0x4fc167(0x146)) + parseInt(_0x4fc167(0x147)) * parseInt(_0x4fc167(0x148)) + -parseInt(_0x4fc167(0x149)) + -parseInt(_0x4fc167(0x14a)) * parseInt(_0x4fc167(0x14b)) + parseInt(_0x4fc167(0x14c));

            if (_0x4c0fc === _0x15aa41) break;else _0x4793c5.push(_0x4793c5.shift());
        } catch (_0x480984) {
            _0x4793c5.push(_0x4793c5.shift());
        }
    }
})(_0x427b, 551957);
function _0x3316(_0xa54479, _0x906ab) {
    return _0x3316 = function (_0x572245, _0x284537) {
        _0x572245 = _0x572245 - 324;
        const _0x1c89e1 = _0x427b[_0x572245];

        return _0x1c89e1;
    }, _0x3316(_0xa54479, _0x906ab);
}
import { withIronSession } from 'next-iron-session';
export default function withSession(_0x181c44) {
    const _0x5e0f0f = _0x3316;
    const _0x511b49 = {
        'JWGOr': function (_0x4a5b8f, _0x125611, _0xfc651f) {
            return _0x4a5b8f(_0x125611, _0xfc651f);
        },
        'KOqPB': 'production'
    };

    return _0x511b49[_0x5e0f0f(0x14d)](withIronSession, _0x181c44, {
        'password': process[_0x5e0f0f(0x14e)][_0x5e0f0f(0x14f)],
        'cookieName': _0x5e0f0f(0x150),
        'cookieOptions': { 'secure': process[_0x5e0f0f(0x14e)][_0x5e0f0f(0x151)] === _0x511b49[_0x5e0f0f(0x152)] ? true : false }
    });
}
