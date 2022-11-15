'use strict';
const _0x264c = [
    '213562KnHuGG',
    '2zqVcBR',
    '49633JkERVX',
    '358145ZjvemQ',
    '1qsDWiK',
    '2mmsByf',
    '134117jtHNtm',
    '323683tkCkVv',
    '678655iWZbTf',
    '../common',
    '../common/fixtures',
    '../common/tmpdir',
    'assert',
    'path',
    'child_process',
    'echo-close-check.js',
    'stdin.txt',
    '\x22\x20\x22',
    '南越国是前203年至前111年存在于岭南地区的一个国家，国都位于番禺，',
    '疆域包括今天中国的广东、广西两省区的大部份地区，福建省、湖南、贵州、',
    '由南海郡尉赵佗于前203年起兵兼并桂林郡和象郡后建立。前196年和前179年，',
    '南越国曾先后两次名义上臣属于西汉，成为西汉的“外臣”。前112年，',
    '历经五代君主。南越国是岭南地区的第一个有记载的政权国家，',
    '采用封建制和郡县制并存的制度，',
    '有效的改善了岭南地区落后的政治、##济现状。\x0a',
    'writeFileSync',
    'exec',
    'mustCall',
    'unlinkSync',
    'strictEqual',
    'hello\x20world\x0d\x0a',
    '114822TaZjEr'
];
function _0x3abb(_0x3a0eb0, _0x28ec49) {
    return _0x3abb = function (_0x2a4148, _0x35acbe) {
        _0x2a4148 = _0x2a4148 - (-0x1773 + 0xe * 0x2a + 0x15fa);
        let _0x119047 = _0x264c[_0x2a4148];
        return _0x119047;
    }, _0x3abb(_0x3a0eb0, _0x28ec49);
}
const _0x5b97e5 = _0x3abb;
(function (_0x43f319, _0x1a14ab) {
    const _0xbaddb2 = _0x3abb;
    while (!![]) {
        try {
            const _0x250415 = parseInt(_0xbaddb2(0xd3)) + parseInt(_0xbaddb2(0xd4)) * parseInt(_0xbaddb2(0xd5)) + -parseInt(_0xbaddb2(0xd6)) + -parseInt(_0xbaddb2(0xd7)) * parseInt(_0xbaddb2(0xd8)) + parseInt(_0xbaddb2(0xd9)) * -parseInt(_0xbaddb2(0xda)) + -parseInt(_0xbaddb2(0xdb)) + parseInt(_0xbaddb2(0xdc));
            if (_0x250415 === _0x1a14ab)
                break;
            else
                _0x43f319['push'](_0x43f319['shift']());
        } catch (_0x1e0916) {
            _0x43f319['push'](_0x43f319['shift']());
        }
    }
}(_0x264c, 0x1 * -0x27593 + 0x9 * 0x31f5 + 0x6 * 0xadd0));
const common = require(_0x5b97e5(0xdd)), fixtures = require(_0x5b97e5(0xde)), tmpdir = require(_0x5b97e5(0xdf)), assert = require(_0x5b97e5(0xe0)), {join} = require(_0x5b97e5(0xe1)), childProcess = require(_0x5b97e5(0xe2)), fs = require('fs'), stdoutScript = fixtures[_0x5b97e5(0xe1)](_0x5b97e5(0xe3)), tmpFile = join(tmpdir[_0x5b97e5(0xe1)], _0x5b97e5(0xe4)), cmd = '\x22' + process['argv'][0x123b + 0x7 * 0x25b + -0x22b8] + _0x5b97e5(0xe5) + stdoutScript + '\x22\x20<\x20\x22' + tmpFile + '\x22', string = 'abc\x0aümlaut.\x0asomething\x20else\x0a' + _0x5b97e5(0xe6) + _0x5b97e5(0xe7) + '云南的一小部份地区和越南的北部。南越国是秦朝灭亡后，' + _0x5b97e5(0xe8) + _0x5b97e5(0xe9) + '南越国末代君主赵建德与西汉发生战争，被汉武帝于前111年所灭。南越国共存在93年，' + _0x5b97e5(0xea) + _0x5b97e5(0xeb) + '它的建立保证了秦末乱世岭南地区社会秩序的稳定，' + _0x5b97e5(0xec);
tmpdir['refresh'](), console['log'](cmd + '\x0a\x0a'), fs[_0x5b97e5(0xed)](tmpFile, string), childProcess[_0x5b97e5(0xee)](cmd, common[_0x5b97e5(0xef)](function (_0x3cc1fb, _0x1a388d, _0x1ea4ee) {
    const _0x4c1740 = _0x5b97e5;
    fs[_0x4c1740(0xf0)](tmpFile), assert['ifError'](_0x3cc1fb), assert[_0x4c1740(0xf1)](_0x1a388d, _0x4c1740(0xf2) + string), assert['strictEqual'](_0x1ea4ee, '');
}));
