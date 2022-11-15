const should = require('should'), supertest = require(_0xc19653(327)), testUtils = require(_0xc19653(328)), config = require(_0xc19653(329)), localUtils = require(_0xc19653(330)), ghost = testUtils[_0xc19653(331)];
let request;
describe('Pages API', function () {
    before(function () {
        const _0x3c802d = _0x3425;
        return ghost()[_0x3c802d(332)](function (_0x461dc3) {
            const _0x2e5f92 = _0x3c802d;
            request = supertest[_0x2e5f92(333)](config[_0x2e5f92(334)](_0x2e5f92(335)));
        })[_0x3c802d(332)](function () {
            const _0x17cf26 = _0x3c802d;
            return localUtils[_0x17cf26(336)](request, _0x17cf26(337));
        });
    }), describe('Edit', function () {
        const _0xf52c6b = _0x3425;
        it(_0xf52c6b(338), function () {
            const _0x4f26c2 = _0xf52c6b;
            return request[_0x4f26c2(334)](localUtils['API'][_0x4f26c2(339)](_0x4f26c2(340) + testUtils[_0x4f26c2(341)][_0x4f26c2(342)][_0x4f26c2(337)][5]['id'] + '/'))[_0x4f26c2(343)](_0x4f26c2(344), config[_0x4f26c2(334)](_0x4f26c2(335)))[_0x4f26c2(345)](200)[_0x4f26c2(332)](_0x1f08ec => {
                const _0x1b8b87 = _0x4f26c2;
                return _0x1f08ec[_0x1b8b87(346)][_0x1b8b87(347)][0][_0x1b8b87(348)][_0x1b8b87(349)][_0x1b8b87(350)](_0x1b8b87(351)), request[_0x1b8b87(352)](localUtils[_0x1b8b87(353)][_0x1b8b87(339)](_0x1b8b87(340) + testUtils['DataGenerator'][_0x1b8b87(342)]['posts'][5]['id'] + '/?source=html'))[_0x1b8b87(343)]('Origin', config['get'](_0x1b8b87(335)))[_0x1b8b87(354)]({
                    'pages': [{
                            'html': '<p>HTML Ipsum presents</p>',
                            'updated_at': _0x1f08ec['body'][_0x1b8b87(347)][0][_0x1b8b87(355)]
                        }]
                })['expect']('Content-Type', /json/)[_0x1b8b87(345)]('Cache-Control', testUtils['cacheRules']['private'])[_0x1b8b87(345)](200);
            })[_0x4f26c2(332)](_0x27f0d8 => {
                const _0x93d536 = _0x4f26c2;
                _0x27f0d8[_0x93d536(346)]['pages'][0]['mobiledoc']['should'][_0x93d536(350)]('{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"HTML Ipsum presents"]]]]}');
            });
        });
    });
});