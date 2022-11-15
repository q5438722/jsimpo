MongoInternals[_0x5dddbc(308)] = function (_0xf1095d, _0x32eb73) {
    var _0x5de5ce = this;
    _0x5de5ce['mongo'] = new MongoConnection(_0xf1095d, _0x32eb73);
}, _[_0x5dddbc(309)](MongoInternals[_0x5dddbc(308)][_0x5dddbc(310)], {
    'open': function (_0x575370) {
        var _0xc4a773 = _0x5dddbc, _0x5b6772 = this, _0x386b3a = {};
        return _[_0xc4a773(311)]([
            _0xc4a773(312),
            _0xc4a773(313),
            'insert',
            _0xc4a773(314),
            _0xc4a773(315),
            _0xc4a773(316),
            _0xc4a773(317),
            '_dropIndex',
            _0xc4a773(318),
            _0xc4a773(319),
            _0xc4a773(320)
        ], function (_0x4f511e) {
            var _0xc51ed9 = _0xc4a773;
            _0x386b3a[_0x4f511e] = _[_0xc51ed9(321)](_0x5b6772[_0xc51ed9(322)][_0x4f511e], _0x5b6772['mongo'], _0x575370);
        }), _0x386b3a;
    }
}), MongoInternals[_0x5dddbc(323)] = _[_0x5dddbc(324)](function () {
    var _0x2ac9eb = _0x5dddbc, _0x405917 = {}, _0x1f6adb = process[_0x2ac9eb(325)][_0x2ac9eb(326)];
    process[_0x2ac9eb(325)][_0x2ac9eb(327)] && (_0x405917[_0x2ac9eb(328)] = process[_0x2ac9eb(325)][_0x2ac9eb(327)]);
    if (!_0x1f6adb)
        throw new Error('MONGO_URL must be set in environment');
    return new MongoInternals[(_0x2ac9eb(308))](_0x1f6adb, _0x405917);
});