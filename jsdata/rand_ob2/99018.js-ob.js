'use strict';
const _0x44e6 = [
    'log',
    'get',
    '../../fixtures/programmatic',
    '../../utils/dynamodb',
    '../../utils/misc',
    '../../utils/integration',
    'AWS\x20-\x20Stream\x20Integration\x20Test',
    'timeout',
    'Hello\x20from\x20the\x20Kinesis\x20horizon!',
    'stream',
    'serviceConfig',
    'service',
    '-kinesis',
    '-table',
    'Creating\x20Kinesis\x20stream\x20\x22',
    'then',
    'notice',
    'Kinesis\x20Streams',
    'should\x20invoke\x20on\x20kinesis\x20messages\x20from\x20the\x20trim\x20horizon',
    'Hello\x20from\x20Kinesis!',
    '/aws/lambda/',
    'reduce',
    'message',
    'include',
    'streamDynamoDb',
    'hello',
    'from\x20dynamo!',
    'toString',
    'slice',
    '431087zhoxHm',
    '648122xZAwPx',
    '10bWndBP',
    '25411bDFdos',
    '101084Iiwkgn',
    '25457KxdhRp',
    '1ExgQfl',
    '685221GfaBZR',
    '401762DxZnOR',
    '1pIQeeb',
    'chai'
];
function _0x4d68(_0x3310a3, _0x3aafe4) {
    return _0x4d68 = function (_0x44e6c8, _0x4d68ba) {
        _0x44e6c8 = _0x44e6c8 - 0xf3;
        let _0x34df85 = _0x44e6[_0x44e6c8];
        return _0x34df85;
    }, _0x4d68(_0x3310a3, _0x3aafe4);
}
const _0x453d7f = _0x4d68;
(function (_0x26addf, _0x84e165) {
    const _0x5f009c = _0x4d68;
    while (!![]) {
        try {
            const _0x242e8d = parseInt(_0x5f009c(0xf3)) + -parseInt(_0x5f009c(0xf4)) + -parseInt(_0x5f009c(0xf5)) * -parseInt(_0x5f009c(0xf6)) + parseInt(_0x5f009c(0xf7)) + -parseInt(_0x5f009c(0xf8)) * -parseInt(_0x5f009c(0xf9)) + parseInt(_0x5f009c(0xfa)) + -parseInt(_0x5f009c(0xfb)) * parseInt(_0x5f009c(0xfc));
            if (_0x242e8d === _0x84e165)
                break;
            else
                _0x26addf['push'](_0x26addf['shift']());
        } catch (_0x18655b) {
            _0x26addf['push'](_0x26addf['shift']());
        }
    }
}(_0x44e6, 0x6d263));
const {expect} = require(_0x453d7f(0xfd)), log = require(_0x453d7f(0xfe))[_0x453d7f(0xff)]('serverless:test'), fixtures = require(_0x453d7f(0x100)), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require(_0x453d7f(0x101)), {confirmCloudWatchLogs} = require(_0x453d7f(0x102)), {deployService, removeService} = require(_0x453d7f(0x103));
describe(_0x453d7f(0x104), function () {
    const _0x2eafa2 = _0x453d7f;
    this[_0x2eafa2(0x105)](0x3e8 * 0x3c * 0x64);
    let _0x3f2a79, _0x24f6b0, _0x1fd95b, _0x3bed1c;
    const _0x175038 = _0x2eafa2(0x106), _0x653b40 = 'dev';
    before(async () => {
        const _0x127897 = _0x2eafa2, _0x4333f9 = await fixtures['setup'](_0x127897(0x107));
        ({servicePath: _0x24f6b0} = _0x4333f9);
        const _0x55eac8 = _0x4333f9[_0x127897(0x108)][_0x127897(0x109)];
        return _0x1fd95b = _0x55eac8 + _0x127897(0x10a), _0x3bed1c = _0x55eac8 + _0x127897(0x10b), _0x3f2a79 = _0x55eac8 + '-' + _0x653b40, log['notice'](_0x127897(0x10c) + _0x1fd95b + '\x22...'), createKinesisStream(_0x1fd95b)['then'](() => putKinesisRecord(_0x1fd95b, _0x175038))[_0x127897(0x10d)](() => deployService(_0x24f6b0));
    }), after(async () => {
        const _0x578a50 = _0x2eafa2;
        return await removeService(_0x24f6b0), log[_0x578a50(0x10e)]('Deleting\x20Kinesis\x20stream'), deleteKinesisStream(_0x1fd95b);
    }), describe(_0x2eafa2(0x10f), () => {
        const _0x5a10f2 = _0x2eafa2;
        it(_0x5a10f2(0x110), () => {
            const _0x177110 = _0x5a10f2, _0xe3d3e = 'streamKinesis', _0x8f650a = _0x177110(0x111);
            return confirmCloudWatchLogs(_0x177110(0x112) + _0x3f2a79 + '-' + _0xe3d3e, () => putKinesisRecord(_0x1fd95b, _0x8f650a), { 'checkIsComplete': _0x4042b2 => _0x4042b2[_0x177110(0x113)]((_0x3f3aab, _0x555503) => _0x3f3aab + _0x555503[_0x177110(0x114)], '')['includes'](_0x8f650a) })[_0x177110(0x10d)](_0x207557 => {
                const _0xed42c5 = _0x177110, _0x3e03f7 = _0x207557[_0xed42c5(0x113)]((_0x5d0767, _0x566fd2) => _0x5d0767 + _0x566fd2[_0xed42c5(0x114)], '');
                expect(_0x3e03f7)['to'][_0xed42c5(0x115)](_0xe3d3e), expect(_0x3e03f7)['to'][_0xed42c5(0x115)](_0x8f650a), expect(_0x3e03f7)['to'][_0xed42c5(0x115)](_0x175038);
            });
        });
    }), describe('DynamoDB\x20Streams', () => {
        it('should\x20invoke\x20on\x20dynamodb\x20messages\x20from\x20the\x20latest\x20position', () => {
            const _0x345e29 = _0x4d68, _0x279915 = _0x345e29(0x116), _0x5bf84e = { 'id': _0x345e29(0x114) };
            return confirmCloudWatchLogs(_0x345e29(0x112) + _0x3f2a79 + '-' + _0x279915, () => {
                const _0xfd9c80 = _0x345e29;
                return _0x5bf84e[_0xfd9c80(0x117)] = _0xfd9c80(0x118) + Math['random']()[_0xfd9c80(0x119)](0x24)[_0xfd9c80(0x11a)](0x2), putDynamoDbItem(_0x3bed1c, _0x5bf84e);
            }, { 'checkIsComplete': _0x352700 => _0x352700[_0x345e29(0x113)]((_0x597929, _0x4bce2f) => _0x597929 + _0x4bce2f['message'], '')['includes'](_0x279915) })[_0x345e29(0x10d)](_0x360a2f => {
                const _0x32cff9 = _0x345e29, _0x463ea8 = _0x360a2f[_0x32cff9(0x113)]((_0x5f1734, _0x380299) => _0x5f1734 + _0x380299['message'], '');
                expect(_0x463ea8)['to'][_0x32cff9(0x115)](_0x279915), expect(_0x463ea8)['to'][_0x32cff9(0x115)]('INSERT'), expect(_0x463ea8)['to'][_0x32cff9(0x115)](_0x5bf84e['id']);
            });
        });
    });
});
