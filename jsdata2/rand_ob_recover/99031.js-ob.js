function _0x3d82(_0x1f1b8c, _0x4c1825) {
    return _0x3d82 = function (_0x322d7e, _0x167147) {
        _0x322d7e = _0x322d7e - (1728 + 1 * 1059 + -2563);
        let _0x17ffb2 = _0x5473[_0x322d7e];
        return _0x17ffb2;
    }, _0x3d82(_0x1f1b8c, _0x4c1825);
}
const {expect} = require(_0x24c3a1(235)), awsRequest = require('@serverless/test/aws-request'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require(_0x24c3a1(236)), {deployService, removeService} = require('../../utils/integration');
describe('Function destinations Integration Test', function () {
    const _0x367589 = _0x24c3a1, _0x51a92f = {
            'YBmHq': _0x367589(237),
            'vBSFt': function (_0x5a53a1, _0x3329c5) {
                return _0x5a53a1(_0x3329c5);
            },
            'IyXdE': function (_0x291919, _0x5aac76, _0x1a97db, _0x5bd060) {
                return _0x291919(_0x5aac76, _0x1a97db, _0x5bd060);
            },
            'BBUtv': _0x367589(238),
            'Ibdxh': _0x367589(239),
            'UIzhq': 'Event',
            'GOncY': function (_0x2e2daa, _0x42a82a) {
                return _0x2e2daa > _0x42a82a;
            },
            'GfFwr': function (_0x3f3f0e, _0x173416) {
                return _0x3f3f0e * _0x173416;
            },
            'XBxos': 'dev',
            'KmPLh': function (_0x3db590, _0x56a6ec) {
                return _0x3db590(_0x56a6ec);
            },
            'ODylK': function (_0xc4b0de, _0x334477, _0x285742) {
                return _0xc4b0de(_0x334477, _0x285742);
            },
            'DBYVc': _0x367589(240)
        };
    this[_0x367589(241)](_0x51a92f[_0x367589(242)](_0x51a92f[_0x367589(242)](1 * 8765 + -1226 + -13 * 503, -277 * -2 + 7233 + -1 * 7727), 11 * 866 + 878 + -10384));
    let _0x349b0b, _0x1976e4;
    const _0x2a1be9 = _0x51a92f[_0x367589(243)];
    _0x51a92f[_0x367589(244)](before, async () => {
        const _0x298102 = _0x367589, _0x280621 = await fixtures[_0x298102(245)](_0x51a92f[_0x298102(246)]);
        ({servicePath: _0x1976e4} = _0x280621);
        const _0xec3199 = _0x280621[_0x298102(247)][_0x298102(248)];
        _0x349b0b = _0xec3199 + '-' + _0x2a1be9, await _0x51a92f['vBSFt'](deployService, _0x1976e4);
    }), _0x51a92f[_0x367589(244)](after, async () => {
        const _0x8c708c = _0x367589;
        if (!_0x1976e4)
            return;
        await _0x51a92f[_0x8c708c(249)](removeService, _0x1976e4);
    }), _0x51a92f[_0x367589(250)](it, _0x51a92f[_0x367589(251)], async () => confirmCloudWatchLogs('/aws/lambda/' + _0x349b0b + _0x367589(252), async () => {
        const _0x1ceea1 = _0x367589;
        await _0x51a92f[_0x1ceea1(253)](awsRequest, _0x51a92f[_0x1ceea1(254)], _0x51a92f['Ibdxh'], {
            'FunctionName': _0x349b0b + _0x1ceea1(255),
            'InvocationType': _0x51a92f['UIzhq']
        });
    }, { 'checkIsComplete': _0x1deeb1 => _0x1deeb1['length'] })[_0x367589(256)](_0x260073 => {
        const _0x3b5243 = _0x367589;
        expect(_0x51a92f['GOncY'](_0x260073[_0x3b5243(257)], -35 * 145 + 7544 + -2469))['to'][_0x3b5243(258)](!![]);
    }));
});