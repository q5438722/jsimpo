'use strict';
const _0x555e = [
    'a4408ea5b94c049fe035649b46f92fdc519374',
    'SHA-384',
    'mustCall',
    'PBKDF2',
    'ce7678b4cb16fad88098110a83e71f4483ce73203f7a64',
    '719d293280f780f9fafdcf46925c5c0588b3',
    '201509b012c9cd2fbe7ea938f0c509b3',
    'map',
    'crypto',
    'ScryptJob',
    'NODE-SCRYPT',
    'from',
    'b91a8428e49d44078c1fa395cb1c6db336ba44ccb80faa6d74918769374',
    '196417pYacyK',
    '291143GEbBhF',
    '3ldsABt',
    '4BGZNGW',
    '203626FzzHKK',
    '7NZovCs',
    '2951BZetuO',
    '283839oYjMSi',
    '224742ycsmiC',
    '120893MshcnV',
    '../common',
    'missing\x20crypto',
    'assert',
    'webcrypto',
    'internal/test/binding',
    'all',
    'generateKey',
    'deriveBits',
    'ECDH',
    'publicKey',
    'privateKey',
    'deepStrictEqual',
    'P-521',
    'then',
    'importKey',
    'raw',
    'HKDF',
    'encode',
    'strictEqual',
    'toString',
    'hex',
    'hello',
    'there',
    'my\x20friend'
];
const _0x286d14 = _0x3541;
(function (_0x34d489, _0x3c03fd) {
    const _0x2a95e1 = _0x3541;
    while (!![]) {
        try {
            const _0x29a5ca = parseInt(_0x2a95e1(0xa0)) + parseInt(_0x2a95e1(0xa1)) * -parseInt(_0x2a95e1(0xa2)) + -parseInt(_0x2a95e1(0xa3)) * -parseInt(_0x2a95e1(0xa4)) + -parseInt(_0x2a95e1(0xa5)) * -parseInt(_0x2a95e1(0xa6)) + parseInt(_0x2a95e1(0xa7)) + parseInt(_0x2a95e1(0xa8)) + -parseInt(_0x2a95e1(0xa9));
            if (_0x29a5ca === _0x3c03fd)
                break;
            else
                _0x34d489['push'](_0x34d489['shift']());
        } catch (_0x3bc77d) {
            _0x34d489['push'](_0x34d489['shift']());
        }
    }
}(_0x555e, 0x8542d));
const common = require(_0x286d14(0xaa));
if (!common['hasCrypto'])
    common['skip'](_0x286d14(0xab));
const assert = require(_0x286d14(0xac)), {subtle} = require('crypto')[_0x286d14(0xad)], {internalBinding} = require(_0x286d14(0xae));
function _0x3541(_0x35e27e, _0x3e775b) {
    return _0x3541 = function (_0x555e48, _0x354171) {
        _0x555e48 = _0x555e48 - 0xa0;
        let _0x43247e = _0x555e[_0x555e48];
        return _0x43247e;
    }, _0x3541(_0x35e27e, _0x3e775b);
}
{
    async function test(_0x58e0f3) {
        const _0x50f3e8 = _0x286d14, [_0x3b80c3, _0x14fcc1] = await Promise[_0x50f3e8(0xaf)]([
                subtle[_0x50f3e8(0xb0)]({
                    'name': 'ECDH',
                    'namedCurve': _0x58e0f3
                }, !![], [_0x50f3e8(0xb1)]),
                subtle[_0x50f3e8(0xb0)]({
                    'name': _0x50f3e8(0xb2),
                    'namedCurve': _0x58e0f3
                }, !![], [_0x50f3e8(0xb1)])
            ]), [_0xde0529, _0x93021] = await Promise[_0x50f3e8(0xaf)]([
                subtle[_0x50f3e8(0xb1)]({
                    'name': _0x50f3e8(0xb2),
                    'namedCurve': _0x58e0f3,
                    'public': _0x3b80c3['publicKey']
                }, _0x14fcc1['privateKey'], 0x80),
                subtle[_0x50f3e8(0xb1)]({
                    'name': 'ECDH',
                    'namedCurve': _0x58e0f3,
                    'public': _0x14fcc1[_0x50f3e8(0xb3)]
                }, _0x3b80c3[_0x50f3e8(0xb4)], 0x80)
            ]);
        assert(_0xde0529 instanceof ArrayBuffer), assert(_0x93021 instanceof ArrayBuffer), assert[_0x50f3e8(0xb5)](_0xde0529, _0x93021);
    }
    test(_0x286d14(0xb6))[_0x286d14(0xb7)](common['mustCall']());
}
{
    async function test(_0x13f8ff, _0x54dd0b, _0x3be636, _0x2a2586, _0x364dc4, _0x29553b) {
        const _0x32ce04 = _0x286d14, _0x1831a5 = new TextEncoder(), _0x55a1be = await subtle[_0x32ce04(0xb8)](_0x32ce04(0xb9), _0x1831a5['encode'](_0x13f8ff), {
                'name': _0x32ce04(0xba),
                'hash': _0x2a2586
            }, ![], [_0x32ce04(0xb1)]), _0x1a2d4e = await subtle[_0x32ce04(0xb1)]({
                'name': _0x32ce04(0xba),
                'hash': _0x2a2586,
                'salt': _0x1831a5[_0x32ce04(0xbb)](_0x3be636),
                'info': _0x1831a5[_0x32ce04(0xbb)](_0x54dd0b)
            }, _0x55a1be, _0x364dc4);
        assert[_0x32ce04(0xbc)](Buffer['from'](_0x1a2d4e)[_0x32ce04(0xbd)](_0x32ce04(0xbe)), _0x29553b);
    }
    const kTests = [
            [
                _0x286d14(0xbf),
                _0x286d14(0xc0),
                _0x286d14(0xc1),
                'SHA-256',
                0x200,
                '14d93b0ccd99d4f2cbd9fbfe9c830b5b8a43e3e45e329' + '41ef21bdeb0fa87b6b6bfa5c54466aa5bf76cdc2685fb' + _0x286d14(0xc2)
            ],
            [
                _0x286d14(0xbf),
                _0x286d14(0xc0),
                _0x286d14(0xc1),
                _0x286d14(0xc3),
                0x80,
                'e36cf2cf943d8f3a88adb80f478745c3'
            ]
        ], tests = Promise['all'](kTests['map'](_0x524edc => test(..._0x524edc)));
    tests[_0x286d14(0xb7)](common[_0x286d14(0xc4)]());
}
{
    async function test(_0x5828ba, _0x3f92e1, _0x3f0eff, _0x8337d9, _0x5089cd, _0x2bf7f7) {
        const _0x28d6fe = _0x286d14, _0x5049bd = new TextEncoder(), _0x46dc02 = await subtle[_0x28d6fe(0xb8)](_0x28d6fe(0xb9), _0x5049bd[_0x28d6fe(0xbb)](_0x5828ba), {
                'name': _0x28d6fe(0xc5),
                'hash': _0x8337d9
            }, ![], [_0x28d6fe(0xb1)]), _0x1a0b93 = await subtle[_0x28d6fe(0xb1)]({
                'name': 'PBKDF2',
                'hash': _0x8337d9,
                'salt': _0x5049bd[_0x28d6fe(0xbb)](_0x3f92e1),
                'iterations': _0x3f0eff
            }, _0x46dc02, _0x5089cd);
        assert[_0x28d6fe(0xbc)](Buffer['from'](_0x1a0b93)['toString'](_0x28d6fe(0xbe)), _0x2bf7f7);
    }
    const kTests = [
            [
                _0x286d14(0xbf),
                _0x286d14(0xc0),
                0xa,
                'SHA-256',
                0x200,
                'f72d1cf4853fffbd16a42751765d11f8dc7939498ee7b7' + _0x286d14(0xc6) + _0x286d14(0xc7)
            ],
            [
                _0x286d14(0xbf),
                'there',
                0x5,
                _0x286d14(0xc3),
                0x80,
                _0x286d14(0xc8)
            ]
        ], tests = Promise[_0x286d14(0xaf)](kTests[_0x286d14(0xc9)](_0x4288f6 => test(..._0x4288f6)));
    tests[_0x286d14(0xb7)](common[_0x286d14(0xc4)]());
}
if (typeof internalBinding(_0x286d14(0xca))[_0x286d14(0xcb)] === 'function') {
    async function test(_0x357bba, _0x4836db, _0x752c1e, _0x480be7) {
        const _0x1ca257 = _0x286d14, _0x2c9f4a = new TextEncoder(), _0xf40d96 = await subtle[_0x1ca257(0xb8)]('raw', _0x2c9f4a[_0x1ca257(0xbb)](_0x357bba), { 'name': _0x1ca257(0xcc) }, ![], [_0x1ca257(0xb1)]), _0x5bc70c = await subtle['deriveBits']({
                'name': 'NODE-SCRYPT',
                'salt': _0x2c9f4a[_0x1ca257(0xbb)](_0x4836db)
            }, _0xf40d96, _0x752c1e);
        assert(_0x5bc70c instanceof ArrayBuffer), assert['strictEqual'](Buffer[_0x1ca257(0xcd)](_0x5bc70c)[_0x1ca257(0xbd)](_0x1ca257(0xbe)), _0x480be7);
    }
    const kTests = [
            [
                _0x286d14(0xbf),
                _0x286d14(0xc0),
                0x200,
                '30ddda6feabaac788eb81cc38f496cd5d9a165d320c537ea05331fe720db1061b3a27' + _0x286d14(0xce)
            ],
            [
                _0x286d14(0xbf),
                _0x286d14(0xc0),
                0x80,
                '30ddda6feabaac788eb81cc38f496cd5'
            ]
        ], tests = Promise[_0x286d14(0xaf)](kTests[_0x286d14(0xc9)](_0x2e7e6b => test(..._0x2e7e6b)));
    tests[_0x286d14(0xb7)](common['mustCall']());
}
