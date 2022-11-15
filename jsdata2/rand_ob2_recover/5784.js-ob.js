var wrappy = require(_0xd0ed82(427)), reqs = Object[_0xd0ed82(428)](null), once = require(_0xd0ed82(429));
module['exports'] = wrappy(inflight);
function inflight(_0x31834e, _0x2c7cd1) {
    return reqs[_0x31834e] ? (reqs[_0x31834e]['push'](_0x2c7cd1), null) : (reqs[_0x31834e] = [_0x2c7cd1], makeres(_0x31834e));
}
function _0x5083(_0xe809ea, _0x3fc8e1) {
    return _0x5083 = function (_0x90d296, _0x5083ad) {
        _0x90d296 = _0x90d296 - 415;
        var _0x699e30 = _0x90d2[_0x90d296];
        return _0x699e30;
    }, _0x5083(_0xe809ea, _0x3fc8e1);
}
function makeres(_0x41cb56) {
    return once(function _0x42185c() {
        var _0x448244 = _0x5083, _0x4cf8d5 = reqs[_0x41cb56], _0x39c730 = _0x4cf8d5['length'], _0x556e05 = slice(arguments);
        try {
            for (var _0x5db367 = 0; _0x5db367 < _0x39c730; _0x5db367++) {
                _0x4cf8d5[_0x5db367][_0x448244(430)](null, _0x556e05);
            }
        } finally {
            _0x4cf8d5[_0x448244(431)] > _0x39c730 ? (_0x4cf8d5[_0x448244(432)](0, _0x39c730), process[_0x448244(433)](function () {
                var _0x5954ef = _0x448244;
                _0x42185c[_0x5954ef(430)](null, _0x556e05);
            })) : delete reqs[_0x41cb56];
        }
    });
}
function slice(_0x3e4cc6) {
    var _0x5633ad = _0xd0ed82, _0x3c9732 = _0x3e4cc6[_0x5633ad(431)], _0x36b01a = [];
    for (var _0x45ffd0 = 0; _0x45ffd0 < _0x3c9732; _0x45ffd0++)
        _0x36b01a[_0x45ffd0] = _0x3e4cc6[_0x45ffd0];
    return _0x36b01a;
}