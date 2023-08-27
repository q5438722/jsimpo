import _0x161420 from'./.internal/baseIsEqual.js';
;
function isEqualWith(_0x28a7e7, _0x5b0a19, _0x5734d0) {
    _0x5734d0 = typeof _0x5734d0 === 'function' ? _0x5734d0 : undefined;
    const _0x581142 = _0x5734d0 ? _0x5734d0(_0x28a7e7, _0x5b0a19) : undefined;
    return _0x581142 === undefined ? _0x161420(_0x28a7e7, _0x5b0a19, undefined, _0x5734d0) : !!_0x581142;
}
export default isEqualWith;