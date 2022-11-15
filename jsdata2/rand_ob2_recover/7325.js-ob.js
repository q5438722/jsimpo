const inquirer = require(_0x4bf16c(485)), {execa, warn, hasProjectGit} = require(_0x4bf16c(486));
module[_0x4bf16c(487)] = async function confirmIfGitDirty(_0x438482) {
    const _0x4b0579 = _0x4bf16c;
    if (process['env'][_0x4b0579(488)] || process[_0x4b0579(489)][_0x4b0579(490)])
        return !![];
    process[_0x4b0579(489)]['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] = !![];
    if (!hasProjectGit(_0x438482))
        return !![];
    const {stdout: _0x51c751} = await execa(_0x4b0579(491), [
        _0x4b0579(492),
        '--porcelain'
    ], { 'cwd': _0x438482 });
    if (!_0x51c751)
        return !![];
    warn(_0x4b0579(493));
    const {ok: _0x2009e3} = await inquirer[_0x4b0579(494)]([{
            'name': 'ok',
            'type': _0x4b0579(495),
            'message': _0x4b0579(496),
            'default': ![]
        }]);
    return _0x2009e3;
};