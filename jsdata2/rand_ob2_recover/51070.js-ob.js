const common = require('../common.js'), bench = common[_0x46ce4e(279)](main, {
        'extraSize': [
            1,
            256,
            4 * 256
        ],
        'n': [800000]
    });
function _0x5cf7(_0x4bcae6, _0x4386ff) {
    return _0x5cf7 = function (_0x4b18a6, _0x5cf71c) {
        _0x4b18a6 = _0x4b18a6 - 270;
        let _0x58e3a8 = _0x4b18[_0x4b18a6];
        return _0x58e3a8;
    }, _0x5cf7(_0x4bcae6, _0x4386ff);
}
function main({
    n: _0xb2764a,
    extraSize: _0x4607af
}) {
    const _0x259512 = _0x46ce4e, _0x4170ac = 4, _0x81200c = 256, _0x361764 = Array['from']({ 'length': _0x4170ac })[_0x259512(280)](Buffer['allocUnsafe'](_0x81200c)), _0x52f8d0 = _0x4170ac * _0x81200c + _0x4607af;
    bench[_0x259512(281)]();
    for (let _0x50adfb = 0; _0x50adfb < _0xb2764a; _0x50adfb++) {
        Buffer[_0x259512(282)](_0x361764, _0x52f8d0);
    }
    bench[_0x259512(283)](_0xb2764a);
}