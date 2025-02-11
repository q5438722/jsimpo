const asn1 = require(_0x2aa741(354)), crypto = require(_0x2aa741(355)), fs = require('fs'), rfc5280 = require(_0x2aa741(356)), BN = asn1[_0x2aa741(357)], id_at_commonName = [
        -1817 + -7077 + 278 * 32,
        37 * 1 + -5057 * 1 + 5025,
        4903 * -1 + -131 + 458 * 11,
        -8426 + -1924 + 10353
    ], rsaEncryption = [
        1377 + -15 * -533 + -9371,
        8005 + 6537 + -14540,
        -5101 + -6628 + 1 * 12569,
        1192 + 223403 + -13 * 8542,
        -3729 + 9959 + -6229,
        5229 + -257 * -27 + -12167,
        2 * 284 + -13 * 438 + 5127
    ], sha256WithRSAEncryption = [
        -3 * 1234 + -26 * 4 + 141 * 27,
        8 * -806 + 3 * -2521 + -14013 * -1,
        2240 + -4463 + 3063,
        80631 + 2 * -107668 + 248254,
        -9342 + -2752 + 12095,
        5838 + 7 * 343 + -1 * 8238,
        8287 * -1 + 1538 * 4 + -58 * -37
    ], digest = _0x2aa741(358), private_key = fs[_0x2aa741(359)](_0x2aa741(360)), public_key = fs[_0x2aa741(359)](_0x2aa741(361)), now = Date['now'](), days = -19 * -340 + -15 * 277 + 269 * 5, Null_ = asn1[_0x2aa741(362)]('Null_', function () {
        const _0x429647 = _0x2aa741;
        this[_0x429647(363)]();
    }), null_ = Null_[_0x2aa741(364)](_0x2aa741(365)), PrintStr = asn1['define']('PrintStr', function () {
        this['printstr']();
    }), issuer = PrintStr[_0x2aa741(364)](_0x2aa741(366), _0x2aa741(365)), subject = PrintStr[_0x2aa741(364)](_0x2aa741(367), _0x2aa741(365)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 1 * 1273 + -1003 * -1 + -1 * 2260),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x2aa741(368),
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
                'type': _0x2aa741(369),
                'value': now + days * (-122208076 + -137 * -1256477 + 36470727)
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
                'unused': 0,
                'data': public_key
            }
        },
        'extensions': [{
                'extnID': _0x2aa741(370),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x2aa741(371),
                        'value': _0x2aa741(372)
                    },
                    {
                        'type': _0x2aa741(371),
                        'value': _0x2aa741(373)
                    },
                    {
                        'type': _0x2aa741(374),
                        'value': Buffer[_0x2aa741(375)](_0x2aa741(376), _0x2aa741(377))
                    },
                    {
                        'type': _0x2aa741(374),
                        'value': Buffer[_0x2aa741(375)](_0x2aa741(378), _0x2aa741(377))
                    },
                    {
                        'type': _0x2aa741(371),
                        'value': _0x2aa741(379)
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x2aa741(380)][_0x2aa741(364)](tbs, _0x2aa741(365)), sign = crypto[_0x2aa741(381)](digest);
sign[_0x2aa741(382)](tbs_der);
const signature = sign[_0x2aa741(383)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0,
            'data': signature
        }
    }, pem = rfc5280['Certificate'][_0x2aa741(364)](cert, _0x2aa741(384), { 'label': _0x2aa741(385) });
fs[_0x2aa741(386)](_0x2aa741(387), pem + '\n');