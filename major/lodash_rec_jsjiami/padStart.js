import _0x23d6a8 from'./.internal/createPadding.js';
import _0x1cb79b from'./.internal/stringSize.js';
;
function padStart(string, length, chars) {
    const strLength = length ? _0x1cb79b(string) : 0;
    return length && strLength < length ? _0x23d6a8(length - strLength, chars) + string : string || '';
}
export default padStart;