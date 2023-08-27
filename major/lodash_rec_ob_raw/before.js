
function before(_0x572f24, _0x4b4c46) {
    let _0x4937cf;
    if (typeof _0x4b4c46 !== 'function')
        throw new TypeError('Expected a function');
    return function (..._0x111426) {
        return --_0x572f24 > 0 && (_0x4937cf = _0x4b4c46['apply'](this, _0x111426)), _0x572f24 <= 1 && (_0x4b4c46 = undefined), _0x4937cf;
    };
}
export default before;