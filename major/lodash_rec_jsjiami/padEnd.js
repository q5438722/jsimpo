import _0x51d882 from'./.internal/createPadding.js';
import _0x443a40 from'./.internal/stringSize.js';
;
function padEnd(string, length, chars) {
    const strLength = length ? _0x443a40(string) : 0;
    return length && strLength < length ? string + _0x51d882(length - strLength, chars) : string || '';
}
export default padEnd;