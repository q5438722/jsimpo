'use strict';
const _0x5c95 = [
    '-table',
    'notice',
    'Creating\x20Kinesis\x20stream\x20\x22',
    '\x22...',
    'fhRDV',
    'then',
    'uLXsC',
    'ClzCS',
    'ZCvEZ',
    'jICks',
    'rGejb',
    'Hello\x20from\x20Kinesis!',
    'streamKinesis',
    'VpzBx',
    'gGLCQ',
    '/aws/lambda/',
    'reduce',
    'includes',
    'sTOac',
    'aonwA',
    'include',
    'DynamoDB\x20Streams',
    'XuQsb',
    'INSERT',
    'rjGyY',
    'should\x20invoke\x20on\x20dynamodb\x20messages\x20from\x20the\x20latest\x20position',
    'streamDynamoDb',
    'toString',
    'slice',
    'Weglz',
    'qqeKK',
    'urXTH',
    '2aHztkx',
    '28867VSdZJU',
    '48508mQRfMU',
    '43427tsBtHE',
    '1DSkkmS',
    '131233maqomf',
    '76271vVCqMY',
    '2WUaMFX',
    '1nSrkKb',
    '32348vSIXLt',
    '4ykwHFC',
    '24581GlsEnq',
    'chai',
    'get',
    'serverless:test',
    '../../fixtures/programmatic',
    '../../utils/dynamodb',
    '../../utils/integration',
    'AWS\x20-\x20Stream\x20Integration\x20Test',
    'Deleting\x20Kinesis\x20stream',
    'should\x20invoke\x20on\x20kinesis\x20messages\x20from\x20the\x20trim\x20horizon',
    'message',
    'Hello\x20from\x20the\x20Kinesis\x20horizon!',
    'dev',
    'Kinesis\x20Streams',
    'timeout',
    'PqPOr',
    'lTKGq',
    'NGdTw',
    'setup',
    'stream',
    'serviceConfig',
    'service',
    '-kinesis'
];
const _0x5d8139 = _0x18ad;
(function (_0x16247f, _0x555bc1) {
    const _0x33d4a3 = _0x18ad;
    while (!![]) {
        try {
            const _0x137dd9 = parseInt(_0x33d4a3(0x75)) * parseInt(_0x33d4a3(0x76)) + parseInt(_0x33d4a3(0x77)) + -parseInt(_0x33d4a3(0x78)) * -parseInt(_0x33d4a3(0x79)) + -parseInt(_0x33d4a3(0x7a)) + -parseInt(_0x33d4a3(0x7b)) * -parseInt(_0x33d4a3(0x7c)) + parseInt(_0x33d4a3(0x7d)) * parseInt(_0x33d4a3(0x7e)) + -parseInt(_0x33d4a3(0x7f)) * parseInt(_0x33d4a3(0x80));
            if (_0x137dd9 === _0x555bc1)
                break;
            else
                _0x16247f['push'](_0x16247f['shift']());
        } catch (_0x32e65c) {
            _0x16247f['push'](_0x16247f['shift']());
        }
    }
}(_0x5c95, 0x22 * -0x167 + 0xe6fb + 0xe2dd));
const {expect} = require(_0x5d8139(0x81)), log = require('log')[_0x5d8139(0x82)](_0x5d8139(0x83)), fixtures = require(_0x5d8139(0x84)), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require(_0x5d8139(0x85)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x5d8139(0x86));
function _0x18ad(_0x8d459b, _0x2c1c0e) {
    return _0x18ad = function (_0x353c08, _0x2d7bd5) {
        _0x353c08 = _0x353c08 - (-0x1 * -0xbcf + -0x25bc + 0x1a62);
        let _0x546cc4 = _0x5c95[_0x353c08];
        return _0x546cc4;
    }, _0x18ad(_0x8d459b, _0x2c1c0e);
}
describe(_0x5d8139(0x87), function () {
    const _0x10a27a = _0x5d8139, _0x97afe8 = {
            'fhRDV': function (_0x3f531e, _0x17bf7a) {
                return _0x3f531e(_0x17bf7a);
            },
            'ClzCS': function (_0x25cc4a, _0x30526f) {
                return _0x25cc4a(_0x30526f);
            },
            'DaWtk': _0x10a27a(0x88),
            'ZCvEZ': function (_0x3cd7d1, _0x132cfa) {
                return _0x3cd7d1(_0x132cfa);
            },
            'NGdTw': function (_0x2952b1, _0x31f83a) {
                return _0x2952b1(_0x31f83a);
            },
            'KkhBT': _0x10a27a(0x89),
            'UOCgP': _0x10a27a(0x8a),
            'XuQsb': function (_0x31e466, _0x3de7a5, _0x55dd65) {
                return _0x31e466(_0x3de7a5, _0x55dd65);
            },
            'rjGyY': function (_0x176373, _0x48b55c, _0x968176) {
                return _0x176373(_0x48b55c, _0x968176);
            },
            'PqPOr': function (_0xb5f2, _0x4fb7dd) {
                return _0xb5f2 * _0x4fb7dd;
            },
            'CXrjc': _0x10a27a(0x8b),
            'lTKGq': _0x10a27a(0x8c),
            'uLXsC': function (_0x41861e, _0x26a9d4) {
                return _0x41861e(_0x26a9d4);
            },
            'jICks': function (_0x21b50f, _0x76e01b, _0x492b19) {
                return _0x21b50f(_0x76e01b, _0x492b19);
            },
            'rGejb': _0x10a27a(0x8d)
        };
    this[_0x10a27a(0x8e)](_0x97afe8[_0x10a27a(0x8f)](_0x97afe8['PqPOr'](0x81d * -0x1 + -0x1505 + 0x210a, -0x70 * 0x1b + -0xcf7 * -0x3 + 0x57 * -0x4f), 0x1d92 + 0x32f + 0x1 * -0x205d));
    let _0x141e02, _0x2c5c89, _0x4e9309, _0x2d3093;
    const _0x3e0ac6 = _0x97afe8['CXrjc'], _0x392efc = _0x97afe8[_0x10a27a(0x90)];
    _0x97afe8[_0x10a27a(0x91)](before, async () => {
        const _0xaf757a = _0x10a27a, _0x8e0d9c = await fixtures[_0xaf757a(0x92)](_0xaf757a(0x93));
        ({servicePath: _0x2c5c89} = _0x8e0d9c);
        const _0x229fd8 = _0x8e0d9c[_0xaf757a(0x94)][_0xaf757a(0x95)];
        return _0x4e9309 = _0x229fd8 + _0xaf757a(0x96), _0x2d3093 = _0x229fd8 + _0xaf757a(0x97), _0x141e02 = _0x229fd8 + '-' + _0x392efc, log[_0xaf757a(0x98)](_0xaf757a(0x99) + _0x4e9309 + _0xaf757a(0x9a)), _0x97afe8[_0xaf757a(0x9b)](createKinesisStream, _0x4e9309)[_0xaf757a(0x9c)](() => putKinesisRecord(_0x4e9309, _0x3e0ac6))[_0xaf757a(0x9c)](() => deployService(_0x2c5c89));
    }), _0x97afe8[_0x10a27a(0x9d)](after, async () => {
        const _0xccfde0 = _0x10a27a;
        return await _0x97afe8[_0xccfde0(0x9e)](removeService, _0x2c5c89), log[_0xccfde0(0x98)](_0x97afe8['DaWtk']), _0x97afe8[_0xccfde0(0x9f)](deleteKinesisStream, _0x4e9309);
    }), _0x97afe8[_0x10a27a(0xa0)](describe, _0x97afe8[_0x10a27a(0xa1)], () => {
        const _0x37d5dd = _0x10a27a, _0x3ff925 = {
                'sTOac': function (_0x5a9c40, _0x5eedbd) {
                    const _0x3c7be7 = _0x18ad;
                    return _0x97afe8[_0x3c7be7(0x9f)](_0x5a9c40, _0x5eedbd);
                },
                'aonwA': function (_0x4e2c8b, _0x2a9a81) {
                    const _0x1427c7 = _0x18ad;
                    return _0x97afe8[_0x1427c7(0x91)](_0x4e2c8b, _0x2a9a81);
                },
                'VpzBx': _0x37d5dd(0xa2),
                'gGLCQ': function (_0x54a78e, _0xac437d, _0x3997c4, _0xddf9b2) {
                    return _0x54a78e(_0xac437d, _0x3997c4, _0xddf9b2);
                }
            };
        it(_0x97afe8['KkhBT'], () => {
            const _0x4763de = _0x37d5dd, _0x2b46f1 = _0x4763de(0xa3), _0x1b2834 = _0x3ff925[_0x4763de(0xa4)];
            return _0x3ff925[_0x4763de(0xa5)](confirmCloudWatchLogs, _0x4763de(0xa6) + _0x141e02 + '-' + _0x2b46f1, () => putKinesisRecord(_0x4e9309, _0x1b2834), { 'checkIsComplete': _0x3968e9 => _0x3968e9[_0x4763de(0xa7)]((_0x5d117c, _0x2de686) => _0x5d117c + _0x2de686[_0x4763de(0x8a)], '')[_0x4763de(0xa8)](_0x1b2834) })[_0x4763de(0x9c)](_0x5f3ce5 => {
                const _0x404497 = _0x4763de, _0xb25dc9 = _0x5f3ce5[_0x404497(0xa7)]((_0x4db33b, _0x47840f) => _0x4db33b + _0x47840f[_0x404497(0x8a)], '');
                _0x3ff925[_0x404497(0xa9)](expect, _0xb25dc9)['to']['include'](_0x2b46f1), _0x3ff925[_0x404497(0xaa)](expect, _0xb25dc9)['to'][_0x404497(0xab)](_0x1b2834), _0x3ff925[_0x404497(0xaa)](expect, _0xb25dc9)['to'][_0x404497(0xab)](_0x3e0ac6);
            });
        });
    }), describe(_0x10a27a(0xac), () => {
        const _0xbdd695 = _0x10a27a, _0x185aee = {
                'Weglz': function (_0x32df69, _0x269159, _0x3fae5a) {
                    const _0x1084e9 = _0x18ad;
                    return _0x97afe8[_0x1084e9(0xad)](_0x32df69, _0x269159, _0x3fae5a);
                },
                'qqeKK': function (_0xe654b0, _0x2aa901) {
                    return _0xe654b0(_0x2aa901);
                },
                'urXTH': _0xbdd695(0xae)
            };
        _0x97afe8[_0xbdd695(0xaf)](it, _0xbdd695(0xb0), () => {
            const _0xa2cc42 = _0xbdd695, _0x563926 = _0xa2cc42(0xb1), _0x52fa6b = { 'id': _0x97afe8['UOCgP'] };
            return confirmCloudWatchLogs('/aws/lambda/' + _0x141e02 + '-' + _0x563926, () => {
                const _0x15269e = _0xa2cc42;
                return _0x52fa6b['hello'] = 'from\x20dynamo!' + Math['random']()[_0x15269e(0xb2)](-0x20 * 0x7a + 0x35b * -0x5 + 0x202b)[_0x15269e(0xb3)](-0x1 * 0xc95 + -0x1d20 + 0x29b7 * 0x1), _0x185aee[_0x15269e(0xb4)](putDynamoDbItem, _0x2d3093, _0x52fa6b);
            }, { 'checkIsComplete': _0x228cb2 => _0x228cb2[_0xa2cc42(0xa7)]((_0x41a97b, _0x4e1517) => _0x41a97b + _0x4e1517[_0xa2cc42(0x8a)], '')[_0xa2cc42(0xa8)](_0x563926) })['then'](_0x267ff1 => {
                const _0x4144be = _0xa2cc42, _0x28f5c8 = _0x267ff1[_0x4144be(0xa7)]((_0x571619, _0x143590) => _0x571619 + _0x143590['message'], '');
                _0x185aee[_0x4144be(0xb5)](expect, _0x28f5c8)['to']['include'](_0x563926), _0x185aee['qqeKK'](expect, _0x28f5c8)['to'][_0x4144be(0xab)](_0x185aee[_0x4144be(0xb6)]), _0x185aee[_0x4144be(0xb5)](expect, _0x28f5c8)['to']['include'](_0x52fa6b['id']);
            });
        });
    });
});
