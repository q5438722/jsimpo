
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar['source']);
function escapeRegExp(_0x21d0e3) {
    return _0x21d0e3 && reHasRegExpChar['test'](_0x21d0e3) ? _0x21d0e3['replace'](reRegExpChar, '\\$&') : _0x21d0e3 || '';
}
export default escapeRegExp;