'use strict';
var _0x53a9 = [
    'crypto',
    'function',
    'string',
    'utf8',
    'sha1',
    'lIGXH',
    'isArray',
    'from',
    'iAUjC',
    'QFFuh',
    'createHash',
    'dbgLS',
    'update',
    'digest',
    'exports',
    '1048211YleFMO',
    '71348Jvjbxr',
    '12JgXZFK',
    '240856CXyTpb',
    '5OOmREQ',
    '47068LplrMu',
    '8MJgxTN',
    '1307907UCFSTP',
    '58cnRlhq',
    '19321kPjqWM',
    '1459KWXhYW',
    '2829pPDdLF'
];
function _0x30eb(_0x215f6f, _0x320f04) {
    return _0x30eb = function (_0x2ec9b5, _0x2cf861) {
        _0x2ec9b5 = _0x2ec9b5 - (0x1 * 0x17ca + 0x2e * -0x1f + 0x573 * -0x3);
        var _0x3861bb = _0x53a9[_0x2ec9b5];
        return _0x3861bb;
    }, _0x30eb(_0x215f6f, _0x320f04);
}
var _0x56d697 = _0x30eb;
(function (_0x93aaa3, _0x1e2c39) {
    var _0x59a801 = _0x30eb;
    while (!![]) {
        try {
            var _0x54670d = -parseInt(_0x59a801(0x1df)) + parseInt(_0x59a801(0x1e0)) * -parseInt(_0x59a801(0x1e1)) + parseInt(_0x59a801(0x1e2)) * -parseInt(_0x59a801(0x1e3)) + -parseInt(_0x59a801(0x1e4)) * parseInt(_0x59a801(0x1e5)) + parseInt(_0x59a801(0x1e6)) + -parseInt(_0x59a801(0x1e7)) * parseInt(_0x59a801(0x1e8)) + -parseInt(_0x59a801(0x1e9)) * -parseInt(_0x59a801(0x1ea));
            if (_0x54670d === _0x1e2c39)
                break;
            else
                _0x93aaa3['push'](_0x93aaa3['shift']());
        } catch (_0x1c7278) {
            _0x93aaa3['push'](_0x93aaa3['shift']());
        }
    }
}(_0x53a9, -0x8a059 * -0x2 + 0x2 * -0xbd976 + 0x131acf));
var crypto = require(_0x56d697(0x1eb));
function sha1(_0x373fd8) {
    var _0x3958b4 = _0x56d697, _0x85844 = {
            'vdrYV': function (_0xfad6ba, _0x2e7267) {
                return _0xfad6ba === _0x2e7267;
            },
            'lIGXH': _0x3958b4(0x1ec),
            'iAUjC': _0x3958b4(0x1ed),
            'Afkox': _0x3958b4(0x1ee),
            'QFFuh': function (_0x3c23ef, _0x3930c4) {
                return _0x3c23ef === _0x3930c4;
            },
            'dbgLS': _0x3958b4(0x1ef)
        };
    if (_0x85844['vdrYV'](typeof Buffer['from'], _0x85844[_0x3958b4(0x1f0)])) {
        if (Array[_0x3958b4(0x1f1)](_0x373fd8))
            _0x373fd8 = Buffer[_0x3958b4(0x1f2)](_0x373fd8);
        else
            typeof _0x373fd8 === _0x85844[_0x3958b4(0x1f3)] && (_0x373fd8 = Buffer['from'](_0x373fd8, _0x85844['Afkox']));
    } else {
        if (Array[_0x3958b4(0x1f1)](_0x373fd8))
            _0x373fd8 = new Buffer(_0x373fd8);
        else
            _0x85844[_0x3958b4(0x1f4)](typeof _0x373fd8, _0x3958b4(0x1ed)) && (_0x373fd8 = new Buffer(_0x373fd8, _0x3958b4(0x1ee)));
    }
    return crypto[_0x3958b4(0x1f5)](_0x85844[_0x3958b4(0x1f6)])[_0x3958b4(0x1f7)](_0x373fd8)[_0x3958b4(0x1f8)]();
}
module[_0x56d697(0x1f9)] = sha1;
