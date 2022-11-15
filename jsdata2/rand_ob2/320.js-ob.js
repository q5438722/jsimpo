const _0x5a77 = [
    '235667zPnneE',
    '247601pXmHqT',
    '358013pJijtD',
    '334163GxGkJP',
    '63914bxVaKo',
    '107407lRxacU',
    'getState',
    'process',
    'resolve',
    '?test=',
    'join',
    'jit',
    '<div\x20class=\x22scale-x-110\x20rotate-3\x20skew-y-6\x22></div>',
    'transform',
    'scale',
    'rotate',
    'skew',
    'then',
    'css',
    '<div\x20class=\x22hover:scale-x-110\x20focus:rotate-3\x20hover:focus:skew-y-6\x22></div>',
    'toMatchFormattedCss',
    'with\x20pseudo-element\x20variants',
    'with\x20multi-class\x20variants',
    '<div\x20class=\x22group-hover:scale-x-110\x20peer-focus:rotate-3\x22></div>',
    'with\x20multi-class\x20pseudo-element\x20variants',
    'with\x20multi-class\x20pseudo-element\x20and\x20pseudo-class\x20variants',
    'with\x20apply',
    '<div\x20class=\x22foo\x22></div>',
    'with\x20borders',
    'borderColor',
    'borderOpacity',
    '<div\x20class=\x22shadow\x20md:shadow-xl\x20ring-1\x20ring-black/25\x22></div>',
    'ringColor',
    'ringWidth',
    'when\x20no\x20utilities\x20that\x20need\x20the\x20defaults\x20are\x20used',
    '<div\x20class=\x22\x22></div>',
    '<div\x20class=\x22rotate-3\x22></div>',
    'selectors\x20are\x20reduced\x20to\x20the\x20lowest\x20possible\x20specificity',
    '260625DPnIkS',
    '1ccxdLx'
];
const _0x48ae12 = _0x2105;
(function (_0x5b3732, _0x4eba3f) {
    const _0x787bfa = _0x2105;
    while (!![]) {
        try {
            const _0x23c43c = parseInt(_0x787bfa(0x8d)) + parseInt(_0x787bfa(0x8e)) * -parseInt(_0x787bfa(0x8f)) + parseInt(_0x787bfa(0x90)) + -parseInt(_0x787bfa(0x91)) + parseInt(_0x787bfa(0x92)) + parseInt(_0x787bfa(0x93)) + -parseInt(_0x787bfa(0x94));
            if (_0x23c43c === _0x4eba3f)
                break;
            else
                _0x5b3732['push'](_0x5b3732['shift']());
        } catch (_0x1ae25b) {
            _0x5b3732['push'](_0x5b3732['shift']());
        }
    }
}(_0x5a77, 0x321a0));
import _0x1d6001 from 'postcss';
import _0x28eda0 from 'path';
import _0x57589e from '../../src/jit/index.js';
function run(_0x27585f, _0x1bac35 = {}) {
    const _0x33b3c9 = _0x2105, {currentTestName: _0x4728c1} = expect[_0x33b3c9(0x95)]();
    return _0x1d6001(_0x57589e(_0x1bac35))[_0x33b3c9(0x96)](_0x27585f, { 'from': _0x28eda0[_0x33b3c9(0x97)](__filename) + _0x33b3c9(0x98) + _0x4728c1 });
}
function css(_0xe148aa) {
    const _0x479403 = _0x2105;
    return _0xe148aa[_0x479403(0x99)]('');
}
function _0x2105(_0x323532, _0x505799) {
    return _0x2105 = function (_0x5a77ee, _0x21053b) {
        _0x5a77ee = _0x5a77ee - 0x8d;
        let _0x56cdcc = _0x5a77[_0x5a77ee];
        return _0x56cdcc;
    }, _0x2105(_0x323532, _0x505799);
}
test('basic\x20utilities', async () => {
    const _0x134dc1 = _0x2105;
    let _0x559f54 = {
            'mode': _0x134dc1(0x9a),
            'purge': [{ 'raw': _0x134dc1(0x9b) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x134dc1(0x9c),
                _0x134dc1(0x9d),
                _0x134dc1(0x9e),
                _0x134dc1(0x9f)
            ]
        }, _0x315741 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x315741, _0x559f54)[_0x134dc1(0xa0)](_0x2ff9ee => {
        const _0x522c48 = _0x134dc1;
        expect(_0x2ff9ee[_0x522c48(0xa1)])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .skew-y-6 {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
      .scale-x-110 {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
    `);
    });
}), test('with\x20pseudo-class\x20variants', async () => {
    const _0x45e174 = _0x2105;
    let _0x26fe9f = {
            'mode': 'jit',
            'purge': [{ 'raw': _0x45e174(0xa2) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x45e174(0x9c),
                _0x45e174(0x9d),
                'rotate',
                _0x45e174(0x9f)
            ]
        }, _0x1a6cb1 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x1a6cb1, _0x26fe9f)['then'](_0x3d3228 => {
        const _0x2663ef = _0x45e174;
        expect(_0x3d3228[_0x2663ef(0xa1)])[_0x2663ef(0xa3)](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .hover\\:scale-x-110:hover {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .focus\\:rotate-3:focus {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .hover\\:focus\\:skew-y-6:hover:focus {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xa4), async () => {
    const _0x214d7e = _0x48ae12;
    let _0x75d012 = {
            'mode': 'jit',
            'purge': [{ 'raw': '<div\x20class=\x22before:scale-x-110\x20after:rotate-3\x22></div>' }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x214d7e(0x9c),
                _0x214d7e(0x9d),
                _0x214d7e(0x9e),
                'skew'
            ]
        }, _0x5494e9 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x5494e9, _0x75d012)['then'](_0xe957aa => {
        const _0x5a1ece = _0x214d7e;
        expect(_0xe957aa['css'])[_0x5a1ece(0xa3)](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .before\\:scale-x-110::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xa5), async () => {
    const _0x4882b0 = _0x48ae12;
    let _0x117cd7 = {
            'mode': _0x4882b0(0x9a),
            'purge': [{ 'raw': _0x4882b0(0xa6) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x4882b0(0x9c),
                _0x4882b0(0x9d),
                _0x4882b0(0x9e),
                _0x4882b0(0x9f)
            ]
        }, _0x21f4d8 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x21f4d8, _0x117cd7)[_0x4882b0(0xa0)](_0x26942a => {
        const _0x2e9d14 = _0x4882b0;
        expect(_0x26942a[_0x2e9d14(0xa1)])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:scale-x-110 {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xa7), async () => {
    const _0x23176d = _0x48ae12;
    let _0x29b5e7 = {
            'mode': 'jit',
            'purge': [{ 'raw': '<div\x20class=\x22group-hover:before:scale-x-110\x20peer-focus:after:rotate-3\x22></div>' }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x23176d(0x9c),
                _0x23176d(0x9d),
                'rotate',
                _0x23176d(0x9f)
            ]
        }, _0x10a0c9 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x10a0c9, _0x29b5e7)[_0x23176d(0xa0)](_0xa570ef => {
        const _0x585dcd = _0x23176d;
        expect(_0xa570ef[_0x585dcd(0xa1)])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:before\\:scale-x-110::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xa8), async () => {
    const _0x51287d = _0x48ae12;
    let _0x32e817 = {
            'mode': _0x51287d(0x9a),
            'purge': [{ 'raw': '<div\x20class=\x22group-hover:hover:before:scale-x-110\x20peer-focus:focus:after:rotate-3\x22></div>' }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                'transform',
                _0x51287d(0x9d),
                _0x51287d(0x9e),
                _0x51287d(0x9f)
            ]
        }, _0xa42f9c = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0xa42f9c, _0x32e817)[_0x51287d(0xa0)](_0x3bae0f => {
        expect(_0x3bae0f['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:hover\\:before\\:scale-x-110:hover::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:focus\\:after\\:rotate-3:focus::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xa9), async () => {
    const _0x2b71f4 = _0x48ae12;
    let _0x5542d5 = {
            'mode': _0x2b71f4(0x9a),
            'purge': [{ 'raw': _0x2b71f4(0xaa) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x2b71f4(0x9c),
                _0x2b71f4(0x9d),
                'rotate',
                'skew'
            ]
        }, _0x479d0e = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;

    @layer utilities {
      .foo {
        @apply rotate-3;
      }
    }

    .bar {
      @apply before:scale-110;
    }

    .baz::before {
      content: '';
      @apply rotate-45;
    }

    .whats ~ .next > span:hover {
      @apply skew-x-6;
    }

    .media-queries {
      @apply md:rotate-45;
    }

    .a,
    .b,
    .c {
      @apply skew-y-3;
    }

    .a,
    .b {
      @apply rotate-45;
    }

    .a::before,
    .b::after {
      @apply rotate-90;
    }

    .recursive {
      @apply foo;
    }
  `;
    return run(_0x479d0e, _0x5542d5)['then'](_0x32a14d => {
        expect(_0x32a14d['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .foo {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .bar::before {
        content: '';
        --tw-scale-x: 1.1;
        --tw-scale-y: 1.1;
        transform: var(--tw-transform);
      }
      .baz::before {
        content: '';
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .whats ~ .next > span:hover {
        --tw-skew-x: 6deg;
        transform: var(--tw-transform);
      }
      @media (min-width: 768px) {
        .media-queries {
          --tw-rotate: 45deg;
          transform: var(--tw-transform);
        }
      }
      .a,
      .b,
      .c {
        --tw-skew-y: 3deg;
        transform: var(--tw-transform);
      }
      .a,
      .b {
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .a::before,
      .b::after {
        --tw-rotate: 90deg;
        transform: var(--tw-transform);
      }
      .recursive {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xab), async () => {
    const _0xda9b6f = _0x48ae12;
    let _0x410eb9 = {
            'mode': _0xda9b6f(0x9a),
            'purge': [{ 'raw': '<div\x20class=\x22border\x20border-red-500\x20md:border-2\x22></div>' }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                'borderWidth',
                _0xda9b6f(0xac),
                _0xda9b6f(0xad)
            ]
        }, _0x9d3171 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x9d3171, _0x410eb9)[_0xda9b6f(0xa0)](_0xb25964 => {
        const _0x4ada34 = _0xda9b6f;
        expect(_0xb25964['css'])[_0x4ada34(0xa3)](css`
      *,
      ::before,
      ::after {
        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));
      }
      /* --- */
      .border {
        border-width: 1px;
      }
      .border-red-500 {
        --tw-border-opacity: 1;
        border-color: rgba(239, 68, 68, var(--tw-border-opacity));
      }
      @media (min-width: 768px) {
        .md\\:border-2 {
          border-width: 2px;
        }
      }
    `);
    });
}), test('with\x20shadows', async () => {
    const _0x6925c4 = _0x48ae12;
    let _0x4879d4 = {
            'mode': _0x6925c4(0x9a),
            'purge': [{ 'raw': _0x6925c4(0xae) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                'boxShadow',
                _0x6925c4(0xaf),
                _0x6925c4(0xb0)
            ]
        }, _0x19c335 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x19c335, _0x4879d4)[_0x6925c4(0xa0)](_0x4cf848 => {
        const _0x377ace = _0x6925c4;
        expect(_0x4cf848[_0x377ace(0xa1)])[_0x377ace(0xa3)](css`
      *,
      ::before,
      ::after {
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
      }
      /* --- */
      .shadow {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      .ring-1 {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
          var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
          var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
      }
      .ring-black\\/25 {
        --tw-ring-color: rgba(0, 0, 0, 0.25);
      }
      @media (min-width: 768px) {
        .md\\:shadow-xl {
          --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
            var(--tw-shadow);
        }
      }
    `);
    });
}), test(_0x48ae12(0xb1), async () => {
    const _0x33c0be = _0x48ae12;
    let _0x3adecb = {
            'mode': _0x33c0be(0x9a),
            'purge': [{ 'raw': _0x33c0be(0xb2) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [
                _0x33c0be(0x9c),
                'scale',
                _0x33c0be(0x9e),
                'skew'
            ]
        }, _0x2ca689 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x2ca689, _0x3adecb)['then'](_0x2c4290 => {
        const _0x3815b6 = _0x33c0be;
        expect(_0x2c4290[_0x3815b6(0xa1)])['toMatchFormattedCss'](css`
      /* --- */
    `);
    });
}), test('when\x20a\x20utility\x20uses\x20defaults\x20but\x20they\x20do\x20not\x20exist', async () => {
    const _0x4ea547 = _0x48ae12;
    let _0x375c45 = {
            'mode': _0x4ea547(0x9a),
            'purge': [{ 'raw': _0x4ea547(0xb3) }],
            'theme': {},
            'plugins': [],
            'corePlugins': [_0x4ea547(0x9e)]
        }, _0x38c756 = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;
    return run(_0x38c756, _0x375c45)['then'](_0x4de076 => {
        const _0x13a19e = _0x4ea547;
        expect(_0x4de076[_0x13a19e(0xa1)])[_0x13a19e(0xa3)](css`
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);
    });
}), test(_0x48ae12(0xb4), async () => {
    const _0x441918 = _0x48ae12;
    let _0x4f0ef0 = {
            'mode': 'jit',
            'purge': [{ 'raw': _0x441918(0xaa) }],
            'theme': {},
            'plugins': [],
            'corePlugins': []
        }, _0x2d320f = css`
    @defaults test {
      --color: black;
    }

    /* --- */

    .foo {
      @defaults test;
      background-color: var(--color);
    }

    #app {
      @defaults test;
      border-color: var(--color);
    }

    span#page {
      @defaults test;
      color: var(--color);
    }

    div[data-foo='bar']#other {
      @defaults test;
      fill: var(--color);
    }

    div[data-bar='baz'] {
      @defaults test;
      stroke: var(--color);
    }

    article {
      @defaults test;
      --article: var(--color);
    }

    div[data-foo='bar']#another::before {
      @defaults test;
      fill: var(--color);
    }
  `;
    return run(_0x2d320f, _0x4f0ef0)[_0x441918(0xa0)](_0x2306e5 => {
        const _0x24b239 = _0x441918;
        expect(_0x2306e5[_0x24b239(0xa1)])[_0x24b239(0xa3)](css`
      *,
      ::before,
      ::after {
        --color: black;
      }

      /* --- */

      .foo {
        background-color: var(--color);
      }

      #app {
        border-color: var(--color);
      }

      span#page {
        color: var(--color);
      }

      div[data-foo='bar']#other {
        fill: var(--color);
      }

      div[data-bar='baz'] {
        stroke: var(--color);
      }

      article {
        --article: var(--color);
      }

      div[data-foo='bar']#another::before {
        fill: var(--color);
      }
    `);
    });
});
