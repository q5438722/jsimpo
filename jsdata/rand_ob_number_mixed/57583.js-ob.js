'use strict';
const asn1 = require('asn1.js'), crypto = require('crypto'), fs = require('fs'), rfc5280 = require('asn1.js-rfc5280'), BN = asn1['bignum'], id_at_commonName = [
        0xca1 + 0x1 * 0x1b79 + -0x2818,
        -0x1d33 + 0x1ae + 0xdc5 * 0x2,
        -0x3f * -0x1 + 0x1dc8 + -0x1e03,
        0x72e + -0xab1 + 0x29 * 0x16
    ], rsaEncryption = [
        0x18a6 + 0x79b + -0x2040,
        0x95f + -0x2315 * 0x1 + 0x19b8,
        -0x311 + -0x240e + 0x2a67,
        0xabd1 * 0x1 + -0x36b6 + 0x131 * 0x112,
        0x435 + -0x2059 + 0x1 * 0x1c25,
        0x1db8 + -0xf * -0x250 + -0x4067,
        -0x19d6 + -0x1 * -0x1998 + 0x3f
    ], sha256WithRSAEncryption = [
        0x558 + -0x86 + -0x4d1,
        -0x1529 + -0x6ad * 0x1 + -0x4 * -0x6f6,
        -0x1e23 + -0x1e99 + 0x4004,
        -0x8 * -0x49d5 + 0x35997 + -0x3ecb2,
        0x8 * -0x350 + 0x37 * 0x99 + -0x65e,
        -0xd * -0x134 + 0x115 * -0x9 + -0x5e6,
        0xd6 + 0x9 * -0x351 + -0xe87 * -0x2
    ], digest = 'SHA256', private_key = fs['readFileSync']('./0-dns-key.pem'), public_key = fs['readFileSync']('./0-dns-rsapub.der'), now = Date['now'](), days = -0x38b * 0x1 + 0x285 * 0x6 + 0x2af, Null_ = asn1['define']('Null_', function () {
        this['null_']();
    }), null_ = Null_['encode']('der'), PrintStr = asn1['define']('PrintStr', function () {
        this['printstr']();
    }), issuer = PrintStr['encode']('ca.example.com', 'der'), subject = PrintStr['encode']('evil.example.com', 'der'), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 0x18 * 0x5a + -0x3ae + -0x4b2),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': 'rdnSequence',
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
                'value': now + days * (-0x4cc076 * -0x13 + -0x7f99 * -0x388 + -0x24e810a)
            }
        },
        'subject': {
            'type': 'rdnSequence',
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
                'extnID': 'subjectAlternativeName',
                'critical': ![],
                'extnValue': [
                    {
                        'type': 'dNSName',
                        'value': 'good.example.org\x00.evil.example.com'
                    },
                    {
                        'type': 'dNSName',
                        'value': 'just-another.example.com'
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer['from']('08080808', 'hex')
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer['from']('08080404', 'hex')
                    },
                    {
                        'type': 'dNSName',
                        'value': 'last.example.com'
                    }
                ]
            }]
    }, tbs_der = rfc5280['TBSCertificate']['encode'](tbs, 'der'), sign = crypto['createSign'](digest);
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
    }, pem = rfc5280['Certificate']['encode'](cert, 'pem', { 'label': 'CERTIFICATE' });
fs['writeFileSync']('./0-dns-cert.pem', pem + '\x0a');
