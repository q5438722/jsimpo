import _0x59d721 from'./.internal/baseFlatten.js';
;
function flattenDepth(_0x1b237f, _0x50c8f9) {
    const _0x5437df = _0x1b237f == null ? 0 : _0x1b237f['length'];
    if (!_0x5437df) {
        return [];
    }
    _0x50c8f9 = _0x50c8f9 === undefined ? 1 : +_0x50c8f9;
    return _0x59d721(_0x1b237f, _0x50c8f9);
}
export default flattenDepth;