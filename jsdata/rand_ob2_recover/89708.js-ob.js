function _0x58b3(_0x175a44, _0x3a7960) {
    return _0x58b3 = function (_0x4f4114, _0x58b363) {
        _0x4f4114 = _0x4f4114 - 275;
        let _0x338e73 = _0x4f41[_0x4f4114];
        return _0x338e73;
    }, _0x58b3(_0x175a44, _0x3a7960);
}
const fluidTestId = _0x5cd7c9(288);
describe(_0x5cd7c9(289), () => {
    const _0x3da2d4 = _0x5cd7c9;
    beforeEach(() => {
        const _0x97277f = _0x58b3;
        cy[_0x97277f(290)]('/fluid')[_0x97277f(291)]();
    }), describe('wrapping elements', () => {
        describe('outer div', () => {
            const _0x21c3ac = _0x58b3;
            it(_0x21c3ac(292), () => {
                const _0x32b7dd = _0x21c3ac;
                cy[_0x32b7dd(293)](fluidTestId)['find'](_0x32b7dd(294))[_0x32b7dd(295)]('length')[_0x32b7dd(296)]('eq', 1);
            }), it(_0x21c3ac(297), () => {
                const _0x5c3e8d = _0x21c3ac;
                cy[_0x5c3e8d(293)](fluidTestId)['find'](_0x5c3e8d(294))[_0x5c3e8d(296)](_0x5c3e8d(298), _0x5c3e8d(299))[_0x5c3e8d(300)](_0x5c3e8d(301), 'position:relative');
            });
        });
    }), describe(_0x3da2d4(302), () => {
        const _0x24a22e = _0x3da2d4;
        it(_0x24a22e(303), () => {
            const _0x6a6ef5 = _0x24a22e;
            cy['getTestElement'](fluidTestId)[_0x6a6ef5(304)](_0x6a6ef5(305))[_0x6a6ef5(296)](_0x6a6ef5(298), _0x6a6ef5(306))[_0x6a6ef5(300)]('contains', _0x6a6ef5(307));
        }), it(_0x24a22e(308), () => {
            const _0xa11323 = _0x24a22e;
            cy[_0xa11323(293)](fluidTestId)[_0xa11323(304)](_0xa11323(305))[_0xa11323(296)](_0xa11323(298), _0xa11323(299));
        }), it(_0x24a22e(309), () => {
            const _0x1885af = _0x24a22e;
            cy['getTestElement'](fluidTestId)[_0x1885af(304)](_0x1885af(305))['should']('have.attr', _0x1885af(299))[_0x1885af(300)](_0x1885af(301), _0x1885af(310));
        });
    }), it(_0x3da2d4(311), () => {
        const _0x4cd03f = _0x3da2d4;
        cy[_0x4cd03f(293)](fluidTestId)[_0x4cd03f(304)]('picture')['its'](_0x4cd03f(312))[_0x4cd03f(296)]('eq', 1);
    }), it(_0x3da2d4(313), () => {
        const _0x2d3084 = _0x3da2d4;
        cy['getTestElement'](fluidTestId)[_0x2d3084(304)](_0x2d3084(314))[_0x2d3084(296)](_0x2d3084(298), _0x2d3084(315));
    }), it(_0x3da2d4(316), () => {
        const _0xcd8f44 = _0x3da2d4;
        cy[_0xcd8f44(293)](fluidTestId)[_0xcd8f44(304)]('picture > img')[_0xcd8f44(296)](_0xcd8f44(298), _0xcd8f44(306));
    }), it('applies inline style to img', () => {
        const _0x4780dc = _0x3da2d4;
        cy['getTestElement'](fluidTestId)[_0x4780dc(304)]('picture > img')[_0x4780dc(296)](_0x4780dc(298), _0x4780dc(299))[_0x4780dc(300)](_0x2682eb => {
            const _0x3692eb = _0x4780dc, _0x18fd15 = _0x2682eb[_0x3692eb(317)](';')[_0x3692eb(318)](_0xdd0bf4 => _0xdd0bf4[_0x3692eb(319)]())['filter'](Boolean);
            expect(_0x18fd15)['to']['include'][_0x3692eb(320)]([
                _0x3692eb(321),
                'top: 0px',
                _0x3692eb(322),
                _0x3692eb(323),
                _0x3692eb(324),
                _0x3692eb(325)
            ]);
        });
    }), describe(_0x3da2d4(326), () => {
        const _0x4290a7 = _0x3da2d4;
        it(_0x4290a7(292), () => {
            const _0x3a1f41 = _0x4290a7;
            cy[_0x3a1f41(293)](fluidTestId)[_0x3a1f41(304)](_0x3a1f41(326))[_0x3a1f41(295)]('length')[_0x3a1f41(296)]('eq', 1);
        }), it(_0x4290a7(327), () => {
            const _0x5efa24 = _0x4290a7;
            cy[_0x5efa24(293)](fluidTestId)['find']('noscript')[_0x5efa24(300)](_0x1219d2 => {
                const _0x4bf719 = _0x1219d2[0]['textContent'];
                expect(_0x4bf719)['to']['contain']('<picture>');
            });
        });
    });
});