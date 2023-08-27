import _0xb9a0c8 from'./.internal/castSlice.js';
import _0x2d0861 from'./.internal/charsEndIndex.js';
import _0x351485 from'./.internal/charsStartIndex.js';
import _0x5d8863 from'./.internal/stringToArray.js';
;
function trim(string, chars) {
    if (string && chars === undefined) {
        return string['trim']();
    }
    if (!string || !chars) {
        return string || '';
    }
    const strSymbols = _0x5d8863(string);
    const chrSymbols = _0x5d8863(chars);
    const start = _0x351485(strSymbols, chrSymbols);
    const end = _0x2d0861(strSymbols, chrSymbols) + 1;
    return _0xb9a0c8(strSymbols, start, end)['join']('');
}
export default trim;