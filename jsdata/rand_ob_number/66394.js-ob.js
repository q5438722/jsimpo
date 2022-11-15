'use strict';
var crypto = require('crypto');
function sha1(_0x3b23ca) {
    if (typeof Buffer['from'] === 'function') {
        if (Array['isArray'](_0x3b23ca))
            _0x3b23ca = Buffer['from'](_0x3b23ca);
        else
            typeof _0x3b23ca === 'string' && (_0x3b23ca = Buffer['from'](_0x3b23ca, 'utf8'));
    } else {
        if (Array['isArray'](_0x3b23ca))
            _0x3b23ca = new Buffer(_0x3b23ca);
        else
            typeof _0x3b23ca === 'string' && (_0x3b23ca = new Buffer(_0x3b23ca, 'utf8'));
    }
    return crypto['createHash']('sha1')['update'](_0x3b23ca)['digest']();
}
module['exports'] = sha1;
