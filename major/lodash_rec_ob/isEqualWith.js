import _0x3d741a from './.internal/baseIsEqual.js';
function isEqualWith(_0x15a21e, _0x43fc24, _0x5d2973) {
    _0x5d2973 = typeof _0x5d2973 === 'function' ? _0x5d2973 : undefined;
    const _0x3e8738 = _0x5d2973 ? _0x5d2973(_0x15a21e, _0x43fc24) : undefined;
    return _0x3e8738 === undefined ? _0x3d741a(_0x15a21e, _0x43fc24, undefined, _0x5d2973) : !!_0x3e8738;
}
export default isEqualWith;