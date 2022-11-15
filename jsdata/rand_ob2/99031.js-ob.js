'use strict';
const _0xf0d7 = [
    '2NazWbN',
    '15073ydFxcj',
    '967DasCio',
    '457sokaNM',
    '314FdrlEa',
    '3453xRhGsj',
    '285373YyQDbD',
    'chai',
    '@serverless/test/aws-request',
    '../../fixtures/programmatic',
    '../../utils/misc',
    '../../utils/integration',
    'Function\x20destinations\x20Integration\x20Test',
    'timeout',
    'dev',
    'setup',
    'serviceConfig',
    'service',
    '/aws/lambda/',
    'Lambda',
    'invoke',
    '-trigger',
    'Event',
    'length',
    '1064135uQKnjm',
    '887291dxAvpw',
    '63VwZvHs',
    '2741uOdioF'
];
const _0x226ad3 = _0x3259;
(function (_0xe14ff6, _0x4a9c5d) {
    const _0x3dee0b = _0x3259;
    while (!![]) {
        try {
            const _0x1d46ef = parseInt(_0x3dee0b(0x180)) + -parseInt(_0x3dee0b(0x181)) + parseInt(_0x3dee0b(0x182)) * parseInt(_0x3dee0b(0x183)) + -parseInt(_0x3dee0b(0x184)) * -parseInt(_0x3dee0b(0x185)) + -parseInt(_0x3dee0b(0x186)) * parseInt(_0x3dee0b(0x187)) + parseInt(_0x3dee0b(0x188)) * parseInt(_0x3dee0b(0x189)) + -parseInt(_0x3dee0b(0x18a));
            if (_0x1d46ef === _0x4a9c5d)
                break;
            else
                _0xe14ff6['push'](_0xe14ff6['shift']());
        } catch (_0x134c55) {
            _0xe14ff6['push'](_0xe14ff6['shift']());
        }
    }
}(_0xf0d7, 0xb3d6f));
function _0x3259(_0x133ab9, _0x2d9c34) {
    return _0x3259 = function (_0xf0d719, _0x32594d) {
        _0xf0d719 = _0xf0d719 - 0x180;
        let _0x16a218 = _0xf0d7[_0xf0d719];
        return _0x16a218;
    }, _0x3259(_0x133ab9, _0x2d9c34);
}
const {expect} = require(_0x226ad3(0x18b)), awsRequest = require(_0x226ad3(0x18c)), fixtures = require(_0x226ad3(0x18d)), {confirmCloudWatchLogs} = require(_0x226ad3(0x18e)), {deployService, removeService} = require(_0x226ad3(0x18f));
describe(_0x226ad3(0x190), function () {
    const _0x1b2013 = _0x226ad3;
    this[_0x1b2013(0x191)](0x3e8 * 0x3c * 0x14);
    let _0x2f9fd5, _0x2f00f9;
    const _0x21d25a = _0x1b2013(0x192);
    before(async () => {
        const _0x110dbe = _0x1b2013, _0x154fb4 = await fixtures[_0x110dbe(0x193)]('functionDestinations');
        ({servicePath: _0x2f00f9} = _0x154fb4);
        const _0x9dc33a = _0x154fb4[_0x110dbe(0x194)][_0x110dbe(0x195)];
        _0x2f9fd5 = _0x9dc33a + '-' + _0x21d25a, await deployService(_0x2f00f9);
    }), after(async () => {
        if (!_0x2f00f9)
            return;
        await removeService(_0x2f00f9);
    }), it('on\x20async\x20invoke\x20should\x20invoke\x20destination\x20target', async () => confirmCloudWatchLogs(_0x1b2013(0x196) + _0x2f9fd5 + '-target', async () => {
        const _0x4520c6 = _0x1b2013;
        await awsRequest(_0x4520c6(0x197), _0x4520c6(0x198), {
            'FunctionName': _0x2f9fd5 + _0x4520c6(0x199),
            'InvocationType': _0x4520c6(0x19a)
        });
    }, { 'checkIsComplete': _0x1d9146 => _0x1d9146[_0x1b2013(0x19b)] })['then'](_0x36350f => {
        const _0x290021 = _0x1b2013;
        expect(_0x36350f[_0x290021(0x19b)] > 0x0)['to']['equal'](!![]);
    }));
});
