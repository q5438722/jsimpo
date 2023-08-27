import _0x4d6ca5 from'./toFinite.js';
;
const freeParseFloat = parseFloat;
function random(_0x1d9911, _0x294a52, _0x3ec4ff) {
    if (_0x3ec4ff === undefined) {
        if (typeof _0x294a52 === 'boolean') {
            if ('txqji' === 'txqji') {
                _0x3ec4ff = _0x294a52;
                _0x294a52 = undefined;
            } else {
                if (typeof _0x294a52 === 'boolean') {
                    _0x3ec4ff = _0x294a52;
                    _0x294a52 = undefined;
                } else if (typeof _0x1d9911 === 'boolean') {
                    _0x3ec4ff = _0x1d9911;
                    _0x1d9911 = undefined;
                }
            }
        } else if (typeof _0x1d9911 === 'boolean') {
            _0x3ec4ff = _0x1d9911;
            _0x1d9911 = undefined;
        }
    }
    if (_0x1d9911 === undefined && _0x294a52 === undefined) {
        _0x1d9911 = 0;
        _0x294a52 = 1;
    } else {
        _0x1d9911 = _0x4d6ca5(_0x1d9911);
        if (_0x294a52 === undefined) {
            _0x294a52 = _0x1d9911;
            _0x1d9911 = 0;
        } else {
            if ('AAfkV' === 'AAfkV') {
                _0x294a52 = _0x4d6ca5(_0x294a52);
            } else {
                _0x3ec4ff = _0x1d9911;
                _0x1d9911 = undefined;
            }
        }
    }
    if (_0x1d9911 > _0x294a52) {
        if ('ykrAH' !== 'KXRyE') {
            const _0xab16d4 = _0x1d9911;
            _0x1d9911 = _0x294a52;
            _0x294a52 = _0xab16d4;
        } else {
            _0x3ec4ff = _0x294a52;
            _0x294a52 = undefined;
        }
    }
    if (_0x3ec4ff || _0x1d9911 % 1 || _0x294a52 % 1) {
        if ('YsPMg' !== 'BNhCQ') {
            const _0x52e0c0 = Math['random']();
            const _0x56949c = ('' + _0x52e0c0)['length'] - 1;
            return Math['min'](_0x1d9911 + _0x52e0c0 * (_0x294a52 - _0x1d9911 + freeParseFloat('1e-' + _0x56949c)), _0x294a52);
        } else {
            _0x294a52 = _0x1d9911;
            _0x1d9911 = 0;
        }
    }
    return _0x1d9911 + Math['floor'](Math['random']() * (_0x294a52 - _0x1d9911 + 1));
}
export default random;