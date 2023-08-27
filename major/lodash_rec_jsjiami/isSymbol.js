import _0x22dfdb from'./.internal/getTag.js';
;
function isSymbol(_0x52ee88) {
    const _0x55f33d = typeof _0x52ee88;
    return _0x55f33d == 'symbol' || _0x55f33d === 'object' && _0x52ee88 != null && _0x22dfdb(_0x52ee88) == '[object Symbol]';
}
export default isSymbol;