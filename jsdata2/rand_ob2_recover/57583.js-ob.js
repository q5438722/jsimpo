const asn1 = require('asn1.js'), crypto = require('crypto'), fs = require('fs'), rfc5280 = require('asn1.js-rfc5280'), BN = asn1[_0x174af8(445)], id_at_commonName = [
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
    ], digest = _0x174af8(446), private_key = fs[_0x174af8(447)](_0x174af8(448)), public_key = fs['readFileSync'](_0x174af8(449)), now = Date[_0x174af8(450)](), days = 3650, Null_ = asn1[_0x174af8(451)](_0x174af8(452), function () {
        const _0x1b80fb = _0x174af8;
        this[_0x1b80fb(453)]();
    }), null_ = Null_[_0x174af8(454)](_0x174af8(455)), PrintStr = asn1[_0x174af8(451)](_0x174af8(456), function () {
        this['printstr']();
    }), issuer = PrintStr['encode'](_0x174af8(457), _0x174af8(455)), subject = PrintStr[_0x174af8(454)](_0x174af8(458), _0x174af8(455)), tbs = {
        'version': 'v3',
        'serialNumber': new BN('01', 16),
        'signature': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'issuer': {
            'type': _0x174af8(459),
            'value': [[{
                        'type': id_at_commonName,
                        'value': issuer
                    }]]
        },
        'validity': {
            'notBefore': {
                'type': _0x174af8(460),
                'value': now
            },
            'notAfter': {
                'type': 'utcTime',
                'value': now + days * 86400000
            }
        },
        'subject': {
            'type': _0x174af8(459),
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
                'extnID': 'subjectAlternativeName',
                'critical': ![],
                'extnValue': [
                    {
                        'type': _0x174af8(461),
                        'value': _0x174af8(462)
                    },
                    {
                        'type': 'dNSName',
                        'value': _0x174af8(463)
                    },
                    {
                        'type': _0x174af8(464),
                        'value': Buffer[_0x174af8(465)]('08080808', _0x174af8(466))
                    },
                    {
                        'type': _0x174af8(464),
                        'value': Buffer[_0x174af8(465)](_0x174af8(467), _0x174af8(466))
                    },
                    {
                        'type': _0x174af8(461),
                        'value': 'last.example.com'
                    }
                ]
            }]
    }, tbs_der = rfc5280[_0x174af8(468)][_0x174af8(454)](tbs, _0x174af8(455)), sign = crypto[_0x174af8(469)](digest);
function _0x495a(_0x4ab910, _0xa105c8) {
    return _0x495a = function (_0x2185fb, _0x495a4d) {
        _0x2185fb = _0x2185fb - 435;
        let _0x3a4d44 = _0x2185[_0x2185fb];
        return _0x3a4d44;
    }, _0x495a(_0x4ab910, _0xa105c8);
}
sign[_0x174af8(470)](tbs_der);
const signature = sign[_0x174af8(471)](private_key), cert = {
        'tbsCertificate': tbs,
        'signatureAlgorithm': {
            'algorithm': sha256WithRSAEncryption,
            'parameters': null_
        },
        'signature': {
            'unused': 0,
            'data': signature
        }
    }, pem = rfc5280[_0x174af8(472)][_0x174af8(454)](cert, _0x174af8(473), { 'label': _0x174af8(474) });
fs[_0x174af8(475)](_0x174af8(476), pem + '\n');