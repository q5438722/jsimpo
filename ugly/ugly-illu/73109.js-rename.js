const router = require("express").Router();

var { INFO } = require("../models");

var { reqLimiter } = require("../req-limiter");

router.get("/", reqLimiter, async (e, r) => {
  var [{ lastUpdate: t, numPRs: s, prRange: o }] = await INFO.find({});
  r.json({ ok: true, lastUpdate: t, numPRs: s, prRange: o });
});module.exports = router;
