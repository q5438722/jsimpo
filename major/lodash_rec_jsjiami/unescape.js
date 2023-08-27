
;
const htmlUnescapes = {  
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"

};
const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml['source']);
function unescape(_0x5d5a50) {
    return _0x5d5a50 && reHasEscapedHtml['test'](_0x5d5a50) ? _0x5d5a50['replace'](reEscapedHtml, _0x26f0f2 => htmlUnescapes[_0x26f0f2] || '\'') : _0x5d5a50 || '';
}
export default unescape;