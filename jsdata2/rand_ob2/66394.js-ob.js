'use strict';
var _0x2581 = [
    'sha1',
    'update',
    'exports',
    '1074558TCHFyz',
    '1CAbFdB',
    '1494190WefLnI',
    '280926zxcmlO',
    '778555rUivup',
    '299GCDrMw',
    '3945zwKXVu',
    '4FGGZPh',
    '35626pccXNO',
    '1741742SkcWjQ',
    'crypto',
    'from',
    'function',
    'isArray',
    'string',
    'utf8'
];
var _0x58fee8 = _0x17c4;
(function (_0x5f2884, _0x5ecf17) {
    var _0x307677 = _0x17c4;
    while (!![]) {
        try {
            var _0x15fc78 = -parseInt(_0x307677(0x11c)) * parseInt(_0x307677(0x11d)) + parseInt(_0x307677(0x11e)) + parseInt(_0x307677(0x11f)) + parseInt(_0x307677(0x120)) + parseInt(_0x307677(0x121)) * parseInt(_0x307677(0x122)) + parseInt(_0x307677(0x123)) * -parseInt(_0x307677(0x124)) + -parseInt(_0x307677(0x125));
            if (_0x15fc78 === _0x5ecf17)
                break;
            else
                _0x5f2884['push'](_0x5f2884['shift']());
        } catch (_0x2c7c8f) {
            _0x5f2884['push'](_0x5f2884['shift']());
        }
    }
}(_0x2581, 0xbd116));
function _0x17c4(_0x356ef9, _0x1ee428) {
    return _0x17c4 = function (_0x25819a, _0x17c4b3) {
        _0x25819a = _0x25819a - 0x11c;
        var _0x4eaf5d = _0x2581[_0x25819a];
        return _0x4eaf5d;
    }, _0x17c4(_0x356ef9, _0x1ee428);
}
var crypto = require(_0x58fee8(0x126));
function sha1(_0x976b2e) {
    var _0xca6b82 = _0x58fee8;
    if (typeof Buffer[_0xca6b82(0x127)] === _0xca6b82(0x128)) {
        if (Array[_0xca6b82(0x129)](_0x976b2e))
            _0x976b2e = Buffer[_0xca6b82(0x127)](_0x976b2e);
        else
            typeof _0x976b2e === _0xca6b82(0x12a) && (_0x976b2e = Buffer[_0xca6b82(0x127)](_0x976b2e, _0xca6b82(0x12b)));
    } else {
        if (Array[_0xca6b82(0x129)](_0x976b2e))
            _0x976b2e = new Buffer(_0x976b2e);
        else
            typeof _0x976b2e === _0xca6b82(0x12a) && (_0x976b2e = new Buffer(_0x976b2e, 'utf8'));
    }
    return crypto['createHash'](_0xca6b82(0x12c))[_0xca6b82(0x12d)](_0x976b2e)['digest']();
}
module[_0x58fee8(0x12e)] = sha1;
