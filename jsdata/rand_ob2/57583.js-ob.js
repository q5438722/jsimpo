'use strict';
const _0xdf2e = [
    'CERTIFICATE',
    'writeFileSync',
    './0-dns-cert.pem',
    '1451643uoJYvA',
    '17FRmdDS',
    '41149BnNlrw',
    '62666zuuIsv',
    '5HMyJVX',
    '722655rpYeIt',
    '1168040zJPppd',
    '843321PvMNnl',
    '1ygMLbb',
    '1450499AiPTTX',
    'crypto',
    'asn1.js-rfc5280',
    './0-dns-key.pem',
    'readFileSync',
    './0-dns-rsapub.der',
    'now',
    'null_',
    'encode',
    'der',
    'define',
    'PrintStr',
    'ca.example.com',
    'evil.example.com',
    'rdnSequence',
    'subjectAlternativeName',
    'dNSName',
    'just-another.example.com',
    'from',
    'hex',
    'last.example.com',
    'createSign',
    'pem'
];
const _0x4daf12 = _0x6be3;
(function (_0x4bb44d, _0xd95e5a) {
    const _0x4f6c22 = _0x6be3;
    while (!![]) {
        try {
            const _0x584f08 = -parseInt(_0x4f6c22(0x1e8)) + parseInt(_0x4f6c22(0x1e9)) * -parseInt(_0x4f6c22(0x1ea)) + -parseInt(_0x4f6c22(0x1eb)) * -parseInt(_0x4f6c22(0x1ec)) + -parseInt(_0x4f6c22(0x1ed)) + parseInt(_0x4f6c22(0x1ee)) + parseInt(_0x4f6c22(0x1ef)) * parseInt(_0x4f6c22(0x1f0)) + parseInt(_0x4f6c22(0x1f1));
            if (_0x584f08 === _0xd95e5a)
                break;
            else
                _0x4bb44d['push'](_0x4bb44d['shift']());
        } catch (_0x4de924) {
            _0x4bb44d['push'](_0x4bb44d['shift']());
        }
    }
}(_0xdf2e, 0xdc0ef));
const asn1 = require('asn1.js'), crypto = require(_0x4daf12(0x1f2)), fs = require('fs'), rfc5280 = require(_0x4daf12(0x1f3)), BN = asn1['bignum'], id_at_commonName = [
        0x2,
        0x5,
        0x4,
        0x3
    ], rsaEncryption = [
        0x1,
        0x2,
        0x348,
        0x1bb8d,
        0x1,
        0x1,
        0x1
    ], sha256WithRSAEncryption = [
        0x1,
        0x2,
        0x348,
        0x1bb8d,
        0x1,
        0x1,
        0xb
    ], digest = 'SHA256', private_key = fs['readFileSync'](_0x4daf12(0x1f4)), public_key = fs[_0x4daf12(0x1f5)](_0x4daf12(0x1f6)), now = Date[_0x4daf12(0x1f7)](), days = 0xe42, Null_ = asn1['define']('Null_', function () {
        const _0x5bfc20 = _0x4daf12;
        this[_0x5bfc20(0x1f8)]();
    }), null_ = Null_[_0x4daf12(0x1f9)](_0x4daf12(0x1fa)), PrintStr = asn1[_0x4daf12(0x1fb)](_0x4daf12(0x1fc), function () {
        this['printstr']();
    }), issuer = PrintStr[_0x4daf12(0x1f9)](_0x4daf12(0x1fd), _0x4daf12(0x1fa)), subject = PrintStr['encode'](_0x4daf12(0x1fe), _0x4daf12(0x1fa)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 0x10),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x4daf12(0x1ff),
            'value': [[{
                        'type': id_at_commonName,
                        'value': issuer
                    }]]
        },
        'validity': {
            'notBefore': {
                'type': 'utcTime',
                'value': now
            },
            'notAfter': {
                'type': 'utcTime',
                'value': now + days * 0x5265c00
            }
        },
        'subject': {
            'type': _0x4daf12(0x1ff),
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
                'extnID': _0x4daf12(0x200),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x4daf12(0x201),
                        'value': 'good.example.org\x00.evil.example.com'
                    },
                    {
                        'type': _0x4daf12(0x201),
                        'value': _0x4daf12(0x202)
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x4daf12(0x203)]('08080808', 'hex')
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x4daf12(0x203)]('08080404', _0x4daf12(0x204))
                    },
                    {
                        'type': _0x4daf12(0x201),
                        'value': _0x4daf12(0x205)
                    }
                ]
            }]
    }, tbs_der = rfc5280['TBSCertificate'][_0x4daf12(0x1f9)](tbs, _0x4daf12(0x1fa)), sign = crypto[_0x4daf12(0x206)](digest);
sign['update'](tbs_der);
const signature = sign['sign'](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0x0,
            'data': signature
        }
    }, pem = rfc5280['Certificate']['encode'](cert, _0x4daf12(0x207), { 'label': _0x4daf12(0x208) });
function _0x6be3(_0x115fc4, _0x22e3d9) {
    return _0x6be3 = function (_0xdf2e60, _0x6be3e1) {
        _0xdf2e60 = _0xdf2e60 - 0x1e8;
        let _0xf0e84a = _0xdf2e[_0xdf2e60];
        return _0xf0e84a;
    }, _0x6be3(_0x115fc4, _0x22e3d9);
}
fs[_0x4daf12(0x209)](_0x4daf12(0x20a), pem + '\x0a');
