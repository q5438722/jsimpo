import _0x5b3133 from './toInteger.js';
const MAX_ARRAY_LENGTH = 4294967295;
function toLength(_0x49cf97) {
    if (!_0x49cf97)
        return 0;
    _0x49cf97 = _0x5b3133(_0x49cf97);
    if (_0x49cf97 < 0)
        return 0;
    if (_0x49cf97 > MAX_ARRAY_LENGTH)
        return MAX_ARRAY_LENGTH;
    return _0x49cf97;
}
export default toLength;