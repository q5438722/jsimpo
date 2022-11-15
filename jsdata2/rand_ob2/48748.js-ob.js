const _0x2c7f = [
    'then',
    '145uoaBYO',
    '3083gaQxOb',
    '1761914tXGKVs',
    '383245KeGqCj',
    '9773nykvRr',
    '73bbuhDM',
    '1379016jddAnZ',
    '5ZgtXUR',
    '204143itIvKT',
    '454253LlWueB',
    'path',
    'firebase-functions',
    'src',
    './src/next.config.js',
    'nextjsFunc'
];
const _0x430d75 = _0x4b4d;
(function (_0x46fe91, _0xd0ac31) {
    const _0x29dfdf = _0x4b4d;
    while (!![]) {
        try {
            const _0x1ed5a7 = parseInt(_0x29dfdf(0x17f)) * -parseInt(_0x29dfdf(0x180)) + parseInt(_0x29dfdf(0x181)) + parseInt(_0x29dfdf(0x182)) + -parseInt(_0x29dfdf(0x183)) * parseInt(_0x29dfdf(0x184)) + parseInt(_0x29dfdf(0x185)) + parseInt(_0x29dfdf(0x186)) * -parseInt(_0x29dfdf(0x187)) + -parseInt(_0x29dfdf(0x188));
            if (_0x1ed5a7 === _0xd0ac31)
                break;
            else
                _0x46fe91['push'](_0x46fe91['shift']());
        } catch (_0x2c03d0) {
            _0x46fe91['push'](_0x46fe91['shift']());
        }
    }
}(_0x2c7f, 0xd8fa7));
const {join} = require(_0x430d75(0x189)), {https} = require(_0x430d75(0x18a)), {default: next} = require('next'), nextjsDistDir = join(_0x430d75(0x18b), require(_0x430d75(0x18c))['distDir']), nextjsServer = next({
        'dev': ![],
        'conf': { 'distDir': nextjsDistDir }
    }), nextjsHandle = nextjsServer['getRequestHandler']();
function _0x4b4d(_0x53bfb1, _0x1c9437) {
    return _0x4b4d = function (_0x2c7f67, _0x4b4d10) {
        _0x2c7f67 = _0x2c7f67 - 0x17f;
        let _0x5577d1 = _0x2c7f[_0x2c7f67];
        return _0x5577d1;
    }, _0x4b4d(_0x53bfb1, _0x1c9437);
}
exports[_0x430d75(0x18d)] = https['onRequest']((_0x477821, _0x542f70) => {
    const _0x342082 = _0x430d75;
    return nextjsServer['prepare']()[_0x342082(0x18e)](() => nextjsHandle(_0x477821, _0x542f70));
});
