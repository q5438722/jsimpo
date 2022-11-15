'use strict';
const _0xbeba = [
    '@serverless/test/aws-request',
    'log',
    'timers-ext/promise/sleep',
    '../../utils/misc',
    '../../utils/websocket',
    'AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test',
    'timeout',
    'dev',
    'setup',
    'websocket',
    'serviceConfig',
    'service',
    'CloudFormation',
    'describeStacks',
    'Stacks',
    'Outputs',
    'find',
    'OutputKey',
    'ServiceEndpointWebsocket',
    'OutputValue',
    'should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message',
    'close',
    'Sending\x20message\x20to\x20\x27hello\x27\x20route',
    'hello',
    'message',
    'debug',
    'Received\x20WebSocket\x20message:\x20',
    'equal',
    'Hello,\x20serverless',
    'finally',
    'should\x20expose\x20an\x20accessible\x20websocket\x20endpoint',
    'WebSocket\x20Server\x20URL\x20',
    'open',
    'Stop\x20propagation',
    'test\x20message',
    'then',
    'length',
    'Unexpected\x20WebSocket\x20message',
    'Unexpected\x20message',
    'skip',
    '-ext-api',
    'ApiId',
    'Deleting\x20external\x20websocket\x20API...',
    'should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API',
    '2PjlWem',
    '331013LixOgE',
    '7GNRUjI',
    '67001YcqEzA',
    '769759pbyxXi',
    '4KLOKNd',
    '253050IIMmvq',
    '3065SgjgEk',
    '105OVJOCj',
    '800859NYYDzf',
    '111HJcWZH',
    '5285cAlrsg'
];
function _0x34fc(_0x5baeb4, _0x302ef7) {
    return _0x34fc = function (_0xbeba45, _0x34fcb8) {
        _0xbeba45 = _0xbeba45 - 0xbb;
        let _0x2cfcaa = _0xbeba[_0xbeba45];
        return _0x2cfcaa;
    }, _0x34fc(_0x5baeb4, _0x302ef7);
}
const _0x11ee76 = _0x34fc;
(function (_0x2cbbf1, _0x1a0a6b) {
    const _0x4f1def = _0x34fc;
    while (!![]) {
        try {
            const _0x1d9223 = parseInt(_0x4f1def(0xbb)) * -parseInt(_0x4f1def(0xbc)) + -parseInt(_0x4f1def(0xbd)) * -parseInt(_0x4f1def(0xbe)) + -parseInt(_0x4f1def(0xbf)) + -parseInt(_0x4f1def(0xc0)) * -parseInt(_0x4f1def(0xc1)) + -parseInt(_0x4f1def(0xc2)) * -parseInt(_0x4f1def(0xc3)) + parseInt(_0x4f1def(0xc4)) + -parseInt(_0x4f1def(0xc5)) * parseInt(_0x4f1def(0xc6));
            if (_0x1d9223 === _0x1a0a6b)
                break;
            else
                _0x2cbbf1['push'](_0x2cbbf1['shift']());
        } catch (_0x10efa4) {
            _0x2cbbf1['push'](_0x2cbbf1['shift']());
        }
    }
}(_0xbeba, 0x8eeff));
const WebSocket = require('ws'), {expect} = require('chai'), awsRequest = require(_0x11ee76(0xc7)), log = require(_0x11ee76(0xc8))['get']('serverless:test'), wait = require(_0x11ee76(0xc9)), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require(_0x11ee76(0xca)), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x11ee76(0xcb));
describe(_0x11ee76(0xcc), function () {
    const _0x53960b = _0x11ee76;
    this[_0x53960b(0xcd)](0x3e8 * 0x3c * 0xa);
    let _0x14ff03, _0x45fa60, _0xf74a43, _0x5546c8, _0x886367;
    const _0x592d74 = _0x53960b(0xce);
    before(async () => {
        const _0x299755 = _0x53960b, _0x3e2e04 = await fixtures[_0x299755(0xcf)](_0x299755(0xd0));
        return {
            servicePath: _0xf74a43,
            updateConfig: _0x5546c8
        } = _0x3e2e04, _0x45fa60 = _0x3e2e04[_0x299755(0xd1)][_0x299755(0xd2)], _0x14ff03 = _0x45fa60 + '-' + _0x592d74, deployService(_0xf74a43);
    }), after(() => {
        if (!_0x886367)
            return null;
        return removeService(_0xf74a43);
    });
    async function _0xe0f675() {
        const _0x52940b = _0x53960b, _0x4087f4 = await awsRequest(_0x52940b(0xd3), _0x52940b(0xd4), { 'StackName': _0x14ff03 }), _0x2213a9 = _0x4087f4[_0x52940b(0xd5)][0x0][_0x52940b(0xd6)][_0x52940b(0xd7)](_0x9fb475 => _0x9fb475[_0x52940b(0xd8)] === _0x52940b(0xd9))[_0x52940b(0xda)];
        return _0x2213a9;
    }
    describe('Two-Way\x20Setup', () => {
        const _0x533dda = _0x53960b;
        let _0x55b4c0;
        after(() => clearTimeout(_0x55b4c0)), it(_0x533dda(0xdb), async () => {
            const _0x340bc0 = _0x533dda, _0x149d0d = await _0xe0f675();
            return new Promise((_0x69e9a4, _0x593859) => {
                const _0x2b252d = _0x34fc, _0x1e62a4 = new WebSocket(_0x149d0d);
                _0x593859 = (_0x51fdc1 => _0x49de84 => {
                    const _0x24292b = _0x34fc;
                    _0x51fdc1(_0x49de84);
                    try {
                        _0x1e62a4[_0x24292b(0xdc)]();
                    } catch (_0x3e5e63) {
                    }
                })(_0x593859);
                const _0xeee51b = () => {
                    const _0x55b56b = _0x34fc;
                    log['debug'](_0x55b56b(0xdd)), _0x1e62a4['send'](JSON['stringify']({
                        'action': _0x55b56b(0xde),
                        'name': 'serverless'
                    })), _0x55b4c0 = setTimeout(_0xeee51b, 0x3e8);
                };
                _0x1e62a4['on']('error', _0x593859), _0x1e62a4['on']('open', _0xeee51b), _0x1e62a4['on'](_0x2b252d(0xdc), _0x69e9a4), _0x1e62a4['on'](_0x2b252d(0xdf), _0x4da5e3 => {
                    const _0x5b9c88 = _0x2b252d;
                    _0x886367 = !![], clearTimeout(_0x55b4c0);
                    try {
                        log[_0x5b9c88(0xe0)](_0x5b9c88(0xe1) + _0x4da5e3), expect(_0x4da5e3)['to'][_0x5b9c88(0xe2)](_0x5b9c88(0xe3));
                    } finally {
                        _0x1e62a4[_0x5b9c88(0xdc)]();
                    }
                });
            })[_0x340bc0(0xe4)](() => clearTimeout(_0x55b4c0));
        });
    }), describe('Minimal\x20Setup', () => {
        const _0x4b3018 = _0x53960b;
        it(_0x4b3018(0xe5), async function () {
            const _0x1483cf = _0x4b3018;
            if (!_0x886367)
                this['skip']();
            const _0xc2b1db = await _0xe0f675();
            return log[_0x1483cf(0xe0)](_0x1483cf(0xe6) + _0xc2b1db), expect(_0xc2b1db)['to']['match'](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x36f9dd, _0x53f1e6) => {
                const _0x536465 = _0x1483cf, _0x37645c = new WebSocket(_0xc2b1db);
                let _0x139ddf = ![];
                _0x53f1e6 = (_0x4fecb4 => _0x75c221 => {
                    const _0x419bf9 = _0x34fc;
                    _0x139ddf = !![], _0x4fecb4(_0x75c221);
                    try {
                        _0x37645c[_0x419bf9(0xdc)]();
                    } catch (_0xe441d4) {
                    }
                })(_0x53f1e6), _0x37645c['on']('error', _0x53f1e6), _0x37645c['on'](_0x536465(0xe7), () => {
                    const _0x2e7145 = _0x536465;
                    confirmCloudWatchLogs('/aws/websocket/' + _0x14ff03, () => {
                        const _0x308e5f = _0x34fc;
                        if (_0x139ddf)
                            throw new Error(_0x308e5f(0xe8));
                        return _0x37645c['send'](_0x308e5f(0xe9)), wait(0x1f4);
                    })[_0x2e7145(0xea)](_0xffc547 => {
                        const _0xfa2480 = _0x2e7145;
                        expect(_0xffc547[_0xfa2480(0xeb)] > 0x0)['to'][_0xfa2480(0xe2)](!![]), _0x37645c[_0xfa2480(0xdc)]();
                    }, _0x53f1e6);
                }), _0x37645c['on'](_0x536465(0xdc), _0x36f9dd), _0x37645c['on'](_0x536465(0xdf), _0x413065 => {
                    const _0x402ef0 = _0x536465;
                    log['debug'](_0x402ef0(0xec), _0x413065), _0x53f1e6(new Error(_0x402ef0(0xed)));
                });
            });
        }), describe('when\x20using\x20an\x20existing\x20websocket\x20API', () => {
            const _0x3f5dae = _0x4b3018;
            let _0x1054aa;
            before(async function () {
                const _0x5122ef = _0x34fc;
                if (!_0x886367)
                    this[_0x5122ef(0xee)]();
                const _0x399e1f = _0x592d74 + '-' + _0x45fa60 + _0x5122ef(0xef), _0x2d7cc1 = await createApi(_0x399e1f);
                return _0x1054aa = _0x2d7cc1[_0x5122ef(0xf0)], await createStage(_0x1054aa, _0x5122ef(0xce)), await _0x5546c8({ 'provider': { 'apiGateway': { 'websocketApiId': _0x1054aa } } }), deployService(_0xf74a43);
            }), after(async () => {
                const _0x3c57dd = _0x34fc;
                if (!_0x886367)
                    return;
                await _0x5546c8({ 'provider': { 'apiGateway': { 'websocketApiId': null } } }), await deleteStage(_0x1054aa, _0x3c57dd(0xce)), await deployService(_0xf74a43), log[_0x3c57dd(0xe0)](_0x3c57dd(0xf1)), await deleteApi(_0x1054aa);
            }), it(_0x3f5dae(0xf2), async () => {
                const _0x3c7794 = _0x3f5dae, _0x1d4cfe = await getRoutes(_0x1054aa);
                expect(_0x1d4cfe[_0x3c7794(0xeb)])['to']['equal'](0x4);
            });
        });
    });
});
