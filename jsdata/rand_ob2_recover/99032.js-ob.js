const WebSocket = require('ws'), {expect} = require('chai'), awsRequest = require(_0x11ee76(199)), log = require(_0x11ee76(200))['get']('serverless:test'), wait = require(_0x11ee76(201)), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require(_0x11ee76(202)), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x11ee76(203));
describe(_0x11ee76(204), function () {
    const _0x53960b = _0x11ee76;
    this[_0x53960b(205)](1000 * 60 * 10);
    let _0x14ff03, _0x45fa60, _0xf74a43, _0x5546c8, _0x886367;
    const _0x592d74 = _0x53960b(206);
    before(async () => {
        const _0x299755 = _0x53960b, _0x3e2e04 = await fixtures[_0x299755(207)](_0x299755(208));
        return {
            servicePath: _0xf74a43,
            updateConfig: _0x5546c8
        } = _0x3e2e04, _0x45fa60 = _0x3e2e04[_0x299755(209)][_0x299755(210)], _0x14ff03 = _0x45fa60 + '-' + _0x592d74, deployService(_0xf74a43);
    }), after(() => {
        if (!_0x886367)
            return null;
        return removeService(_0xf74a43);
    });
    async function _0xe0f675() {
        const _0x52940b = _0x53960b, _0x4087f4 = await awsRequest(_0x52940b(211), _0x52940b(212), { 'StackName': _0x14ff03 }), _0x2213a9 = _0x4087f4[_0x52940b(213)][0][_0x52940b(214)][_0x52940b(215)](_0x9fb475 => _0x9fb475[_0x52940b(216)] === _0x52940b(217))[_0x52940b(218)];
        return _0x2213a9;
    }
    describe('Two-Way Setup', () => {
        const _0x533dda = _0x53960b;
        let _0x55b4c0;
        after(() => clearTimeout(_0x55b4c0)), it(_0x533dda(219), async () => {
            const _0x340bc0 = _0x533dda, _0x149d0d = await _0xe0f675();
            return new Promise((_0x69e9a4, _0x593859) => {
                const _0x2b252d = _0x34fc, _0x1e62a4 = new WebSocket(_0x149d0d);
                _0x593859 = (_0x51fdc1 => _0x49de84 => {
                    const _0x24292b = _0x34fc;
                    _0x51fdc1(_0x49de84);
                    try {
                        _0x1e62a4[_0x24292b(220)]();
                    } catch (_0x3e5e63) {
                    }
                })(_0x593859);
                const _0xeee51b = () => {
                    const _0x55b56b = _0x34fc;
                    log['debug'](_0x55b56b(221)), _0x1e62a4['send'](JSON['stringify']({
                        'action': _0x55b56b(222),
                        'name': 'serverless'
                    })), _0x55b4c0 = setTimeout(_0xeee51b, 1000);
                };
                _0x1e62a4['on']('error', _0x593859), _0x1e62a4['on']('open', _0xeee51b), _0x1e62a4['on'](_0x2b252d(220), _0x69e9a4), _0x1e62a4['on'](_0x2b252d(223), _0x4da5e3 => {
                    const _0x5b9c88 = _0x2b252d;
                    _0x886367 = !![], clearTimeout(_0x55b4c0);
                    try {
                        log[_0x5b9c88(224)](_0x5b9c88(225) + _0x4da5e3), expect(_0x4da5e3)['to'][_0x5b9c88(226)](_0x5b9c88(227));
                    } finally {
                        _0x1e62a4[_0x5b9c88(220)]();
                    }
                });
            })[_0x340bc0(228)](() => clearTimeout(_0x55b4c0));
        });
    }), describe('Minimal Setup', () => {
        const _0x4b3018 = _0x53960b;
        it(_0x4b3018(229), async function () {
            const _0x1483cf = _0x4b3018;
            if (!_0x886367)
                this['skip']();
            const _0xc2b1db = await _0xe0f675();
            return log[_0x1483cf(224)](_0x1483cf(230) + _0xc2b1db), expect(_0xc2b1db)['to']['match'](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x36f9dd, _0x53f1e6) => {
                const _0x536465 = _0x1483cf, _0x37645c = new WebSocket(_0xc2b1db);
                let _0x139ddf = ![];
                _0x53f1e6 = (_0x4fecb4 => _0x75c221 => {
                    const _0x419bf9 = _0x34fc;
                    _0x139ddf = !![], _0x4fecb4(_0x75c221);
                    try {
                        _0x37645c[_0x419bf9(220)]();
                    } catch (_0xe441d4) {
                    }
                })(_0x53f1e6), _0x37645c['on']('error', _0x53f1e6), _0x37645c['on'](_0x536465(231), () => {
                    const _0x2e7145 = _0x536465;
                    confirmCloudWatchLogs('/aws/websocket/' + _0x14ff03, () => {
                        const _0x308e5f = _0x34fc;
                        if (_0x139ddf)
                            throw new Error(_0x308e5f(232));
                        return _0x37645c['send'](_0x308e5f(233)), wait(500);
                    })[_0x2e7145(234)](_0xffc547 => {
                        const _0xfa2480 = _0x2e7145;
                        expect(_0xffc547[_0xfa2480(235)] > 0)['to'][_0xfa2480(226)](!![]), _0x37645c[_0xfa2480(220)]();
                    }, _0x53f1e6);
                }), _0x37645c['on'](_0x536465(220), _0x36f9dd), _0x37645c['on'](_0x536465(223), _0x413065 => {
                    const _0x402ef0 = _0x536465;
                    log['debug'](_0x402ef0(236), _0x413065), _0x53f1e6(new Error(_0x402ef0(237)));
                });
            });
        }), describe('when using an existing websocket API', () => {
            const _0x3f5dae = _0x4b3018;
            let _0x1054aa;
            before(async function () {
                const _0x5122ef = _0x34fc;
                if (!_0x886367)
                    this[_0x5122ef(238)]();
                const _0x399e1f = _0x592d74 + '-' + _0x45fa60 + _0x5122ef(239), _0x2d7cc1 = await createApi(_0x399e1f);
                return _0x1054aa = _0x2d7cc1[_0x5122ef(240)], await createStage(_0x1054aa, _0x5122ef(206)), await _0x5546c8({ 'provider': { 'apiGateway': { 'websocketApiId': _0x1054aa } } }), deployService(_0xf74a43);
            }), after(async () => {
                const _0x3c57dd = _0x34fc;
                if (!_0x886367)
                    return;
                await _0x5546c8({ 'provider': { 'apiGateway': { 'websocketApiId': null } } }), await deleteStage(_0x1054aa, _0x3c57dd(206)), await deployService(_0xf74a43), log[_0x3c57dd(224)](_0x3c57dd(241)), await deleteApi(_0x1054aa);
            }), it(_0x3f5dae(242), async () => {
                const _0x3c7794 = _0x3f5dae, _0x1d4cfe = await getRoutes(_0x1054aa);
                expect(_0x1d4cfe[_0x3c7794(235)])['to']['equal'](4);
            });
        });
    });
});