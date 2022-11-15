var _0x5d25 = [
    '1LVsxnT',
    '435142loPNuy',
    '669383aHKqpu',
    '2526cNiLtH',
    '80PgaDZw',
    '191PrVZlY',
    '1546rINRgN',
    '31661OyaBxb',
    '13MnjpNf',
    '43361hcxVvG',
    '70jSBNGL',
    'random',
    'from',
    'parse',
    'core\x20JSON',
    'onValue',
    'error',
    'equal',
    'write',
    '945310vzxOlc'
];
var _0x44b279 = _0x2dd3;
function _0x2dd3(_0x3c8af9, _0x53cf85) {
    return _0x2dd3 = function (_0x5d250e, _0x2dd3be) {
        _0x5d250e = _0x5d250e - 0xe5;
        var _0x557cb5 = _0x5d25[_0x5d250e];
        return _0x557cb5;
    }, _0x2dd3(_0x3c8af9, _0x53cf85);
}
(function (_0x4b9ab0, _0x19ddd4) {
    var _0x1b9fe0 = _0x2dd3;
    while (!![]) {
        try {
            var _0x37275d = parseInt(_0x1b9fe0(0xe5)) * -parseInt(_0x1b9fe0(0xe6)) + -parseInt(_0x1b9fe0(0xe7)) + -parseInt(_0x1b9fe0(0xe8)) + -parseInt(_0x1b9fe0(0xe9)) * -parseInt(_0x1b9fe0(0xea)) + parseInt(_0x1b9fe0(0xeb)) * -parseInt(_0x1b9fe0(0xec)) + parseInt(_0x1b9fe0(0xed)) * -parseInt(_0x1b9fe0(0xee)) + parseInt(_0x1b9fe0(0xef)) * parseInt(_0x1b9fe0(0xf0));
            if (_0x37275d === _0x19ddd4)
                break;
            else
                _0x4b9ab0['push'](_0x4b9ab0['shift']());
        } catch (_0xe883f3) {
            _0x4b9ab0['push'](_0x4b9ab0['shift']());
        }
    }
}(_0x5d25, 0x7557c));
var r = Math[_0x44b279(0xf1)](), Parser = require('jsonparse'), p = new Parser(), assert = require('assert'), times = 0x14, bufferFrom = Buffer[_0x44b279(0xf2)] && Buffer['from'] !== Uint8Array[_0x44b279(0xf2)], str;
while (times--) {
    assert['equal'](JSON[_0x44b279(0xf3)](JSON['stringify'](r)), r, _0x44b279(0xf4)), p[_0x44b279(0xf5)] = function (_0x48a519) {
        var _0xff5f92 = _0x44b279;
        console[_0xff5f92(0xf6)]('parsed', _0x48a519), assert[_0xff5f92(0xf7)](_0x48a519, r);
    }, console['error']('correct', r), str = JSON['stringify']([r]), p[_0x44b279(0xf8)](bufferFrom ? Buffer['from'](str) : new Buffer(str));
}
