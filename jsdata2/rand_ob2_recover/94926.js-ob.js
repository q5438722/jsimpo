const debug = require(_0x570689(483))(_0x570689(484)), getNextJsBaseWebpackConfig = require('next/dist/build/webpack-config')[_0x570689(485)];
async function getNextWebpackConfig(_0x28d452) {
    const _0x560e8d = _0x570689;
    let _0x30325;
    try {
        _0x30325 = require('next/dist/next-server/server/config')['default'];
    } catch (_0x24f9c0) {
        if (_0x24f9c0[_0x560e8d(486)] === _0x560e8d(487))
            _0x30325 = require(_0x560e8d(488))[_0x560e8d(485)];
        else
            throw _0x24f9c0;
    }
    const _0x428730 = await _0x30325(_0x560e8d(489), _0x28d452['projectRoot']), _0x155269 = await getNextJsBaseWebpackConfig(_0x28d452[_0x560e8d(490)], {
            'buildId': _0x560e8d(491) + Math[_0x560e8d(492)]()[_0x560e8d(493)](),
            'config': _0x428730,
            'dev': !![],
            'isServer': ![],
            'pagesDir': _0x28d452[_0x560e8d(490)],
            'entrypoints': {},
            'rewrites': {
                'fallback': [],
                'afterFiles': [],
                'beforeFiles': []
            }
        });
    return debug(_0x560e8d(494), _0x155269), _0x155269;
}
function _0x4063(_0x4783fa, _0x2a941b) {
    return _0x4063 = function (_0x3b8987, _0x4063d4) {
        _0x3b8987 = _0x3b8987 - 473;
        let _0x2ee664 = _0x3b89[_0x3b8987];
        return _0x2ee664;
    }, _0x4063(_0x4783fa, _0x2a941b);
}
let webpackConfigCache = null;
module['exports'] = async function findNextWebpackConfig(_0x39d498) {
    if (webpackConfigCache !== null)
        return webpackConfigCache;
    return webpackConfigCache = await getNextWebpackConfig(_0x39d498), debug('created and cached webpack preprocessor based on next.config.js', webpackConfigCache), webpackConfigCache;
};