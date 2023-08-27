import _0x3fb7e6 from './.internal/baseClone.js';
const CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(_0x4b9e9b) {
    return _0x3fb7e6(_0x4b9e9b, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
export default cloneDeep;