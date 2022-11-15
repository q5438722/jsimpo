'use strict';
const _0x41f5 = [
    'ServiceEndpointWebsocket',
    'OutputValue',
    'Two-Way\x20Setup',
    'Sending\x20message\x20to\x20\x27hello\x27\x20route',
    'send',
    'stringify',
    'hello',
    'serverless',
    'error',
    'open',
    'message',
    'debug',
    'Received\x20WebSocket\x20message:\x20',
    'equal',
    'Hello,\x20serverless',
    'close',
    'finally',
    'Minimal\x20Setup',
    'should\x20expose\x20an\x20accessible\x20websocket\x20endpoint',
    'skip',
    'WebSocket\x20Server\x20URL\x20',
    'match',
    'Stop\x20propagation',
    'then',
    'length',
    'Unexpected\x20WebSocket\x20message',
    '-ext-api',
    'ApiId',
    'dev',
    'should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API',
    '193417BBNHgF',
    '471332gVTMcs',
    '1547491uoBfUv',
    '88453TXQQLm',
    '1nfwZoE',
    '451fHjgmm',
    '3454bbBoWi',
    '5999SPwmWp',
    '179urvsPH',
    '112043ZXEGyP',
    'chai',
    '@serverless/test/aws-request',
    'serverless:test',
    '../../utils/integration',
    'AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test',
    'timeout',
    'setup',
    'websocket',
    'serviceConfig',
    'service',
    'CloudFormation',
    'describeStacks',
    'Stacks',
    'find',
    'OutputKey'
];
const _0x3d6ae8 = _0xc9d2;
(function (_0x2f24a1, _0x3a215a) {
    const _0x2f9370 = _0xc9d2;
    while (!![]) {
        try {
            const _0x2c9c8f = parseInt(_0x2f9370(0x16e)) + -parseInt(_0x2f9370(0x16f)) + parseInt(_0x2f9370(0x170)) + -parseInt(_0x2f9370(0x171)) * -parseInt(_0x2f9370(0x172)) + parseInt(_0x2f9370(0x173)) * -parseInt(_0x2f9370(0x174)) + -parseInt(_0x2f9370(0x175)) * -parseInt(_0x2f9370(0x176)) + parseInt(_0x2f9370(0x177));
            if (_0x2c9c8f === _0x3a215a)
                break;
            else
                _0x2f24a1['push'](_0x2f24a1['shift']());
        } catch (_0x67b962) {
            _0x2f24a1['push'](_0x2f24a1['shift']());
        }
    }
}(_0x41f5, 0xf0c1b));
const WebSocket = require('ws'), {expect} = require(_0x3d6ae8(0x178)), awsRequest = require(_0x3d6ae8(0x179)), log = require('log')['get'](_0x3d6ae8(0x17a)), wait = require('timers-ext/promise/sleep'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x3d6ae8(0x17b)), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require('../../utils/websocket');
function _0xc9d2(_0x4e8802, _0x161f2f) {
    return _0xc9d2 = function (_0x41f5d6, _0xc9d265) {
        _0x41f5d6 = _0x41f5d6 - 0x16e;
        let _0x244041 = _0x41f5[_0x41f5d6];
        return _0x244041;
    }, _0xc9d2(_0x4e8802, _0x161f2f);
}
describe(_0x3d6ae8(0x17c), function () {
    const _0x5003f1 = _0x3d6ae8;
    this[_0x5003f1(0x17d)](0x3e8 * 0x3c * 0xa);
    let _0x55db2f, _0x9a7c22, _0x5328ae, _0x565f12, _0x17824d;
    const _0x524852 = 'dev';
    before(async () => {
        const _0x17636e = _0x5003f1, _0x5ca9c6 = await fixtures[_0x17636e(0x17e)](_0x17636e(0x17f));
        return {
            servicePath: _0x5328ae,
            updateConfig: _0x565f12
        } = _0x5ca9c6, _0x9a7c22 = _0x5ca9c6[_0x17636e(0x180)][_0x17636e(0x181)], _0x55db2f = _0x9a7c22 + '-' + _0x524852, deployService(_0x5328ae);
    }), after(() => {
        if (!_0x17824d)
            return null;
        return removeService(_0x5328ae);
    });
    async function _0x25c75d() {
        const _0x59ce46 = _0x5003f1, _0x443cd6 = await awsRequest(_0x59ce46(0x182), _0x59ce46(0x183), { 'StackName': _0x55db2f }), _0x52918b = _0x443cd6[_0x59ce46(0x184)][0x0]['Outputs'][_0x59ce46(0x185)](_0x4533aa => _0x4533aa[_0x59ce46(0x186)] === _0x59ce46(0x187))[_0x59ce46(0x188)];
        return _0x52918b;
    }
    describe(_0x5003f1(0x189), () => {
        let _0x18755b;
        after(() => clearTimeout(_0x18755b)), it('should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message', async () => {
            const _0x294ed8 = _0xc9d2, _0x53625a = await _0x25c75d();
            return new Promise((_0x14fb52, _0x37f668) => {
                const _0x5e1586 = _0xc9d2, _0x28a2c2 = new WebSocket(_0x53625a);
                _0x37f668 = (_0x1580b8 => _0x51bab4 => {
                    _0x1580b8(_0x51bab4);
                    try {
                        _0x28a2c2['close']();
                    } catch (_0x13d4e4) {
                    }
                })(_0x37f668);
                const _0x5943aa = () => {
                    const _0x1157ff = _0xc9d2;
                    log['debug'](_0x1157ff(0x18a)), _0x28a2c2[_0x1157ff(0x18b)](JSON[_0x1157ff(0x18c)]({
                        'action': _0x1157ff(0x18d),
                        'name': _0x1157ff(0x18e)
                    })), _0x18755b = setTimeout(_0x5943aa, 0x3e8);
                };
                _0x28a2c2['on'](_0x5e1586(0x18f), _0x37f668), _0x28a2c2['on'](_0x5e1586(0x190), _0x5943aa), _0x28a2c2['on']('close', _0x14fb52), _0x28a2c2['on'](_0x5e1586(0x191), _0x581d58 => {
                    const _0x1df9e6 = _0x5e1586;
                    _0x17824d = !![], clearTimeout(_0x18755b);
                    try {
                        log[_0x1df9e6(0x192)](_0x1df9e6(0x193) + _0x581d58), expect(_0x581d58)['to'][_0x1df9e6(0x194)](_0x1df9e6(0x195));
                    } finally {
                        _0x28a2c2[_0x1df9e6(0x196)]();
                    }
                });
            })[_0x294ed8(0x197)](() => clearTimeout(_0x18755b));
        });
    }), describe(_0x5003f1(0x198), () => {
        const _0x22390e = _0x5003f1;
        it(_0x22390e(0x199), async function () {
            const _0x370627 = _0x22390e;
            if (!_0x17824d)
                this[_0x370627(0x19a)]();
            const _0x4f2331 = await _0x25c75d();
            return log[_0x370627(0x192)](_0x370627(0x19b) + _0x4f2331), expect(_0x4f2331)['to'][_0x370627(0x19c)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x2f556e, _0x4f3235) => {
                const _0x4c1229 = _0x370627, _0x55208a = new WebSocket(_0x4f2331);
                let _0x28d24b = ![];
                _0x4f3235 = (_0x31b748 => _0x4bfc3 => {
                    const _0x140469 = _0xc9d2;
                    _0x28d24b = !![], _0x31b748(_0x4bfc3);
                    try {
                        _0x55208a[_0x140469(0x196)]();
                    } catch (_0xaa4e45) {
                    }
                })(_0x4f3235), _0x55208a['on']('error', _0x4f3235), _0x55208a['on'](_0x4c1229(0x190), () => {
                    const _0x25a7e9 = _0x4c1229;
                    confirmCloudWatchLogs('/aws/websocket/' + _0x55db2f, () => {
                        const _0x17e1b0 = _0xc9d2;
                        if (_0x28d24b)
                            throw new Error(_0x17e1b0(0x19d));
                        return _0x55208a[_0x17e1b0(0x18b)]('test\x20message'), wait(0x1f4);
                    })[_0x25a7e9(0x19e)](_0x21f1c6 => {
                        const _0x41b67e = _0x25a7e9;
                        expect(_0x21f1c6[_0x41b67e(0x19f)] > 0x0)['to']['equal'](!![]), _0x55208a[_0x41b67e(0x196)]();
                    }, _0x4f3235);
                }), _0x55208a['on']('close', _0x2f556e), _0x55208a['on'](_0x4c1229(0x191), _0x905559 => {
                    const _0x1eebc9 = _0x4c1229;
                    log[_0x1eebc9(0x192)](_0x1eebc9(0x1a0), _0x905559), _0x4f3235(new Error('Unexpected\x20message'));
                });
            });
        }), describe('when\x20using\x20an\x20existing\x20websocket\x20API', () => {
            const _0x49a52c = _0x22390e;
            let _0x301663;
            before(async function () {
                const _0x459d23 = _0xc9d2;
                if (!_0x17824d)
                    this['skip']();
                const _0x42a91f = _0x524852 + '-' + _0x9a7c22 + _0x459d23(0x1a1), _0xe21e35 = await createApi(_0x42a91f);
                return _0x301663 = _0xe21e35[_0x459d23(0x1a2)], await createStage(_0x301663, _0x459d23(0x1a3)), await _0x565f12({ 'provider': { 'apiGateway': { 'websocketApiId': _0x301663 } } }), deployService(_0x5328ae);
            }), after(async () => {
                const _0x330bf4 = _0xc9d2;
                if (!_0x17824d)
                    return;
                await _0x565f12({ 'provider': { 'apiGateway': { 'websocketApiId': null } } }), await deleteStage(_0x301663, _0x330bf4(0x1a3)), await deployService(_0x5328ae), log['debug']('Deleting\x20external\x20websocket\x20API...'), await deleteApi(_0x301663);
            }), it(_0x49a52c(0x1a4), async () => {
                const _0x5d7a50 = _0x49a52c, _0x32f7a2 = await getRoutes(_0x301663);
                expect(_0x32f7a2[_0x5d7a50(0x19f)])['to'][_0x5d7a50(0x194)](0x4);
            });
        });
    });
});
