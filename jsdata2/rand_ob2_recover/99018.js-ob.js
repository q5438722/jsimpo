const {expect} = require(_0x25b9dd(125)), log = require(_0x25b9dd(126))[_0x25b9dd(127)]('serverless:test'), fixtures = require('../../fixtures/programmatic'), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require(_0x25b9dd(128)), {putDynamoDbItem} = require(_0x25b9dd(129)), {confirmCloudWatchLogs} = require(_0x25b9dd(130)), {deployService, removeService} = require('../../utils/integration');
function _0x4086(_0x250f8e, _0x48383a) {
    return _0x4086 = function (_0x583e57, _0x4086da) {
        _0x583e57 = _0x583e57 - 113;
        let _0x3f6f75 = _0x583e[_0x583e57];
        return _0x3f6f75;
    }, _0x4086(_0x250f8e, _0x48383a);
}
describe(_0x25b9dd(131), function () {
    const _0x5e9213 = _0x25b9dd;
    this['timeout'](1000 * 60 * 100);
    let _0xf6dd52, _0x13a958, _0x4e34a1, _0x118a83;
    const _0x129b23 = 'Hello from the Kinesis horizon!', _0x345b6b = _0x5e9213(132);
    before(async () => {
        const _0x25b9a3 = _0x5e9213, _0x5220fd = await fixtures[_0x25b9a3(133)](_0x25b9a3(134));
        ({servicePath: _0x13a958} = _0x5220fd);
        const _0x54ad60 = _0x5220fd[_0x25b9a3(135)][_0x25b9a3(136)];
        return _0x4e34a1 = _0x54ad60 + '-kinesis', _0x118a83 = _0x54ad60 + _0x25b9a3(137), _0xf6dd52 = _0x54ad60 + '-' + _0x345b6b, log[_0x25b9a3(138)](_0x25b9a3(139) + _0x4e34a1 + _0x25b9a3(140)), createKinesisStream(_0x4e34a1)[_0x25b9a3(141)](() => putKinesisRecord(_0x4e34a1, _0x129b23))[_0x25b9a3(141)](() => deployService(_0x13a958));
    }), after(async () => {
        const _0x505b22 = _0x5e9213;
        return await removeService(_0x13a958), log['notice'](_0x505b22(142)), deleteKinesisStream(_0x4e34a1);
    }), describe(_0x5e9213(143), () => {
        const _0x282aa3 = _0x5e9213;
        it(_0x282aa3(144), () => {
            const _0xbe7826 = _0x282aa3, _0x59787f = 'streamKinesis', _0x203660 = _0xbe7826(145);
            return confirmCloudWatchLogs(_0xbe7826(146) + _0xf6dd52 + '-' + _0x59787f, () => putKinesisRecord(_0x4e34a1, _0x203660), { 'checkIsComplete': _0x262fc7 => _0x262fc7[_0xbe7826(147)]((_0x56115f, _0x88693f) => _0x56115f + _0x88693f['message'], '')[_0xbe7826(148)](_0x203660) })[_0xbe7826(141)](_0xbf7593 => {
                const _0x4d9f96 = _0xbe7826, _0x137c14 = _0xbf7593['reduce']((_0x2b3086, _0x5f077f) => _0x2b3086 + _0x5f077f[_0x4d9f96(149)], '');
                expect(_0x137c14)['to'][_0x4d9f96(150)](_0x59787f), expect(_0x137c14)['to']['include'](_0x203660), expect(_0x137c14)['to'][_0x4d9f96(150)](_0x129b23);
            });
        });
    }), describe(_0x5e9213(151), () => {
        const _0x436135 = _0x5e9213;
        it(_0x436135(152), () => {
            const _0x21eb4b = _0x436135, _0xf296ea = _0x21eb4b(153), _0x5b5b20 = { 'id': 'message' };
            return confirmCloudWatchLogs(_0x21eb4b(146) + _0xf6dd52 + '-' + _0xf296ea, () => {
                const _0x1007b0 = _0x21eb4b;
                return _0x5b5b20['hello'] = _0x1007b0(154) + Math[_0x1007b0(155)]()[_0x1007b0(156)](36)[_0x1007b0(157)](2), putDynamoDbItem(_0x118a83, _0x5b5b20);
            }, { 'checkIsComplete': _0x36a9f1 => _0x36a9f1[_0x21eb4b(147)]((_0x11fbab, _0xceb540) => _0x11fbab + _0xceb540[_0x21eb4b(149)], '')[_0x21eb4b(148)](_0xf296ea) })['then'](_0x384d4a => {
                const _0x1f7bcf = _0x21eb4b, _0x1adc8d = _0x384d4a['reduce']((_0x24efb9, _0x464a59) => _0x24efb9 + _0x464a59['message'], '');
                expect(_0x1adc8d)['to'][_0x1f7bcf(150)](_0xf296ea), expect(_0x1adc8d)['to']['include'](_0x1f7bcf(158)), expect(_0x1adc8d)['to']['include'](_0x5b5b20['id']);
            });
        });
    });
});