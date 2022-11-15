const _0x1c93 = [
    '24px',
    '28px',
    'fontSize',
    '@tailwind\x20utilities',
    'then',
    'css',
    'toMatchCss',
    '\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px\x20}\x0a\x20\x20\x20\x20',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20letter-spacing',
    '-0.01em',
    '20px',
    '\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height\x20and\x20letter-spacing',
    '-0.02em',
    '\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20',
    '261402cIxUze',
    '734586tChBSn',
    '31873RxShcv',
    '19fniOIT',
    '894442IkZpEu',
    '116874XjeYeA',
    '3sURIEX',
    '165815DqmQTO',
    '735641cGGCsF',
    'font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height',
    '12px',
    '16px'
];
const _0x21643a = _0x4bf5;
(function (_0x11ad92, _0x13f8f7) {
    const _0x519244 = _0x4bf5;
    while (!![]) {
        try {
            const _0x2b80c5 = parseInt(_0x519244(0x97)) + -parseInt(_0x519244(0x98)) + parseInt(_0x519244(0x99)) * parseInt(_0x519244(0x9a)) + parseInt(_0x519244(0x9b)) + -parseInt(_0x519244(0x9c)) * -parseInt(_0x519244(0x9d)) + -parseInt(_0x519244(0x9e)) + -parseInt(_0x519244(0x9f));
            if (_0x2b80c5 === _0x13f8f7)
                break;
            else
                _0x11ad92['push'](_0x11ad92['shift']());
        } catch (_0x58fc0c) {
            _0x11ad92['push'](_0x11ad92['shift']());
        }
    }
}(_0x1c93, 0x7436b));
import _0x92c0d7 from 'postcss';
function _0x4bf5(_0x44ff2b, _0x2584a1) {
    return _0x4bf5 = function (_0x1c937c, _0x4bf5a0) {
        _0x1c937c = _0x1c937c - 0x97;
        let _0x5bd274 = _0x1c93[_0x1c937c];
        return _0x5bd274;
    }, _0x4bf5(_0x44ff2b, _0x2584a1);
}
import _0x142330 from 'path';
import _0x36f0e3 from '../../src/index.js';
function run(_0x39f225, _0x38ad4b = {}) {
    return _0x92c0d7(_0x36f0e3(_0x38ad4b))['process'](_0x39f225, { 'from': _0x142330['resolve'](__filename) });
}
test(_0x21643a(0xa0), () => {
    const _0x2697de = _0x21643a, _0x10d35d = {
            'theme': {
                'fontSize': {
                    'sm': _0x2697de(0xa1),
                    'md': [
                        _0x2697de(0xa2),
                        _0x2697de(0xa3)
                    ],
                    'lg': [
                        '20px',
                        _0x2697de(0xa4)
                    ]
                }
            },
            'corePlugins': [_0x2697de(0xa5)],
            'variants': { 'fontSize': [] }
        };
    return run(_0x2697de(0xa6), _0x10d35d)[_0x2697de(0xa7)](_0x1270e1 => {
        const _0xf232a4 = _0x2697de;
        expect(_0x1270e1[_0xf232a4(0xa8)])[_0xf232a4(0xa9)](_0xf232a4(0xaa));
    });
}), test(_0x21643a(0xab), () => {
    const _0x30dfec = _0x21643a, _0x1a22ce = {
            'theme': {
                'fontSize': {
                    'sm': '12px',
                    'md': [
                        _0x30dfec(0xa2),
                        { 'letterSpacing': _0x30dfec(0xac) }
                    ],
                    'lg': [
                        _0x30dfec(0xad),
                        { 'letterSpacing': '-0.02em' }
                    ]
                }
            },
            'corePlugins': [_0x30dfec(0xa5)],
            'variants': { 'fontSize': [] }
        };
    return run(_0x30dfec(0xa6), _0x1a22ce)[_0x30dfec(0xa7)](_0x14daf2 => {
        const _0x50124e = _0x30dfec;
        expect(_0x14daf2['css'])[_0x50124e(0xa9)](_0x50124e(0xae));
    });
}), test(_0x21643a(0xaf), () => {
    const _0x5e5af5 = _0x21643a, _0x34b46e = {
            'theme': {
                'fontSize': {
                    'sm': _0x5e5af5(0xa1),
                    'md': [
                        '16px',
                        {
                            'lineHeight': _0x5e5af5(0xa3),
                            'letterSpacing': _0x5e5af5(0xac)
                        }
                    ],
                    'lg': [
                        _0x5e5af5(0xad),
                        {
                            'lineHeight': _0x5e5af5(0xa4),
                            'letterSpacing': _0x5e5af5(0xb0)
                        }
                    ]
                }
            },
            'corePlugins': [_0x5e5af5(0xa5)],
            'variants': { 'fontSize': [] }
        };
    return run('@tailwind\x20utilities', _0x34b46e)[_0x5e5af5(0xa7)](_0x513b06 => {
        const _0x1f12cd = _0x5e5af5;
        expect(_0x513b06['css'])['toMatchCss'](_0x1f12cd(0xb1));
    });
});
