
;
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar['source']);
function escapeRegExp(_0x549d1e) {
    return _0x549d1e && reHasRegExpChar['test'](_0x549d1e) ? _0x549d1e['replace'](reRegExpChar, '\\$&') : _0x549d1e || '';
}
export default escapeRegExp;