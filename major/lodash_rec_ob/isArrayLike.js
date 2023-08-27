import _0x3429f5 from './isLength.js';
function isArrayLike(_0x5d6527) {
    return _0x5d6527 != null && typeof _0x5d6527 !== 'function' && _0x3429f5(_0x5d6527['length']);
}
export default isArrayLike;