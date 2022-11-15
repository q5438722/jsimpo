const _0x345c = ['240153KmDLXC', '136279LOlWeE', '487kRLJJW', '1262fCaYXS', '458119nFFfvn', '56745MKFjGY', 'env', 'SECRET_COOKIE_PASSWORD', 'dioOK', 'NODE_ENV', 'production', '2VyDwRv', '27848QYihZv', '242854NQPbJm'];

(function (_0x48d316, _0x5cb113) {
    const _0x3bcdda = _0x57cb;

    while (true) {
        try {
            const _0x388b8a = -parseInt(_0x3bcdda(0x13e)) * parseInt(_0x3bcdda(0x13f)) + parseInt(_0x3bcdda(0x140)) + parseInt(_0x3bcdda(0x141)) + parseInt(_0x3bcdda(0x142)) + -parseInt(_0x3bcdda(0x143)) * parseInt(_0x3bcdda(0x144)) + parseInt(_0x3bcdda(0x145)) + -parseInt(_0x3bcdda(0x146));

            if (_0x388b8a === _0x5cb113) break;else _0x48d316.push(_0x48d316.shift());
        } catch (_0x7b8e75) {
            _0x48d316.push(_0x48d316.shift());
        }
    }
})(_0x345c, 350370);
function _0x57cb(_0x16a93d, _0x52d635) {
    return _0x57cb = function (_0x26f6f6, _0x5dcc02) {
        _0x26f6f6 = _0x26f6f6 - 318;
        const _0x187628 = _0x345c[_0x26f6f6];

        return _0x187628;
    }, _0x57cb(_0x16a93d, _0x52d635);
}
import { withIronSession } from 'next-iron-session';
export default function withSession(_0x5354bf) {
    const _0x85fac6 = _0x57cb;
    const _0x529224 = { 'dioOK': 'next.js/examples/with-iron-session' };

    return withIronSession(_0x5354bf, {
        'password': process[_0x85fac6(0x147)][_0x85fac6(0x148)],
        'cookieName': _0x529224[_0x85fac6(0x149)],
        'cookieOptions': { 'secure': process[_0x85fac6(0x147)][_0x85fac6(0x14a)] === _0x85fac6(0x14b) ? true : false }
    });
}
