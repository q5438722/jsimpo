const inquirer = require('inquirer'), {execa, warn, hasProjectGit} = require('@vue/cli-shared-utils');
module['exports'] = async function confirmIfGitDirty(_0x5eac83) {
    if (process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process['env']['VUE_CLI_API_MODE'])
        return !![];
    process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] = !![];
    if (!hasProjectGit(_0x5eac83))
        return !![];
    const {stdout: _0x514c16} = await execa('git', [
        'status',
        '--porcelain'
    ], { 'cwd': _0x5eac83 });
    if (!_0x514c16)
        return !![];
    warn('There\x20are\x20uncommitted\x20changes\x20in\x20the\x20current\x20repository,\x20it\x27s\x20recommended\x20to\x20commit\x20or\x20stash\x20them\x20first.');
    const {ok: _0x72b67f} = await inquirer['prompt']([{
            'name': 'ok',
            'type': 'confirm',
            'message': 'Still\x20proceed?',
            'default': ![]
        }]);
    return _0x72b67f;
};
