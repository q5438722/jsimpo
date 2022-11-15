var bytesToUuid = require(_0x469251(416));
function uuidToBytes(_0x148d02) {
    var _0x221eb3 = _0x469251, _0x1909ea = [];
    return _0x148d02[_0x221eb3(417)](/[a-fA-F0-9]{2}/g, function (_0x2f5318) {
        var _0x4f26f0 = _0x221eb3;
        _0x1909ea[_0x4f26f0(418)](parseInt(_0x2f5318, 16));
    }), _0x1909ea;
}
function _0x24c5(_0x4c29df, _0x196789) {
    return _0x24c5 = function (_0x4ba831, _0x24c5f3) {
        _0x4ba831 = _0x4ba831 - 404;
        var _0x5200dc = _0x4ba8[_0x4ba831];
        return _0x5200dc;
    }, _0x24c5(_0x4c29df, _0x196789);
}
function stringToBytes(_0x2d182e) {
    var _0x13d074 = _0x469251;
    _0x2d182e = unescape(encodeURIComponent(_0x2d182e));
    var _0x52d8be = new Array(_0x2d182e[_0x13d074(419)]);
    for (var _0x13d82d = 0; _0x13d82d < _0x2d182e[_0x13d074(419)]; _0x13d82d++) {
        _0x52d8be[_0x13d82d] = _0x2d182e[_0x13d074(420)](_0x13d82d);
    }
    return _0x52d8be;
}
module[_0x469251(421)] = function (_0x3c108b, _0x2c4972, _0x592698) {
    var _0x26621a = _0x469251, _0x53444c = function (_0x1eb617, _0x387b18, _0x1c5a82, _0x14a566) {
            var _0x334465 = _0x24c5, _0x4a6fe0 = _0x1c5a82 && _0x14a566 || 0;
            if (typeof _0x1eb617 == _0x334465(422))
                _0x1eb617 = stringToBytes(_0x1eb617);
            if (typeof _0x387b18 == _0x334465(422))
                _0x387b18 = uuidToBytes(_0x387b18);
            if (!Array[_0x334465(423)](_0x1eb617))
                throw TypeError(_0x334465(424));
            if (!Array[_0x334465(423)](_0x387b18) || _0x387b18['length'] !== 16)
                throw TypeError('namespace must be uuid string or an Array of 16 byte values');
            var _0x2d60ee = _0x592698(_0x387b18[_0x334465(425)](_0x1eb617));
            _0x2d60ee[6] = _0x2d60ee[6] & 15 | _0x2c4972, _0x2d60ee[8] = _0x2d60ee[8] & 63 | 128;
            if (_0x1c5a82)
                for (var _0x478b6e = 0; _0x478b6e < 16; ++_0x478b6e) {
                    _0x1c5a82[_0x4a6fe0 + _0x478b6e] = _0x2d60ee[_0x478b6e];
                }
            return _0x1c5a82 || bytesToUuid(_0x2d60ee);
        };
    try {
        _0x53444c[_0x26621a(426)] = _0x3c108b;
    } catch (_0x12df00) {
    }
    return _0x53444c[_0x26621a(427)] = '6ba7b810-9dad-11d1-80b4-00c04fd430c8', _0x53444c[_0x26621a(428)] = _0x26621a(429), _0x53444c;
};