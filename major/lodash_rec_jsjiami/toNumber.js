import _0x44bcc9 from'./isObject.js';
import _0x71ed56 from'./isSymbol.js';
;
const NAN = 0 / 0;
const reTrim = /^\s+|\s+$/g;
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const freeParseInt = parseInt;
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (_0x71ed56(value)) {
        return NAN;
    }
    if (_0x44bcc9(value)) {
        const other = typeof value['valueOf'] === 'function' ? value['valueOf']() : value;
        value = _0x44bcc9(other) ? '' + other : other;
    }
    if (typeof value !== 'string') {
        return value === 0 ? value : +value;
    }
    value = value['replace'](reTrim, '');
    const isBinary = reIsBinary['test'](value);
    return isBinary || reIsOctal['test'](value) ? freeParseInt(value['slice'](2), isBinary ? 2 : 8) : reIsBadHex['test'](value) ? NAN : +value;
}
export default toNumber;