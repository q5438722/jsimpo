import _0x4b194b from'./.internal/castSlice.js';
import _0x26956a from'./.internal/charsEndIndex.js';
import _0x1ea984 from'./.internal/stringToArray.js';
;
const methodName = ''['trimRight'] ? 'trimRight' : 'trimEnd';
function trimEnd(string, chars) {
    if (string && chars === undefined) {
        return string[methodName]();
    }
    if (!string || !chars) {
        return string || '';
    }
    const strSymbols = _0x1ea984(string);
    const end = _0x26956a(strSymbols, _0x1ea984(chars)) + 1;
    return _0x4b194b(strSymbols, 0, end)['join']('');
}
export default trimEnd;