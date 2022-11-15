const _0x3253 = ['79qerKzg', '5646VdSOxv', 'debug', '@cypress/react', '../utils/tryLoadWebpackConfig', '../utils/eslint-helpers', '../utils/babel-helpers', 'exports', 'react-scripts/config/webpack.config', 'false', '\u26A0\uFE0F Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.', 'env', 'zVulL', 'CKAWH', 'PDBIy', 'msDXE', '119929CgZiez', '3DEPpyc', '82926JlRkuY', '368182bKCljQ', '225092vIsoFe', '2NlXPha', '40577kddVcc', '395363vzxPts', '1UWurRb'];
const _0x351571 = _0x3a40;

(function (_0x1bbabd, _0x139397) {
    const _0x27d99a = _0x3a40;

    while (true) {
        try {
            const _0x223203 = parseInt(_0x27d99a(0x14d)) * parseInt(_0x27d99a(0x14e)) + -parseInt(_0x27d99a(0x14f)) + -parseInt(_0x27d99a(0x150)) + parseInt(_0x27d99a(0x151)) + parseInt(_0x27d99a(0x152)) * parseInt(_0x27d99a(0x153)) + parseInt(_0x27d99a(0x154)) * -parseInt(_0x27d99a(0x155)) + parseInt(_0x27d99a(0x156)) * parseInt(_0x27d99a(0x157));

            if (_0x223203 === _0x139397) break;else _0x1bbabd.push(_0x1bbabd.shift());
        } catch (_0x1d675d) {
            _0x1bbabd.push(_0x1bbabd.shift());
        }
    }
})(_0x3253, 265596);
function _0x3a40(_0x3f8ea9, _0x36003f) {
    return _0x3a40 = function (_0x1e1c02, _0x35d1e9) {
        _0x1e1c02 = _0x1e1c02 - 333;
        const _0x35eb3d = _0x3253[_0x1e1c02];

        return _0x35eb3d;
    }, _0x3a40(_0x3f8ea9, _0x36003f);
}

const debug = require(_0x351571(0x158))(_0x351571(0x159));

const tryLoadWebpackConfig = require(_0x351571(0x15a));

var { allowModuleSourceInPlace } = require('../utils/webpack-helpers');

var { addCypressToWebpackEslintRulesInPlace } = require(_0x351571(0x15b));

var { getTranspileFolders } = require('../utils/get-transpile-folders');

var { addFolderToBabelLoaderTranspileInPlace } = require(_0x351571(0x15c));

module[_0x351571(0x15d)] = function findReactScriptsWebpackConfig(_0x1f29d9, { webpackConfigPath: _0x48d230 } = { 'webpackConfigPath': _0x351571(0x15e) }) {
    const _0x3f5d59 = _0x351571;
    const _0xe3f6fd = {
        'PDBIy': function (_0x39c827, _0x2fb3bf, _0x3db922) {
            return _0x39c827(_0x2fb3bf, _0x3db922);
        },
        'msDXE': function (_0x266179, _0x533ccb, _0x158fdc) {
            return _0x266179(_0x533ccb, _0x158fdc);
        },
        'zVulL': _0x3f5d59(0x15f),
        'yAzCS': _0x3f5d59(0x160),
        'CKAWH': function (_0x4d755f, _0x48b384) {
            return _0x4d755f(_0x48b384);
        }
    };

    process[_0x3f5d59(0x161)]['FAST_REFRESH'] = _0xe3f6fd[_0x3f5d59(0x162)];

    const _0x5b3372 = tryLoadWebpackConfig(_0x48d230);

    if (!_0x5b3372) throw new Error(_0xe3f6fd.yAzCS);
    return _0xe3f6fd[_0x3f5d59(0x163)](addCypressToWebpackEslintRulesInPlace, _0x5b3372), _0xe3f6fd[_0x3f5d59(0x163)](getTranspileFolders, _0x1f29d9).forEach(_0x5d1ef2 => {
        const _0x2bf972 = _0x3f5d59;

        _0xe3f6fd[_0x2bf972(0x164)](allowModuleSourceInPlace, _0x5d1ef2, _0x5b3372), _0xe3f6fd[_0x2bf972(0x165)](addFolderToBabelLoaderTranspileInPlace, _0x5d1ef2, _0x5b3372);
    }), debug('resolved webpack config: %o', _0x5b3372), _0x5b3372;
};
