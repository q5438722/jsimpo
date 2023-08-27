import _0x2501b7 from './.internal/deburrLetter.js';
const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboMarksExtendedRange = '\\u1ab0-\\u1aff', rsComboMarksSupplementRange = '\\u1dc0-\\u1dff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange, rsCombo = '[' + rsComboRange + ']', reComboMark = RegExp(rsCombo, 'g');
function deburr(_0x204372) {
    return _0x204372 && _0x204372['replace'](reLatin, _0x2501b7)['replace'](reComboMark, '');
}
export default deburr;