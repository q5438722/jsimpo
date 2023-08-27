import _0x2ababc from './toFinite.js';
const freeParseFloat = parseFloat;
function random(_0x12d51e, _0x57f090, _0x431f39) {
    if (_0x431f39 === undefined) {
        if (typeof _0x57f090 === 'boolean')
            _0x431f39 = _0x57f090, _0x57f090 = undefined;
        else
            typeof _0x12d51e === 'boolean' && (_0x431f39 = _0x12d51e, _0x12d51e = undefined);
    }
    _0x12d51e === undefined && _0x57f090 === undefined ? (_0x12d51e = 0, _0x57f090 = 1) : (_0x12d51e = _0x2ababc(_0x12d51e), _0x57f090 === undefined ? (_0x57f090 = _0x12d51e, _0x12d51e = 0) : _0x57f090 = _0x2ababc(_0x57f090));
    if (_0x12d51e > _0x57f090) {
        const _0x2c980c = _0x12d51e;
        _0x12d51e = _0x57f090, _0x57f090 = _0x2c980c;
    }
    if (_0x431f39 || _0x12d51e % 1 || _0x57f090 % 1) {
        const _0x3f9069 = Math['random'](), _0x3ee944 = ('' + _0x3f9069)['length'] - 1;
        return Math['min'](_0x12d51e + _0x3f9069 * (_0x57f090 - _0x12d51e + freeParseFloat('1e-' + _0x3ee944)), _0x57f090);
    }
    return _0x12d51e + Math['floor'](Math['random']() * (_0x57f090 - _0x12d51e + 1));
}
export default random;