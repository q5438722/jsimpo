'use strict';
const _0xf89b = [
    '3Joazpq',
    '9987phVsJw',
    '30iUNowJ',
    '144539uJBmUm',
    '3FxbLyx',
    '21pzkleE',
    '44591CfsIZm',
    '1098136GaDnCF',
    'chai',
    '@serverless/test/aws-request',
    '../../fixtures/programmatic',
    '../../utils/misc',
    '../../utils/integration',
    'dev',
    'setup',
    'functionDestinations',
    'on\x20async\x20invoke\x20should\x20invoke\x20destination\x20target',
    '-target',
    'Lambda',
    '-trigger',
    'length',
    'equal',
    '623046YnOmDa',
    '897510yVgqRo',
    '360455RecMCu'
];
const _0x5656ca = _0x5e34;
(function (_0x1880d7, _0x1ed0f8) {
    const _0xdfafc = _0x5e34;
    while (!![]) {
        try {
            const _0x4af478 = parseInt(_0xdfafc(0x1c1)) + parseInt(_0xdfafc(0x1c2)) + parseInt(_0xdfafc(0x1c3)) * parseInt(_0xdfafc(0x1c4)) + parseInt(_0xdfafc(0x1c5)) * -parseInt(_0xdfafc(0x1c6)) + -parseInt(_0xdfafc(0x1c7)) * -parseInt(_0xdfafc(0x1c8)) + -parseInt(_0xdfafc(0x1c9)) * parseInt(_0xdfafc(0x1ca)) + -parseInt(_0xdfafc(0x1cb));
            if (_0x4af478 === _0x1ed0f8)
                break;
            else
                _0x1880d7['push'](_0x1880d7['shift']());
        } catch (_0x47463a) {
            _0x1880d7['push'](_0x1880d7['shift']());
        }
    }
}(_0xf89b, 0xab3c5));
function _0x5e34(_0x1e8c9c, _0x43aaa4) {
    return _0x5e34 = function (_0xf89b06, _0x5e34c8) {
        _0xf89b06 = _0xf89b06 - 0x1c1;
        let _0x2ecb43 = _0xf89b[_0xf89b06];
        return _0x2ecb43;
    }, _0x5e34(_0x1e8c9c, _0x43aaa4);
}
const {expect} = require(_0x5656ca(0x1cc)), awsRequest = require(_0x5656ca(0x1cd)), fixtures = require(_0x5656ca(0x1ce)), {confirmCloudWatchLogs} = require(_0x5656ca(0x1cf)), {deployService, removeService} = require(_0x5656ca(0x1d0));
describe('Function\x20destinations\x20Integration\x20Test', function () {
    const _0x307e4d = _0x5656ca;
    this['timeout'](0x3e8 * 0x3c * 0x14);
    let _0x178a9b, _0x1de330;
    const _0x60200 = _0x307e4d(0x1d1);
    before(async () => {
        const _0x13295b = _0x307e4d, _0x32e054 = await fixtures[_0x13295b(0x1d2)](_0x13295b(0x1d3));
        ({servicePath: _0x1de330} = _0x32e054);
        const _0x44dc24 = _0x32e054['serviceConfig']['service'];
        _0x178a9b = _0x44dc24 + '-' + _0x60200, await deployService(_0x1de330);
    }), after(async () => {
        if (!_0x1de330)
            return;
        await removeService(_0x1de330);
    }), it(_0x307e4d(0x1d4), async () => confirmCloudWatchLogs('/aws/lambda/' + _0x178a9b + _0x307e4d(0x1d5), async () => {
        const _0xceaa79 = _0x307e4d;
        await awsRequest(_0xceaa79(0x1d6), 'invoke', {
            'FunctionName': _0x178a9b + _0xceaa79(0x1d7),
            'InvocationType': 'Event'
        });
    }, { 'checkIsComplete': _0x1927ff => _0x1927ff[_0x307e4d(0x1d8)] })['then'](_0x4221a0 => {
        const _0x432e30 = _0x307e4d;
        expect(_0x4221a0[_0x432e30(0x1d8)] > 0x0)['to'][_0x432e30(0x1d9)](!![]);
    }));
});
