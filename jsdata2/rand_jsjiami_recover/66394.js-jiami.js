'use strict';
var crypto = require('crypto');
function sha1(_0x29aabf) {
    if (typeof Buffer['from'] === 'function') {
        if (Array['isArray'](_0x29aabf)) {
            _0x29aabf = Buffer['from'](_0x29aabf);
        } else if (typeof _0x29aabf === 'string') {
            _0x29aabf = Buffer['from'](_0x29aabf, 'utf8');
        }
    } else {
        if (Array['isArray'](_0x29aabf)) {
            _0x29aabf = new Buffer(_0x29aabf);
        } else if (typeof _0x29aabf === 'string') {
            if ('wBfzS' === 'hezNp') {
                if (Array['isArray'](_0x29aabf)) {
                    _0x29aabf = Buffer['from'](_0x29aabf);
                } else if (typeof _0x29aabf === 'string') {
                    _0x29aabf = Buffer['from'](_0x29aabf, 'utf8');
                }
            } else {
                _0x29aabf = new Buffer(_0x29aabf, 'utf8');
            }
        }
    }
    return crypto['createHash']('sha1')['update'](_0x29aabf)['digest']();
}
module['exports'] = sha1;