import _0x60a8d2 from'./toInteger.js';
;
const MAX_SAFE_INTEGER = 9007199254740991;
function toSafeInteger(_0x1e92cc) {
    if (!_0x1e92cc) {
        return _0x1e92cc === 0 ? _0x1e92cc : 0;
    }
    _0x1e92cc = _0x60a8d2(_0x1e92cc);
    if (_0x1e92cc < -MAX_SAFE_INTEGER) {
        return -MAX_SAFE_INTEGER;
    }
    if (_0x1e92cc > MAX_SAFE_INTEGER) {
        return MAX_SAFE_INTEGER;
    }
    return _0x1e92cc;
}
export default toSafeInteger;