'use strict';
const WebSocket = require('ws'), {expect} = require('chai'), awsRequest = require('@serverless/test/aws-request'), log = require('log')['get']('serverless:test'), wait = require('timers-ext/promise/sleep'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require('../../utils/websocket');
describe('AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test', function () {
    this['timeout']((0x858 * 0x4 + -0x1 * -0x1d2 + 0x10b * -0x1e) * (0x18d + -0x1a6e + 0x85f * 0x3) * (0xd6e + -0x2c * 0x1a + -0x2 * 0x476));
    let _0x10c680, _0x3b8690, _0x56656e, _0x1d7682, _0x244929;
    const _0x5e294e = 'dev';
    before(async () => {
        const _0x3292c9 = await fixtures['setup']('websocket');
        return {
            servicePath: _0x56656e,
            updateConfig: _0x1d7682
        } = _0x3292c9, _0x3b8690 = _0x3292c9['serviceConfig']['service'], _0x10c680 = _0x3b8690 + '-' + _0x5e294e, deployService(_0x56656e);
    }), after(() => {
        if (!_0x244929)
            return null;
        return removeService(_0x56656e);
    });
    async function _0xbd95c3() {
        const _0x3ed699 = await awsRequest('CloudFormation', 'describeStacks', { 'StackName': _0x10c680 }), _0x4fe68d = _0x3ed699['Stacks'][0x1ea1 + -0xd * 0x287 + -0xf * -0x26]['Outputs']['find'](_0x28a4d8 => _0x28a4d8['OutputKey'] === 'ServiceEndpointWebsocket')['OutputValue'];
        return _0x4fe68d;
    }
    describe('Two-Way\x20Setup', () => {
        let _0x4c509f;
        after(() => clearTimeout(_0x4c509f)), it('should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message', async () => {
            const _0x4b50a5 = await _0xbd95c3();
            return new Promise((_0x2a23ab, _0x320a17) => {
                const _0x4d7d02 = new WebSocket(_0x4b50a5);
                _0x320a17 = (_0xd43774 => _0x5411e0 => {
                    _0xd43774(_0x5411e0);
                    try {
                        _0x4d7d02['close']();
                    } catch (_0x36c874) {
                    }
                })(_0x320a17);
                const _0x4661a6 = () => {
                    log['debug']('Sending\x20message\x20to\x20\x27hello\x27\x20route'), _0x4d7d02['send'](JSON['stringify']({
                        'action': 'hello',
                        'name': 'serverless'
                    })), _0x4c509f = setTimeout(_0x4661a6, 0x808 * 0x2 + 0x80f * 0x3 + 0x83 * -0x47);
                };
                _0x4d7d02['on']('error', _0x320a17), _0x4d7d02['on']('open', _0x4661a6), _0x4d7d02['on']('close', _0x2a23ab), _0x4d7d02['on']('message', _0x589c5f => {
                    _0x244929 = !![], clearTimeout(_0x4c509f);
                    try {
                        log['debug']('Received\x20WebSocket\x20message:\x20' + _0x589c5f), expect(_0x589c5f)['to']['equal']('Hello,\x20serverless');
                    } finally {
                        _0x4d7d02['close']();
                    }
                });
            })['finally'](() => clearTimeout(_0x4c509f));
        });
    }), describe('Minimal\x20Setup', () => {
        it('should\x20expose\x20an\x20accessible\x20websocket\x20endpoint', async function () {
            if (!_0x244929)
                this['skip']();
            const _0x5ab5b8 = await _0xbd95c3();
            return log['debug']('WebSocket\x20Server\x20URL\x20' + _0x5ab5b8), expect(_0x5ab5b8)['to']['match'](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x43a364, _0x23b341) => {
                const _0x61b243 = new WebSocket(_0x5ab5b8);
                let _0x455a7e = ![];
                _0x23b341 = (_0x1d521f => _0x3fa91d => {
                    _0x455a7e = !![], _0x1d521f(_0x3fa91d);
                    try {
                        _0x61b243['close']();
                    } catch (_0x463132) {
                    }
                })(_0x23b341), _0x61b243['on']('error', _0x23b341), _0x61b243['on']('open', () => {
                    confirmCloudWatchLogs('/aws/websocket/' + _0x10c680, () => {
                        if (_0x455a7e)
                            throw new Error('Stop\x20propagation');
                        return _0x61b243['send']('test\x20message'), wait(-0x20c * -0x3 + -0x10b5 + 0xc85);
                    })['then'](_0x421cae => {
                        expect(_0x421cae['length'] > -0xfa6 + 0x8b * -0x27 + 0x24d3)['to']['equal'](!![]), _0x61b243['close']();
                    }, _0x23b341);
                }), _0x61b243['on']('close', _0x43a364), _0x61b243['on']('message', _0x2e28f4 => {
                    log['debug']('Unexpected\x20WebSocket\x20message', _0x2e28f4), _0x23b341(new Error('Unexpected\x20message'));
                });
            });
        }), describe('when\x20using\x20an\x20existing\x20websocket\x20API', () => {
            let _0x5e9da3;
            before(async function () {
                if (!_0x244929)
                    this['skip']();
                const _0xc7aba4 = _0x5e294e + '-' + _0x3b8690 + '-ext-api', _0x4754af = await createApi(_0xc7aba4);
                return _0x5e9da3 = _0x4754af['ApiId'], await createStage(_0x5e9da3, 'dev'), await _0x1d7682({ 'provider': { 'apiGateway': { 'websocketApiId': _0x5e9da3 } } }), deployService(_0x56656e);
            }), after(async () => {
                if (!_0x244929)
                    return;
                await _0x1d7682({ 'provider': { 'apiGateway': { 'websocketApiId': null } } }), await deleteStage(_0x5e9da3, 'dev'), await deployService(_0x56656e), log['debug']('Deleting\x20external\x20websocket\x20API...'), await deleteApi(_0x5e9da3);
            }), it('should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API', async () => {
                const _0x12fe73 = await getRoutes(_0x5e9da3);
                expect(_0x12fe73['length'])['to']['equal'](0x10 * 0x7d + 0xe95 + -0x1661);
            });
        });
    });
});
