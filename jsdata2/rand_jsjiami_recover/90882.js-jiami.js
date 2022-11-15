const log4js = require('log4js');
const shell = require('shelljs');
const {graphql: baseGraphql} = require('@octokit/graphql');
let logger = log4js['getLogger']('sync');
require('dotenv')['config']();
const token = process['env']['GITHUB_API_TOKEN'];
const host = 'https://' + token + '@github.com';
const cacheDir = '.cache';
const owner = 'gatsbyjs';
const repoBase = 'gatsby';
const sourceRepo = 'gatsby-i18n-source';
const sourceRepoUrl = host + '/' + owner + '/' + sourceRepo;
const sourceRepoGitUrl = sourceRepoUrl + '.git';
const syncLabelName = 'sync';
function getShortHash(_0x10d701) {
    return _0x10d701['substr'](0, 7);
}
function cloneOrUpdateRepo(_0x82068b, _0xad35e9) {
    if (shell['ls'](_0x82068b)['code'] !== 0) {
        logger['debug']('cloning ' + _0x82068b);
        shell['exec']('git clone ' + _0xad35e9);
        shell['cd'](_0x82068b);
    } else {
        shell['cd'](_0x82068b);
        shell['exec']('git checkout master');
        shell['exec']('git pull origin master');
    }
}
async function graphql(_0x51a0d5, _0x26933a) {
    const _0xaa2f2f = baseGraphql['defaults']({ 'headers': { 'authorization': 'token ' + token } });
    try {
        return await _0xaa2f2f(_0x51a0d5, _0x26933a);
    } catch (_0xfac381) {
        if ('Rnxmu' === 'NmHUn') {
            logger['info']('We are already up to date with source.');
            process['exit'](0);
        } else {
            logger['error'](_0xfac381['message']);
            return process['exit'](1);
        }
    }
}
async function getRepository(_0xa5d275, _0xf4c49e) {
    const {repository} = await graphql('\n      query ($owner: String!, $name: String!, $syncLabel: String!) {\n        repository(owner: $owner, name: $name) {\n          id\n          syncPullRequests: pullRequests(labels: [$syncLabel], first: 1) {\n            nodes {\n              id\n            }\n          }\n          syncLabel: label(name: $syncLabel) {\n            id\n          }\n        }\n      }\n    ', {
        'owner': _0xa5d275,
        'name': _0xf4c49e,
        'syncLabel': syncLabelName
    });
    return repository;
}
async function createLabel(_0x280ef7) {
    const {createLabel} = await graphql('\n      mutation ($input: CreateLabelInput!) {\n        createLabel(input: $input) {\n          label {\n            id\n          }\n        }\n      }\n    ', {
        'headers': { 'accept': 'application/vnd.github.bane-preview+json' },
        'input': _0x280ef7
    });
    return createLabel['label'];
}
async function createPullRequest(_0x118c81) {
    const {createPullRequest} = await graphql('\n      mutation ($input: CreatePullRequestInput!) {\n        createPullRequest(input: $input) {\n          pullRequest {\n            id\n            number\n          }\n        }\n      }\n    ', {
        'headers': { 'accept': 'application/vnd.github.shadow-cat-preview+json' },
        'input': _0x118c81
    });
    return createPullRequest['pullRequest'];
}
async function addLabelToPullRequest(_0x3cc52d, _0x1b3b95) {
    await graphql('\n      mutation ($input: AddLabelsToLabelableInput!) {\n        addLabelsToLabelable(input: $input) {\n          clientMutationId\n        }\n      }\n    ', {
        'headers': { 'accept': 'application/vnd.github.bane-preview+json' },
        'input': {
            'labelableId': _0x3cc52d['id'],
            'labelIds': [_0x1b3b95['id']]
        }
    });
}
function conflictPRBody(_0x25380e, _0x5aee8b, _0x33bfd0) {
    return '\nSync conflicts with the source repo. Please update the translations based on updated source content.\n\nFor more information on how to resolve sync conflicts, check out the [guide for syncing translations](https://gatsbyjs.org/contributing/translation/sync-guide/).\n\n<details ' + (_0x25380e['length'] <= 10 ? 'open' : '') + '>\n<summary>The following ' + _0x25380e['length'] + ' files have conflicts:</summary><br />\n\n' + _0x25380e['map'](_0x1f7353 => '* [ ] ' + _0x1f7353)['join']('\n') + '\n</details>\n\nOnce all the commits have been fixed, mark this pull request as "Ready for review" and merge it in!\n\nSee all changes since the last sync here:\n\n' + _0x5aee8b + '\n\nNOTE: Do **NOT** squash-merge this pull request. The sync script requires a ref to the source repo in order to work correctly.\n\n## Related PRs\n\n#' + _0x33bfd0 + ' PR for syncing non-conflicting files\n  ';
}
function syncPRBody() {
    return '\nSync all non-conflicting files with the source repo. This PR contains all updates that do not cause any conflicts and can be merged immediately.\n\nNOTE: Do *NOT* squash-merge this pull request. The sync script requires a ref to the source repo in order to work correctly.\n  ';
}
async function syncTranslationRepo(_0xa17af9) {
    logger = log4js['getLogger']('sync:' + _0xa17af9);
    logger['level'] = 'info';
    const _0x130fe4 = repoBase + '-' + _0xa17af9;
    const _0x281522 = host + '/' + owner + '/' + _0x130fe4;
    if (shell['cd'](cacheDir)['code'] !== 0) {
        logger['debug']('creating ' + cacheDir);
        shell['mkdir'](cacheDir);
        shell['cd'](cacheDir);
    }
    cloneOrUpdateRepo(_0x130fe4, _0x281522);
    shell['exec']('git remote add source ' + sourceRepoGitUrl);
    shell['exec']('git fetch source master');
    const _0x383ccd = await getRepository(owner, _0x130fe4);
    if (_0x383ccd['syncPullRequests']['nodes']['length'] > 0) {
        if ('unMUt' === 'RwnQt') {
            shell['cd'](repoName);
            shell['exec']('git checkout master');
            shell['exec']('git pull origin master');
        } else {
            logger['info']('There are currently open sync pull requests. Please ask the language maintainers to merge the existing PR(s) in before opening another one. Exiting...');
            process['exit'](0);
        }
    }
    logger['info']('No currently open sync pull requests.');
    let _0x4bf816;
    if (!_0x383ccd['syncLabel']) {
        if ('aGllL' === 'GiNZP') {
            shell['exec']('git rm ' + _0x1d9dbe['join'](' '), { 'silent': !![] });
        } else {
            logger['info']('Repository does not have a "' + syncLabelName + '" label. Creating one...');
            _0x4bf816 = await createLabel({
                'repositoryId': _0x383ccd['id'],
                'name': syncLabelName,
                'description': 'Sync with translation source. Used by @gatsbybot to track open sync pull requests.',
                'color': 'fbca04'
            });
        }
    } else {
        if ('askgQ' !== 'askgQ') {
            logger['debug']('creating ' + cacheDir);
            shell['mkdir'](cacheDir);
            shell['cd'](cacheDir);
        } else {
            logger['info']('Repository has an existing ' + syncLabelName + ' label.');
            _0x4bf816 = _0x383ccd['syncLabel'];
        }
    }
    const _0x3f2082 = shell['exec']('git merge-base origin/master source/master', { 'silent': !![] })['stdout']['replace']('\n', '');
    const _0x52c14d = getShortHash(_0x3f2082);
    const _0x2928a6 = shell['exec']('git rev-parse source/master', { 'silent': !![] })['stdout']['replace']('\n', '');
    const _0x3ec9a1 = getShortHash(_0x2928a6);
    logger['info']('Syncing with source (no conflicts)...');
    const _0xe6ae0b = 'sync-' + _0x3ec9a1;
    if (shell['exec']('git checkout ' + _0xe6ae0b, { 'silent': !![] })['code'] !== 0) {
        shell['exec']('git checkout -b ' + _0xe6ae0b);
    }
    shell['exec']('git pull source master --no-edit --strategy-option ours', { 'silent': !![] });
    shell['exec']('git diff --name-only --diff-filter=U | xargs git rm');
    shell['exec']('git commit --no-edit');
    shell['exec']('git push -u origin ' + _0xe6ae0b);
    logger['info']('Creating sync pull request');
    const _0x2ea939 = await createPullRequest({
        'repositoryId': _0x383ccd['id'],
        'baseRefName': 'master',
        'headRefName': _0xe6ae0b,
        'title': '(sync) Sync with ' + sourceRepo + ' @ ' + _0x3ec9a1,
        'body': syncPRBody(),
        'maintainerCanModify': !![]
    });
    await addLabelToPullRequest(_0x2ea939, _0x4bf816);
    shell['exec']('git checkout master');
    const _0x2fd38f = sourceRepoUrl + '/compare/' + _0x52c14d + '..' + _0x3ec9a1;
    logger['info']('Finding conflicts with source...');
    const _0xd40a06 = 'conflicts-' + _0x3ec9a1;
    if (shell['exec']('git checkout ' + _0xd40a06, { 'silent': !![] })['code'] !== 0) {
        shell['exec']('git checkout -b ' + _0xd40a06);
    }
    const _0x519dcc = shell['exec']('git pull source master', { 'silent': !![] })['stdout'];
    if (_0x519dcc['includes']('Already up to date.')) {
        logger['info']('We are already up to date with source.');
        process['exit'](0);
    }
    const _0xb5297e = _0x519dcc['split']('\n');
    const _0x2427b9 = _0xb5297e['filter'](_0x22b3fb => _0x22b3fb['startsWith']('CONFLICT (content)'));
    if (_0x2427b9['length'] === 0) {
        logger['info']('No conflicting files found. Exiting...');
        process['exit'](0);
    }
    const _0x23e64b = _0x2427b9['map'](_0x1acd77 => _0x1acd77['substr'](_0x1acd77['lastIndexOf'](' ') + 1));
    shell['exec']('git reset', { 'silent': !![] });
    shell['exec']('git add ' + _0x23e64b['join'](' '));
    const _0x10e72f = _0xb5297e['filter'](_0x224785 => _0x224785['startsWith']('CONFLICT (modify/delete)'));
    const _0x1d9dbe = _0x10e72f['map'](_0x2239ae => _0x2239ae['replace']('CONFLICT (modify/delete): ', '')['split'](' ')[0]);
    if (_0x1d9dbe['length'] > 0) {
        if ('wzFIz' !== 'wzFIz') {
            logger['info']('Repository has an existing ' + syncLabelName + ' label.');
            _0x4bf816 = _0x383ccd['syncLabel'];
        } else {
            shell['exec']('git rm ' + _0x1d9dbe['join'](' '), { 'silent': !![] });
        }
    }
    shell['exec']('git checkout -- .');
    shell['exec']('git clean -fd', { 'silent': !![] });
    shell['exec']('git commit -m "Commit git conflicts"', { 'silent': !![] });
    shell['exec']('git push -u origin ' + _0xd40a06);
    logger['info']('Creating conflicts pull request');
    const _0x581922 = await createPullRequest({
        'repositoryId': _0x383ccd['id'],
        'baseRefName': 'master',
        'headRefName': _0xd40a06,
        'title': '(sync) Resolve conflicts with ' + sourceRepo + ' @ ' + _0x3ec9a1,
        'body': conflictPRBody(_0x23e64b, _0x2fd38f, _0x2ea939['number']),
        'maintainerCanModify': !![],
        'draft': !![]
    });
    await addLabelToPullRequest(_0x581922, _0x4bf816);
}
const [langCode] = process['argv']['slice'](2);
syncTranslationRepo(langCode);