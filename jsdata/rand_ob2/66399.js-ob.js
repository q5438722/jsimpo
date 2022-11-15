var _0x4ba8 = [
    'charCodeAt',
    'exports',
    'string',
    'isArray',
    'value\x20must\x20be\x20an\x20array\x20of\x20bytes',
    'concat',
    'name',
    'DNS',
    'URL',
    '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    '70iOfJpr',
    '5583gDyKUy',
    '834902kJUyfq',
    '1DGsslP',
    '3pwqYao',
    '350483wrOMFd',
    '3659zYxJPe',
    '81DlxuQA',
    '1151906QnIRQM',
    '1042470DhEScQ',
    '1375589jjgwXH',
    '1kLZhQZ',
    './bytesToUuid',
    'replace',
    'push',
    'length'
];
var _0x469251 = _0x24c5;
(function (_0x9121d3, _0x4c4037) {
    var _0x50d88c = _0x24c5;
    while (!![]) {
        try {
            var _0x44b771 = parseInt(_0x50d88c(0x194)) * -parseInt(_0x50d88c(0x195)) + parseInt(_0x50d88c(0x196)) * parseInt(_0x50d88c(0x197)) + parseInt(_0x50d88c(0x198)) * -parseInt(_0x50d88c(0x199)) + -parseInt(_0x50d88c(0x19a)) * parseInt(_0x50d88c(0x19b)) + parseInt(_0x50d88c(0x19c)) + -parseInt(_0x50d88c(0x19d)) + parseInt(_0x50d88c(0x19e)) * parseInt(_0x50d88c(0x19f));
            if (_0x44b771 === _0x4c4037)
                break;
            else
                _0x9121d3['push'](_0x9121d3['shift']());
        } catch (_0x1f23d7) {
            _0x9121d3['push'](_0x9121d3['shift']());
        }
    }
}(_0x4ba8, 0x8dea9));
var bytesToUuid = require(_0x469251(0x1a0));
function uuidToBytes(_0x148d02) {
    var _0x221eb3 = _0x469251, _0x1909ea = [];
    return _0x148d02[_0x221eb3(0x1a1)](/[a-fA-F0-9]{2}/g, function (_0x2f5318) {
        var _0x4f26f0 = _0x221eb3;
        _0x1909ea[_0x4f26f0(0x1a2)](parseInt(_0x2f5318, 0x10));
    }), _0x1909ea;
}
function _0x24c5(_0x4c29df, _0x196789) {
    return _0x24c5 = function (_0x4ba831, _0x24c5f3) {
        _0x4ba831 = _0x4ba831 - 0x194;
        var _0x5200dc = _0x4ba8[_0x4ba831];
        return _0x5200dc;
    }, _0x24c5(_0x4c29df, _0x196789);
}
function stringToBytes(_0x2d182e) {
    var _0x13d074 = _0x469251;
    _0x2d182e = unescape(encodeURIComponent(_0x2d182e));
    var _0x52d8be = new Array(_0x2d182e[_0x13d074(0x1a3)]);
    for (var _0x13d82d = 0x0; _0x13d82d < _0x2d182e[_0x13d074(0x1a3)]; _0x13d82d++) {
        _0x52d8be[_0x13d82d] = _0x2d182e[_0x13d074(0x1a4)](_0x13d82d);
    }
    return _0x52d8be;
}
module[_0x469251(0x1a5)] = function (_0x3c108b, _0x2c4972, _0x592698) {
    var _0x26621a = _0x469251, _0x53444c = function (_0x1eb617, _0x387b18, _0x1c5a82, _0x14a566) {
            var _0x334465 = _0x24c5, _0x4a6fe0 = _0x1c5a82 && _0x14a566 || 0x0;
            if (typeof _0x1eb617 == _0x334465(0x1a6))
                _0x1eb617 = stringToBytes(_0x1eb617);
            if (typeof _0x387b18 == _0x334465(0x1a6))
                _0x387b18 = uuidToBytes(_0x387b18);
            if (!Array[_0x334465(0x1a7)](_0x1eb617))
                throw TypeError(_0x334465(0x1a8));
            if (!Array[_0x334465(0x1a7)](_0x387b18) || _0x387b18['length'] !== 0x10)
                throw TypeError('namespace\x20must\x20be\x20uuid\x20string\x20or\x20an\x20Array\x20of\x2016\x20byte\x20values');
            var _0x2d60ee = _0x592698(_0x387b18[_0x334465(0x1a9)](_0x1eb617));
            _0x2d60ee[0x6] = _0x2d60ee[0x6] & 0xf | _0x2c4972, _0x2d60ee[0x8] = _0x2d60ee[0x8] & 0x3f | 0x80;
            if (_0x1c5a82)
                for (var _0x478b6e = 0x0; _0x478b6e < 0x10; ++_0x478b6e) {
                    _0x1c5a82[_0x4a6fe0 + _0x478b6e] = _0x2d60ee[_0x478b6e];
                }
            return _0x1c5a82 || bytesToUuid(_0x2d60ee);
        };
    try {
        _0x53444c[_0x26621a(0x1aa)] = _0x3c108b;
    } catch (_0x12df00) {
    }
    return _0x53444c[_0x26621a(0x1ab)] = '6ba7b810-9dad-11d1-80b4-00c04fd430c8', _0x53444c[_0x26621a(0x1ac)] = _0x26621a(0x1ad), _0x53444c;
};
