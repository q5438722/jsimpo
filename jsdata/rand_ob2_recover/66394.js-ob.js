function _0x595a(_0x1b570a, _0x41669f) {
    return _0x595a = function (_0x48df18, _0x595a96) {
        _0x48df18 = _0x48df18 - 284;
        var _0x5b2e5a = _0x48df[_0x48df18];
        return _0x5b2e5a;
    }, _0x595a(_0x1b570a, _0x41669f);
}
var crypto = require(_0x56f46e(293));
function sha1(_0x510f09) {
    var _0x55d649 = _0x56f46e;
    if (typeof Buffer[_0x55d649(294)] === _0x55d649(295)) {
        if (Array[_0x55d649(296)](_0x510f09))
            _0x510f09 = Buffer[_0x55d649(294)](_0x510f09);
        else
            typeof _0x510f09 === _0x55d649(297) && (_0x510f09 = Buffer[_0x55d649(294)](_0x510f09, _0x55d649(298)));
    } else {
        if (Array[_0x55d649(296)](_0x510f09))
            _0x510f09 = new Buffer(_0x510f09);
        else
            typeof _0x510f09 === 'string' && (_0x510f09 = new Buffer(_0x510f09, _0x55d649(298)));
    }
    return crypto['createHash'](_0x55d649(299))['update'](_0x510f09)[_0x55d649(300)]();
}
module[_0x56f46e(301)] = sha1;