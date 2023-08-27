import _0x169258 from'./.internal/castSlice.js';
import _0x221d7d from'./.internal/hasUnicode.js';
import _0x2067ba from'./isRegExp.js';
import _0x804fd1 from'./.internal/stringToArray.js';
;
const MAX_ARRAY_LENGTH = 4294967295;
function split(string, separator, limit) {
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
        return [];
    }
    if (string && (typeof separator === 'string' || separator != null && !_0x2067ba(separator))) {
        if (!separator && _0x221d7d(string)) {
            return _0x169258(_0x804fd1(string), 0, limit);
        }
    }
    return string['split'](separator, limit);
}
export default split;