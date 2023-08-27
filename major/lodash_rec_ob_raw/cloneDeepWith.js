import _0x5f1476 from './.internal/baseClone.js';
const CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeepWith(_0x42a394, _0x6fca58) {
    return _0x6fca58 = typeof _0x6fca58 === 'function' ? _0x6fca58 : undefined, _0x5f1476(_0x42a394, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, _0x6fca58);
}
export default cloneDeepWith;