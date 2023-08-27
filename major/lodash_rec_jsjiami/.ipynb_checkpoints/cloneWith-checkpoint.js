import _0x21f069 from'./.internal/baseClone.js';
;
const CLONE_SYMBOLS_FLAG = 4;
function cloneWith(_0x39cd0f, _0xbe0343) {
    _0xbe0343 = typeof _0xbe0343 === 'function' ? _0xbe0343 : undefined;
    return _0x21f069(_0x39cd0f, CLONE_SYMBOLS_FLAG, _0xbe0343);
}
export default cloneWith;