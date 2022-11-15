const {join} = require('path'), {https} = require('firebase-functions'), {default: next} = require('next'), nextjsDistDir = join(_0xc5049d(453), require(_0xc5049d(454))[_0xc5049d(455)]), nextjsServer = next({
        'dev': ![],
        'conf': { 'distDir': nextjsDistDir }
    }), nextjsHandle = nextjsServer[_0xc5049d(456)]();
function _0x381f(_0xfb1f08, _0x55b944) {
    return _0x381f = function (_0x198e4c, _0x59993a) {
        _0x198e4c = _0x198e4c - (4 * 1111 + 9975 + -1 * 13976);
        let _0xa00f5 = _0x4bd6[_0x198e4c];
        return _0xa00f5;
    }, _0x381f(_0xfb1f08, _0x55b944);
}
exports[_0xc5049d(457)] = https[_0xc5049d(458)]((_0x4d4597, _0x5931aa) => {
    const _0x476679 = _0xc5049d;
    return nextjsServer['prepare']()[_0x476679(459)](() => nextjsHandle(_0x4d4597, _0x5931aa));
});