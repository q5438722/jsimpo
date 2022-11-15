const _0x2f95 = [
    '1980XvJmDp',
    '80UJtdrh',
    '671584sFuBxJ',
    '../../fixtures/example',
    'Files',
    'visit',
    'https://example.cypress.io/commands/files',
    'fixture',
    'example.json',
    'example',
    'server',
    'comment',
    'route',
    'GET',
    'comments/*',
    'getComment',
    'get',
    '.fixture-btn',
    'wait',
    '@getComment',
    'its',
    'have.property',
    'name',
    'and',
    'include',
    'Using\x20fixtures\x20to\x20represent\x20data',
    'fixture:example.json',
    'click',
    'responseBody',
    'should',
    'fx:example',
    'cy.fixture()\x20or\x20require\x20-\x20load\x20a\x20fixture',
    'fixture\x20in\x20the\x20test\x20context',
    'deep',
    'fixture\x20vs\x20require',
    'deep.equal',
    'readFile',
    'cypress.json',
    'object',
    'request',
    'then',
    'writeFile',
    'body',
    'exist',
    'cypress/fixtures/profile.json',
    'Jane',
    'profile',
    '988204rlTtly',
    '851630hYmgpO',
    '1080591RYnqec',
    '13ZVIlxx',
    '95366seGoQb',
    '1NpYzeL',
    '688361BHCSyS'
];
const _0x5b830c = _0x29a7;
(function (_0x269df7, _0x535fac) {
    const _0x1b4e68 = _0x29a7;
    while (!![]) {
        try {
            const _0x276022 = -parseInt(_0x1b4e68(0x134)) + parseInt(_0x1b4e68(0x135)) + parseInt(_0x1b4e68(0x136)) + -parseInt(_0x1b4e68(0x137)) * -parseInt(_0x1b4e68(0x138)) + -parseInt(_0x1b4e68(0x139)) * parseInt(_0x1b4e68(0x13a)) + -parseInt(_0x1b4e68(0x13b)) * parseInt(_0x1b4e68(0x13c)) + -parseInt(_0x1b4e68(0x13d));
            if (_0x276022 === _0x535fac)
                break;
            else
                _0x269df7['push'](_0x269df7['shift']());
        } catch (_0x4fabfe) {
            _0x269df7['push'](_0x269df7['shift']());
        }
    }
}(_0x2f95, 0xa2756));
const requiredExample = require(_0x5b830c(0x13e));
function _0x29a7(_0x489aeb, _0x5b8fe8) {
    return _0x29a7 = function (_0x2f9590, _0x29a76d) {
        _0x2f9590 = _0x2f9590 - 0x134;
        let _0xe25034 = _0x2f95[_0x2f9590];
        return _0xe25034;
    }, _0x29a7(_0x489aeb, _0x5b8fe8);
}
context(_0x5b830c(0x13f), () => {
    const _0x4fc87 = _0x5b830c;
    beforeEach(() => {
        const _0x393d4c = _0x29a7;
        cy[_0x393d4c(0x140)](_0x393d4c(0x141));
    }), beforeEach(() => {
        const _0x1d6a50 = _0x29a7;
        cy[_0x1d6a50(0x142)](_0x1d6a50(0x143))['as'](_0x1d6a50(0x144));
    }), it('cy.fixture()\x20-\x20load\x20a\x20fixture', () => {
        const _0x18b90f = _0x29a7;
        cy[_0x18b90f(0x145)](), cy[_0x18b90f(0x142)](_0x18b90f(0x143))['as'](_0x18b90f(0x146)), cy[_0x18b90f(0x147)](_0x18b90f(0x148), _0x18b90f(0x149), '@comment')['as'](_0x18b90f(0x14a)), cy[_0x18b90f(0x14b)](_0x18b90f(0x14c))['click'](), cy[_0x18b90f(0x14d)](_0x18b90f(0x14e))[_0x18b90f(0x14f)]('responseBody')['should'](_0x18b90f(0x150), _0x18b90f(0x151))[_0x18b90f(0x152)](_0x18b90f(0x153), _0x18b90f(0x154)), cy[_0x18b90f(0x147)](_0x18b90f(0x148), _0x18b90f(0x149), _0x18b90f(0x155))['as']('getComment'), cy[_0x18b90f(0x14b)](_0x18b90f(0x14c))[_0x18b90f(0x156)](), cy[_0x18b90f(0x14d)](_0x18b90f(0x14e))[_0x18b90f(0x14f)](_0x18b90f(0x157))[_0x18b90f(0x158)]('have.property', 'name')[_0x18b90f(0x152)]('include', _0x18b90f(0x154)), cy[_0x18b90f(0x147)](_0x18b90f(0x148), 'comments/*', _0x18b90f(0x159))['as'](_0x18b90f(0x14a)), cy[_0x18b90f(0x14b)](_0x18b90f(0x14c))[_0x18b90f(0x156)](), cy['wait']('@getComment')[_0x18b90f(0x14f)](_0x18b90f(0x157))[_0x18b90f(0x158)](_0x18b90f(0x150), _0x18b90f(0x151))[_0x18b90f(0x152)](_0x18b90f(0x153), 'Using\x20fixtures\x20to\x20represent\x20data');
    }), it(_0x4fc87(0x15a), function () {
        const _0x24ac8f = _0x4fc87;
        expect(this[_0x24ac8f(0x144)], _0x24ac8f(0x15b))['to'][_0x24ac8f(0x15c)]['equal'](requiredExample), cy['wrap'](this[_0x24ac8f(0x144)], _0x24ac8f(0x15d))['should'](_0x24ac8f(0x15e), requiredExample);
    }), it('cy.readFile()\x20-\x20read\x20a\x20files\x20contents', () => {
        const _0x15116e = _0x4fc87;
        cy[_0x15116e(0x15f)](_0x15116e(0x160))['then'](_0x3762e9 => {
            const _0x2776c9 = _0x15116e;
            expect(_0x3762e9)['to']['be']['an'](_0x2776c9(0x161));
        });
    }), it('cy.writeFile()\x20-\x20write\x20to\x20a\x20file', () => {
        const _0x4ed57a = _0x4fc87;
        cy[_0x4ed57a(0x162)]('https://jsonplaceholder.cypress.io/users')[_0x4ed57a(0x163)](_0x2debe0 => {
            const _0x42c8bd = _0x4ed57a;
            cy[_0x42c8bd(0x164)]('cypress/fixtures/users.json', _0x2debe0[_0x42c8bd(0x165)]);
        }), cy[_0x4ed57a(0x142)]('users')[_0x4ed57a(0x158)](_0x829d34 => {
            const _0x412405 = _0x4ed57a;
            expect(_0x829d34[0x0][_0x412405(0x151)])['to'][_0x412405(0x166)];
        }), cy[_0x4ed57a(0x164)](_0x4ed57a(0x167), {
            'id': 0x2223,
            'name': _0x4ed57a(0x168),
            'email': 'jane@example.com'
        }), cy[_0x4ed57a(0x142)](_0x4ed57a(0x169))[_0x4ed57a(0x158)](_0x14f270 => {
            const _0x510de3 = _0x4ed57a;
            expect(_0x14f270[_0x510de3(0x151)])['to']['eq'](_0x510de3(0x168));
        });
    });
});
