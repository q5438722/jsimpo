import _0x1034d3 from 'postcss';
import _0x56747e from 'path';
import _0x3db429 from '../../src/index.js';
function run(_0x3c0550, _0x3f9ae7 = {}) {
    return _0x1034d3(_0x3db429(_0x3f9ae7))['process'](_0x3c0550, { 'from': _0x56747e['resolve'](__filename) });
}
test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height', () => {
    const _0x5258ee = {
        'theme': {
            'fontSize': {
                'sm': '12px',
                'md': [
                    '16px',
                    '24px'
                ],
                'lg': [
                    '20px',
                    '28px'
                ]
            }
        },
        'corePlugins': ['fontSize'],
        'variants': { 'fontSize': [] }
    };
    return run('@tailwind\x20utilities', _0x5258ee)['then'](_0x21aa3b => {
        expect(_0x21aa3b['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px\x20}\x0a\x20\x20\x20\x20');
    });
}), test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20letter-spacing', () => {
    const _0x16c1bf = {
        'theme': {
            'fontSize': {
                'sm': '12px',
                'md': [
                    '16px',
                    { 'letterSpacing': '-0.01em' }
                ],
                'lg': [
                    '20px',
                    { 'letterSpacing': '-0.02em' }
                ]
            }
        },
        'corePlugins': ['fontSize'],
        'variants': { 'fontSize': [] }
    };
    return run('@tailwind\x20utilities', _0x16c1bf)['then'](_0x448cda => {
        expect(_0x448cda['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20');
    });
}), test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height\x20and\x20letter-spacing', () => {
    const _0x5d473e = {
        'theme': {
            'fontSize': {
                'sm': '12px',
                'md': [
                    '16px',
                    {
                        'lineHeight': '24px',
                        'letterSpacing': '-0.01em'
                    }
                ],
                'lg': [
                    '20px',
                    {
                        'lineHeight': '28px',
                        'letterSpacing': '-0.02em'
                    }
                ]
            }
        },
        'corePlugins': ['fontSize'],
        'variants': { 'fontSize': [] }
    };
    return run('@tailwind\x20utilities', _0x5d473e)['then'](_0x149ab8 => {
        expect(_0x149ab8['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20');
    });
});
