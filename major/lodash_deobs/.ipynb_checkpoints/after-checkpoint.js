;
function after(_0x14c587, _0x3bcf6d) {
    if (typeof _0x3bcf6d !== 'function') {
        throw new TypeError('Expected a function');
    }
    _0x14c587 = _0x14c587 || 0;
    return function (..._0x314eea) {
        if (--_0x14c587 < 1) {
            return _0x3bcf6d['apply'](this, _0x314eea);
        }
    };
}