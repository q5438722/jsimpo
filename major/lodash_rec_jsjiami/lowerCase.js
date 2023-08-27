import _0x21de80 from'./words.js';
import _0x57fdf7 from'./toString.js';
const reQuotes=/['\u2019]/g;const lowerCase=string=>_0x21de80(_0x57fdf7(string)['replace'](reQuotes,''))['reduce']((result,word,index)=>result+(index?'\x20':'')+word['toLowerCase'](),'');
export default lowerCase;