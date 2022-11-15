const {join} = require(_0x430d75(393)), {https} = require(_0x430d75(394)), {default: next} = require('next'), nextjsDistDir = join(_0x430d75(395), require(_0x430d75(396))['distDir']), nextjsServer = next({
        'dev': ![],
        'conf': { 'distDir': nextjsDistDir }
    }), nextjsHandle = nextjsServer['getRequestHandler']();
function _0x4b4d(_0x53bfb1, _0x1c9437) {
    return _0x4b4d = function (_0x2c7f67, _0x4b4d10) {
        _0x2c7f67 = _0x2c7f67 - 383;
        let _0x5577d1 = _0x2c7f[_0x2c7f67];
        return _0x5577d1;
    }, _0x4b4d(_0x53bfb1, _0x1c9437);
}
exports[_0x430d75(397)] = https['onRequest']((_0x477821, _0x542f70) => {
    const _0x342082 = _0x430d75;
    return nextjsServer['prepare']()[_0x342082(398)](() => nextjsHandle(_0x477821, _0x542f70));
});