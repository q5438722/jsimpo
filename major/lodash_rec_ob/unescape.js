
const htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': '\''
    }, reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g, reHasEscapedHtml = RegExp(reEscapedHtml['source']);
function unescape(_0x4a8f92) {
    return _0x4a8f92 && reHasEscapedHtml['test'](_0x4a8f92) ? _0x4a8f92['replace'](reEscapedHtml, _0xfe2222 => htmlUnescapes[_0xfe2222] || '\'') : _0x4a8f92 || '';
}
export default unescape;