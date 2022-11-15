const _0x4f41 = [
    '192038lSMPHC',
    '374341aPTnRH',
    '1xgnMhN',
    '96964aLwbwD',
    '1FDfDRi',
    '2UcyUBQ',
    '1124869gkSkdt',
    'image-fluid',
    'Production\x20gatsby-image',
    'visit',
    'waitForRouteChange',
    'exists',
    'getTestElement',
    '.gatsby-image-wrapper',
    'its',
    'should',
    'contains\x20position\x20relative',
    'have.attr',
    'style',
    'and',
    'contains',
    'fallback\x20image',
    'renders\x20base-64\x20src',
    'find',
    '.gatsby-image-wrapper\x20>\x20img',
    'src',
    'base64',
    'renders\x20with\x20style',
    'swaps\x20opacity\x20to\x200',
    'opacity:\x200',
    'renders\x20a\x20picture\x20tag',
    'length',
    'renders\x20a\x20picture\x20>\x20source',
    'picture\x20>\x20source',
    'srcset',
    'renders\x20fallback\x20img',
    'split',
    'map',
    'trim',
    'members',
    'position:\x20absolute',
    'left:\x200px',
    'width:\x20100%',
    'height:\x20100%',
    'object-fit:\x20cover',
    'noscript',
    'renders\x20string\x20content\x20with\x20picture\x20tag',
    '9KdYaWu',
    '111881RsNYhE',
    '4817gcrrgv',
    '169CWjXuZ',
    '1ipJvZj',
    '466820yvXvNx'
];
const _0x5cd7c9 = _0x58b3;
(function (_0x1f78ad, _0x208a2a) {
    const _0x145bdf = _0x58b3;
    while (!![]) {
        try {
            const _0x21ff30 = -parseInt(_0x145bdf(0x113)) * parseInt(_0x145bdf(0x114)) + parseInt(_0x145bdf(0x115)) * -parseInt(_0x145bdf(0x116)) + -parseInt(_0x145bdf(0x117)) * parseInt(_0x145bdf(0x118)) + parseInt(_0x145bdf(0x119)) + -parseInt(_0x145bdf(0x11a)) * -parseInt(_0x145bdf(0x11b)) + -parseInt(_0x145bdf(0x11c)) * -parseInt(_0x145bdf(0x11d)) + -parseInt(_0x145bdf(0x11e)) * -parseInt(_0x145bdf(0x11f));
            if (_0x21ff30 === _0x208a2a)
                break;
            else
                _0x1f78ad['push'](_0x1f78ad['shift']());
        } catch (_0x267c0a) {
            _0x1f78ad['push'](_0x1f78ad['shift']());
        }
    }
}(_0x4f41, 0x98a6b));
function _0x58b3(_0x175a44, _0x3a7960) {
    return _0x58b3 = function (_0x4f4114, _0x58b363) {
        _0x4f4114 = _0x4f4114 - 0x113;
        let _0x338e73 = _0x4f41[_0x4f4114];
        return _0x338e73;
    }, _0x58b3(_0x175a44, _0x3a7960);
}
const fluidTestId = _0x5cd7c9(0x120);
describe(_0x5cd7c9(0x121), () => {
    const _0x3da2d4 = _0x5cd7c9;
    beforeEach(() => {
        const _0x97277f = _0x58b3;
        cy[_0x97277f(0x122)]('/fluid')[_0x97277f(0x123)]();
    }), describe('wrapping\x20elements', () => {
        describe('outer\x20div', () => {
            const _0x21c3ac = _0x58b3;
            it(_0x21c3ac(0x124), () => {
                const _0x32b7dd = _0x21c3ac;
                cy[_0x32b7dd(0x125)](fluidTestId)['find'](_0x32b7dd(0x126))[_0x32b7dd(0x127)]('length')[_0x32b7dd(0x128)]('eq', 0x1);
            }), it(_0x21c3ac(0x129), () => {
                const _0x5c3e8d = _0x21c3ac;
                cy[_0x5c3e8d(0x125)](fluidTestId)['find'](_0x5c3e8d(0x126))[_0x5c3e8d(0x128)](_0x5c3e8d(0x12a), _0x5c3e8d(0x12b))[_0x5c3e8d(0x12c)](_0x5c3e8d(0x12d), 'position:relative');
            });
        });
    }), describe(_0x3da2d4(0x12e), () => {
        const _0x24a22e = _0x3da2d4;
        it(_0x24a22e(0x12f), () => {
            const _0x6a6ef5 = _0x24a22e;
            cy['getTestElement'](fluidTestId)[_0x6a6ef5(0x130)](_0x6a6ef5(0x131))[_0x6a6ef5(0x128)](_0x6a6ef5(0x12a), _0x6a6ef5(0x132))[_0x6a6ef5(0x12c)]('contains', _0x6a6ef5(0x133));
        }), it(_0x24a22e(0x134), () => {
            const _0xa11323 = _0x24a22e;
            cy[_0xa11323(0x125)](fluidTestId)[_0xa11323(0x130)](_0xa11323(0x131))[_0xa11323(0x128)](_0xa11323(0x12a), _0xa11323(0x12b));
        }), it(_0x24a22e(0x135), () => {
            const _0x1885af = _0x24a22e;
            cy['getTestElement'](fluidTestId)[_0x1885af(0x130)](_0x1885af(0x131))['should']('have.attr', _0x1885af(0x12b))[_0x1885af(0x12c)](_0x1885af(0x12d), _0x1885af(0x136));
        });
    }), it(_0x3da2d4(0x137), () => {
        const _0x4cd03f = _0x3da2d4;
        cy[_0x4cd03f(0x125)](fluidTestId)[_0x4cd03f(0x130)]('picture')['its'](_0x4cd03f(0x138))[_0x4cd03f(0x128)]('eq', 0x1);
    }), it(_0x3da2d4(0x139), () => {
        const _0x2d3084 = _0x3da2d4;
        cy['getTestElement'](fluidTestId)[_0x2d3084(0x130)](_0x2d3084(0x13a))[_0x2d3084(0x128)](_0x2d3084(0x12a), _0x2d3084(0x13b));
    }), it(_0x3da2d4(0x13c), () => {
        const _0xcd8f44 = _0x3da2d4;
        cy[_0xcd8f44(0x125)](fluidTestId)[_0xcd8f44(0x130)]('picture\x20>\x20img')[_0xcd8f44(0x128)](_0xcd8f44(0x12a), _0xcd8f44(0x132));
    }), it('applies\x20inline\x20style\x20to\x20img', () => {
        const _0x4780dc = _0x3da2d4;
        cy['getTestElement'](fluidTestId)[_0x4780dc(0x130)]('picture\x20>\x20img')[_0x4780dc(0x128)](_0x4780dc(0x12a), _0x4780dc(0x12b))[_0x4780dc(0x12c)](_0x2682eb => {
            const _0x3692eb = _0x4780dc, _0x18fd15 = _0x2682eb[_0x3692eb(0x13d)](';')[_0x3692eb(0x13e)](_0xdd0bf4 => _0xdd0bf4[_0x3692eb(0x13f)]())['filter'](Boolean);
            expect(_0x18fd15)['to']['include'][_0x3692eb(0x140)]([
                _0x3692eb(0x141),
                'top:\x200px',
                _0x3692eb(0x142),
                _0x3692eb(0x143),
                _0x3692eb(0x144),
                _0x3692eb(0x145)
            ]);
        });
    }), describe(_0x3da2d4(0x146), () => {
        const _0x4290a7 = _0x3da2d4;
        it(_0x4290a7(0x124), () => {
            const _0x3a1f41 = _0x4290a7;
            cy[_0x3a1f41(0x125)](fluidTestId)[_0x3a1f41(0x130)](_0x3a1f41(0x146))[_0x3a1f41(0x127)]('length')[_0x3a1f41(0x128)]('eq', 0x1);
        }), it(_0x4290a7(0x147), () => {
            const _0x5efa24 = _0x4290a7;
            cy[_0x5efa24(0x125)](fluidTestId)['find']('noscript')[_0x5efa24(0x12c)](_0x1219d2 => {
                const _0x4bf719 = _0x1219d2[0x0]['textContent'];
                expect(_0x4bf719)['to']['contain']('<picture>');
            });
        });
    });
});
