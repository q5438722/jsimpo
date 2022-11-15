'use strict';
const {expect} = require('chai');
const awsRequest = require('@serverless/test/aws-request');
const fixtures = require('../../fixtures/programmatic');
const {confirmCloudWatchLogs} = require('../../utils/misc');
const {deployService, removeService} = require('../../utils/integration');
describe('Function destinations Integration Test', function () {
    this['timeout'](_0x3781c7['rsetP'](1000, 60) * 20);
    let _0x28ba8;
    let _0x2bcaf4;
    const _0x33b8fb = 'dev';
    before(async () => {
        const _0x5c4a5 = await fixtures['setup']('functionDestinations');
        ({servicePath: _0x2bcaf4} = _0x5c4a5);
        const _0x58f60c = _0x5c4a5['serviceConfig']['service'];
        _0x28ba8 = _0x58f60c + '-' + _0x33b8fb;
        await deployService(_0x2bcaf4);
    });
    after(async () => {
        if (!_0x2bcaf4)
            return;
        await removeService(_0x2bcaf4);
    });
    it('on async invoke should invoke destination target', async () => confirmCloudWatchLogs('/aws/lambda/' + _0x28ba8 + '-target', async () => {
        await awsRequest('Lambda', 'invoke', {
            'FunctionName': _0x28ba8 + '-trigger',
            'InvocationType': 'Event'
        });
    }, { 'checkIsComplete': _0x105e96 => _0x105e96['length'] })['then'](_0x10d849 => {
        expect(_0x10d849['length'] > 0)['to']['equal'](!![]);
    }));
});