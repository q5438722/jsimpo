import _0x106f3a from'./.internal/baseIsMatch.js';
import _0xbba1ac from'./.internal/getMatchData.js';
;
function isMatch(object, source) {
    return object === source || _0x106f3a(object, source, _0xbba1ac(source));
}
export default isMatch;