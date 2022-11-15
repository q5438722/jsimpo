const template = '\x0adeclare\x20module\x20\x27@material-ui/styles/defaultTheme\x27\x20{\x0a\x20\x20//\x20eslint-disable-next-line\x20@typescript-eslint/no-empty-interface\x0a\x20\x20interface\x20DefaultTheme\x20extends\x20Theme\x20{}\x0a}\x0a';
export default function transformer(_0x3c3100, _0x4be830, _0x16709c) {
    const _0x5cda43 = _0x4be830['jscodeshift'], _0x57090a = _0x5cda43(_0x3c3100['source']), _0x457baa = _0x16709c['printOptions'] || { 'quote': 'single' };
    if (_0x3c3100['path']['endsWith']('.tsx')) {
        let _0x134ea7 = ![], _0x1b86fc = ![];
        return _0x57090a['find'](_0x5cda43['ImportSpecifier'])['forEach'](({node: _0x3282a9}) => {
            _0x3282a9['imported']['name'] === 'Theme' && (_0x134ea7 = !![]), (_0x3282a9['imported']['name'] === 'ThemeProvider' || _0x3282a9['imported']['nmae'] === 'MuiThemeProvider') && (_0x1b86fc = !![]);
        }), !_0x134ea7 && _0x57090a['find'](_0x5cda43['ImportSpecifier'])['filter'](({node: _0x3cbb85}) => _0x3cbb85['imported']['name'] === 'ThemeProvider' || _0x3cbb85['imported']['name'] === 'MuiThemeProvider')['at'](0x869 * -0x1 + 0x34c + 0x51d * 0x1)['forEach'](_0xadb7d4 => {
            _0xadb7d4['insertAfter'](_0x5cda43['importSpecifier'](_0x5cda43['identifier']('Theme')));
        }), !_0x3c3100['source']['match'](/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm) && _0x57090a['find'](_0x5cda43['ImportDeclaration'])['at'](-(0x1aea + 0xd1 * 0x2b + -0x4 * 0xf81))['forEach'](_0x128ab8 => {
            _0x1b86fc && _0x128ab8['insertAfter'](template);
        }), _0x57090a['toSource'](_0x457baa);
    }
    return _0x3c3100['source'];
}
