var gulp = require(_0x469137(321)), console = require(_0x469137(322)), fs = require('fs'), autoprefixer = require('gulp-autoprefixer'), chmod = require(_0x469137(323)), clone = require('gulp-clone'), gulpif = require(_0x469137(324)), header = require(_0x469137(325)), less = require(_0x469137(326)), minifyCSS = require(_0x469137(327)), plumber = require(_0x469137(328)), print = require(_0x469137(329))[_0x469137(330)], rename = require(_0x469137(331)), replace = require(_0x469137(332)), uglify = require(_0x469137(333)), replaceExt = require(_0x469137(334)), watch = require(_0x469137(335)), config = require(_0x469137(336)), tasks = require(_0x469137(337)), configSetup = require(_0x469137(338)), install = require(_0x469137(339)), banner = tasks[_0x469137(340)], comments = tasks['regExp']['comments'], log = tasks[_0x469137(341)], settings = tasks[_0x469137(342)], globs, assets, output, source;
require(_0x469137(343))(gulp), module[_0x469137(344)] = function () {
    var _0x5571c8 = _0x469137;
    config = configSetup['addDerivedValues'](config), globs = config[_0x5571c8(345)], assets = config[_0x5571c8(346)][_0x5571c8(347)], output = config[_0x5571c8(346)]['output'], source = config[_0x5571c8(346)][_0x5571c8(348)], gulp[_0x5571c8(349)]([_0x5571c8(350)], function (_0x30cb4f) {
        var _0x324b92 = _0x5571c8;
        return console[_0x324b92(351)](), gulp[_0x324b92(352)](_0x30cb4f[_0x324b92(353)], { 'base': 'src/' })[_0x324b92(354)](gulp[_0x324b92(355)](output['less']))[_0x324b92(354)](print(log[_0x324b92(356)]));
    }), gulp[_0x5571c8(349)]([_0x5571c8(357)], function (_0x52152b) {
        var _0x1d9315 = _0x5571c8;
        return console['clear'](), gulp[_0x1d9315(352)](_0x52152b['path'], { 'base': _0x1d9315(358) })[_0x1d9315(354)](gulp[_0x1d9315(355)](output[_0x1d9315(359)]))['pipe'](print(log[_0x1d9315(356)]));
    }), gulp['watch']([
        source['config'],
        source['definitions'] + '/**/*.less',
        source[_0x5571c8(360)] + '/**/*.{overrides,variables}',
        source['themes'] + _0x5571c8(361)
    ], function (_0x1b42dc) {
        var _0x59b54d = _0x5571c8, _0x40619a, _0x292324, _0x1fb73a, _0x73062, _0x359720, _0x84931b, _0x3091f1, _0x1cfd1b;
        gulp[_0x59b54d(352)](_0x1b42dc[_0x59b54d(353)])['pipe'](print(log['modified'])), _0x1cfd1b = _0x1b42dc[_0x59b54d(353)][_0x59b54d(362)](_0x59b54d(363)) !== -1 || _0x1b42dc[_0x59b54d(353)][_0x59b54d(362)](_0x59b54d(364)) !== -1, _0x84931b = _0x1b42dc['path'][_0x59b54d(362)](source['themes']) !== -1, _0x3091f1 = _0x1b42dc[_0x59b54d(353)]['indexOf'](source['site']) !== -1, _0x359720 = _0x1b42dc[_0x59b54d(353)]['indexOf'](source[_0x59b54d(365)]) !== -1;
        if (_0x1cfd1b)
            return;
        else {
            if (_0x84931b)
                console['log'](_0x59b54d(366)), _0x40619a = replaceExt(_0x1b42dc['path'], _0x59b54d(367)), _0x40619a = _0x40619a[_0x59b54d(368)](tasks[_0x59b54d(369)][_0x59b54d(370)], source[_0x59b54d(365)]);
            else
                _0x3091f1 ? (console[_0x59b54d(341)]('Change detected in site theme'), _0x40619a = replaceExt(_0x1b42dc['path'], '.less'), _0x40619a = _0x40619a[_0x59b54d(368)](source[_0x59b54d(360)], source[_0x59b54d(365)])) : (console[_0x59b54d(341)](_0x59b54d(371)), _0x40619a = _0x1b42dc[_0x59b54d(353)]);
        }
        fs['existsSync'](_0x40619a) ? (_0x292324 = gulp[_0x59b54d(352)](_0x40619a)[_0x59b54d(354)](plumber())[_0x59b54d(354)](less(settings[_0x59b54d(372)]))[_0x59b54d(354)](replace(comments[_0x59b54d(373)]['in'], comments['variables'][_0x59b54d(374)]))[_0x59b54d(354)](replace(comments[_0x59b54d(375)]['in'], comments[_0x59b54d(375)]['out']))[_0x59b54d(354)](replace(comments[_0x59b54d(376)]['in'], comments[_0x59b54d(376)][_0x59b54d(374)]))[_0x59b54d(354)](replace(comments[_0x59b54d(377)]['in'], comments[_0x59b54d(377)][_0x59b54d(374)]))[_0x59b54d(354)](autoprefixer(settings['prefix']))[_0x59b54d(354)](gulpif(config['hasPermission'], chmod(config[_0x59b54d(378)]))), _0x73062 = _0x292324[_0x59b54d(354)](clone()), _0x1fb73a = _0x292324['pipe'](clone()), _0x73062['pipe'](plumber())[_0x59b54d(354)](replace(assets[_0x59b54d(348)], assets[_0x59b54d(379)]))[_0x59b54d(354)](header(banner, settings[_0x59b54d(380)]))[_0x59b54d(354)](gulp[_0x59b54d(355)](output[_0x59b54d(379)]))[_0x59b54d(354)](print(log[_0x59b54d(356)]))['on'](_0x59b54d(381), function () {
            var _0x29232b = _0x59b54d;
            gulp[_0x29232b(382)]('package uncompressed docs css');
        }), _0x1fb73a['pipe'](plumber())[_0x59b54d(354)](replace(assets[_0x59b54d(348)], assets[_0x59b54d(383)]))[_0x59b54d(354)](minifyCSS(settings['minify']))[_0x59b54d(354)](rename(settings[_0x59b54d(384)][_0x59b54d(385)]))['pipe'](header(banner, settings[_0x59b54d(380)]))[_0x59b54d(354)](gulp[_0x59b54d(355)](output['compressed']))['pipe'](print(log[_0x59b54d(356)]))['on'](_0x59b54d(381), function () {
            var _0x15d2d9 = _0x59b54d;
            gulp['start'](_0x15d2d9(386));
        })) : console[_0x59b54d(341)](_0x59b54d(387), _0x40619a);
    }), gulp[_0x5571c8(349)]([source[_0x5571c8(365)] + _0x5571c8(388)], function (_0x43a8e2) {
        var _0x1fd169 = _0x5571c8;
        gulp['src'](_0x43a8e2[_0x1fd169(353)])['pipe'](plumber())['pipe'](gulpif(config['hasPermission'], chmod(config[_0x1fd169(378)])))[_0x1fd169(354)](gulp['dest'](output[_0x1fd169(379)]))[_0x1fd169(354)](print(log[_0x1fd169(356)]))[_0x1fd169(354)](uglify(settings['uglify']))['pipe'](rename(settings[_0x1fd169(384)][_0x1fd169(389)]))[_0x1fd169(354)](gulp[_0x1fd169(355)](output[_0x1fd169(383)]))[_0x1fd169(354)](print(log['created']))['on'](_0x1fd169(381), function () {
            var _0x14820c = _0x1fd169;
            gulp[_0x14820c(382)]('package compressed docs js'), gulp[_0x14820c(382)]('package uncompressed docs js');
        });
    }), gulp[_0x5571c8(349)]([source[_0x5571c8(390)] + _0x5571c8(391) + globs[_0x5571c8(392)] + _0x5571c8(393)], function (_0x289c3f) {
        var _0x534fa0 = _0x5571c8;
        gulp[_0x534fa0(352)](_0x289c3f[_0x534fa0(353)], { 'base': source[_0x534fa0(390)] })['pipe'](gulpif(config[_0x534fa0(394)], chmod(config[_0x534fa0(378)])))[_0x534fa0(354)](gulp['dest'](output['themes']))[_0x534fa0(354)](print(log[_0x534fa0(356)]));
    });
};