
function flip(_0x4f42c3) {
    if (typeof _0x4f42c3 !== 'function')
        throw new TypeError('Expected a function');
    return function (..._0x1f4cc0) {
        return _0x4f42c3['apply'](this, _0x1f4cc0['reverse']());
    };
}
export default flip;