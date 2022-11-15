const _0x1c81 = ['LineString', 'split', 'isFalse', 'lineStringsIntersect', 'GChNa', 'isTrue', 'geojson-utils - inside/outside of the box', 'Point', 'njvyQ', 'pointInPolygon', 'geojson-utils - drawCircle', 'length', 'drawCircle', 'JGJKq', 'coordinates', 'add', 'geojson-utils - centroid', 'rectangleCentroid', 'equal', 'geojson-utils - point distance', 'pointDistance', 'geojson-utils - points distance generated tests', 'Wrong distance between points ', 'each', 'apply', 'map', 'yqNNL', 'ELVbu', 'SNMCu', 'stringify', 'abs', '1YwNjyi', '255138olpstF', '129782BCvpni', '306139veabjM', '753943kxXCxI', '414622XtxUgN', '1BrldFM', '532802aBoCJq', '389bxJRTB', '1697QdDMGF', 'geojson-utils - line intersects', '2|3|1|4|0'];
const _0x45233b = _0x1441;

function _0x1441(_0x2cf5ba, _0x221d9a) {
    return _0x1441 = function (_0x5c141d, _0x1fe210) {
        _0x5c141d = _0x5c141d - 340;
        const _0x5bdbb5 = _0x1c81[_0x5c141d];

        return _0x5bdbb5;
    }, _0x1441(_0x2cf5ba, _0x221d9a);
}
(function (_0x59bd7c, _0x104063) {
    const _0x4c9b60 = _0x1441;

    while (true) {
        try {
            const _0x31a9c7 = parseInt(_0x4c9b60(0x154)) * -parseInt(_0x4c9b60(0x155)) + -parseInt(_0x4c9b60(0x156)) + parseInt(_0x4c9b60(0x157)) + parseInt(_0x4c9b60(0x158)) + -parseInt(_0x4c9b60(0x159)) + -parseInt(_0x4c9b60(0x15a)) * parseInt(_0x4c9b60(0x15b)) + parseInt(_0x4c9b60(0x15c)) * parseInt(_0x4c9b60(0x15d));

            if (_0x31a9c7 === _0x104063) break;else _0x59bd7c.push(_0x59bd7c.shift());
        } catch (_0x70986f) {
            _0x59bd7c.push(_0x59bd7c.shift());
        }
    }
})(_0x1c81, 387871);
const gju = GeoJSON;

Tinytest.add(_0x45233b(0x15e), function (_0x1468ff) {
    const _0x58ed04 = _0x45233b;
    const _0x4ec122 = {
        'uWNow': _0x58ed04(0x15f),
        'GChNa': _0x58ed04(0x160)
    };

    const _0x42f557 = _0x4ec122.uWNow[_0x58ed04(0x161)]('|');

    var _0x5b20ca = 0;

    while (true) {
        switch (_0x42f557[_0x5b20ca++]) {
            case '0':
                _0x1468ff[_0x58ed04(0x162)](gju[_0x58ed04(0x163)](_0x34bb31, _0xcdb22f));
                continue;
            case '1':
                const _0xcdb22f = {
                    'type': _0x4ec122[_0x58ed04(0x164)],
                    'coordinates': [[100, 100], [110, 110]]
                };

                continue;
            case '2':
                const _0x34bb31 = {
                    'type': _0x4ec122[_0x58ed04(0x164)],
                    'coordinates': [[0, 0], [10, 10]]
                };

                continue;
            case '3':
                const _0x10cc62 = {
                    'type': _0x4ec122[_0x58ed04(0x164)],
                    'coordinates': [[10, 0], [0, 10]]
                };

                continue;
            case '4':
                _0x1468ff[_0x58ed04(0x165)](gju[_0x58ed04(0x163)](_0x34bb31, _0x10cc62));
                continue;
        }
        break;
    }
});
const box = {
    'type': 'Polygon',
    'coordinates': [[[0, 0], [10, 0], [10, 10], [0, 10]]]
};

Tinytest.add(_0x45233b(0x166), function (_0x382820) {
    const _0x10ce23 = _0x45233b;
    const _0x2ca6f7 = { 'njvyQ': _0x10ce23(0x167) };
    const _0x1d2996 = {
        'type': _0x2ca6f7[_0x10ce23(0x168)],
        'coordinates': [5, 5]
    };
    const _0xd6ea64 = {
        'type': _0x2ca6f7[_0x10ce23(0x168)],
        'coordinates': [15, 15]
    };

    _0x382820[_0x10ce23(0x165)](gju[_0x10ce23(0x169)](_0x1d2996, box)), _0x382820[_0x10ce23(0x162)](gju.pointInPolygon(_0xd6ea64, box));
}), Tinytest.add(_0x45233b(0x16a), function (_0x5ad636) {
    const _0x4cc238 = _0x45233b;
    const _0x10e692 = { 'JGJKq': _0x4cc238(0x167) };

    _0x5ad636[_0x4cc238(0x16b)](gju[_0x4cc238(0x16c)](10, {
        'type': _0x10e692.JGJKq,
        'coordinates': [0, 0]
    }).coordinates[0], 15), _0x5ad636[_0x4cc238(0x16b)](gju[_0x4cc238(0x16c)](10, {
        'type': _0x10e692[_0x4cc238(0x16d)],
        'coordinates': [0, 0]
    }, 50)[_0x4cc238(0x16e)][0], 50);
}), Tinytest[_0x45233b(0x16f)](_0x45233b(0x170), function (_0x2f7ec4) {
    const _0x3511d2 = _0x45233b;

    const _0x499705 = gju[_0x3511d2(0x171)](box);

    _0x2f7ec4[_0x3511d2(0x172)](_0x499705[_0x3511d2(0x16e)][0], 5), _0x2f7ec4[_0x3511d2(0x172)](_0x499705[_0x3511d2(0x16e)][1], 5);
}), Tinytest[_0x45233b(0x16f)](_0x45233b(0x173), function (_0x210cae) {
    const _0x2eda90 = _0x45233b;
    const _0x3d8b52 = { 'wtdwh': _0x2eda90(0x167) };
    const _0x40457f = {
        'type': _0x2eda90(0x167),
        'coordinates': [-122.260000705719, 37.80919060818706]
    };
    const _0x11ef14 = {
        'type': _0x3d8b52.wtdwh,
        'coordinates': [-122.32083320617676, 37.78774223089045]
    };

    _0x210cae[_0x2eda90(0x172)](Math.floor(gju[_0x2eda90(0x174)](_0x40457f, _0x11ef14)), 5852);
}), Tinytest[_0x45233b(0x16f)](_0x45233b(0x175), function (_0x1feec5) {
    const _0x5c9cbe = _0x45233b;
    const _0x1d68f6 = {
        'yqNNL': function (_0x396fa9, _0x365daa) {
            return _0x396fa9 + _0x365daa;
        },
        'ELVbu': function (_0x9c3ff0, _0x5c90b5) {
            return _0x9c3ff0 + _0x5c90b5;
        },
        'SNMCu': _0x5c9cbe(0x176)
    };
    const _0x5d662e = [[[-19.416501816827804, -13.442164216190577], [8.694866622798145, -8.511979941977188]], [[151.2841189110186, -56.14564002258703], [167.77983197313733, 0.05544793023727834]], [[100.28413630579598, -88.02313695591874], [36.48786173714325, 53.44207073468715]], [[-70.34899035631679, 76.51596869179048], [154.91605914011598, -73.60970971290953]], [[96.28682994353585, 58.77288202662021], [-118.33936230326071, 72.07877089688554]], [[140.35530551429838, 10.507104953983799], [-67.73368513956666, 38.075836981181055]], [[69.55582775664516, 86.25450283149257], [-18.446230484172702, 6.116170521359891]], [[163.83647522330284, -65.7211532376241], [-159.2198902608361, -78.42975475382991]], [[-178.9383797585033, -54.87420454365201], [-175.35227065649815, -84.04084282391705]], [[-48.63219943456352, 11.284161149058491], [-179.12627786491066, -51.95622375886887]], [[140.29684206470847, -67.20720696030185], [-109.37452355003916, 36.03131077555008]], [[-154.6698773431126, 58.322094617411494], [61.18583445576951, -4.3424885796848685]], [[122.5562841903884, 10.43972848681733], [-11.756078708684072, -43.86124441982247]], [[-67.91648306301795, -86.38826347864233], [163.577536230674, 12.987319261068478]], [[91.65140007715672, 17.595150742679834], [135.80393003183417, 22.307532118167728]], [[-112.70280818711035, 34.45729674655013], [-127.42168210959062, -25.51327457977459]], [[-161.55807900894433, -77.40711871231906], [-92.66313794790767, -89.12077954714186]], [[39.966264681424946, 9.890176948625594], [-159.88646019320004, 40.60383598925546]], [[-57.48232689569704, 86.64061016729102], [59.53941993578337, -75.73194969259202]], [[-142.0938081513159, 80.76813141163439], [14.891517050098628, 64.56322408467531]]];
    const _0x185a4a = [3115066.253657889, 6423493.23217478, 15848950.040260147, 18714226.542508014, 5223022.773112786, 13874476.31351122, 9314403.330938946, 1831929.5917785936, 3244710.9344544266, 13691492.4666934, 14525055.646223146, 13261602.433637196, 14275427.551162094, 11699799.361568067, 4628773.112942989, 6846704.025301012, 1368055.9401701286, 14041503.040981486, 18560499.734697536, 3793112.6186894816];

    _[_0x5c9cbe(0x177)](_0x5d662e, function (_0x9690a2, _0x16d5fe) {
        const _0x111ae6 = _0x5c9cbe;

        const _0x4e7e37 = GeoJSON[_0x111ae6(0x174)][_0x111ae6(0x178)](this, _[_0x111ae6(0x179)](_0x9690a2, _0x53dbfc));

        _0x1feec5.isTrue(Math.abs(_0x4e7e37 - _0x185a4a[_0x16d5fe]) < 0.000001, _0x1d68f6[_0x111ae6(0x17a)](_0x1d68f6[_0x111ae6(0x17b)](_0x1d68f6[_0x111ae6(0x17b)](_0x1d68f6[_0x111ae6(0x17c)] + JSON[_0x111ae6(0x17d)](_0x9690a2), ': ') + _0x4e7e37 + ', ', Math[_0x111ae6(0x17e)](_0x4e7e37 - _0x185a4a[_0x16d5fe])), ' differenc'));
    });
    function _0x53dbfc(_0x2c4cc9) {
        const _0x3c77fc = _0x5c9cbe;

        return {
            'type': _0x3c77fc(0x167),
            'coordinates': _0x2c4cc9
        };
    }
});
