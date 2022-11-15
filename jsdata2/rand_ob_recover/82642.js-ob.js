function _0x4bdc(_0x47b0bc, _0x156d76) {
    return _0x4bdc = function (_0x4940fc, _0xb29eaf) {
        _0x4940fc = _0x4940fc - (15 + -1 * 9647 + 1 * 9937);
        let _0x20a4ae = _0x1d9c[_0x4940fc];
        return _0x20a4ae;
    }, _0x4bdc(_0x47b0bc, _0x156d76);
}
const should = require('should'), supertest = require(_0x3a80bb(315)), testUtils = require(_0x3a80bb(316)), config = require('../../../core/shared/config'), localUtils = require(_0x3a80bb(317));
describe('Webhooks API', function () {
    const _0x17d91d = _0x3a80bb, _0xd8a04a = {
            'wZxSq': 'url',
            'zKXaO': _0x17d91d(318),
            'YdCtA': _0x17d91d(319),
            'VbZEN': _0x17d91d(320),
            'EqjUH': 'Content-Type',
            'RhDTU': 'http://example.com/webhooks/test/extra/10',
            'OIaph': _0x17d91d(321),
            'kKPsG': _0x17d91d(322),
            'ftbwI': _0x17d91d(323),
            'zUUeD': _0x17d91d(324),
            'jpDXo': _0x17d91d(325),
            'Rqmsw': _0x17d91d(326),
            'nXTTK': _0x17d91d(327),
            'vTNAL': _0x17d91d(328),
            'edKKb': _0x17d91d(329),
            'UkJJZ': _0x17d91d(330),
            'esPjU': _0x17d91d(331),
            'fZjIO': _0x17d91d(332),
            'lyLzk': function (_0x466a8b, _0x4e177f) {
                return _0x466a8b + _0x4e177f;
            },
            'yPXVn': _0x17d91d(333),
            'ncNUi': function (_0x265224, _0x11472b) {
                return _0x265224(_0x11472b);
            },
            'aNMqp': 'Can create a webhook',
            'juOld': function (_0x562380, _0x20cab5, _0x51fcea) {
                return _0x562380(_0x20cab5, _0x51fcea);
            },
            'tOrHO': _0x17d91d(334),
            'NIHjO': function (_0x688d84, _0x3ac75b, _0x297a7e) {
                return _0x688d84(_0x3ac75b, _0x297a7e);
            }
        };
    let _0x3e5c43;
    const _0x4f1481 = _0xd8a04a[_0x17d91d(335)];
    _0xd8a04a[_0x17d91d(336)](before, async function () {
        const _0x55d996 = _0x17d91d;
        await testUtils[_0x55d996(337)](), _0x3e5c43 = supertest['agent'](config[_0x55d996(338)](_0xd8a04a[_0x55d996(339)])), await localUtils[_0x55d996(340)](_0x3e5c43, _0x55d996(341));
    }), it(_0xd8a04a[_0x17d91d(342)], async function () {
        const _0x223f55 = _0x17d91d, _0x4ef7dc = {
                'event': _0xd8a04a[_0x223f55(343)],
                'target_url': _0x223f55(344),
                'name': 'test',
                'secret': _0xd8a04a[_0x223f55(345)],
                'api_version': _0x4f1481,
                'integration_id': testUtils['DataGenerator']['Content']['integrations'][2824 + 2136 + -4960]['id']
            }, _0x468126 = await _0x3e5c43[_0x223f55(346)](localUtils[_0x223f55(347)]['getApiQuery'](_0xd8a04a[_0x223f55(348)]))['set'](_0x223f55(322), config[_0x223f55(338)](_0xd8a04a[_0x223f55(339)]))[_0x223f55(349)]({ 'webhooks': [_0x4ef7dc] })[_0x223f55(350)](_0xd8a04a[_0x223f55(351)], /json/)[_0x223f55(350)]('Cache-Control', testUtils[_0x223f55(352)][_0x223f55(353)])[_0x223f55(350)](-624 + -5512 + 6337), _0x1f3ef3 = _0x468126[_0x223f55(354)];
        should[_0x223f55(355)](_0x1f3ef3['webhooks']), localUtils[_0x223f55(347)]['checkResponse'](_0x1f3ef3[_0x223f55(356)][-1217 * -2 + 7352 + 466 * -21], _0x223f55(332)), _0x1f3ef3[_0x223f55(356)][-36 * 2 + -1 * -2977 + 83 * -35]['event'][_0x223f55(357)]['equal'](_0x4ef7dc['event']), _0x1f3ef3[_0x223f55(356)][31 + 9778 + -9809]['target_url'][_0x223f55(357)]['equal'](_0x4ef7dc[_0x223f55(358)]), _0x1f3ef3[_0x223f55(356)][-241 * -29 + -3 * 1499 + 4 * -623][_0x223f55(359)][_0x223f55(357)]['equal'](_0x4ef7dc['secret']), _0x1f3ef3[_0x223f55(356)][-3414 + 4438 * -1 + 7852][_0x223f55(360)]['should'][_0x223f55(361)](_0x4ef7dc[_0x223f55(360)]), _0x1f3ef3['webhooks'][-6714 + 9300 + 2 * -1293][_0x223f55(362)][_0x223f55(357)][_0x223f55(361)](_0x4ef7dc[_0x223f55(362)]), _0x1f3ef3[_0x223f55(356)][8854 + 8978 + -17832][_0x223f55(363)][_0x223f55(357)][_0x223f55(361)](_0x4ef7dc[_0x223f55(363)]), should[_0x223f55(364)][_0x223f55(355)](_0x468126[_0x223f55(365)][_0x223f55(366)]), await _0x3e5c43['post'](localUtils['API'][_0x223f55(367)](_0xd8a04a['VbZEN']))[_0x223f55(368)]('Origin', config[_0x223f55(338)](_0xd8a04a[_0x223f55(339)]))[_0x223f55(349)]({ 'webhooks': [_0x4ef7dc] })[_0x223f55(350)](_0xd8a04a[_0x223f55(351)], /json/)['expect'](_0x223f55(323), testUtils[_0x223f55(352)][_0x223f55(353)])['expect'](219 * 9 + 9 * 1003 + -5288 * 2);
    }), _0xd8a04a['juOld'](it, _0xd8a04a[_0x17d91d(369)], async function () {
        const _0x2b1d4e = _0x17d91d, _0x558a57 = {
                'event': _0xd8a04a[_0x2b1d4e(343)],
                'target_url': _0xd8a04a[_0x2b1d4e(370)],
                'name': _0xd8a04a[_0x2b1d4e(371)],
                'secret': 'thisissecret',
                'api_version': _0x4f1481,
                'integration_id': _0x2b1d4e(372)
            }, _0x39e61d = await _0x3e5c43[_0x2b1d4e(346)](localUtils[_0x2b1d4e(347)][_0x2b1d4e(367)](_0xd8a04a[_0x2b1d4e(348)]))[_0x2b1d4e(368)](_0xd8a04a[_0x2b1d4e(373)], config[_0x2b1d4e(338)](_0x2b1d4e(374)))[_0x2b1d4e(349)]({ 'webhooks': [_0x558a57] })[_0x2b1d4e(350)](_0x2b1d4e(375), /json/)[_0x2b1d4e(350)](_0xd8a04a['ftbwI'], testUtils[_0x2b1d4e(352)][_0x2b1d4e(353)])[_0x2b1d4e(350)](457 * -4 + -19 * 233 + 6677), _0x3427c0 = _0x39e61d['body'];
        should[_0x2b1d4e(355)](_0x3427c0[_0x2b1d4e(376)]), _0x3427c0[_0x2b1d4e(376)][-286 * -31 + 3433 * -2 + 40 * -50]['type']['should'][_0x2b1d4e(361)](_0xd8a04a[_0x2b1d4e(377)]), _0x3427c0[_0x2b1d4e(376)][2776 + -8724 + 5948][_0x2b1d4e(378)]['should'][_0x2b1d4e(361)](_0x2b1d4e(379));
    }), _0xd8a04a[_0x17d91d(380)](it, 'Can edit a webhook', async function () {
        const _0x518f42 = _0x17d91d;
        let _0xdb4b01, _0x2ecc2b;
        const _0x577818 = await _0x3e5c43[_0x518f42(346)](localUtils[_0x518f42(347)][_0x518f42(367)](_0xd8a04a[_0x518f42(381)]))['set'](_0xd8a04a[_0x518f42(373)], config['get']('url'))['send']({ 'integrations': [{ 'name': _0xd8a04a[_0x518f42(382)] }] })[_0x518f42(350)](-3027 + 8505 + -5277);
        [_0xdb4b01] = _0x577818[_0x518f42(354)][_0x518f42(341)];
        const _0x1ce87f = await _0x3e5c43[_0x518f42(346)](localUtils[_0x518f42(347)]['getApiQuery'](_0x518f42(320)))[_0x518f42(368)](_0x518f42(322), config[_0x518f42(338)](_0xd8a04a['wZxSq']))['send']({
            'webhooks': [{
                    'name': _0xd8a04a[_0x518f42(383)],
                    'event': _0xd8a04a[_0x518f42(384)],
                    'target_url': _0x518f42(385),
                    'integration_id': _0xdb4b01['id']
                }]
        })[_0x518f42(350)](26 + 3998 + -3823);
        [_0x2ecc2b] = _0x1ce87f['body'][_0x518f42(356)];
        const _0x410464 = await _0x3e5c43[_0x518f42(386)](localUtils['API'][_0x518f42(367)](_0x518f42(320) + _0x2ecc2b['id'] + '/'))[_0x518f42(368)](_0xd8a04a[_0x518f42(373)], config[_0x518f42(338)](_0xd8a04a[_0x518f42(339)]))[_0x518f42(349)]({
                'webhooks': [{
                        'name': _0x518f42(387),
                        'event': _0x518f42(331),
                        'target_url': _0xd8a04a[_0x518f42(388)],
                        'integration_id': _0xd8a04a[_0x518f42(389)]
                    }]
            })['expect'](-5853 + 27 * -249 + 12776)[_0x518f42(350)](_0xd8a04a[_0x518f42(351)], /json/)['expect'](_0xd8a04a[_0x518f42(390)], testUtils['cacheRules'][_0x518f42(353)]), [_0x47852d] = _0x410464['body'][_0x518f42(356)];
        should[_0x518f42(361)](_0x47852d['id'], _0x2ecc2b['id']), should[_0x518f42(361)](_0x47852d[_0x518f42(360)], _0x518f42(387)), should['equal'](_0x47852d[_0x518f42(391)], _0xd8a04a['esPjU']), should[_0x518f42(361)](_0x47852d['target_url'], 'https://example.com/new-subscriber'), should[_0x518f42(361)](_0x47852d[_0x518f42(363)], _0xdb4b01['id']);
    }), _0xd8a04a[_0x17d91d(392)](it, _0x17d91d(393), async function () {
        const _0x144cb0 = _0x17d91d, _0x3a3a28 = {
                'event': _0xd8a04a['zKXaO'],
                'target_url': _0x144cb0(394),
                'integration_id': testUtils[_0x144cb0(395)]['Content'][_0x144cb0(341)][-1 * 2114 + 60 * -65 + 3007 * 2]['id']
            }, _0x3553e2 = await _0x3e5c43[_0x144cb0(346)](localUtils['API'][_0x144cb0(367)](_0x144cb0(320)))['set'](_0xd8a04a[_0x144cb0(373)], config[_0x144cb0(338)](_0xd8a04a[_0x144cb0(339)]))[_0x144cb0(349)]({ 'webhooks': [_0x3a3a28] })[_0x144cb0(350)](_0xd8a04a[_0x144cb0(351)], /json/)[_0x144cb0(350)](_0x144cb0(323), testUtils[_0x144cb0(352)]['private'])[_0x144cb0(350)](-144 * -5 + 13 * -388 + 181 * 25), _0x58b121 = _0x3553e2[_0x144cb0(354)];
        should[_0x144cb0(355)](_0x58b121['webhooks']), localUtils[_0x144cb0(347)][_0x144cb0(396)](_0x58b121['webhooks'][2 * -4591 + -1818 + 11000], _0xd8a04a['fZjIO']), _0x58b121['webhooks'][2242 + 702 + 2944 * -1][_0x144cb0(391)][_0x144cb0(357)][_0x144cb0(361)](_0x3a3a28['event']), _0x58b121[_0x144cb0(356)][1 * 3997 + 8 * -638 + -1 * -1107][_0x144cb0(358)][_0x144cb0(357)][_0x144cb0(361)](_0x3a3a28[_0x144cb0(358)]);
        const _0x36a992 = await _0x3e5c43[_0x144cb0(397)](localUtils['API']['getApiQuery'](_0xd8a04a['lyLzk'](_0xd8a04a[_0x144cb0(348)], _0x58b121[_0x144cb0(356)][8314 + -12 * -249 + -5651 * 2]['id']) + '/'))['set'](_0xd8a04a[_0x144cb0(373)], config['get'](_0xd8a04a['wZxSq']))['expect'](-5879 * 1 + 5989 * 1 + -47 * -2);
        _0x36a992[_0x144cb0(354)][_0x144cb0(357)]['be'][_0x144cb0(398)]();
    });
});