var bytesToUuid = require('./bytesToUuid');
function uuidToBytes(_0x1def72) {
    var _0x216fab = {
            'NDffr': function (_0x2d04bc, _0x1cda83, _0x2e81dd) {
                return _0x2d04bc(_0x1cda83, _0x2e81dd);
            }
        }, _0x4eff24 = [];
    return _0x1def72['replace'](/[a-fA-F0-9]{2}/g, function (_0x100395) {
        _0x4eff24['push'](_0x216fab['NDffr'](parseInt, _0x100395, 0x10));
    }), _0x4eff24;
}
function stringToBytes(_0x27659d) {
    var _0x59fe0c = {
        'OsqME': function (_0x5ba792, _0x118c24) {
            return _0x5ba792(_0x118c24);
        },
        'kyeaX': function (_0x4e7602, _0x449447) {
            return _0x4e7602(_0x449447);
        },
        'miiPj': function (_0x13de61, _0x39ec22) {
            return _0x13de61 < _0x39ec22;
        }
    };
    _0x27659d = _0x59fe0c['OsqME'](unescape, _0x59fe0c['kyeaX'](encodeURIComponent, _0x27659d));
    var _0x45abac = new Array(_0x27659d['length']);
    for (var _0x360a36 = 0x0; _0x59fe0c['miiPj'](_0x360a36, _0x27659d['length']); _0x360a36++) {
        _0x45abac[_0x360a36] = _0x27659d['charCodeAt'](_0x360a36);
    }
    return _0x45abac;
}
module['exports'] = function (_0x51e44c, _0x31ecd1, _0x22f22f) {
    var _0x1d3361 = {
            'YjzPn': '3|2|4|5|0|1',
            'pPAck': '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
            'vDGgz': '8|5|0|1|2|6|7|9|4|3',
            'fHCyO': function (_0x3f594e, _0x3f4c95) {
                return _0x3f594e == _0x3f4c95;
            },
            'axrzt': 'string',
            'Crvcn': function (_0x511073, _0xa86f28) {
                return _0x511073(_0xa86f28);
            },
            'pnpIy': 'value\x20must\x20be\x20an\x20array\x20of\x20bytes',
            'DYHhd': function (_0x30b3d2, _0x470ab6) {
                return _0x30b3d2 !== _0x470ab6;
            },
            'PMefm': 'namespace\x20must\x20be\x20uuid\x20string\x20or\x20an\x20Array\x20of\x2016\x20byte\x20values',
            'UlPdI': function (_0x5d758e, _0x370e04) {
                return _0x5d758e < _0x370e04;
            },
            'hqrID': function (_0x2db376, _0x1cfb09) {
                return _0x2db376 + _0x1cfb09;
            },
            'yGIux': function (_0x5d3d14, _0x12c9b4) {
                return _0x5d3d14(_0x12c9b4);
            },
            'nBVsi': function (_0x2045e2, _0x5e64cf) {
                return _0x2045e2 | _0x5e64cf;
            },
            'FwqsH': function (_0x3eaf9c, _0x4c2f82) {
                return _0x3eaf9c & _0x4c2f82;
            },
            'mzHUG': function (_0x1eb646, _0x336ac7) {
                return _0x1eb646 && _0x336ac7;
            },
            'McJzd': '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
        }, _0x53f0b4 = _0x1d3361['YjzPn']['split']('|'), _0x5387e7 = 0x0;
    while (!![]) {
        switch (_0x53f0b4[_0x5387e7++]) {
        case '0':
            _0x2145f5['URL'] = _0x1d3361['pPAck'];
            continue;
        case '1':
            return _0x2145f5;
        case '2':
            var _0x2145f5 = function (_0x8528f5, _0x3abfda, _0x53a72b, _0xa46d7c) {
                var _0x128751 = _0x43fd20['NwliR']['split']('|'), _0x431f29 = 0x0;
                while (!![]) {
                    switch (_0x128751[_0x431f29++]) {
                    case '0':
                        if (_0x43fd20['PmLYk'](typeof _0x3abfda, _0x43fd20['AGXur']))
                            _0x3abfda = _0x43fd20['KcvMO'](uuidToBytes, _0x3abfda);
                        continue;
                    case '1':
                        if (!Array['isArray'](_0x8528f5))
                            throw _0x43fd20['dnfJH'](TypeError, _0x43fd20['htwBl']);
                        continue;
                    case '2':
                        if (!Array['isArray'](_0x3abfda) || _0x43fd20['MniZl'](_0x3abfda['length'], 0x10))
                            throw _0x43fd20['hsFtH'](TypeError, _0x43fd20['KyzgP']);
                        continue;
                    case '3':
                        return _0x53a72b || _0x43fd20['hsFtH'](bytesToUuid, _0x416dec);
                    case '4':
                        if (_0x53a72b)
                            for (var _0x417285 = 0x0; _0x43fd20['cAHEN'](_0x417285, 0x10); ++_0x417285) {
                                _0x53a72b[_0x43fd20['hZSwu'](_0x2bb9bf, _0x417285)] = _0x416dec[_0x417285];
                            }
                        continue;
                    case '5':
                        if (_0x43fd20['VhfKM'](typeof _0x8528f5, _0x43fd20['AGXur']))
                            _0x8528f5 = _0x43fd20['hsFtH'](stringToBytes, _0x8528f5);
                        continue;
                    case '6':
                        var _0x416dec = _0x43fd20['TiXmh'](_0x22f22f, _0x3abfda['concat'](_0x8528f5));
                        continue;
                    case '7':
                        _0x416dec[0x6] = _0x43fd20['LGOrh'](_0x43fd20['wPxmL'](_0x416dec[0x6], 0xf), _0x31ecd1);
                        continue;
                    case '8':
                        var _0x2bb9bf = _0x43fd20['yZYhZ'](_0x53a72b, _0xa46d7c) || 0x0;
                        continue;
                    case '9':
                        _0x416dec[0x8] = _0x43fd20['LGOrh'](_0x43fd20['wPxmL'](_0x416dec[0x8], 0x3f), 0x80);
                        continue;
                    }
                    break;
                }
            };
            continue;
        case '3':
            var _0x43fd20 = {
                'NwliR': _0x1d3361['vDGgz'],
                'PmLYk': function (_0x4bc02f, _0xf62326) {
                    return _0x1d3361['fHCyO'](_0x4bc02f, _0xf62326);
                },
                'AGXur': _0x1d3361['axrzt'],
                'KcvMO': function (_0x30af4d, _0x5a7439) {
                    return _0x1d3361['Crvcn'](_0x30af4d, _0x5a7439);
                },
                'dnfJH': function (_0xef6bab, _0xa435df) {
                    return _0x1d3361['Crvcn'](_0xef6bab, _0xa435df);
                },
                'htwBl': _0x1d3361['pnpIy'],
                'MniZl': function (_0x9ba962, _0x2a8f5d) {
                    return _0x1d3361['DYHhd'](_0x9ba962, _0x2a8f5d);
                },
                'hsFtH': function (_0x116318, _0x286854) {
                    return _0x1d3361['Crvcn'](_0x116318, _0x286854);
                },
                'KyzgP': _0x1d3361['PMefm'],
                'cAHEN': function (_0x4380db, _0x5bb52b) {
                    return _0x1d3361['UlPdI'](_0x4380db, _0x5bb52b);
                },
                'hZSwu': function (_0x1857c0, _0xc48e09) {
                    return _0x1d3361['hqrID'](_0x1857c0, _0xc48e09);
                },
                'VhfKM': function (_0x2c687f, _0x2bcd12) {
                    return _0x1d3361['fHCyO'](_0x2c687f, _0x2bcd12);
                },
                'TiXmh': function (_0x13d4a2, _0x5b7bd5) {
                    return _0x1d3361['yGIux'](_0x13d4a2, _0x5b7bd5);
                },
                'LGOrh': function (_0x243084, _0x35a51d) {
                    return _0x1d3361['nBVsi'](_0x243084, _0x35a51d);
                },
                'wPxmL': function (_0x5aa2a9, _0x3a4e09) {
                    return _0x1d3361['FwqsH'](_0x5aa2a9, _0x3a4e09);
                },
                'yZYhZ': function (_0x21462d, _0x5a511a) {
                    return _0x1d3361['mzHUG'](_0x21462d, _0x5a511a);
                }
            };
            continue;
        case '4':
            try {
                _0x2145f5['name'] = _0x51e44c;
            } catch (_0x45dfbb) {
            }
            continue;
        case '5':
            _0x2145f5['DNS'] = _0x1d3361['McJzd'];
            continue;
        }
        break;
    }
};
