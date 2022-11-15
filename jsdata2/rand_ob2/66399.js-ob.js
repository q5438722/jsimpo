var _0x13cb = [
    'isArray',
    'namespace\x20must\x20be\x20uuid\x20string\x20or\x20an\x20Array\x20of\x2016\x20byte\x20values',
    'concat',
    'DNS',
    '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    '198448qudWMJ',
    '49993rmlggx',
    '6mbOdBv',
    '2gIsKQT',
    '60934lANPLw',
    '295230ioxLQR',
    '141462jfJOhf',
    '5306qaCuaK',
    '31dFzzdZ',
    '75450XtraMA',
    'push',
    'length',
    'charCodeAt',
    'exports',
    'string',
    'value\x20must\x20be\x20an\x20array\x20of\x20bytes'
];
var _0x1fa04b = _0x5dbe;
(function (_0x33c401, _0x3c4911) {
    var _0x2269c7 = _0x5dbe;
    while (!![]) {
        try {
            var _0xf628b9 = parseInt(_0x2269c7(0xfe)) + -parseInt(_0x2269c7(0xff)) * parseInt(_0x2269c7(0x100)) + parseInt(_0x2269c7(0x101)) * parseInt(_0x2269c7(0x102)) + parseInt(_0x2269c7(0x103)) + -parseInt(_0x2269c7(0x104)) + -parseInt(_0x2269c7(0x105)) * -parseInt(_0x2269c7(0x106)) + -parseInt(_0x2269c7(0x107));
            if (_0xf628b9 === _0x3c4911)
                break;
            else
                _0x33c401['push'](_0x33c401['shift']());
        } catch (_0x1fa348) {
            _0x33c401['push'](_0x33c401['shift']());
        }
    }
}(_0x13cb, 0x403fa));
var bytesToUuid = require('./bytesToUuid');
function _0x5dbe(_0x1a2f9f, _0x27f065) {
    return _0x5dbe = function (_0x13cb52, _0x5dbe78) {
        _0x13cb52 = _0x13cb52 - 0xfe;
        var _0x20ed6c = _0x13cb[_0x13cb52];
        return _0x20ed6c;
    }, _0x5dbe(_0x1a2f9f, _0x27f065);
}
function uuidToBytes(_0x8526b9) {
    var _0x20ddcd = [];
    return _0x8526b9['replace'](/[a-fA-F0-9]{2}/g, function (_0x2826f2) {
        var _0x234214 = _0x5dbe;
        _0x20ddcd[_0x234214(0x108)](parseInt(_0x2826f2, 0x10));
    }), _0x20ddcd;
}
function stringToBytes(_0xab873) {
    var _0x4950e2 = _0x5dbe;
    _0xab873 = unescape(encodeURIComponent(_0xab873));
    var _0x54e380 = new Array(_0xab873[_0x4950e2(0x109)]);
    for (var _0x5b8e30 = 0x0; _0x5b8e30 < _0xab873[_0x4950e2(0x109)]; _0x5b8e30++) {
        _0x54e380[_0x5b8e30] = _0xab873[_0x4950e2(0x10a)](_0x5b8e30);
    }
    return _0x54e380;
}
module[_0x1fa04b(0x10b)] = function (_0xc3e2a8, _0xbc3347, _0x3087e2) {
    var _0x3d0bac = _0x1fa04b, _0x3392c9 = function (_0x37603a, _0x499220, _0x35b913, _0x4ef9f2) {
            var _0xa829c3 = _0x5dbe, _0x55cc51 = _0x35b913 && _0x4ef9f2 || 0x0;
            if (typeof _0x37603a == 'string')
                _0x37603a = stringToBytes(_0x37603a);
            if (typeof _0x499220 == _0xa829c3(0x10c))
                _0x499220 = uuidToBytes(_0x499220);
            if (!Array['isArray'](_0x37603a))
                throw TypeError(_0xa829c3(0x10d));
            if (!Array[_0xa829c3(0x10e)](_0x499220) || _0x499220['length'] !== 0x10)
                throw TypeError(_0xa829c3(0x10f));
            var _0x1aaec7 = _0x3087e2(_0x499220[_0xa829c3(0x110)](_0x37603a));
            _0x1aaec7[0x6] = _0x1aaec7[0x6] & 0xf | _0xbc3347, _0x1aaec7[0x8] = _0x1aaec7[0x8] & 0x3f | 0x80;
            if (_0x35b913)
                for (var _0x3e8889 = 0x0; _0x3e8889 < 0x10; ++_0x3e8889) {
                    _0x35b913[_0x55cc51 + _0x3e8889] = _0x1aaec7[_0x3e8889];
                }
            return _0x35b913 || bytesToUuid(_0x1aaec7);
        };
    try {
        _0x3392c9['name'] = _0xc3e2a8;
    } catch (_0x129916) {
    }
    return _0x3392c9[_0x3d0bac(0x111)] = _0x3d0bac(0x112), _0x3392c9['URL'] = _0x3d0bac(0x113), _0x3392c9;
};
