var _0x15c5 = [
    'gulp-clean-css',
    'gulp-plumber',
    'gulp-print',
    'default',
    'gulp-rename',
    'gulp-replace',
    'gulp-uglify',
    'replace-ext',
    'gulp-watch',
    '../config/docs',
    '../config/tasks',
    '../config/project/config',
    '../config/project/install',
    'banner',
    'log',
    'settings',
    '../collections/internal',
    'exports',
    'globs',
    'paths',
    'assets',
    'source',
    'watch',
    'src/**/*.*',
    'clear',
    'src',
    'path',
    'pipe',
    'dest',
    'created',
    'examples/**/*.*',
    'examples/',
    'examples',
    'site',
    '/**/*.{overrides,variables}',
    'indexOf',
    'theme.config',
    'site.variables',
    'definitions',
    'Change\x20detected\x20in\x20packaged\x20theme',
    '.less',
    'replace',
    'regExp',
    'theme',
    'Change\x20detected\x20in\x20definition',
    'less',
    'variables',
    'out',
    'large',
    'small',
    'tiny',
    'permission',
    'uncompressed',
    'header',
    'end',
    'start',
    'compressed',
    'rename',
    'minCSS',
    'package\x20compressed\x20docs\x20css',
    'Cannot\x20find\x20UI\x20definition\x20at\x20path',
    '/**/*.js',
    'minJS',
    'themes',
    '/**/assets/**/',
    'components',
    '?(s).*',
    'hasPermission',
    '2bjdGVs',
    '149462MFrPCG',
    '428835DjsWDM',
    '310631ZmNEUM',
    '574059cbEfUb',
    '1uoqspK',
    '228784IqfTDC',
    '1005uTCPlR',
    '277BjwkQk',
    '1732707QdZoFn',
    'gulp',
    'better-console',
    'gulp-chmod',
    'gulp-if',
    'gulp-header',
    'gulp-less'
];
var _0x469137 = _0x22fd;
function _0x22fd(_0x4f8883, _0xff5613) {
    return _0x22fd = function (_0x15c5c7, _0x22fdfb) {
        _0x15c5c7 = _0x15c5c7 - 0x137;
        var _0x1d5023 = _0x15c5[_0x15c5c7];
        return _0x1d5023;
    }, _0x22fd(_0x4f8883, _0xff5613);
}
(function (_0x413f2c, _0x1dd947) {
    var _0x26c4eb = _0x22fd;
    while (!![]) {
        try {
            var _0x435e2c = parseInt(_0x26c4eb(0x137)) * parseInt(_0x26c4eb(0x138)) + parseInt(_0x26c4eb(0x139)) + parseInt(_0x26c4eb(0x13a)) + parseInt(_0x26c4eb(0x13b)) * parseInt(_0x26c4eb(0x13c)) + parseInt(_0x26c4eb(0x13d)) + parseInt(_0x26c4eb(0x13e)) * parseInt(_0x26c4eb(0x13f)) + -parseInt(_0x26c4eb(0x140));
            if (_0x435e2c === _0x1dd947)
                break;
            else
                _0x413f2c['push'](_0x413f2c['shift']());
        } catch (_0x44b652) {
            _0x413f2c['push'](_0x413f2c['shift']());
        }
    }
}(_0x15c5, 0x5e75f));
var gulp = require(_0x469137(0x141)), console = require(_0x469137(0x142)), fs = require('fs'), autoprefixer = require('gulp-autoprefixer'), chmod = require(_0x469137(0x143)), clone = require('gulp-clone'), gulpif = require(_0x469137(0x144)), header = require(_0x469137(0x145)), less = require(_0x469137(0x146)), minifyCSS = require(_0x469137(0x147)), plumber = require(_0x469137(0x148)), print = require(_0x469137(0x149))[_0x469137(0x14a)], rename = require(_0x469137(0x14b)), replace = require(_0x469137(0x14c)), uglify = require(_0x469137(0x14d)), replaceExt = require(_0x469137(0x14e)), watch = require(_0x469137(0x14f)), config = require(_0x469137(0x150)), tasks = require(_0x469137(0x151)), configSetup = require(_0x469137(0x152)), install = require(_0x469137(0x153)), banner = tasks[_0x469137(0x154)], comments = tasks['regExp']['comments'], log = tasks[_0x469137(0x155)], settings = tasks[_0x469137(0x156)], globs, assets, output, source;
require(_0x469137(0x157))(gulp), module[_0x469137(0x158)] = function () {
    var _0x5571c8 = _0x469137;
    config = configSetup['addDerivedValues'](config), globs = config[_0x5571c8(0x159)], assets = config[_0x5571c8(0x15a)][_0x5571c8(0x15b)], output = config[_0x5571c8(0x15a)]['output'], source = config[_0x5571c8(0x15a)][_0x5571c8(0x15c)], gulp[_0x5571c8(0x15d)]([_0x5571c8(0x15e)], function (_0x30cb4f) {
        var _0x324b92 = _0x5571c8;
        return console[_0x324b92(0x15f)](), gulp[_0x324b92(0x160)](_0x30cb4f[_0x324b92(0x161)], { 'base': 'src/' })[_0x324b92(0x162)](gulp[_0x324b92(0x163)](output['less']))[_0x324b92(0x162)](print(log[_0x324b92(0x164)]));
    }), gulp[_0x5571c8(0x15d)]([_0x5571c8(0x165)], function (_0x52152b) {
        var _0x1d9315 = _0x5571c8;
        return console['clear'](), gulp[_0x1d9315(0x160)](_0x52152b['path'], { 'base': _0x1d9315(0x166) })[_0x1d9315(0x162)](gulp[_0x1d9315(0x163)](output[_0x1d9315(0x167)]))['pipe'](print(log[_0x1d9315(0x164)]));
    }), gulp['watch']([
        source['config'],
        source['definitions'] + '/**/*.less',
        source[_0x5571c8(0x168)] + '/**/*.{overrides,variables}',
        source['themes'] + _0x5571c8(0x169)
    ], function (_0x1b42dc) {
        var _0x59b54d = _0x5571c8, _0x40619a, _0x292324, _0x1fb73a, _0x73062, _0x359720, _0x84931b, _0x3091f1, _0x1cfd1b;
        gulp[_0x59b54d(0x160)](_0x1b42dc[_0x59b54d(0x161)])['pipe'](print(log['modified'])), _0x1cfd1b = _0x1b42dc[_0x59b54d(0x161)][_0x59b54d(0x16a)](_0x59b54d(0x16b)) !== -0x1 || _0x1b42dc[_0x59b54d(0x161)][_0x59b54d(0x16a)](_0x59b54d(0x16c)) !== -0x1, _0x84931b = _0x1b42dc['path'][_0x59b54d(0x16a)](source['themes']) !== -0x1, _0x3091f1 = _0x1b42dc[_0x59b54d(0x161)]['indexOf'](source['site']) !== -0x1, _0x359720 = _0x1b42dc[_0x59b54d(0x161)]['indexOf'](source[_0x59b54d(0x16d)]) !== -0x1;
        if (_0x1cfd1b)
            return;
        else {
            if (_0x84931b)
                console['log'](_0x59b54d(0x16e)), _0x40619a = replaceExt(_0x1b42dc['path'], _0x59b54d(0x16f)), _0x40619a = _0x40619a[_0x59b54d(0x170)](tasks[_0x59b54d(0x171)][_0x59b54d(0x172)], source[_0x59b54d(0x16d)]);
            else
                _0x3091f1 ? (console[_0x59b54d(0x155)]('Change\x20detected\x20in\x20site\x20theme'), _0x40619a = replaceExt(_0x1b42dc['path'], '.less'), _0x40619a = _0x40619a[_0x59b54d(0x170)](source[_0x59b54d(0x168)], source[_0x59b54d(0x16d)])) : (console[_0x59b54d(0x155)](_0x59b54d(0x173)), _0x40619a = _0x1b42dc[_0x59b54d(0x161)]);
        }
        fs['existsSync'](_0x40619a) ? (_0x292324 = gulp[_0x59b54d(0x160)](_0x40619a)[_0x59b54d(0x162)](plumber())[_0x59b54d(0x162)](less(settings[_0x59b54d(0x174)]))[_0x59b54d(0x162)](replace(comments[_0x59b54d(0x175)]['in'], comments['variables'][_0x59b54d(0x176)]))[_0x59b54d(0x162)](replace(comments[_0x59b54d(0x177)]['in'], comments[_0x59b54d(0x177)]['out']))[_0x59b54d(0x162)](replace(comments[_0x59b54d(0x178)]['in'], comments[_0x59b54d(0x178)][_0x59b54d(0x176)]))[_0x59b54d(0x162)](replace(comments[_0x59b54d(0x179)]['in'], comments[_0x59b54d(0x179)][_0x59b54d(0x176)]))[_0x59b54d(0x162)](autoprefixer(settings['prefix']))[_0x59b54d(0x162)](gulpif(config['hasPermission'], chmod(config[_0x59b54d(0x17a)]))), _0x73062 = _0x292324[_0x59b54d(0x162)](clone()), _0x1fb73a = _0x292324['pipe'](clone()), _0x73062['pipe'](plumber())[_0x59b54d(0x162)](replace(assets[_0x59b54d(0x15c)], assets[_0x59b54d(0x17b)]))[_0x59b54d(0x162)](header(banner, settings[_0x59b54d(0x17c)]))[_0x59b54d(0x162)](gulp[_0x59b54d(0x163)](output[_0x59b54d(0x17b)]))[_0x59b54d(0x162)](print(log[_0x59b54d(0x164)]))['on'](_0x59b54d(0x17d), function () {
            var _0x29232b = _0x59b54d;
            gulp[_0x29232b(0x17e)]('package\x20uncompressed\x20docs\x20css');
        }), _0x1fb73a['pipe'](plumber())[_0x59b54d(0x162)](replace(assets[_0x59b54d(0x15c)], assets[_0x59b54d(0x17f)]))[_0x59b54d(0x162)](minifyCSS(settings['minify']))[_0x59b54d(0x162)](rename(settings[_0x59b54d(0x180)][_0x59b54d(0x181)]))['pipe'](header(banner, settings[_0x59b54d(0x17c)]))[_0x59b54d(0x162)](gulp[_0x59b54d(0x163)](output['compressed']))['pipe'](print(log[_0x59b54d(0x164)]))['on'](_0x59b54d(0x17d), function () {
            var _0x15d2d9 = _0x59b54d;
            gulp['start'](_0x15d2d9(0x182));
        })) : console[_0x59b54d(0x155)](_0x59b54d(0x183), _0x40619a);
    }), gulp[_0x5571c8(0x15d)]([source[_0x5571c8(0x16d)] + _0x5571c8(0x184)], function (_0x43a8e2) {
        var _0x1fd169 = _0x5571c8;
        gulp['src'](_0x43a8e2[_0x1fd169(0x161)])['pipe'](plumber())['pipe'](gulpif(config['hasPermission'], chmod(config[_0x1fd169(0x17a)])))[_0x1fd169(0x162)](gulp['dest'](output[_0x1fd169(0x17b)]))[_0x1fd169(0x162)](print(log[_0x1fd169(0x164)]))[_0x1fd169(0x162)](uglify(settings['uglify']))['pipe'](rename(settings[_0x1fd169(0x180)][_0x1fd169(0x185)]))[_0x1fd169(0x162)](gulp[_0x1fd169(0x163)](output[_0x1fd169(0x17f)]))[_0x1fd169(0x162)](print(log['created']))['on'](_0x1fd169(0x17d), function () {
            var _0x14820c = _0x1fd169;
            gulp[_0x14820c(0x17e)]('package\x20compressed\x20docs\x20js'), gulp[_0x14820c(0x17e)]('package\x20uncompressed\x20docs\x20js');
        });
    }), gulp[_0x5571c8(0x15d)]([source[_0x5571c8(0x186)] + _0x5571c8(0x187) + globs[_0x5571c8(0x188)] + _0x5571c8(0x189)], function (_0x289c3f) {
        var _0x534fa0 = _0x5571c8;
        gulp[_0x534fa0(0x160)](_0x289c3f[_0x534fa0(0x161)], { 'base': source[_0x534fa0(0x186)] })['pipe'](gulpif(config[_0x534fa0(0x18a)], chmod(config[_0x534fa0(0x17a)])))[_0x534fa0(0x162)](gulp['dest'](output['themes']))[_0x534fa0(0x162)](print(log[_0x534fa0(0x164)]));
    });
};
