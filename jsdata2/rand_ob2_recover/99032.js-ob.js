const WebSocket = require('ws'), {expect} = require(_0x3d6ae8(376)), awsRequest = require(_0x3d6ae8(377)), log = require('log')['get'](_0x3d6ae8(378)), wait = require('timers-ext/promise/sleep'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x3d6ae8(379)), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require('../../utils/websocket');
function _0xc9d2(_0x4e8802, _0x161f2f) {
    return _0xc9d2 = function (_0x41f5d6, _0xc9d265) {
        _0x41f5d6 = _0x41f5d6 - 366;
        let _0x244041 = _0x41f5[_0x41f5d6];
        return _0x244041;
    }, _0xc9d2(_0x4e8802, _0x161f2f);
}
describe(_0x3d6ae8(380), function () {
    const _0x5003f1 = _0x3d6ae8;
    this[_0x5003f1(381)](1000 * 60 * 10);
    let _0x55db2f, _0x9a7c22, _0x5328ae, _0x565f12, _0x17824d;
    const _0x524852 = 'dev';
    before(async () => {
        const _0x17636e = _0x5003f1, _0x5ca9c6 = await fixtures[_0x17636e(382)](_0x17636e(383));
        return {
            servicePath: _0x5328ae,
            updateConfig: _0x565f12
        } = _0x5ca9c6, _0x9a7c22 = _0x5ca9c6[_0x17636e(384)][_0x17636e(385)], _0x55db2f = _0x9a7c22 + '-' + _0x524852, deployService(_0x5328ae);
    }), after(() => {
        if (!_0x17824d)
            return null;
        return removeService(_0x5328ae);
    });
    async function _0x25c75d() {
        const _0x59ce46 = _0x5003f1, _0x443cd6 = await awsRequest(_0x59ce46(386), _0x59ce46(387), { 'StackName': _0x55db2f }), _0x52918b = _0x443cd6[_0x59ce46(388)][0]['Outputs'][_0x59ce46(389)](_0x4533aa => _0x4533aa[_0x59ce46(390)] === _0x59ce46(391))[_0x59ce46(392)];
        return _0x52918b;
    }
    describe(_0x5003f1(393), () => {
        let _0x18755b;
        after(() => clearTimeout(_0x18755b)), it('should expose a websocket route that can reply to a message', async () => {
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
                    log['debug'](_0x1157ff(394)), _0x28a2c2[_0x1157ff(395)](JSON[_0x1157ff(396)]({
                        'action': _0x1157ff(397),
                        'name': _0x1157ff(398)
                    })), _0x18755b = setTimeout(_0x5943aa, 1000);
                };
                _0x28a2c2['on'](_0x5e1586(399), _0x37f668), _0x28a2c2['on'](_0x5e1586(400), _0x5943aa), _0x28a2c2['on']('close', _0x14fb52), _0x28a2c2['on'](_0x5e1586(401), _0x581d58 => {
                    const _0x1df9e6 = _0x5e1586;
                    _0x17824d = !![], clearTimeout(_0x18755b);
                    try {
                        log[_0x1df9e6(402)](_0x1df9e6(403) + _0x581d58), expect(_0x581d58)['to'][_0x1df9e6(404)](_0x1df9e6(405));
                    } finally {
                        _0x28a2c2[_0x1df9e6(406)]();
                    }
                });
            })[_0x294ed8(407)](() => clearTimeout(_0x18755b));
        });
    }), describe(_0x5003f1(408), () => {
        const _0x22390e = _0x5003f1;
        it(_0x22390e(409), async function () {
            const _0x370627 = _0x22390e;
            if (!_0x17824d)
                this[_0x370627(410)]();
            const _0x4f2331 = await _0x25c75d();
            return log[_0x370627(402)](_0x370627(411) + _0x4f2331), expect(_0x4f2331)['to'][_0x370627(412)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x2f556e, _0x4f3235) => {
                const _0x4c1229 = _0x370627, _0x55208a = new WebSocket(_0x4f2331);
                let _0x28d24b = ![];
                _0x4f3235 = (_0x31b748 => _0x4bfc3 => {
                    const _0x140469 = _0xc9d2;
                    _0x28d24b = !![], _0x31b748(_0x4bfc3);
                    try {
                        _0x55208a[_0x140469(406)]();
                    } catch (_0xaa4e45) {
                    }
                })(_0x4f3235), _0x55208a['on']('error', _0x4f3235), _0x55208a['on'](_0x4c1229(400), () => {
                    const _0x25a7e9 = _0x4c1229;
                    confirmCloudWatchLogs('/aws/websocket/' + _0x55db2f, () => {
                        const _0x17e1b0 = _0xc9d2;
                        if (_0x28d24b)
                            throw new Error(_0x17e1b0(413));
                        return _0x55208a[_0x17e1b0(395)]('test message'), wait(500);
                    })[_0x25a7e9(414)](_0x21f1c6 => {
                        const _0x41b67e = _0x25a7e9;
                        expect(_0x21f1c6[_0x41b67e(415)] > 0)['to']['equal'](!![]), _0x55208a[_0x41b67e(406)]();
                    }, _0x4f3235);
                }), _0x55208a['on']('close', _0x2f556e), _0x55208a['on'](_0x4c1229(401), _0x905559 => {
                    const _0x1eebc9 = _0x4c1229;
                    log[_0x1eebc9(402)](_0x1eebc9(416), _0x905559), _0x4f3235(new Error('Unexpected message'));
                });
            });
        }), describe('when using an existing websocket API', () => {
            const _0x49a52c = _0x22390e;
            let _0x301663;
            before(async function () {
                const _0x459d23 = _0xc9d2;
                if (!_0x17824d)
                    this['skip']();
                const _0x42a91f = _0x524852 + '-' + _0x9a7c22 + _0x459d23(417), _0xe21e35 = await createApi(_0x42a91f);
                return _0x301663 = _0xe21e35[_0x459d23(418)], await createStage(_0x301663, _0x459d23(419)), await _0x565f12({ 'provider': { 'apiGateway': { 'websocketApiId': _0x301663 } } }), deployService(_0x5328ae);
            }), after(async () => {
                const _0x330bf4 = _0xc9d2;
                if (!_0x17824d)
                    return;
                await _0x565f12({ 'provider': { 'apiGateway': { 'websocketApiId': null } } }), await deleteStage(_0x301663, _0x330bf4(419)), await deployService(_0x5328ae), log['debug']('Deleting external websocket API...'), await deleteApi(_0x301663);
            }), it(_0x49a52c(420), async () => {
                const _0x5d7a50 = _0x49a52c, _0x32f7a2 = await getRoutes(_0x301663);
                expect(_0x32f7a2[_0x5d7a50(415)])['to'][_0x5d7a50(404)](4);
            });
        });
    });
});