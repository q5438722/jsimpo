const router = require('express').Router();

var { INFO } = require('../models');

var { reqLimiter } = require('../req-limiter');

router.get('/', reqLimiter, async (request, response) => {
  var [{ lastUpdate, numPRs, prRange }] = await INFO.find({});

  response.json({ ok: true, lastUpdate, numPRs, prRange });
});

module.exports = router;
