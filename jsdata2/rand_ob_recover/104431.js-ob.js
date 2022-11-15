var gulp = require('gulp'), console = require(_0x267a8f(412)), fs = require('fs'), autoprefixer = require(_0x267a8f(413)), chmod = require(_0x267a8f(414)), clone = require(_0x267a8f(415)), gulpif = require(_0x267a8f(416)), header = require(_0x267a8f(417)), less = require(_0x267a8f(418)), minifyCSS = require(_0x267a8f(419)), plumber = require(_0x267a8f(420)), print = require(_0x267a8f(421))[_0x267a8f(422)], rename = require(_0x267a8f(423)), replace = require('gulp-replace'), uglify = require('gulp-uglify'), replaceExt = require(_0x267a8f(424)), watch = require(_0x267a8f(425)), config = require(_0x267a8f(426)), tasks = require(_0x267a8f(427)), configSetup = require(_0x267a8f(428)), install = require(_0x267a8f(429)), banner = tasks['banner'], comments = tasks[_0x267a8f(430)][_0x267a8f(431)], log = tasks['log'], settings = tasks['settings'], globs, assets, output, source;
function _0x5327(_0x549973, _0x1fb0ce) {
    return _0x5327 = function (_0x206e4d, _0x29a875) {
        _0x206e4d = _0x206e4d - (7043 + -4461 * -1 + -2 * 5551);
        var _0x55bc79 = _0x1e32[_0x206e4d];
        return _0x55bc79;
    }, _0x5327(_0x549973, _0x1fb0ce);
}
require('../collections/internal')(gulp), module[_0x267a8f(432)] = function () {
    var _0x11a601 = _0x267a8f, _0xfab30e = {
            'SpSeG': _0x11a601(433),
            'vcsHk': function (_0x4919f1, _0x78aedb) {
                return _0x4919f1 + _0x78aedb;
            },
            'wWDzw': function (_0x3bcd9a, _0xd65f24) {
                return _0x3bcd9a + _0xd65f24;
            },
            'dqWmB': _0x11a601(434),
            'WStOX': _0x11a601(435),
            'YJpCD': function (_0x2f5269, _0x29a5a2) {
                return _0x2f5269(_0x29a5a2);
            },
            'CpOIP': _0x11a601(436),
            'fGxrk': function (_0x526161, _0x36d94a) {
                return _0x526161 !== _0x36d94a;
            },
            'yMBQs': 'theme.config',
            'CQIgD': function (_0x34f3dd, _0xeb4439) {
                return _0x34f3dd !== _0xeb4439;
            },
            'ZfZsJ': _0x11a601(437),
            'VCfLA': function (_0x408261) {
                return _0x408261();
            },
            'kpdAV': function (_0x23b75b, _0x38c2f4, _0x5901bb) {
                return _0x23b75b(_0x38c2f4, _0x5901bb);
            },
            'BVRCk': function (_0x73ca03, _0x345c75) {
                return _0x73ca03(_0x345c75);
            },
            'PpFrd': _0x11a601(438),
            'kbZza': _0x11a601(439),
            'cbaex': _0x11a601(440),
            'BfAhk': function (_0x50971d, _0x47ba99) {
                return _0x50971d(_0x47ba99);
            },
            'HTgzY': function (_0x1837a6, _0x96e0c2, _0x5ea638) {
                return _0x1837a6(_0x96e0c2, _0x5ea638);
            },
            'ngBqS': function (_0x28b769, _0x59f010) {
                return _0x28b769(_0x59f010);
            },
            'egVBX': _0x11a601(441),
            'QqUOT': '/**/*.{overrides,variables}',
            'cTVvG': _0x11a601(442)
        }, _0x5a18b7 = _0xfab30e['SpSeG'][_0x11a601(443)]('|'), _0x557f78 = 5261 * -1 + -1163 * -6 + -1717;
    while (!![]) {
        switch (_0x5a18b7[_0x557f78++]) {
        case '0':
            globs = config[_0x11a601(444)];
            continue;
        case '1':
            gulp[_0x11a601(445)](['examples/**/*.*'], function (_0x3e1c7c) {
                var _0x334941 = _0x11a601;
                return console[_0x334941(446)](), gulp[_0x334941(447)](_0x3e1c7c[_0x334941(448)], { 'base': _0x41af64['DSOlb'] })[_0x334941(449)](gulp[_0x334941(450)](output['examples']))[_0x334941(449)](_0x41af64[_0x334941(451)](print, log[_0x334941(452)]));
            });
            continue;
        case '2':
            output = config['paths'][_0x11a601(453)];
            continue;
        case '3':
            gulp[_0x11a601(445)]([_0xfab30e[_0x11a601(454)](_0xfab30e[_0x11a601(455)](source[_0x11a601(456)], _0xfab30e['dqWmB']) + globs[_0x11a601(457)], _0xfab30e['WStOX'])], function (_0x4d9282) {
                var _0x36247e = _0x11a601;
                gulp['src'](_0x4d9282[_0x36247e(448)], { 'base': source[_0x36247e(456)] })['pipe'](_0x41af64[_0x36247e(458)](gulpif, config[_0x36247e(459)], _0x41af64['rVacx'](chmod, config[_0x36247e(460)])))['pipe'](gulp[_0x36247e(450)](output[_0x36247e(456)]))[_0x36247e(449)](_0x41af64[_0x36247e(461)](print, log['created']));
            });
            continue;
        case '4':
            var _0x41af64 = {
                'AGeFF': function (_0x5ec541, _0x512f21) {
                    var _0x5c6aa6 = _0x11a601;
                    return _0xfab30e[_0x5c6aa6(462)](_0x5ec541, _0x512f21);
                },
                'DSOlb': _0x11a601(463),
                'TtqKL': 'package uncompressed docs css',
                'tjtJH': _0xfab30e[_0x11a601(464)],
                'FezkS': function (_0x1373a2, _0x3a66a3) {
                    var _0x34baf5 = _0x11a601;
                    return _0xfab30e[_0x34baf5(465)](_0x1373a2, _0x3a66a3);
                },
                'HBaJp': _0xfab30e['yMBQs'],
                'OqfzE': function (_0x566495, _0x7118cc) {
                    var _0x260ca9 = _0x11a601;
                    return _0xfab30e[_0x260ca9(465)](_0x566495, _0x7118cc);
                },
                'egJLM': _0x11a601(466),
                'TuVTQ': function (_0x264606, _0x11ace3) {
                    var _0x8ee7de = _0x11a601;
                    return _0xfab30e[_0x8ee7de(467)](_0x264606, _0x11ace3);
                },
                'drVWT': _0xfab30e[_0x11a601(468)],
                'oPbKi': function (_0x5c6832) {
                    var _0x1cf050 = _0x11a601;
                    return _0xfab30e[_0x1cf050(469)](_0x5c6832);
                },
                'LQUVD': function (_0x58c147, _0x5bdc41, _0x452eef) {
                    var _0x51697a = _0x11a601;
                    return _0xfab30e[_0x51697a(470)](_0x58c147, _0x5bdc41, _0x452eef);
                },
                'PDaUA': function (_0x310c78, _0x56044d, _0x8b0b44) {
                    return _0x310c78(_0x56044d, _0x8b0b44);
                },
                'hPAjU': _0x11a601(471),
                'fskDh': function (_0x3e011e, _0x48be05) {
                    var _0x23a225 = _0x11a601;
                    return _0xfab30e[_0x23a225(472)](_0x3e011e, _0x48be05);
                },
                'CEavd': function (_0x12be04, _0x2b92f5) {
                    return _0xfab30e['BVRCk'](_0x12be04, _0x2b92f5);
                },
                'WNtYM': function (_0x28b882, _0x259764) {
                    return _0x28b882(_0x259764);
                },
                'ZWBGA': _0xfab30e[_0x11a601(473)],
                'CYAhP': function (_0x3e05dd, _0x55509c, _0x32be58) {
                    var _0x57c907 = _0x11a601;
                    return _0xfab30e[_0x57c907(470)](_0x3e05dd, _0x55509c, _0x32be58);
                },
                'xOxCE': _0xfab30e[_0x11a601(474)],
                'eERHT': _0xfab30e['cbaex'],
                'VkcCK': _0x11a601(475),
                'zvDBX': function (_0x16bd04, _0x132317) {
                    return _0x16bd04 !== _0x132317;
                },
                'WRXUL': _0x11a601(476),
                'ECTfy': function (_0x3f4e8a) {
                    return _0x3f4e8a();
                },
                'xhEkm': function (_0xd980cc, _0x377087, _0x24944d) {
                    return _0xfab30e['kpdAV'](_0xd980cc, _0x377087, _0x24944d);
                },
                'oFDpK': function (_0x263034, _0x444f05) {
                    return _0xfab30e['BVRCk'](_0x263034, _0x444f05);
                },
                'CwDEx': function (_0x4f70dc, _0x592397) {
                    var _0x320d4a = _0x11a601;
                    return _0xfab30e[_0x320d4a(477)](_0x4f70dc, _0x592397);
                },
                'WcLkQ': function (_0x412678, _0x1139a1, _0x1ea0e7) {
                    return _0xfab30e['HTgzY'](_0x412678, _0x1139a1, _0x1ea0e7);
                },
                'rVacx': function (_0x203cc0, _0x214ec6) {
                    return _0x203cc0(_0x214ec6);
                },
                'NImYb': function (_0x52a687, _0x18443a) {
                    var _0xf1a638 = _0x11a601;
                    return _0xfab30e[_0xf1a638(478)](_0x52a687, _0x18443a);
                }
            };
            continue;
        case '5':
            gulp['watch']([_0xfab30e[_0x11a601(455)](source[_0x11a601(479)], _0xfab30e['egVBX'])], function (_0x283a2c) {
                var _0x2274e7 = _0x11a601, _0x13519a = { 'BDZsh': _0x41af64[_0x2274e7(480)] };
                gulp['src'](_0x283a2c['path'])['pipe'](_0x41af64[_0x2274e7(481)](plumber))['pipe'](_0x41af64[_0x2274e7(482)](gulpif, config[_0x2274e7(459)], _0x41af64[_0x2274e7(483)](chmod, config[_0x2274e7(460)])))[_0x2274e7(449)](gulp[_0x2274e7(450)](output[_0x2274e7(484)]))[_0x2274e7(449)](_0x41af64[_0x2274e7(483)](print, log[_0x2274e7(452)]))[_0x2274e7(449)](_0x41af64[_0x2274e7(483)](uglify, settings[_0x2274e7(485)]))['pipe'](_0x41af64[_0x2274e7(483)](rename, settings[_0x2274e7(486)][_0x2274e7(487)]))[_0x2274e7(449)](gulp[_0x2274e7(450)](output['compressed']))['pipe'](_0x41af64['CwDEx'](print, log[_0x2274e7(452)]))['on'](_0x41af64['hPAjU'], function () {
                    var _0x2eff3f = _0x2274e7;
                    gulp[_0x2eff3f(488)](_0x13519a[_0x2eff3f(489)]), gulp[_0x2eff3f(488)](_0x2eff3f(490));
                });
            });
            continue;
        case '6':
            source = config[_0x11a601(491)][_0x11a601(492)];
            continue;
        case '7':
            gulp[_0x11a601(445)]([
                source[_0x11a601(493)],
                _0xfab30e[_0x11a601(455)](source['definitions'], _0x11a601(494)),
                _0xfab30e[_0x11a601(455)](source[_0x11a601(495)], _0xfab30e[_0x11a601(496)]),
                _0xfab30e[_0x11a601(455)](source[_0x11a601(456)], _0x11a601(497))
            ], function (_0x1cb646) {
                var _0xabda5 = _0x11a601, _0x1aa8c0 = _0xabda5(498)[_0xabda5(443)]('|'), _0x256eea = 1705 + -1712 * -5 + 5 * -2053;
                while (!![]) {
                    switch (_0x1aa8c0[_0x256eea++]) {
                    case '0':
                        var _0x590c43 = {
                            'sgzYP': _0x41af64['TtqKL'],
                            'HkMId': _0x41af64[_0xabda5(499)]
                        };
                        continue;
                    case '1':
                        _0x1ea7c5 = _0x41af64[_0xabda5(500)](_0x1cb646[_0xabda5(448)]['indexOf'](_0x41af64['HBaJp']), -(-9727 + 6386 + 3342)) || _0x41af64[_0xabda5(501)](_0x1cb646[_0xabda5(448)][_0xabda5(502)](_0x41af64[_0xabda5(503)]), -(-1811 + -6807 + -663 * -13));
                        continue;
                    case '2':
                        var _0x4f8927, _0x3ac817, _0x56e07a, _0x2d34d1, _0x2da377, _0x49e296, _0x179b66, _0x1ea7c5;
                        continue;
                    case '3':
                        _0x179b66 = _0x41af64[_0xabda5(504)](_0x1cb646[_0xabda5(448)]['indexOf'](source[_0xabda5(495)]), -(1 * -1511 + 1 * 3630 + -1 * 2118));
                        continue;
                    case '4':
                        gulp[_0xabda5(447)](_0x1cb646[_0xabda5(448)])[_0xabda5(449)](print(log[_0xabda5(505)]));
                        continue;
                    case '5':
                        if (fs[_0xabda5(506)](_0x4f8927)) {
                            var _0x349c4b = _0x41af64[_0xabda5(507)][_0xabda5(443)]('|'), _0x3cf978 = -5565 + 11 * 697 + -2102;
                            while (!![]) {
                                switch (_0x349c4b[_0x3cf978++]) {
                                case '0':
                                    _0x2d34d1 = _0x3ac817[_0xabda5(449)](_0x41af64['oPbKi'](clone));
                                    continue;
                                case '1':
                                    _0x56e07a[_0xabda5(449)](_0x41af64[_0xabda5(508)](plumber))['pipe'](_0x41af64['LQUVD'](replace, assets[_0xabda5(492)], assets[_0xabda5(509)]))[_0xabda5(449)](minifyCSS(settings[_0xabda5(510)]))[_0xabda5(449)](rename(settings['rename'][_0xabda5(511)]))['pipe'](_0x41af64[_0xabda5(512)](header, banner, settings[_0xabda5(513)]))[_0xabda5(449)](gulp[_0xabda5(450)](output[_0xabda5(509)]))[_0xabda5(449)](print(log[_0xabda5(452)]))['on'](_0x41af64[_0xabda5(514)], function () {
                                        gulp['start'](_0x590c43['HkMId']);
                                    });
                                    continue;
                                case '2':
                                    _0x56e07a = _0x3ac817[_0xabda5(449)](clone());
                                    continue;
                                case '3':
                                    _0x3ac817 = gulp['src'](_0x4f8927)[_0xabda5(449)](_0x41af64[_0xabda5(508)](plumber))[_0xabda5(449)](_0x41af64[_0xabda5(515)](less, settings['less']))[_0xabda5(449)](_0x41af64[_0xabda5(512)](replace, comments[_0xabda5(516)]['in'], comments[_0xabda5(516)][_0xabda5(517)]))[_0xabda5(449)](_0x41af64[_0xabda5(512)](replace, comments[_0xabda5(518)]['in'], comments[_0xabda5(518)][_0xabda5(517)]))[_0xabda5(449)](_0x41af64[_0xabda5(512)](replace, comments[_0xabda5(519)]['in'], comments[_0xabda5(519)][_0xabda5(517)]))[_0xabda5(449)](replace(comments['tiny']['in'], comments[_0xabda5(520)][_0xabda5(517)]))['pipe'](_0x41af64['CEavd'](autoprefixer, settings['prefix']))[_0xabda5(449)](_0x41af64['PDaUA'](gulpif, config[_0xabda5(459)], _0x41af64[_0xabda5(521)](chmod, config[_0xabda5(460)])));
                                    continue;
                                case '4':
                                    _0x2d34d1[_0xabda5(449)](_0x41af64['oPbKi'](plumber))[_0xabda5(449)](_0x41af64['PDaUA'](replace, assets[_0xabda5(492)], assets[_0xabda5(484)]))[_0xabda5(449)](_0x41af64[_0xabda5(512)](header, banner, settings['header']))[_0xabda5(449)](gulp[_0xabda5(450)](output['uncompressed']))[_0xabda5(449)](_0x41af64[_0xabda5(521)](print, log[_0xabda5(452)]))['on'](_0x41af64[_0xabda5(514)], function () {
                                        var _0x231b53 = _0xabda5;
                                        gulp[_0x231b53(488)](_0x590c43['sgzYP']);
                                    });
                                    continue;
                                }
                                break;
                            }
                        } else
                            console[_0xabda5(522)](_0x41af64[_0xabda5(523)], _0x4f8927);
                        continue;
                    case '6':
                        _0x49e296 = _0x41af64['TuVTQ'](_0x1cb646[_0xabda5(448)][_0xabda5(502)](source[_0xabda5(456)]), -(-8222 + 7933 + -2 * -145));
                        continue;
                    case '7':
                        if (_0x1ea7c5)
                            return;
                        else {
                            if (_0x49e296)
                                console['log'](_0xabda5(524)), _0x4f8927 = _0x41af64[_0xabda5(525)](replaceExt, _0x1cb646[_0xabda5(448)], _0x41af64['xOxCE']), _0x4f8927 = _0x4f8927[_0xabda5(526)](tasks[_0xabda5(430)][_0xabda5(527)], source[_0xabda5(479)]);
                            else
                                _0x179b66 ? (console[_0xabda5(522)](_0x41af64['eERHT']), _0x4f8927 = _0x41af64['CYAhP'](replaceExt, _0x1cb646[_0xabda5(448)], _0x41af64[_0xabda5(528)]), _0x4f8927 = _0x4f8927[_0xabda5(526)](source[_0xabda5(495)], source[_0xabda5(479)])) : (console['log'](_0x41af64[_0xabda5(529)]), _0x4f8927 = _0x1cb646[_0xabda5(448)]);
                        }
                        continue;
                    case '8':
                        _0x2da377 = _0x41af64[_0xabda5(530)](_0x1cb646['path'][_0xabda5(502)](source[_0xabda5(479)]), -(6930 + -29 * -296 + 3 * -5171));
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '8':
            gulp[_0x11a601(445)]([_0xfab30e[_0x11a601(531)]], function (_0x4e0617) {
                var _0x30d4fb = _0x11a601;
                return console[_0x30d4fb(446)](), gulp[_0x30d4fb(447)](_0x4e0617['path'], { 'base': _0x30d4fb(532) })[_0x30d4fb(449)](gulp[_0x30d4fb(450)](output[_0x30d4fb(533)]))[_0x30d4fb(449)](_0x41af64['AGeFF'](print, log['created']));
            });
            continue;
        case '9':
            assets = config[_0x11a601(491)][_0x11a601(534)];
            continue;
        case '10':
            config = configSetup[_0x11a601(535)](config);
            continue;
        }
        break;
    }
};