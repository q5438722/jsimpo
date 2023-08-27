
;
function before(_0x14ace6, _0x41ead9) {
    let _0x5f89c8;
    if (typeof _0x41ead9 !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (..._0x505ada) {
        if (--_0x14ace6 > 0) {
            _0x5f89c8 = _0x41ead9['apply'](this, _0x505ada);
        }
        if (_0x14ace6 <= 1) {
            _0x41ead9 = undefined;
        }
        return _0x5f89c8;
    };
}
export default before;