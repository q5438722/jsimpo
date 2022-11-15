'use strict';
const _0x748f = [
    '17981KXKOoy',
    '7YTdJhR',
    '431156DhDlWD',
    'asn1.js',
    'crypto',
    'asn1.js-rfc5280',
    'bignum',
    'SHA256',
    'readFileSync',
    './0-dns-key.pem',
    './0-dns-rsapub.der',
    'define',
    'null_',
    'encode',
    'der',
    'ca.example.com',
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
    '08080404',
    'last.example.com',
    'TBSCertificate',
    'createSign',
    'update',
    'sign',
    'pem',
    'CERTIFICATE',
    'writeFileSync',
    './0-dns-cert.pem',
    '414993zDJmBC',
    '535181TFmVrX',
    '97163JLAYgy',
    '7qtLucd',
    '1XADPLA',
    '26021LnrhrS',
    '579379xlPrUm',
    '1QOHHrH'
];
const _0x2aa741 = _0x1f99;
function _0x1f99(_0x5c68f2, _0x3a750c) {
    return _0x1f99 = function (_0x306c74, _0x2a76aa) {
        _0x306c74 = _0x306c74 - (-0x9e4 + 0x9c4 + 0x1 * 0x177);
        let _0xd04a93 = _0x748f[_0x306c74];
        return _0xd04a93;
    }, _0x1f99(_0x5c68f2, _0x3a750c);
}
(function (_0x24f708, _0x27b7d8) {
    const _0xad4eae = _0x1f99;
    while (!![]) {
        try {
            const _0x4755a8 = parseInt(_0xad4eae(0x157)) + -parseInt(_0xad4eae(0x158)) + parseInt(_0xad4eae(0x159)) * -parseInt(_0xad4eae(0x15a)) + -parseInt(_0xad4eae(0x15b)) * -parseInt(_0xad4eae(0x15c)) + parseInt(_0xad4eae(0x15d)) * parseInt(_0xad4eae(0x15e)) + -parseInt(_0xad4eae(0x15f)) * -parseInt(_0xad4eae(0x160)) + parseInt(_0xad4eae(0x161));
            if (_0x4755a8 === _0x27b7d8)
                break;
            else
                _0x24f708['push'](_0x24f708['shift']());
        } catch (_0x43a051) {
            _0x24f708['push'](_0x24f708['shift']());
        }
    }
}(_0x748f, 0xa0c35 + -0x6 * -0x317c + -0x5aeaf));
const asn1 = require(_0x2aa741(0x162)), crypto = require(_0x2aa741(0x163)), fs = require('fs'), rfc5280 = require(_0x2aa741(0x164)), BN = asn1[_0x2aa741(0x165)], id_at_commonName = [
        -0x719 + -0x1ba5 + 0x116 * 0x20,
        0x25 * 0x1 + -0x13c1 * 0x1 + 0x13a1,
        0x1327 * -0x1 + -0x83 + 0x1ca * 0xb,
        -0x20ea + -0x784 + 0x2871
    ], rsaEncryption = [
        0x561 + -0xf * -0x215 + -0x249b,
        0x1f45 + 0x1989 + -0x38cc,
        -0x13ed + -0x19e4 + 0x1 * 0x3119,
        0x4a8 + 0x368ab + -0xd * 0x215e,
        -0xe91 + 0x26e7 + -0x1855,
        0x146d + -0x101 * -0x1b + -0x2f87,
        0x2 * 0x11c + -0xd * 0x1b6 + 0x1407
    ], sha256WithRSAEncryption = [
        -0x3 * 0x4d2 + -0x1a * 0x4 + 0x8d * 0x1b,
        0x8 * -0x326 + 0x3 * -0x9d9 + -0x36bd * -0x1,
        0x8c0 + -0x116f + 0xbf7,
        0x13af7 + 0x2 * -0x1a494 + 0x3c9be,
        -0x247e + -0xac0 + 0x2f3f,
        0x16ce + 0x7 * 0x157 + -0x1 * 0x202e,
        0x205f * -0x1 + 0x602 * 0x4 + -0x3a * -0x25
    ], digest = _0x2aa741(0x166), private_key = fs[_0x2aa741(0x167)](_0x2aa741(0x168)), public_key = fs[_0x2aa741(0x167)](_0x2aa741(0x169)), now = Date['now'](), days = -0x13 * -0x154 + -0xf * 0x115 + 0x10d * 0x5, Null_ = asn1[_0x2aa741(0x16a)]('Null_', function () {
        const _0x429647 = _0x2aa741;
        this[_0x429647(0x16b)]();
    }), null_ = Null_[_0x2aa741(0x16c)](_0x2aa741(0x16d)), PrintStr = asn1['define']('PrintStr', function () {
        this['printstr']();
    }), issuer = PrintStr[_0x2aa741(0x16c)](_0x2aa741(0x16e), _0x2aa741(0x16d)), subject = PrintStr[_0x2aa741(0x16c)](_0x2aa741(0x16f), _0x2aa741(0x16d)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 0x1 * 0x4f9 + -0x3eb * -0x1 + -0x1 * 0x8d4),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x2aa741(0x170),
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
                'type': _0x2aa741(0x171),
                'value': now + days * (-0x748bf4c + -0x89 * -0x132c1d + 0x22c7fc7)
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
                'extnID': _0x2aa741(0x172),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x2aa741(0x173),
                        'value': _0x2aa741(0x174)
                    },
                    {
                        'type': _0x2aa741(0x173),
                        'value': _0x2aa741(0x175)
                    },
                    {
                        'type': _0x2aa741(0x176),
                        'value': Buffer[_0x2aa741(0x177)](_0x2aa741(0x178), _0x2aa741(0x179))
                    },
                    {
                        'type': _0x2aa741(0x176),
                        'value': Buffer[_0x2aa741(0x177)](_0x2aa741(0x17a), _0x2aa741(0x179))
                    },
                    {
                        'type': _0x2aa741(0x173),
                        'value': _0x2aa741(0x17b)
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x2aa741(0x17c)][_0x2aa741(0x16c)](tbs, _0x2aa741(0x16d)), sign = crypto[_0x2aa741(0x17d)](digest);
sign[_0x2aa741(0x17e)](tbs_der);
const signature = sign[_0x2aa741(0x17f)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0x0,
            'data': signature
        }
    }, pem = rfc5280['Certificate'][_0x2aa741(0x16c)](cert, _0x2aa741(0x180), { 'label': _0x2aa741(0x181) });
fs[_0x2aa741(0x182)](_0x2aa741(0x183), pem + '\x0a');
