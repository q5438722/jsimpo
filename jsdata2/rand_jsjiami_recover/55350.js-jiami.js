'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const {subtle} = require('crypto')['webcrypto'];
const {internalBinding} = require('internal/test/binding');
{
    async function test(_0x24481c) {
        const [_0x40f2c4, _0x3aefbc] = await Promise['all']([
            subtle['generateKey']({
                'name': 'ECDH',
                'namedCurve': _0x24481c
            }, !![], ['deriveBits']),
            subtle['generateKey']({
                'name': 'ECDH',
                'namedCurve': _0x24481c
            }, !![], ['deriveBits'])
        ]);
        const [_0x4f2a6b, _0x52bc13] = await Promise['all']([
            subtle['deriveBits']({
                'name': 'ECDH',
                'namedCurve': _0x24481c,
                'public': _0x40f2c4['publicKey']
            }, _0x3aefbc['privateKey'], 128),
            subtle['deriveBits']({
                'name': 'ECDH',
                'namedCurve': _0x24481c,
                'public': _0x3aefbc['publicKey']
            }, _0x40f2c4['privateKey'], 128)
        ]);
        assert(_0x4f2a6b instanceof ArrayBuffer);
        assert(_0x52bc13 instanceof ArrayBuffer);
        assert['deepStrictEqual'](_0x4f2a6b, _0x52bc13);
    }
    test('P-521')['then'](common['mustCall']());
}
{
    async function test(_0x32b7b5, _0x4db3c7, _0x1606ca, _0x3b7ae7, _0x52d4f6, _0x135fb2) {
        const _0x4aae14 = new TextEncoder();
        const _0x4f942a = await subtle['importKey']('raw', _0x4aae14['encode'](_0x32b7b5), {
            'name': 'HKDF',
            'hash': _0x3b7ae7
        }, ![], ['deriveBits']);
        const _0xec7d15 = await subtle['deriveBits']({
            'name': 'HKDF',
            'hash': _0x3b7ae7,
            'salt': _0x4aae14['encode'](_0x1606ca),
            'info': _0x4aae14['encode'](_0x4db3c7)
        }, _0x4f942a, _0x52d4f6);
        assert['strictEqual'](Buffer['from'](_0xec7d15)['toString']('hex'), _0x135fb2);
    }
    const kTests = [
        [
            'hello',
            'there',
            'my friend',
            'SHA-256',
            512,
            '14d93b0ccd99d4f2cbd9fbfe9c830b5b8a43e3e45e329' + '41ef21bdeb0fa87b6b6bfa5c54466aa5bf76cdc2685fb' + 'a4408ea5b94c049fe035649b46f92fdc519374'
        ],
        [
            'hello',
            'there',
            'my friend',
            'SHA-384',
            128,
            'e36cf2cf943d8f3a88adb80f478745c3'
        ]
    ];
    const tests = Promise['all'](kTests['map'](_0x43371a => test(..._0x43371a)));
    tests['then'](common['mustCall']());
}
{
    async function test(_0x4d67a5, _0x13c459, _0x237502, _0x4adb1b, _0x7afd1d, _0x1dc8c8) {
        const _0x215a4f = new TextEncoder();
        const _0xb632ef = await subtle['importKey']('raw', _0x215a4f['encode'](_0x4d67a5), {
            'name': 'PBKDF2',
            'hash': _0x4adb1b
        }, ![], ['deriveBits']);
        const _0x1aec90 = await subtle['deriveBits']({
            'name': 'PBKDF2',
            'hash': _0x4adb1b,
            'salt': _0x215a4f['encode'](_0x13c459),
            'iterations': _0x237502
        }, _0xb632ef, _0x7afd1d);
        assert['strictEqual'](Buffer['from'](_0x1aec90)['toString']('hex'), _0x1dc8c8);
    }
    const kTests = [
        [
            'hello',
            'there',
            10,
            'SHA-256',
            512,
            'f72d1cf4853fffbd16a42751765d11f8dc7939498ee7b7' + 'ce7678b4cb16fad88098110a83e71f4483ce73203f7a64' + '719d293280f780f9fafdcf46925c5c0588b3'
        ],
        [
            'hello',
            'there',
            5,
            'SHA-384',
            128,
            '201509b012c9cd2fbe7ea938f0c509b3'
        ]
    ];
    const tests = Promise['all'](kTests['map'](_0x33a9d4 => test(..._0x33a9d4)));
    tests['then'](common['mustCall']());
}
if (typeof internalBinding('crypto')['ScryptJob'] === 'function') {
    async function test(_0x484c8b, _0x4f37eb, _0x24c898, _0x39317d) {
        const _0x5f4099 = new TextEncoder();
        const _0x3b1116 = await subtle['importKey']('raw', _0x5f4099['encode'](_0x484c8b), { 'name': 'NODE-SCRYPT' }, ![], ['deriveBits']);
        const _0x518855 = await subtle['deriveBits']({
            'name': 'NODE-SCRYPT',
            'salt': _0x5f4099['encode'](_0x4f37eb)
        }, _0x3b1116, _0x24c898);
        assert(_0x518855 instanceof ArrayBuffer);
        assert['strictEqual'](Buffer['from'](_0x518855)['toString']('hex'), _0x39317d);
    }
    const kTests = [
        [
            'hello',
            'there',
            512,
            '30ddda6feabaac788eb81cc38f496cd5d9a165d320c537ea05331fe720db1061b3a27' + 'b91a8428e49d44078c1fa395cb1c6db336ba44ccb80faa6d74918769374'
        ],
        [
            'hello',
            'there',
            128,
            '30ddda6feabaac788eb81cc38f496cd5'
        ]
    ];
    const tests = Promise['all'](kTests['map'](_0xc5a2d3 => test(..._0xc5a2d3)));
    tests['then'](common['mustCall']());
}