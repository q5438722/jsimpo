const {expect} = require(_0x5d8139(129)), log = require('log')[_0x5d8139(130)](_0x5d8139(131)), fixtures = require(_0x5d8139(132)), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require(_0x5d8139(133)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x5d8139(134));
function _0x18ad(_0x8d459b, _0x2c1c0e) {
    return _0x18ad = function (_0x353c08, _0x2d7bd5) {
        _0x353c08 = _0x353c08 - (-1 * -3023 + -9660 + 6754);
        let _0x546cc4 = _0x5c95[_0x353c08];
        return _0x546cc4;
    }, _0x18ad(_0x8d459b, _0x2c1c0e);
}
describe(_0x5d8139(135), function () {
    const _0x10a27a = _0x5d8139, _0x97afe8 = {
            'fhRDV': function (_0x3f531e, _0x17bf7a) {
                return _0x3f531e(_0x17bf7a);
            },
            'ClzCS': function (_0x25cc4a, _0x30526f) {
                return _0x25cc4a(_0x30526f);
            },
            'DaWtk': _0x10a27a(136),
            'ZCvEZ': function (_0x3cd7d1, _0x132cfa) {
                return _0x3cd7d1(_0x132cfa);
            },
            'NGdTw': function (_0x2952b1, _0x31f83a) {
                return _0x2952b1(_0x31f83a);
            },
            'KkhBT': _0x10a27a(137),
            'UOCgP': _0x10a27a(138),
            'XuQsb': function (_0x31e466, _0x3de7a5, _0x55dd65) {
                return _0x31e466(_0x3de7a5, _0x55dd65);
            },
            'rjGyY': function (_0x176373, _0x48b55c, _0x968176) {
                return _0x176373(_0x48b55c, _0x968176);
            },
            'PqPOr': function (_0xb5f2, _0x4fb7dd) {
                return _0xb5f2 * _0x4fb7dd;
            },
            'CXrjc': _0x10a27a(139),
            'lTKGq': _0x10a27a(140),
            'uLXsC': function (_0x41861e, _0x26a9d4) {
                return _0x41861e(_0x26a9d4);
            },
            'jICks': function (_0x21b50f, _0x76e01b, _0x492b19) {
                return _0x21b50f(_0x76e01b, _0x492b19);
            },
            'rGejb': _0x10a27a(141)
        };
    this[_0x10a27a(142)](_0x97afe8[_0x10a27a(143)](_0x97afe8['PqPOr'](2077 * -1 + -5381 + 8458, -112 * 27 + -3319 * -3 + 87 * -79), 7570 + 815 + 1 * -8285));
    let _0x141e02, _0x2c5c89, _0x4e9309, _0x2d3093;
    const _0x3e0ac6 = _0x97afe8['CXrjc'], _0x392efc = _0x97afe8[_0x10a27a(144)];
    _0x97afe8[_0x10a27a(145)](before, async () => {
        const _0xaf757a = _0x10a27a, _0x8e0d9c = await fixtures[_0xaf757a(146)](_0xaf757a(147));
        ({servicePath: _0x2c5c89} = _0x8e0d9c);
        const _0x229fd8 = _0x8e0d9c[_0xaf757a(148)][_0xaf757a(149)];
        return _0x4e9309 = _0x229fd8 + _0xaf757a(150), _0x2d3093 = _0x229fd8 + _0xaf757a(151), _0x141e02 = _0x229fd8 + '-' + _0x392efc, log[_0xaf757a(152)](_0xaf757a(153) + _0x4e9309 + _0xaf757a(154)), _0x97afe8[_0xaf757a(155)](createKinesisStream, _0x4e9309)[_0xaf757a(156)](() => putKinesisRecord(_0x4e9309, _0x3e0ac6))[_0xaf757a(156)](() => deployService(_0x2c5c89));
    }), _0x97afe8[_0x10a27a(157)](after, async () => {
        const _0xccfde0 = _0x10a27a;
        return await _0x97afe8[_0xccfde0(158)](removeService, _0x2c5c89), log[_0xccfde0(152)](_0x97afe8['DaWtk']), _0x97afe8[_0xccfde0(159)](deleteKinesisStream, _0x4e9309);
    }), _0x97afe8[_0x10a27a(160)](describe, _0x97afe8[_0x10a27a(161)], () => {
        const _0x37d5dd = _0x10a27a, _0x3ff925 = {
                'sTOac': function (_0x5a9c40, _0x5eedbd) {
                    const _0x3c7be7 = _0x18ad;
                    return _0x97afe8[_0x3c7be7(159)](_0x5a9c40, _0x5eedbd);
                },
                'aonwA': function (_0x4e2c8b, _0x2a9a81) {
                    const _0x1427c7 = _0x18ad;
                    return _0x97afe8[_0x1427c7(145)](_0x4e2c8b, _0x2a9a81);
                },
                'VpzBx': _0x37d5dd(162),
                'gGLCQ': function (_0x54a78e, _0xac437d, _0x3997c4, _0xddf9b2) {
                    return _0x54a78e(_0xac437d, _0x3997c4, _0xddf9b2);
                }
            };
        it(_0x97afe8['KkhBT'], () => {
            const _0x4763de = _0x37d5dd, _0x2b46f1 = _0x4763de(163), _0x1b2834 = _0x3ff925[_0x4763de(164)];
            return _0x3ff925[_0x4763de(165)](confirmCloudWatchLogs, _0x4763de(166) + _0x141e02 + '-' + _0x2b46f1, () => putKinesisRecord(_0x4e9309, _0x1b2834), { 'checkIsComplete': _0x3968e9 => _0x3968e9[_0x4763de(167)]((_0x5d117c, _0x2de686) => _0x5d117c + _0x2de686[_0x4763de(138)], '')[_0x4763de(168)](_0x1b2834) })[_0x4763de(156)](_0x5f3ce5 => {
                const _0x404497 = _0x4763de, _0xb25dc9 = _0x5f3ce5[_0x404497(167)]((_0x4db33b, _0x47840f) => _0x4db33b + _0x47840f[_0x404497(138)], '');
                _0x3ff925[_0x404497(169)](expect, _0xb25dc9)['to']['include'](_0x2b46f1), _0x3ff925[_0x404497(170)](expect, _0xb25dc9)['to'][_0x404497(171)](_0x1b2834), _0x3ff925[_0x404497(170)](expect, _0xb25dc9)['to'][_0x404497(171)](_0x3e0ac6);
            });
        });
    }), describe(_0x10a27a(172), () => {
        const _0xbdd695 = _0x10a27a, _0x185aee = {
                'Weglz': function (_0x32df69, _0x269159, _0x3fae5a) {
                    const _0x1084e9 = _0x18ad;
                    return _0x97afe8[_0x1084e9(173)](_0x32df69, _0x269159, _0x3fae5a);
                },
                'qqeKK': function (_0xe654b0, _0x2aa901) {
                    return _0xe654b0(_0x2aa901);
                },
                'urXTH': _0xbdd695(174)
            };
        _0x97afe8[_0xbdd695(175)](it, _0xbdd695(176), () => {
            const _0xa2cc42 = _0xbdd695, _0x563926 = _0xa2cc42(177), _0x52fa6b = { 'id': _0x97afe8['UOCgP'] };
            return confirmCloudWatchLogs('/aws/lambda/' + _0x141e02 + '-' + _0x563926, () => {
                const _0x15269e = _0xa2cc42;
                return _0x52fa6b['hello'] = 'from dynamo!' + Math['random']()[_0x15269e(178)](-32 * 122 + 859 * -5 + 8235)[_0x15269e(179)](-1 * 3221 + -7456 + 10679 * 1), _0x185aee[_0x15269e(180)](putDynamoDbItem, _0x2d3093, _0x52fa6b);
            }, { 'checkIsComplete': _0x228cb2 => _0x228cb2[_0xa2cc42(167)]((_0x41a97b, _0x4e1517) => _0x41a97b + _0x4e1517[_0xa2cc42(138)], '')[_0xa2cc42(168)](_0x563926) })['then'](_0x267ff1 => {
                const _0x4144be = _0xa2cc42, _0x28f5c8 = _0x267ff1[_0x4144be(167)]((_0x571619, _0x143590) => _0x571619 + _0x143590['message'], '');
                _0x185aee[_0x4144be(181)](expect, _0x28f5c8)['to']['include'](_0x563926), _0x185aee['qqeKK'](expect, _0x28f5c8)['to'][_0x4144be(171)](_0x185aee[_0x4144be(182)]), _0x185aee[_0x4144be(181)](expect, _0x28f5c8)['to']['include'](_0x52fa6b['id']);
            });
        });
    });
});