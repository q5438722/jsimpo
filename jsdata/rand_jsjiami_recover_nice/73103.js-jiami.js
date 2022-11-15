'use strict';
const rateLimit = require("express-rate-limit");
const limitHandler = (body, req) => {
  var _0x369a5b = {};
  req["status"](429)["json"]({
    "ok" : ![],
    "rateLimitMessage" : _0x369a5b["dyQjr"]
  });
};
const rateLimitOptions = {
  "windowMs" : 5 * 60 * 1000,
  "handler" : limitHandler,
  "onLimitReached" : limitHandler
};
const reqLimiter = rateLimit(rateLimitOptions);
module["exports"] = {
  "reqLimiter" : reqLimiter
};

