
function negate(_0x256c2d) {
    if (typeof _0x256c2d !== 'function')
        throw new TypeError('Expected a function');
    return function (..._0x31e157) {
        return !_0x256c2d['apply'](this, _0x31e157);
    };
}
export default negate;