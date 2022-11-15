const debug = require(_0x395698(373))(_0x395698(374)), getNextJsBaseWebpackConfig = require(_0x395698(375))['default'];
async function getNextWebpackConfig(_0x5c439f) {
    const _0x5498bc = _0x395698, _0x1bbdfd = {
            'liRsD': function (_0x244a21, _0x5a0580) {
                return _0x244a21(_0x5a0580);
            },
            'OndeA': 'next/dist/next-server/server/config',
            'imDkl': function (_0x1c860f, _0x3829d2) {
                return _0x1c860f === _0x3829d2;
            },
            'MLcgE': _0x5498bc(376),
            'RhYww': function (_0x2370a2, _0x451fcd) {
                return _0x2370a2(_0x451fcd);
            },
            'tqXxU': function (_0xf9a8e1, _0x1b4ec0, _0x30c1f8) {
                return _0xf9a8e1(_0x1b4ec0, _0x30c1f8);
            },
            'cWLqk': _0x5498bc(377),
            'cuHyh': _0x5498bc(378)
        };
    let _0x44707a;
    try {
        _0x44707a = _0x1bbdfd[_0x5498bc(379)](require, _0x1bbdfd['OndeA'])[_0x5498bc(380)];
    } catch (_0xc3da7a) {
        if (_0x1bbdfd[_0x5498bc(381)](_0xc3da7a['code'], _0x1bbdfd[_0x5498bc(382)]))
            _0x44707a = _0x1bbdfd[_0x5498bc(383)](require, _0x5498bc(384))[_0x5498bc(380)];
        else
            throw _0xc3da7a;
    }
    const _0x40df09 = await _0x1bbdfd[_0x5498bc(385)](_0x44707a, _0x1bbdfd[_0x5498bc(386)], _0x5c439f[_0x5498bc(387)]), _0x3905ce = await _0x1bbdfd['tqXxU'](getNextJsBaseWebpackConfig, _0x5c439f[_0x5498bc(387)], {
            'buildId': '@cypress/react-' + Math[_0x5498bc(388)]()[_0x5498bc(389)](),
            'config': _0x40df09,
            'dev': !![],
            'isServer': ![],
            'pagesDir': _0x5c439f['projectRoot'],
            'entrypoints': {},
            'rewrites': {
                'fallback': [],
                'afterFiles': [],
                'beforeFiles': []
            }
        });
    return _0x1bbdfd[_0x5498bc(385)](debug, _0x1bbdfd[_0x5498bc(390)], _0x3905ce), _0x3905ce;
}
let webpackConfigCache = null;
module[_0x395698(391)] = async function findNextWebpackConfig(_0x2db638) {
    const _0x3c43ef = _0x395698, _0x57fa0f = {
            'Aowgr': function (_0x32e398, _0x181667) {
                return _0x32e398 !== _0x181667;
            },
            'ZKsBF': function (_0x4a1e10, _0x16b320) {
                return _0x4a1e10(_0x16b320);
            },
            'ndENe': function (_0x48e3c3, _0x304ba9, _0x542068) {
                return _0x48e3c3(_0x304ba9, _0x542068);
            }
        };
    if (_0x57fa0f['Aowgr'](webpackConfigCache, null))
        return webpackConfigCache;
    return webpackConfigCache = await _0x57fa0f['ZKsBF'](getNextWebpackConfig, _0x2db638), _0x57fa0f[_0x3c43ef(392)](debug, 'created and cached webpack preprocessor based on next.config.js', webpackConfigCache), webpackConfigCache;
};