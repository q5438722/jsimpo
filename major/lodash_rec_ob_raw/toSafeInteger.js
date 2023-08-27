import _0x2f9c7f from './toInteger.js';
const MAX_SAFE_INTEGER = 9007199254740991;
function toSafeInteger(_0x21a6d5) {
    if (!_0x21a6d5)
        return _0x21a6d5 === 0 ? _0x21a6d5 : 0;
    _0x21a6d5 = _0x2f9c7f(_0x21a6d5);
    if (_0x21a6d5 < -MAX_SAFE_INTEGER)
        return -MAX_SAFE_INTEGER;
    if (_0x21a6d5 > MAX_SAFE_INTEGER)
        return MAX_SAFE_INTEGER;
    return _0x21a6d5;
}
export default toSafeInteger;