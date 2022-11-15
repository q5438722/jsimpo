var r = Math[_0x44b279(241)](), Parser = require('jsonparse'), p = new Parser(), assert = require('assert'), times = 20, bufferFrom = Buffer[_0x44b279(242)] && Buffer['from'] !== Uint8Array[_0x44b279(242)], str;
while (times--) {
    assert['equal'](JSON[_0x44b279(243)](JSON['stringify'](r)), r, _0x44b279(244)), p[_0x44b279(245)] = function (_0x48a519) {
        var _0xff5f92 = _0x44b279;
        console[_0xff5f92(246)]('parsed', _0x48a519), assert[_0xff5f92(247)](_0x48a519, r);
    }, console['error']('correct', r), str = JSON['stringify']([r]), p[_0x44b279(248)](bufferFrom ? Buffer['from'](str) : new Buffer(str));
}