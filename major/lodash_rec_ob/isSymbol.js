import _0x284505 from './.internal/getTag.js';
function isSymbol(_0x55d1ff) {
    const _0x5acbb0 = typeof _0x55d1ff;
    return _0x5acbb0 == 'symbol' || _0x5acbb0 === 'object' && _0x55d1ff != null && _0x284505(_0x55d1ff) == '[object Symbol]';
}
export default isSymbol;