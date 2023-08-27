
;
function negate(_0x2c4942) {
    if (typeof _0x2c4942 !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (..._0x59c0bd) {
        return !_0x2c4942['apply'](this, _0x59c0bd);
    };
}
export default negate;