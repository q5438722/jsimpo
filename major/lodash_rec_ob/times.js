
const MAX_SAFE_INTEGER = 9007199254740991, MAX_ARRAY_LENGTH = 4294967295;
function times(_0x47dd7d, _0x40abf0) {
    if (_0x47dd7d < 1 || _0x47dd7d > MAX_SAFE_INTEGER)
        return [];
    let _0x35f25c = -1;
    const _0x1ae07b = Math['min'](_0x47dd7d, MAX_ARRAY_LENGTH), _0x1912d6 = new Array(_0x1ae07b);
    while (++_0x35f25c < _0x1ae07b) {
        _0x1912d6[_0x35f25c] = _0x40abf0(_0x35f25c);
    }
    _0x35f25c = MAX_ARRAY_LENGTH, _0x47dd7d -= MAX_ARRAY_LENGTH;
    while (++_0x35f25c < _0x47dd7d) {
        _0x40abf0(_0x35f25c);
    }
    return _0x1912d6;
}
export default times;