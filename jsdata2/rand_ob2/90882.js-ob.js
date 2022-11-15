const _0x10a0 = [
    'cloning\x20',
    'exec',
    'git\x20checkout\x20master',
    'git\x20pull\x20origin\x20master',
    'token\x20',
    'message',
    'exit',
    '\x0a\x20\x20\x20\x20\x20\x20query\x20($owner:\x20String!,\x20$name:\x20String!,\x20$syncLabel:\x20String!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20repository(owner:\x20$owner,\x20name:\x20$name)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20syncPullRequests:\x20pullRequests(labels:\x20[$syncLabel],\x20first:\x201)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20syncLabel:\x20label(name:\x20$syncLabel)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    '\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20CreateLabelInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20createLabel(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'application/vnd.github.bane-preview+json',
    'label',
    '\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20AddLabelsToLabelableInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20addLabelsToLabelable(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientMutationId\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    '\x0aSync\x20conflicts\x20with\x20the\x20source\x20repo.\x20Please\x20update\x20the\x20translations\x20based\x20on\x20updated\x20source\x20content.\x0a\x0aFor\x20more\x20information\x20on\x20how\x20to\x20resolve\x20sync\x20conflicts,\x20check\x20out\x20the\x20[guide\x20for\x20syncing\x20translations](https://gatsbyjs.org/contributing/translation/sync-guide/).\x0a\x0a<details\x20',
    'length',
    '>\x0a<summary>The\x20following\x20',
    '\x20files\x20have\x20conflicts:</summary><br\x20/>\x0a\x0a',
    '*\x20[\x20]\x20',
    'join',
    '\x0a</details>\x0a\x0aOnce\x20all\x20the\x20commits\x20have\x20been\x20fixed,\x20mark\x20this\x20pull\x20request\x20as\x20\x22Ready\x20for\x20review\x22\x20and\x20merge\x20it\x20in!\x0a\x0aSee\x20all\x20changes\x20since\x20the\x20last\x20sync\x20here:\x0a\x0a',
    '\x0a\x0aNOTE:\x20Do\x20**NOT**\x20squash-merge\x20this\x20pull\x20request.\x20The\x20sync\x20script\x20requires\x20a\x20ref\x20to\x20the\x20source\x20repo\x20in\x20order\x20to\x20work\x20correctly.\x0a\x0a##\x20Related\x20PRs\x0a\x0a#',
    '\x20PR\x20for\x20syncing\x20non-conflicting\x20files\x0a\x20\x20',
    '\x0aSync\x20all\x20non-conflicting\x20files\x20with\x20the\x20source\x20repo.\x20This\x20PR\x20contains\x20all\x20updates\x20that\x20do\x20not\x20cause\x20any\x20conflicts\x20and\x20can\x20be\x20merged\x20immediately.\x0a\x0aNOTE:\x20Do\x20*NOT*\x20squash-merge\x20this\x20pull\x20request.\x20The\x20sync\x20script\x20requires\x20a\x20ref\x20to\x20the\x20source\x20repo\x20in\x20order\x20to\x20work\x20correctly.\x0a\x20\x20',
    'level',
    'info',
    'git\x20remote\x20add\x20source\x20',
    'git\x20fetch\x20source\x20master',
    'syncPullRequests',
    'There\x20are\x20currently\x20open\x20sync\x20pull\x20requests.\x20Please\x20ask\x20the\x20language\x20maintainers\x20to\x20merge\x20the\x20existing\x20PR(s)\x20in\x20before\x20opening\x20another\x20one.\x20Exiting...',
    'syncLabel',
    'Repository\x20does\x20not\x20have\x20a\x20\x22',
    'Sync\x20with\x20translation\x20source.\x20Used\x20by\x20@gatsbybot\x20to\x20track\x20open\x20sync\x20pull\x20requests.',
    'fbca04',
    'Repository\x20has\x20an\x20existing\x20',
    '\x20label.',
    'git\x20merge-base\x20origin/master\x20source/master',
    'stdout',
    'replace',
    'Syncing\x20with\x20source\x20(no\x20conflicts)...',
    'sync-',
    'git\x20checkout\x20',
    'git\x20checkout\x20-b\x20',
    'git\x20pull\x20source\x20master\x20--no-edit\x20--strategy-option\x20ours',
    'git\x20diff\x20--name-only\x20--diff-filter=U\x20|\x20xargs\x20git\x20rm',
    'git\x20commit\x20--no-edit',
    'git\x20push\x20-u\x20origin\x20',
    'Creating\x20sync\x20pull\x20request',
    'master',
    '(sync)\x20Sync\x20with\x20',
    '\x20@\x20',
    'conflicts-',
    'git\x20pull\x20source\x20master',
    'includes',
    'Already\x20up\x20to\x20date.',
    'split',
    'filter',
    'startsWith',
    'lastIndexOf',
    'git\x20reset',
    'CONFLICT\x20(modify/delete)',
    'map',
    'CONFLICT\x20(modify/delete):\x20',
    'git\x20checkout\x20--\x20.',
    'git\x20clean\x20-fd',
    'git\x20commit\x20-m\x20\x22Commit\x20git\x20conflicts\x22',
    'Creating\x20conflicts\x20pull\x20request',
    '(sync)\x20Resolve\x20conflicts\x20with\x20',
    'number',
    'slice',
    '724943FphtOg',
    '1FdnvcR',
    '935187NvTSWV',
    '418537nWxuHz',
    '2rhactW',
    '1106445ZLQYRX',
    '1011360yfxJWH',
    '1051662QNOIBp',
    '2383946oxeCmU',
    'log4js',
    'shelljs',
    'getLogger',
    'sync',
    'dotenv',
    'GITHUB_API_TOKEN',
    'https://',
    '@github.com',
    '.cache',
    'gatsby',
    'gatsby-i18n-source',
    '.git',
    'substr',
    'code',
    'debug'
];
const _0x3a57fe = _0x4d1a;
(function (_0x1dd583, _0x1b1871) {
    const _0x1edd39 = _0x4d1a;
    while (!![]) {
        try {
            const _0x32fb9e = -parseInt(_0x1edd39(0xab)) * parseInt(_0x1edd39(0xac)) + parseInt(_0x1edd39(0xad)) + parseInt(_0x1edd39(0xae)) * -parseInt(_0x1edd39(0xaf)) + -parseInt(_0x1edd39(0xb0)) + -parseInt(_0x1edd39(0xb1)) + parseInt(_0x1edd39(0xb2)) + parseInt(_0x1edd39(0xb3));
            if (_0x32fb9e === _0x1b1871)
                break;
            else
                _0x1dd583['push'](_0x1dd583['shift']());
        } catch (_0x1c82b8) {
            _0x1dd583['push'](_0x1dd583['shift']());
        }
    }
}(_0x10a0, 0xa8b1d));
const log4js = require(_0x3a57fe(0xb4)), shell = require(_0x3a57fe(0xb5)), {graphql: baseGraphql} = require('@octokit/graphql');
let logger = log4js[_0x3a57fe(0xb6)](_0x3a57fe(0xb7));
require(_0x3a57fe(0xb8))['config']();
const token = process['env'][_0x3a57fe(0xb9)], host = _0x3a57fe(0xba) + token + _0x3a57fe(0xbb), cacheDir = _0x3a57fe(0xbc), owner = 'gatsbyjs', repoBase = _0x3a57fe(0xbd), sourceRepo = _0x3a57fe(0xbe), sourceRepoUrl = host + '/' + owner + '/' + sourceRepo, sourceRepoGitUrl = sourceRepoUrl + _0x3a57fe(0xbf), syncLabelName = 'sync';
function getShortHash(_0x5a9a53) {
    const _0x303c10 = _0x3a57fe;
    return _0x5a9a53[_0x303c10(0xc0)](0x0, 0x7);
}
function cloneOrUpdateRepo(_0x24aab5, _0x2139a0) {
    const _0x33e8f2 = _0x3a57fe;
    shell['ls'](_0x24aab5)[_0x33e8f2(0xc1)] !== 0x0 ? (logger[_0x33e8f2(0xc2)](_0x33e8f2(0xc3) + _0x24aab5), shell[_0x33e8f2(0xc4)]('git\x20clone\x20' + _0x2139a0), shell['cd'](_0x24aab5)) : (shell['cd'](_0x24aab5), shell[_0x33e8f2(0xc4)](_0x33e8f2(0xc5)), shell[_0x33e8f2(0xc4)](_0x33e8f2(0xc6)));
}
function _0x4d1a(_0x2c0caf, _0x5507e2) {
    return _0x4d1a = function (_0x10a001, _0x4d1a71) {
        _0x10a001 = _0x10a001 - 0xab;
        let _0x41b466 = _0x10a0[_0x10a001];
        return _0x41b466;
    }, _0x4d1a(_0x2c0caf, _0x5507e2);
}
async function graphql(_0x3ffc30, _0x2f8080) {
    const _0x2e37fd = _0x3a57fe, _0x4c3440 = baseGraphql['defaults']({ 'headers': { 'authorization': _0x2e37fd(0xc7) + token } });
    try {
        return await _0x4c3440(_0x3ffc30, _0x2f8080);
    } catch (_0x54fe28) {
        return logger['error'](_0x54fe28[_0x2e37fd(0xc8)]), process[_0x2e37fd(0xc9)](0x1);
    }
}
async function getRepository(_0x5b202a, _0x1c74a1) {
    const _0x1fbd7d = _0x3a57fe, {repository: _0x5443d1} = await graphql(_0x1fbd7d(0xca), {
            'owner': _0x5b202a,
            'name': _0x1c74a1,
            'syncLabel': syncLabelName
        });
    return _0x5443d1;
}
async function createLabel(_0x303860) {
    const _0x1ba71c = _0x3a57fe, {createLabel: _0x4fe549} = await graphql(_0x1ba71c(0xcb), {
            'headers': { 'accept': _0x1ba71c(0xcc) },
            'input': _0x303860
        });
    return _0x4fe549[_0x1ba71c(0xcd)];
}
async function createPullRequest(_0x16d3ed) {
    const {createPullRequest: _0x4b412a} = await graphql('\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20CreatePullRequestInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20createPullRequest(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pullRequest\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', {
        'headers': { 'accept': 'application/vnd.github.shadow-cat-preview+json' },
        'input': _0x16d3ed
    });
    return _0x4b412a['pullRequest'];
}
async function addLabelToPullRequest(_0x4a98cb, _0x3c5a54) {
    const _0x2dfbdf = _0x3a57fe;
    await graphql(_0x2dfbdf(0xce), {
        'headers': { 'accept': _0x2dfbdf(0xcc) },
        'input': {
            'labelableId': _0x4a98cb['id'],
            'labelIds': [_0x3c5a54['id']]
        }
    });
}
function conflictPRBody(_0x302136, _0x3b2d04, _0x51c0fa) {
    const _0x42a891 = _0x3a57fe;
    return _0x42a891(0xcf) + (_0x302136[_0x42a891(0xd0)] <= 0xa ? 'open' : '') + _0x42a891(0xd1) + _0x302136[_0x42a891(0xd0)] + _0x42a891(0xd2) + _0x302136['map'](_0x51f67e => _0x42a891(0xd3) + _0x51f67e)[_0x42a891(0xd4)]('\x0a') + _0x42a891(0xd5) + _0x3b2d04 + _0x42a891(0xd6) + _0x51c0fa + _0x42a891(0xd7);
}
function syncPRBody() {
    const _0x17d331 = _0x3a57fe;
    return _0x17d331(0xd8);
}
async function syncTranslationRepo(_0x24b8a0) {
    const _0x2d1996 = _0x3a57fe;
    logger = log4js['getLogger']('sync:' + _0x24b8a0), logger[_0x2d1996(0xd9)] = _0x2d1996(0xda);
    const _0x9a4cb1 = repoBase + '-' + _0x24b8a0, _0x1d0484 = host + '/' + owner + '/' + _0x9a4cb1;
    shell['cd'](cacheDir)[_0x2d1996(0xc1)] !== 0x0 && (logger['debug']('creating\x20' + cacheDir), shell['mkdir'](cacheDir), shell['cd'](cacheDir));
    cloneOrUpdateRepo(_0x9a4cb1, _0x1d0484), shell[_0x2d1996(0xc4)](_0x2d1996(0xdb) + sourceRepoGitUrl), shell['exec'](_0x2d1996(0xdc));
    const _0x4b30c2 = await getRepository(owner, _0x9a4cb1);
    _0x4b30c2[_0x2d1996(0xdd)]['nodes'][_0x2d1996(0xd0)] > 0x0 && (logger[_0x2d1996(0xda)](_0x2d1996(0xde)), process[_0x2d1996(0xc9)](0x0));
    logger[_0x2d1996(0xda)]('No\x20currently\x20open\x20sync\x20pull\x20requests.');
    let _0x2b8ba3;
    !_0x4b30c2[_0x2d1996(0xdf)] ? (logger[_0x2d1996(0xda)](_0x2d1996(0xe0) + syncLabelName + '\x22\x20label.\x20Creating\x20one...'), _0x2b8ba3 = await createLabel({
        'repositoryId': _0x4b30c2['id'],
        'name': syncLabelName,
        'description': _0x2d1996(0xe1),
        'color': _0x2d1996(0xe2)
    })) : (logger['info'](_0x2d1996(0xe3) + syncLabelName + _0x2d1996(0xe4)), _0x2b8ba3 = _0x4b30c2[_0x2d1996(0xdf)]);
    const _0x1e1849 = shell['exec'](_0x2d1996(0xe5), { 'silent': !![] })[_0x2d1996(0xe6)][_0x2d1996(0xe7)]('\x0a', ''), _0xd59f24 = getShortHash(_0x1e1849), _0x5d7bc1 = shell[_0x2d1996(0xc4)]('git\x20rev-parse\x20source/master', { 'silent': !![] })['stdout'][_0x2d1996(0xe7)]('\x0a', ''), _0x1c5723 = getShortHash(_0x5d7bc1);
    logger[_0x2d1996(0xda)](_0x2d1996(0xe8));
    const _0xf56226 = _0x2d1996(0xe9) + _0x1c5723;
    shell['exec'](_0x2d1996(0xea) + _0xf56226, { 'silent': !![] })[_0x2d1996(0xc1)] !== 0x0 && shell[_0x2d1996(0xc4)](_0x2d1996(0xeb) + _0xf56226);
    shell['exec'](_0x2d1996(0xec), { 'silent': !![] }), shell[_0x2d1996(0xc4)](_0x2d1996(0xed)), shell[_0x2d1996(0xc4)](_0x2d1996(0xee)), shell[_0x2d1996(0xc4)](_0x2d1996(0xef) + _0xf56226), logger['info'](_0x2d1996(0xf0));
    const _0x2c4f38 = await createPullRequest({
        'repositoryId': _0x4b30c2['id'],
        'baseRefName': _0x2d1996(0xf1),
        'headRefName': _0xf56226,
        'title': _0x2d1996(0xf2) + sourceRepo + _0x2d1996(0xf3) + _0x1c5723,
        'body': syncPRBody(),
        'maintainerCanModify': !![]
    });
    await addLabelToPullRequest(_0x2c4f38, _0x2b8ba3), shell[_0x2d1996(0xc4)](_0x2d1996(0xc5));
    const _0x287552 = sourceRepoUrl + '/compare/' + _0xd59f24 + '..' + _0x1c5723;
    logger[_0x2d1996(0xda)]('Finding\x20conflicts\x20with\x20source...');
    const _0x182534 = _0x2d1996(0xf4) + _0x1c5723;
    shell[_0x2d1996(0xc4)]('git\x20checkout\x20' + _0x182534, { 'silent': !![] })['code'] !== 0x0 && shell[_0x2d1996(0xc4)](_0x2d1996(0xeb) + _0x182534);
    const _0x5974d1 = shell['exec'](_0x2d1996(0xf5), { 'silent': !![] })['stdout'];
    _0x5974d1[_0x2d1996(0xf6)](_0x2d1996(0xf7)) && (logger[_0x2d1996(0xda)]('We\x20are\x20already\x20up\x20to\x20date\x20with\x20source.'), process[_0x2d1996(0xc9)](0x0));
    const _0x53af85 = _0x5974d1[_0x2d1996(0xf8)]('\x0a'), _0x5074b6 = _0x53af85[_0x2d1996(0xf9)](_0x46eb3a => _0x46eb3a[_0x2d1996(0xfa)]('CONFLICT\x20(content)'));
    _0x5074b6[_0x2d1996(0xd0)] === 0x0 && (logger[_0x2d1996(0xda)]('No\x20conflicting\x20files\x20found.\x20Exiting...'), process[_0x2d1996(0xc9)](0x0));
    const _0xda7dad = _0x5074b6['map'](_0x3ee8c8 => _0x3ee8c8['substr'](_0x3ee8c8[_0x2d1996(0xfb)]('\x20') + 0x1));
    shell[_0x2d1996(0xc4)](_0x2d1996(0xfc), { 'silent': !![] }), shell[_0x2d1996(0xc4)]('git\x20add\x20' + _0xda7dad[_0x2d1996(0xd4)]('\x20'));
    const _0x16140f = _0x53af85['filter'](_0x2e1b40 => _0x2e1b40[_0x2d1996(0xfa)](_0x2d1996(0xfd))), _0x5d31ef = _0x16140f[_0x2d1996(0xfe)](_0x3965e1 => _0x3965e1['replace'](_0x2d1996(0xff), '')[_0x2d1996(0xf8)]('\x20')[0x0]);
    _0x5d31ef[_0x2d1996(0xd0)] > 0x0 && shell['exec']('git\x20rm\x20' + _0x5d31ef['join']('\x20'), { 'silent': !![] });
    shell[_0x2d1996(0xc4)](_0x2d1996(0x100)), shell[_0x2d1996(0xc4)](_0x2d1996(0x101), { 'silent': !![] }), shell[_0x2d1996(0xc4)](_0x2d1996(0x102), { 'silent': !![] }), shell['exec'](_0x2d1996(0xef) + _0x182534), logger['info'](_0x2d1996(0x103));
    const _0xd1068e = await createPullRequest({
        'repositoryId': _0x4b30c2['id'],
        'baseRefName': _0x2d1996(0xf1),
        'headRefName': _0x182534,
        'title': _0x2d1996(0x104) + sourceRepo + '\x20@\x20' + _0x1c5723,
        'body': conflictPRBody(_0xda7dad, _0x287552, _0x2c4f38[_0x2d1996(0x105)]),
        'maintainerCanModify': !![],
        'draft': !![]
    });
    await addLabelToPullRequest(_0xd1068e, _0x2b8ba3);
}
const [langCode] = process['argv'][_0x3a57fe(0x106)](0x2);
syncTranslationRepo(langCode);
