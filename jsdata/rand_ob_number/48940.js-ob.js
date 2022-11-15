import { withIronSession } from 'next-iron-session';
export default function withSession(_0x3991e5) {
    return withIronSession(_0x3991e5, {
        'password': process['env']['SECRET_COOKIE_PASSWORD'],
        'cookieName': 'next.js/examples/with-iron-session',
        'cookieOptions': { 'secure': process['env']['NODE_ENV'] === 'production' ? !![] : ![] }
    });
}
