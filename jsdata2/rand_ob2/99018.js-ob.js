'use strict';
const _0x583e = [
    '2287ibUVoT',
    '797GWfksz',
    'chai',
    'log',
    'get',
    '../../utils/kinesis',
    '../../utils/dynamodb',
    '../../utils/misc',
    'AWS\x20-\x20Stream\x20Integration\x20Test',
    'dev',
    'setup',
    'stream',
    'serviceConfig',
    'service',
    '-table',
    'notice',
    'Creating\x20Kinesis\x20stream\x20\x22',
    '\x22...',
    'then',
    'Deleting\x20Kinesis\x20stream',
    'Kinesis\x20Streams',
    'should\x20invoke\x20on\x20kinesis\x20messages\x20from\x20the\x20trim\x20horizon',
    'Hello\x20from\x20Kinesis!',
    '/aws/lambda/',
    'reduce',
    'includes',
    'message',
    'include',
    'DynamoDB\x20Streams',
    'should\x20invoke\x20on\x20dynamodb\x20messages\x20from\x20the\x20latest\x20position',
    'streamDynamoDb',
    'from\x20dynamo!',
    'random',
    'toString',
    'slice',
    'INSERT',
    '5799sQYQAu',
    '100InkSWj',
    '73709LDjVoP',
    '3uBAxNR',
    '399203UgJhor',
    '370804LGfSUc',
    '1qRoxXq',
    '1164947sPXFTt',
    '5903liXNCa',
    '77RrdRLj'
];
const _0x25b9dd = _0x4086;
(function (_0x96eb03, _0x548156) {
    const _0x3df1ed = _0x4086;
    while (!![]) {
        try {
            const _0x4fb4b2 = parseInt(_0x3df1ed(0x71)) * -parseInt(_0x3df1ed(0x72)) + parseInt(_0x3df1ed(0x73)) + -parseInt(_0x3df1ed(0x74)) * -parseInt(_0x3df1ed(0x75)) + parseInt(_0x3df1ed(0x76)) + -parseInt(_0x3df1ed(0x77)) * -parseInt(_0x3df1ed(0x78)) + -parseInt(_0x3df1ed(0x79)) * -parseInt(_0x3df1ed(0x7a)) + -parseInt(_0x3df1ed(0x7b)) * parseInt(_0x3df1ed(0x7c));
            if (_0x4fb4b2 === _0x548156)
                break;
            else
                _0x96eb03['push'](_0x96eb03['shift']());
        } catch (_0x561a39) {
            _0x96eb03['push'](_0x96eb03['shift']());
        }
    }
}(_0x583e, 0xd1b51));
const {expect} = require(_0x25b9dd(0x7d)), log = require(_0x25b9dd(0x7e))[_0x25b9dd(0x7f)]('serverless:test'), fixtures = require('../../fixtures/programmatic'), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require(_0x25b9dd(0x80)), {putDynamoDbItem} = require(_0x25b9dd(0x81)), {confirmCloudWatchLogs} = require(_0x25b9dd(0x82)), {deployService, removeService} = require('../../utils/integration');
function _0x4086(_0x250f8e, _0x48383a) {
    return _0x4086 = function (_0x583e57, _0x4086da) {
        _0x583e57 = _0x583e57 - 0x71;
        let _0x3f6f75 = _0x583e[_0x583e57];
        return _0x3f6f75;
    }, _0x4086(_0x250f8e, _0x48383a);
}
describe(_0x25b9dd(0x83), function () {
    const _0x5e9213 = _0x25b9dd;
    this['timeout'](0x3e8 * 0x3c * 0x64);
    let _0xf6dd52, _0x13a958, _0x4e34a1, _0x118a83;
    const _0x129b23 = 'Hello\x20from\x20the\x20Kinesis\x20horizon!', _0x345b6b = _0x5e9213(0x84);
    before(async () => {
        const _0x25b9a3 = _0x5e9213, _0x5220fd = await fixtures[_0x25b9a3(0x85)](_0x25b9a3(0x86));
        ({servicePath: _0x13a958} = _0x5220fd);
        const _0x54ad60 = _0x5220fd[_0x25b9a3(0x87)][_0x25b9a3(0x88)];
        return _0x4e34a1 = _0x54ad60 + '-kinesis', _0x118a83 = _0x54ad60 + _0x25b9a3(0x89), _0xf6dd52 = _0x54ad60 + '-' + _0x345b6b, log[_0x25b9a3(0x8a)](_0x25b9a3(0x8b) + _0x4e34a1 + _0x25b9a3(0x8c)), createKinesisStream(_0x4e34a1)[_0x25b9a3(0x8d)](() => putKinesisRecord(_0x4e34a1, _0x129b23))[_0x25b9a3(0x8d)](() => deployService(_0x13a958));
    }), after(async () => {
        const _0x505b22 = _0x5e9213;
        return await removeService(_0x13a958), log['notice'](_0x505b22(0x8e)), deleteKinesisStream(_0x4e34a1);
    }), describe(_0x5e9213(0x8f), () => {
        const _0x282aa3 = _0x5e9213;
        it(_0x282aa3(0x90), () => {
            const _0xbe7826 = _0x282aa3, _0x59787f = 'streamKinesis', _0x203660 = _0xbe7826(0x91);
            return confirmCloudWatchLogs(_0xbe7826(0x92) + _0xf6dd52 + '-' + _0x59787f, () => putKinesisRecord(_0x4e34a1, _0x203660), { 'checkIsComplete': _0x262fc7 => _0x262fc7[_0xbe7826(0x93)]((_0x56115f, _0x88693f) => _0x56115f + _0x88693f['message'], '')[_0xbe7826(0x94)](_0x203660) })[_0xbe7826(0x8d)](_0xbf7593 => {
                const _0x4d9f96 = _0xbe7826, _0x137c14 = _0xbf7593['reduce']((_0x2b3086, _0x5f077f) => _0x2b3086 + _0x5f077f[_0x4d9f96(0x95)], '');
                expect(_0x137c14)['to'][_0x4d9f96(0x96)](_0x59787f), expect(_0x137c14)['to']['include'](_0x203660), expect(_0x137c14)['to'][_0x4d9f96(0x96)](_0x129b23);
            });
        });
    }), describe(_0x5e9213(0x97), () => {
        const _0x436135 = _0x5e9213;
        it(_0x436135(0x98), () => {
            const _0x21eb4b = _0x436135, _0xf296ea = _0x21eb4b(0x99), _0x5b5b20 = { 'id': 'message' };
            return confirmCloudWatchLogs(_0x21eb4b(0x92) + _0xf6dd52 + '-' + _0xf296ea, () => {
                const _0x1007b0 = _0x21eb4b;
                return _0x5b5b20['hello'] = _0x1007b0(0x9a) + Math[_0x1007b0(0x9b)]()[_0x1007b0(0x9c)](0x24)[_0x1007b0(0x9d)](0x2), putDynamoDbItem(_0x118a83, _0x5b5b20);
            }, { 'checkIsComplete': _0x36a9f1 => _0x36a9f1[_0x21eb4b(0x93)]((_0x11fbab, _0xceb540) => _0x11fbab + _0xceb540[_0x21eb4b(0x95)], '')[_0x21eb4b(0x94)](_0xf296ea) })['then'](_0x384d4a => {
                const _0x1f7bcf = _0x21eb4b, _0x1adc8d = _0x384d4a['reduce']((_0x24efb9, _0x464a59) => _0x24efb9 + _0x464a59['message'], '');
                expect(_0x1adc8d)['to'][_0x1f7bcf(0x96)](_0xf296ea), expect(_0x1adc8d)['to']['include'](_0x1f7bcf(0x9e)), expect(_0x1adc8d)['to']['include'](_0x5b5b20['id']);
            });
        });
    });
});
