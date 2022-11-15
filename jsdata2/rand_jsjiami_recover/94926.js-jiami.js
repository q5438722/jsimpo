const debug = require('debug')('@cypress/react');
const getNextJsBaseWebpackConfig = require('next/dist/build/webpack-config')['default'];
async function getNextWebpackConfig(_0x5daedd) {
    let _0x164a12;
    try {
        if ('ElwDz' === 'ElwDz') {
            _0x164a12 = require('next/dist/next-server/server/config')['default'];
        } else {
            return webpackConfigCache;
        }
    } catch (_0x534234) {
        if (_0x534234['code'] === 'MODULE_NOT_FOUND') {
            _0x164a12 = require('next/dist/server/config')['default'];
        } else {
            throw _0x534234;
        }
    }
    const _0x4615f1 = await _0x164a12('development', _0x5daedd['projectRoot']);
    const _0x508c99 = await getNextJsBaseWebpackConfig(_0x5daedd['projectRoot'], {
        'buildId': '@cypress/react-' + Math['random']()['toString'](),
        'config': _0x4615f1,
        'dev': !![],
        'isServer': ![],
        'pagesDir': _0x5daedd['projectRoot'],
        'entrypoints': {},
        'rewrites': {
            'fallback': [],
            'afterFiles': [],
            'beforeFiles': []
        }
    });
    debug('resolved next.js webpack config %o', _0x508c99);
    return _0x508c99;
}
let webpackConfigCache = null;
module['exports'] = async function findNextWebpackConfig(_0x9a7ea5) {
    if (webpackConfigCache !== null) {
        return webpackConfigCache;
    }
    webpackConfigCache = await getNextWebpackConfig(_0x9a7ea5);
    debug('created and cached webpack preprocessor based on next.config.js', webpackConfigCache);
    return webpackConfigCache;
};