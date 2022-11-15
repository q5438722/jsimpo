MongoInternals[_0x4324ae(179)] = function (_0x57620f, _0x3da3b9) {
    var _0x387ed4 = this;
    _0x387ed4['mongo'] = new MongoConnection(_0x57620f, _0x3da3b9);
}, _[_0x4324ae(180)](MongoInternals['RemoteCollectionDriver'][_0x4324ae(181)], {
    'open': function (_0x4f3519) {
        var _0x2d3bf9 = _0x4324ae, _0x17d10e = {
                'jDbgo': _0x2d3bf9(182),
                'COgSB': _0x2d3bf9(183),
                'wEvNu': _0x2d3bf9(184),
                'dTFkx': _0x2d3bf9(185),
                'ZWyTa': _0x2d3bf9(186),
                'TRRYj': _0x2d3bf9(187),
                'NzkBH': _0x2d3bf9(188),
                'QLKnJ': _0x2d3bf9(189),
                'IFAmN': _0x2d3bf9(190),
                'avnPs': _0x2d3bf9(191)
            }, _0x5cfe09 = this, _0x30cd0b = {};
        return _[_0x2d3bf9(192)]([
            _0x17d10e[_0x2d3bf9(193)],
            _0x2d3bf9(194),
            _0x17d10e[_0x2d3bf9(195)],
            _0x17d10e[_0x2d3bf9(196)],
            _0x17d10e[_0x2d3bf9(197)],
            _0x17d10e[_0x2d3bf9(198)],
            _0x17d10e['TRRYj'],
            _0x17d10e['NzkBH'],
            _0x17d10e[_0x2d3bf9(199)],
            _0x17d10e['IFAmN'],
            _0x17d10e[_0x2d3bf9(200)]
        ], function (_0x4079f2) {
            var _0x497e6d = _0x2d3bf9;
            _0x30cd0b[_0x4079f2] = _['bind'](_0x5cfe09[_0x497e6d(201)][_0x4079f2], _0x5cfe09['mongo'], _0x4f3519);
        }), _0x30cd0b;
    }
}), MongoInternals[_0x4324ae(202)] = _[_0x4324ae(203)](function () {
    var _0x53b76d = _0x4324ae, _0x97ffee = { 'KcmBx': '3|1|4|0|2' }, _0x4e81da = _0x97ffee[_0x53b76d(204)]['split']('|'), _0x49d8b5 = 1 * -8804 + 62 * 1 + 8742;
    while (!![]) {
        switch (_0x4e81da[_0x49d8b5++]) {
        case '0':
            if (!_0xd1f4b0)
                throw new Error(_0x53b76d(205));
            continue;
        case '1':
            var _0xd1f4b0 = process['env'][_0x53b76d(206)];
            continue;
        case '2':
            return new MongoInternals[(_0x53b76d(179))](_0xd1f4b0, _0x2a7ede);
        case '3':
            var _0x2a7ede = {};
            continue;
        case '4':
            process[_0x53b76d(207)][_0x53b76d(208)] && (_0x2a7ede[_0x53b76d(209)] = process['env'][_0x53b76d(208)]);
            continue;
        }
        break;
    }
});