try {
    var util = require('util');
    if (typeof util['inherits'] !== 'function')
        throw '';
    module['exports'] = util['inherits'];
} catch (_0x4b2521) {
    module['exports'] = require('./inherits_browser.js');
}