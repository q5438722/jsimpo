import _0x58d396 from'./.internal/deburrLetter.js';
;
const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
const rsCombo = '[' + rsComboRange + ']';
const reComboMark = RegExp(rsCombo, 'g');
function deburr(_0x5dad26) {
    return _0x5dad26 && _0x5dad26['replace'](reLatin, _0x58d396)['replace'](reComboMark, '');
}
export default deburr;