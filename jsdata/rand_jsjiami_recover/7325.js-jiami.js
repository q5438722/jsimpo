const inquirer = require('inquirer');
const {execa, warn, hasProjectGit} = require('@vue/cli-shared-utils');
module['exports'] = async function confirmIfGitDirty(_0x142887) {
    if (process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] || process['env']['VUE_CLI_API_MODE']) {
        return !![];
    }
    process['env']['VUE_CLI_SKIP_DIRTY_GIT_PROMPT'] = !![];
    if (!hasProjectGit(_0x142887)) {
        return !![];
    }
    const {stdout} = await execa('git', [
        'status',
        '--porcelain'
    ], { 'cwd': _0x142887 });
    if (!stdout) {
        return !![];
    }
    warn('There are uncommitted changes in the current repository, it\'s recommended to commit or stash them first.');
    const {ok} = await inquirer['prompt']([{
            'name': 'ok',
            'type': 'confirm',
            'message': 'Still proceed?',
            'default': ![]
        }]);
    return ok;
};