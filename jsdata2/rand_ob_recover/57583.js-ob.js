const asn1 = require(_0x1b2abb(176)), crypto = require(_0x1b2abb(177)), fs = require('fs'), rfc5280 = require(_0x1b2abb(178)), BN = asn1['bignum'], id_at_commonName = [
        2461 * -4 + 2053 + 7793,
        46 * 190 + -3075 + -5660,
        -1 * -6729 + -1 * 2071 + -4654,
        5362 + 765 + -6124
    ], rsaEncryption = [
        -8962 + 1386 + 1 * 7577,
        1 * -9595 + -8097 + -6 * -2949,
        25 + -7882 + 8697,
        148102 * -1 + 467 * -299 + -401284 * -1,
        -1 * -703 + 4621 * -1 + -3919 * -1,
        -7789 + 3486 + 1076 * 4,
        -9173 + -2 * 1783 + 12740
    ], sha256WithRSAEncryption = [
        8111 * -1 + -4787 + 12899,
        -510 + -5324 + 5836,
        1231 * 1 + 4159 * 1 + -4550,
        -179 * -1067 + -8284 * -11 + -4436 * 38,
        -8389 + 3 * 3111 + 41 * -23,
        3552 + 4807 + 3 * -2786,
        -2880 + 2594 + 297
    ], digest = _0x1b2abb(179), private_key = fs[_0x1b2abb(180)]('./0-dns-key.pem'), public_key = fs[_0x1b2abb(180)](_0x1b2abb(181)), now = Date[_0x1b2abb(182)](), days = -1610 + 3624 + 1636, Null_ = asn1['define']('Null_', function () {
        this['null_']();
    }), null_ = Null_[_0x1b2abb(183)](_0x1b2abb(184)), PrintStr = asn1[_0x1b2abb(185)](_0x1b2abb(186), function () {
        const _0x4f0bd2 = _0x1b2abb;
        this[_0x4f0bd2(187)]();
    }), issuer = PrintStr[_0x1b2abb(183)]('ca.example.com', 'der'), subject = PrintStr[_0x1b2abb(183)](_0x1b2abb(188), _0x1b2abb(184)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', -105 * 79 + 3054 + 5257),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x1b2abb(189),
            'value': [[{
                        'type': id_at_commonName,
                        'value': issuer
                    }]]
        },
        'validity': {
            'notBefore': {
                'type': _0x1b2abb(190),
                'value': now
            },
            'notAfter': {
                'type': _0x1b2abb(190),
                'value': now + days * (-42740057 + -116394476 + 617 * 397949)
            }
        },
        'subject': {
            'type': _0x1b2abb(189),
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
                'extnID': _0x1b2abb(191),
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x1b2abb(192),
                        'value': _0x1b2abb(193)
                    },
                    {
                        'type': _0x1b2abb(192),
                        'value': _0x1b2abb(194)
                    },
                    {
                        'type': _0x1b2abb(195),
                        'value': Buffer[_0x1b2abb(196)](_0x1b2abb(197), _0x1b2abb(198))
                    },
                    {
                        'type': 'iPAddress',
                        'value': Buffer[_0x1b2abb(196)]('08080404', _0x1b2abb(198))
                    },
                    {
                        'type': _0x1b2abb(192),
                        'value': _0x1b2abb(199)
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x1b2abb(200)][_0x1b2abb(183)](tbs, _0x1b2abb(184)), sign = crypto[_0x1b2abb(201)](digest);
function _0x32d7(_0x26cb70, _0x3463fb) {
    return _0x32d7 = function (_0x6cebe3, _0x385a10) {
        _0x6cebe3 = _0x6cebe3 - (71 + 7 * -1323 + 9356);
        let _0x3f22e4 = _0x16c8[_0x6cebe3];
        return _0x3f22e4;
    }, _0x32d7(_0x26cb70, _0x3463fb);
}
sign[_0x1b2abb(202)](tbs_der);
const signature = sign[_0x1b2abb(203)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0,
            'data': signature
        }
    }, pem = rfc5280[_0x1b2abb(204)][_0x1b2abb(183)](cert, _0x1b2abb(205), { 'label': _0x1b2abb(206) });
fs['writeFileSync']('./0-dns-cert.pem', pem + '\n');