import _0x3e58a5 from './.internal/baseFlatten.js';
const INFINITY = 1 / 0;
function flattenDeep(_0x29c13b) {
    const _0x55daa3 = _0x29c13b == null ? 0 : _0x29c13b['length'];
    return _0x55daa3 ? _0x3e58a5(_0x29c13b, INFINITY) : [];
}
export default flattenDeep;