const common = require(_0x2c70a2(274));
if (!common[_0x2c70a2(275)])
    common[_0x2c70a2(276)](_0x2c70a2(277));
const assert = require(_0x2c70a2(278)), {subtle} = require(_0x2c70a2(279))[_0x2c70a2(280)], {internalBinding} = require('internal/test/binding');
{
    async function test(_0x413655) {
        const _0x2aeefa = _0x2c70a2, _0x56b558 = {
                'HmYye': _0x2aeefa(281),
                'MeFNo': function (_0x3fb5ac, _0x5aa758) {
                    return _0x3fb5ac instanceof _0x5aa758;
                },
                'BBbiP': function (_0xe1dc27, _0x4910b5) {
                    return _0xe1dc27(_0x4910b5);
                }
            }, [_0x2a5d22, _0x28e603] = await Promise[_0x2aeefa(282)]([
                subtle[_0x2aeefa(283)]({
                    'name': 'ECDH',
                    'namedCurve': _0x413655
                }, !![], [_0x2aeefa(284)]),
                subtle['generateKey']({
                    'name': _0x56b558[_0x2aeefa(285)],
                    'namedCurve': _0x413655
                }, !![], ['deriveBits'])
            ]), [_0x47594b, _0x49e723] = await Promise['all']([
                subtle[_0x2aeefa(284)]({
                    'name': _0x56b558[_0x2aeefa(285)],
                    'namedCurve': _0x413655,
                    'public': _0x2a5d22[_0x2aeefa(286)]
                }, _0x28e603[_0x2aeefa(287)], 9103 + -13 * 419 + 882 * -4),
                subtle[_0x2aeefa(284)]({
                    'name': _0x56b558[_0x2aeefa(285)],
                    'namedCurve': _0x413655,
                    'public': _0x28e603['publicKey']
                }, _0x2a5d22[_0x2aeefa(287)], 697 * -1 + 3854 + -3029)
            ]);
        assert(_0x56b558[_0x2aeefa(288)](_0x47594b, ArrayBuffer)), _0x56b558['BBbiP'](assert, _0x49e723 instanceof ArrayBuffer), assert[_0x2aeefa(289)](_0x47594b, _0x49e723);
    }
    test('P-521')[_0x2c70a2(290)](common[_0x2c70a2(291)]());
}
{
    async function test(_0x12ac00, _0x4379f0, _0x3ca4c5, _0x479399, _0x397719, _0x2bdfac) {
        const _0xe13acf = _0x2c70a2, _0x27b384 = {
                'ZTpYa': _0xe13acf(292),
                'mGpYs': 'HKDF'
            }, _0x5a8a23 = new TextEncoder(), _0x4f15ed = await subtle[_0xe13acf(293)](_0x27b384['ZTpYa'], _0x5a8a23[_0xe13acf(294)](_0x12ac00), {
                'name': _0x27b384[_0xe13acf(295)],
                'hash': _0x479399
            }, ![], [_0xe13acf(284)]), _0x412bb9 = await subtle['deriveBits']({
                'name': _0x27b384['mGpYs'],
                'hash': _0x479399,
                'salt': _0x5a8a23['encode'](_0x3ca4c5),
                'info': _0x5a8a23[_0xe13acf(294)](_0x4379f0)
            }, _0x4f15ed, _0x397719);
        assert[_0xe13acf(296)](Buffer[_0xe13acf(297)](_0x412bb9)['toString'](_0xe13acf(298)), _0x2bdfac);
    }
    const kTests = [
            [
                'hello',
                _0x2c70a2(299),
                _0x2c70a2(300),
                _0x2c70a2(301),
                -133 * -1 + 3042 + -2663 * 1,
                _0x2c70a2(302) + _0x2c70a2(303) + _0x2c70a2(304)
            ],
            [
                'hello',
                _0x2c70a2(299),
                _0x2c70a2(300),
                _0x2c70a2(305),
                4577 + 35 * -149 + 383 * 2,
                _0x2c70a2(306)
            ]
        ], tests = Promise[_0x2c70a2(282)](kTests['map'](_0x17b1c4 => test(..._0x17b1c4)));
    tests[_0x2c70a2(290)](common[_0x2c70a2(291)]());
}
{
    async function test(_0x35ac79, _0x5ab132, _0x2a1a61, _0x56f519, _0x524937, _0x29fd09) {
        const _0x2802d1 = _0x2c70a2, _0x3ead3d = {
                'zpEMU': _0x2802d1(292),
                'umjOn': 'PBKDF2',
                'fPlQp': 'deriveBits',
                'OYFRK': _0x2802d1(298)
            }, _0xde5e0e = new TextEncoder(), _0x1f7deb = await subtle['importKey'](_0x3ead3d['zpEMU'], _0xde5e0e[_0x2802d1(294)](_0x35ac79), {
                'name': _0x3ead3d['umjOn'],
                'hash': _0x56f519
            }, ![], [_0x3ead3d[_0x2802d1(307)]]), _0x3ab558 = await subtle[_0x2802d1(284)]({
                'name': _0x3ead3d[_0x2802d1(308)],
                'hash': _0x56f519,
                'salt': _0xde5e0e['encode'](_0x5ab132),
                'iterations': _0x2a1a61
            }, _0x1f7deb, _0x524937);
        assert['strictEqual'](Buffer[_0x2802d1(297)](_0x3ab558)[_0x2802d1(309)](_0x3ead3d[_0x2802d1(310)]), _0x29fd09);
    }
    const kTests = [
            [
                'hello',
                _0x2c70a2(299),
                -7394 + -6861 + 951 * 15,
                'SHA-256',
                698 + -291 * 3 + 1 * 687,
                _0x2c70a2(311) + _0x2c70a2(312) + _0x2c70a2(313)
            ],
            [
                _0x2c70a2(314),
                _0x2c70a2(299),
                8940 + -557 + 1 * -8378,
                _0x2c70a2(305),
                2 * -2593 + 44 * -136 + 11298,
                _0x2c70a2(315)
            ]
        ], tests = Promise['all'](kTests[_0x2c70a2(316)](_0x44cdb2 => test(..._0x44cdb2)));
    tests[_0x2c70a2(290)](common['mustCall']());
}
if (typeof internalBinding('crypto')[_0x2c70a2(317)] === _0x2c70a2(318)) {
    async function test(_0x5a3c55, _0x265450, _0x574548, _0x2499ea) {
        const _0x26c397 = _0x2c70a2, _0x4d8acc = {
                'QHlIX': _0x26c397(292),
                'mAqlp': _0x26c397(319),
                'HDbba': _0x26c397(284),
                'woXXD': function (_0x59b542, _0x237606) {
                    return _0x59b542(_0x237606);
                },
                'BjKht': function (_0x5f44a4, _0x52a385) {
                    return _0x5f44a4 instanceof _0x52a385;
                },
                'IGdzO': 'hex'
            }, _0x2a9c4a = new TextEncoder(), _0x1e36f0 = await subtle[_0x26c397(293)](_0x4d8acc[_0x26c397(320)], _0x2a9c4a[_0x26c397(294)](_0x5a3c55), { 'name': _0x4d8acc[_0x26c397(321)] }, ![], [_0x4d8acc[_0x26c397(322)]]), _0x5441b0 = await subtle[_0x26c397(284)]({
                'name': _0x4d8acc['mAqlp'],
                'salt': _0x2a9c4a['encode'](_0x265450)
            }, _0x1e36f0, _0x574548);
        _0x4d8acc['woXXD'](assert, _0x4d8acc['BjKht'](_0x5441b0, ArrayBuffer)), assert[_0x26c397(296)](Buffer[_0x26c397(297)](_0x5441b0)['toString'](_0x4d8acc[_0x26c397(323)]), _0x2499ea);
    }
    const kTests = [
            [
                'hello',
                'there',
                4 * 1996 + 3 * 746 + -9710,
                _0x2c70a2(324) + _0x2c70a2(325)
            ],
            [
                _0x2c70a2(314),
                'there',
                -4422 + 1 * -2696 + -7246 * -1,
                _0x2c70a2(326)
            ]
        ], tests = Promise['all'](kTests[_0x2c70a2(316)](_0x2a8ffb => test(..._0x2a8ffb)));
    tests[_0x2c70a2(290)](common[_0x2c70a2(291)]());
}