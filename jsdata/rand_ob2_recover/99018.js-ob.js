const {expect} = require(_0x453d7f(253)), log = require(_0x453d7f(254))[_0x453d7f(255)]('serverless:test'), fixtures = require(_0x453d7f(256)), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require(_0x453d7f(257)), {confirmCloudWatchLogs} = require(_0x453d7f(258)), {deployService, removeService} = require(_0x453d7f(259));
describe(_0x453d7f(260), function () {
    const _0x2eafa2 = _0x453d7f;
    this[_0x2eafa2(261)](1000 * 60 * 100);
    let _0x3f2a79, _0x24f6b0, _0x1fd95b, _0x3bed1c;
    const _0x175038 = _0x2eafa2(262), _0x653b40 = 'dev';
    before(async () => {
        const _0x127897 = _0x2eafa2, _0x4333f9 = await fixtures['setup'](_0x127897(263));
        ({servicePath: _0x24f6b0} = _0x4333f9);
        const _0x55eac8 = _0x4333f9[_0x127897(264)][_0x127897(265)];
        return _0x1fd95b = _0x55eac8 + _0x127897(266), _0x3bed1c = _0x55eac8 + _0x127897(267), _0x3f2a79 = _0x55eac8 + '-' + _0x653b40, log['notice'](_0x127897(268) + _0x1fd95b + '"...'), createKinesisStream(_0x1fd95b)['then'](() => putKinesisRecord(_0x1fd95b, _0x175038))[_0x127897(269)](() => deployService(_0x24f6b0));
    }), after(async () => {
        const _0x578a50 = _0x2eafa2;
        return await removeService(_0x24f6b0), log[_0x578a50(270)]('Deleting Kinesis stream'), deleteKinesisStream(_0x1fd95b);
    }), describe(_0x2eafa2(271), () => {
        const _0x5a10f2 = _0x2eafa2;
        it(_0x5a10f2(272), () => {
            const _0x177110 = _0x5a10f2, _0xe3d3e = 'streamKinesis', _0x8f650a = _0x177110(273);
            return confirmCloudWatchLogs(_0x177110(274) + _0x3f2a79 + '-' + _0xe3d3e, () => putKinesisRecord(_0x1fd95b, _0x8f650a), { 'checkIsComplete': _0x4042b2 => _0x4042b2[_0x177110(275)]((_0x3f3aab, _0x555503) => _0x3f3aab + _0x555503[_0x177110(276)], '')['includes'](_0x8f650a) })[_0x177110(269)](_0x207557 => {
                const _0xed42c5 = _0x177110, _0x3e03f7 = _0x207557[_0xed42c5(275)]((_0x5d0767, _0x566fd2) => _0x5d0767 + _0x566fd2[_0xed42c5(276)], '');
                expect(_0x3e03f7)['to'][_0xed42c5(277)](_0xe3d3e), expect(_0x3e03f7)['to'][_0xed42c5(277)](_0x8f650a), expect(_0x3e03f7)['to'][_0xed42c5(277)](_0x175038);
            });
        });
    }), describe('DynamoDB Streams', () => {
        it('should invoke on dynamodb messages from the latest position', () => {
            const _0x345e29 = _0x4d68, _0x279915 = _0x345e29(278), _0x5bf84e = { 'id': _0x345e29(276) };
            return confirmCloudWatchLogs(_0x345e29(274) + _0x3f2a79 + '-' + _0x279915, () => {
                const _0xfd9c80 = _0x345e29;
                return _0x5bf84e[_0xfd9c80(279)] = _0xfd9c80(280) + Math['random']()[_0xfd9c80(281)](36)[_0xfd9c80(282)](2), putDynamoDbItem(_0x3bed1c, _0x5bf84e);
            }, { 'checkIsComplete': _0x352700 => _0x352700[_0x345e29(275)]((_0x597929, _0x4bce2f) => _0x597929 + _0x4bce2f['message'], '')['includes'](_0x279915) })[_0x345e29(269)](_0x360a2f => {
                const _0x32cff9 = _0x345e29, _0x463ea8 = _0x360a2f[_0x32cff9(275)]((_0x5f1734, _0x380299) => _0x5f1734 + _0x380299['message'], '');
                expect(_0x463ea8)['to'][_0x32cff9(277)](_0x279915), expect(_0x463ea8)['to'][_0x32cff9(277)]('INSERT'), expect(_0x463ea8)['to'][_0x32cff9(277)](_0x5bf84e['id']);
            });
        });
    });
});