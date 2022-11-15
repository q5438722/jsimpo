var YAMLException = require('./exception'), TYPE_CONSTRUCTOR_OPTIONS = [
        _0x97e7f0(476),
        _0x97e7f0(477),
        _0x97e7f0(478),
        _0x97e7f0(479),
        'predicate',
        'represent',
        _0x97e7f0(480),
        _0x97e7f0(481)
    ], YAML_NODE_KINDS = [
        'scalar',
        _0x97e7f0(482),
        'mapping'
    ];
function _0x514b(_0x47c9f3, _0x4e133f) {
    return _0x514b = function (_0x50f7f7, _0x669d3d) {
        _0x50f7f7 = _0x50f7f7 - (265 * 6 + 7000 + -262 * 31);
        var _0x59c9b2 = _0x5162[_0x50f7f7];
        return _0x59c9b2;
    }, _0x514b(_0x47c9f3, _0x4e133f);
}
function compileStyleAliases(_0x3a620b) {
    var _0x589bce = _0x97e7f0, _0x237e51 = {
            'rseoe': function (_0x3124ea, _0x5976a7) {
                return _0x3124ea(_0x5976a7);
            },
            'GJmJb': function (_0x17a12a, _0x56e64a) {
                return _0x17a12a !== _0x56e64a;
            }
        }, _0x482ab6 = {};
    return _0x237e51[_0x589bce(483)](_0x3a620b, null) && Object[_0x589bce(484)](_0x3a620b)[_0x589bce(485)](function (_0x38c622) {
        var _0x8749a3 = _0x589bce;
        _0x3a620b[_0x38c622][_0x8749a3(485)](function (_0x5186d0) {
            var _0x546c46 = _0x8749a3;
            _0x482ab6[_0x237e51[_0x546c46(486)](String, _0x5186d0)] = _0x38c622;
        });
    }), _0x482ab6;
}
function Type(_0x27ebd2, _0x48ea2c) {
    var _0xae489 = _0x97e7f0, _0x2999ca = {
            'bBvka': function (_0x818e67, _0x56c868) {
                return _0x818e67 + _0x56c868;
            },
            'KQNGZ': function (_0x4c6142, _0x1aab47) {
                return _0x4c6142 + _0x1aab47;
            },
            'VEDvN': _0xae489(487),
            'HNtaI': _0xae489(488),
            'qcLRx': function (_0x40caaf, _0x3b0d39) {
                return _0x40caaf || _0x3b0d39;
            },
            'zPKCi': 'kind',
            'BYPxn': _0xae489(478),
            'KUNsB': _0xae489(479),
            'bwEsY': 'represent',
            'vQOur': _0xae489(480),
            'UVfSv': function (_0x5ea409, _0x147241) {
                return _0x5ea409(_0x147241);
            },
            'WRRKF': _0xae489(481),
            'aWjaH': function (_0x42ab0c, _0x1aaacb) {
                return _0x42ab0c === _0x1aaacb;
            },
            'ANBLu': _0xae489(489),
            'ZZpKG': _0xae489(490),
            'uylRw': _0xae489(491)
        };
    _0x48ea2c = _0x2999ca[_0xae489(492)](_0x48ea2c, {}), Object['keys'](_0x48ea2c)[_0xae489(485)](function (_0x5b0037) {
        var _0x2ebf12 = _0xae489;
        if (TYPE_CONSTRUCTOR_OPTIONS['indexOf'](_0x5b0037) === -(359 + 2365 + 7 * -389))
            throw new YAMLException(_0x2999ca[_0x2ebf12(493)](_0x2999ca[_0x2ebf12(494)](_0x2999ca[_0x2ebf12(495)], _0x5b0037) + _0x2999ca[_0x2ebf12(496)], _0x27ebd2) + _0x2ebf12(491));
    }), this[_0xae489(497)] = _0x27ebd2, this[_0xae489(476)] = _0x48ea2c[_0x2999ca[_0xae489(498)]] || null, this['resolve'] = _0x48ea2c[_0xae489(477)] || function () {
        return !![];
    }, this['construct'] = _0x48ea2c[_0x2999ca['BYPxn']] || function (_0x5ea791) {
        return _0x5ea791;
    }, this[_0xae489(479)] = _0x48ea2c[_0x2999ca['KUNsB']] || null, this[_0xae489(499)] = _0x48ea2c[_0xae489(499)] || null, this[_0xae489(500)] = _0x48ea2c[_0x2999ca[_0xae489(501)]] || null, this[_0xae489(480)] = _0x48ea2c[_0x2999ca[_0xae489(502)]] || null, this[_0xae489(481)] = _0x2999ca['UVfSv'](compileStyleAliases, _0x48ea2c[_0x2999ca['WRRKF']] || null);
    if (_0x2999ca[_0xae489(503)](YAML_NODE_KINDS[_0xae489(504)](this[_0xae489(476)]), -(-1 * 1559 + 9803 + -8243)))
        throw new YAMLException(_0x2999ca[_0xae489(494)](_0x2999ca[_0xae489(505)] + this[_0xae489(476)] + _0x2999ca['ZZpKG'], _0x27ebd2) + _0x2999ca[_0xae489(506)]);
}
module['exports'] = Type;