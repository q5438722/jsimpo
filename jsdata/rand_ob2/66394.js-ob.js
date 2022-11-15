'use strict';
var _0x48df = [
    '115542AexhGE',
    '392254sgAogV',
    '73275OixcAP',
    '89SMkFhj',
    '3zsVmxp',
    '59849nNYnmE',
    '2fxgsAu',
    '337861GbhkyB',
    '724836LlcrPb',
    'crypto',
    'from',
    'function',
    'isArray',
    'string',
    'utf8',
    'sha1',
    'digest',
    'exports'
];
var _0x56f46e = _0x595a;
(function (_0x5c629e, _0xff8e10) {
    var _0x211932 = _0x595a;
    while (!![]) {
        try {
            var _0x20aa42 = parseInt(_0x211932(0x11c)) + parseInt(_0x211932(0x11d)) + parseInt(_0x211932(0x11e)) + -parseInt(_0x211932(0x11f)) * parseInt(_0x211932(0x120)) + -parseInt(_0x211932(0x121)) * -parseInt(_0x211932(0x122)) + parseInt(_0x211932(0x123)) + -parseInt(_0x211932(0x124));
            if (_0x20aa42 === _0xff8e10)
                break;
            else
                _0x5c629e['push'](_0x5c629e['shift']());
        } catch (_0x393957) {
            _0x5c629e['push'](_0x5c629e['shift']());
        }
    }
}(_0x48df, 0x4c8b7));
function _0x595a(_0x1b570a, _0x41669f) {
    return _0x595a = function (_0x48df18, _0x595a96) {
        _0x48df18 = _0x48df18 - 0x11c;
        var _0x5b2e5a = _0x48df[_0x48df18];
        return _0x5b2e5a;
    }, _0x595a(_0x1b570a, _0x41669f);
}
var crypto = require(_0x56f46e(0x125));
function sha1(_0x510f09) {
    var _0x55d649 = _0x56f46e;
    if (typeof Buffer[_0x55d649(0x126)] === _0x55d649(0x127)) {
        if (Array[_0x55d649(0x128)](_0x510f09))
            _0x510f09 = Buffer[_0x55d649(0x126)](_0x510f09);
        else
            typeof _0x510f09 === _0x55d649(0x129) && (_0x510f09 = Buffer[_0x55d649(0x126)](_0x510f09, _0x55d649(0x12a)));
    } else {
        if (Array[_0x55d649(0x128)](_0x510f09))
            _0x510f09 = new Buffer(_0x510f09);
        else
            typeof _0x510f09 === 'string' && (_0x510f09 = new Buffer(_0x510f09, _0x55d649(0x12a)));
    }
    return crypto['createHash'](_0x55d649(0x12b))['update'](_0x510f09)[_0x55d649(0x12c)]();
}
module[_0x56f46e(0x12d)] = sha1;
