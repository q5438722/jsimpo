const requiredExample = require(_0x5b830c(318));
function _0x29a7(_0x489aeb, _0x5b8fe8) {
    return _0x29a7 = function (_0x2f9590, _0x29a76d) {
        _0x2f9590 = _0x2f9590 - 308;
        let _0xe25034 = _0x2f95[_0x2f9590];
        return _0xe25034;
    }, _0x29a7(_0x489aeb, _0x5b8fe8);
}
context(_0x5b830c(319), () => {
    const _0x4fc87 = _0x5b830c;
    beforeEach(() => {
        const _0x393d4c = _0x29a7;
        cy[_0x393d4c(320)](_0x393d4c(321));
    }), beforeEach(() => {
        const _0x1d6a50 = _0x29a7;
        cy[_0x1d6a50(322)](_0x1d6a50(323))['as'](_0x1d6a50(324));
    }), it('cy.fixture() - load a fixture', () => {
        const _0x18b90f = _0x29a7;
        cy[_0x18b90f(325)](), cy[_0x18b90f(322)](_0x18b90f(323))['as'](_0x18b90f(326)), cy[_0x18b90f(327)](_0x18b90f(328), _0x18b90f(329), '@comment')['as'](_0x18b90f(330)), cy[_0x18b90f(331)](_0x18b90f(332))['click'](), cy[_0x18b90f(333)](_0x18b90f(334))[_0x18b90f(335)]('responseBody')['should'](_0x18b90f(336), _0x18b90f(337))[_0x18b90f(338)](_0x18b90f(339), _0x18b90f(340)), cy[_0x18b90f(327)](_0x18b90f(328), _0x18b90f(329), _0x18b90f(341))['as']('getComment'), cy[_0x18b90f(331)](_0x18b90f(332))[_0x18b90f(342)](), cy[_0x18b90f(333)](_0x18b90f(334))[_0x18b90f(335)](_0x18b90f(343))[_0x18b90f(344)]('have.property', 'name')[_0x18b90f(338)]('include', _0x18b90f(340)), cy[_0x18b90f(327)](_0x18b90f(328), 'comments/*', _0x18b90f(345))['as'](_0x18b90f(330)), cy[_0x18b90f(331)](_0x18b90f(332))[_0x18b90f(342)](), cy['wait']('@getComment')[_0x18b90f(335)](_0x18b90f(343))[_0x18b90f(344)](_0x18b90f(336), _0x18b90f(337))[_0x18b90f(338)](_0x18b90f(339), 'Using fixtures to represent data');
    }), it(_0x4fc87(346), function () {
        const _0x24ac8f = _0x4fc87;
        expect(this[_0x24ac8f(324)], _0x24ac8f(347))['to'][_0x24ac8f(348)]['equal'](requiredExample), cy['wrap'](this[_0x24ac8f(324)], _0x24ac8f(349))['should'](_0x24ac8f(350), requiredExample);
    }), it('cy.readFile() - read a files contents', () => {
        const _0x15116e = _0x4fc87;
        cy[_0x15116e(351)](_0x15116e(352))['then'](_0x3762e9 => {
            const _0x2776c9 = _0x15116e;
            expect(_0x3762e9)['to']['be']['an'](_0x2776c9(353));
        });
    }), it('cy.writeFile() - write to a file', () => {
        const _0x4ed57a = _0x4fc87;
        cy[_0x4ed57a(354)]('https://jsonplaceholder.cypress.io/users')[_0x4ed57a(355)](_0x2debe0 => {
            const _0x42c8bd = _0x4ed57a;
            cy[_0x42c8bd(356)]('cypress/fixtures/users.json', _0x2debe0[_0x42c8bd(357)]);
        }), cy[_0x4ed57a(322)]('users')[_0x4ed57a(344)](_0x829d34 => {
            const _0x412405 = _0x4ed57a;
            expect(_0x829d34[0][_0x412405(337)])['to'][_0x412405(358)];
        }), cy[_0x4ed57a(356)](_0x4ed57a(359), {
            'id': 8739,
            'name': _0x4ed57a(360),
            'email': 'jane@example.com'
        }), cy[_0x4ed57a(322)](_0x4ed57a(361))[_0x4ed57a(344)](_0x14f270 => {
            const _0x510de3 = _0x4ed57a;
            expect(_0x14f270[_0x510de3(337)])['to']['eq'](_0x510de3(360));
        });
    });
});