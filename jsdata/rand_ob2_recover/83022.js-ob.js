var $timeoutMinErr = minErr(_0x224e77(143));
function _0x5e85(_0x3deb27, _0x44feb5) {
    return _0x5e85 = function (_0x5611bc, _0x5e8550) {
        _0x5611bc = _0x5611bc - 131;
        var _0x2f8790 = _0x5611[_0x5611bc];
        return _0x2f8790;
    }, _0x5e85(_0x3deb27, _0x44feb5);
}
function $TimeoutProvider() {
    var _0x30360a = _0x224e77;
    this['$get'] = [
        _0x30360a(144),
        _0x30360a(145),
        '$q',
        '$$q',
        _0x30360a(146),
        function (_0x152e08, _0x941f93, _0x295a1e, _0x42c2e8, _0x2e7b9f) {
            var _0x25c395 = {};
            function _0x406747(_0x5402cf, _0x109f96, _0x22fb3a) {
                var _0x5c5aec = _0x5e85;
                !isFunction(_0x5402cf) && (_0x22fb3a = _0x109f96, _0x109f96 = _0x5402cf, _0x5402cf = noop);
                var _0x4fab9d = sliceArgs(arguments, 3), _0x3367cd = isDefined(_0x22fb3a) && !_0x22fb3a, _0x322f1e = (_0x3367cd ? _0x42c2e8 : _0x295a1e)['defer'](), _0x1c44bb = _0x322f1e[_0x5c5aec(147)], _0x78d590;
                return _0x78d590 = _0x941f93['defer'](function () {
                    var _0x5b2c9d = _0x5c5aec;
                    try {
                        _0x322f1e[_0x5b2c9d(148)](_0x5402cf[_0x5b2c9d(149)](null, _0x4fab9d));
                    } catch (_0x242307) {
                        _0x322f1e[_0x5b2c9d(150)](_0x242307), _0x2e7b9f(_0x242307);
                    } finally {
                        delete _0x25c395[_0x1c44bb[_0x5b2c9d(151)]];
                    }
                    if (!_0x3367cd)
                        _0x152e08[_0x5b2c9d(152)]();
                }, _0x109f96, _0x5c5aec(143)), _0x1c44bb['$$timeoutId'] = _0x78d590, _0x25c395[_0x78d590] = _0x322f1e, _0x1c44bb;
            }
            return _0x406747['cancel'] = function (_0x19175b) {
                var _0x2179a8 = _0x5e85;
                if (!_0x19175b)
                    return ![];
                if (!_0x19175b['hasOwnProperty'](_0x2179a8(151)))
                    throw $timeoutMinErr(_0x2179a8(153), _0x2179a8(154));
                if (!_0x25c395['hasOwnProperty'](_0x19175b[_0x2179a8(151)]))
                    return ![];
                var _0x563cd4 = _0x19175b['$$timeoutId'], _0x3f6288 = _0x25c395[_0x563cd4];
                return markQExceptionHandled(_0x3f6288[_0x2179a8(147)]), _0x3f6288[_0x2179a8(150)](_0x2179a8(155)), delete _0x25c395[_0x563cd4], _0x941f93[_0x2179a8(156)][_0x2179a8(157)](_0x563cd4);
            }, _0x406747;
        }
    ];
}