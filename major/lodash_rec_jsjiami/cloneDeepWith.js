import _0x334097 from'./.internal/baseClone.js';
;
const CLONE_DEEP_FLAG = 1;
const CLONE_SYMBOLS_FLAG = 4;
function cloneDeepWith(_0x5a1757, _0x48597a) {
    _0x48597a = typeof _0x48597a === 'function' ? _0x48597a : undefined;
    return _0x334097(_0x5a1757, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, _0x48597a);
}
export default cloneDeepWith;