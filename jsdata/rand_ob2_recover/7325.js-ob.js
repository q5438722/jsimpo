const inquirer = require('inquirer'), {execa, warn, hasProjectGit} = require(_0x24d184(424));
function _0x3970(_0x34de5f, _0x324a16) {
    return _0x3970 = function (_0x51bc49, _0x3970a1) {
        _0x51bc49 = _0x51bc49 - 415;
        let _0x3ffdf8 = _0x51bc[_0x51bc49];
        return _0x3ffdf8;
    }, _0x3970(_0x34de5f, _0x324a16);
}
module[_0x24d184(425)] = async function confirmIfGitDirty(_0x4c15fa) {
    const _0x5f0bc2 = _0x24d184;
    if (process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process[_0x5f0bc2(426)][_0x5f0bc2(427)])
        return !![];
    process[_0x5f0bc2(426)][_0x5f0bc2(428)] = !![];
    if (!hasProjectGit(_0x4c15fa))
        return !![];
    const {stdout: _0x47adb9} = await execa(_0x5f0bc2(429), [
        _0x5f0bc2(430),
        '--porcelain'
    ], { 'cwd': _0x4c15fa });
    if (!_0x47adb9)
        return !![];
    warn(_0x5f0bc2(431));
    const {ok: _0x1a0b95} = await inquirer[_0x5f0bc2(432)]([{
            'name': 'ok',
            'type': _0x5f0bc2(433),
            'message': _0x5f0bc2(434),
            'default': ![]
        }]);
    return _0x1a0b95;
};