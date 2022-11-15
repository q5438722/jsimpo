const template = '\x0adeclare\x20module\x20\x27@material-ui/styles/defaultTheme\x27\x20{\x0a\x20\x20//\x20eslint-disable-next-line\x20@typescript-eslint/no-empty-interface\x0a\x20\x20interface\x20DefaultTheme\x20extends\x20Theme\x20{}\x0a}\x0a';
export default function transformer(_0x1baae3, _0x10072c, _0x3f27c8) {
    const _0x469460 = {
            'XKBPM': function (_0xa95c0d, _0x4f8e3d) {
                return _0xa95c0d === _0x4f8e3d;
            },
            'PZOJO': 'Theme',
            'BWsgN': 'ThemeProvider',
            'DrIcq': 'MuiThemeProvider',
            'Mlpbl': function (_0x3f6b25, _0x3a3d89) {
                return _0x3f6b25(_0x3a3d89);
            },
            'eOmhh': 'single',
            'cKNeq': '.tsx'
        }, _0x7332bb = _0x10072c['jscodeshift'], _0xb64b58 = _0x469460['Mlpbl'](_0x7332bb, _0x1baae3['source']), _0x424159 = _0x3f27c8['printOptions'] || { 'quote': _0x469460['eOmhh'] };
    if (_0x1baae3['path']['endsWith'](_0x469460['cKNeq'])) {
        let _0x461a88 = ![], _0x36a531 = ![];
        return _0xb64b58['find'](_0x7332bb['ImportSpecifier'])['forEach'](({node: _0x5dd4b5}) => {
            _0x469460['XKBPM'](_0x5dd4b5['imported']['name'], _0x469460['PZOJO']) && (_0x461a88 = !![]), (_0x469460['XKBPM'](_0x5dd4b5['imported']['name'], _0x469460['BWsgN']) || _0x469460['XKBPM'](_0x5dd4b5['imported']['nmae'], _0x469460['DrIcq'])) && (_0x36a531 = !![]);
        }), !_0x461a88 && _0xb64b58['find'](_0x7332bb['ImportSpecifier'])['filter'](({node: _0x5107d1}) => _0x5107d1['imported']['name'] === 'ThemeProvider' || _0x5107d1['imported']['name'] === 'MuiThemeProvider')['at'](0x0)['forEach'](_0x1eeddf => {
            _0x1eeddf['insertAfter'](_0x7332bb['importSpecifier'](_0x7332bb['identifier'](_0x469460['PZOJO'])));
        }), !_0x1baae3['source']['match'](/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm) && _0xb64b58['find'](_0x7332bb['ImportDeclaration'])['at'](-0x1)['forEach'](_0xf7fc28 => {
            _0x36a531 && _0xf7fc28['insertAfter'](template);
        }), _0xb64b58['toSource'](_0x424159);
    }
    return _0x1baae3['source'];
}
