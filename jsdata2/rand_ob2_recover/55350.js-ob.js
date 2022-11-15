const common = require(_0x286d14(170));
if (!common['hasCrypto'])
    common['skip'](_0x286d14(171));
const assert = require(_0x286d14(172)), {subtle} = require('crypto')[_0x286d14(173)], {internalBinding} = require(_0x286d14(174));
function _0x3541(_0x35e27e, _0x3e775b) {
    return _0x3541 = function (_0x555e48, _0x354171) {
        _0x555e48 = _0x555e48 - 160;
        let _0x43247e = _0x555e[_0x555e48];
        return _0x43247e;
    }, _0x3541(_0x35e27e, _0x3e775b);
}
{
    async function test(_0x58e0f3) {
        const _0x50f3e8 = _0x286d14, [_0x3b80c3, _0x14fcc1] = await Promise[_0x50f3e8(175)]([
                subtle[_0x50f3e8(176)]({
                    'name': 'ECDH',
                    'namedCurve': _0x58e0f3
                }, !![], [_0x50f3e8(177)]),
                subtle[_0x50f3e8(176)]({
                    'name': _0x50f3e8(178),
                    'namedCurve': _0x58e0f3
                }, !![], [_0x50f3e8(177)])
            ]), [_0xde0529, _0x93021] = await Promise[_0x50f3e8(175)]([
                subtle[_0x50f3e8(177)]({
                    'name': _0x50f3e8(178),
                    'namedCurve': _0x58e0f3,
                    'public': _0x3b80c3['publicKey']
                }, _0x14fcc1['privateKey'], 128),
                subtle[_0x50f3e8(177)]({
                    'name': 'ECDH',
                    'namedCurve': _0x58e0f3,
                    'public': _0x14fcc1[_0x50f3e8(179)]
                }, _0x3b80c3[_0x50f3e8(180)], 128)
            ]);
        assert(_0xde0529 instanceof ArrayBuffer), assert(_0x93021 instanceof ArrayBuffer), assert[_0x50f3e8(181)](_0xde0529, _0x93021);
    }
    test(_0x286d14(182))[_0x286d14(183)](common['mustCall']());
}
{
    async function test(_0x13f8ff, _0x54dd0b, _0x3be636, _0x2a2586, _0x364dc4, _0x29553b) {
        const _0x32ce04 = _0x286d14, _0x1831a5 = new TextEncoder(), _0x55a1be = await subtle[_0x32ce04(184)](_0x32ce04(185), _0x1831a5['encode'](_0x13f8ff), {
                'name': _0x32ce04(186),
                'hash': _0x2a2586
            }, ![], [_0x32ce04(177)]), _0x1a2d4e = await subtle[_0x32ce04(177)]({
                'name': _0x32ce04(186),
                'hash': _0x2a2586,
                'salt': _0x1831a5[_0x32ce04(187)](_0x3be636),
                'info': _0x1831a5[_0x32ce04(187)](_0x54dd0b)
            }, _0x55a1be, _0x364dc4);
        assert[_0x32ce04(188)](Buffer['from'](_0x1a2d4e)[_0x32ce04(189)](_0x32ce04(190)), _0x29553b);
    }
    const kTests = [
            [
                _0x286d14(191),
                _0x286d14(192),
                _0x286d14(193),
                'SHA-256',
                512,
                '14d93b0ccd99d4f2cbd9fbfe9c830b5b8a43e3e45e329' + '41ef21bdeb0fa87b6b6bfa5c54466aa5bf76cdc2685fb' + _0x286d14(194)
            ],
            [
                _0x286d14(191),
                _0x286d14(192),
                _0x286d14(193),
                _0x286d14(195),
                128,
                'e36cf2cf943d8f3a88adb80f478745c3'
            ]
        ], tests = Promise['all'](kTests['map'](_0x524edc => test(..._0x524edc)));
    tests[_0x286d14(183)](common[_0x286d14(196)]());
}
{
    async function test(_0x5828ba, _0x3f92e1, _0x3f0eff, _0x8337d9, _0x5089cd, _0x2bf7f7) {
        const _0x28d6fe = _0x286d14, _0x5049bd = new TextEncoder(), _0x46dc02 = await subtle[_0x28d6fe(184)](_0x28d6fe(185), _0x5049bd[_0x28d6fe(187)](_0x5828ba), {
                'name': _0x28d6fe(197),
                'hash': _0x8337d9
            }, ![], [_0x28d6fe(177)]), _0x1a0b93 = await subtle[_0x28d6fe(177)]({
                'name': 'PBKDF2',
                'hash': _0x8337d9,
                'salt': _0x5049bd[_0x28d6fe(187)](_0x3f92e1),
                'iterations': _0x3f0eff
            }, _0x46dc02, _0x5089cd);
        assert[_0x28d6fe(188)](Buffer['from'](_0x1a0b93)['toString'](_0x28d6fe(190)), _0x2bf7f7);
    }
    const kTests = [
            [
                _0x286d14(191),
                _0x286d14(192),
                10,
                'SHA-256',
                512,
                'f72d1cf4853fffbd16a42751765d11f8dc7939498ee7b7' + _0x286d14(198) + _0x286d14(199)
            ],
            [
                _0x286d14(191),
                'there',
                5,
                _0x286d14(195),
                128,
                _0x286d14(200)
            ]
        ], tests = Promise[_0x286d14(175)](kTests[_0x286d14(201)](_0x4288f6 => test(..._0x4288f6)));
    tests[_0x286d14(183)](common[_0x286d14(196)]());
}
if (typeof internalBinding(_0x286d14(202))[_0x286d14(203)] === 'function') {
    async function test(_0x357bba, _0x4836db, _0x752c1e, _0x480be7) {
        const _0x1ca257 = _0x286d14, _0x2c9f4a = new TextEncoder(), _0xf40d96 = await subtle[_0x1ca257(184)]('raw', _0x2c9f4a[_0x1ca257(187)](_0x357bba), { 'name': _0x1ca257(204) }, ![], [_0x1ca257(177)]), _0x5bc70c = await subtle['deriveBits']({
                'name': 'NODE-SCRYPT',
                'salt': _0x2c9f4a[_0x1ca257(187)](_0x4836db)
            }, _0xf40d96, _0x752c1e);
        assert(_0x5bc70c instanceof ArrayBuffer), assert['strictEqual'](Buffer[_0x1ca257(205)](_0x5bc70c)[_0x1ca257(189)](_0x1ca257(190)), _0x480be7);
    }
    const kTests = [
            [
                _0x286d14(191),
                _0x286d14(192),
                512,
                '30ddda6feabaac788eb81cc38f496cd5d9a165d320c537ea05331fe720db1061b3a27' + _0x286d14(206)
            ],
            [
                _0x286d14(191),
                _0x286d14(192),
                128,
                '30ddda6feabaac788eb81cc38f496cd5'
            ]
        ], tests = Promise[_0x286d14(175)](kTests[_0x286d14(201)](_0x2e7e6b => test(..._0x2e7e6b)));
    tests[_0x286d14(183)](common['mustCall']());
}