'use strict';
const _0x5236 = [
    'chai',
    '../../fixtures/programmatic',
    '../../utils/integration',
    'functionDestinations',
    'Lambda',
    'invoke',
    'Event',
    'VWkUm',
    'WARTo',
    'setup',
    'uuBDL',
    'serviceConfig',
    'service',
    'csTnI',
    'uXzCY',
    '/aws/lambda/',
    '-target',
    'tMkQB',
    'iMGiY',
    'siSnO',
    'length',
    'then',
    'BjTck',
    'dOded',
    'equal',
    '360295ykkJls',
    '362297rKOoVO',
    '421346zITvFd',
    '1302206DbjgMr',
    '39zCbVcB',
    '11013sDzLBV',
    '1010891AYjbYu',
    '1055gXcUcp',
    '1423xhVNJq'
];
const _0x45cb22 = _0x2fc9;
(function (_0xb9ee68, _0x3ff38c) {
    const _0x1a372d = _0x2fc9;
    while (!![]) {
        try {
            const _0x9113ab = parseInt(_0x1a372d(0x8c)) + parseInt(_0x1a372d(0x8d)) + -parseInt(_0x1a372d(0x8e)) + parseInt(_0x1a372d(0x8f)) + parseInt(_0x1a372d(0x90)) * -parseInt(_0x1a372d(0x91)) + parseInt(_0x1a372d(0x92)) + parseInt(_0x1a372d(0x93)) * -parseInt(_0x1a372d(0x94));
            if (_0x9113ab === _0x3ff38c)
                break;
            else
                _0xb9ee68['push'](_0xb9ee68['shift']());
        } catch (_0x12b0fc) {
            _0xb9ee68['push'](_0xb9ee68['shift']());
        }
    }
}(_0x5236, -0x1483b4 + -0x37c4 + 0x1f29ab));
const {expect} = require(_0x45cb22(0x95)), awsRequest = require('@serverless/test/aws-request'), fixtures = require(_0x45cb22(0x96)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x45cb22(0x97));
function _0x2fc9(_0x1501c5, _0x37f623) {
    return _0x2fc9 = function (_0xa8fdc2, _0x51926e) {
        _0xa8fdc2 = _0xa8fdc2 - (0x1 * 0x1423 + 0x704 * 0x2 + -0x219f);
        let _0x3e5044 = _0x5236[_0xa8fdc2];
        return _0x3e5044;
    }, _0x2fc9(_0x1501c5, _0x37f623);
}
describe('Function\x20destinations\x20Integration\x20Test', function () {
    const _0x1de6e6 = _0x45cb22, _0x3a012b = {
            'uuBDL': _0x1de6e6(0x98),
            'csTnI': function (_0x139319, _0x886206) {
                return _0x139319(_0x886206);
            },
            'tMkQB': function (_0x339200, _0x2b2134, _0x1c6ada, _0x56c58e) {
                return _0x339200(_0x2b2134, _0x1c6ada, _0x56c58e);
            },
            'iMGiY': _0x1de6e6(0x99),
            'XySyv': _0x1de6e6(0x9a),
            'siSnO': _0x1de6e6(0x9b),
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
            'xdIsy': 'on\x20async\x20invoke\x20should\x20invoke\x20destination\x20target'
        };
    this['timeout'](_0x3a012b[_0x1de6e6(0x9c)](_0x3a012b[_0x1de6e6(0x9c)](0x1 * -0x2361 + 0x598 + -0x21b1 * -0x1, -0x3df * 0x9 + -0x295 * 0xc + -0x3 * -0x1605), 0x2 * -0x1126 + -0x1 * -0x1475 + -0x1 * -0xdeb));
    let _0x3b3745, _0x4711d6;
    const _0x4ade8e = _0x3a012b[_0x1de6e6(0x9d)];
    before(async () => {
        const _0x5d2339 = _0x1de6e6, _0x22aa54 = await fixtures[_0x5d2339(0x9e)](_0x3a012b[_0x5d2339(0x9f)]);
        ({servicePath: _0x4711d6} = _0x22aa54);
        const _0x15759f = _0x22aa54[_0x5d2339(0xa0)][_0x5d2339(0xa1)];
        _0x3b3745 = _0x15759f + '-' + _0x4ade8e, await _0x3a012b[_0x5d2339(0xa2)](deployService, _0x4711d6);
    }), _0x3a012b['BjTck'](after, async () => {
        const _0x5b0969 = _0x1de6e6;
        if (!_0x4711d6)
            return;
        await _0x3a012b[_0x5b0969(0xa2)](removeService, _0x4711d6);
    }), _0x3a012b[_0x1de6e6(0xa3)](it, _0x3a012b['xdIsy'], async () => confirmCloudWatchLogs(_0x1de6e6(0xa4) + _0x3b3745 + _0x1de6e6(0xa5), async () => {
        const _0x53d37b = _0x1de6e6;
        await _0x3a012b[_0x53d37b(0xa6)](awsRequest, _0x3a012b[_0x53d37b(0xa7)], _0x3a012b['XySyv'], {
            'FunctionName': _0x3b3745 + '-trigger',
            'InvocationType': _0x3a012b[_0x53d37b(0xa8)]
        });
    }, { 'checkIsComplete': _0x1f01bb => _0x1f01bb[_0x1de6e6(0xa9)] })[_0x1de6e6(0xaa)](_0xb331e => {
        const _0x13c471 = _0x1de6e6;
        _0x3a012b[_0x13c471(0xab)](expect, _0x3a012b[_0x13c471(0xac)](_0xb331e[_0x13c471(0xa9)], -0x8ec * 0x1 + 0x3cd + 0x51f * 0x1))['to'][_0x13c471(0xad)](!![]);
    }));
});
