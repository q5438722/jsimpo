const _0x1b2e = ['lineStringsIntersect', 'isFalse', 'Polygon', 'RyzFL', 'pointInPolygon', 'geojson-utils - drawCircle', 'Point', 'length', 'drawCircle', 'lHCcx', 'geojson-utils - centroid', 'equal', 'coordinates', 'floor', 'pointDistance', 'geojson-utils - points distance generated tests', 'each', 'mFZET', 'abs', 'nqtLu', 'hNiVs', 'uSbgA', 'JbwxN', '103089TDRSdq', '480275YJSgve', '47191mbtRQp', '8BeBdZl', '881101FaZGOr', '101151aDnIIK', '157299NCmMnb', '1568079bcFcBX', 'add', 'ZjboZ', 'LineString', 'isTrue'];
const _0x311bba = _0x267a;

(function (_0x20a1b1, _0x4cad1a) {
    const _0x1512c6 = _0x267a;

    while (true) {
        try {
            const _0x39f0ee = parseInt(_0x1512c6(0x18c)) + parseInt(_0x1512c6(0x18d)) + parseInt(_0x1512c6(0x18e)) * parseInt(_0x1512c6(0x18f)) + parseInt(_0x1512c6(0x190)) + parseInt(_0x1512c6(0x191)) + parseInt(_0x1512c6(0x192)) + -parseInt(_0x1512c6(0x193));

            if (_0x39f0ee === _0x4cad1a) break;else _0x20a1b1.push(_0x20a1b1.shift());
        } catch (_0x2c1099) {
            _0x20a1b1.push(_0x20a1b1.shift());
        }
    }
})(_0x1b2e, 532364);
const gju = GeoJSON;

Tinytest[_0x311bba(0x194)]('geojson-utils - line intersects', function (_0x4515ff) {
    const _0x7d3977 = _0x311bba;
    const _0x550b97 = { 'ZjboZ': 'LineString' };
    const _0x129f88 = {
        'type': _0x550b97[_0x7d3977(0x195)],
        'coordinates': [[0, 0], [10, 10]]
    };
    const _0x5ea227 = {
        'type': _0x550b97[_0x7d3977(0x195)],
        'coordinates': [[10, 0], [0, 10]]
    };
    const _0x5b3448 = {
        'type': _0x7d3977(0x196),
        'coordinates': [[100, 100], [110, 110]]
    };

    _0x4515ff[_0x7d3977(0x197)](gju[_0x7d3977(0x198)](_0x129f88, _0x5ea227)), _0x4515ff[_0x7d3977(0x199)](gju[_0x7d3977(0x198)](_0x129f88, _0x5b3448));
});
const box = {
    'type': _0x311bba(0x19a),
    'coordinates': [[[0, 0], [10, 0], [10, 10], [0, 10]]]
};

function _0x267a(_0x88138f, _0x5e0d27) {
    return _0x267a = function (_0x1e45f7, _0x6f280e) {
        _0x1e45f7 = _0x1e45f7 - 396;
        const _0x495e4e = _0x1b2e[_0x1e45f7];

        return _0x495e4e;
    }, _0x267a(_0x88138f, _0x5e0d27);
}
Tinytest.add('geojson-utils - inside/outside of the box', function (_0x5a60a3) {
    const _0x401345 = _0x311bba;
    const _0x557b0b = { 'RyzFL': 'Point' };
    const _0x4bde63 = {
        'type': _0x557b0b[_0x401345(0x19b)],
        'coordinates': [5, 5]
    };
    const _0x4fc819 = {
        'type': _0x557b0b[_0x401345(0x19b)],
        'coordinates': [15, 15]
    };

    _0x5a60a3[_0x401345(0x197)](gju[_0x401345(0x19c)](_0x4bde63, box)), _0x5a60a3[_0x401345(0x199)](gju[_0x401345(0x19c)](_0x4fc819, box));
}), Tinytest[_0x311bba(0x194)](_0x311bba(0x19d), function (_0x40716b) {
    const _0x5c34e0 = _0x311bba;
    const _0x358c1a = { 'lHCcx': _0x5c34e0(0x19e) };

    _0x40716b[_0x5c34e0(0x19f)](gju[_0x5c34e0(0x1a0)](10, {
        'type': _0x5c34e0(0x19e),
        'coordinates': [0, 0]
    }).coordinates[0], 15), _0x40716b[_0x5c34e0(0x19f)](gju[_0x5c34e0(0x1a0)](10, {
        'type': _0x358c1a[_0x5c34e0(0x1a1)],
        'coordinates': [0, 0]
    }, 50).coordinates[0], 50);
}), Tinytest[_0x311bba(0x194)](_0x311bba(0x1a2), function (_0x1acc19) {
    const _0x3fb6f6 = _0x311bba;

    const _0x249c5d = gju.rectangleCentroid(box);

    _0x1acc19[_0x3fb6f6(0x1a3)](_0x249c5d[_0x3fb6f6(0x1a4)][0], 5), _0x1acc19[_0x3fb6f6(0x1a3)](_0x249c5d[_0x3fb6f6(0x1a4)][1], 5);
}), Tinytest[_0x311bba(0x194)]('geojson-utils - point distance', function (_0x44f68b) {
    const _0x555bfe = _0x311bba;
    const _0x282f9e = { 'ECWdo': _0x555bfe(0x19e) };
    const _0x3b37d3 = {
        'type': _0x555bfe(0x19e),
        'coordinates': [-122.260000705719, 37.80919060818706]
    };
    const _0x4ef525 = {
        'type': _0x282f9e.ECWdo,
        'coordinates': [-122.32083320617676, 37.78774223089045]
    };

    _0x44f68b[_0x555bfe(0x1a3)](Math[_0x555bfe(0x1a5)](gju[_0x555bfe(0x1a6)](_0x3b37d3, _0x4ef525)), 5852);
}), Tinytest[_0x311bba(0x194)](_0x311bba(0x1a7), function (_0x3db8b0) {
    const _0x1bb38a = _0x311bba;
    const _0x2ebe0c = {
        'mFZET': function (_0x1ba2df, _0x28cfeb) {
            return _0x1ba2df < _0x28cfeb;
        },
        'Enrtm': function (_0x319cf1, _0x4adb15) {
            return _0x319cf1 - _0x4adb15;
        },
        'TYADE': function (_0xe84be6, _0x7824cc) {
            return _0xe84be6 + _0x7824cc;
        },
        'nqtLu': function (_0xf21084, _0x51754c) {
            return _0xf21084 + _0x51754c;
        },
        'hNiVs': function (_0x22550f, _0x20a80b) {
            return _0x22550f - _0x20a80b;
        },
        'uSbgA': ' differenc',
        'JbwxN': _0x1bb38a(0x19e)
    };
    const _0x42a840 = [[[-19.416501816827804, -13.442164216190577], [8.694866622798145, -8.511979941977188]], [[151.2841189110186, -56.14564002258703], [167.77983197313733, 0.05544793023727834]], [[100.28413630579598, -88.02313695591874], [36.48786173714325, 53.44207073468715]], [[-70.34899035631679, 76.51596869179048], [154.91605914011598, -73.60970971290953]], [[96.28682994353585, 58.77288202662021], [-118.33936230326071, 72.07877089688554]], [[140.35530551429838, 10.507104953983799], [-67.73368513956666, 38.075836981181055]], [[69.55582775664516, 86.25450283149257], [-18.446230484172702, 6.116170521359891]], [[163.83647522330284, -65.7211532376241], [-159.2198902608361, -78.42975475382991]], [[-178.9383797585033, -54.87420454365201], [-175.35227065649815, -84.04084282391705]], [[-48.63219943456352, 11.284161149058491], [-179.12627786491066, -51.95622375886887]], [[140.29684206470847, -67.20720696030185], [-109.37452355003916, 36.03131077555008]], [[-154.6698773431126, 58.322094617411494], [61.18583445576951, -4.3424885796848685]], [[122.5562841903884, 10.43972848681733], [-11.756078708684072, -43.86124441982247]], [[-67.91648306301795, -86.38826347864233], [163.577536230674, 12.987319261068478]], [[91.65140007715672, 17.595150742679834], [135.80393003183417, 22.307532118167728]], [[-112.70280818711035, 34.45729674655013], [-127.42168210959062, -25.51327457977459]], [[-161.55807900894433, -77.40711871231906], [-92.66313794790767, -89.12077954714186]], [[39.966264681424946, 9.890176948625594], [-159.88646019320004, 40.60383598925546]], [[-57.48232689569704, 86.64061016729102], [59.53941993578337, -75.73194969259202]], [[-142.0938081513159, 80.76813141163439], [14.891517050098628, 64.56322408467531]]];
    const _0x3b6856 = [3115066.253657889, 6423493.23217478, 15848950.040260147, 18714226.542508014, 5223022.773112786, 13874476.31351122, 9314403.330938946, 1831929.5917785936, 3244710.9344544266, 13691492.4666934, 14525055.646223146, 13261602.433637196, 14275427.551162094, 11699799.361568067, 4628773.112942989, 6846704.025301012, 1368055.9401701286, 14041503.040981486, 18560499.734697536, 3793112.6186894816];

    _[_0x1bb38a(0x1a8)](_0x42a840, function (_0x56994a, _0x116709) {
        const _0xf87eb6 = _0x1bb38a;

        const _0xfae962 = GeoJSON[_0xf87eb6(0x1a6)].apply(this, _.map(_0x56994a, _0x36781e));

        _0x3db8b0[_0xf87eb6(0x197)](_0x2ebe0c[_0xf87eb6(0x1a9)](Math[_0xf87eb6(0x1aa)](_0x2ebe0c.Enrtm(_0xfae962, _0x3b6856[_0x116709])), 0.000001), _0x2ebe0c.TYADE(_0x2ebe0c[_0xf87eb6(0x1ab)](_0x2ebe0c[_0xf87eb6(0x1ab)](_0x2ebe0c[_0xf87eb6(0x1ab)](_0x2ebe0c[_0xf87eb6(0x1ab)]('Wrong distance between points ', JSON.stringify(_0x56994a)), ': '), _0xfae962), ', '), Math.abs(_0x2ebe0c[_0xf87eb6(0x1ac)](_0xfae962, _0x3b6856[_0x116709]))) + _0x2ebe0c[_0xf87eb6(0x1ad)]);
    });
    function _0x36781e(_0x11d8b4) {
        const _0x5184b6 = _0x1bb38a;

        return {
            'type': _0x2ebe0c[_0x5184b6(0x1ae)],
            'coordinates': _0x11d8b4
        };
    }
});
