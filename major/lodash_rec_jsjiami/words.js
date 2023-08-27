import _0x1af856 from'./.internal/unicodeWords.js';
;
const hasUnicodeWord = RegExp['prototype']['test']['bind'](/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/);
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(_0x3ed1fa) {
    return _0x3ed1fa['match'](reAsciiWord);
}
function words(_0xcafa08, _0x39779e) {
    if (_0x39779e === undefined) {
        const _0x235cad = hasUnicodeWord(_0xcafa08) ? _0x1af856(_0xcafa08) : asciiWords(_0xcafa08);
        return _0x235cad || [];
    }
    return _0xcafa08['match'](_0x39779e) || [];
}
export default words;