'use strict';
const _0x10a4 = [
    '445199QuviNT',
    '2KlasYw',
    '352840zRchcD',
    '1691693nqnKDJ',
    '17iEcKNr',
    '98174bgTfJt',
    '351693qPZrZq',
    '1wFFyCb',
    '../common',
    'assert',
    'async_hooks',
    'IZtgV',
    'disable',
    'KMSJJ',
    'ZjQMB',
    'ckafB',
    'strictEqual',
    'createHook',
    'mustNotCall',
    'mustCall',
    'YHfYc',
    'KlGYT',
    'length',
    'enable',
    '1LZjocR',
    '1402799CiTwzR',
    '199629TvBRaG',
    '1EMsqKU'
];
const _0x4b7df4 = _0x3d09;
(function (_0x4257b5, _0xe8a555) {
    const _0x2b58ae = _0x3d09;
    while (!![]) {
        try {
            const _0x5c9dee = -parseInt(_0x2b58ae(0xcf)) * parseInt(_0x2b58ae(0xd0)) + -parseInt(_0x2b58ae(0xd1)) * parseInt(_0x2b58ae(0xd2)) + -parseInt(_0x2b58ae(0xd3)) + parseInt(_0x2b58ae(0xd4)) * -parseInt(_0x2b58ae(0xd5)) + parseInt(_0x2b58ae(0xd6)) + -parseInt(_0x2b58ae(0xd7)) * -parseInt(_0x2b58ae(0xd8)) + parseInt(_0x2b58ae(0xd9)) * parseInt(_0x2b58ae(0xda));
            if (_0x5c9dee === _0xe8a555)
                break;
            else
                _0x4257b5['push'](_0x4257b5['shift']());
        } catch (_0x233069) {
            _0x4257b5['push'](_0x4257b5['shift']());
        }
    }
}(_0x10a4, -0x1 * -0x351e9 + 0x114703 + -0xdc1 * 0x6f));
function _0x3d09(_0x49c2b7, _0x40460f) {
    return _0x3d09 = function (_0x53b409, _0x50cd93) {
        _0x53b409 = _0x53b409 - (0x1c0 + 0xf1 * -0x25 + 0xc * 0x2d3);
        let _0x711629 = _0x10a4[_0x53b409];
        return _0x711629;
    }, _0x3d09(_0x49c2b7, _0x40460f);
}
const common = require(_0x4b7df4(0xdb)), assert = require(_0x4b7df4(0xdc)), async_hooks = require(_0x4b7df4(0xdd)), fnsToTest = [
        setTimeout,
        _0x40deee => {
            const _0x597638 = _0x4b7df4, _0x49d7e6 = {
                    'IZtgV': function (_0x55426d, _0x230185) {
                        return _0x55426d(_0x230185);
                    }
                };
            _0x49d7e6[_0x597638(0xde)](setImmediate, () => {
                _0x40deee(), _0x49d7e6['IZtgV'](setImmediate, () => {
                    const _0x3e0080 = _0x3d09;
                    hook[_0x3e0080(0xdf)]();
                });
            });
        },
        _0xf9bb50 => {
            const _0x1d0829 = {
                'KMSJJ': function (_0x16ecb0) {
                    return _0x16ecb0();
                },
                'ZjQMB': function (_0x2b4581, _0x15049f) {
                    return _0x2b4581(_0x15049f);
                }
            };
            setImmediate(() => {
                const _0x5a854f = {
                    'ckafB': function (_0x30027e) {
                        const _0x332d80 = _0x3d09;
                        return _0x1d0829[_0x332d80(0xe0)](_0x30027e);
                    },
                    'rqTBu': function (_0xa32742, _0x3041d0) {
                        const _0x3d9342 = _0x3d09;
                        return _0x1d0829[_0x3d9342(0xe1)](_0xa32742, _0x3041d0);
                    }
                };
                process['nextTick'](() => {
                    const _0x5f2b7e = _0x3d09;
                    _0x5a854f[_0x5f2b7e(0xe2)](_0xf9bb50), _0x5a854f['rqTBu'](setImmediate, () => {
                        const _0x2a2c6e = _0x5f2b7e;
                        hook[_0x2a2c6e(0xdf)](), assert[_0x2a2c6e(0xe3)](fnsToTest['length'], -0xcc8 + 0x93 * -0x43 + 0x3341);
                    });
                });
            });
        }
    ], hook = async_hooks[_0x4b7df4(0xe4)]({
        'before': common[_0x4b7df4(0xe5)](),
        'after': common[_0x4b7df4(0xe6)](() => {
        }, 0x204d + -0x12 * 0xe + -0x1 * 0x1f4e),
        'destroy': common[_0x4b7df4(0xe6)](() => {
            const _0x2d4136 = _0x4b7df4, _0x5f51e8 = {
                    'YHfYc': function (_0x1f546c) {
                        return _0x1f546c();
                    }
                };
            hook[_0x2d4136(0xdf)](), _0x5f51e8[_0x2d4136(0xe7)](nextTest);
        }, 0xb24 + 0x1 * -0x413 + -0x1 * 0x70e)
    });
nextTest();
function nextTest() {
    const _0xacf893 = _0x4b7df4, _0x187015 = {
            'KlGYT': function (_0x4c69d2, _0x66c2f2) {
                return _0x4c69d2 > _0x66c2f2;
            }
        };
    _0x187015[_0xacf893(0xe8)](fnsToTest[_0xacf893(0xe9)], 0xb75 + 0x2586 + -0x30fb) && fnsToTest['shift']()(common[_0xacf893(0xe6)](() => {
        const _0x687ab0 = _0xacf893;
        hook[_0x687ab0(0xea)]();
    }));
}
