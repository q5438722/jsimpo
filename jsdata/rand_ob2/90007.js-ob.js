const _0x7ef1 = [
    '23711USrMBt',
    '5ThxWdV',
    '234383HOcfnS',
    'BlinkMacSystemFont',
    'Segoe\x20UI',
    'Roboto',
    'Oxygen',
    'Cantarell',
    'Fira\x20Sans',
    'Droid\x20Sans',
    'Helvetica\x20Neue',
    'Arial',
    'sans-serif',
    '#000',
    '#26222a',
    'SFMono-Regular',
    'Monaco',
    'Consolas',
    'Liberation\x20Mono',
    'Courier\x20New',
    'monospace',
    '-.0125em',
    'linear-gradient(to\x20top,\x20',
    'bright',
    'gatsby',
    'bold',
    'curveDefault',
    'light',
    'monospaceFontFamily',
    'join',
    'env',
    'NODE_ENV',
    'production',
    '2167bSBnQg',
    '145PAZSPl',
    '225535pwtEkj',
    '3KmWvYU',
    '446535nTJLRB',
    '543887gHKuMh',
    '2JHLqKC',
    '593990gZtJIr',
    '3kjEqgs'
];
const _0x39c664 = _0x2bd6;
(function (_0x232f3f, _0x3d146f) {
    const _0x22fba3 = _0x2bd6;
    while (!![]) {
        try {
            const _0xd7ca01 = parseInt(_0x22fba3(0x15c)) * parseInt(_0x22fba3(0x15d)) + parseInt(_0x22fba3(0x15e)) * -parseInt(_0x22fba3(0x15f)) + -parseInt(_0x22fba3(0x160)) + -parseInt(_0x22fba3(0x161)) * -parseInt(_0x22fba3(0x162)) + -parseInt(_0x22fba3(0x163)) + parseInt(_0x22fba3(0x164)) * parseInt(_0x22fba3(0x165)) + parseInt(_0x22fba3(0x166)) * parseInt(_0x22fba3(0x167));
            if (_0xd7ca01 === _0x3d146f)
                break;
            else
                _0x232f3f['push'](_0x232f3f['shift']());
        } catch (_0x2501b9) {
            _0x232f3f['push'](_0x232f3f['shift']());
        }
    }
}(_0x7ef1, 0xe28a3));
import _0x280121 from 'typography';
import {
    colors,
    animation
} from './presets';
const bodyFontFamily = [
        '-apple-system',
        _0x39c664(0x168),
        _0x39c664(0x169),
        _0x39c664(0x16a),
        _0x39c664(0x16b),
        'Ubuntu',
        _0x39c664(0x16c),
        _0x39c664(0x16d),
        _0x39c664(0x16e),
        _0x39c664(0x16f),
        _0x39c664(0x170),
        _0x39c664(0x171)
    ], _options = {
        'bodyFontFamily': bodyFontFamily,
        'baseLineHeight': 1.5,
        'blockMarginBottom': 0.75,
        'headerColor': _0x39c664(0x172),
        'headerWeight': 0x2bc,
        'boldWeight': 0x2bc,
        'bodyColor': _0x39c664(0x173),
        'scaleRatio': 1.25,
        'accentColor': colors['gatsby'],
        'monospaceFontFamily': [
            _0x39c664(0x174),
            'Menlo',
            _0x39c664(0x175),
            _0x39c664(0x176),
            _0x39c664(0x177),
            _0x39c664(0x178),
            _0x39c664(0x179)
        ],
        'headerFontFamily': bodyFontFamily,
        'overrideStyles': ({rhythm: _0x2cc5e4}, _0xba0295) => {
            const _0x2e453b = _0x39c664;
            return {
                'h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6': {
                    'letterSpacing': _0x2e453b(0x17a),
                    'marginTop': _0x2cc5e4(0x2)
                },
                'a': {
                    'backgroundImage': _0x2e453b(0x17b) + colors['ui'][_0x2e453b(0x17c)] + ',\x20' + colors['ui'][_0x2e453b(0x17c)] + '\x201px,\x20rgba(0,\x200,\x200,\x200)\x202px)',
                    'color': colors[_0x2e453b(0x17d)],
                    'fontWeight': _0x2e453b(0x17e),
                    'textDecoration': 'none',
                    'transition': animation['speedDefault'] + '\x20' + animation[_0x2e453b(0x17f)]
                },
                'a:hover': { 'backgroundColor': colors['ui'][_0x2e453b(0x180)] },
                'code': {
                    'fontSize': '100%',
                    'fontFamily': _0xba0295[_0x2e453b(0x181)][_0x2e453b(0x182)](',')
                }
            };
        }
    }, typography = new _0x280121(_options);
process[_0x39c664(0x183)][_0x39c664(0x184)] !== _0x39c664(0x185) && typography['injectStyles']();
function _0x2bd6(_0x5779ed, _0x12d0ed) {
    return _0x2bd6 = function (_0x7ef123, _0x2bd63e) {
        _0x7ef123 = _0x7ef123 - 0x15c;
        let _0x456e84 = _0x7ef1[_0x7ef123];
        return _0x456e84;
    }, _0x2bd6(_0x5779ed, _0x12d0ed);
}
export const {scale, rhythm, options} = typography;
export default typography;
