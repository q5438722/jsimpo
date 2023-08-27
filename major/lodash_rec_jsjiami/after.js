
;
function after(_0x1cc879, _0x2fec8a) {
    if (typeof _0x2fec8a !== 'function') {
        throw new TypeError('Expected a function');
    }
    _0x1cc879 = _0x1cc879 || 0;
    return function (..._0x123391) {
        if (--_0x1cc879 < 1) {
            return _0x2fec8a['apply'](this, _0x123391);
        }
    };
}
export default after;