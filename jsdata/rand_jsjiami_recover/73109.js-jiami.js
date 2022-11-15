const router = require('express')['Router']();
const {INFO} = require('../models');
const {reqLimiter} = require('../req-limiter');
router['get']('/', reqLimiter, async (_0xc47043, _0x445837) => {
    const [{lastUpdate, numPRs, prRange}] = await INFO['find']({});
    _0x445837['json']({
        'ok': !![],
        'lastUpdate': lastUpdate,
        'numPRs': numPRs,
        'prRange': prRange
    });
});
module['exports'] = router;