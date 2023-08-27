import _0x22a799 from './isObject.js';
import _0x2bf1a from './isSymbol.js';
const NAN = 0 / 0, reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
function toNumber(_0x21ed4d) {
    if (typeof _0x21ed4d === 'number')
        return _0x21ed4d;
    if (_0x2bf1a(_0x21ed4d))
        return NAN;
    if (_0x22a799(_0x21ed4d)) {
        const _0x2970b6 = typeof _0x21ed4d['valueOf'] === 'function' ? _0x21ed4d['valueOf']() : _0x21ed4d;
        _0x21ed4d = _0x22a799(_0x2970b6) ? '' + _0x2970b6 : _0x2970b6;
    }
    if (typeof _0x21ed4d !== 'string')
        return _0x21ed4d === 0 ? _0x21ed4d : +_0x21ed4d;
    _0x21ed4d = _0x21ed4d['replace'](reTrim, '');
    const _0x90660 = reIsBinary['test'](_0x21ed4d);
    return _0x90660 || reIsOctal['test'](_0x21ed4d) ? freeParseInt(_0x21ed4d['slice'](2), _0x90660 ? 2 : 8) : reIsBadHex['test'](_0x21ed4d) ? NAN : +_0x21ed4d;
}
export default toNumber;