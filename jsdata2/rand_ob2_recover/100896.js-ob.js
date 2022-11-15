function _0x1612(_0x25481d, _0x437d60) {
    return _0x1612 = function (_0xb5404c, _0x16128b) {
        _0xb5404c = _0xb5404c - 322;
        let _0x27dcc9 = _0xb540[_0xb5404c];
        return _0x27dcc9;
    }, _0x1612(_0x25481d, _0x437d60);
}
const {isCI} = require(_0x5b2d6a(335)), runPrettier = require(_0x5b2d6a(336));
describe('format correctly if stdin content compatible with stdin-filepath', () => {
    const _0x531b91 = _0x5b2d6a;
    runPrettier(_0x531b91(337), [
        _0x531b91(338),
        _0x531b91(339)
    ], { 'input': _0x531b91(340) })['test']({ 'status': 0 });
}), describe('throw error if stdin content incompatible with stdin-filepath', () => {
    const _0x1f9edf = _0x5b2d6a;
    runPrettier(_0x1f9edf(337), [
        '--stdin-filepath',
        'abc.js'
    ], { 'input': _0x1f9edf(340) })[_0x1f9edf(341)]({ 'status': _0x1f9edf(342) });
}), describe(_0x5b2d6a(343), () => {
    const _0x19de75 = _0x5b2d6a;
    runPrettier(_0x19de75(337), [
        _0x19de75(338),
        'definitely/nonexistent/path.css'
    ], { 'input': _0x19de75(340) })['test']({ 'status': 0 });
}), describe(_0x5b2d6a(344), () => {
    const _0x2c273f = _0x5b2d6a;
    runPrettier(_0x2c273f(337), [
        _0x2c273f(338),
        _0x2c273f(345)
    ], { 'input': _0x2c273f(346)[_0x2c273f(347)]() })[_0x2c273f(341)]({ 'status': 0 });
}), describe('apply editorconfig for stdin-filepath with nonexistent directory', () => {
    const _0x8b5c4c = _0x5b2d6a;
    runPrettier('cli', [
        _0x8b5c4c(338),
        _0x8b5c4c(348)
    ], { 'input': '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'[_0x8b5c4c(347)]() })[_0x8b5c4c(341)]({ 'status': 0 });
}), describe(_0x5b2d6a(349), () => {
    const _0x4e80a3 = _0x5b2d6a;
    runPrettier(_0x4e80a3(337), [
        '--stdin-filepath',
        _0x4e80a3(350) + 'a/'[_0x4e80a3(351)](30) + _0x4e80a3(352)
    ], { 'input': _0x4e80a3(346)[_0x4e80a3(347)]() })[_0x4e80a3(341)]({ 'status': 0 });
});
isCI && describe('apply editorconfig for stdin-filepath in root', () => {
    const _0x272548 = _0x5b2d6a, _0x5a0068 = _0x272548(346)[_0x272548(347)]();
    runPrettier(_0x272548(337), [
        _0x272548(338),
        _0x272548(353)
    ], { 'input': _0x5a0068 })[_0x272548(341)]({
        'status': 0,
        'stdout': _0x5a0068 + '\n',
        'stderr': '',
        'write': []
    });
});
describe('apply editorconfig for stdin-filepath with a deep path', () => {
    const _0x219a01 = _0x5b2d6a;
    runPrettier(_0x219a01(337), [
        _0x219a01(338),
        _0x219a01(350) + 'a/'[_0x219a01(351)](30) + _0x219a01(352)
    ], { 'input': _0x219a01(346)['trim']() })[_0x219a01(341)]({ 'status': 0 });
}), describe(_0x5b2d6a(354), () => {
    const _0x1d54c3 = _0x5b2d6a;
    runPrettier(_0x1d54c3(337), [
        _0x1d54c3(338),
        _0x1d54c3(355)
    ], { 'input': _0x1d54c3(356)[_0x1d54c3(347)]() })[_0x1d54c3(341)]({ 'status': 0 });
}), describe('output file as-is if stdin-filepath matched patterns in ignore-path', () => {
    const _0x15be77 = _0x5b2d6a;
    runPrettier(_0x15be77(357), [
        _0x15be77(338),
        _0x15be77(358)
    ], { 'input': _0x15be77(359) })['test']({
        'stdout': 'hello_world( );',
        'status': 0
    });
});