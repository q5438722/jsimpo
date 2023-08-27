
;
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml['source']);
function escape(_0x5668b6) {
    return _0x5668b6 && reHasUnescapedHtml['test'](_0x5668b6) ? _0x5668b6['replace'](reUnescapedHtml, _0x4e42d3 => htmlEscapes[_0x4e42d3]) : _0x5668b6 || '';
}
export default escape;