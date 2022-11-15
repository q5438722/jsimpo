const _0x4bd6 = [
    'then',
    '640984IeXsPm',
    '161979oFjxWy',
    '5TWdfHi',
    '220105OuWZBc',
    '7EfrAke',
    '113871FnAVqA',
    '1319325HbeyMN',
    '688693RJjkKe',
    '3117KvgzMm',
    '951rhMUIR',
    'src',
    './src/next.config.js',
    'distDir',
    'getRequestHandler',
    'nextjsFunc',
    'onRequest'
];
const _0xc5049d = _0x381f;
(function (_0x5080d0, _0x4cae88) {
    const _0x5d800d = _0x381f;
    while (!![]) {
        try {
            const _0x68fa21 = parseInt(_0x5d800d(0x1bb)) + -parseInt(_0x5d800d(0x1bc)) + parseInt(_0x5d800d(0x1bd)) * -parseInt(_0x5d800d(0x1be)) + -parseInt(_0x5d800d(0x1bf)) * parseInt(_0x5d800d(0x1c0)) + -parseInt(_0x5d800d(0x1c1)) + parseInt(_0x5d800d(0x1c2)) + parseInt(_0x5d800d(0x1c3)) * parseInt(_0x5d800d(0x1c4));
            if (_0x68fa21 === _0x4cae88)
                break;
            else
                _0x5080d0['push'](_0x5080d0['shift']());
        } catch (_0x213ea7) {
            _0x5080d0['push'](_0x5080d0['shift']());
        }
    }
}(_0x4bd6, 0x47cf3 * 0x5 + -0x24eed + -0x62b88));
const {join} = require('path'), {https} = require('firebase-functions'), {default: next} = require('next'), nextjsDistDir = join(_0xc5049d(0x1c5), require(_0xc5049d(0x1c6))[_0xc5049d(0x1c7)]), nextjsServer = next({
        'dev': ![],
        'conf': { 'distDir': nextjsDistDir }
    }), nextjsHandle = nextjsServer[_0xc5049d(0x1c8)]();
function _0x381f(_0xfb1f08, _0x55b944) {
    return _0x381f = function (_0x198e4c, _0x59993a) {
        _0x198e4c = _0x198e4c - (0x4 * 0x457 + 0x26f7 + -0x1 * 0x3698);
        let _0xa00f5 = _0x4bd6[_0x198e4c];
        return _0xa00f5;
    }, _0x381f(_0xfb1f08, _0x55b944);
}
exports[_0xc5049d(0x1c9)] = https[_0xc5049d(0x1ca)]((_0x4d4597, _0x5931aa) => {
    const _0x476679 = _0xc5049d;
    return nextjsServer['prepare']()[_0x476679(0x1cb)](() => nextjsHandle(_0x4d4597, _0x5931aa));
});
