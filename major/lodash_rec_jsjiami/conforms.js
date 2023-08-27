import _0x44c4a6 from'./.internal/baseClone.js';
import _0x86a91a from'./.internal/baseConforms.js';
;
const CLONE_DEEP_FLAG = 1;
function conforms(source) {
    return _0x86a91a(_0x44c4a6(source, CLONE_DEEP_FLAG));
}
export default conforms;