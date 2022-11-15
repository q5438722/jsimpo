var bytesToUuid = require('./bytesToUuid');
function _0x5dbe(_0x1a2f9f, _0x27f065) {
    return _0x5dbe = function (_0x13cb52, _0x5dbe78) {
        _0x13cb52 = _0x13cb52 - 254;
        var _0x20ed6c = _0x13cb[_0x13cb52];
        return _0x20ed6c;
    }, _0x5dbe(_0x1a2f9f, _0x27f065);
}
function uuidToBytes(_0x8526b9) {
    var _0x20ddcd = [];
    return _0x8526b9['replace'](/[a-fA-F0-9]{2}/g, function (_0x2826f2) {
        var _0x234214 = _0x5dbe;
        _0x20ddcd[_0x234214(264)](parseInt(_0x2826f2, 16));
    }), _0x20ddcd;
}
function stringToBytes(_0xab873) {
    var _0x4950e2 = _0x5dbe;
    _0xab873 = unescape(encodeURIComponent(_0xab873));
    var _0x54e380 = new Array(_0xab873[_0x4950e2(265)]);
    for (var _0x5b8e30 = 0; _0x5b8e30 < _0xab873[_0x4950e2(265)]; _0x5b8e30++) {
        _0x54e380[_0x5b8e30] = _0xab873[_0x4950e2(266)](_0x5b8e30);
    }
    return _0x54e380;
}
module[_0x1fa04b(267)] = function (_0xc3e2a8, _0xbc3347, _0x3087e2) {
    var _0x3d0bac = _0x1fa04b, _0x3392c9 = function (_0x37603a, _0x499220, _0x35b913, _0x4ef9f2) {
            var _0xa829c3 = _0x5dbe, _0x55cc51 = _0x35b913 && _0x4ef9f2 || 0;
            if (typeof _0x37603a == 'string')
                _0x37603a = stringToBytes(_0x37603a);
            if (typeof _0x499220 == _0xa829c3(268))
                _0x499220 = uuidToBytes(_0x499220);
            if (!Array['isArray'](_0x37603a))
                throw TypeError(_0xa829c3(269));
            if (!Array[_0xa829c3(270)](_0x499220) || _0x499220['length'] !== 16)
                throw TypeError(_0xa829c3(271));
            var _0x1aaec7 = _0x3087e2(_0x499220[_0xa829c3(272)](_0x37603a));
            _0x1aaec7[6] = _0x1aaec7[6] & 15 | _0xbc3347, _0x1aaec7[8] = _0x1aaec7[8] & 63 | 128;
            if (_0x35b913)
                for (var _0x3e8889 = 0; _0x3e8889 < 16; ++_0x3e8889) {
                    _0x35b913[_0x55cc51 + _0x3e8889] = _0x1aaec7[_0x3e8889];
                }
            return _0x35b913 || bytesToUuid(_0x1aaec7);
        };
    try {
        _0x3392c9['name'] = _0xc3e2a8;
    } catch (_0x129916) {
    }
    return _0x3392c9[_0x3d0bac(273)] = _0x3d0bac(274), _0x3392c9['URL'] = _0x3d0bac(275), _0x3392c9;
};