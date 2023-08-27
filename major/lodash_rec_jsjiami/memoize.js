
;
function memoize(_0xe30d12, _0x18e658) {
    if (typeof _0xe30d12 !== 'function' || _0x18e658 != null && typeof _0x18e658 !== 'function') {
        throw new TypeError('Expected a function');
    }
    const _0x27e9f1 = function (..._0x3aa532) {
        const _0x47cb65 = _0x18e658 ? _0x18e658['apply'](this, _0x3aa532) : _0x3aa532[0];
        const _0x185781 = _0x27e9f1['cache'];
        if (_0x185781['has'](_0x47cb65)) {
            return _0x185781['get'](_0x47cb65);
        }
        const _0x1d4370 = _0xe30d12['apply'](this, _0x3aa532);
        _0x27e9f1['cache'] = _0x185781['set'](_0x47cb65, _0x1d4370) || _0x185781;
        return _0x1d4370;
    };
    _0x27e9f1['cache'] = new (memoize['Cache'] || Map)();
    return _0x27e9f1;
}
memoize['Cache'] = Map;
export default memoize;