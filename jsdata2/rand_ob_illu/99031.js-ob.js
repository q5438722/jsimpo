'use strict';

const _0x5473 = ['-target', 'IyXdE', 'BBUtv', '-trigger', 'then', 'length', 'equal', '1092976PZpgUR', '824542iMqmIJ', '778993iqQHCk', '1YNpJHk', '1075376YyuGrW', '1kYiYBn', '1439090ONzjHH', '41518pujtaM', '22tEwcrE', '1bxavrs', '975160dZTYYv', 'chai', '../../utils/misc', 'functionDestinations', 'Lambda', 'invoke', 'on async invoke should invoke destination target', 'timeout', 'GfFwr', 'XBxos', 'KmPLh', 'setup', 'YBmHq', 'serviceConfig', 'service', 'vBSFt', 'ODylK', 'DBYVc'];
const _0x24c3a1 = _0x3d82;

(function (_0x369f0c, _0x4b8cd2) {
    const _0x5e829e = _0x3d82;

    while (true) {
        try {
            const _0x2f04fd = parseInt(_0x5e829e(0xe0)) + -parseInt(_0x5e829e(0xe1)) + parseInt(_0x5e829e(0xe2)) * parseInt(_0x5e829e(0xe3)) + -parseInt(_0x5e829e(0xe4)) * -parseInt(_0x5e829e(0xe5)) + -parseInt(_0x5e829e(0xe6)) + -parseInt(_0x5e829e(0xe7)) * parseInt(_0x5e829e(0xe8)) + parseInt(_0x5e829e(0xe9)) * parseInt(_0x5e829e(0xea));

            if (_0x2f04fd === _0x4b8cd2) break;else _0x369f0c.push(_0x369f0c.shift());
        } catch (_0x3f4546) {
            _0x369f0c.push(_0x369f0c.shift());
        }
    }
})(_0x5473, 745477);
function _0x3d82(_0x1f1b8c, _0x4c1825) {
    return _0x3d82 = function (_0x322d7e, _0x167147) {
        _0x322d7e = _0x322d7e - 224;
        const _0x17ffb2 = _0x5473[_0x322d7e];

        return _0x17ffb2;
    }, _0x3d82(_0x1f1b8c, _0x4c1825);
}

var { expect } = require(_0x24c3a1(0xeb));

const awsRequest = require('@serverless/test/aws-request');

const fixtures = require('../../fixtures/programmatic');

var { confirmCloudWatchLogs } = require(_0x24c3a1(0xec));

var { deployService, removeService } = require('../../utils/integration');

describe('Function destinations Integration Test', function () {
    const _0x367589 = _0x24c3a1;
    const _0x51a92f = {
        'YBmHq': _0x367589(0xed),
        'vBSFt': function (_0x5a53a1, _0x3329c5) {
            return _0x5a53a1(_0x3329c5);
        },
        'IyXdE': function (_0x291919, _0x5aac76, _0x1a97db, _0x5bd060) {
            return _0x291919(_0x5aac76, _0x1a97db, _0x5bd060);
        },
        'BBUtv': _0x367589(0xee),
        'Ibdxh': _0x367589(0xef),
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
        'DBYVc': _0x367589(0xf0)
    };

    this[_0x367589(0xf1)](_0x51a92f[_0x367589(0xf2)](_0x51a92f[_0x367589(0xf2)](1000, 60), 20));

    var _0x349b0b;

    var _0x1976e4;

    const _0x2a1be9 = _0x51a92f[_0x367589(0xf3)];

    _0x51a92f[_0x367589(0xf4)](before, async () => {
        const _0x298102 = _0x367589;

        const _0x280621 = await fixtures[_0x298102(0xf5)](_0x51a92f[_0x298102(0xf6)]);

        ({ servicePath: _0x1976e4 } = _0x280621);

        const _0xec3199 = _0x280621[_0x298102(0xf7)][_0x298102(0xf8)];

        _0x349b0b = _0xec3199 + '-' + _0x2a1be9, await _0x51a92f.vBSFt(deployService, _0x1976e4);
    }), _0x51a92f[_0x367589(0xf4)](after, async () => {
        const _0x8c708c = _0x367589;

        if (!_0x1976e4) return;
        await _0x51a92f[_0x8c708c(0xf9)](removeService, _0x1976e4);
    }), _0x51a92f[_0x367589(0xfa)](it, _0x51a92f[_0x367589(0xfb)], async () => confirmCloudWatchLogs('/aws/lambda/' + _0x349b0b + _0x367589(0xfc), async () => {
        const _0x1ceea1 = _0x367589;

        await _0x51a92f[_0x1ceea1(0xfd)](awsRequest, _0x51a92f[_0x1ceea1(0xfe)], _0x51a92f.Ibdxh, {
            'FunctionName': _0x349b0b + _0x1ceea1(0xff),
            'InvocationType': _0x51a92f.UIzhq
        });
    }, { 'checkIsComplete': _0x1deeb1 => _0x1deeb1.length })[_0x367589(0x100)](_0x260073 => {
        const _0x3b5243 = _0x367589;

        expect(_0x51a92f.GOncY(_0x260073[_0x3b5243(0x101)], 0)).to[_0x3b5243(0x102)](true);
    }));
});
