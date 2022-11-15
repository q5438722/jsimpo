var _0x90d2 = [
    '842pEUiJy',
    '21HdJjtW',
    '513FmfckX',
    '30OnHnid',
    '4287ObOAEW',
    '170409Fpuagq',
    '1zPPOQW',
    '238331vVWUVA',
    'wrappy',
    'create',
    'once',
    'apply',
    'length',
    'splice',
    'nextTick',
    '8709uXUFNB',
    '193iOjKKl',
    '1543dnaHmJ',
    '6MwwXls'
];
var _0xd0ed82 = _0x5083;
(function (_0x27116e, _0x12c234) {
    var _0x1e06ec = _0x5083;
    while (!![]) {
        try {
            var _0x203252 = parseInt(_0x1e06ec(0x19f)) + parseInt(_0x1e06ec(0x1a0)) * parseInt(_0x1e06ec(0x1a1)) + -parseInt(_0x1e06ec(0x1a2)) * -parseInt(_0x1e06ec(0x1a3)) + -parseInt(_0x1e06ec(0x1a4)) * parseInt(_0x1e06ec(0x1a5)) + -parseInt(_0x1e06ec(0x1a6)) * parseInt(_0x1e06ec(0x1a7)) + -parseInt(_0x1e06ec(0x1a8)) + -parseInt(_0x1e06ec(0x1a9)) * -parseInt(_0x1e06ec(0x1aa));
            if (_0x203252 === _0x12c234)
                break;
            else
                _0x27116e['push'](_0x27116e['shift']());
        } catch (_0xc8b9f0) {
            _0x27116e['push'](_0x27116e['shift']());
        }
    }
}(_0x90d2, 0x3a9e3));
var wrappy = require(_0xd0ed82(0x1ab)), reqs = Object[_0xd0ed82(0x1ac)](null), once = require(_0xd0ed82(0x1ad));
module['exports'] = wrappy(inflight);
function inflight(_0x31834e, _0x2c7cd1) {
    return reqs[_0x31834e] ? (reqs[_0x31834e]['push'](_0x2c7cd1), null) : (reqs[_0x31834e] = [_0x2c7cd1], makeres(_0x31834e));
}
function _0x5083(_0xe809ea, _0x3fc8e1) {
    return _0x5083 = function (_0x90d296, _0x5083ad) {
        _0x90d296 = _0x90d296 - 0x19f;
        var _0x699e30 = _0x90d2[_0x90d296];
        return _0x699e30;
    }, _0x5083(_0xe809ea, _0x3fc8e1);
}
function makeres(_0x41cb56) {
    return once(function _0x42185c() {
        var _0x448244 = _0x5083, _0x4cf8d5 = reqs[_0x41cb56], _0x39c730 = _0x4cf8d5['length'], _0x556e05 = slice(arguments);
        try {
            for (var _0x5db367 = 0x0; _0x5db367 < _0x39c730; _0x5db367++) {
                _0x4cf8d5[_0x5db367][_0x448244(0x1ae)](null, _0x556e05);
            }
        } finally {
            _0x4cf8d5[_0x448244(0x1af)] > _0x39c730 ? (_0x4cf8d5[_0x448244(0x1b0)](0x0, _0x39c730), process[_0x448244(0x1b1)](function () {
                var _0x5954ef = _0x448244;
                _0x42185c[_0x5954ef(0x1ae)](null, _0x556e05);
            })) : delete reqs[_0x41cb56];
        }
    });
}
function slice(_0x3e4cc6) {
    var _0x5633ad = _0xd0ed82, _0x3c9732 = _0x3e4cc6[_0x5633ad(0x1af)], _0x36b01a = [];
    for (var _0x45ffd0 = 0x0; _0x45ffd0 < _0x3c9732; _0x45ffd0++)
        _0x36b01a[_0x45ffd0] = _0x3e4cc6[_0x45ffd0];
    return _0x36b01a;
}
