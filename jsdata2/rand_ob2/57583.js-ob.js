'use strict';
const _0x2185 = [
    'pem',
    'CERTIFICATE',
    'writeFileSync',
    './0-dns-cert.pem',
    '790811lsGDAo',
    '1piQbKx',
    '1112977LkzEaf',
    '5KpRNIq',
    '139581SOSeIB',
    '327217axpgeN',
    '485344tTTbiD',
    '66stDHGC',
    '19861uMWlTQ',
    '3866663XDPxXy',
    'bignum',
    'SHA256',
    'readFileSync',
    './0-dns-key.pem',
    './0-dns-rsapub.der',
    'now',
    'define',
    'Null_',
    'null_',
    'encode',
    'der',
    'PrintStr',
    'ca.example.com',
    'evil.example.com',
    'rdnSequence',
    'utcTime',
    'dNSName',
    'good.example.org\x00.evil.example.com',
    'just-another.example.com',
    'iPAddress',
    'from',
    'hex',
    '08080404',
    'TBSCertificate',
    'createSign',
    'update',
    'sign',
    'Certificate'
];
const _0x174af8 = _0x495a;
(function (_0x35c5a7, _0x5971bd) {
    const _0x114e20 = _0x495a;
    while (!![]) {
        try {
            const _0x4a883b = parseInt(_0x114e20(0x1b3)) + parseInt(_0x114e20(0x1b4)) * -parseInt(_0x114e20(0x1b5)) + -parseInt(_0x114e20(0x1b6)) * parseInt(_0x114e20(0x1b7)) + -parseInt(_0x114e20(0x1b8)) + -parseInt(_0x114e20(0x1b9)) + parseInt(_0x114e20(0x1ba)) * -parseInt(_0x114e20(0x1bb)) + parseInt(_0x114e20(0x1bc));
            if (_0x4a883b === _0x5971bd)
                break;
            else
                _0x35c5a7['push'](_0x35c5a7['shift']());
        } catch (_0x43de44) {
            _0x35c5a7['push'](_0x35c5a7['shift']());
        }
    }
}(_0x2185, 0xb0905));
const asn1 = require('asn1.js'), crypto = require('crypto'), fs = require('fs'), rfc5280 = require('asn1.js-rfc5280'), BN = asn1[_0x174af8(0x1bd)], id_at_commonName = [
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
    ], digest = _0x174af8(0x1be), private_key = fs[_0x174af8(0x1bf)](_0x174af8(0x1c0)), public_key = fs['readFileSync'](_0x174af8(0x1c1)), now = Date[_0x174af8(0x1c2)](), days = 0xe42, Null_ = asn1[_0x174af8(0x1c3)](_0x174af8(0x1c4), function () {
        const _0x1b80fb = _0x174af8;
        this[_0x1b80fb(0x1c5)]();
    }), null_ = Null_[_0x174af8(0x1c6)](_0x174af8(0x1c7)), PrintStr = asn1[_0x174af8(0x1c3)](_0x174af8(0x1c8), function () {
        this['printstr']();
    }), issuer = PrintStr['encode'](_0x174af8(0x1c9), _0x174af8(0x1c7)), subject = PrintStr[_0x174af8(0x1c6)](_0x174af8(0x1ca), _0x174af8(0x1c7)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 0x10),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x174af8(0x1cb),
            'value': [[{
                        'type': id_at_commonName,
                        'value': issuer
                    }]]
        },
        'validity': {
            'notBefore': {
                'type': _0x174af8(0x1cc),
                'value': now
            },
            'notAfter': {
                'type': 'utcTime',
                'value': now + days * 0x5265c00
            }
        },
        'subject': {
            'type': _0x174af8(0x1cb),
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
                        'type': _0x174af8(0x1cd),
                        'value': _0x174af8(0x1ce)
                    },
                    {
                        'type': 'dNSName',
                        'value': _0x174af8(0x1cf)
                    },
                    {
                        'type': _0x174af8(0x1d0),
                        'value': Buffer[_0x174af8(0x1d1)]('08080808', _0x174af8(0x1d2))
                    },
                    {
                        'type': _0x174af8(0x1d0),
                        'value': Buffer[_0x174af8(0x1d1)](_0x174af8(0x1d3), _0x174af8(0x1d2))
                    },
                    {
                        'type': _0x174af8(0x1cd),
                        'value': 'last.example.com'
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x174af8(0x1d4)][_0x174af8(0x1c6)](tbs, _0x174af8(0x1c7)), sign = crypto[_0x174af8(0x1d5)](digest);
function _0x495a(_0x4ab910, _0xa105c8) {
    return _0x495a = function (_0x2185fb, _0x495a4d) {
        _0x2185fb = _0x2185fb - 0x1b3;
        let _0x3a4d44 = _0x2185[_0x2185fb];
        return _0x3a4d44;
    }, _0x495a(_0x4ab910, _0xa105c8);
}
sign[_0x174af8(0x1d6)](tbs_der);
const signature = sign[_0x174af8(0x1d7)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0x0,
            'data': signature
        }
    }, pem = rfc5280[_0x174af8(0x1d8)][_0x174af8(0x1c6)](cert, _0x174af8(0x1d9), { 'label': _0x174af8(0x1da) });
fs[_0x174af8(0x1db)](_0x174af8(0x1dc), pem + '\x0a');
