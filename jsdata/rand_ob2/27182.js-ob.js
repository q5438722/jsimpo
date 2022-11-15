const _0x8e4e = [
    '447JqUuQl',
    '2087HuhFTb',
    '2700148PojZUP',
    '\x0adeclare\x20module\x20\x27@material-ui/styles/defaultTheme\x27\x20{\x0a\x20\x20//\x20eslint-disable-next-line\x20@typescript-eslint/no-empty-interface\x0a\x20\x20interface\x20DefaultTheme\x20extends\x20Theme\x20{}\x0a}\x0a',
    'jscodeshift',
    'source',
    'printOptions',
    'path',
    'endsWith',
    '.tsx',
    'find',
    'ImportSpecifier',
    'imported',
    'name',
    'ThemeProvider',
    'MuiThemeProvider',
    'filter',
    'insertAfter',
    'identifier',
    'Theme',
    'match',
    'ImportDeclaration',
    'forEach',
    'toSource',
    '101960NSZGFp',
    '9MzWiUD',
    '294814WpjKWW',
    '262785VxBmbn',
    '8dhEivP',
    '3386sWrqlF',
    '3105UqlfhL',
    '598iqNqrj'
];
const _0x3d8db0 = _0x24b4;
(function (_0x4030df, _0x3f25ea) {
    const _0x42884f = _0x24b4;
    while (!![]) {
        try {
            const _0x2e8580 = parseInt(_0x42884f(0x1c6)) * parseInt(_0x42884f(0x1c7)) + -parseInt(_0x42884f(0x1c8)) + parseInt(_0x42884f(0x1c9)) + parseInt(_0x42884f(0x1ca)) * -parseInt(_0x42884f(0x1cb)) + -parseInt(_0x42884f(0x1cc)) * -parseInt(_0x42884f(0x1cd)) + parseInt(_0x42884f(0x1ce)) * parseInt(_0x42884f(0x1cf)) + -parseInt(_0x42884f(0x1d0));
            if (_0x2e8580 === _0x3f25ea)
                break;
            else
                _0x4030df['push'](_0x4030df['shift']());
        } catch (_0x3ef48e) {
            _0x4030df['push'](_0x4030df['shift']());
        }
    }
}(_0x8e4e, 0xe7756));
function _0x24b4(_0xa747c9, _0x185eed) {
    return _0x24b4 = function (_0x8e4ea3, _0x24b421) {
        _0x8e4ea3 = _0x8e4ea3 - 0x1c6;
        let _0x194082 = _0x8e4e[_0x8e4ea3];
        return _0x194082;
    }, _0x24b4(_0xa747c9, _0x185eed);
}
const template = _0x3d8db0(0x1d1);
export default function transformer(_0x171e1b, _0x867408, _0x8891e1) {
    const _0x37455 = _0x3d8db0, _0x3c9508 = _0x867408[_0x37455(0x1d2)], _0x14073f = _0x3c9508(_0x171e1b[_0x37455(0x1d3)]), _0x57ecb8 = _0x8891e1[_0x37455(0x1d4)] || { 'quote': 'single' };
    if (_0x171e1b[_0x37455(0x1d5)][_0x37455(0x1d6)](_0x37455(0x1d7))) {
        let _0xc176ac = ![], _0x3d6902 = ![];
        return _0x14073f[_0x37455(0x1d8)](_0x3c9508[_0x37455(0x1d9)])['forEach'](({node: _0x4ce24b}) => {
            const _0x1eb916 = _0x37455;
            _0x4ce24b[_0x1eb916(0x1da)][_0x1eb916(0x1db)] === 'Theme' && (_0xc176ac = !![]), (_0x4ce24b['imported'][_0x1eb916(0x1db)] === _0x1eb916(0x1dc) || _0x4ce24b['imported']['nmae'] === _0x1eb916(0x1dd)) && (_0x3d6902 = !![]);
        }), !_0xc176ac && _0x14073f['find'](_0x3c9508['ImportSpecifier'])[_0x37455(0x1de)](({node: _0x3fcdba}) => _0x3fcdba[_0x37455(0x1da)][_0x37455(0x1db)] === _0x37455(0x1dc) || _0x3fcdba['imported'][_0x37455(0x1db)] === _0x37455(0x1dd))['at'](0x0)['forEach'](_0x25fce3 => {
            const _0x1a477b = _0x37455;
            _0x25fce3[_0x1a477b(0x1df)](_0x3c9508['importSpecifier'](_0x3c9508[_0x1a477b(0x1e0)](_0x1a477b(0x1e1))));
        }), !_0x171e1b[_0x37455(0x1d3)][_0x37455(0x1e2)](/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm) && _0x14073f['find'](_0x3c9508[_0x37455(0x1e3)])['at'](-0x1)[_0x37455(0x1e4)](_0x4679c6 => {
            const _0x1f176c = _0x37455;
            _0x3d6902 && _0x4679c6[_0x1f176c(0x1df)](template);
        }), _0x14073f[_0x37455(0x1e5)](_0x57ecb8);
    }
    return _0x171e1b[_0x37455(0x1d3)];
}
