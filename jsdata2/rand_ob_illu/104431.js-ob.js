const _0x1e32 = ['replace', 'theme', 'xOxCE', 'VkcCK', 'zvDBX', 'cTVvG', 'src/', 'less', 'assets', 'addDerivedValues', '384129CNFrEu', '4206LXbKHP', '233fvwJou', '1833985AvTtwR', '111lKCyqQ', '6653NAOyPM', '2303VeRGnj', '245WIoHRl', '1507972OpVago', '853243dtXPyF', 'better-console', 'gulp-autoprefixer', 'gulp-chmod', 'gulp-clone', 'gulp-if', 'gulp-header', 'gulp-less', 'gulp-clean-css', 'gulp-plumber', 'gulp-print', 'default', 'gulp-rename', 'replace-ext', 'gulp-watch', '../config/docs', '../config/tasks', '../config/project/config', '../config/project/install', 'regExp', 'comments', 'exports', '4|10|0|9|2|6|8|1|7|5|3', '/**/assets/**/', '?(s).*', 'package compressed docs css', '3|0|2|4|1', 'Cannot find UI definition at path', '.less', 'Change detected in site theme', '/**/*.js', 'src/**/*.*', 'split', 'globs', 'watch', 'clear', 'src', 'path', 'pipe', 'dest', 'AGeFF', 'created', 'output', 'vcsHk', 'wWDzw', 'themes', 'components', 'WcLkQ', 'hasPermission', 'permission', 'NImYb', 'YJpCD', 'examples/', 'CpOIP', 'fGxrk', 'site.variables', 'CQIgD', 'ZfZsJ', 'VCfLA', 'kpdAV', 'end', 'BVRCk', 'PpFrd', 'kbZza', 'Change detected in definition', 'package compressed docs js', 'BfAhk', 'ngBqS', 'definitions', 'WRXUL', 'ECTfy', 'xhEkm', 'oFDpK', 'uncompressed', 'uglify', 'rename', 'minJS', 'start', 'BDZsh', 'package uncompressed docs js', 'paths', 'source', 'config', '/**/*.less', 'site', 'QqUOT', '/**/*.{overrides,variables}', '0|2|4|1|6|3|8|7|5', 'tjtJH', 'FezkS', 'OqfzE', 'indexOf', 'egJLM', 'TuVTQ', 'modified', 'existsSync', 'drVWT', 'oPbKi', 'compressed', 'minify', 'minCSS', 'PDaUA', 'header', 'hPAjU', 'fskDh', 'variables', 'out', 'large', 'small', 'tiny', 'WNtYM', 'log', 'ZWBGA', 'Change detected in packaged theme', 'CYAhP'];
const _0x267a8f = _0x5327;

(function (_0x41ace8, _0x598046) {
    const _0x596cd5 = _0x5327;

    while (true) {
        try {
            const _0x5b950d = -parseInt(_0x596cd5(0x192)) + parseInt(_0x596cd5(0x193)) * -parseInt(_0x596cd5(0x194)) + parseInt(_0x596cd5(0x195)) + -parseInt(_0x596cd5(0x196)) * parseInt(_0x596cd5(0x197)) + parseInt(_0x596cd5(0x198)) * parseInt(_0x596cd5(0x199)) + parseInt(_0x596cd5(0x19a)) + -parseInt(_0x596cd5(0x19b));

            if (_0x5b950d === _0x598046) break;else _0x41ace8.push(_0x41ace8.shift());
        } catch (_0x3fbc61) {
            _0x41ace8.push(_0x41ace8.shift());
        }
    }
})(_0x1e32, 950339);

const gulp = require('gulp');

const console = require(_0x267a8f(0x19c));

const fs = require('fs');

const autoprefixer = require(_0x267a8f(0x19d));

const chmod = require(_0x267a8f(0x19e));

const clone = require(_0x267a8f(0x19f));

const gulpif = require(_0x267a8f(0x1a0));

const header = require(_0x267a8f(0x1a1));

const less = require(_0x267a8f(0x1a2));

const minifyCSS = require(_0x267a8f(0x1a3));

const plumber = require(_0x267a8f(0x1a4));

const print = require(_0x267a8f(0x1a5))[_0x267a8f(0x1a6)];

const rename = require(_0x267a8f(0x1a7));

const replace = require('gulp-replace');

const uglify = require('gulp-uglify');

const replaceExt = require(_0x267a8f(0x1a8));

const watch = require(_0x267a8f(0x1a9));

var config = require(_0x267a8f(0x1aa));

const tasks = require(_0x267a8f(0x1ab));

const configSetup = require(_0x267a8f(0x1ac));

const install = require(_0x267a8f(0x1ad));

const banner = tasks.banner;

const comments = tasks[_0x267a8f(0x1ae)][_0x267a8f(0x1af)];

const log = tasks.log;
const settings = tasks.settings;
var globs;
var assets;
var output;
var source;

function _0x5327(_0x549973, _0x1fb0ce) {
    return _0x5327 = function (_0x206e4d, _0x29a875) {
        _0x206e4d = _0x206e4d - 402;
        const _0x55bc79 = _0x1e32[_0x206e4d];

        return _0x55bc79;
    }, _0x5327(_0x549973, _0x1fb0ce);
}
require('../collections/internal')(gulp), module[_0x267a8f(0x1b0)] = function () {
    const _0x11a601 = _0x267a8f;
    const _0xfab30e = {
        'SpSeG': _0x11a601(0x1b1),
        'vcsHk': function (_0x4919f1, _0x78aedb) {
            return _0x4919f1 + _0x78aedb;
        },
        'wWDzw': function (_0x3bcd9a, _0xd65f24) {
            return _0x3bcd9a + _0xd65f24;
        },
        'dqWmB': _0x11a601(0x1b2),
        'WStOX': _0x11a601(0x1b3),
        'YJpCD': function (_0x2f5269, _0x29a5a2) {
            return _0x2f5269(_0x29a5a2);
        },
        'CpOIP': _0x11a601(0x1b4),
        'fGxrk': function (_0x526161, _0x36d94a) {
            return _0x526161 !== _0x36d94a;
        },
        'yMBQs': 'theme.config',
        'CQIgD': function (_0x34f3dd, _0xeb4439) {
            return _0x34f3dd !== _0xeb4439;
        },
        'ZfZsJ': _0x11a601(0x1b5),
        'VCfLA': function (_0x408261) {
            return _0x408261();
        },
        'kpdAV': function (_0x23b75b, _0x38c2f4, _0x5901bb) {
            return _0x23b75b(_0x38c2f4, _0x5901bb);
        },
        'BVRCk': function (_0x73ca03, _0x345c75) {
            return _0x73ca03(_0x345c75);
        },
        'PpFrd': _0x11a601(0x1b6),
        'kbZza': _0x11a601(0x1b7),
        'cbaex': _0x11a601(0x1b8),
        'BfAhk': function (_0x50971d, _0x47ba99) {
            return _0x50971d(_0x47ba99);
        },
        'HTgzY': function (_0x1837a6, _0x96e0c2, _0x5ea638) {
            return _0x1837a6(_0x96e0c2, _0x5ea638);
        },
        'ngBqS': function (_0x28b769, _0x59f010) {
            return _0x28b769(_0x59f010);
        },
        'egVBX': _0x11a601(0x1b9),
        'QqUOT': '/**/*.{overrides,variables}',
        'cTVvG': _0x11a601(0x1ba)
    };

    const _0x5a18b7 = _0xfab30e.SpSeG[_0x11a601(0x1bb)]('|');

    var _0x557f78 = 0;

    while (true) {
        switch (_0x5a18b7[_0x557f78++]) {
            case '0':
                globs = config[_0x11a601(0x1bc)];
                continue;
            case '1':
                gulp[_0x11a601(0x1bd)](['examples/**/*.*'], function (_0x3e1c7c) {
                    const _0x334941 = _0x11a601;

                    return console[_0x334941(0x1be)](), gulp[_0x334941(0x1bf)](_0x3e1c7c[_0x334941(0x1c0)], { 'base': _0x41af64.DSOlb })[_0x334941(0x1c1)](gulp[_0x334941(0x1c2)](output.examples))[_0x334941(0x1c1)](_0x41af64[_0x334941(0x1c3)](print, log[_0x334941(0x1c4)]));
                });
                continue;
            case '2':
                output = config.paths[_0x11a601(0x1c5)];
                continue;
            case '3':
                gulp[_0x11a601(0x1bd)]([_0xfab30e[_0x11a601(0x1c6)](_0xfab30e[_0x11a601(0x1c7)](source[_0x11a601(0x1c8)], _0xfab30e.dqWmB) + globs[_0x11a601(0x1c9)], _0xfab30e.WStOX)], function (_0x4d9282) {
                    const _0x36247e = _0x11a601;

                    gulp.src(_0x4d9282[_0x36247e(0x1c0)], { 'base': source[_0x36247e(0x1c8)] }).pipe(_0x41af64[_0x36247e(0x1ca)](gulpif, config[_0x36247e(0x1cb)], _0x41af64.rVacx(chmod, config[_0x36247e(0x1cc)]))).pipe(gulp[_0x36247e(0x1c2)](output[_0x36247e(0x1c8)]))[_0x36247e(0x1c1)](_0x41af64[_0x36247e(0x1cd)](print, log.created));
                });
                continue;
            case '4':
                const _0x41af64 = {
                    'AGeFF': function (_0x5ec541, _0x512f21) {
                        const _0x5c6aa6 = _0x11a601;

                        return _0xfab30e[_0x5c6aa6(0x1ce)](_0x5ec541, _0x512f21);
                    },
                    'DSOlb': _0x11a601(0x1cf),
                    'TtqKL': 'package uncompressed docs css',
                    'tjtJH': _0xfab30e[_0x11a601(0x1d0)],
                    'FezkS': function (_0x1373a2, _0x3a66a3) {
                        const _0x34baf5 = _0x11a601;

                        return _0xfab30e[_0x34baf5(0x1d1)](_0x1373a2, _0x3a66a3);
                    },
                    'HBaJp': _0xfab30e.yMBQs,
                    'OqfzE': function (_0x566495, _0x7118cc) {
                        const _0x260ca9 = _0x11a601;

                        return _0xfab30e[_0x260ca9(0x1d1)](_0x566495, _0x7118cc);
                    },
                    'egJLM': _0x11a601(0x1d2),
                    'TuVTQ': function (_0x264606, _0x11ace3) {
                        const _0x8ee7de = _0x11a601;

                        return _0xfab30e[_0x8ee7de(0x1d3)](_0x264606, _0x11ace3);
                    },
                    'drVWT': _0xfab30e[_0x11a601(0x1d4)],
                    'oPbKi': function (_0x5c6832) {
                        const _0x1cf050 = _0x11a601;

                        return _0xfab30e[_0x1cf050(0x1d5)](_0x5c6832);
                    },
                    'LQUVD': function (_0x58c147, _0x5bdc41, _0x452eef) {
                        const _0x51697a = _0x11a601;

                        return _0xfab30e[_0x51697a(0x1d6)](_0x58c147, _0x5bdc41, _0x452eef);
                    },
                    'PDaUA': function (_0x310c78, _0x56044d, _0x8b0b44) {
                        return _0x310c78(_0x56044d, _0x8b0b44);
                    },
                    'hPAjU': _0x11a601(0x1d7),
                    'fskDh': function (_0x3e011e, _0x48be05) {
                        const _0x23a225 = _0x11a601;

                        return _0xfab30e[_0x23a225(0x1d8)](_0x3e011e, _0x48be05);
                    },
                    'CEavd': function (_0x12be04, _0x2b92f5) {
                        return _0xfab30e.BVRCk(_0x12be04, _0x2b92f5);
                    },
                    'WNtYM': function (_0x28b882, _0x259764) {
                        return _0x28b882(_0x259764);
                    },
                    'ZWBGA': _0xfab30e[_0x11a601(0x1d9)],
                    'CYAhP': function (_0x3e05dd, _0x55509c, _0x32be58) {
                        const _0x57c907 = _0x11a601;

                        return _0xfab30e[_0x57c907(0x1d6)](_0x3e05dd, _0x55509c, _0x32be58);
                    },
                    'xOxCE': _0xfab30e[_0x11a601(0x1da)],
                    'eERHT': _0xfab30e.cbaex,
                    'VkcCK': _0x11a601(0x1db),
                    'zvDBX': function (_0x16bd04, _0x132317) {
                        return _0x16bd04 !== _0x132317;
                    },
                    'WRXUL': _0x11a601(0x1dc),
                    'ECTfy': function (_0x3f4e8a) {
                        return _0x3f4e8a();
                    },
                    'xhEkm': function (_0xd980cc, _0x377087, _0x24944d) {
                        return _0xfab30e.kpdAV(_0xd980cc, _0x377087, _0x24944d);
                    },
                    'oFDpK': function (_0x263034, _0x444f05) {
                        return _0xfab30e.BVRCk(_0x263034, _0x444f05);
                    },
                    'CwDEx': function (_0x4f70dc, _0x592397) {
                        const _0x320d4a = _0x11a601;

                        return _0xfab30e[_0x320d4a(0x1dd)](_0x4f70dc, _0x592397);
                    },
                    'WcLkQ': function (_0x412678, _0x1139a1, _0x1ea0e7) {
                        return _0xfab30e.HTgzY(_0x412678, _0x1139a1, _0x1ea0e7);
                    },
                    'rVacx': function (_0x203cc0, _0x214ec6) {
                        return _0x203cc0(_0x214ec6);
                    },
                    'NImYb': function (_0x52a687, _0x18443a) {
                        const _0xf1a638 = _0x11a601;

                        return _0xfab30e[_0xf1a638(0x1de)](_0x52a687, _0x18443a);
                    }
                };

                continue;
            case '5':
                gulp.watch([_0xfab30e[_0x11a601(0x1c7)](source[_0x11a601(0x1df)], _0xfab30e.egVBX)], function (_0x283a2c) {
                    const _0x2274e7 = _0x11a601;
                    const _0x13519a = { 'BDZsh': _0x41af64[_0x2274e7(0x1e0)] };

                    gulp.src(_0x283a2c.path).pipe(_0x41af64[_0x2274e7(0x1e1)](plumber)).pipe(_0x41af64[_0x2274e7(0x1e2)](gulpif, config[_0x2274e7(0x1cb)], _0x41af64[_0x2274e7(0x1e3)](chmod, config[_0x2274e7(0x1cc)])))[_0x2274e7(0x1c1)](gulp[_0x2274e7(0x1c2)](output[_0x2274e7(0x1e4)]))[_0x2274e7(0x1c1)](_0x41af64[_0x2274e7(0x1e3)](print, log[_0x2274e7(0x1c4)]))[_0x2274e7(0x1c1)](_0x41af64[_0x2274e7(0x1e3)](uglify, settings[_0x2274e7(0x1e5)])).pipe(_0x41af64[_0x2274e7(0x1e3)](rename, settings[_0x2274e7(0x1e6)][_0x2274e7(0x1e7)]))[_0x2274e7(0x1c1)](gulp[_0x2274e7(0x1c2)](output.compressed)).pipe(_0x41af64.CwDEx(print, log[_0x2274e7(0x1c4)])).on(_0x41af64.hPAjU, function () {
                        const _0x2eff3f = _0x2274e7;

                        gulp[_0x2eff3f(0x1e8)](_0x13519a[_0x2eff3f(0x1e9)]), gulp[_0x2eff3f(0x1e8)](_0x2eff3f(0x1ea));
                    });
                });
                continue;
            case '6':
                source = config[_0x11a601(0x1eb)][_0x11a601(0x1ec)];
                continue;
            case '7':
                gulp[_0x11a601(0x1bd)]([source[_0x11a601(0x1ed)], _0xfab30e[_0x11a601(0x1c7)](source.definitions, _0x11a601(0x1ee)), _0xfab30e[_0x11a601(0x1c7)](source[_0x11a601(0x1ef)], _0xfab30e[_0x11a601(0x1f0)]), _0xfab30e[_0x11a601(0x1c7)](source[_0x11a601(0x1c8)], _0x11a601(0x1f1))], function (_0x1cb646) {
                    const _0xabda5 = _0x11a601;

                    const _0x1aa8c0 = _0xabda5(0x1f2)[_0xabda5(0x1bb)]('|');

                    var _0x256eea = 0;

                    while (true) {
                        switch (_0x1aa8c0[_0x256eea++]) {
                            case '0':
                                const _0x590c43 = {
                                    'sgzYP': _0x41af64.TtqKL,
                                    'HkMId': _0x41af64[_0xabda5(0x1f3)]
                                };

                                continue;
                            case '1':
                                _0x1ea7c5 = _0x41af64[_0xabda5(0x1f4)](_0x1cb646[_0xabda5(0x1c0)].indexOf(_0x41af64.HBaJp), -1) || _0x41af64[_0xabda5(0x1f5)](_0x1cb646[_0xabda5(0x1c0)][_0xabda5(0x1f6)](_0x41af64[_0xabda5(0x1f7)]), -1);
                                continue;
                            case '2':
                                var _0x4f8927;

                                var _0x3ac817;

                                var _0x56e07a;

                                var _0x2d34d1;

                                var _0x2da377;

                                var _0x49e296;

                                var _0x179b66;

                                var _0x1ea7c5;

                                continue;
                            case '3':
                                _0x179b66 = _0x41af64[_0xabda5(0x1f8)](_0x1cb646[_0xabda5(0x1c0)].indexOf(source[_0xabda5(0x1ef)]), -1);
                                continue;
                            case '4':
                                gulp[_0xabda5(0x1bf)](_0x1cb646[_0xabda5(0x1c0)])[_0xabda5(0x1c1)](print(log[_0xabda5(0x1f9)]));
                                continue;
                            case '5':
                                if (fs[_0xabda5(0x1fa)](_0x4f8927)) {
                                    const _0x349c4b = _0x41af64[_0xabda5(0x1fb)][_0xabda5(0x1bb)]('|');

                                    var _0x3cf978 = 0;

                                    while (true) {
                                        switch (_0x349c4b[_0x3cf978++]) {
                                            case '0':
                                                _0x2d34d1 = _0x3ac817[_0xabda5(0x1c1)](_0x41af64.oPbKi(clone));
                                                continue;
                                            case '1':
                                                _0x56e07a[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x1fc)](plumber)).pipe(_0x41af64.LQUVD(replace, assets[_0xabda5(0x1ec)], assets[_0xabda5(0x1fd)]))[_0xabda5(0x1c1)](minifyCSS(settings[_0xabda5(0x1fe)]))[_0xabda5(0x1c1)](rename(settings.rename[_0xabda5(0x1ff)])).pipe(_0x41af64[_0xabda5(0x200)](header, banner, settings[_0xabda5(0x201)]))[_0xabda5(0x1c1)](gulp[_0xabda5(0x1c2)](output[_0xabda5(0x1fd)]))[_0xabda5(0x1c1)](print(log[_0xabda5(0x1c4)])).on(_0x41af64[_0xabda5(0x202)], function () {
                                                    gulp.start(_0x590c43.HkMId);
                                                });
                                                continue;
                                            case '2':
                                                _0x56e07a = _0x3ac817[_0xabda5(0x1c1)](clone());
                                                continue;
                                            case '3':
                                                _0x3ac817 = gulp.src(_0x4f8927)[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x1fc)](plumber))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x203)](less, settings.less))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x200)](replace, comments[_0xabda5(0x204)].in, comments[_0xabda5(0x204)][_0xabda5(0x205)]))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x200)](replace, comments[_0xabda5(0x206)].in, comments[_0xabda5(0x206)][_0xabda5(0x205)]))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x200)](replace, comments[_0xabda5(0x207)].in, comments[_0xabda5(0x207)][_0xabda5(0x205)]))[_0xabda5(0x1c1)](replace(comments.tiny.in, comments[_0xabda5(0x208)][_0xabda5(0x205)])).pipe(_0x41af64.CEavd(autoprefixer, settings.prefix))[_0xabda5(0x1c1)](_0x41af64.PDaUA(gulpif, config[_0xabda5(0x1cb)], _0x41af64[_0xabda5(0x209)](chmod, config[_0xabda5(0x1cc)])));
                                                continue;
                                            case '4':
                                                _0x2d34d1[_0xabda5(0x1c1)](_0x41af64.oPbKi(plumber))[_0xabda5(0x1c1)](_0x41af64.PDaUA(replace, assets[_0xabda5(0x1ec)], assets[_0xabda5(0x1e4)]))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x200)](header, banner, settings.header))[_0xabda5(0x1c1)](gulp[_0xabda5(0x1c2)](output.uncompressed))[_0xabda5(0x1c1)](_0x41af64[_0xabda5(0x209)](print, log[_0xabda5(0x1c4)])).on(_0x41af64[_0xabda5(0x202)], function () {
                                                    const _0x231b53 = _0xabda5;

                                                    gulp[_0x231b53(0x1e8)](_0x590c43.sgzYP);
                                                });
                                                continue;
                                        }
                                        break;
                                    }
                                } else console[_0xabda5(0x20a)](_0x41af64[_0xabda5(0x20b)], _0x4f8927);
                                continue;
                            case '6':
                                _0x49e296 = _0x41af64.TuVTQ(_0x1cb646[_0xabda5(0x1c0)][_0xabda5(0x1f6)](source[_0xabda5(0x1c8)]), -1);
                                continue;
                            case '7':
                                if (_0x1ea7c5) return;else {
                                    if (_0x49e296) console.log(_0xabda5(0x20c)), _0x4f8927 = _0x41af64[_0xabda5(0x20d)](replaceExt, _0x1cb646[_0xabda5(0x1c0)], _0x41af64.xOxCE), _0x4f8927 = _0x4f8927[_0xabda5(0x20e)](tasks[_0xabda5(0x1ae)][_0xabda5(0x20f)], source[_0xabda5(0x1df)]);else _0x179b66 ? (console[_0xabda5(0x20a)](_0x41af64.eERHT), _0x4f8927 = _0x41af64.CYAhP(replaceExt, _0x1cb646[_0xabda5(0x1c0)], _0x41af64[_0xabda5(0x210)]), _0x4f8927 = _0x4f8927[_0xabda5(0x20e)](source[_0xabda5(0x1ef)], source[_0xabda5(0x1df)])) : (console.log(_0x41af64[_0xabda5(0x211)]), _0x4f8927 = _0x1cb646[_0xabda5(0x1c0)]);
                                }
                                continue;
                            case '8':
                                _0x2da377 = _0x41af64[_0xabda5(0x212)](_0x1cb646.path[_0xabda5(0x1f6)](source[_0xabda5(0x1df)]), -1);
                                continue;
                        }
                        break;
                    }
                });
                continue;
            case '8':
                gulp[_0x11a601(0x1bd)]([_0xfab30e[_0x11a601(0x213)]], function (_0x4e0617) {
                    const _0x30d4fb = _0x11a601;

                    return console[_0x30d4fb(0x1be)](), gulp[_0x30d4fb(0x1bf)](_0x4e0617.path, { 'base': _0x30d4fb(0x214) })[_0x30d4fb(0x1c1)](gulp[_0x30d4fb(0x1c2)](output[_0x30d4fb(0x215)]))[_0x30d4fb(0x1c1)](_0x41af64.AGeFF(print, log.created));
                });
                continue;
            case '9':
                assets = config[_0x11a601(0x1eb)][_0x11a601(0x216)];
                continue;
            case '10':
                config = configSetup[_0x11a601(0x217)](config);
                continue;
        }
        break;
    }
};
