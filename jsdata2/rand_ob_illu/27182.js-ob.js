const _0x2949 = ['1668851BiGUAi', '1nXlwLr', '1328KPIsXZ', '3517zOfMFm', '\ndeclare module \'@material-ui/styles/defaultTheme\' {\n  // eslint-disable-next-line @typescript-eslint/no-empty-interface\n  interface DefaultTheme extends Theme {}\n}\n', 'Theme', 'single', '.tsx', 'jscodeshift', 'source', 'printOptions', 'endsWith', 'UNlNe', 'find', 'ImportSpecifier', 'Brjbc', 'imported', 'name', 'WDsGu', 'Qkwij', 'HQxTo', 'nmae', 'ABYaz', 'filter', 'ThemeProvider', 'MuiThemeProvider', 'forEach', 'insertAfter', 'ImportDeclaration', '15913oTNvnZ', '100BqmwJY', '19191BhmMHe', '18XBgYTm', '1496702DdzCuJ', '1axLRXK', '40239IuCkZF', '16cUoFZA', '8950shAxpo'];

function _0x16f0(_0xa6245e, _0x5e9e08) {
    return _0x16f0 = function (_0x30d61b, _0x5f2123) {
        _0x30d61b = _0x30d61b - 153;
        const _0x47bcc6 = _0x2949[_0x30d61b];

        return _0x47bcc6;
    }, _0x16f0(_0xa6245e, _0x5e9e08);
}
const _0xae3c43 = _0x16f0;

(function (_0x51b9e7, _0x5cd942) {
    const _0x3dc449 = _0x16f0;

    while (true) {
        try {
            const _0x5cceaa = parseInt(_0x3dc449(0x99)) * -parseInt(_0x3dc449(0x9a)) + parseInt(_0x3dc449(0x9b)) * parseInt(_0x3dc449(0x9c)) + parseInt(_0x3dc449(0x9d)) * -parseInt(_0x3dc449(0x9e)) + parseInt(_0x3dc449(0x9f)) * parseInt(_0x3dc449(0xa0)) + parseInt(_0x3dc449(0xa1)) + parseInt(_0x3dc449(0xa2)) * -parseInt(_0x3dc449(0xa3)) + -parseInt(_0x3dc449(0xa4)) * -parseInt(_0x3dc449(0xa5));

            if (_0x5cceaa === _0x5cd942) break;else _0x51b9e7.push(_0x51b9e7.shift());
        } catch (_0x2a9f09) {
            _0x51b9e7.push(_0x51b9e7.shift());
        }
    }
})(_0x2949, 911935);

const template = _0xae3c43(0xa6);

export default function transformer(_0x256e10, _0x27552b, _0x23903c) {
    const _0x11e96f = _0xae3c43;
    const _0x5486c3 = {
        'Brjbc': function (_0x515848, _0x17eed1) {
            return _0x515848 === _0x17eed1;
        },
        'WDsGu': _0x11e96f(0xa7),
        'Qkwij': function (_0x38ecad, _0x2dae87) {
            return _0x38ecad === _0x2dae87;
        },
        'HQxTo': 'ThemeProvider',
        'ABYaz': 'MuiThemeProvider',
        'hnFdV': _0x11e96f(0xa8),
        'UNlNe': _0x11e96f(0xa9)
    };

    const _0xf7a92b = _0x27552b[_0x11e96f(0xaa)];

    const _0x541e14 = _0xf7a92b(_0x256e10[_0x11e96f(0xab)]);

    const _0x3a9517 = _0x23903c[_0x11e96f(0xac)] || { 'quote': _0x5486c3.hnFdV };

    if (_0x256e10.path[_0x11e96f(0xad)](_0x5486c3[_0x11e96f(0xae)])) {
        var _0x559cba = false;
        var _0x8eb30a = false;

        return _0x541e14[_0x11e96f(0xaf)](_0xf7a92b[_0x11e96f(0xb0)]).forEach(({ node: _0x51b20b }) => {
            const _0x1fa556 = _0x11e96f;

            _0x5486c3[_0x1fa556(0xb1)](_0x51b20b[_0x1fa556(0xb2)][_0x1fa556(0xb3)], _0x5486c3[_0x1fa556(0xb4)]) && (_0x559cba = true), (_0x5486c3[_0x1fa556(0xb5)](_0x51b20b.imported[_0x1fa556(0xb3)], _0x5486c3[_0x1fa556(0xb6)]) || _0x51b20b.imported[_0x1fa556(0xb7)] === _0x5486c3[_0x1fa556(0xb8)]) && (_0x8eb30a = true);
        }), false && _0x541e14[_0x11e96f(0xaf)](_0xf7a92b[_0x11e96f(0xb0)])[_0x11e96f(0xb9)](({ node: _0x349ac6 }) => _0x349ac6[_0x11e96f(0xb2)][_0x11e96f(0xb3)] === _0x11e96f(0xba) || _0x349ac6[_0x11e96f(0xb2)].name === _0x11e96f(0xbb)).at(0)[_0x11e96f(0xbc)](_0x5965aa => {
            const _0x5952f4 = _0x11e96f;

            _0x5965aa[_0x5952f4(0xbd)](_0xf7a92b.importSpecifier(_0xf7a92b.identifier('Theme')));
        }), !_0x256e10[_0x11e96f(0xab)].match(/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm) && _0x541e14[_0x11e96f(0xaf)](_0xf7a92b[_0x11e96f(0xbe)]).at(-1).forEach(_0x471f24 => {
            _0x8eb30a && _0x471f24.insertAfter(template);
        }), _0x541e14.toSource(_0x3a9517);
    }
    return _0x256e10[_0x11e96f(0xab)];
}