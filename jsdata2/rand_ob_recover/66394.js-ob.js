var crypto = require(_0x56d697(491));
function sha1(_0x373fd8) {
    var _0x3958b4 = _0x56d697, _0x85844 = {
            'vdrYV': function (_0xfad6ba, _0x2e7267) {
                return _0xfad6ba === _0x2e7267;
            },
            'lIGXH': _0x3958b4(492),
            'iAUjC': _0x3958b4(493),
            'Afkox': _0x3958b4(494),
            'QFFuh': function (_0x3c23ef, _0x3930c4) {
                return _0x3c23ef === _0x3930c4;
            },
            'dbgLS': _0x3958b4(495)
        };
    if (_0x85844['vdrYV'](typeof Buffer['from'], _0x85844[_0x3958b4(496)])) {
        if (Array[_0x3958b4(497)](_0x373fd8))
            _0x373fd8 = Buffer[_0x3958b4(498)](_0x373fd8);
        else
            typeof _0x373fd8 === _0x85844[_0x3958b4(499)] && (_0x373fd8 = Buffer['from'](_0x373fd8, _0x85844['Afkox']));
    } else {
        if (Array[_0x3958b4(497)](_0x373fd8))
            _0x373fd8 = new Buffer(_0x373fd8);
        else
            _0x85844[_0x3958b4(500)](typeof _0x373fd8, _0x3958b4(493)) && (_0x373fd8 = new Buffer(_0x373fd8, _0x3958b4(494)));
    }
    return crypto[_0x3958b4(501)](_0x85844[_0x3958b4(502)])[_0x3958b4(503)](_0x373fd8)[_0x3958b4(504)]();
}
module[_0x56d697(505)] = sha1;