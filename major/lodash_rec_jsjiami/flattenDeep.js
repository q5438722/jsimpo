import _0x1f9d4a from'./.internal/baseFlatten.js';
;
const INFINITY = 1 / 0;
function flattenDeep(_0x1e2b47) {
    const _0x4c8535 = _0x1e2b47 == null ? 0 : _0x1e2b47['length'];
    return _0x4c8535 ? _0x1f9d4a(_0x1e2b47, INFINITY) : [];
}
export default flattenDeep;