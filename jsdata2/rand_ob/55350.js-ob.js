'use strict';
const _0x26ae = [
    '455352aHjYCt',
    '20975pChdQo',
    '41EEkTvZ',
    '186442iRHkNa',
    '293991snzUse',
    '1085978vYllcX',
    '1uSQHxH',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'assert',
    'crypto',
    'webcrypto',
    'ECDH',
    'all',
    'generateKey',
    'deriveBits',
    'HmYye',
    'publicKey',
    'privateKey',
    'MeFNo',
    'deepStrictEqual',
    'then',
    'mustCall',
    'raw',
    'importKey',
    'encode',
    'mGpYs',
    'strictEqual',
    'from',
    'hex',
    'there',
    'my\x20friend',
    'SHA-256',
    '14d93b0ccd99d4f2cbd9fbfe9c830b5b8a43e3e45e329',
    '41ef21bdeb0fa87b6b6bfa5c54466aa5bf76cdc2685fb',
    'a4408ea5b94c049fe035649b46f92fdc519374',
    'SHA-384',
    'e36cf2cf943d8f3a88adb80f478745c3',
    'fPlQp',
    'umjOn',
    'toString',
    'OYFRK',
    'f72d1cf4853fffbd16a42751765d11f8dc7939498ee7b7',
    'ce7678b4cb16fad88098110a83e71f4483ce73203f7a64',
    '719d293280f780f9fafdcf46925c5c0588b3',
    'hello',
    '201509b012c9cd2fbe7ea938f0c509b3',
    'map',
    'ScryptJob',
    'function',
    'NODE-SCRYPT',
    'QHlIX',
    'mAqlp',
    'HDbba',
    'IGdzO',
    '30ddda6feabaac788eb81cc38f496cd5d9a165d320c537ea05331fe720db1061b3a27',
    'b91a8428e49d44078c1fa395cb1c6db336ba44ccb80faa6d74918769374',
    '30ddda6feabaac788eb81cc38f496cd5',
    '676CdARio',
    '263ryFxti',
    '624763fDnpMD',
    '2IKeJLJ'
];
const _0x2c70a2 = _0x2a5c;
function _0x2a5c(_0x1f6a06, _0x5c5c04) {
    return _0x2a5c = function (_0x2f702b, _0x2f111b) {
        _0x2f702b = _0x2f702b - (-0x122b + 0x21c + 0x1116);
        let _0x3a40d0 = _0x26ae[_0x2f702b];
        return _0x3a40d0;
    }, _0x2a5c(_0x1f6a06, _0x5c5c04);
}
(function (_0x1efe49, _0x5b0bc0) {
    const _0x7f2a3e = _0x2a5c;
    while (!![]) {
        try {
            const _0x5c99a0 = -parseInt(_0x7f2a3e(0x107)) * parseInt(_0x7f2a3e(0x108)) + parseInt(_0x7f2a3e(0x109)) * parseInt(_0x7f2a3e(0x10a)) + parseInt(_0x7f2a3e(0x10b)) + -parseInt(_0x7f2a3e(0x10c)) * -parseInt(_0x7f2a3e(0x10d)) + -parseInt(_0x7f2a3e(0x10e)) + -parseInt(_0x7f2a3e(0x10f)) + parseInt(_0x7f2a3e(0x110)) * -parseInt(_0x7f2a3e(0x111));
            if (_0x5c99a0 === _0x5b0bc0)
                break;
            else
                _0x1efe49['push'](_0x1efe49['shift']());
        } catch (_0x5d389e) {
            _0x1efe49['push'](_0x1efe49['shift']());
        }
    }
}(_0x26ae, -0xd21ec + -0x1b283 + -0xa2d7 * -0x2b));
const common = require(_0x2c70a2(0x112));
if (!common[_0x2c70a2(0x113)])
    common[_0x2c70a2(0x114)](_0x2c70a2(0x115));
const assert = require(_0x2c70a2(0x116)), {subtle} = require(_0x2c70a2(0x117))[_0x2c70a2(0x118)], {internalBinding} = require('internal/test/binding');
{
    async function test(_0x413655) {
        const _0x2aeefa = _0x2c70a2, _0x56b558 = {
                'HmYye': _0x2aeefa(0x119),
                'MeFNo': function (_0x3fb5ac, _0x5aa758) {
                    return _0x3fb5ac instanceof _0x5aa758;
                },
                'BBbiP': function (_0xe1dc27, _0x4910b5) {
                    return _0xe1dc27(_0x4910b5);
                }
            }, [_0x2a5d22, _0x28e603] = await Promise[_0x2aeefa(0x11a)]([
                subtle[_0x2aeefa(0x11b)]({
                    'name': 'ECDH',
                    'namedCurve': _0x413655
                }, !![], [_0x2aeefa(0x11c)]),
                subtle['generateKey']({
                    'name': _0x56b558[_0x2aeefa(0x11d)],
                    'namedCurve': _0x413655
                }, !![], ['deriveBits'])
            ]), [_0x47594b, _0x49e723] = await Promise['all']([
                subtle[_0x2aeefa(0x11c)]({
                    'name': _0x56b558[_0x2aeefa(0x11d)],
                    'namedCurve': _0x413655,
                    'public': _0x2a5d22[_0x2aeefa(0x11e)]
                }, _0x28e603[_0x2aeefa(0x11f)], 0x238f + -0xd * 0x1a3 + 0x372 * -0x4),
                subtle[_0x2aeefa(0x11c)]({
                    'name': _0x56b558[_0x2aeefa(0x11d)],
                    'namedCurve': _0x413655,
                    'public': _0x28e603['publicKey']
                }, _0x2a5d22[_0x2aeefa(0x11f)], 0x2b9 * -0x1 + 0xf0e + -0xbd5)
            ]);
        assert(_0x56b558[_0x2aeefa(0x120)](_0x47594b, ArrayBuffer)), _0x56b558['BBbiP'](assert, _0x49e723 instanceof ArrayBuffer), assert[_0x2aeefa(0x121)](_0x47594b, _0x49e723);
    }
    test('P-521')[_0x2c70a2(0x122)](common[_0x2c70a2(0x123)]());
}
{
    async function test(_0x12ac00, _0x4379f0, _0x3ca4c5, _0x479399, _0x397719, _0x2bdfac) {
        const _0xe13acf = _0x2c70a2, _0x27b384 = {
                'ZTpYa': _0xe13acf(0x124),
                'mGpYs': 'HKDF'
            }, _0x5a8a23 = new TextEncoder(), _0x4f15ed = await subtle[_0xe13acf(0x125)](_0x27b384['ZTpYa'], _0x5a8a23[_0xe13acf(0x126)](_0x12ac00), {
                'name': _0x27b384[_0xe13acf(0x127)],
                'hash': _0x479399
            }, ![], [_0xe13acf(0x11c)]), _0x412bb9 = await subtle['deriveBits']({
                'name': _0x27b384['mGpYs'],
                'hash': _0x479399,
                'salt': _0x5a8a23['encode'](_0x3ca4c5),
                'info': _0x5a8a23[_0xe13acf(0x126)](_0x4379f0)
            }, _0x4f15ed, _0x397719);
        assert[_0xe13acf(0x128)](Buffer[_0xe13acf(0x129)](_0x412bb9)['toString'](_0xe13acf(0x12a)), _0x2bdfac);
    }
    const kTests = [
            [
                'hello',
                _0x2c70a2(0x12b),
                _0x2c70a2(0x12c),
                _0x2c70a2(0x12d),
                -0x85 * -0x1 + 0xbe2 + -0xa67 * 0x1,
                _0x2c70a2(0x12e) + _0x2c70a2(0x12f) + _0x2c70a2(0x130)
            ],
            [
                'hello',
                _0x2c70a2(0x12b),
                _0x2c70a2(0x12c),
                _0x2c70a2(0x131),
                0x11e1 + 0x23 * -0x95 + 0x17f * 0x2,
                _0x2c70a2(0x132)
            ]
        ], tests = Promise[_0x2c70a2(0x11a)](kTests['map'](_0x17b1c4 => test(..._0x17b1c4)));
    tests[_0x2c70a2(0x122)](common[_0x2c70a2(0x123)]());
}
{
    async function test(_0x35ac79, _0x5ab132, _0x2a1a61, _0x56f519, _0x524937, _0x29fd09) {
        const _0x2802d1 = _0x2c70a2, _0x3ead3d = {
                'zpEMU': _0x2802d1(0x124),
                'umjOn': 'PBKDF2',
                'fPlQp': 'deriveBits',
                'OYFRK': _0x2802d1(0x12a)
            }, _0xde5e0e = new TextEncoder(), _0x1f7deb = await subtle['importKey'](_0x3ead3d['zpEMU'], _0xde5e0e[_0x2802d1(0x126)](_0x35ac79), {
                'name': _0x3ead3d['umjOn'],
                'hash': _0x56f519
            }, ![], [_0x3ead3d[_0x2802d1(0x133)]]), _0x3ab558 = await subtle[_0x2802d1(0x11c)]({
                'name': _0x3ead3d[_0x2802d1(0x134)],
                'hash': _0x56f519,
                'salt': _0xde5e0e['encode'](_0x5ab132),
                'iterations': _0x2a1a61
            }, _0x1f7deb, _0x524937);
        assert['strictEqual'](Buffer[_0x2802d1(0x129)](_0x3ab558)[_0x2802d1(0x135)](_0x3ead3d[_0x2802d1(0x136)]), _0x29fd09);
    }
    const kTests = [
            [
                'hello',
                _0x2c70a2(0x12b),
                -0x1ce2 + -0x1acd + 0x3b7 * 0xf,
                'SHA-256',
                0x2ba + -0x123 * 0x3 + 0x1 * 0x2af,
                _0x2c70a2(0x137) + _0x2c70a2(0x138) + _0x2c70a2(0x139)
            ],
            [
                _0x2c70a2(0x13a),
                _0x2c70a2(0x12b),
                0x22ec + -0x22d + 0x1 * -0x20ba,
                _0x2c70a2(0x131),
                0x2 * -0xa21 + 0x2c * -0x88 + 0x2c22,
                _0x2c70a2(0x13b)
            ]
        ], tests = Promise['all'](kTests[_0x2c70a2(0x13c)](_0x44cdb2 => test(..._0x44cdb2)));
    tests[_0x2c70a2(0x122)](common['mustCall']());
}
if (typeof internalBinding('crypto')[_0x2c70a2(0x13d)] === _0x2c70a2(0x13e)) {
    async function test(_0x5a3c55, _0x265450, _0x574548, _0x2499ea) {
        const _0x26c397 = _0x2c70a2, _0x4d8acc = {
                'QHlIX': _0x26c397(0x124),
                'mAqlp': _0x26c397(0x13f),
                'HDbba': _0x26c397(0x11c),
                'woXXD': function (_0x59b542, _0x237606) {
                    return _0x59b542(_0x237606);
                },
                'BjKht': function (_0x5f44a4, _0x52a385) {
                    return _0x5f44a4 instanceof _0x52a385;
                },
                'IGdzO': 'hex'
            }, _0x2a9c4a = new TextEncoder(), _0x1e36f0 = await subtle[_0x26c397(0x125)](_0x4d8acc[_0x26c397(0x140)], _0x2a9c4a[_0x26c397(0x126)](_0x5a3c55), { 'name': _0x4d8acc[_0x26c397(0x141)] }, ![], [_0x4d8acc[_0x26c397(0x142)]]), _0x5441b0 = await subtle[_0x26c397(0x11c)]({
                'name': _0x4d8acc['mAqlp'],
                'salt': _0x2a9c4a['encode'](_0x265450)
            }, _0x1e36f0, _0x574548);
        _0x4d8acc['woXXD'](assert, _0x4d8acc['BjKht'](_0x5441b0, ArrayBuffer)), assert[_0x26c397(0x128)](Buffer[_0x26c397(0x129)](_0x5441b0)['toString'](_0x4d8acc[_0x26c397(0x143)]), _0x2499ea);
    }
    const kTests = [
            [
                'hello',
                'there',
                0x4 * 0x7cc + 0x3 * 0x2ea + -0x25ee,
                _0x2c70a2(0x144) + _0x2c70a2(0x145)
            ],
            [
                _0x2c70a2(0x13a),
                'there',
                -0x1146 + 0x1 * -0xa88 + -0x1c4e * -0x1,
                _0x2c70a2(0x146)
            ]
        ], tests = Promise['all'](kTests[_0x2c70a2(0x13c)](_0x2a8ffb => test(..._0x2a8ffb)));
    tests[_0x2c70a2(0x122)](common[_0x2c70a2(0x123)]());
}
