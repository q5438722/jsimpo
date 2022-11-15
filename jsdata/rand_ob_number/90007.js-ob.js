import _0xfa3875 from 'typography';
import {
    colors,
    animation
} from './presets';
const bodyFontFamily = [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe\x20UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira\x20Sans',
        'Droid\x20Sans',
        'Helvetica\x20Neue',
        'Arial',
        'sans-serif'
    ], _options = {
        'bodyFontFamily': bodyFontFamily,
        'baseLineHeight': 1.5,
        'blockMarginBottom': 0.75,
        'headerColor': '#000',
        'headerWeight': 0x2bc,
        'boldWeight': 0x2bc,
        'bodyColor': '#26222a',
        'scaleRatio': 1.25,
        'accentColor': colors['gatsby'],
        'monospaceFontFamily': [
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation\x20Mono',
            'Courier\x20New',
            'monospace'
        ],
        'headerFontFamily': bodyFontFamily,
        'overrideStyles': ({rhythm: _0x5e3bfb}, _0x5a14cb) => {
            return {
                'h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6': {
                    'letterSpacing': '-.0125em',
                    'marginTop': _0x5e3bfb(0x1 * 0x2497 + -0x15e6 + -0x3 * 0x4e5)
                },
                'a': {
                    'backgroundImage': 'linear-gradient(to\x20top,\x20' + colors['ui']['bright'] + ',\x20' + colors['ui']['bright'] + '\x201px,\x20rgba(0,\x200,\x200,\x200)\x202px)',
                    'color': colors['gatsby'],
                    'fontWeight': 'bold',
                    'textDecoration': 'none',
                    'transition': animation['speedDefault'] + '\x20' + animation['curveDefault']
                },
                'a:hover': { 'backgroundColor': colors['ui']['light'] },
                'code': {
                    'fontSize': '100%',
                    'fontFamily': _0x5a14cb['monospaceFontFamily']['join'](',')
                }
            };
        }
    }, typography = new _0xfa3875(_options);
process['env']['NODE_ENV'] !== 'production' && typography['injectStyles']();
export const {scale, rhythm, options} = typography;
export default typography;
