'use strict';
const rateLimit = require(_0x4b63dc(472));
const limitHandler = (body, req) => {
  const gotoNewOfflinePage = _0x4b63dc;
  const _0x27f336 = {
    "WywkL" : gotoNewOfflinePage(473)
  };
  req["status"](-1493 * 1 + -51 * 173 + 10745)[gotoNewOfflinePage(474)]({
    "ok" : ![],
    "rateLimitMessage" : _0x27f336["WywkL"]
  });
};
const rateLimitOptions = {
  "windowMs" : (9509 + -67 * -147 + -19353) * (-823 * -1 + -787 + 12 * 2) * (1032 + 9853 + 5 * -1977),
  "max" : 100,
  "message" : _0x4b63dc(475),
  "handler" : limitHandler,
  "onLimitReached" : limitHandler
};
const reqLimiter = rateLimit(rateLimitOptions);
module["exports"] = {
  "reqLimiter" : reqLimiter
};

