var gju = GeoJSON;
Tinytest['add']('geojson-utils\x20-\x20line\x20intersects', function (_0x4f2d6f) {
    var _0x34c8c6 = {
            'type': 'LineString',
            'coordinates': [
                [
                    -0x3ff + 0x1cee + -0x18ef,
                    0x1cb7 * 0x1 + 0x2 * -0x2e + -0x1c5b
                ],
                [
                    0x162b + 0x166f * -0x1 + -0x1 * -0x4e,
                    0x15c + 0xd4e + 0x120 * -0xd
                ]
            ]
        }, _0x2e1515 = {
            'type': 'LineString',
            'coordinates': [
                [
                    -0x26e9 + -0x2187 + 0x487a,
                    -0x7bb * 0x2 + 0x189 + 0xded
                ],
                [
                    -0x1 * -0x69 + -0xe9 + -0x80 * -0x1,
                    0x2085 + 0x31a + -0x2395
                ]
            ]
        }, _0x5944bb = {
            'type': 'LineString',
            'coordinates': [
                [
                    0x12da + 0x22f5 + -0x356b,
                    0xa75 * 0x2 + 0x1 * -0x9f7 + -0xa8f
                ],
                [
                    -0x1 * 0x2611 + -0xc08 + -0x41 * -0xc7,
                    -0xec4 + -0x45d * -0x3 + -0x31 * -0xb
                ]
            ]
        };
    _0x4f2d6f['isTrue'](gju['lineStringsIntersect'](_0x34c8c6, _0x2e1515)), _0x4f2d6f['isFalse'](gju['lineStringsIntersect'](_0x34c8c6, _0x5944bb));
});
var box = {
    'type': 'Polygon',
    'coordinates': [[
            [
                -0x68d * -0x2 + 0x1345 + -0x205f,
                -0x2 * 0xe79 + 0x5 * -0xee + 0x2198
            ],
            [
                -0x12f3 + 0x112b + 0x1d2 * 0x1,
                0x9 * 0x1 + 0x1f * -0xb5 + -0x15e2 * -0x1
            ],
            [
                -0x2 * -0x64a + 0x1324 + -0x1fae * 0x1,
                -0x1750 + -0x1a7b * 0x1 + 0x31d5
            ],
            [
                0xcb3 + 0x1372 + -0x2025,
                0x2287 + 0x20c5 + -0x21a1 * 0x2
            ]
        ]]
};
Tinytest['add']('geojson-utils\x20-\x20inside/outside\x20of\x20the\x20box', function (_0x156094) {
    var _0x17264a = {
            'type': 'Point',
            'coordinates': [
                0x1 * 0xf5b + -0x201e + -0xb3 * -0x18,
                0xea8 + 0xb * -0xc7 + -0x616
            ]
        }, _0x42c3ba = {
            'type': 'Point',
            'coordinates': [
                0x2660 + 0x1b72 + -0x965 * 0x7,
                0x9 * 0x22d + -0x1f * -0x29 + 0x1 * -0x187d
            ]
        };
    _0x156094['isTrue'](gju['pointInPolygon'](_0x17264a, box)), _0x156094['isFalse'](gju['pointInPolygon'](_0x42c3ba, box));
}), Tinytest['add']('geojson-utils\x20-\x20drawCircle', function (_0x33a2f1) {
    _0x33a2f1['length'](gju['drawCircle'](0x57 * 0x2d + -0x21cf + 0x128e, {
        'type': 'Point',
        'coordinates': [
            0x1b00 + 0xa1 * -0x3d + 0xb5d,
            -0x49 * 0x22 + -0xea1 + 0x1853
        ]
    })['coordinates'][-0x24e8 + 0x1da1 + 0x17 * 0x51], 0x2 * 0xf36 + 0x5f3 * -0x4 + 0x691 * -0x1), _0x33a2f1['length'](gju['drawCircle'](0x1aa8 + -0xfe1 + -0xabd, {
        'type': 'Point',
        'coordinates': [
            0x216e + 0x1 * -0x24ad + 0x1 * 0x33f,
            -0x2f5 * 0x3 + 0x5 * -0x7b1 + 0x2f54
        ]
    }, 0x1478 + 0x25 * -0x4d + 0x1 * -0x925)['coordinates'][0x1 * -0x159 + 0x167a + -0x259 * 0x9], 0x60c + -0x1 * -0xd61 + 0x9 * -0x223);
}), Tinytest['add']('geojson-utils\x20-\x20centroid', function (_0x46effe) {
    var _0x28eaaf = gju['rectangleCentroid'](box);
    _0x46effe['equal'](_0x28eaaf['coordinates'][0x1 * -0x21e + 0x7cb + -0x5ad], 0x24d4 * -0x1 + 0x233 * -0x1 + 0x594 * 0x7), _0x46effe['equal'](_0x28eaaf['coordinates'][0xabf * 0x1 + 0xd6d + -0x182b], -0x4 * 0x6f5 + -0x461 * -0x5 + -0x4 * -0x17d);
}), Tinytest['add']('geojson-utils\x20-\x20point\x20distance', function (_0x53602e) {
    var _0x410a0c = {
            'type': 'Point',
            'coordinates': [
                -(-0xb0 * 0x7 + 0x1aa * -0x3 + 0xa48 + 0.26000070571899414),
                -0x1968 * 0x1 + 0x8 * 0x387 + -0x2ab * 0x1 + 0.809190608187059
            ]
        }, _0x556e70 = {
            'type': 'Point',
            'coordinates': [
                -(-0x22ca + 0x1131 * -0x1 + 0x3475 + 0.3208332061767578),
                0x8c * -0x2 + 0x5f2 * 0x1 + 0x1 * -0x4b5 + 0.7877422308904514
            ]
        };
    _0x53602e['equal'](Math['floor'](gju['pointDistance'](_0x410a0c, _0x556e70)), 0x7bb * 0x5 + 0x702 + 0x1 * -0x16cd);
}), Tinytest['add']('geojson-utils\x20-\x20points\x20distance\x20generated\x20tests', function (_0x55d29f) {
    var _0x3b297f = [
            [
                [
                    -(0x2 * 0x87f + -0x201f + 0xf34 + 0.41650181682780385),
                    -(0x1256 * 0x1 + 0x1 * -0x13af + 0x166 + 0.44216421619057655)
                ],
                [
                    -0xebf * 0x2 + -0x7 * -0x7f + 0x1a0d + 0.6948666227981448,
                    -(-0xb20 + 0x382 + 0x7a6 * 0x1 + 0.511979941977188)
                ]
            ],
            [
                [
                    -0x24dc + -0x3 * -0xae7 + 0x4be + 0.2841189110185951,
                    -(0xbaf * 0x1 + -0xbba + 0x43 + 0.14564002258703113)
                ],
                [
                    0x1 * 0x18c2 + -0xb99 * 0x3 + 0xab0 + 0.779831973137334,
                    0x1 * 0x4c1 + 0x3b * -0x1 + -0x486 + 0.05544793023727834
                ]
            ],
            [
                [
                    0x31e + 0x1 * -0xc1b + 0x961 + 0.2841363057959825,
                    -(-0x1fe8 + 0xe60 + 0x11e0 + 0.023136955918744206)
                ],
                [
                    0x3c * 0x9a + 0x2263 + -0x4657 + 0.4878617371432483,
                    -0x1c83 + 0x7 * 0x6b + -0xd5 * -0x1f + 0.4420707346871495
                ]
            ],
            [
                [
                    -(-0xf06 + -0x9ef * 0x1 + 0x193b + 0.34899035631679),
                    0x1d8c + 0x17 * -0xbc + 0x317 * -0x4 + 0.5159686917904764
                ],
                [
                    0x357 + 0x1c6f + -0x1f2c + 0.9160591401159763,
                    -(0xc8a * -0x1 + -0x3 * -0x772 + -0x983 + 0.6097097129095346)
                ]
            ],
            [
                [
                    0x14a + 0x195 + -0x27f + 0.28682994353584945,
                    -0x8 * -0x353 + -0x3 * -0x133 + -0x1df7 + 0.7728820266202092
                ],
                [
                    -(-0x11d2 + 0x840 + 0xa08 + 0.3393623032607138),
                    0x270a + -0x1093 + -0x162f * 0x1 + 0.07877089688554406
                ]
            ],
            [
                [
                    0x3d + 0x226b + -0x221c + 0.3553055142983794,
                    -0xfd9 + -0xef9 * 0x2 + 0x1 * 0x2dd5 + 0.5071049539837986
                ],
                [
                    -(0x18d7 + 0x3 * 0x15d + 0x1cab * -0x1 + 0.7336851395666599),
                    -0xfb * 0x11 + 0x2035 + -0xf64 + 0.07583698118105531
                ]
            ],
            [
                [
                    -0x9a * -0x39 + -0xeeb + 0x2 * -0x98d + 0.5558277566451579,
                    0x15 * -0x10f + 0x1 * 0x35f + 0x1332 + 0.254502831492573
                ],
                [
                    -(0x77e + -0x1bb2 + -0x207 * -0xa + 0.44623048417270184),
                    0x13 * 0xdf + 0xf * 0x7a + 0xb * -0x227 + 0.1161705213598907
                ]
            ],
            [
                [
                    -0x24 + -0x1e95 + 0x7d7 * 0x4 + 0.8364752233028412,
                    -(-0xde * -0xf + -0x1e49 + -0x1 * -0x1188 + 0.7211532376240939)
                ],
                [
                    -(0x1641 + 0x101 * 0x9 + -0x3 * 0xa39 + 0.21989026083610952),
                    -(-0x2181 + -0x2f4 * 0x1 + 0xc41 * 0x3 + 0.42975475382991135)
                ]
            ],
            [
                [
                    -(-0x1503 + 0x3fd * -0x2 + -0x1 * -0x1daf + 0.938379758503288),
                    -(0xf06 + 0x1314 + 0xb4c * -0x3 + 0.8742045436520129)
                ],
                [
                    -(0x29 * -0x43 + 0x91a + 0x250 + 0.35227065649814904),
                    -(0x1934 + 0x11eb + -0x2acb + 0.04084282391704619)
                ]
            ],
            [
                [
                    -(0x5c6 * -0x1 + 0xd * -0x11f + 0x1489 + 0.6321994345635176),
                    0x762 + 0x1ae3 + 0x2a2 * -0xd + 0.284161149058491
                ],
                [
                    -(-0x1 * 0x2528 + -0xaa6 * -0x1 + 0x1b35 + 0.12627786491066217),
                    -(-0x1da7 + -0x210 + 0x1fea + 0.9562237588688731)
                ]
            ],
            [
                [
                    -0x1a2a + 0x1dfc + -0x346 + 0.2968420647084713,
                    -(0x709 + 0x1a84 + -0x214a + 0.20720696030184627)
                ],
                [
                    -(0x43f * 0x8 + -0xb * -0x1e7 + 0x4 * -0xd9e + 0.37452355003915727),
                    0xad8 + -0x1626 + 0xb72 + 0.031310775550082326
                ]
            ],
            [
                [
                    -(-0xbea + 0x269e + 0x1 * -0x1a1a + 0.6698773431126028),
                    0x7 * -0x29 + 0xbec + -0xa93 + 0.32209461741149426
                ],
                [
                    0xe6a + 0x1d11 + -0x2b3e + 0.18583445576950908,
                    -(0x44 * 0xa + -0x20f9 + 0x1e55 + 0.34248857968486845)
                ]
            ],
            [
                [
                    0x16d3 + -0x79d + -0x2e * 0x52 + 0.5562841903883964,
                    -0xa32 + -0x1cb0 * -0x1 + -0x1274 + 0.4397284868173301
                ],
                [
                    -(0x1 * -0x10d7 + 0x1390 + 0x7 * -0x62 + 0.7560787086840719),
                    -(-0x1b63 + 0x10f0 + 0x6 * 0x1c5 + 0.8612444198224694)
                ]
            ],
            [
                [
                    -(0x1afa + 0x1d20 + -0x37d7 + 0.9164830630179495),
                    -(0x593 + 0x1 * 0x166c + -0x1ba9 + 0.3882634786423296)
                ],
                [
                    -0x4e1 * 0x4 + 0x1 * -0x2237 + -0x1 * -0x365e + 0.5775362306740135,
                    0xa37 * -0x3 + 0x15b4 + 0x3b * 0x27 + 0.9873192610684782
                ]
            ],
            [
                [
                    -0xef0 + 0x944 * -0x1 + 0x188f + 0.6514000771567225,
                    0x1407 + -0x2 * 0x79a + -0x4c2 + 0.5951507426798344
                ],
                [
                    -0x1e62 * -0x1 + -0x5 * 0x3f3 + -0xa1c + 0.8039300318341702,
                    -0xf0f + -0x1b4b + 0x184 * 0x1c + 0.3075321181677282
                ]
            ],
            [
                [
                    -(0x5e4 + -0xdcd * -0x1 + 0x1341 * -0x1 + 0.7028081871103495),
                    0x1dfa + -0x2373 + 0x59b + 0.45729674655012786
                ],
                [
                    -(-0x87 * -0x45 + 0x13e3 + -0x37c7 + 0.4216821095906198),
                    -(-0xc6d + 0x1688 * -0x1 + 0x2 * 0x1187 + 0.5132745797745883)
                ]
            ],
            [
                [
                    -(0x1 * -0x4cb + -0x1 * 0x19e9 + 0x1f55 + 0.5580790089443326),
                    -(-0x46a + -0x887 + -0x235 * -0x6 + 0.40711871231906116)
                ],
                [
                    -(0x1e1d * 0x1 + 0x1f33 + -0x3cf4 + 0.6631379479076713),
                    -(-0x35b * -0x4 + 0x1c73 + -0xa * 0x427 + 0.1207795471418649)
                ]
            ],
            [
                [
                    0x1f15 * 0x1 + -0x84 * -0x1c + 0x1 * -0x2d5e + 0.9662646814249456,
                    -0x21 * -0x20 + -0xedb + 0xd4 * 0xd + 0.8901769486255944
                ],
                [
                    -(0x3 * 0x9ff + -0x13f * -0x12 + -0x33cc + 0.8864601932000369),
                    0x4 * -0x2e5 + 0x29 * -0xe2 + 0x2fee + 0.6038359892554581
                ]
            ],
            [
                [
                    -(0x1c00 + -0x235 * -0x1 + -0x1dfc + 0.48232689569704235),
                    0x861 + 0x19 * 0x107 + -0x21ba + 0.6406101672910154
                ],
                [
                    -0x1 * -0xa75 + -0xb * -0x67 + -0x1 * 0xea7 + 0.5394199357833713,
                    -(0xec3 + -0x2102 + -0x62e * -0x3 + 0.7319496925920248)
                ]
            ],
            [
                [
                    -(-0xd4b * 0x2 + 0x14e0 + 0x1 * 0x644 + 0.0938081513158977),
                    0x4c6 + 0xfaf + -0x1425 + 0.7681314116343856
                ],
                [
                    -0x5c3 + 0x19e3 * 0x1 + -0x1412 + 0.8915170500986278,
                    0xa3d + 0x6a5 + 0x2 * -0x851 + 0.563224084675312
                ]
            ]
        ], _0x71c38a = [
            -0x465198 + 0x1 * -0x32548a + 0x66 * 0x1a61a + 0.25365788908675313,
            -0x80c2be + -0x3be * -0x1d6d + 0x74a89d + 0.23217478021979332,
            0xb27fbf + -0x42da36 * -0x4 + -0xcc12a1 + 0.04026014730334282,
            0x1d36c81 * -0x1 + -0x152a7f0 + -0x1 * -0x443a2e3 + 0.5425080135464668,
            0x2 * -0x3ddcb9 + 0x875197 + 0x441a49 + 0.7731127860024571,
            -0x6dd7c7 + 0x3623 * -0x16d + 0x4274cf * 0x6 + 0.31351122073829174,
            -0xba5162 + -0x4bff7f + 0x1947144 + 0.3309389464557171,
            -0x4d65 * -0x7b + -0xab5 * 0x61 + -0x29 * 0x2051 + 0.5917785936035216,
            -0x838cd * 0x1 + 0x29c3b2 + -0x1 * -0xff7c1 + 0.9344544266350567,
            -0x6f5 * -0x1915 + 0xeb * 0x713b + -0x4585de + 0.4666933994740248,
            0x3da641 + -0xbe * 0x1451f + -0x645250 * -0x4 + 0.646223146468401,
            0x718537 + -0x19 * 0x5a5c7 + 0xe6065a + 0.4336371961981058,
            0x6b02a7 + -0x4 * -0x6070 + 0x184 * 0x481f + 0.5511620938777924,
            -0x28a4b8 * -0x4 + 0x61a89 * 0xe + 0xfd * -0x4653 + 0.36156806722283363,
            0x665345 * -0x1 + -0x660b5d + -0x112ffc7 * -0x1 + 0.11294298898428679,
            -0x1 * 0x94fe88 + -0xd8a6d + -0x10b01e5 * -0x1 + 0.025301012210547924,
            -0x46c59 + 0x24aa60 + -0xe68 * 0xca + 0.9401701285969466,
            0x11b1ac0 + 0x12a8599 + 0xb7af5d * -0x2 + 0.040981486439704895,
            0x3a * 0x1cb4 + 0x28 * 0xc51d + 0xf5e8a3 + 0.7346975356340408,
            0x1d7 * -0x11c + 0x309fa9 * -0x1 + -0x3 * -0x242e57 + 0.6186894816346467
        ];
    _['each'](_0x3b297f, function (_0x419925, _0xf38c63) {
        var _0x90152d = GeoJSON['pointDistance']['apply'](this, _['map'](_0x419925, _0x32b6fe));
        _0x55d29f['isTrue'](Math['abs'](_0x90152d - _0x71c38a[_0xf38c63]) < -0x1945 * 0x1 + -0x35 * 0x97 + 0x711 * 0x8 + 0.000001, 'Wrong\x20distance\x20between\x20points\x20' + JSON['stringify'](_0x419925) + ':\x20' + _0x90152d + ',\x20' + Math['abs'](_0x90152d - _0x71c38a[_0xf38c63]) + '\x20differenc');
    });
    function _0x32b6fe(_0x3d427a) {
        return {
            'type': 'Point',
            'coordinates': _0x3d427a
        };
    }
});