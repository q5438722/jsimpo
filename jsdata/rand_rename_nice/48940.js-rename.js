'use strict';
import{
  withIronSession as withIronSession
}from "next-iron-session";
export default function getRealPathFromAliasConfig(sourcePath) {
  return withIronSession(sourcePath, {
    password : process.env.SECRET_COOKIE_PASSWORD,
    cookieName : "next.js/examples/with-iron-session",
    cookieOptions : {
      secure : process.env.NODE_ENV === "production" ? true : false
    }
  });
}
;
