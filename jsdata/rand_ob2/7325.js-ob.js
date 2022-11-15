const _0x51bc = [
    'env',
    'VUE_CLI_API_MODE',
    'VUE_CLI_SKIP_DIRTY_GIT_PROMPT',
    'git',
    'status',
    'There\x20are\x20uncommitted\x20changes\x20in\x20the\x20current\x20repository,\x20it\x27s\x20recommended\x20to\x20commit\x20or\x20stash\x20them\x20first.',
    'prompt',
    'confirm',
    'Still\x20proceed?',
    '47RtXbXf',
    '19027XpVyuf',
    '1403400axatZF',
    '1264754kTLMrP',
    '1100316wFZlxA',
    '1488467lSGTol',
    '307420suxbAI',
    '811wJtULq',
    '1174lflPkI',
    '@vue/cli-shared-utils',
    'exports'
];
const _0x24d184 = _0x3970;
(function (_0x192f10, _0x4af031) {
    const _0x277f27 = _0x3970;
    while (!![]) {
        try {
            const _0x56e6f3 = parseInt(_0x277f27(0x19f)) * -parseInt(_0x277f27(0x1a0)) + parseInt(_0x277f27(0x1a1)) + parseInt(_0x277f27(0x1a2)) + -parseInt(_0x277f27(0x1a3)) + parseInt(_0x277f27(0x1a4)) + -parseInt(_0x277f27(0x1a5)) + parseInt(_0x277f27(0x1a6)) * -parseInt(_0x277f27(0x1a7));
            if (_0x56e6f3 === _0x4af031)
                break;
            else
                _0x192f10['push'](_0x192f10['shift']());
        } catch (_0x3b2153) {
            _0x192f10['push'](_0x192f10['shift']());
        }
    }
}(_0x51bc, 0xdc566));
const inquirer = require('inquirer'), {execa, warn, hasProjectGit} = require(_0x24d184(0x1a8));
function _0x3970(_0x34de5f, _0x324a16) {
    return _0x3970 = function (_0x51bc49, _0x3970a1) {
        _0x51bc49 = _0x51bc49 - 0x19f;
        let _0x3ffdf8 = _0x51bc[_0x51bc49];
        return _0x3ffdf8;
    }, _0x3970(_0x34de5f, _0x324a16);
}
module[_0x24d184(0x1a9)] = async function confirmIfGitDirty(_0x4c15fa) {
    const _0x5f0bc2 = _0x24d184;
    if (process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process[_0x5f0bc2(0x1aa)][_0x5f0bc2(0x1ab)])
        return !![];
    process[_0x5f0bc2(0x1aa)][_0x5f0bc2(0x1ac)] = !![];
    if (!hasProjectGit(_0x4c15fa))
        return !![];
    const {stdout: _0x47adb9} = await execa(_0x5f0bc2(0x1ad), [
        _0x5f0bc2(0x1ae),
        '--porcelain'
    ], { 'cwd': _0x4c15fa });
    if (!_0x47adb9)
        return !![];
    warn(_0x5f0bc2(0x1af));
    const {ok: _0x1a0b95} = await inquirer[_0x5f0bc2(0x1b0)]([{
            'name': 'ok',
            'type': _0x5f0bc2(0x1b1),
            'message': _0x5f0bc2(0x1b2),
            'default': ![]
        }]);
    return _0x1a0b95;
};
