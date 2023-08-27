import _0x160fbd from'./.internal/baseClone.js';
import _0x22de2e from'./.internal/baseMatchesProperty.js';
;
const CLONE_DEEP_FLAG = 1;
function matchesProperty(path, srcValue) {
    return _0x22de2e(path, _0x160fbd(srcValue, CLONE_DEEP_FLAG));
}
export default matchesProperty;