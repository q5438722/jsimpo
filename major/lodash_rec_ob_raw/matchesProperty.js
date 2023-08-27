import _0x42a50e from './.internal/baseClone.js';
import _0xa7693c from './.internal/baseMatchesProperty.js';
const CLONE_DEEP_FLAG = 1;
function matchesProperty(_0x44c8fd, _0x722093) {
    return _0xa7693c(_0x44c8fd, _0x42a50e(_0x722093, CLONE_DEEP_FLAG));
}
export default matchesProperty;