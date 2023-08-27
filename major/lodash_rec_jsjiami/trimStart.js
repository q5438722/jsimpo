import _0x51a48c from'./.internal/castSlice.js';
import _0x1d30f2 from'./.internal/charsStartIndex.js';
import _0x8ddff0 from'./.internal/stringToArray.js';
;
const methodName = ''['trimLeft'] ? 'trimLeft' : 'trimStart';
function trimStart(string, chars) {
    if (string && chars === undefined) {
        return string[methodName]();
    }
    if (!string || !chars) {
        return string || '';
    }
    const strSymbols = _0x8ddff0(string);
    const start = _0x1d30f2(strSymbols, _0x8ddff0(chars));
    return _0x51a48c(strSymbols, start)['join']('');
}
export default trimStart;