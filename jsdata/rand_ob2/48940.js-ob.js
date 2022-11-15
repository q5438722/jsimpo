var _0x59d2 = [
    '1185850tSpzMY',
    '771459krtiLQ',
    '21829eVSbQl',
    '6qVkOXY',
    '14428bddAwU',
    '113JVzgIz',
    'SECRET_COOKIE_PASSWORD',
    'env',
    'NODE_ENV',
    'production',
    '490PtNNYV',
    '266kOslUx',
    '141VLlNSv',
    '1223CGqTvv',
    '481473UYQLKi'
];
(function (_0x7ec2ca, _0x548180) {
    var _0x4ef522 = _0xf227;
    while (!![]) {
        try {
            var _0x97d49d = -parseInt(_0x4ef522(0x17b)) * parseInt(_0x4ef522(0x17c)) + parseInt(_0x4ef522(0x17d)) * parseInt(_0x4ef522(0x17e)) + parseInt(_0x4ef522(0x17f)) + parseInt(_0x4ef522(0x180)) + parseInt(_0x4ef522(0x181)) + parseInt(_0x4ef522(0x182)) * -parseInt(_0x4ef522(0x183)) + parseInt(_0x4ef522(0x184)) * -parseInt(_0x4ef522(0x185));
            if (_0x97d49d === _0x548180)
                break;
            else
                _0x7ec2ca['push'](_0x7ec2ca['shift']());
        } catch (_0x5ba67a) {
            _0x7ec2ca['push'](_0x7ec2ca['shift']());
        }
    }
}(_0x59d2, 0xafabb));
function _0xf227(_0x2b59bb, _0x16a54e) {
    return _0xf227 = function (_0x59d2db, _0xf227be) {
        _0x59d2db = _0x59d2db - 0x17b;
        var _0x34db36 = _0x59d2[_0x59d2db];
        return _0x34db36;
    }, _0xf227(_0x2b59bb, _0x16a54e);
}
import { withIronSession } from 'next-iron-session';
export default function withSession(_0x5e5646) {
    var _0x2806bb = _0xf227;
    return withIronSession(_0x5e5646, {
        'password': process['env'][_0x2806bb(0x186)],
        'cookieName': 'next.js/examples/with-iron-session',
        'cookieOptions': { 'secure': process[_0x2806bb(0x187)][_0x2806bb(0x188)] === _0x2806bb(0x189) ? !![] : ![] }
    });
}
