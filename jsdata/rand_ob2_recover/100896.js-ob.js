function _0xd5c8(_0x4bf5f5, _0x3c7e84) {
    return _0xd5c8 = function (_0x18151e, _0xd5c8ad) {
        _0x18151e = _0x18151e - 200;
        let _0x1018aa = _0x1815[_0x18151e];
        return _0x1018aa;
    }, _0xd5c8(_0x4bf5f5, _0x3c7e84);
}
const {isCI} = require(_0x453bb4(212)), runPrettier = require(_0x453bb4(213));
describe('format correctly if stdin content compatible with stdin-filepath', () => {
    const _0x3e6003 = _0x453bb4;
    runPrettier(_0x3e6003(214), [
        _0x3e6003(215),
        _0x3e6003(216)
    ], { 'input': '.name { display: none; }' })['test']({ 'status': 0 });
}), describe(_0x453bb4(217), () => {
    const _0x1b10e1 = _0x453bb4;
    runPrettier(_0x1b10e1(214), [
        _0x1b10e1(215),
        _0x1b10e1(218)
    ], { 'input': _0x1b10e1(219) })[_0x1b10e1(220)]({ 'status': 'non-zero' });
}), describe(_0x453bb4(221), () => {
    const _0x2f2d4a = _0x453bb4;
    runPrettier(_0x2f2d4a(214), [
        _0x2f2d4a(215),
        _0x2f2d4a(222)
    ], { 'input': _0x2f2d4a(219) })[_0x2f2d4a(220)]({ 'status': 0 });
}), describe(_0x453bb4(223), () => {
    const _0x41a8cf = _0x453bb4;
    runPrettier(_0x41a8cf(214), [
        _0x41a8cf(215),
        _0x41a8cf(224)
    ], { 'input': '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'[_0x41a8cf(225)]() })['test']({ 'status': 0 });
}), describe(_0x453bb4(226), () => {
    const _0x10b983 = _0x453bb4;
    runPrettier(_0x10b983(214), [
        '--stdin-filepath',
        _0x10b983(227)
    ], { 'input': _0x10b983(228)[_0x10b983(225)]() })[_0x10b983(220)]({ 'status': 0 });
}), describe('apply editorconfig for stdin-filepath with a deep path', () => {
    const _0x28aaa5 = _0x453bb4;
    runPrettier(_0x28aaa5(214), [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'[_0x28aaa5(229)](30) + _0x28aaa5(230)
    ], { 'input': _0x28aaa5(228)[_0x28aaa5(225)]() })['test']({ 'status': 0 });
});
isCI && describe('apply editorconfig for stdin-filepath in root', () => {
    const _0x3eb3f8 = _0x453bb4, _0x5ddbdc = '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'[_0x3eb3f8(225)]();
    runPrettier(_0x3eb3f8(214), [
        _0x3eb3f8(215),
        _0x3eb3f8(231)
    ], { 'input': _0x5ddbdc })[_0x3eb3f8(220)]({
        'status': 0,
        'stdout': _0x5ddbdc + '\n',
        'stderr': '',
        'write': []
    });
});
describe('apply editorconfig for stdin-filepath with a deep path', () => {
    const _0x3cfa64 = _0x453bb4;
    runPrettier(_0x3cfa64(214), [
        '--stdin-filepath',
        'config/editorconfig/' + 'a/'[_0x3cfa64(229)](30) + 'three.js'
    ], { 'input': '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'['trim']() })[_0x3cfa64(220)]({ 'status': 0 });
}), describe(_0x453bb4(232), () => {
    const _0x3b5317 = _0x453bb4;
    runPrettier('cli', [
        _0x3b5317(215),
        _0x3b5317(233)
    ], { 'input': '\nfunction f() {\n  console.log("should be indented with 2 spaces");\n}\n'[_0x3b5317(225)]() })['test']({ 'status': 0 });
}), describe(_0x453bb4(234), () => {
    const _0x4ec2f6 = _0x453bb4;
    runPrettier(_0x4ec2f6(235), [
        _0x4ec2f6(215),
        _0x4ec2f6(236)
    ], { 'input': _0x4ec2f6(237) })[_0x4ec2f6(220)]({
        'stdout': _0x4ec2f6(237),
        'status': 0
    });
});