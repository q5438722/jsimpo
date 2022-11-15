'use strict';
const _0x1e24 = [
    '27836zhjsDs',
    '24980pemhCG',
    '4xRZojO',
    '1FzXwbq',
    '1142333RCcoyX',
    '747620VzUhQY',
    '953430OybGzb',
    '3666082hoEqpJ',
    '../common',
    '../common/tmpdir',
    'assert',
    'path',
    'echo-close-check.js',
    'stdin.txt',
    '\x22\x20\x22',
    '\x22\x20<\x20\x22',
    'abc\x0aümlaut.\x0asomething\x20else\x0a',
    '南越国是前203年至前111年存在于岭南地区的一个国家，国都位于番禺，',
    '疆域包括今天中国的广东、广西两省区的大部份地区，福建省、湖南、贵州、',
    '云南的一小部份地区和越南的北部。南越国是秦朝灭亡后，',
    '由南海郡尉赵佗于前203年起兵兼并桂林郡和象郡后建立。前196年和前179年，',
    '南越国曾先后两次名义上臣属于西汉，成为西汉的“外臣”。前112年，',
    '南越国末代君主赵建德与西汉发生战争，被汉武帝于前111年所灭。南越国共存在93年，',
    '历经五代君主。南越国是岭南地区的第一个有记载的政权国家，',
    '它的建立保证了秦末乱世岭南地区社会秩序的稳定，',
    'refresh',
    'log',
    'exec',
    'unlinkSync',
    'ifError',
    'strictEqual',
    'hello\x20world\x0d\x0a',
    '378554LgXdSU',
    '44wTIlem'
];
const _0x27a60a = _0x1baf;
function _0x1baf(_0x5e5e18, _0xb2b49f) {
    return _0x1baf = function (_0x1e240d, _0x1bafef) {
        _0x1e240d = _0x1e240d - 0x162;
        let _0x51db3f = _0x1e24[_0x1e240d];
        return _0x51db3f;
    }, _0x1baf(_0x5e5e18, _0xb2b49f);
}
(function (_0x546b55, _0x2c755a) {
    const _0x4fb834 = _0x1baf;
    while (!![]) {
        try {
            const _0x1c19d6 = -parseInt(_0x4fb834(0x162)) + parseInt(_0x4fb834(0x163)) * -parseInt(_0x4fb834(0x164)) + parseInt(_0x4fb834(0x165)) * -parseInt(_0x4fb834(0x166)) + parseInt(_0x4fb834(0x167)) * -parseInt(_0x4fb834(0x168)) + parseInt(_0x4fb834(0x169)) + -parseInt(_0x4fb834(0x16a)) + parseInt(_0x4fb834(0x16b));
            if (_0x1c19d6 === _0x2c755a)
                break;
            else
                _0x546b55['push'](_0x546b55['shift']());
        } catch (_0x608a8f) {
            _0x546b55['push'](_0x546b55['shift']());
        }
    }
}(_0x1e24, 0x96119));
const common = require(_0x27a60a(0x16c)), fixtures = require('../common/fixtures'), tmpdir = require(_0x27a60a(0x16d)), assert = require(_0x27a60a(0x16e)), {join} = require(_0x27a60a(0x16f)), childProcess = require('child_process'), fs = require('fs'), stdoutScript = fixtures[_0x27a60a(0x16f)](_0x27a60a(0x170)), tmpFile = join(tmpdir[_0x27a60a(0x16f)], _0x27a60a(0x171)), cmd = '\x22' + process['argv'][0x0] + _0x27a60a(0x172) + stdoutScript + _0x27a60a(0x173) + tmpFile + '\x22', string = _0x27a60a(0x174) + _0x27a60a(0x175) + _0x27a60a(0x176) + _0x27a60a(0x177) + _0x27a60a(0x178) + _0x27a60a(0x179) + _0x27a60a(0x17a) + _0x27a60a(0x17b) + '采用封建制和郡县制并存的制度，' + _0x27a60a(0x17c) + '有效的改善了岭南地区落后的政治、##济现状。\x0a';
tmpdir[_0x27a60a(0x17d)](), console[_0x27a60a(0x17e)](cmd + '\x0a\x0a'), fs['writeFileSync'](tmpFile, string), childProcess[_0x27a60a(0x17f)](cmd, common['mustCall'](function (_0x59b5a4, _0x273507, _0xc8e00b) {
    const _0x38dedc = _0x27a60a;
    fs[_0x38dedc(0x180)](tmpFile), assert[_0x38dedc(0x181)](_0x59b5a4), assert[_0x38dedc(0x182)](_0x273507, _0x38dedc(0x183) + string), assert[_0x38dedc(0x182)](_0xc8e00b, '');
}));
