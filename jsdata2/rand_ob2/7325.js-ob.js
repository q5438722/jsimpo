const _0x573c = [
    '2575090expqZm',
    '1EcgGMQ',
    'inquirer',
    '@vue/cli-shared-utils',
    'exports',
    'VUE_CLI_SKIP_DIRTY_GIT_PROMPT',
    'env',
    'VUE_CLI_API_MODE',
    'git',
    'status',
    'There\x20are\x20uncommitted\x20changes\x20in\x20the\x20current\x20repository,\x20it\x27s\x20recommended\x20to\x20commit\x20or\x20stash\x20them\x20first.',
    'prompt',
    'confirm',
    'Still\x20proceed?',
    '1033571CZrNPh',
    '432579wSrVmv',
    '1157652HjodQy',
    '1555cxegyA',
    '485ChePBC',
    '1iKJody',
    '402991jENtkj',
    '1171800hkALcE'
];
function _0x3723(_0x413dda, _0x174b39) {
    return _0x3723 = function (_0x573c5c, _0x3723dd) {
        _0x573c5c = _0x573c5c - 0x1db;
        let _0x550e83 = _0x573c[_0x573c5c];
        return _0x550e83;
    }, _0x3723(_0x413dda, _0x174b39);
}
const _0x4bf16c = _0x3723;
(function (_0x5271e9, _0x282101) {
    const _0x42a1da = _0x3723;
    while (!![]) {
        try {
            const _0xd9e04e = -parseInt(_0x42a1da(0x1db)) + -parseInt(_0x42a1da(0x1dc)) + parseInt(_0x42a1da(0x1dd)) + -parseInt(_0x42a1da(0x1de)) * parseInt(_0x42a1da(0x1df)) + -parseInt(_0x42a1da(0x1e0)) * -parseInt(_0x42a1da(0x1e1)) + -parseInt(_0x42a1da(0x1e2)) + -parseInt(_0x42a1da(0x1e3)) * -parseInt(_0x42a1da(0x1e4));
            if (_0xd9e04e === _0x282101)
                break;
            else
                _0x5271e9['push'](_0x5271e9['shift']());
        } catch (_0x109a81) {
            _0x5271e9['push'](_0x5271e9['shift']());
        }
    }
}(_0x573c, 0xb58b8));
const inquirer = require(_0x4bf16c(0x1e5)), {execa, warn, hasProjectGit} = require(_0x4bf16c(0x1e6));
module[_0x4bf16c(0x1e7)] = async function confirmIfGitDirty(_0x438482) {
    const _0x4b0579 = _0x4bf16c;
    if (process['env'][_0x4b0579(0x1e8)] || process[_0x4b0579(0x1e9)][_0x4b0579(0x1ea)])
        return !![];
    process[_0x4b0579(0x1e9)]['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] = !![];
    if (!hasProjectGit(_0x438482))
        return !![];
    const {stdout: _0x51c751} = await execa(_0x4b0579(0x1eb), [
        _0x4b0579(0x1ec),
        '--porcelain'
    ], { 'cwd': _0x438482 });
    if (!_0x51c751)
        return !![];
    warn(_0x4b0579(0x1ed));
    const {ok: _0x2009e3} = await inquirer[_0x4b0579(0x1ee)]([{
            'name': 'ok',
            'type': _0x4b0579(0x1ef),
            'message': _0x4b0579(0x1f0),
            'default': ![]
        }]);
    return _0x2009e3;
};
