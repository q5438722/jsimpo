import _0x3c36e9 from'./.internal/baseClone.js';
import _0xcb9614 from'./.internal/baseMatches.js';
;
const CLONE_DEEP_FLAG = 1;
function matches(source) {
    return _0xcb9614(_0x3c36e9(source, CLONE_DEEP_FLAG));
}
export default matches;