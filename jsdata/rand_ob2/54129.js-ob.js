'use strict';
const _0x4efa = [
    '891071AwCVbz',
    '1LKwgZr',
    '886015NUhCpP',
    '26773xbOIgT',
    '113vZSzMo',
    '../common',
    '../common/tmpdir',
    'path',
    'echo-close-check.js',
    'stdin.txt',
    'argv',
    '\x22\x20\x22',
    'abc\x0aümlaut.\x0asomething\x20else\x0a',
    '南越国是前203年至前111年存在于岭南地区的一个国家，国都位于番禺，',
    '南越国曾先后两次名义上臣属于西汉，成为西汉的“外臣”。前112年，',
    '历经五代君主。南越国是岭南地区的第一个有记载的政权国家，',
    '采用封建制和郡县制并存的制度，',
    '它的建立保证了秦末乱世岭南地区社会秩序的稳定，',
    '有效的改善了岭南地区落后的政治、##济现状。\x0a',
    'refresh',
    'log',
    'writeFileSync',
    'exec',
    'mustCall',
    'unlinkSync',
    'ifError',
    'strictEqual',
    'hello\x20world\x0d\x0a',
    '868866SozvUI',
    '1IRNwbi',
    '1072001TmFpyQ',
    '1WFMvNz',
    '442720XFFbCQ',
    '1341004iieEJu'
];
function _0x5d40(_0x2808d3, _0xbd58c6) {
    return _0x5d40 = function (_0x4efae1, _0x5d4054) {
        _0x4efae1 = _0x4efae1 - 0x143;
        let _0x34dc3e = _0x4efa[_0x4efae1];
        return _0x34dc3e;
    }, _0x5d40(_0x2808d3, _0xbd58c6);
}
const _0x3bd5d7 = _0x5d40;
(function (_0x342fa5, _0x1a0e38) {
    const _0x131583 = _0x5d40;
    while (!![]) {
        try {
            const _0x30b92a = parseInt(_0x131583(0x143)) * parseInt(_0x131583(0x144)) + parseInt(_0x131583(0x145)) * parseInt(_0x131583(0x146)) + parseInt(_0x131583(0x147)) + parseInt(_0x131583(0x148)) + parseInt(_0x131583(0x149)) * parseInt(_0x131583(0x14a)) + -parseInt(_0x131583(0x14b)) + -parseInt(_0x131583(0x14c)) * parseInt(_0x131583(0x14d));
            if (_0x30b92a === _0x1a0e38)
                break;
            else
                _0x342fa5['push'](_0x342fa5['shift']());
        } catch (_0x57bfa2) {
            _0x342fa5['push'](_0x342fa5['shift']());
        }
    }
}(_0x4efa, 0xabf2a));
const common = require(_0x3bd5d7(0x14e)), fixtures = require('../common/fixtures'), tmpdir = require(_0x3bd5d7(0x14f)), assert = require('assert'), {join} = require('path'), childProcess = require('child_process'), fs = require('fs'), stdoutScript = fixtures[_0x3bd5d7(0x150)](_0x3bd5d7(0x151)), tmpFile = join(tmpdir[_0x3bd5d7(0x150)], _0x3bd5d7(0x152)), cmd = '\x22' + process[_0x3bd5d7(0x153)][0x0] + _0x3bd5d7(0x154) + stdoutScript + '\x22\x20<\x20\x22' + tmpFile + '\x22', string = _0x3bd5d7(0x155) + _0x3bd5d7(0x156) + '疆域包括今天中国的广东、广西两省区的大部份地区，福建省、湖南、贵州、' + '云南的一小部份地区和越南的北部。南越国是秦朝灭亡后，' + '由南海郡尉赵佗于前203年起兵兼并桂林郡和象郡后建立。前196年和前179年，' + _0x3bd5d7(0x157) + '南越国末代君主赵建德与西汉发生战争，被汉武帝于前111年所灭。南越国共存在93年，' + _0x3bd5d7(0x158) + _0x3bd5d7(0x159) + _0x3bd5d7(0x15a) + _0x3bd5d7(0x15b);
tmpdir[_0x3bd5d7(0x15c)](), console[_0x3bd5d7(0x15d)](cmd + '\x0a\x0a'), fs[_0x3bd5d7(0x15e)](tmpFile, string), childProcess[_0x3bd5d7(0x15f)](cmd, common[_0x3bd5d7(0x160)](function (_0x511529, _0x1c69cd, _0x56c907) {
    const _0x323071 = _0x3bd5d7;
    fs[_0x323071(0x161)](tmpFile), assert[_0x323071(0x162)](_0x511529), assert[_0x323071(0x163)](_0x1c69cd, _0x323071(0x164) + string), assert[_0x323071(0x163)](_0x56c907, '');
}));
