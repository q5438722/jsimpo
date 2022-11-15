'use strict';
const {expect} = require('chai'), log = require('log')['get']('serverless:test'), fixtures = require('../../fixtures/programmatic'), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require('../../utils/dynamodb'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration');
describe('AWS\x20-\x20Stream\x20Integration\x20Test', function () {
    this['timeout']((0x1006 + -0x790 + -0x247 * 0x2) * (-0x269 * 0x1 + -0x14f6 + 0x179b * 0x1) * (0x2e * 0x40 + 0xb4c + 0x1 * -0x1668));
    let _0x17a5ca, _0x7ecd96, _0x4a8dd1, _0x3a960e;
    const _0x35f1b2 = 'Hello\x20from\x20the\x20Kinesis\x20horizon!', _0x48fd72 = 'dev';
    before(async () => {
        const _0x5c1ce5 = await fixtures['setup']('stream');
        ({servicePath: _0x7ecd96} = _0x5c1ce5);
        const _0x14b680 = _0x5c1ce5['serviceConfig']['service'];
        return _0x4a8dd1 = _0x14b680 + '-kinesis', _0x3a960e = _0x14b680 + '-table', _0x17a5ca = _0x14b680 + '-' + _0x48fd72, log['notice']('Creating\x20Kinesis\x20stream\x20\x22' + _0x4a8dd1 + '\x22...'), createKinesisStream(_0x4a8dd1)['then'](() => putKinesisRecord(_0x4a8dd1, _0x35f1b2))['then'](() => deployService(_0x7ecd96));
    }), after(async () => {
        return await removeService(_0x7ecd96), log['notice']('Deleting\x20Kinesis\x20stream'), deleteKinesisStream(_0x4a8dd1);
    }), describe('Kinesis\x20Streams', () => {
        it('should\x20invoke\x20on\x20kinesis\x20messages\x20from\x20the\x20trim\x20horizon', () => {
            const _0x39d1df = 'streamKinesis', _0x8e7a91 = 'Hello\x20from\x20Kinesis!';
            return confirmCloudWatchLogs('/aws/lambda/' + _0x17a5ca + '-' + _0x39d1df, () => putKinesisRecord(_0x4a8dd1, _0x8e7a91), { 'checkIsComplete': _0x176adf => _0x176adf['reduce']((_0x5d993a, _0x368ddc) => _0x5d993a + _0x368ddc['message'], '')['includes'](_0x8e7a91) })['then'](_0x3ed9bb => {
                const _0x15a81a = _0x3ed9bb['reduce']((_0x493187, _0x4e4b0f) => _0x493187 + _0x4e4b0f['message'], '');
                expect(_0x15a81a)['to']['include'](_0x39d1df), expect(_0x15a81a)['to']['include'](_0x8e7a91), expect(_0x15a81a)['to']['include'](_0x35f1b2);
            });
        });
    }), describe('DynamoDB\x20Streams', () => {
        it('should\x20invoke\x20on\x20dynamodb\x20messages\x20from\x20the\x20latest\x20position', () => {
            const _0x19472a = 'streamDynamoDb', _0xf9ec39 = { 'id': 'message' };
            return confirmCloudWatchLogs('/aws/lambda/' + _0x17a5ca + '-' + _0x19472a, () => {
                return _0xf9ec39['hello'] = 'from\x20dynamo!' + Math['random']()['toString'](-0x39 * -0x21 + -0x2302 + 0x1bcd)['slice'](-0x2574 + 0x179d + 0x5 * 0x2c5), putDynamoDbItem(_0x3a960e, _0xf9ec39);
            }, { 'checkIsComplete': _0x2e61f4 => _0x2e61f4['reduce']((_0x3eb12b, _0x58397d) => _0x3eb12b + _0x58397d['message'], '')['includes'](_0x19472a) })['then'](_0x2f4c22 => {
                const _0x47e001 = _0x2f4c22['reduce']((_0x2013c5, _0x27c2b1) => _0x2013c5 + _0x27c2b1['message'], '');
                expect(_0x47e001)['to']['include'](_0x19472a), expect(_0x47e001)['to']['include']('INSERT'), expect(_0x47e001)['to']['include'](_0xf9ec39['id']);
            });
        });
    });
});
