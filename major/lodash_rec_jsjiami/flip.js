
;
function flip(_0x51c026) {
    if (typeof _0x51c026 !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (..._0xdba87d) {
        return _0x51c026['apply'](this, _0xdba87d['reverse']());
    };
}
export default flip;