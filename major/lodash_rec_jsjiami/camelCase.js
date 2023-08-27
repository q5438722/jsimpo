import _0x1a0fd3 from'./upperFirst.js';
import _0x164bb2 from'./words.js';
import _0x37c984 from'./toString.js';
;
const camelCase = string => _0x164bb2(_0x37c984(string)['replace'](/['\u2019]/g, ''))['reduce']((result, word, index) => {
    word = word['toLowerCase']();
    return result + (index ? _0x1a0fd3(word) : word);
}, '');
export default camelCase;