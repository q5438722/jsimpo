function _0x5e34(_0x1e8c9c, _0x43aaa4) {
    return _0x5e34 = function (_0xf89b06, _0x5e34c8) {
        _0xf89b06 = _0xf89b06 - 449;
        let _0x2ecb43 = _0xf89b[_0xf89b06];
        return _0x2ecb43;
    }, _0x5e34(_0x1e8c9c, _0x43aaa4);
}
const {expect} = require(_0x5656ca(460)), awsRequest = require(_0x5656ca(461)), fixtures = require(_0x5656ca(462)), {confirmCloudWatchLogs} = require(_0x5656ca(463)), {deployService, removeService} = require(_0x5656ca(464));
describe('Function destinations Integration Test', function () {
    const _0x307e4d = _0x5656ca;
    this['timeout'](1000 * 60 * 20);
    let _0x178a9b, _0x1de330;
    const _0x60200 = _0x307e4d(465);
    before(async () => {
        const _0x13295b = _0x307e4d, _0x32e054 = await fixtures[_0x13295b(466)](_0x13295b(467));
        ({servicePath: _0x1de330} = _0x32e054);
        const _0x44dc24 = _0x32e054['serviceConfig']['service'];
        _0x178a9b = _0x44dc24 + '-' + _0x60200, await deployService(_0x1de330);
    }), after(async () => {
        if (!_0x1de330)
            return;
        await removeService(_0x1de330);
    }), it(_0x307e4d(468), async () => confirmCloudWatchLogs('/aws/lambda/' + _0x178a9b + _0x307e4d(469), async () => {
        const _0xceaa79 = _0x307e4d;
        await awsRequest(_0xceaa79(470), 'invoke', {
            'FunctionName': _0x178a9b + _0xceaa79(471),
            'InvocationType': 'Event'
        });
    }, { 'checkIsComplete': _0x1927ff => _0x1927ff[_0x307e4d(472)] })['then'](_0x4221a0 => {
        const _0x432e30 = _0x307e4d;
        expect(_0x4221a0[_0x432e30(472)] > 0)['to'][_0x432e30(473)](!![]);
    }));
});