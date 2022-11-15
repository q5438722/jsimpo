'use strict';
const _0x16c8 = [
    '426885OUJMoM',
    '70827xARYdQ',
    '4xcBiNh',
    '1WOYGMQ',
    '443239vimjqi',
    '2ZkTOrP',
    '171364aiSaMh',
    'asn1.js',
    'crypto',
    'asn1.js-rfc5280',
    'SHA256',
    'readFileSync',
    './0-dns-rsapub.der',
    'now',
    'encode',
    'der',
    'define',
    'PrintStr',
    'printstr',
    'evil.example.com',
    'rdnSequence',
    'utcTime',
    'subjectAlternativeName',
    'dNSName',
    'good.example.org\x00.evil.example.com',
    'just-another.example.com',
    'iPAddress',
    'from',
    '08080808',
    'hex',
    'last.example.com',
    'TBSCertificate',
    'createSign',
    'update',
    'sign',
    'Certificate',
    'pem',
    'CERTIFICATE',
    '489156MhJieM',
    '38144vnpoJH',
    '438753gWKXnu'
];
const _0x1b2abb = _0x32d7;
(function (_0x5e0fca, _0x4fca17) {
    const _0x270096 = _0x32d7;
    while (!![]) {
        try {
            const _0x13bbca = parseInt(_0x270096(0xa6)) + -parseInt(_0x270096(0xa7)) + parseInt(_0x270096(0xa8)) + -parseInt(_0x270096(0xa9)) + -parseInt(_0x270096(0xaa)) * parseInt(_0x270096(0xab)) + -parseInt(_0x270096(0xac)) * -parseInt(_0x270096(0xad)) + -parseInt(_0x270096(0xae)) * parseInt(_0x270096(0xaf));
            if (_0x13bbca === _0x4fca17)
                break;
            else
                _0x5e0fca['push'](_0x5e0fca['shift']());
        } catch (_0x35ed52) {
            _0x5e0fca['push'](_0x5e0fca['shift']());
        }
    }
}(_0x16c8, 0x4028a + 0x13d26 * -0x1 + -0x180af * -0x1));
const asn1 = require(_0x1b2abb(0xb0)), crypto = require(_0x1b2abb(0xb1)), fs = require('fs'), rfc5280 = require(_0x1b2abb(0xb2)), BN = asn1['bignum'], id_at_commonName = [
        0x99d * -0x4 + 0x805 + 0x1e71,
        0x2e * 0xbe + -0xc03 + -0x161c,
        -0x1 * -0x1a49 + -0x1 * 0x817 + -0x122e,
        0x14f2 + 0x2fd + -0x17ec
    ], rsaEncryption = [
        -0x2302 + 0x56a + 0x1 * 0x1d99,
        0x1 * -0x257b + -0x1fa1 + -0x6 * -0xb85,
        0x19 + -0x1eca + 0x21f9,
        0x24286 * -0x1 + 0x1d3 * -0x12b + -0x61f84 * -0x1,
        -0x1 * -0x2bf + 0x120d * -0x1 + -0xf4f * -0x1,
        -0x1e6d + 0xd9e + 0x434 * 0x4,
        -0x23d5 + -0x2 * 0x6f7 + 0x31c4
    ], sha256WithRSAEncryption = [
        0x1faf * -0x1 + -0x12b3 + 0x3263,
        -0x1fe + -0x14cc + 0x16cc,
        0x4cf * 0x1 + 0x103f * 0x1 + -0x11c6,
        -0xb3 * -0x42b + -0x205c * -0xb + -0x1154 * 0x26,
        -0x20c5 + 0x3 * 0xc27 + 0x29 * -0x17,
        0xde0 + 0x12c7 + 0x3 * -0xae2,
        -0xb40 + 0xa22 + 0x129
    ], digest = _0x1b2abb(0xb3), private_key = fs[_0x1b2abb(0xb4)]('./0-dns-key.pem'), public_key = fs[_0x1b2abb(0xb4)](_0x1b2abb(0xb5)), now = Date[_0x1b2abb(0xb6)](), days = -0x64a + 0xe28 + 0x664, Null_ = asn1['define']('Null_', function () {
        this['null_']();
    }), null_ = Null_[_0x1b2abb(0xb7)](_0x1b2abb(0xb8)), PrintStr = asn1[_0x1b2abb(0xb9)](_0x1b2abb(0xba), function () {
        const _0x4f0bd2 = _0x1b2abb;
        this[_0x4f0bd2(0xbb)]();
    }), issuer = PrintStr[_0x1b2abb(0xb7)]('ca.example.com', 'der'), subject = PrintStr[_0x1b2abb(0xb7)](_0x1b2abb(0xbc), _0x1b2abb(0xb8)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', -0x69 * 0x4f + 0xbee + 0x1489),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x1b2abb(0xbd),
            'value': [[{
                        'type': id_at_commonName,
                        'value': issuer
                    }]]
        },
        'validity': {
            'notBefore': {
                'type': _0x1b2abb(0xbe),
                'value': now
            },
            'notAfter': {
                'type': _0x1b2abb(0xbe),
                'value': now + days * (-0x28c2959 + -0x6f009ec + 0x269 * 0x6127d)
            }
        },
        'subject': {
            'type': _0x1b2abb(0xbd),
            'value': [[{
                        'type': id_at_commonName,
                        'value': subject
                    }]]
        },
        'subjectPublicKeyInfo': {
            'algorithm': {
                'algorithm': rsaEncryption,
                'parameters': null_
            },
            'subjectPublicKey': {
                'unused': 0x0,
                'data': public_key
            }
        },
        'extensions': [{
                'extnID': _0x1b2abb(0xbf),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x1b2abb(0xc0),
                        'value': _0x1b2abb(0xc1)
                    },
                    {
                        'type': _0x1b2abb(0xc0),
                        'value': _0x1b2abb(0xc2)
                    },
                    {
                        'type': _0x1b2abb(0xc3),
                        'value': Buffer[_0x1b2abb(0xc4)](_0x1b2abb(0xc5), _0x1b2abb(0xc6))
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x1b2abb(0xc4)]('08080404', _0x1b2abb(0xc6))
                    },
                    {
                        'type': _0x1b2abb(0xc0),
                        'value': _0x1b2abb(0xc7)
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x1b2abb(0xc8)][_0x1b2abb(0xb7)](tbs, _0x1b2abb(0xb8)), sign = crypto[_0x1b2abb(0xc9)](digest);
function _0x32d7(_0x26cb70, _0x3463fb) {
    return _0x32d7 = function (_0x6cebe3, _0x385a10) {
        _0x6cebe3 = _0x6cebe3 - (0x47 + 0x7 * -0x52b + 0x248c);
        let _0x3f22e4 = _0x16c8[_0x6cebe3];
        return _0x3f22e4;
    }, _0x32d7(_0x26cb70, _0x3463fb);
}
sign[_0x1b2abb(0xca)](tbs_der);
const signature = sign[_0x1b2abb(0xcb)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0x0,
            'data': signature
        }
    }, pem = rfc5280[_0x1b2abb(0xcc)][_0x1b2abb(0xb7)](cert, _0x1b2abb(0xcd), { 'label': _0x1b2abb(0xce) });
fs['writeFileSync']('./0-dns-cert.pem', pem + '\x0a');
