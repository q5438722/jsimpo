const _0xf73e = [
    '24px',
    '20px',
    '28px',
    'fontSize',
    '@tailwind\x20utilities',
    'then',
    'css',
    'toMatchCss',
    '\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px\x20}\x0a\x20\x20\x20\x20',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20letter-spacing',
    '-0.01em',
    '-0.02em',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height\x20and\x20letter-spacing',
    '\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20',
    '2BPcUnF',
    '263008HZygOm',
    '573487ekSyqa',
    '495596QvAUCD',
    '202987IixdPX',
    '1onOvSC',
    '412605DpMCgP',
    '163vFhImY',
    '2415QBHaJB',
    '5647jfZqIw',
    '5weZLHO',
    'process',
    'resolve',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height',
    '12px',
    '16px'
];
const _0x104713 = _0x3e35;
(function (_0xc661b8, _0x54436f) {
    const _0xa79e3d = _0x3e35;
    while (!![]) {
        try {
            const _0x109e7c = -parseInt(_0xa79e3d(0xb0)) * -parseInt(_0xa79e3d(0xb1)) + -parseInt(_0xa79e3d(0xb2)) + parseInt(_0xa79e3d(0xb3)) + -parseInt(_0xa79e3d(0xb4)) * parseInt(_0xa79e3d(0xb5)) + parseInt(_0xa79e3d(0xb6)) + parseInt(_0xa79e3d(0xb7)) * -parseInt(_0xa79e3d(0xb8)) + -parseInt(_0xa79e3d(0xb9)) * -parseInt(_0xa79e3d(0xba));
            if (_0x109e7c === _0x54436f)
                break;
            else
                _0xc661b8['push'](_0xc661b8['shift']());
        } catch (_0x10e831) {
            _0xc661b8['push'](_0xc661b8['shift']());
        }
    }
}(_0xf73e, 0x475ed));
import _0x17a378 from 'postcss';
import _0x6bf3f6 from 'path';
function _0x3e35(_0x17ad13, _0x576ef3) {
    return _0x3e35 = function (_0xf73e8f, _0x3e3590) {
        _0xf73e8f = _0xf73e8f - 0xb0;
        let _0x48c958 = _0xf73e[_0xf73e8f];
        return _0x48c958;
    }, _0x3e35(_0x17ad13, _0x576ef3);
}
import _0x36974b from '../../src/index.js';
function run(_0x35de0f, _0x41b87e = {}) {
    const _0x5896ce = _0x3e35;
    return _0x17a378(_0x36974b(_0x41b87e))[_0x5896ce(0xbb)](_0x35de0f, { 'from': _0x6bf3f6[_0x5896ce(0xbc)](__filename) });
}
test(_0x104713(0xbd), () => {
    const _0x139c7d = _0x104713, _0x27ef4b = {
            'theme': {
                'fontSize': {
                    'sm': _0x139c7d(0xbe),
                    'md': [
                        _0x139c7d(0xbf),
                        _0x139c7d(0xc0)
                    ],
                    'lg': [
                        _0x139c7d(0xc1),
                        _0x139c7d(0xc2)
                    ]
                }
            },
            'corePlugins': [_0x139c7d(0xc3)],
            'variants': { 'fontSize': [] }
        };
    return run(_0x139c7d(0xc4), _0x27ef4b)[_0x139c7d(0xc5)](_0x174d43 => {
        const _0x5c80f9 = _0x139c7d;
        expect(_0x174d43[_0x5c80f9(0xc6)])[_0x5c80f9(0xc7)](_0x5c80f9(0xc8));
    });
}), test(_0x104713(0xc9), () => {
    const _0x51c0b1 = _0x104713, _0x37a3c6 = {
            'theme': {
                'fontSize': {
                    'sm': _0x51c0b1(0xbe),
                    'md': [
                        _0x51c0b1(0xbf),
                        { 'letterSpacing': _0x51c0b1(0xca) }
                    ],
                    'lg': [
                        _0x51c0b1(0xc1),
                        { 'letterSpacing': _0x51c0b1(0xcb) }
                    ]
                }
            },
            'corePlugins': [_0x51c0b1(0xc3)],
            'variants': { 'fontSize': [] }
        };
    return run(_0x51c0b1(0xc4), _0x37a3c6)['then'](_0x903eb5 => {
        const _0x4230ad = _0x51c0b1;
        expect(_0x903eb5[_0x4230ad(0xc6)])[_0x4230ad(0xc7)]('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20');
    });
}), test(_0x104713(0xcc), () => {
    const _0x55881a = _0x104713, _0x1a6845 = {
            'theme': {
                'fontSize': {
                    'sm': _0x55881a(0xbe),
                    'md': [
                        _0x55881a(0xbf),
                        {
                            'lineHeight': _0x55881a(0xc0),
                            'letterSpacing': _0x55881a(0xca)
                        }
                    ],
                    'lg': [
                        _0x55881a(0xc1),
                        {
                            'lineHeight': '28px',
                            'letterSpacing': _0x55881a(0xcb)
                        }
                    ]
                }
            },
            'corePlugins': ['fontSize'],
            'variants': { 'fontSize': [] }
        };
    return run(_0x55881a(0xc4), _0x1a6845)['then'](_0x4b5b73 => {
        const _0x483340 = _0x55881a;
        expect(_0x4b5b73[_0x483340(0xc6)])['toMatchCss'](_0x483340(0xcd));
    });
});
