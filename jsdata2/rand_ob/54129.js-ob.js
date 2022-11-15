'use strict';
const _0x180d = [
    '676493YYvjCH',
    '659348naGPVR',
    '2988947LcvbHm',
    '../common',
    '../common/fixtures',
    'path',
    'child_process',
    'echo-close-check.js',
    'stdin.txt',
    '\x22\x20\x22',
    '\x22\x20<\x20\x22',
    '南越国是前203年至前111年存在于岭南地区的一个国家，国都位于番禺，',
    '疆域包括今天中国的广东、广西两省区的大部份地区，福建省、湖南、贵州、',
    '云南的一小部份地区和越南的北部。南越国是秦朝灭亡后，',
    '由南海郡尉赵佗于前203年起兵兼并桂林郡和象郡后建立。前196年和前179年，',
    '南越国曾先后两次名义上臣属于西汉，成为西汉的“外臣”。前112年，',
    '南越国末代君主赵建德与西汉发生战争，被汉武帝于前111年所灭。南越国共存在93年，',
    '历经五代君主。南越国是岭南地区的第一个有记载的政权国家，',
    '它的建立保证了秦末乱世岭南地区社会秩序的稳定，',
    'refresh',
    'writeFileSync',
    'exec',
    'mustCall',
    'ifError',
    'strictEqual',
    'hello\x20world\x0d\x0a',
    '877689BCoehM',
    '1178373MyUSyj',
    '564329kmYnav',
    '3aqnqfk',
    '1273153pNwaAW'
];
const _0x1d4f01 = _0x14f1;
function _0x14f1(_0x2aafc8, _0x206a87) {
    return _0x14f1 = function (_0x1785f2, _0x1dea80) {
        _0x1785f2 = _0x1785f2 - (0x1852 + -0x9a + -0x1 * 0x1600);
        let _0x3c0d31 = _0x180d[_0x1785f2];
        return _0x3c0d31;
    }, _0x14f1(_0x2aafc8, _0x206a87);
}
(function (_0x1fc065, _0x180b37) {
    const _0x1024ce = _0x14f1;
    while (!![]) {
        try {
            const _0x328122 = parseInt(_0x1024ce(0x1b8)) + -parseInt(_0x1024ce(0x1b9)) + parseInt(_0x1024ce(0x1ba)) * -parseInt(_0x1024ce(0x1bb)) + parseInt(_0x1024ce(0x1bc)) + -parseInt(_0x1024ce(0x1bd)) + -parseInt(_0x1024ce(0x1be)) + parseInt(_0x1024ce(0x1bf));
            if (_0x328122 === _0x180b37)
                break;
            else
                _0x1fc065['push'](_0x1fc065['shift']());
        } catch (_0x74d843) {
            _0x1fc065['push'](_0x1fc065['shift']());
        }
    }
}(_0x180d, 0x12642 + 0x117464 + -0x45fba));
const common = require(_0x1d4f01(0x1c0)), fixtures = require(_0x1d4f01(0x1c1)), tmpdir = require('../common/tmpdir'), assert = require('assert'), {join} = require(_0x1d4f01(0x1c2)), childProcess = require(_0x1d4f01(0x1c3)), fs = require('fs'), stdoutScript = fixtures['path'](_0x1d4f01(0x1c4)), tmpFile = join(tmpdir['path'], _0x1d4f01(0x1c5)), cmd = '\x22' + process['argv'][-0xc8f * -0x1 + 0x240c + -0x309b * 0x1] + _0x1d4f01(0x1c6) + stdoutScript + _0x1d4f01(0x1c7) + tmpFile + '\x22', string = 'abc\x0aümlaut.\x0asomething\x20else\x0a' + _0x1d4f01(0x1c8) + _0x1d4f01(0x1c9) + _0x1d4f01(0x1ca) + _0x1d4f01(0x1cb) + _0x1d4f01(0x1cc) + _0x1d4f01(0x1cd) + _0x1d4f01(0x1ce) + '采用封建制和郡县制并存的制度，' + _0x1d4f01(0x1cf) + '有效的改善了岭南地区落后的政治、##济现状。\x0a';
tmpdir[_0x1d4f01(0x1d0)](), console['log'](cmd + '\x0a\x0a'), fs[_0x1d4f01(0x1d1)](tmpFile, string), childProcess[_0x1d4f01(0x1d2)](cmd, common[_0x1d4f01(0x1d3)](function (_0x5841a4, _0x35e6fd, _0x3f938e) {
    const _0x495102 = _0x1d4f01;
    fs['unlinkSync'](tmpFile), assert[_0x495102(0x1d4)](_0x5841a4), assert[_0x495102(0x1d5)](_0x35e6fd, _0x495102(0x1d6) + string), assert['strictEqual'](_0x3f938e, '');
}));
