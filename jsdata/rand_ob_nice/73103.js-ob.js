'use strict';
const _0x342c = ["387LxCjBA", "1QeGNqF", "458977EJPtSi", "express-rate-limit", "You have accessed this app's pages too quickly.  Please try again in 5 minutes.", "json", "rate limit activated", "619759ouBUhE", "13UNIJrG", "23873TLAlpS", "45362yLjrLn", "718EmguEt", "5IhYojS", "202694WdRvQj", "1407bydnwU"];
function _0x83b0(isBgroundImg, stgs) {
  return _0x83b0 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-2855 * 2 + -1511 * -6 + 5 * -579);
    let _0x3d83f9 = _0x342c[isBgroundImg];
    return _0x3d83f9;
  }, _0x83b0(isBgroundImg, stgs);
}
const _0x4b63dc = _0x83b0;
(function(data, val) {
  const toMonths = _0x83b0;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(461)) + -parseInt(toMonths(462)) * parseInt(toMonths(463)) + parseInt(toMonths(464)) + parseInt(toMonths(465)) * -parseInt(toMonths(466)) + parseInt(toMonths(467)) + parseInt(toMonths(468)) * -parseInt(toMonths(469)) + parseInt(toMonths(470)) * parseInt(toMonths(471));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x43110b) {
      data["push"](data["shift"]());
    }
  }
})(_0x342c, -101051 + 299100 + 270295);
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

