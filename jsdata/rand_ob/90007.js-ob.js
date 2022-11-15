const _0x5e19 = [
    'Liberation\x20Mono',
    'Courier\x20New',
    'monospace',
    '-.0125em',
    'lpFKI',
    'linear-gradient(to\x20top,\x20',
    'bright',
    '\x201px,\x20rgba(0,\x200,\x200,\x200)\x202px)',
    'bold',
    'none',
    'speedDefault',
    'light',
    'monospaceFontFamily',
    'join',
    'env',
    'NODE_ENV',
    'production',
    'injectStyles',
    '125843eJAiba',
    '275337nkqyqu',
    '247487xvbXWq',
    '35115fbZxjn',
    '8STuIbM',
    '70014BdnYiN',
    '5211OcdUsZ',
    '39njZQmY',
    '488212lhvMyN',
    '-apple-system',
    'Segoe\x20UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira\x20Sans',
    'Droid\x20Sans',
    'Helvetica\x20Neue',
    'Arial',
    '#000',
    '#26222a',
    'gatsby',
    'SFMono-Regular',
    'Monaco',
    'Consolas'
];
const _0x885aae = _0x22bb;
(function (_0x8f7e23, _0x182e5a) {
    const _0xb642c7 = _0x22bb;
    while (!![]) {
        try {
            const _0x4faf86 = parseInt(_0xb642c7(0x78)) + parseInt(_0xb642c7(0x79)) + parseInt(_0xb642c7(0x7a)) + parseInt(_0xb642c7(0x7b)) * parseInt(_0xb642c7(0x7c)) + parseInt(_0xb642c7(0x7d)) + -parseInt(_0xb642c7(0x7e)) * parseInt(_0xb642c7(0x7f)) + -parseInt(_0xb642c7(0x80));
            if (_0x4faf86 === _0x182e5a)
                break;
            else
                _0x8f7e23['push'](_0x8f7e23['shift']());
        } catch (_0x3b3638) {
            _0x8f7e23['push'](_0x8f7e23['shift']());
        }
    }
}(_0x5e19, -0x25666 + 0x529 * -0x10d + 0xc763b));
import _0x1ddeaa from 'typography';
import {
    colors,
    animation
} from './presets';
const bodyFontFamily = [
        _0x885aae(0x81),
        'BlinkMacSystemFont',
        _0x885aae(0x82),
        _0x885aae(0x83),
        _0x885aae(0x84),
        _0x885aae(0x85),
        _0x885aae(0x86),
        _0x885aae(0x87),
        _0x885aae(0x88),
        _0x885aae(0x89),
        _0x885aae(0x8a),
        'sans-serif'
    ], _options = {
        'bodyFontFamily': bodyFontFamily,
        'baseLineHeight': 1.5,
        'blockMarginBottom': 0.75,
        'headerColor': _0x885aae(0x8b),
        'headerWeight': 0x2bc,
        'boldWeight': 0x2bc,
        'bodyColor': _0x885aae(0x8c),
        'scaleRatio': 1.25,
        'accentColor': colors[_0x885aae(0x8d)],
        'monospaceFontFamily': [
            _0x885aae(0x8e),
            'Menlo',
            _0x885aae(0x8f),
            _0x885aae(0x90),
            _0x885aae(0x91),
            _0x885aae(0x92),
            _0x885aae(0x93)
        ],
        'headerFontFamily': bodyFontFamily,
        'overrideStyles': ({rhythm: _0x209e9d}, _0x51b8f9) => {
            const _0x38f25c = _0x885aae, _0x56f054 = {
                    'lpFKI': function (_0x216db9, _0x365af5) {
                        return _0x216db9(_0x365af5);
                    }
                };
            return {
                'h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6': {
                    'letterSpacing': _0x38f25c(0x94),
                    'marginTop': _0x56f054[_0x38f25c(0x95)](_0x209e9d, 0x59b * -0x3 + -0x26b4 + 0xb1b * 0x5)
                },
                'a': {
                    'backgroundImage': _0x38f25c(0x96) + colors['ui'][_0x38f25c(0x97)] + ',\x20' + colors['ui'][_0x38f25c(0x97)] + _0x38f25c(0x98),
                    'color': colors[_0x38f25c(0x8d)],
                    'fontWeight': _0x38f25c(0x99),
                    'textDecoration': _0x38f25c(0x9a),
                    'transition': animation[_0x38f25c(0x9b)] + '\x20' + animation['curveDefault']
                },
                'a:hover': { 'backgroundColor': colors['ui'][_0x38f25c(0x9c)] },
                'code': {
                    'fontSize': '100%',
                    'fontFamily': _0x51b8f9[_0x38f25c(0x9d)][_0x38f25c(0x9e)](',')
                }
            };
        }
    }, typography = new _0x1ddeaa(_options);
function _0x22bb(_0x2a493e, _0xc63ec0) {
    return _0x22bb = function (_0x541166, _0x33643e) {
        _0x541166 = _0x541166 - (-0x19 * 0x12d + 0x2031 + -0x254);
        let _0x1bf2f8 = _0x5e19[_0x541166];
        return _0x1bf2f8;
    }, _0x22bb(_0x2a493e, _0xc63ec0);
}
process[_0x885aae(0x9f)][_0x885aae(0xa0)] !== _0x885aae(0xa1) && typography[_0x885aae(0xa2)]();
export const {scale, rhythm, options} = typography;
export default typography;
