var _0x6501 = [
    'env',
    'MONGO_OPLOG_URL',
    'oplogUrl',
    '515689pMDNSU',
    '243988XYYBgB',
    '2WPwYJY',
    '348807PVoogm',
    '11146cjcKoS',
    '30JOMPDZ',
    '4702PqSQuL',
    '124pSJSnr',
    '568231VxmkIy',
    '1bwePju',
    '1517PqnuEI',
    '239Qcvbrz',
    'RemoteCollectionDriver',
    'extend',
    'prototype',
    'find',
    'insert',
    'update',
    'upsert',
    'remove',
    '_ensureIndex',
    '_dropIndex',
    '_createCappedCollection',
    'dropCollection',
    'rawCollection',
    'each',
    'jDbgo',
    'findOne',
    'COgSB',
    'wEvNu',
    'dTFkx',
    'ZWyTa',
    'QLKnJ',
    'avnPs',
    'mongo',
    'defaultRemoteCollectionDriver',
    'once',
    'KcmBx',
    'MONGO_URL\x20must\x20be\x20set\x20in\x20environment',
    'MONGO_URL'
];
var _0x4324ae = _0x14c4;
function _0x14c4(_0x46b953, _0x1d4eff) {
    return _0x14c4 = function (_0x4c1e0f, _0x13b3a2) {
        _0x4c1e0f = _0x4c1e0f - (-0x120d + 0x25b7 + 0x9d * -0x1f);
        var _0x2f7a9f = _0x6501[_0x4c1e0f];
        return _0x2f7a9f;
    }, _0x14c4(_0x46b953, _0x1d4eff);
}
(function (_0x2360c2, _0x4b9492) {
    var _0x57e17d = _0x14c4;
    while (!![]) {
        try {
            var _0x22b982 = -parseInt(_0x57e17d(0xa7)) + parseInt(_0x57e17d(0xa8)) * parseInt(_0x57e17d(0xa9)) + parseInt(_0x57e17d(0xaa)) + parseInt(_0x57e17d(0xab)) * parseInt(_0x57e17d(0xac)) + -parseInt(_0x57e17d(0xad)) * -parseInt(_0x57e17d(0xae)) + -parseInt(_0x57e17d(0xaf)) * parseInt(_0x57e17d(0xb0)) + -parseInt(_0x57e17d(0xb1)) * parseInt(_0x57e17d(0xb2));
            if (_0x22b982 === _0x4b9492)
                break;
            else
                _0x2360c2['push'](_0x2360c2['shift']());
        } catch (_0x4968b1) {
            _0x2360c2['push'](_0x2360c2['shift']());
        }
    }
}(_0x6501, -0x4a * 0x9fb + -0x4a413 + 0xc38b1), MongoInternals[_0x4324ae(0xb3)] = function (_0x57620f, _0x3da3b9) {
    var _0x387ed4 = this;
    _0x387ed4['mongo'] = new MongoConnection(_0x57620f, _0x3da3b9);
}, _[_0x4324ae(0xb4)](MongoInternals['RemoteCollectionDriver'][_0x4324ae(0xb5)], {
    'open': function (_0x4f3519) {
        var _0x2d3bf9 = _0x4324ae, _0x17d10e = {
                'jDbgo': _0x2d3bf9(0xb6),
                'COgSB': _0x2d3bf9(0xb7),
                'wEvNu': _0x2d3bf9(0xb8),
                'dTFkx': _0x2d3bf9(0xb9),
                'ZWyTa': _0x2d3bf9(0xba),
                'TRRYj': _0x2d3bf9(0xbb),
                'NzkBH': _0x2d3bf9(0xbc),
                'QLKnJ': _0x2d3bf9(0xbd),
                'IFAmN': _0x2d3bf9(0xbe),
                'avnPs': _0x2d3bf9(0xbf)
            }, _0x5cfe09 = this, _0x30cd0b = {};
        return _[_0x2d3bf9(0xc0)]([
            _0x17d10e[_0x2d3bf9(0xc1)],
            _0x2d3bf9(0xc2),
            _0x17d10e[_0x2d3bf9(0xc3)],
            _0x17d10e[_0x2d3bf9(0xc4)],
            _0x17d10e[_0x2d3bf9(0xc5)],
            _0x17d10e[_0x2d3bf9(0xc6)],
            _0x17d10e['TRRYj'],
            _0x17d10e['NzkBH'],
            _0x17d10e[_0x2d3bf9(0xc7)],
            _0x17d10e['IFAmN'],
            _0x17d10e[_0x2d3bf9(0xc8)]
        ], function (_0x4079f2) {
            var _0x497e6d = _0x2d3bf9;
            _0x30cd0b[_0x4079f2] = _['bind'](_0x5cfe09[_0x497e6d(0xc9)][_0x4079f2], _0x5cfe09['mongo'], _0x4f3519);
        }), _0x30cd0b;
    }
}), MongoInternals[_0x4324ae(0xca)] = _[_0x4324ae(0xcb)](function () {
    var _0x53b76d = _0x4324ae, _0x97ffee = { 'KcmBx': '3|1|4|0|2' }, _0x4e81da = _0x97ffee[_0x53b76d(0xcc)]['split']('|'), _0x49d8b5 = 0x1 * -0x2264 + 0x3e * 0x1 + 0x2226;
    while (!![]) {
        switch (_0x4e81da[_0x49d8b5++]) {
        case '0':
            if (!_0xd1f4b0)
                throw new Error(_0x53b76d(0xcd));
            continue;
        case '1':
            var _0xd1f4b0 = process['env'][_0x53b76d(0xce)];
            continue;
        case '2':
            return new MongoInternals[(_0x53b76d(0xb3))](_0xd1f4b0, _0x2a7ede);
        case '3':
            var _0x2a7ede = {};
            continue;
        case '4':
            process[_0x53b76d(0xcf)][_0x53b76d(0xd0)] && (_0x2a7ede[_0x53b76d(0xd1)] = process['env'][_0x53b76d(0xd0)]);
            continue;
        }
        break;
    }
}));
