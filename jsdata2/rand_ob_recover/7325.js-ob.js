const inquirer = require(_0x100950(509)), {execa, warn, hasProjectGit} = require(_0x100950(510));
module['exports'] = async function confirmIfGitDirty(_0x29582f) {
    const _0x55a7de = _0x100950, _0x16c58f = {
            'dwWKH': _0x55a7de(511),
            'OBFIU': 'status',
            'TOrff': _0x55a7de(512),
            'vIZQV': function (_0x33a9ae, _0xb4ebe3) {
                return _0x33a9ae(_0xb4ebe3);
            },
            'fZcLU': _0x55a7de(513),
            'lOgIZ': _0x55a7de(514)
        };
    if (process[_0x55a7de(515)]['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process[_0x55a7de(515)][_0x55a7de(516)])
        return !![];
    process[_0x55a7de(515)][_0x55a7de(517)] = !![];
    if (!hasProjectGit(_0x29582f))
        return !![];
    const {stdout: _0x230a71} = await execa(_0x16c58f[_0x55a7de(518)], [
        _0x16c58f[_0x55a7de(519)],
        _0x16c58f[_0x55a7de(520)]
    ], { 'cwd': _0x29582f });
    if (!_0x230a71)
        return !![];
    _0x16c58f[_0x55a7de(521)](warn, _0x55a7de(522));
    const {ok: _0xfce65c} = await inquirer[_0x55a7de(523)]([{
            'name': 'ok',
            'type': _0x16c58f['fZcLU'],
            'message': _0x16c58f[_0x55a7de(524)],
            'default': ![]
        }]);
    return _0xfce65c;
};