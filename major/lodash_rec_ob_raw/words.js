import _0x1d94a4 from './.internal/unicodeWords.js';
const hasUnicodeWord = RegExp['prototype']['test']['bind'](/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/), reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(_0x2cd49a) {
    return _0x2cd49a['match'](reAsciiWord);
}
function words(_0x449449, _0x363bee) {
    if (_0x363bee === undefined) {
        const _0x2b884e = hasUnicodeWord(_0x449449) ? _0x1d94a4(_0x449449) : asciiWords(_0x449449);
        return _0x2b884e || [];
    }
    return _0x449449['match'](_0x363bee) || [];
}
export default words;