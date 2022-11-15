const should = require('should');
const supertest = require('supertest');
const testUtils = require('../../utils');
const config = require('../../../core/shared/config');
const localUtils = require('./utils');
describe('Webhooks API', function () {
    let _0x471192;
    const _0x44d1a0 = 'canary';
    before(async function () {
        await testUtils['startGhost']();
        _0x471192 = supertest['agent'](config['get']('url'));
        await localUtils['doAuth'](_0x471192, 'integrations');
    });
    it('Can create a webhook', async function () {
        const _0x7b4b42 = {
            'event': 'test.create',
            'target_url': 'http://example.com/webhooks/test/extra/1',
            'name': 'test',
            'secret': 'thisissecret',
            'api_version': _0x44d1a0,
            'integration_id': testUtils['DataGenerator']['Content']['integrations'][0]['id']
        };
        const _0x28f28c = await _0x471192['post'](localUtils['API']['getApiQuery']('webhooks/'))['set']('Origin', config['get']('url'))['send']({ 'webhooks': [_0x7b4b42] })['expect']('Content-Type', /json/)['expect']('Cache-Control', testUtils['cacheRules']['private'])['expect'](201);
        const _0x37c98e = _0x28f28c['body'];
        should['exist'](_0x37c98e['webhooks']);
        localUtils['API']['checkResponse'](_0x37c98e['webhooks'][0], 'webhook');
        _0x37c98e['webhooks'][0]['event']['should']['equal'](_0x7b4b42['event']);
        _0x37c98e['webhooks'][0]['target_url']['should']['equal'](_0x7b4b42['target_url']);
        _0x37c98e['webhooks'][0]['secret']['should']['equal'](_0x7b4b42['secret']);
        _0x37c98e['webhooks'][0]['name']['should']['equal'](_0x7b4b42['name']);
        _0x37c98e['webhooks'][0]['api_version']['should']['equal'](_0x7b4b42['api_version']);
        _0x37c98e['webhooks'][0]['integration_id']['should']['equal'](_0x7b4b42['integration_id']);
        should['not']['exist'](_0x28f28c['headers']['location']);
        await _0x471192['post'](localUtils['API']['getApiQuery']('webhooks/'))['set']('Origin', config['get']('url'))['send']({ 'webhooks': [_0x7b4b42] })['expect']('Content-Type', /json/)['expect']('Cache-Control', testUtils['cacheRules']['private'])['expect'](422);
    });
    it('Fails nicely when creating an orphaned webhook', async function () {
        const _0x266459 = {
            'event': 'test.create',
            'secret': 'thisissecret',
            'api_version': _0x44d1a0
        };
        const _0x46007d = await _0x471192['post'](localUtils['API']['getApiQuery']('webhooks/'))['set']('Origin', config['get']('url'))['send']({ 'webhooks': [_0x266459] })['expect']('Content-Type', /json/)['expect']('Cache-Control', testUtils['cacheRules']['private'])['expect'](422);
        const _0x21d98e = _0x46007d['body'];
        should['exist'](_0x21d98e['errors']);
        _0x21d98e['errors'][0]['type']['should']['equal']('ValidationError');
        _0x21d98e['errors'][0]['context']['should']['equal']('Validation failed for \'integration_id\'. \'integration_id\' value does not match any existing integration.');
    });
    it('Can edit a webhook', async function () {
        let _0x42b193;
        let _0x58b547;
        const _0xcf4831 = await _0x471192['post'](localUtils['API']['getApiQuery']('integrations/'))['set']('Origin', config['get']('url'))['send']({ 'integrations': [{ 'name': 'Rubbish Integration Name' }] })['expect'](201);
        [_0x42b193] = _0xcf4831['body']['integrations'];
        const _0x257a59 = await _0x471192['post'](localUtils['API']['getApiQuery']('webhooks/'))['set']('Origin', config['get']('url'))['send']({
            'webhooks': [{
                    'name': 'Testing',
                    'event': 'site.changed',
                    'target_url': 'https://example.com/rebuild',
                    'integration_id': _0x42b193['id']
                }]
        })['expect'](201);
        [_0x58b547] = _0x257a59['body']['webhooks'];
        const _0xcb06e1 = await _0x471192['put'](localUtils['API']['getApiQuery']('webhooks/' + _0x58b547['id'] + '/'))['set']('Origin', config['get']('url'))['send']({
            'webhooks': [{
                    'name': 'Edit Test',
                    'event': 'subscriber.added',
                    'target_url': 'https://example.com/new-subscriber',
                    'integration_id': 'ignore_me'
                }]
        })['expect'](200)['expect']('Content-Type', /json/)['expect']('Cache-Control', testUtils['cacheRules']['private']);
        const [_0x16db49] = _0xcb06e1['body']['webhooks'];
        should['equal'](_0x16db49['id'], _0x58b547['id']);
        should['equal'](_0x16db49['name'], 'Edit Test');
        should['equal'](_0x16db49['event'], 'subscriber.added');
        should['equal'](_0x16db49['target_url'], 'https://example.com/new-subscriber');
        should['equal'](_0x16db49['integration_id'], _0x42b193['id']);
    });
    it('Can delete a webhook', async function () {
        const _0x5a54db = {
            'target_url': 'http://example.com/webhooks/test/2',
            'integration_id': testUtils['DataGenerator']['Content']['integrations'][0]['id']
        };
        const _0x15b3ff = await _0x471192['post'](localUtils['API']['getApiQuery']('webhooks/'))['set']('Origin', config['get']('url'))['send']({ 'webhooks': [_0x5a54db] })['expect']('Content-Type', /json/)['expect']('Cache-Control', testUtils['cacheRules']['private'])['expect'](201);
        const _0x3ac951 = _0x15b3ff['body'];
        should['exist'](_0x3ac951['webhooks']);
        localUtils['API']['checkResponse'](_0x3ac951['webhooks'][0], 'webhook');
        _0x3ac951['webhooks'][0]['event']['should']['equal']('test.create');
        _0x3ac951['webhooks'][0]['target_url']['should']['equal'](_0x5a54db['target_url']);
        const _0x109020 = await _0x471192['del'](localUtils['API']['getApiQuery']('webhooks/' + _0x3ac951['webhooks'][0]['id'] + '/'))['set']('Origin', config['get']('url'))['expect'](204);
        _0x109020['body']['should']['be']['empty']();
    });
});