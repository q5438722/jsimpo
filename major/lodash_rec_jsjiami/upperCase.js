import _0x37d001 from'./words.js';
import _0x5b7f8a from'./toString.js';
const upperCase=string=>_0x37d001(_0x5b7f8a(string)['replace'](/['\u2019]/g,''))['reduce']((result,word,index)=>result+(index?'\x20':'')+word['toUpperCase'](),'');
export default upperCase;