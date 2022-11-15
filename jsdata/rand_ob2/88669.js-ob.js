var _0xcad7 = [
    '_createCappedCollection',
    'dropCollection',
    'rawCollection',
    'bind',
    'mongo',
    'defaultRemoteCollectionDriver',
    'once',
    'env',
    'MONGO_URL',
    'MONGO_OPLOG_URL',
    'oplogUrl',
    '18899KTcwkJ',
    '29cLqdOB',
    '1HoJLxY',
    '172097IFRUxI',
    '139585gmWMRM',
    '5KGsukS',
    '2vRFzhu',
    '290676MhqejA',
    '212tlWTbG',
    '2653cUceII',
    '236104BySMLf',
    '3469OdWWlq',
    '39HYuTlK',
    'RemoteCollectionDriver',
    'extend',
    'prototype',
    'each',
    'find',
    'findOne',
    'update',
    'upsert',
    'remove',
    '_ensureIndex'
];
function _0x4349(_0x53f8c8, _0x196c6e) {
    return _0x4349 = function (_0xcad71e, _0x434975) {
        _0xcad71e = _0xcad71e - 0x127;
        var _0x5f0c21 = _0xcad7[_0xcad71e];
        return _0x5f0c21;
    }, _0x4349(_0x53f8c8, _0x196c6e);
}
var _0x5dddbc = _0x4349;
(function (_0xc6528e, _0x120f91) {
    var _0x37471f = _0x4349;
    while (!![]) {
        try {
            var _0x1efb96 = -parseInt(_0x37471f(0x127)) * parseInt(_0x37471f(0x128)) + -parseInt(_0x37471f(0x129)) * -parseInt(_0x37471f(0x12a)) + parseInt(_0x37471f(0x12b)) * parseInt(_0x37471f(0x12c)) + parseInt(_0x37471f(0x12d)) * parseInt(_0x37471f(0x12e)) + -parseInt(_0x37471f(0x12f)) * parseInt(_0x37471f(0x130)) + parseInt(_0x37471f(0x131)) + -parseInt(_0x37471f(0x132)) * -parseInt(_0x37471f(0x133));
            if (_0x1efb96 === _0x120f91)
                break;
            else
                _0xc6528e['push'](_0xc6528e['shift']());
        } catch (_0x3437d7) {
            _0xc6528e['push'](_0xc6528e['shift']());
        }
    }
}(_0xcad7, 0xade46), MongoInternals[_0x5dddbc(0x134)] = function (_0xf1095d, _0x32eb73) {
    var _0x5de5ce = this;
    _0x5de5ce['mongo'] = new MongoConnection(_0xf1095d, _0x32eb73);
}, _[_0x5dddbc(0x135)](MongoInternals[_0x5dddbc(0x134)][_0x5dddbc(0x136)], {
    'open': function (_0x575370) {
        var _0xc4a773 = _0x5dddbc, _0x5b6772 = this, _0x386b3a = {};
        return _[_0xc4a773(0x137)]([
            _0xc4a773(0x138),
            _0xc4a773(0x139),
            'insert',
            _0xc4a773(0x13a),
            _0xc4a773(0x13b),
            _0xc4a773(0x13c),
            _0xc4a773(0x13d),
            '_dropIndex',
            _0xc4a773(0x13e),
            _0xc4a773(0x13f),
            _0xc4a773(0x140)
        ], function (_0x4f511e) {
            var _0xc51ed9 = _0xc4a773;
            _0x386b3a[_0x4f511e] = _[_0xc51ed9(0x141)](_0x5b6772[_0xc51ed9(0x142)][_0x4f511e], _0x5b6772['mongo'], _0x575370);
        }), _0x386b3a;
    }
}), MongoInternals[_0x5dddbc(0x143)] = _[_0x5dddbc(0x144)](function () {
    var _0x2ac9eb = _0x5dddbc, _0x405917 = {}, _0x1f6adb = process[_0x2ac9eb(0x145)][_0x2ac9eb(0x146)];
    process[_0x2ac9eb(0x145)][_0x2ac9eb(0x147)] && (_0x405917[_0x2ac9eb(0x148)] = process[_0x2ac9eb(0x145)][_0x2ac9eb(0x147)]);
    if (!_0x1f6adb)
        throw new Error('MONGO_URL\x20must\x20be\x20set\x20in\x20environment');
    return new MongoInternals[(_0x2ac9eb(0x134))](_0x1f6adb, _0x405917);
}));
