import _0x19355b from './map.js';
function cond(_0xa1d63c) {
    const _0x1447c7 = _0xa1d63c == null ? 0 : _0xa1d63c['length'];
    return _0xa1d63c = !_0x1447c7 ? [] : _0x19355b(_0xa1d63c, _0x1e017e => {
        if (typeof _0x1e017e[1] !== 'function')
            throw new TypeError('Expected a function');
        return [
            _0x1e017e[0],
            _0x1e017e[1]
        ];
    }), (..._0x5b4fd8) => {
        for (const _0x1d6c62 of _0xa1d63c) {
            if (_0x1d6c62[0]['apply'](this, _0x5b4fd8))
                return _0x1d6c62[1]['apply'](this, _0x5b4fd8);
        }
    };
}
export default cond;