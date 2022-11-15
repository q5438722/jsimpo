'use strict';
const {expect} = require('chai'), awsRequest = require('@serverless/test/aws-request'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration');
describe('Function\x20destinations\x20Integration\x20Test', function () {
    const _0x538577 = {
        'DsFfA': 'functionDestinations',
        'cndji': function (_0x16e534, _0x5345c0) {
            return _0x16e534(_0x5345c0);
        },
        'XmZTn': function (_0x1bf7bb, _0xa03e4f) {
            return _0x1bf7bb(_0xa03e4f);
        },
        'Nkvmw': function (_0x529950, _0x7ac9fe, _0x25822f, _0x2c3a47) {
            return _0x529950(_0x7ac9fe, _0x25822f, _0x2c3a47);
        },
        'gDQPQ': 'Lambda',
        'xkfMk': 'invoke',
        'rZqzK': 'Event',
        'KvEmo': function (_0x353779, _0x1dc1af) {
            return _0x353779(_0x1dc1af);
        },
        'mVbui': function (_0x1a8b84, _0x53fd13) {
            return _0x1a8b84 > _0x53fd13;
        },
        'Fuqtt': function (_0x1f8893, _0x134eb8) {
            return _0x1f8893 * _0x134eb8;
        },
        'efiIV': 'dev',
        'lajIk': function (_0x15ee4c, _0x379d8e) {
            return _0x15ee4c(_0x379d8e);
        },
        'ZmQfY': function (_0x178bc2, _0xb0c876) {
            return _0x178bc2(_0xb0c876);
        },
        'wzMvS': function (_0x28eb48, _0x20e7e7, _0x4423db) {
            return _0x28eb48(_0x20e7e7, _0x4423db);
        },
        'EkPru': 'on\x20async\x20invoke\x20should\x20invoke\x20destination\x20target'
    };
    this['timeout'](_0x538577['Fuqtt'](_0x538577['Fuqtt'](0x3e8, 0x3c), 0x14));
    let _0x4a04ec, _0x25baa0;
    const _0x15b3f4 = _0x538577['efiIV'];
    _0x538577['lajIk'](before, async () => {
        const _0x3ccab3 = await fixtures['setup'](_0x538577['DsFfA']);
        ({servicePath: _0x25baa0} = _0x3ccab3);
        const _0x1d0bca = _0x3ccab3['serviceConfig']['service'];
        _0x4a04ec = _0x1d0bca + '-' + _0x15b3f4, await _0x538577['cndji'](deployService, _0x25baa0);
    }), _0x538577['ZmQfY'](after, async () => {
        if (!_0x25baa0)
            return;
        await _0x538577['XmZTn'](removeService, _0x25baa0);
    }), _0x538577['wzMvS'](it, _0x538577['EkPru'], async () => confirmCloudWatchLogs('/aws/lambda/' + _0x4a04ec + '-target', async () => {
        await _0x538577['Nkvmw'](awsRequest, _0x538577['gDQPQ'], _0x538577['xkfMk'], {
            'FunctionName': _0x4a04ec + '-trigger',
            'InvocationType': _0x538577['rZqzK']
        });
    }, { 'checkIsComplete': _0x4a11a2 => _0x4a11a2['length'] })['then'](_0x140ca7 => {
        _0x538577['KvEmo'](expect, _0x538577['mVbui'](_0x140ca7['length'], 0x0))['to']['equal'](!![]);
    }));
});
