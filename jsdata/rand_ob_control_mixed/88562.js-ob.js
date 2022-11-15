var gju = GeoJSON;
Tinytest['add']('geojson-utils\x20-\x20line\x20intersects', function (_0x429805) {
    var _0x41b00a = {
            'MKIYz': '0|1|4|3|2',
            'TtsCR': 'LineString'
        }, _0x4aabfb = _0x41b00a['MKIYz']['split']('|'), _0x305f25 = 0x0;
    while (!![]) {
        switch (_0x4aabfb[_0x305f25++]) {
        case '0':
            var _0x17cf77 = {
                'type': _0x41b00a['TtsCR'],
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
            };
            continue;
        case '1':
            var _0x554aec = {
                'type': _0x41b00a['TtsCR'],
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
            };
            continue;
        case '2':
            _0x429805['isFalse'](gju['lineStringsIntersect'](_0x17cf77, _0x526648));
            continue;
        case '3':
            _0x429805['isTrue'](gju['lineStringsIntersect'](_0x17cf77, _0x554aec));
            continue;
        case '4':
            var _0x526648 = {
                'type': _0x41b00a['TtsCR'],
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
            continue;
        }
        break;
    }
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
Tinytest['add']('geojson-utils\x20-\x20inside/outside\x20of\x20the\x20box', function (_0x3323fc) {
    var _0x35e041 = { 'EoudP': 'Point' }, _0x51f9b0 = {
            'type': _0x35e041['EoudP'],
            'coordinates': [
                0x5,
                0x5
            ]
        }, _0x13d02e = {
            'type': _0x35e041['EoudP'],
            'coordinates': [
                0xf,
                0xf
            ]
        };
    _0x3323fc['isTrue'](gju['pointInPolygon'](_0x51f9b0, box)), _0x3323fc['isFalse'](gju['pointInPolygon'](_0x13d02e, box));
}), Tinytest['add']('geojson-utils\x20-\x20drawCircle', function (_0x4b6b68) {
    var _0x554ab0 = { 'zqhTO': 'Point' };
    _0x4b6b68['length'](gju['drawCircle'](0xa, {
        'type': _0x554ab0['zqhTO'],
        'coordinates': [
            0x0,
            0x0
        ]
    })['coordinates'][0x0], 0xf), _0x4b6b68['length'](gju['drawCircle'](0xa, {
        'type': _0x554ab0['zqhTO'],
        'coordinates': [
            0x0,
            0x0
        ]
    }, 0x32)['coordinates'][0x0], 0x32);
}), Tinytest['add']('geojson-utils\x20-\x20centroid', function (_0xed6997) {
    var _0x2b8415 = gju['rectangleCentroid'](box);
    _0xed6997['equal'](_0x2b8415['coordinates'][0x0], 0x5), _0xed6997['equal'](_0x2b8415['coordinates'][0x1], 0x5);
}), Tinytest['add']('geojson-utils\x20-\x20point\x20distance', function (_0x366d44) {
    var _0x2045ba = { 'YUUek': 'Point' }, _0x3072f4 = {
            'type': _0x2045ba['YUUek'],
            'coordinates': [
                -122.260000705719,
                37.80919060818706
            ]
        }, _0x50caaa = {
            'type': _0x2045ba['YUUek'],
            'coordinates': [
                -122.32083320617676,
                37.78774223089045
            ]
        };
    _0x366d44['equal'](Math['floor'](gju['pointDistance'](_0x3072f4, _0x50caaa)), 0x16dc);
}), Tinytest['add']('geojson-utils\x20-\x20points\x20distance\x20generated\x20tests', function (_0x49d9c5) {
    var _0x2f12dd = {
            'MwquK': function (_0x513aaa, _0x339054) {
                return _0x513aaa < _0x339054;
            },
            'zIbMy': function (_0x34d73a, _0x19669) {
                return _0x34d73a - _0x19669;
            },
            'tNUCa': function (_0x3dd6e5, _0x5441dc) {
                return _0x3dd6e5 + _0x5441dc;
            },
            'wtkuR': function (_0x5f1537, _0x36252b) {
                return _0x5f1537 + _0x36252b;
            },
            'mZFmw': 'Wrong\x20distance\x20between\x20points\x20',
            'VTcFF': '\x20differenc',
            'mvgjK': 'Point'
        }, _0x5ba0e3 = [
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
        ], _0x3dafd0 = [
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
    _['each'](_0x5ba0e3, function (_0x40e552, _0x164489) {
        var _0x41d5d3 = GeoJSON['pointDistance']['apply'](this, _['map'](_0x40e552, _0x5376e1));
        _0x49d9c5['isTrue'](_0x2f12dd['MwquK'](Math['abs'](_0x2f12dd['zIbMy'](_0x41d5d3, _0x3dafd0[_0x164489])), 0.000001), _0x2f12dd['tNUCa'](_0x2f12dd['tNUCa'](_0x2f12dd['tNUCa'](_0x2f12dd['tNUCa'](_0x2f12dd['tNUCa'](_0x2f12dd['wtkuR'](_0x2f12dd['mZFmw'], JSON['stringify'](_0x40e552)), ':\x20'), _0x41d5d3), ',\x20'), Math['abs'](_0x2f12dd['zIbMy'](_0x41d5d3, _0x3dafd0[_0x164489]))), _0x2f12dd['VTcFF']));
    });
    function _0x5376e1(_0x3c9482) {
        return {
            'type': _0x2f12dd['mvgjK'],
            'coordinates': _0x3c9482
        };
    }
});
