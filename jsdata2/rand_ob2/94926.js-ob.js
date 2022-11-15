const _0x3b89 = [
    '21975rvJRqb',
    '15cOaRLO',
    '141210BfuwCL',
    '29201HNqmCj',
    '33BSgSIy',
    '59337lfWllT',
    '142310jsYnHQ',
    '1227150fkmytY',
    'debug',
    '@cypress/react',
    'default',
    'code',
    'MODULE_NOT_FOUND',
    'next/dist/server/config',
    'development',
    'projectRoot',
    '@cypress/react-',
    'random',
    'toString',
    'resolved\x20next.js\x20webpack\x20config\x20%o',
    '25849naMOIn',
    '21gTOFMI'
];
const _0x570689 = _0x4063;
(function (_0x33dfc1, _0x508ced) {
    const _0x3aacb6 = _0x4063;
    while (!![]) {
        try {
            const _0x12dcca = -parseInt(_0x3aacb6(0x1d9)) * -parseInt(_0x3aacb6(0x1da)) + parseInt(_0x3aacb6(0x1db)) * parseInt(_0x3aacb6(0x1dc)) + parseInt(_0x3aacb6(0x1dd)) + parseInt(_0x3aacb6(0x1de)) * parseInt(_0x3aacb6(0x1df)) + -parseInt(_0x3aacb6(0x1e0)) + -parseInt(_0x3aacb6(0x1e1)) + -parseInt(_0x3aacb6(0x1e2));
            if (_0x12dcca === _0x508ced)
                break;
            else
                _0x33dfc1['push'](_0x33dfc1['shift']());
        } catch (_0x4545ac) {
            _0x33dfc1['push'](_0x33dfc1['shift']());
        }
    }
}(_0x3b89, 0x85e94));
const debug = require(_0x570689(0x1e3))(_0x570689(0x1e4)), getNextJsBaseWebpackConfig = require('next/dist/build/webpack-config')[_0x570689(0x1e5)];
async function getNextWebpackConfig(_0x28d452) {
    const _0x560e8d = _0x570689;
    let _0x30325;
    try {
        _0x30325 = require('next/dist/next-server/server/config')['default'];
    } catch (_0x24f9c0) {
        if (_0x24f9c0[_0x560e8d(0x1e6)] === _0x560e8d(0x1e7))
            _0x30325 = require(_0x560e8d(0x1e8))[_0x560e8d(0x1e5)];
        else
            throw _0x24f9c0;
    }
    const _0x428730 = await _0x30325(_0x560e8d(0x1e9), _0x28d452['projectRoot']), _0x155269 = await getNextJsBaseWebpackConfig(_0x28d452[_0x560e8d(0x1ea)], {
            'buildId': _0x560e8d(0x1eb) + Math[_0x560e8d(0x1ec)]()[_0x560e8d(0x1ed)](),
            'config': _0x428730,
            'dev': !![],
            'isServer': ![],
            'pagesDir': _0x28d452[_0x560e8d(0x1ea)],
            'entrypoints': {},
            'rewrites': {
                'fallback': [],
                'afterFiles': [],
                'beforeFiles': []
            }
        });
    return debug(_0x560e8d(0x1ee), _0x155269), _0x155269;
}
function _0x4063(_0x4783fa, _0x2a941b) {
    return _0x4063 = function (_0x3b8987, _0x4063d4) {
        _0x3b8987 = _0x3b8987 - 0x1d9;
        let _0x2ee664 = _0x3b89[_0x3b8987];
        return _0x2ee664;
    }, _0x4063(_0x4783fa, _0x2a941b);
}
let webpackConfigCache = null;
module['exports'] = async function findNextWebpackConfig(_0x39d498) {
    if (webpackConfigCache !== null)
        return webpackConfigCache;
    return webpackConfigCache = await getNextWebpackConfig(_0x39d498), debug('created\x20and\x20cached\x20webpack\x20preprocessor\x20based\x20on\x20next.config.js', webpackConfigCache), webpackConfigCache;
};
