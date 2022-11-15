const rateLimit = require("express-rate-limit");

const limitHandler = (e, i) => {
  i.status(429).json({ ok: false, rateLimitMessage: "You have accessed this app's pages too quickly.  Please try again in 5 minutes." });
};

const rateLimitOptions = { windowMs: 300000, max: 100, message: "rate limit activated", handler: limitHandler, onLimitReached: limitHandler };
const reqLimiter = rateLimit(rateLimitOptions);
module.exports = { reqLimiter: reqLimiter };
