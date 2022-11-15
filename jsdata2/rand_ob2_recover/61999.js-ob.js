function newFastRegExp() {
    return new RegExp('.');
}
function toSlowRegExp(_0x5c39e8) {
    const _0x4a5304 = _0x120e;
    _0x5c39e8[_0x4a5304(344)] = 42;
}
let re = newFastRegExp();
function _0x120e(_0x184082, _0x17b51a) {
    return _0x120e = function (_0x79a9c9, _0x120ef5) {
        _0x79a9c9 = _0x79a9c9 - 336;
        let _0x16de23 = _0x79a9[_0x79a9c9];
        return _0x16de23;
    }, _0x120e(_0x184082, _0x17b51a);
}
const evil_nonstring = { [Symbol[_0xc2d059(345)]]: () => toSlowRegExp(re) }, empty_string = '';
String[_0xc2d059(346)][_0xc2d059(347)][_0xc2d059(348)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0xc2d059(346)][_0xc2d059(349)][_0xc2d059(348)](evil_nonstring, re, empty_string), re = newFastRegExp(), String['prototype'][_0xc2d059(350)][_0xc2d059(348)](evil_nonstring, re, empty_string), re = newFastRegExp(), String[_0xc2d059(346)][_0xc2d059(351)]['call'](evil_nonstring, re, empty_string);