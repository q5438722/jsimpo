import _0x42fbe0 from './.internal/castSlice.js';
import _0xfe8355 from './.internal/charsEndIndex.js';
import _0x4bf669 from './.internal/charsStartIndex.js';
import _0x38de07 from './.internal/stringToArray.js';
function trim(_0x23e7ba, _0x3c10ab) {
    if (_0x23e7ba && _0x3c10ab === undefined)
        return _0x23e7ba['trim']();
    if (!_0x23e7ba || !_0x3c10ab)
        return _0x23e7ba || '';
    const _0x578ecc = _0x38de07(_0x23e7ba), _0x97a0a5 = _0x38de07(_0x3c10ab), _0x5ae7d7 = _0x4bf669(_0x578ecc, _0x97a0a5), _0x2f97d6 = _0xfe8355(_0x578ecc, _0x97a0a5) + 1;
    return _0x42fbe0(_0x578ecc, _0x5ae7d7, _0x2f97d6)['join']('');
}
export default trim;