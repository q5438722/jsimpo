var _0x15df = [
    'geojson-utils\x20-\x20point\x20distance',
    'pointDistance',
    'geojson-utils\x20-\x20points\x20distance\x20generated\x20tests',
    'each',
    'apply',
    'map',
    'isTrue',
    'abs',
    'stringify',
    '\x20differenc',
    '104343ghJoPP',
    '1DmldUb',
    '224860yQxnbt',
    '107641WAJqnz',
    '7ilEaIW',
    '9762LkemZD',
    '234749XbPCHc',
    '1VPiYkk',
    '99559Miabiu',
    '298552YiSsmk',
    'add',
    'geojson-utils\x20-\x20line\x20intersects',
    'LineString',
    'lineStringsIntersect',
    'isFalse',
    'Point',
    'pointInPolygon',
    'geojson-utils\x20-\x20drawCircle',
    'length',
    'drawCircle',
    'coordinates',
    'geojson-utils\x20-\x20centroid',
    'rectangleCentroid',
    'equal'
];
var _0x80c384 = _0x7bdc;
(function (_0x16b3d7, _0x2af525) {
    var _0x21147e = _0x7bdc;
    while (!![]) {
        try {
            var _0xbd8261 = parseInt(_0x21147e(0x6f)) * parseInt(_0x21147e(0x70)) + parseInt(_0x21147e(0x71)) + -parseInt(_0x21147e(0x72)) + -parseInt(_0x21147e(0x73)) * parseInt(_0x21147e(0x74)) + parseInt(_0x21147e(0x75)) * -parseInt(_0x21147e(0x76)) + -parseInt(_0x21147e(0x77)) + parseInt(_0x21147e(0x78));
            if (_0xbd8261 === _0x2af525)
                break;
            else
                _0x16b3d7['push'](_0x16b3d7['shift']());
        } catch (_0x163bd3) {
            _0x16b3d7['push'](_0x16b3d7['shift']());
        }
    }
}(_0x15df, 0x1cae0));
var gju = GeoJSON;
function _0x7bdc(_0xb96209, _0x4c8b3e) {
    return _0x7bdc = function (_0x15dfc3, _0x7bdc3d) {
        _0x15dfc3 = _0x15dfc3 - 0x6f;
        var _0xf66a3f = _0x15df[_0x15dfc3];
        return _0xf66a3f;
    }, _0x7bdc(_0xb96209, _0x4c8b3e);
}
Tinytest[_0x80c384(0x79)](_0x80c384(0x7a), function (_0x365b58) {
    var _0x5f32d4 = _0x80c384, _0x4f7732 = {
            'type': 'LineString',
            'coordinates': [
                [
                    0x0,
                    0x0
                ],
                [
                    0xa,
                    0xa
                ]
            ]
        }, _0x26da7d = {
            'type': 'LineString',
            'coordinates': [
                [
                    0xa,
                    0x0
                ],
                [
                    0x0,
                    0xa
                ]
            ]
        }, _0x1ad3b4 = {
            'type': _0x5f32d4(0x7b),
            'coordinates': [
                [
                    0x64,
                    0x64
                ],
                [
                    0x6e,
                    0x6e
                ]
            ]
        };
    _0x365b58['isTrue'](gju[_0x5f32d4(0x7c)](_0x4f7732, _0x26da7d)), _0x365b58[_0x5f32d4(0x7d)](gju[_0x5f32d4(0x7c)](_0x4f7732, _0x1ad3b4));
});
var box = {
    'type': 'Polygon',
    'coordinates': [[
            [
                0x0,
                0x0
            ],
            [
                0xa,
                0x0
            ],
            [
                0xa,
                0xa
            ],
            [
                0x0,
                0xa
            ]
        ]]
};
Tinytest['add']('geojson-utils\x20-\x20inside/outside\x20of\x20the\x20box', function (_0x11ed9e) {
    var _0x118cbb = _0x80c384, _0x2a512a = {
            'type': _0x118cbb(0x7e),
            'coordinates': [
                0x5,
                0x5
            ]
        }, _0x204727 = {
            'type': _0x118cbb(0x7e),
            'coordinates': [
                0xf,
                0xf
            ]
        };
    _0x11ed9e['isTrue'](gju[_0x118cbb(0x7f)](_0x2a512a, box)), _0x11ed9e[_0x118cbb(0x7d)](gju[_0x118cbb(0x7f)](_0x204727, box));
}), Tinytest[_0x80c384(0x79)](_0x80c384(0x80), function (_0x399bae) {
    var _0x12eeab = _0x80c384;
    _0x399bae[_0x12eeab(0x81)](gju[_0x12eeab(0x82)](0xa, {
        'type': 'Point',
        'coordinates': [
            0x0,
            0x0
        ]
    })[_0x12eeab(0x83)][0x0], 0xf), _0x399bae['length'](gju[_0x12eeab(0x82)](0xa, {
        'type': _0x12eeab(0x7e),
        'coordinates': [
            0x0,
            0x0
        ]
    }, 0x32)[_0x12eeab(0x83)][0x0], 0x32);
}), Tinytest[_0x80c384(0x79)](_0x80c384(0x84), function (_0x3d4a29) {
    var _0x4849be = _0x80c384, _0xa7e033 = gju[_0x4849be(0x85)](box);
    _0x3d4a29[_0x4849be(0x86)](_0xa7e033[_0x4849be(0x83)][0x0], 0x5), _0x3d4a29[_0x4849be(0x86)](_0xa7e033['coordinates'][0x1], 0x5);
}), Tinytest[_0x80c384(0x79)](_0x80c384(0x87), function (_0x5e8e52) {
    var _0x119c69 = _0x80c384, _0x5665d0 = {
            'type': _0x119c69(0x7e),
            'coordinates': [
                -122.260000705719,
                37.80919060818706
            ]
        }, _0x464425 = {
            'type': _0x119c69(0x7e),
            'coordinates': [
                -122.32083320617676,
                37.78774223089045
            ]
        };
    _0x5e8e52[_0x119c69(0x86)](Math['floor'](gju[_0x119c69(0x88)](_0x5665d0, _0x464425)), 0x16dc);
}), Tinytest['add'](_0x80c384(0x89), function (_0x13f9a7) {
    var _0x3bbd8b = _0x80c384, _0x1eaa8f = [
            [
                [
                    -19.416501816827804,
                    -13.442164216190577
                ],
                [
                    8.694866622798145,
                    -8.511979941977188
                ]
            ],
            [
                [
                    151.2841189110186,
                    -56.14564002258703
                ],
                [
                    167.77983197313733,
                    0.05544793023727834
                ]
            ],
            [
                [
                    100.28413630579598,
                    -88.02313695591874
                ],
                [
                    36.48786173714325,
                    53.44207073468715
                ]
            ],
            [
                [
                    -70.34899035631679,
                    76.51596869179048
                ],
                [
                    154.91605914011598,
                    -73.60970971290953
                ]
            ],
            [
                [
                    96.28682994353585,
                    58.77288202662021
                ],
                [
                    -118.33936230326071,
                    72.07877089688554
                ]
            ],
            [
                [
                    140.35530551429838,
                    10.507104953983799
                ],
                [
                    -67.73368513956666,
                    38.075836981181055
                ]
            ],
            [
                [
                    69.55582775664516,
                    86.25450283149257
                ],
                [
                    -18.446230484172702,
                    6.116170521359891
                ]
            ],
            [
                [
                    163.83647522330284,
                    -65.7211532376241
                ],
                [
                    -159.2198902608361,
                    -78.42975475382991
                ]
            ],
            [
                [
                    -178.9383797585033,
                    -54.87420454365201
                ],
                [
                    -175.35227065649815,
                    -84.04084282391705
                ]
            ],
            [
                [
                    -48.63219943456352,
                    11.284161149058491
                ],
                [
                    -179.12627786491066,
                    -51.95622375886887
                ]
            ],
            [
                [
                    140.29684206470847,
                    -67.20720696030185
                ],
                [
                    -109.37452355003916,
                    36.03131077555008
                ]
            ],
            [
                [
                    -154.6698773431126,
                    58.322094617411494
                ],
                [
                    61.18583445576951,
                    -4.3424885796848685
                ]
            ],
            [
                [
                    122.5562841903884,
                    10.43972848681733
                ],
                [
                    -11.756078708684072,
                    -43.86124441982247
                ]
            ],
            [
                [
                    -67.91648306301795,
                    -86.38826347864233
                ],
                [
                    163.577536230674,
                    12.987319261068478
                ]
            ],
            [
                [
                    91.65140007715672,
                    17.595150742679834
                ],
                [
                    135.80393003183417,
                    22.307532118167728
                ]
            ],
            [
                [
                    -112.70280818711035,
                    34.45729674655013
                ],
                [
                    -127.42168210959062,
                    -25.51327457977459
                ]
            ],
            [
                [
                    -161.55807900894433,
                    -77.40711871231906
                ],
                [
                    -92.66313794790767,
                    -89.12077954714186
                ]
            ],
            [
                [
                    39.966264681424946,
                    9.890176948625594
                ],
                [
                    -159.88646019320004,
                    40.60383598925546
                ]
            ],
            [
                [
                    -57.48232689569704,
                    86.64061016729102
                ],
                [
                    59.53941993578337,
                    -75.73194969259202
                ]
            ],
            [
                [
                    -142.0938081513159,
                    80.76813141163439
                ],
                [
                    14.891517050098628,
                    64.56322408467531
                ]
            ]
        ], _0x2a3397 = [
            3115066.253657889,
            6423493.23217478,
            15848950.040260147,
            18714226.542508014,
            5223022.773112786,
            13874476.31351122,
            9314403.330938946,
            1831929.5917785936,
            3244710.9344544266,
            13691492.4666934,
            14525055.646223146,
            13261602.433637196,
            14275427.551162094,
            11699799.361568067,
            4628773.112942989,
            6846704.025301012,
            1368055.9401701286,
            14041503.040981486,
            18560499.734697536,
            3793112.6186894816
        ];
    _[_0x3bbd8b(0x8a)](_0x1eaa8f, function (_0x3db700, _0x14d7f4) {
        var _0x876d8e = _0x3bbd8b, _0x17da94 = GeoJSON['pointDistance'][_0x876d8e(0x8b)](this, _[_0x876d8e(0x8c)](_0x3db700, _0x4a6700));
        _0x13f9a7[_0x876d8e(0x8d)](Math[_0x876d8e(0x8e)](_0x17da94 - _0x2a3397[_0x14d7f4]) < 0.000001, 'Wrong\x20distance\x20between\x20points\x20' + JSON[_0x876d8e(0x8f)](_0x3db700) + ':\x20' + _0x17da94 + ',\x20' + Math[_0x876d8e(0x8e)](_0x17da94 - _0x2a3397[_0x14d7f4]) + _0x876d8e(0x90));
    });
    function _0x4a6700(_0xe60b2f) {
        return {
            'type': 'Point',
            'coordinates': _0xe60b2f
        };
    }
});
