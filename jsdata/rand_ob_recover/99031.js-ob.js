const {expect} = require(_0x45cb22(149)), awsRequest = require('@serverless/test/aws-request'), fixtures = require(_0x45cb22(150)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x45cb22(151));
function _0x2fc9(_0x1501c5, _0x37f623) {
    return _0x2fc9 = function (_0xa8fdc2, _0x51926e) {
        _0xa8fdc2 = _0xa8fdc2 - (1 * 5155 + 1796 * 2 + -8607);
        let _0x3e5044 = _0x5236[_0xa8fdc2];
        return _0x3e5044;
    }, _0x2fc9(_0x1501c5, _0x37f623);
}
describe('Function destinations Integration Test', function () {
    const _0x1de6e6 = _0x45cb22, _0x3a012b = {
            'uuBDL': _0x1de6e6(152),
            'csTnI': function (_0x139319, _0x886206) {
                return _0x139319(_0x886206);
            },
            'tMkQB': function (_0x339200, _0x2b2134, _0x1c6ada, _0x56c58e) {
                return _0x339200(_0x2b2134, _0x1c6ada, _0x56c58e);
            },
            'iMGiY': _0x1de6e6(153),
            'XySyv': _0x1de6e6(154),
            'siSnO': _0x1de6e6(155),
            'BjTck': function (_0x5ede47, _0x4fd6fe) {
                return _0x5ede47(_0x4fd6fe);
            },
            'dOded': function (_0x780478, _0x361c32) {
                return _0x780478 > _0x361c32;
            },
            'VWkUm': function (_0xf2e62b, _0x87c9b) {
                return _0xf2e62b * _0x87c9b;
            },
            'WARTo': 'dev',
            'uXzCY': function (_0x515c7b, _0x47ceef, _0x30c7ec) {
                return _0x515c7b(_0x47ceef, _0x30c7ec);
            },
            'xdIsy': 'on async invoke should invoke destination target'
        };
    this['timeout'](_0x3a012b[_0x1de6e6(156)](_0x3a012b[_0x1de6e6(156)](1 * -9057 + 1432 + -8625 * -1, -991 * 9 + -661 * 12 + -3 * -5637), 2 * -4390 + -1 * -5237 + -1 * -3563));
    let _0x3b3745, _0x4711d6;
    const _0x4ade8e = _0x3a012b[_0x1de6e6(157)];
    before(async () => {
        const _0x5d2339 = _0x1de6e6, _0x22aa54 = await fixtures[_0x5d2339(158)](_0x3a012b[_0x5d2339(159)]);
        ({servicePath: _0x4711d6} = _0x22aa54);
        const _0x15759f = _0x22aa54[_0x5d2339(160)][_0x5d2339(161)];
        _0x3b3745 = _0x15759f + '-' + _0x4ade8e, await _0x3a012b[_0x5d2339(162)](deployService, _0x4711d6);
    }), _0x3a012b['BjTck'](after, async () => {
        const _0x5b0969 = _0x1de6e6;
        if (!_0x4711d6)
            return;
        await _0x3a012b[_0x5b0969(162)](removeService, _0x4711d6);
    }), _0x3a012b[_0x1de6e6(163)](it, _0x3a012b['xdIsy'], async () => confirmCloudWatchLogs(_0x1de6e6(164) + _0x3b3745 + _0x1de6e6(165), async () => {
        const _0x53d37b = _0x1de6e6;
        await _0x3a012b[_0x53d37b(166)](awsRequest, _0x3a012b[_0x53d37b(167)], _0x3a012b['XySyv'], {
            'FunctionName': _0x3b3745 + '-trigger',
            'InvocationType': _0x3a012b[_0x53d37b(168)]
        });
    }, { 'checkIsComplete': _0x1f01bb => _0x1f01bb[_0x1de6e6(169)] })[_0x1de6e6(170)](_0xb331e => {
        const _0x13c471 = _0x1de6e6;
        _0x3a012b[_0x13c471(171)](expect, _0x3a012b[_0x13c471(172)](_0xb331e[_0x13c471(169)], -2284 * 1 + 973 + 1311 * 1))['to'][_0x13c471(173)](!![]);
    }));
});