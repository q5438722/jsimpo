import { withIronSession } from "next-iron-session";export default function withSession(e) {
  return withIronSession(e, { password: process.env.SECRET_COOKIE_PASSWORD, cookieName: "next.js/examples/with-iron-session", cookieOptions: { secure: process.env.NODE_ENV === "production" ? true : false } });
}
