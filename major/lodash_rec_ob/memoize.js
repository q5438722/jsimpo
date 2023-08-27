
function memoize(_0x5098d1, _0x13409c) {
    if (typeof _0x5098d1 !== 'function' || _0x13409c != null && typeof _0x13409c !== 'function')
        throw new TypeError('Expected a function');
    const _0x5eef75 = function (..._0x25e653) {
        const _0x47bba1 = _0x13409c ? _0x13409c['apply'](this, _0x25e653) : _0x25e653[0], _0x41e21d = _0x5eef75['cache'];
        if (_0x41e21d['has'](_0x47bba1))
            return _0x41e21d['get'](_0x47bba1);
        const _0x42c435 = _0x5098d1['apply'](this, _0x25e653);
        return _0x5eef75['cache'] = _0x41e21d['set'](_0x47bba1, _0x42c435) || _0x41e21d, _0x42c435;
    };
    return _0x5eef75['cache'] = new (memoize['Cache'] || Map)(), _0x5eef75;
}
memoize['Cache'] = Map;
export default memoize;