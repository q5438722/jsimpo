
;
const MAX_SAFE_INTEGER = 9007199254740991;
const MAX_ARRAY_LENGTH = 4294967295;
function times(_0x187840, _0x2efb29) {
    if (_0x187840 < 1 || _0x187840 > MAX_SAFE_INTEGER) {
        return [];
    }
    let _0x50fe5c = -1;
    const _0x42dbb9 = Math['min'](_0x187840, MAX_ARRAY_LENGTH);
    const _0x5a3c1f = new Array(_0x42dbb9);
    while (++_0x50fe5c < _0x42dbb9) {
        _0x5a3c1f[_0x50fe5c] = _0x2efb29(_0x50fe5c);
    }
    _0x50fe5c = MAX_ARRAY_LENGTH;
    _0x187840 -= MAX_ARRAY_LENGTH;
    while (++_0x50fe5c < _0x187840) {
        _0x2efb29(_0x50fe5c);
    }
    return _0x5a3c1f;
}
export default times;