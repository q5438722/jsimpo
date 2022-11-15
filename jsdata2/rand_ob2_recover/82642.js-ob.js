const should = require(_0x474b72(194)), supertest = require(_0x474b72(195)), testUtils = require(_0x474b72(196)), config = require(_0x474b72(197)), localUtils = require(_0x474b72(198));
describe(_0x474b72(199), function () {
    const _0x43219d = _0x474b72;
    let _0x2c8170;
    const _0x35b8b5 = 'canary';
    before(async function () {
        const _0x3a860a = _0x340b;
        await testUtils[_0x3a860a(200)](), _0x2c8170 = supertest['agent'](config[_0x3a860a(201)](_0x3a860a(202))), await localUtils[_0x3a860a(203)](_0x2c8170, _0x3a860a(204));
    }), it('Can create a webhook', async function () {
        const _0x30065c = _0x340b, _0x8848c4 = {
                'event': _0x30065c(205),
                'target_url': 'http://example.com/webhooks/test/extra/1',
                'name': _0x30065c(206),
                'secret': _0x30065c(207),
                'api_version': _0x35b8b5,
                'integration_id': testUtils['DataGenerator'][_0x30065c(208)][_0x30065c(204)][0]['id']
            }, _0x54d553 = await _0x2c8170[_0x30065c(209)](localUtils[_0x30065c(210)][_0x30065c(211)](_0x30065c(212)))[_0x30065c(213)](_0x30065c(214), config[_0x30065c(201)](_0x30065c(202)))[_0x30065c(215)]({ 'webhooks': [_0x8848c4] })[_0x30065c(216)](_0x30065c(217), /json/)['expect']('Cache-Control', testUtils[_0x30065c(218)][_0x30065c(219)])['expect'](201), _0x540119 = _0x54d553[_0x30065c(220)];
        should[_0x30065c(221)](_0x540119[_0x30065c(222)]), localUtils['API'][_0x30065c(223)](_0x540119[_0x30065c(222)][0], 'webhook'), _0x540119['webhooks'][0][_0x30065c(224)][_0x30065c(194)]['equal'](_0x8848c4['event']), _0x540119[_0x30065c(222)][0][_0x30065c(225)][_0x30065c(194)][_0x30065c(226)](_0x8848c4[_0x30065c(225)]), _0x540119['webhooks'][0][_0x30065c(227)][_0x30065c(194)][_0x30065c(226)](_0x8848c4[_0x30065c(227)]), _0x540119[_0x30065c(222)][0]['name'][_0x30065c(194)][_0x30065c(226)](_0x8848c4[_0x30065c(228)]), _0x540119[_0x30065c(222)][0][_0x30065c(229)][_0x30065c(194)][_0x30065c(226)](_0x8848c4['api_version']), _0x540119[_0x30065c(222)][0][_0x30065c(230)]['should'][_0x30065c(226)](_0x8848c4['integration_id']), should[_0x30065c(231)]['exist'](_0x54d553['headers'][_0x30065c(232)]), await _0x2c8170[_0x30065c(209)](localUtils[_0x30065c(210)][_0x30065c(211)](_0x30065c(212)))[_0x30065c(213)](_0x30065c(214), config[_0x30065c(201)]('url'))[_0x30065c(215)]({ 'webhooks': [_0x8848c4] })['expect'](_0x30065c(217), /json/)[_0x30065c(216)](_0x30065c(233), testUtils[_0x30065c(218)]['private'])[_0x30065c(216)](422);
    }), it('Fails nicely when creating an orphaned webhook', async function () {
        const _0xe6d469 = _0x340b, _0x37044e = {
                'event': 'test.create',
                'target_url': 'http://example.com/webhooks/test/extra/10',
                'name': _0xe6d469(206),
                'secret': 'thisissecret',
                'api_version': _0x35b8b5,
                'integration_id': _0xe6d469(234)
            }, _0x376f00 = await _0x2c8170['post'](localUtils['API'][_0xe6d469(211)](_0xe6d469(212)))['set'](_0xe6d469(214), config[_0xe6d469(201)](_0xe6d469(202)))[_0xe6d469(215)]({ 'webhooks': [_0x37044e] })[_0xe6d469(216)](_0xe6d469(217), /json/)[_0xe6d469(216)](_0xe6d469(233), testUtils['cacheRules'][_0xe6d469(219)])[_0xe6d469(216)](422), _0x437a44 = _0x376f00[_0xe6d469(220)];
        should['exist'](_0x437a44[_0xe6d469(235)]), _0x437a44['errors'][0][_0xe6d469(236)][_0xe6d469(194)]['equal']('ValidationError'), _0x437a44['errors'][0][_0xe6d469(237)][_0xe6d469(194)][_0xe6d469(226)](_0xe6d469(238));
    }), it('Can edit a webhook', async function () {
        const _0x2b7021 = _0x340b;
        let _0x5f25df, _0x559fdd;
        const _0x3d9876 = await _0x2c8170[_0x2b7021(209)](localUtils[_0x2b7021(210)]['getApiQuery'](_0x2b7021(239)))[_0x2b7021(213)](_0x2b7021(214), config['get'](_0x2b7021(202)))[_0x2b7021(215)]({ 'integrations': [{ 'name': 'Rubbish Integration Name' }] })[_0x2b7021(216)](201);
        [_0x5f25df] = _0x3d9876['body'][_0x2b7021(204)];
        const _0x55e281 = await _0x2c8170['post'](localUtils['API'][_0x2b7021(211)](_0x2b7021(212)))['set']('Origin', config[_0x2b7021(201)](_0x2b7021(202)))['send']({
            'webhooks': [{
                    'name': _0x2b7021(240),
                    'event': _0x2b7021(241),
                    'target_url': _0x2b7021(242),
                    'integration_id': _0x5f25df['id']
                }]
        })[_0x2b7021(216)](201);
        [_0x559fdd] = _0x55e281[_0x2b7021(220)][_0x2b7021(222)];
        const _0x4a8d78 = await _0x2c8170[_0x2b7021(243)](localUtils[_0x2b7021(210)]['getApiQuery'](_0x2b7021(212) + _0x559fdd['id'] + '/'))[_0x2b7021(213)]('Origin', config[_0x2b7021(201)](_0x2b7021(202)))[_0x2b7021(215)]({
                'webhooks': [{
                        'name': _0x2b7021(244),
                        'event': _0x2b7021(245),
                        'target_url': _0x2b7021(246),
                        'integration_id': _0x2b7021(247)
                    }]
            })['expect'](200)[_0x2b7021(216)]('Content-Type', /json/)[_0x2b7021(216)]('Cache-Control', testUtils['cacheRules'][_0x2b7021(219)]), [_0x48d0de] = _0x4a8d78[_0x2b7021(220)][_0x2b7021(222)];
        should[_0x2b7021(226)](_0x48d0de['id'], _0x559fdd['id']), should[_0x2b7021(226)](_0x48d0de[_0x2b7021(228)], _0x2b7021(244)), should[_0x2b7021(226)](_0x48d0de[_0x2b7021(224)], _0x2b7021(245)), should[_0x2b7021(226)](_0x48d0de[_0x2b7021(225)], _0x2b7021(246)), should[_0x2b7021(226)](_0x48d0de[_0x2b7021(230)], _0x5f25df['id']);
    }), it(_0x43219d(248), async function () {
        const _0x17d351 = _0x43219d, _0x330793 = {
                'event': _0x17d351(205),
                'target_url': 'http://example.com/webhooks/test/2',
                'integration_id': testUtils[_0x17d351(249)][_0x17d351(208)][_0x17d351(204)][0]['id']
            }, _0x21db0e = await _0x2c8170['post'](localUtils[_0x17d351(210)][_0x17d351(211)](_0x17d351(212)))[_0x17d351(213)]('Origin', config[_0x17d351(201)]('url'))['send']({ 'webhooks': [_0x330793] })[_0x17d351(216)](_0x17d351(217), /json/)['expect'](_0x17d351(233), testUtils[_0x17d351(218)][_0x17d351(219)])[_0x17d351(216)](201), _0x58a68c = _0x21db0e[_0x17d351(220)];
        should[_0x17d351(221)](_0x58a68c[_0x17d351(222)]), localUtils['API']['checkResponse'](_0x58a68c[_0x17d351(222)][0], _0x17d351(250)), _0x58a68c['webhooks'][0]['event']['should'][_0x17d351(226)](_0x330793[_0x17d351(224)]), _0x58a68c[_0x17d351(222)][0][_0x17d351(225)][_0x17d351(194)][_0x17d351(226)](_0x330793[_0x17d351(225)]);
        const _0x5735af = await _0x2c8170[_0x17d351(251)](localUtils[_0x17d351(210)][_0x17d351(211)](_0x17d351(212) + _0x58a68c[_0x17d351(222)][0]['id'] + '/'))[_0x17d351(213)](_0x17d351(214), config['get'](_0x17d351(202)))[_0x17d351(216)](204);
        _0x5735af['body'][_0x17d351(194)]['be'][_0x17d351(252)]();
    });
});