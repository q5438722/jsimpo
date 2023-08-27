import _0x262cb4 from'./isLength.js';
;
function isArrayLike(_0x4b6447) {
    return _0x4b6447 != null && typeof _0x4b6447 !== 'function' && _0x262cb4(_0x4b6447['length']);
}
export default isArrayLike;