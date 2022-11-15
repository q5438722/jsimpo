const asn1 = require('asn1.js'), crypto = require(_0x4daf12(498)), fs = require('fs'), rfc5280 = require(_0x4daf12(499)), BN = asn1['bignum'], id_at_commonName = [
        2,
        5,
        4,
        3
    ], rsaEncryption = [
        1,
        2,
        840,
        113549,
        1,
        1,
        1
    ], sha256WithRSAEncryption = [
        1,
        2,
        840,
        113549,
        1,
        1,
        11
    ], digest = 'SHA256', private_key = fs['readFileSync'](_0x4daf12(500)), public_key = fs[_0x4daf12(501)](_0x4daf12(502)), now = Date[_0x4daf12(503)](), days = 3650, Null_ = asn1['define']('Null_', function () {
        const _0x5bfc20 = _0x4daf12;
        this[_0x5bfc20(504)]();
    }), null_ = Null_[_0x4daf12(505)](_0x4daf12(506)), PrintStr = asn1[_0x4daf12(507)](_0x4daf12(508), function () {
        this['printstr']();
    }), issuer = PrintStr[_0x4daf12(505)](_0x4daf12(509), _0x4daf12(506)), subject = PrintStr['encode'](_0x4daf12(510), _0x4daf12(506)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 16),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x4daf12(511),
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
                'value': now + days * 86400000
            }
        },
        'subject': {
            'type': _0x4daf12(511),
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
                'unused': 0,
                'data': public_key
            }
        },
        'extensions': [{
                'extnID': _0x4daf12(512),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x4daf12(513),
                        'value': 'good.example.org\0.evil.example.com'
                    },
                    {
                        'type': _0x4daf12(513),
                        'value': _0x4daf12(514)
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x4daf12(515)]('08080808', 'hex')
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x4daf12(515)]('08080404', _0x4daf12(516))
                    },
                    {
                        'type': _0x4daf12(513),
                        'value': _0x4daf12(517)
                    }
                ]
            }]
    }, tbs_der = rfc5280['TBSCertificate'][_0x4daf12(505)](tbs, _0x4daf12(506)), sign = crypto[_0x4daf12(518)](digest);
sign['update'](tbs_der);
const signature = sign['sign'](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0,
            'data': signature
        }
    }, pem = rfc5280['Certificate']['encode'](cert, _0x4daf12(519), { 'label': _0x4daf12(520) });
function _0x6be3(_0x115fc4, _0x22e3d9) {
    return _0x6be3 = function (_0xdf2e60, _0x6be3e1) {
        _0xdf2e60 = _0xdf2e60 - 488;
        let _0xf0e84a = _0xdf2e[_0xdf2e60];
        return _0xf0e84a;
    }, _0x6be3(_0x115fc4, _0x22e3d9);
}
fs[_0x4daf12(521)](_0x4daf12(522), pem + '\n');