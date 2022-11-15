const _0x58b0 = ['AkuSL', 'zBAgl', 'RKBkw', 'INeZy', 'rTPjn', 'IWDKm', 'Jcavb', 'RISSQ', 'getHeaderValue', 'LHqlf', 'nYRsd', 'jGZWI', 'merge', 'common', 'TmaTS', 'NsICx', 'should be used by custom instance if set before instance created', 'tglIT', 'create', 'nLvVH', 'http://example.org/foo', 'should not be used by custom instance if set after instance created', '229791kwIwoq', '1tFFVqG', '17089igJcea', '1sRUuWl', '1068389sPzbwh', '13mGqHTz', '76721SPCEQY', '1003807PDkkVJ', '1xOIFpa', '82578yCrrIP', '2FwNQsM', '890992GdIjpi', '0|4|3|2|1', '=;expires=', 'X-CUSTOM-HEADER', 'bar', 'foo=bar', 'object', '/foo', 'http://example.com/foo', 'http://example.com/', 'http://www.example.com/foo', 'http://www.example.com', '2|4|1|0|3', 'X-CUSTOM-XSRF-TOKEN', 'postHeaderValue', 'fooHeaderValue', 'barHeaderValue', 'http://example.org/', 'should transform request json', 'should do nothing to request string', 'should do nothing to response string', 'should use modified defaults config', 'should use request config', 'should use default config for custom instance', 'NyeML', 'Ajax', 'install', 'tmtMN', 'HycWY', 'now', 'toGMTString', 'headers', 'post', 'MDeQT', 'defaults', 'UGvUN', 'EkAsZ', 'qWMdJ', 'dJNPu', 'oqitM', 'HqNPD', 'IIHDO', 'toEqual', 'wXZDh', 'transformResponse', 'call', 'hoBVh', 'foo', 'IwaSo', 'VokIk', 'nnCLA', 'lYXLe', 'FXuNQ', 'NDyTJ', 'rMXcl', 'fnIvQ', 'DVkXj', 'JfDUN', 'KJxvN', 'baseURL', 'Ldrtz', 'then', 'url', 'toBe', 'VkOeP', 'cabta', 'EKBmT', 'QyMFv', 'RiaLi', 'VnqVM', 'split', 'get', 'cookie', 'GNeCl', 'EUsrB', 'requestHeaders', 'xsrfHeaderName', 'LzMSd', 'tCJEU', 'kXrTv', 'UhJXe', 'KzJlF'];

(function (_0x4d1104, _0x2654bb) {
    const _0x565c88 = _0x2e0d;

    while (true) {
        try {
            const _0x6993f8 = parseInt(_0x565c88(0x1a4)) * parseInt(_0x565c88(0x1a5)) + -parseInt(_0x565c88(0x1a6)) * -parseInt(_0x565c88(0x1a7)) + -parseInt(_0x565c88(0x1a8)) + -parseInt(_0x565c88(0x1a9)) * -parseInt(_0x565c88(0x1aa)) + -parseInt(_0x565c88(0x1ab)) + parseInt(_0x565c88(0x1ac)) * -parseInt(_0x565c88(0x1ad)) + -parseInt(_0x565c88(0x1ae)) * -parseInt(_0x565c88(0x1af));

            if (_0x6993f8 === _0x2654bb) break;else _0x4d1104.push(_0x4d1104.shift());
        } catch (_0x4f5ac6) {
            _0x4d1104.push(_0x4d1104.shift());
        }
    }
})(_0x58b0, 871463);
function _0x2e0d(_0x24020d, _0x287dc8) {
    return _0x2e0d = function (_0x367ec8, _0x580356) {
        _0x367ec8 = _0x367ec8 - 420;
        const _0x423031 = _0x58b0[_0x367ec8];

        return _0x423031;
    }, _0x2e0d(_0x24020d, _0x287dc8);
}

const defaults = require('../../lib/defaults');

const utils = require('../../lib/utils');

describe('defaults', function () {
    const _0x2fc16f = _0x2e0d;
    const _0xa0003d = {
        'tmtMN': _0x2fc16f(0x1b0),
        'kbfZw': function (_0x1a224c, _0x18e314) {
            return _0x1a224c + _0x18e314;
        },
        'OiFXq': function (_0x1527c9, _0x5004d1) {
            return _0x1527c9 + _0x5004d1;
        },
        'HycWY': _0x2fc16f(0x1b1),
        'BHpCA': function (_0x4791d6, _0x2dcb77) {
            return _0x4791d6 - _0x2dcb77;
        },
        'MDeQT': _0x2fc16f(0x1b2),
        'qWMdJ': function (_0x4bf067, _0x34798d) {
            return _0x4bf067(_0x34798d);
        },
        'dJNPu': _0x2fc16f(0x1b3),
        'hoBVh': '{"foo":"bar"}',
        'HqNPD': function (_0x458317, _0x5a43d1) {
            return _0x458317(_0x5a43d1);
        },
        'IIHDO': _0x2fc16f(0x1b4),
        'prrCD': _0x2fc16f(0x1b5),
        'IlSSS': function (_0x53d17e, _0x3b9ea4) {
            return _0x53d17e(_0x3b9ea4);
        },
        'lYXLe': function (_0xf5ede3, _0x38aa9f) {
            return _0xf5ede3(_0x38aa9f);
        },
        'FXuNQ': _0x2fc16f(0x1b6),
        'NDyTJ': function (_0x34c140) {
            return _0x34c140();
        },
        'KJxvN': _0x2fc16f(0x1b7),
        'oTvrO': function (_0x5ade0b) {
            return _0x5ade0b();
        },
        'NznUp': _0x2fc16f(0x1b8),
        'Ldrtz': function (_0x35f1fa) {
            return _0x35f1fa();
        },
        'RiaLi': function (_0x55aba3, _0x4bf5ac) {
            return _0x55aba3(_0x4bf5ac);
        },
        'MJSCS': _0x2fc16f(0x1b9),
        'EKBmT': function (_0x166a03, _0xe0ec66, _0x54e12d) {
            return _0x166a03(_0xe0ec66, _0x54e12d);
        },
        'QyMFv': _0x2fc16f(0x1ba),
        'VnqVM': _0x2fc16f(0x1bb),
        'GNeCl': function (_0x34b97a, _0x293566) {
            return _0x34b97a + _0x293566;
        },
        'LBPQO': '=foobarbaz',
        'EUsrB': 'foobarbaz',
        'LzMSd': _0x2fc16f(0x1bc),
        'zBAgl': function (_0xb21bad, _0x5765c7) {
            return _0xb21bad(_0x5765c7);
        },
        'tCJEU': 'foo',
        'kXrTv': function (_0x285448) {
            return _0x285448();
        },
        'RKBkw': function (_0x167d83) {
            return _0x167d83();
        },
        'Jcavb': 'commonHeaderValue',
        'RISSQ': function (_0x58fc32) {
            return _0x58fc32();
        },
        'LHqlf': _0x2fc16f(0x1bd),
        'nYRsd': _0x2fc16f(0x1be),
        'jGZWI': _0x2fc16f(0x1bf),
        'cvOzU': function (_0x30823e) {
            return _0x30823e();
        },
        'nLvVH': function (_0x55faf6) {
            return _0x55faf6();
        },
        'tglIT': _0x2fc16f(0x1c0),
        'NyeML': 'CUSTOM-XSRF-TOKEN',
        'UGvUN': function (_0x28b9da, _0x190fee, _0x5cac23) {
            return _0x28b9da(_0x190fee, _0x5cac23);
        },
        'EkAsZ': _0x2fc16f(0x1c1),
        'oqitM': function (_0x58132b, _0x2c2c5d, _0x2a857a) {
            return _0x58132b(_0x2c2c5d, _0x2a857a);
        },
        'myNVg': _0x2fc16f(0x1c2),
        'wXZDh': 'should transform response json',
        'IwaSo': _0x2fc16f(0x1c3),
        'VokIk': function (_0x1c7c5f, _0x4648f1, _0x248ba5) {
            return _0x1c7c5f(_0x4648f1, _0x248ba5);
        },
        'nnCLA': 'should use global defaults config',
        'JfDUN': _0x2fc16f(0x1c4),
        'cabta': _0x2fc16f(0x1c5),
        'ZhDDK': _0x2fc16f(0x1c6),
        'AkuSL': 'should use POST headers',
        'IWDKm': function (_0x407dda, _0x5d8c75, _0x3fec3d) {
            return _0x407dda(_0x5d8c75, _0x3fec3d);
        }
    };

    const _0x227cd0 = _0xa0003d[_0x2fc16f(0x1c7)];

    beforeEach(function () {
        const _0x3a742a = _0x2fc16f;

        jasmine[_0x3a742a(0x1c8)][_0x3a742a(0x1c9)]();
    }), afterEach(function () {
        const _0x463ba9 = _0x2fc16f;

        const _0x1d66ef = _0xa0003d[_0x463ba9(0x1ca)].split('|');

        var _0x23f25b = 0;

        while (true) {
            switch (_0x1d66ef[_0x23f25b++]) {
                case '0':
                    jasmine[_0x463ba9(0x1c8)].uninstall();
                    continue;
                case '1':
                    document['cookie'] = _0xa0003d.kbfZw(_0xa0003d.OiFXq(_0x227cd0, _0xa0003d[_0x463ba9(0x1cb)]), new Date(_0xa0003d.BHpCA(Date[_0x463ba9(0x1cc)](), 86400000))[_0x463ba9(0x1cd)]());
                    continue;
                case '2':
                    delete axios.defaults[_0x463ba9(0x1ce)][_0x463ba9(0x1cf)][_0xa0003d[_0x463ba9(0x1d0)]];
                    continue;
                case '3':
                    delete axios[_0x463ba9(0x1d1)][_0x463ba9(0x1ce)].get[_0xa0003d[_0x463ba9(0x1d0)]];
                    continue;
                case '4':
                    delete axios.defaults.baseURL;
                    continue;
            }
            break;
        }
    }), _0xa0003d[_0x2fc16f(0x1d2)](it, _0xa0003d[_0x2fc16f(0x1d3)], function () {
        const _0x1d1e2b = _0x2fc16f;

        _0xa0003d[_0x1d1e2b(0x1d4)](expect, defaults.transformRequest[0]({ 'foo': _0xa0003d[_0x1d1e2b(0x1d5)] })).toEqual(_0xa0003d.hoBVh);
    }), _0xa0003d[_0x2fc16f(0x1d6)](it, _0xa0003d.myNVg, function () {
        const _0x3bdf46 = _0x2fc16f;

        _0xa0003d[_0x3bdf46(0x1d7)](expect, defaults.transformRequest[0](_0xa0003d[_0x3bdf46(0x1d8)]))[_0x3bdf46(0x1d9)](_0xa0003d.IIHDO);
    }), it(_0xa0003d[_0x2fc16f(0x1da)], function () {
        const _0x543400 = _0x2fc16f;

        const _0x1a2490 = defaults[_0x543400(0x1db)][0][_0x543400(0x1dc)](defaults, _0xa0003d[_0x543400(0x1dd)]);

        _0xa0003d[_0x543400(0x1d7)](expect, typeof _0x1a2490)[_0x543400(0x1d9)](_0xa0003d.prrCD), _0xa0003d[_0x543400(0x1d7)](expect, _0x1a2490[_0x543400(0x1de)])[_0x543400(0x1d9)](_0xa0003d[_0x543400(0x1d5)]);
    }), _0xa0003d[_0x2fc16f(0x1d6)](it, _0xa0003d[_0x2fc16f(0x1df)], function () {
        const _0x52e9de = _0x2fc16f;

        _0xa0003d.IlSSS(expect, defaults[_0x52e9de(0x1db)][0](_0xa0003d[_0x52e9de(0x1d8)]))[_0x52e9de(0x1d9)](_0x52e9de(0x1b4));
    }), _0xa0003d[_0x2fc16f(0x1e0)](it, _0xa0003d[_0x2fc16f(0x1e1)], function (_0x27f451) {
        const _0x55961e = _0x2fc16f;
        const _0x44200c = {
            'rMXcl': function (_0x3b2fa7, _0x136a6f) {
                const _0x3a1f00 = _0x2e0d;

                return _0xa0003d[_0x3a1f00(0x1e2)](_0x3b2fa7, _0x136a6f);
            },
            'fnIvQ': _0xa0003d[_0x55961e(0x1e3)],
            'DVkXj': function (_0x10dd73) {
                const _0x18fc68 = _0x55961e;

                return _0xa0003d[_0x18fc68(0x1e4)](_0x10dd73);
            }
        };

        axios(_0xa0003d[_0x55961e(0x1e3)]), _0xa0003d[_0x55961e(0x1e4)](getAjaxRequest).then(function (_0xed558e) {
            const _0x48bb2e = _0x55961e;

            _0x44200c[_0x48bb2e(0x1e5)](expect, _0xed558e.url).toBe(_0x44200c[_0x48bb2e(0x1e6)]), _0x44200c[_0x48bb2e(0x1e7)](_0x27f451);
        });
    }), it(_0xa0003d[_0x2fc16f(0x1e8)], function (_0x3922ad) {
        const _0x521c26 = _0x2fc16f;
        const _0x1b2f46 = {
            'VkOeP': _0xa0003d[_0x521c26(0x1e9)],
            'fsNFV': function (_0x25e180) {
                return _0xa0003d.oTvrO(_0x25e180);
            }
        };

        axios.defaults[_0x521c26(0x1ea)] = _0xa0003d.NznUp, _0xa0003d[_0x521c26(0x1e2)](axios, _0xa0003d[_0x521c26(0x1e3)]), _0xa0003d[_0x521c26(0x1eb)](getAjaxRequest)[_0x521c26(0x1ec)](function (_0xbef907) {
            const _0x4d0f06 = _0x521c26;

            expect(_0xbef907[_0x4d0f06(0x1ed)])[_0x4d0f06(0x1ee)](_0x1b2f46[_0x4d0f06(0x1ef)]), _0x1b2f46.fsNFV(_0x3922ad);
        });
    }), _0xa0003d[_0x2fc16f(0x1e0)](it, _0xa0003d[_0x2fc16f(0x1f0)], function (_0x50964e) {
        const _0xfd00d0 = _0x2fc16f;

        _0xa0003d[_0xfd00d0(0x1f1)](axios, _0xa0003d.FXuNQ, { 'baseURL': _0xa0003d[_0xfd00d0(0x1f2)] }), _0xa0003d[_0xfd00d0(0x1eb)](getAjaxRequest)[_0xfd00d0(0x1ec)](function (_0x579442) {
            const _0x13ed2a = _0xfd00d0;

            _0xa0003d[_0x13ed2a(0x1f3)](expect, _0x579442.url)[_0x13ed2a(0x1ee)](_0xa0003d.MJSCS), _0x50964e();
        });
    }), _0xa0003d.VokIk(it, _0xa0003d.ZhDDK, function (_0x48a036) {
        const _0x57b4bf = _0x2fc16f;

        const _0xd8aaa9 = _0xa0003d[_0x57b4bf(0x1f4)][_0x57b4bf(0x1f5)]('|');

        var _0x4c2e1c = 0;

        while (true) {
            switch (_0xd8aaa9[_0x4c2e1c++]) {
                case '0':
                    _0x225e38[_0x57b4bf(0x1f6)](_0xa0003d[_0x57b4bf(0x1e3)]);
                    continue;
                case '1':
                    document[_0x57b4bf(0x1f7)] = _0xa0003d[_0x57b4bf(0x1f8)](_0x225e38[_0x57b4bf(0x1d1)].xsrfCookieName, _0xa0003d.LBPQO);
                    continue;
                case '2':
                    const _0x2992af = { 'cRMDb': _0xa0003d[_0x57b4bf(0x1f9)] };

                    continue;
                case '3':
                    getAjaxRequest()[_0x57b4bf(0x1ec)](function (_0x303552) {
                        const _0x1d4299 = _0x57b4bf;

                        expect(_0x303552[_0x1d4299(0x1fa)][_0x225e38[_0x1d4299(0x1d1)][_0x1d4299(0x1fb)]]).toEqual(_0x2992af.cRMDb), _0x48a036();
                    });
                    continue;
                case '4':
                    const _0x225e38 = axios.create({
                        'xsrfCookieName': _0x227cd0,
                        'xsrfHeaderName': _0xa0003d[_0x57b4bf(0x1fc)]
                    });

                    continue;
            }
            break;
        }
    }), _0xa0003d[_0x2fc16f(0x1e0)](it, 'should use GET headers', function (_0x16310a) {
        const _0x546ba6 = _0x2fc16f;
        const _0xda79a8 = {
            'UhJXe': function (_0x56e372, _0x184c6c) {
                return _0xa0003d.zBAgl(_0x56e372, _0x184c6c);
            },
            'ljtMp': _0xa0003d[_0x546ba6(0x1fd)],
            'KzJlF': function (_0x464ac5) {
                const _0x4ff811 = _0x546ba6;

                return _0xa0003d[_0x4ff811(0x1fe)](_0x464ac5);
            }
        };

        axios.defaults.headers[_0x546ba6(0x1f6)][_0xa0003d[_0x546ba6(0x1d0)]] = _0x546ba6(0x1de), axios[_0x546ba6(0x1f6)]('/foo'), getAjaxRequest()[_0x546ba6(0x1ec)](function (_0x4291af) {
            const _0x3dcd1a = _0x546ba6;

            _0xda79a8[_0x3dcd1a(0x1ff)](expect, _0x4291af[_0x3dcd1a(0x1fa)][_0x3dcd1a(0x1b2)]).toBe(_0xda79a8.ljtMp), _0xda79a8[_0x3dcd1a(0x200)](_0x16310a);
        });
    }), _0xa0003d[_0x2fc16f(0x1e0)](it, _0xa0003d[_0x2fc16f(0x201)], function (_0x3a246f) {
        const _0x79777e = _0x2fc16f;
        const _0x3c0b30 = {
            'INeZy': function (_0x2cb985, _0x1c3740) {
                const _0x4de5ad = _0x2e0d;

                return _0xa0003d[_0x4de5ad(0x202)](_0x2cb985, _0x1c3740);
            },
            'foXFZ': _0xa0003d[_0x79777e(0x1fd)],
            'rTPjn': function (_0x106ed3) {
                return _0x106ed3();
            }
        };

        axios[_0x79777e(0x1d1)][_0x79777e(0x1ce)].post[_0xa0003d[_0x79777e(0x1d0)]] = _0xa0003d[_0x79777e(0x1fd)], axios[_0x79777e(0x1cf)](_0xa0003d.FXuNQ, {}), _0xa0003d[_0x79777e(0x203)](getAjaxRequest)[_0x79777e(0x1ec)](function (_0x4d2241) {
            const _0x289217 = _0x79777e;

            _0x3c0b30[_0x289217(0x204)](expect, _0x4d2241[_0x289217(0x1fa)][_0x289217(0x1b2)])[_0x289217(0x1ee)](_0x3c0b30.foXFZ), _0x3c0b30[_0x289217(0x205)](_0x3a246f);
        });
    }), _0xa0003d[_0x2fc16f(0x206)](it, 'should use header config', function (_0x61cf06) {
        const _0x11a024 = _0x2fc16f;
        const _0x271ae8 = {
            'TmaTS': _0xa0003d[_0x11a024(0x207)],
            'NsICx': function (_0x19c8a5) {
                const _0x5aad5a = _0x11a024;

                return _0xa0003d[_0x5aad5a(0x208)](_0x19c8a5);
            }
        };

        const _0x25d4f1 = axios.create({
            'headers': {
                'common': { 'X-COMMON-HEADER': _0xa0003d.Jcavb },
                'get': { 'X-GET-HEADER': _0x11a024(0x209) },
                'post': { 'X-POST-HEADER': _0xa0003d[_0x11a024(0x20a)] }
            }
        });

        _0x25d4f1[_0x11a024(0x1f6)](_0xa0003d[_0x11a024(0x1e3)], {
            'headers': {
                'X-FOO-HEADER': _0xa0003d[_0x11a024(0x20b)],
                'X-BAR-HEADER': _0xa0003d[_0x11a024(0x20c)]
            }
        }), _0xa0003d.cvOzU(getAjaxRequest)[_0x11a024(0x1ec)](function (_0x5167ea) {
            const _0x436ff6 = _0x11a024;

            expect(_0x5167ea[_0x436ff6(0x1fa)])[_0x436ff6(0x1d9)](utils[_0x436ff6(0x20d)](defaults[_0x436ff6(0x1ce)][_0x436ff6(0x20e)], defaults.headers[_0x436ff6(0x1f6)], {
                'X-COMMON-HEADER': _0x271ae8[_0x436ff6(0x20f)],
                'X-GET-HEADER': _0x436ff6(0x209),
                'X-FOO-HEADER': _0x436ff6(0x1be),
                'X-BAR-HEADER': _0x436ff6(0x1bf)
            })), _0x271ae8[_0x436ff6(0x210)](_0x61cf06);
        });
    }), _0xa0003d[_0x2fc16f(0x206)](it, _0x2fc16f(0x211), function (_0x4c69c0) {
        const _0xd2f01c = _0x2fc16f;

        axios[_0xd2f01c(0x1d1)][_0xd2f01c(0x1ea)] = _0xa0003d[_0xd2f01c(0x212)];

        const _0x57205f = axios[_0xd2f01c(0x213)]();

        _0x57205f[_0xd2f01c(0x1f6)](_0xa0003d[_0xd2f01c(0x1e3)]), _0xa0003d[_0xd2f01c(0x214)](getAjaxRequest)[_0xd2f01c(0x1ec)](function (_0x56e95e) {
            const _0x5abe1c = _0xd2f01c;

            expect(_0x56e95e[_0x5abe1c(0x1ed)]).toBe(_0x5abe1c(0x215)), _0xa0003d[_0x5abe1c(0x214)](_0x4c69c0);
        });
    }), _0xa0003d.IWDKm(it, _0x2fc16f(0x216), function (_0x58e5a5) {
        const _0x3aaaa1 = _0x2fc16f;

        const _0x171f03 = axios[_0x3aaaa1(0x213)]();

        axios.defaults[_0x3aaaa1(0x1ea)] = _0xa0003d.tglIT, _0x171f03[_0x3aaaa1(0x1f6)](_0xa0003d.FXuNQ), _0xa0003d.nLvVH(getAjaxRequest)[_0x3aaaa1(0x1ec)](function (_0x219fdf) {
            const _0x5ef8a0 = _0x3aaaa1;

            _0xa0003d[_0x5ef8a0(0x202)](expect, _0x219fdf[_0x5ef8a0(0x1ed)]).toBe(_0x5ef8a0(0x1b6)), _0x58e5a5();
        });
    });
});
