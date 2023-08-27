import _0x2da929 from'./.internal/createPadding.js';
import _0x2d5d57 from'./.internal/stringSize.js';
;
function pad(string, length, chars) {
    const strLength = length ? _0x2d5d57(string) : 0;
    if (!length || strLength >= length) {
        return string || '';
    }
    const mid = (length - strLength) / 2;
    return _0x2da929(Math['floor'](mid), chars) + string + _0x2da929(Math['ceil'](mid), chars);
}
export default pad;