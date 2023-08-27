import _0x118786 from './slice.js';
import _0x262f1f from './toInteger.js';
function chunk(_0xb66f4a, _0x3a12f3 = 1) {
    _0x3a12f3 = Math['max'](_0x262f1f(_0x3a12f3), 0);
    const _0x346c89 = _0xb66f4a == null ? 0 : _0xb66f4a['length'];
    if (!_0x346c89 || _0x3a12f3 < 1)
        return [];
    let _0x52a880 = 0, _0x44b18f = 0;
    const _0x371e4b = new Array(Math['ceil'](_0x346c89 / _0x3a12f3));
    while (_0x52a880 < _0x346c89) {
        _0x371e4b[_0x44b18f++] = _0x118786(_0xb66f4a, _0x52a880, _0x52a880 += _0x3a12f3);
    }
    return _0x371e4b;
}
export default chunk;