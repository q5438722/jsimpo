'use strict';
const _0xb540 = [
    'config/editorconfig/repo-root/nonexistent/one/two/three.js',
    '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x202\x20spaces\x22);\x0a}\x0a',
    'cli/stdin-ignore',
    'ignore/example.js',
    'hello_world(\x20);',
    '687479nrUcdF',
    '1CtNGHN',
    '638873UHLNTG',
    '1TbGKsP',
    '886923kzOdIb',
    '1kFhqiP',
    '1IMcYxs',
    '1305154bhGWTJ',
    '2551ATJfNG',
    '167RRShmG',
    '551ivTcoI',
    '1116VDCuFc',
    '587099dsMoLH',
    'ci-info',
    '../runPrettier.js',
    'cli',
    '--stdin-filepath',
    'abc.css',
    '.name\x20{\x20display:\x20none;\x20}',
    'test',
    'non-zero',
    'gracefully\x20handle\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20file',
    'config/editorconfig/nonexistent.js',
    '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a',
    'trim',
    'config/editorconfig/nonexistent/one/two/three.js',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path',
    'config/editorconfig/',
    'repeat',
    'three.js',
    '/foo.js',
    'don’t\x20apply\x20editorconfig\x20outside\x20project\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory'
];
const _0x5b2d6a = _0x1612;
(function (_0x29203e, _0x5b0346) {
    const _0x43ed7a = _0x1612;
    while (!![]) {
        try {
            const _0xd707a5 = parseInt(_0x43ed7a(0x142)) * -parseInt(_0x43ed7a(0x143)) + -parseInt(_0x43ed7a(0x144)) * -parseInt(_0x43ed7a(0x145)) + parseInt(_0x43ed7a(0x146)) * -parseInt(_0x43ed7a(0x147)) + parseInt(_0x43ed7a(0x148)) * parseInt(_0x43ed7a(0x149)) + parseInt(_0x43ed7a(0x14a)) * parseInt(_0x43ed7a(0x14b)) + -parseInt(_0x43ed7a(0x14c)) * parseInt(_0x43ed7a(0x14d)) + parseInt(_0x43ed7a(0x14e));
            if (_0xd707a5 === _0x5b0346)
                break;
            else
                _0x29203e['push'](_0x29203e['shift']());
        } catch (_0x428601) {
            _0x29203e['push'](_0x29203e['shift']());
        }
    }
}(_0xb540, 0xbb751));
function _0x1612(_0x25481d, _0x437d60) {
    return _0x1612 = function (_0xb5404c, _0x16128b) {
        _0xb5404c = _0xb5404c - 0x142;
        let _0x27dcc9 = _0xb540[_0xb5404c];
        return _0x27dcc9;
    }, _0x1612(_0x25481d, _0x437d60);
}
const {isCI} = require(_0x5b2d6a(0x14f)), runPrettier = require(_0x5b2d6a(0x150));
describe('format\x20correctly\x20if\x20stdin\x20content\x20compatible\x20with\x20stdin-filepath', () => {
    const _0x531b91 = _0x5b2d6a;
    runPrettier(_0x531b91(0x151), [
        _0x531b91(0x152),
        _0x531b91(0x153)
    ], { 'input': _0x531b91(0x154) })['test']({ 'status': 0x0 });
}), describe('throw\x20error\x20if\x20stdin\x20content\x20incompatible\x20with\x20stdin-filepath', () => {
    const _0x1f9edf = _0x5b2d6a;
    runPrettier(_0x1f9edf(0x151), [
        '--stdin-filepath',
        'abc.js'
    ], { 'input': _0x1f9edf(0x154) })[_0x1f9edf(0x155)]({ 'status': _0x1f9edf(0x156) });
}), describe(_0x5b2d6a(0x157), () => {
    const _0x19de75 = _0x5b2d6a;
    runPrettier(_0x19de75(0x151), [
        _0x19de75(0x152),
        'definitely/nonexistent/path.css'
    ], { 'input': _0x19de75(0x154) })['test']({ 'status': 0x0 });
}), describe(_0x5b2d6a(0x158), () => {
    const _0x2c273f = _0x5b2d6a;
    runPrettier(_0x2c273f(0x151), [
        _0x2c273f(0x152),
        _0x2c273f(0x159)
    ], { 'input': _0x2c273f(0x15a)[_0x2c273f(0x15b)]() })[_0x2c273f(0x155)]({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    const _0x8b5c4c = _0x5b2d6a;
    runPrettier('cli', [
        _0x8b5c4c(0x152),
        _0x8b5c4c(0x15c)
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'[_0x8b5c4c(0x15b)]() })[_0x8b5c4c(0x155)]({ 'status': 0x0 });
}), describe(_0x5b2d6a(0x15d), () => {
    const _0x4e80a3 = _0x5b2d6a;
    runPrettier(_0x4e80a3(0x151), [
        '--stdin-filepath',
        _0x4e80a3(0x15e) + 'a/'[_0x4e80a3(0x15f)](0x1e) + _0x4e80a3(0x160)
    ], { 'input': _0x4e80a3(0x15a)[_0x4e80a3(0x15b)]() })[_0x4e80a3(0x155)]({ 'status': 0x0 });
});
isCI && describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20in\x20root', () => {
    const _0x272548 = _0x5b2d6a, _0x5a0068 = _0x272548(0x15a)[_0x272548(0x15b)]();
    runPrettier(_0x272548(0x151), [
        _0x272548(0x152),
        _0x272548(0x161)
    ], { 'input': _0x5a0068 })[_0x272548(0x155)]({
        'status': 0x0,
        'stdout': _0x5a0068 + '\x0a',
        'stderr': '',
        'write': []
    });
});
describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    const _0x219a01 = _0x5b2d6a;
    runPrettier(_0x219a01(0x151), [
        _0x219a01(0x152),
        _0x219a01(0x15e) + 'a/'[_0x219a01(0x15f)](0x1e) + _0x219a01(0x160)
    ], { 'input': _0x219a01(0x15a)['trim']() })[_0x219a01(0x155)]({ 'status': 0x0 });
}), describe(_0x5b2d6a(0x162), () => {
    const _0x1d54c3 = _0x5b2d6a;
    runPrettier(_0x1d54c3(0x151), [
        _0x1d54c3(0x152),
        _0x1d54c3(0x163)
    ], { 'input': _0x1d54c3(0x164)[_0x1d54c3(0x15b)]() })[_0x1d54c3(0x155)]({ 'status': 0x0 });
}), describe('output\x20file\x20as-is\x20if\x20stdin-filepath\x20matched\x20patterns\x20in\x20ignore-path', () => {
    const _0x15be77 = _0x5b2d6a;
    runPrettier(_0x15be77(0x165), [
        _0x15be77(0x152),
        _0x15be77(0x166)
    ], { 'input': _0x15be77(0x167) })['test']({
        'stdout': 'hello_world(\x20);',
        'status': 0x0
    });
});
