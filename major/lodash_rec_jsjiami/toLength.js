import _0x386c52 from'./toInteger.js';
;
const MAX_ARRAY_LENGTH = 4294967295;
function toLength(_0x54a6ff) {
    if (!_0x54a6ff) {
        return 0;
    }
    _0x54a6ff = _0x386c52(_0x54a6ff);
    if (_0x54a6ff < 0) {
        return 0;
    }
    if (_0x54a6ff > MAX_ARRAY_LENGTH) {
        return MAX_ARRAY_LENGTH;
    }
    return _0x54a6ff;
}
export default toLength;