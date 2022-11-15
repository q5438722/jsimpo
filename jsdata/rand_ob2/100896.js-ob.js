'use strict';
const _0x1815 = [
    '1VeHFMh',
    '2zCJZtC',
    '53987McshBo',
    '72866NQmLCV',
    '112487pUkdsg',
    '34fguxfW',
    '8579ldKHFA',
    '1MAbBrv',
    '487903NtHaeK',
    'ci-info',
    '../runPrettier.js',
    'cli',
    '--stdin-filepath',
    'abc.css',
    'throw\x20error\x20if\x20stdin\x20content\x20incompatible\x20with\x20stdin-filepath',
    'abc.js',
    '.name\x20{\x20display:\x20none;\x20}',
    'test',
    'gracefully\x20handle\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'definitely/nonexistent/path.css',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20file',
    'config/editorconfig/nonexistent.js',
    'trim',
    'apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'config/editorconfig/nonexistent/one/two/three.js',
    '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a',
    'repeat',
    'three.js',
    '/foo.js',
    'don’t\x20apply\x20editorconfig\x20outside\x20project\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory',
    'config/editorconfig/repo-root/nonexistent/one/two/three.js',
    'output\x20file\x20as-is\x20if\x20stdin-filepath\x20matched\x20patterns\x20in\x20ignore-path',
    'cli/stdin-ignore',
    'ignore/example.js',
    'hello_world(\x20);',
    '1lngXZe',
    '119018LNNjus',
    '224335MKzwbu'
];
const _0x453bb4 = _0xd5c8;
(function (_0x31fa5d, _0x2b4af9) {
    const _0x1c6080 = _0xd5c8;
    while (!![]) {
        try {
            const _0x5722d1 = -parseInt(_0x1c6080(0xc8)) * parseInt(_0x1c6080(0xc9)) + parseInt(_0x1c6080(0xca)) * -parseInt(_0x1c6080(0xcb)) + parseInt(_0x1c6080(0xcc)) * parseInt(_0x1c6080(0xcd)) + parseInt(_0x1c6080(0xce)) + parseInt(_0x1c6080(0xcf)) + -parseInt(_0x1c6080(0xd0)) * parseInt(_0x1c6080(0xd1)) + parseInt(_0x1c6080(0xd2)) * parseInt(_0x1c6080(0xd3));
            if (_0x5722d1 === _0x2b4af9)
                break;
            else
                _0x31fa5d['push'](_0x31fa5d['shift']());
        } catch (_0x5237b3) {
            _0x31fa5d['push'](_0x31fa5d['shift']());
        }
    }
}(_0x1815, 0x23b0f));
function _0xd5c8(_0x4bf5f5, _0x3c7e84) {
    return _0xd5c8 = function (_0x18151e, _0xd5c8ad) {
        _0x18151e = _0x18151e - 0xc8;
        let _0x1018aa = _0x1815[_0x18151e];
        return _0x1018aa;
    }, _0xd5c8(_0x4bf5f5, _0x3c7e84);
}
const {isCI} = require(_0x453bb4(0xd4)), runPrettier = require(_0x453bb4(0xd5));
describe('format\x20correctly\x20if\x20stdin\x20content\x20compatible\x20with\x20stdin-filepath', () => {
    const _0x3e6003 = _0x453bb4;
    runPrettier(_0x3e6003(0xd6), [
        _0x3e6003(0xd7),
        _0x3e6003(0xd8)
    ], { 'input': '.name\x20{\x20display:\x20none;\x20}' })['test']({ 'status': 0x0 });
}), describe(_0x453bb4(0xd9), () => {
    const _0x1b10e1 = _0x453bb4;
    runPrettier(_0x1b10e1(0xd6), [
        _0x1b10e1(0xd7),
        _0x1b10e1(0xda)
    ], { 'input': _0x1b10e1(0xdb) })[_0x1b10e1(0xdc)]({ 'status': 'non-zero' });
}), describe(_0x453bb4(0xdd), () => {
    const _0x2f2d4a = _0x453bb4;
    runPrettier(_0x2f2d4a(0xd6), [
        _0x2f2d4a(0xd7),
        _0x2f2d4a(0xde)
    ], { 'input': _0x2f2d4a(0xdb) })[_0x2f2d4a(0xdc)]({ 'status': 0x0 });
}), describe(_0x453bb4(0xdf), () => {
    const _0x41a8cf = _0x453bb4;
    runPrettier(_0x41a8cf(0xd6), [
        _0x41a8cf(0xd7),
        _0x41a8cf(0xe0)
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'[_0x41a8cf(0xe1)]() })['test']({ 'status': 0x0 });
}), describe(_0x453bb4(0xe2), () => {
    const _0x10b983 = _0x453bb4;
    runPrettier(_0x10b983(0xd6), [
        '--stdin-filepath',
        _0x10b983(0xe3)
    ], { 'input': _0x10b983(0xe4)[_0x10b983(0xe1)]() })[_0x10b983(0xdc)]({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    const _0x28aaa5 = _0x453bb4;
    runPrettier(_0x28aaa5(0xd6), [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'[_0x28aaa5(0xe5)](0x1e) + _0x28aaa5(0xe6)
    ], { 'input': _0x28aaa5(0xe4)[_0x28aaa5(0xe1)]() })['test']({ 'status': 0x0 });
});
isCI && describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20in\x20root', () => {
    const _0x3eb3f8 = _0x453bb4, _0x5ddbdc = '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'[_0x3eb3f8(0xe1)]();
    runPrettier(_0x3eb3f8(0xd6), [
        _0x3eb3f8(0xd7),
        _0x3eb3f8(0xe7)
    ], { 'input': _0x5ddbdc })[_0x3eb3f8(0xdc)]({
        'status': 0x0,
        'stdout': _0x5ddbdc + '\x0a',
        'stderr': '',
        'write': []
    });
});
describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    const _0x3cfa64 = _0x453bb4;
    runPrettier(_0x3cfa64(0xd6), [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'[_0x3cfa64(0xe5)](0x1e) + 'three.js'
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })[_0x3cfa64(0xdc)]({ 'status': 0x0 });
}), describe(_0x453bb4(0xe8), () => {
    const _0x3b5317 = _0x453bb4;
    runPrettier('cli', [
        _0x3b5317(0xd7),
        _0x3b5317(0xe9)
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x202\x20spaces\x22);\x0a}\x0a'[_0x3b5317(0xe1)]() })['test']({ 'status': 0x0 });
}), describe(_0x453bb4(0xea), () => {
    const _0x4ec2f6 = _0x453bb4;
    runPrettier(_0x4ec2f6(0xeb), [
        _0x4ec2f6(0xd7),
        _0x4ec2f6(0xec)
    ], { 'input': _0x4ec2f6(0xed) })[_0x4ec2f6(0xdc)]({
        'stdout': _0x4ec2f6(0xed),
        'status': 0x0
    });
});
