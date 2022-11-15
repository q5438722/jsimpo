'use strict';
var printWarning = function () {
};
if (process['env']['NODE_ENV'] !== 'production') {
    printWarning = function (_0x3f24b6, _0x5467ff) {
        var _0x198a1c = 0;
        var _0x72e284 = 'Warning: ' + (_0x5467ff['length'] > 0 ? _0x3f24b6['replace'](/%s/g, function () {
            return _0x5467ff[_0x198a1c++];
        }) : _0x3f24b6);
        if (typeof console !== 'undefined') {
            console['error'](_0x72e284);
        }
        try {
            throw new Error(_0x72e284);
        } catch (_0x17e614) {
        }
    };
}
module['exports'] = function (_0x3084fd) {
    printWarning('Please use `require("react-router-dom").%s` instead of `require("react-router-dom/%s")`. ' + 'Support for the latter will be removed in the next major release.', [
        _0x3084fd,
        _0x3084fd
    ]);
};