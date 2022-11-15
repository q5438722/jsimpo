'use strict';
const {expect} = require('chai'), awsRequest = require('@serverless/test/aws-request'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration');
describe('Function\x20destinations\x20Integration\x20Test', function () {
    this['timeout']((-0x3a2 * 0x2 + -0xe * 0x178 + 0x1fbc) * (0x269 + -0xbd5 + -0xc * -0xce) * (-0x4 * -0x21d + 0x3ef * -0x5 + 0xb4b));
    let _0x2fdd7f, _0x55d857;
    const _0x14541a = 'dev';
    before(async () => {
        const _0x2f8c90 = await fixtures['setup']('functionDestinations');
        ({servicePath: _0x55d857} = _0x2f8c90);
        const _0x163bb3 = _0x2f8c90['serviceConfig']['service'];
        _0x2fdd7f = _0x163bb3 + '-' + _0x14541a, await deployService(_0x55d857);
    }), after(async () => {
        if (!_0x55d857)
            return;
        await removeService(_0x55d857);
    }), it('on\x20async\x20invoke\x20should\x20invoke\x20destination\x20target', async () => confirmCloudWatchLogs('/aws/lambda/' + _0x2fdd7f + '-target', async () => {
        await awsRequest('Lambda', 'invoke', {
            'FunctionName': _0x2fdd7f + '-trigger',
            'InvocationType': 'Event'
        });
    }, { 'checkIsComplete': _0x4cd6e0 => _0x4cd6e0['length'] })['then'](_0x5a8c1e => {
        expect(_0x5a8c1e['length'] > -0x1817 + -0xe42 + 0x2659)['to']['equal'](!![]);
    }));
});
