'use strict';
const asn1 = require('asn1.js'), crypto = require('crypto'), fs = require('fs'), rfc5280 = require('asn1.js-rfc5280'), BN = asn1['bignum'], id_at_commonName = [
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
    ], digest = 'SHA256', private_key = fs['readFileSync']('./0-dns-key.pem'), public_key = fs['readFileSync']('./0-dns-rsapub.der'), now = Date['now'](), days = 0xe42, Null_ = asn1['define']('Null_', function () {
        this['null_']();
    }), null_ = Null_['encode']('der'), PrintStr = asn1['define']('PrintStr', function () {
        this['printstr']();
    }), issuer = PrintStr['encode']('ca.example.com', 'der'), subject = PrintStr['encode']('evil.example.com', 'der'), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 0x10),
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
                'value': now + days * 0x5265c00
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
