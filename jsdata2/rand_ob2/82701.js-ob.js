const _0x4423 = [
    '15hgYADx',
    'supertest',
    '../../../../utils',
    '../../../../../core/shared/config',
    './utils',
    'startGhost',
    'then',
    'agent',
    'get',
    'url',
    'doAuth',
    'posts',
    'accepts\x20html\x20source',
    'getApiQuery',
    'pages/',
    'DataGenerator',
    'Content',
    'set',
    'Origin',
    'expect',
    'body',
    'pages',
    'slug',
    'should',
    'equal',
    'static-page-test',
    'put',
    'API',
    'send',
    'updated_at',
    '269353QtvLcJ',
    '375142nkCrRh',
    '8fUmxLB',
    '54844lMlzwZ',
    '27320kLsIfE',
    '184OvYZGr',
    '1571cXseHV',
    '437273knLcpH',
    '1RsnLTA',
    '66285NjcsdJ'
];
function _0x3425(_0x50e240, _0x5ecf43) {
    return _0x3425 = function (_0x442387, _0x342582) {
        _0x442387 = _0x442387 - 0x13c;
        let _0x3e3258 = _0x4423[_0x442387];
        return _0x3e3258;
    }, _0x3425(_0x50e240, _0x5ecf43);
}
const _0xc19653 = _0x3425;
(function (_0x4efb47, _0x714934) {
    const _0x3a8447 = _0x3425;
    while (!![]) {
        try {
            const _0x427f9f = -parseInt(_0x3a8447(0x13c)) + parseInt(_0x3a8447(0x13d)) + -parseInt(_0x3a8447(0x13e)) * -parseInt(_0x3a8447(0x13f)) + -parseInt(_0x3a8447(0x140)) + parseInt(_0x3a8447(0x141)) * parseInt(_0x3a8447(0x142)) + parseInt(_0x3a8447(0x143)) * parseInt(_0x3a8447(0x144)) + -parseInt(_0x3a8447(0x145)) * parseInt(_0x3a8447(0x146));
            if (_0x427f9f === _0x714934)
                break;
            else
                _0x4efb47['push'](_0x4efb47['shift']());
        } catch (_0x2d010b) {
            _0x4efb47['push'](_0x4efb47['shift']());
        }
    }
}(_0x4423, 0x3cdc3));
const should = require('should'), supertest = require(_0xc19653(0x147)), testUtils = require(_0xc19653(0x148)), config = require(_0xc19653(0x149)), localUtils = require(_0xc19653(0x14a)), ghost = testUtils[_0xc19653(0x14b)];
let request;
describe('Pages\x20API', function () {
    before(function () {
        const _0x3c802d = _0x3425;
        return ghost()[_0x3c802d(0x14c)](function (_0x461dc3) {
            const _0x2e5f92 = _0x3c802d;
            request = supertest[_0x2e5f92(0x14d)](config[_0x2e5f92(0x14e)](_0x2e5f92(0x14f)));
        })[_0x3c802d(0x14c)](function () {
            const _0x17cf26 = _0x3c802d;
            return localUtils[_0x17cf26(0x150)](request, _0x17cf26(0x151));
        });
    }), describe('Edit', function () {
        const _0xf52c6b = _0x3425;
        it(_0xf52c6b(0x152), function () {
            const _0x4f26c2 = _0xf52c6b;
            return request[_0x4f26c2(0x14e)](localUtils['API'][_0x4f26c2(0x153)](_0x4f26c2(0x154) + testUtils[_0x4f26c2(0x155)][_0x4f26c2(0x156)][_0x4f26c2(0x151)][0x5]['id'] + '/'))[_0x4f26c2(0x157)](_0x4f26c2(0x158), config[_0x4f26c2(0x14e)](_0x4f26c2(0x14f)))[_0x4f26c2(0x159)](0xc8)[_0x4f26c2(0x14c)](_0x1f08ec => {
                const _0x1b8b87 = _0x4f26c2;
                return _0x1f08ec[_0x1b8b87(0x15a)][_0x1b8b87(0x15b)][0x0][_0x1b8b87(0x15c)][_0x1b8b87(0x15d)][_0x1b8b87(0x15e)](_0x1b8b87(0x15f)), request[_0x1b8b87(0x160)](localUtils[_0x1b8b87(0x161)][_0x1b8b87(0x153)](_0x1b8b87(0x154) + testUtils['DataGenerator'][_0x1b8b87(0x156)]['posts'][0x5]['id'] + '/?source=html'))[_0x1b8b87(0x157)]('Origin', config['get'](_0x1b8b87(0x14f)))[_0x1b8b87(0x162)]({
                    'pages': [{
                            'html': '<p>HTML\x20Ipsum\x20presents</p>',
                            'updated_at': _0x1f08ec['body'][_0x1b8b87(0x15b)][0x0][_0x1b8b87(0x163)]
                        }]
                })['expect']('Content-Type', /json/)[_0x1b8b87(0x159)]('Cache-Control', testUtils['cacheRules']['private'])[_0x1b8b87(0x159)](0xc8);
            })[_0x4f26c2(0x14c)](_0x27f0d8 => {
                const _0x93d536 = _0x4f26c2;
                _0x27f0d8[_0x93d536(0x15a)]['pages'][0x0]['mobiledoc']['should'][_0x93d536(0x15e)]('{\x22version\x22:\x220.3.1\x22,\x22atoms\x22:[],\x22cards\x22:[],\x22markups\x22:[],\x22sections\x22:[[1,\x22p\x22,[[0,[],0,\x22HTML\x20Ipsum\x20presents\x22]]]]}');
            });
        });
    });
});
