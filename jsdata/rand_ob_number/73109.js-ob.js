const router = require('express')['Router'](), {INFO} = require('../models'), {reqLimiter} = require('../req-limiter');
router['get']('/', reqLimiter, async (_0x218a7d, _0x3f3f8d) => {
    const [{
            lastUpdate: _0x447c75,
            numPRs: _0x173dc3,
            prRange: _0x270405
        }] = await INFO['find']({});
    _0x3f3f8d['json']({
        'ok': !![],
        'lastUpdate': _0x447c75,
        'numPRs': _0x173dc3,
        'prRange': _0x270405
    });
}), module['exports'] = router;
