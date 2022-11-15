const _0x5211 = ['ndENe', '24199OdAkVw', '48668gvJNqP', '2xRnqkf', '58369KtGxyk', '7524CgNFgy', '36787KIlMCZ', '193132QMrYYK', '274415RhznaL', 'debug', '@cypress/react', 'next/dist/build/webpack-config', 'MODULE_NOT_FOUND', 'development', 'resolved next.js webpack config %o', 'liRsD', 'default', 'imDkl', 'MLcgE', 'RhYww', 'next/dist/server/config', 'tqXxU', 'cWLqk', 'projectRoot', 'random', 'toString', 'cuHyh', 'exports'];
const _0x395698 = _0x200e;

function _0x200e(_0x31d18c, _0x22d4ac) {
    return _0x200e = function (_0x46625c, _0x4e1860) {
        _0x46625c = _0x46625c - 365;
        const _0x18fe65 = _0x5211[_0x46625c];

        return _0x18fe65;
    }, _0x200e(_0x31d18c, _0x22d4ac);
}
(function (_0x44b0c4, _0x593a05) {
    const _0x26015e = _0x200e;

    while (true) {
        try {
            const _0x549574 = parseInt(_0x26015e(0x16d)) + parseInt(_0x26015e(0x16e)) * parseInt(_0x26015e(0x16f)) + -parseInt(_0x26015e(0x170)) + -parseInt(_0x26015e(0x171)) + -parseInt(_0x26015e(0x172)) + -parseInt(_0x26015e(0x173)) + parseInt(_0x26015e(0x174));

            if (_0x549574 === _0x593a05) break;else _0x44b0c4.push(_0x44b0c4.shift());
        } catch (_0x1208c7) {
            _0x44b0c4.push(_0x44b0c4.shift());
        }
    }
})(_0x5211, 100138);

const debug = require(_0x395698(0x175))(_0x395698(0x176));

const getNextJsBaseWebpackConfig = require(_0x395698(0x177)).default;

async function getNextWebpackConfig(_0x5c439f) {
    const _0x5498bc = _0x395698;
    const _0x1bbdfd = {
        'liRsD': function (_0x244a21, _0x5a0580) {
            return _0x244a21(_0x5a0580);
        },
        'OndeA': 'next/dist/next-server/server/config',
        'imDkl': function (_0x1c860f, _0x3829d2) {
            return _0x1c860f === _0x3829d2;
        },
        'MLcgE': _0x5498bc(0x178),
        'RhYww': function (_0x2370a2, _0x451fcd) {
            return _0x2370a2(_0x451fcd);
        },
        'tqXxU': function (_0xf9a8e1, _0x1b4ec0, _0x30c1f8) {
            return _0xf9a8e1(_0x1b4ec0, _0x30c1f8);
        },
        'cWLqk': _0x5498bc(0x179),
        'cuHyh': _0x5498bc(0x17a)
    };

    var _0x44707a;

    try {
        _0x44707a = _0x1bbdfd[_0x5498bc(0x17b)](require, _0x1bbdfd.OndeA)[_0x5498bc(0x17c)];
    } catch (_0xc3da7a) {
        if (_0x1bbdfd[_0x5498bc(0x17d)](_0xc3da7a.code, _0x1bbdfd[_0x5498bc(0x17e)])) _0x44707a = _0x1bbdfd[_0x5498bc(0x17f)](require, _0x5498bc(0x180))[_0x5498bc(0x17c)];else throw _0xc3da7a;
    }

    const _0x40df09 = await _0x1bbdfd[_0x5498bc(0x181)](_0x44707a, _0x1bbdfd[_0x5498bc(0x182)], _0x5c439f[_0x5498bc(0x183)]);

    const _0x3905ce = await _0x1bbdfd.tqXxU(getNextJsBaseWebpackConfig, _0x5c439f[_0x5498bc(0x183)], {
        'buildId': '@cypress/react-' + Math[_0x5498bc(0x184)]()[_0x5498bc(0x185)](),
        'config': _0x40df09,
        'dev': true,
        'isServer': false,
        'pagesDir': _0x5c439f.projectRoot,
        'entrypoints': {},
        'rewrites': {
            'fallback': [],
            'afterFiles': [],
            'beforeFiles': []
        }
    });

    return _0x1bbdfd[_0x5498bc(0x181)](debug, _0x1bbdfd[_0x5498bc(0x186)], _0x3905ce), _0x3905ce;
}
var webpackConfigCache = null;

module[_0x395698(0x187)] = async function findNextWebpackConfig(_0x2db638) {
    const _0x3c43ef = _0x395698;
    const _0x57fa0f = {
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

    if (_0x57fa0f.Aowgr(webpackConfigCache, null)) return webpackConfigCache;
    return webpackConfigCache = await _0x57fa0f.ZKsBF(getNextWebpackConfig, _0x2db638), _0x57fa0f[_0x3c43ef(0x188)](debug, 'created and cached webpack preprocessor based on next.config.js', webpackConfigCache), webpackConfigCache;
};
