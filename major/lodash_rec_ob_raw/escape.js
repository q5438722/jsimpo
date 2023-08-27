
const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
    }, reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml['source']);
function escape(_0x2da5ca) {
    return _0x2da5ca && reHasUnescapedHtml['test'](_0x2da5ca) ? _0x2da5ca['replace'](reUnescapedHtml, _0x54ce9f => htmlEscapes[_0x54ce9f]) : _0x2da5ca || '';
}
export default escape;