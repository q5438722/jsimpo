function _0x3259(_0x133ab9, _0x2d9c34) {
    return _0x3259 = function (_0xf0d719, _0x32594d) {
        _0xf0d719 = _0xf0d719 - 384;
        let _0x16a218 = _0xf0d7[_0xf0d719];
        return _0x16a218;
    }, _0x3259(_0x133ab9, _0x2d9c34);
}
const {expect} = require(_0x226ad3(395)), awsRequest = require(_0x226ad3(396)), fixtures = require(_0x226ad3(397)), {confirmCloudWatchLogs} = require(_0x226ad3(398)), {deployService, removeService} = require(_0x226ad3(399));
describe(_0x226ad3(400), function () {
    const _0x1b2013 = _0x226ad3;
    this[_0x1b2013(401)](1000 * 60 * 20);
    let _0x2f9fd5, _0x2f00f9;
    const _0x21d25a = _0x1b2013(402);
    before(async () => {
        const _0x110dbe = _0x1b2013, _0x154fb4 = await fixtures[_0x110dbe(403)]('functionDestinations');
        ({servicePath: _0x2f00f9} = _0x154fb4);
        const _0x9dc33a = _0x154fb4[_0x110dbe(404)][_0x110dbe(405)];
        _0x2f9fd5 = _0x9dc33a + '-' + _0x21d25a, await deployService(_0x2f00f9);
    }), after(async () => {
        if (!_0x2f00f9)
            return;
        await removeService(_0x2f00f9);
    }), it('on async invoke should invoke destination target', async () => confirmCloudWatchLogs(_0x1b2013(406) + _0x2f9fd5 + '-target', async () => {
        const _0x4520c6 = _0x1b2013;
        await awsRequest(_0x4520c6(407), _0x4520c6(408), {
            'FunctionName': _0x2f9fd5 + _0x4520c6(409),
            'InvocationType': _0x4520c6(410)
        });
    }, { 'checkIsComplete': _0x1d9146 => _0x1d9146[_0x1b2013(411)] })['then'](_0x36350f => {
        const _0x290021 = _0x1b2013;
        expect(_0x36350f[_0x290021(411)] > 0)['to']['equal'](!![]);
    }));
});