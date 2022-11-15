!process[_0x53e736(141)] || process['version'][_0x53e736(142)]('v0.') === 0 || process[_0x53e736(141)]['indexOf']('v1.') === 0 && process['version']['indexOf'](_0x53e736(143)) !== 0 ? module[_0x53e736(144)] = { 'nextTick': nextTick } : module[_0x53e736(144)] = process;
function nextTick(_0x1f6401, _0x1d2cfb, _0x52b67f, _0x3d8521) {
    var _0x3694bf = _0x53e736;
    if (typeof _0x1f6401 !== _0x3694bf(145))
        throw new TypeError('"callback" argument must be a function');
    var _0x1cb7b8 = arguments['length'], _0x20fed3, _0x2363be;
    switch (_0x1cb7b8) {
    case 0:
    case 1:
        return process['nextTick'](_0x1f6401);
    case 2:
        return process[_0x3694bf(146)](function _0x4e6661() {
            var _0x5e8ca4 = _0x3694bf;
            _0x1f6401[_0x5e8ca4(147)](null, _0x1d2cfb);
        });
    case 3:
        return process[_0x3694bf(146)](function _0x330a98() {
            _0x1f6401['call'](null, _0x1d2cfb, _0x52b67f);
        });
    case 4:
        return process[_0x3694bf(146)](function _0x321f0e() {
            var _0xe86c1d = _0x3694bf;
            _0x1f6401[_0xe86c1d(147)](null, _0x1d2cfb, _0x52b67f, _0x3d8521);
        });
    default:
        _0x20fed3 = new Array(_0x1cb7b8 - 1), _0x2363be = 0;
        while (_0x2363be < _0x20fed3[_0x3694bf(148)]) {
            _0x20fed3[_0x2363be++] = arguments[_0x2363be];
        }
        return process[_0x3694bf(146)](function _0x523622() {
            var _0x8dccf6 = _0x3694bf;
            _0x1f6401[_0x8dccf6(149)](null, _0x20fed3);
        });
    }
}