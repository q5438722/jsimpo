const _0x4269 = [
    '@octokit/graphql',
    'getLogger',
    'sync',
    'config',
    'env',
    'GITHUB_API_TOKEN',
    'https://',
    '@github.com',
    '.cache',
    'gatsbyjs',
    'gatsby-i18n-source',
    '.git',
    'substr',
    'git\x20clone\x20',
    'exec',
    'defaults',
    'token\x20',
    'FAceg',
    'error',
    'message',
    'exit',
    'vFJVG',
    '\x0a\x20\x20\x20\x20\x20\x20query\x20($owner:\x20String!,\x20$name:\x20String!,\x20$syncLabel:\x20String!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20repository(owner:\x20$owner,\x20name:\x20$name)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20syncPullRequests:\x20pullRequests(labels:\x20[$syncLabel],\x20first:\x201)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20syncLabel:\x20label(name:\x20$syncLabel)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'lQAtC',
    '\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20CreateLabelInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20createLabel(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'application/vnd.github.bane-preview+json',
    'lrAQl',
    '\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20CreatePullRequestInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20createPullRequest(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pullRequest\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20number\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    'application/vnd.github.shadow-cat-preview+json',
    'pullRequest',
    'DAkAa',
    '\x0a\x20\x20\x20\x20\x20\x20mutation\x20($input:\x20AddLabelsToLabelableInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20addLabelsToLabelable(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clientMutationId\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
    '\x0aSync\x20conflicts\x20with\x20the\x20source\x20repo.\x20Please\x20update\x20the\x20translations\x20based\x20on\x20updated\x20source\x20content.\x0a\x0aFor\x20more\x20information\x20on\x20how\x20to\x20resolve\x20sync\x20conflicts,\x20check\x20out\x20the\x20[guide\x20for\x20syncing\x20translations](https://gatsbyjs.org/contributing/translation/sync-guide/).\x0a\x0a<details\x20',
    'length',
    'open',
    '>\x0a<summary>The\x20following\x20',
    '\x20files\x20have\x20conflicts:</summary><br\x20/>\x0a\x0a',
    '*\x20[\x20]\x20',
    'join',
    '\x0a\x0aNOTE:\x20Do\x20**NOT**\x20squash-merge\x20this\x20pull\x20request.\x20The\x20sync\x20script\x20requires\x20a\x20ref\x20to\x20the\x20source\x20repo\x20in\x20order\x20to\x20work\x20correctly.\x0a\x0a##\x20Related\x20PRs\x0a\x0a#',
    '\x20PR\x20for\x20syncing\x20non-conflicting\x20files\x0a\x20\x20',
    'sync:',
    'level',
    'info',
    'XvADV',
    'code',
    'debug',
    'creating\x20',
    'JRVuX',
    'git\x20fetch\x20source\x20master',
    'nodes',
    'No\x20currently\x20open\x20sync\x20pull\x20requests.',
    'syncLabel',
    'Repository\x20does\x20not\x20have\x20a\x20\x22',
    '\x22\x20label.\x20Creating\x20one...',
    'XiclF',
    'Sync\x20with\x20translation\x20source.\x20Used\x20by\x20@gatsbybot\x20to\x20track\x20open\x20sync\x20pull\x20requests.',
    'fbca04',
    'Repository\x20has\x20an\x20existing\x20',
    '\x20label.',
    'git\x20merge-base\x20origin/master\x20source/master',
    'replace',
    'nXcHw',
    'stdout',
    'rlOkU',
    'Syncing\x20with\x20source\x20(no\x20conflicts)...',
    'sync-',
    'git\x20checkout\x20',
    'git\x20checkout\x20-b\x20',
    'git\x20pull\x20source\x20master\x20--no-edit\x20--strategy-option\x20ours',
    'git\x20diff\x20--name-only\x20--diff-filter=U\x20|\x20xargs\x20git\x20rm',
    'git\x20commit\x20--no-edit',
    'git\x20push\x20-u\x20origin\x20',
    'Creating\x20sync\x20pull\x20request',
    'jcTLY',
    'master',
    '(sync)\x20Sync\x20with\x20',
    '\x20@\x20',
    'git\x20checkout\x20master',
    '/compare/',
    'Finding\x20conflicts\x20with\x20source...',
    'conflicts-',
    'includes',
    'Already\x20up\x20to\x20date.',
    'We\x20are\x20already\x20up\x20to\x20date\x20with\x20source.',
    'split',
    'filter',
    'startsWith',
    'CONFLICT\x20(content)',
    'No\x20conflicting\x20files\x20found.\x20Exiting...',
    'git\x20reset',
    'git\x20add\x20',
    'CONFLICT\x20(modify/delete):\x20',
    'git\x20rm\x20',
    'git\x20commit\x20-m\x20\x22Commit\x20git\x20conflicts\x22',
    'Creating\x20conflicts\x20pull\x20request',
    'ENkUF',
    '(sync)\x20Resolve\x20conflicts\x20with\x20',
    'MtuEm',
    'number',
    'argv',
    'slice',
    '15015jtorhj',
    '4KHiYIt',
    '1NcIwnz',
    '392335XkzpoR',
    '407460lHWzuF',
    '21045vCLKKX',
    '6PYzQFH',
    '375941UpSZOZ',
    '445046wkbBAd',
    '3KFwAns',
    '84586UmOnCe',
    'log4js'
];
const _0x1d7532 = _0x22c7;
(function (_0x1f4c26, _0x4db81f) {
    const _0x54fc6d = _0x22c7;
    while (!![]) {
        try {
            const _0xa8b415 = parseInt(_0x54fc6d(0x14a)) * parseInt(_0x54fc6d(0x14b)) + parseInt(_0x54fc6d(0x14c)) * parseInt(_0x54fc6d(0x14d)) + -parseInt(_0x54fc6d(0x14e)) + -parseInt(_0x54fc6d(0x14f)) * parseInt(_0x54fc6d(0x150)) + -parseInt(_0x54fc6d(0x151)) + parseInt(_0x54fc6d(0x152)) + -parseInt(_0x54fc6d(0x153)) * -parseInt(_0x54fc6d(0x154));
            if (_0xa8b415 === _0x4db81f)
                break;
            else
                _0x1f4c26['push'](_0x1f4c26['shift']());
        } catch (_0x4e2dec) {
            _0x1f4c26['push'](_0x1f4c26['shift']());
        }
    }
}(_0x4269, -0x50b95 + -0x8f63 + 0x1dbb0 * 0x5));
const log4js = require(_0x1d7532(0x155)), shell = require('shelljs'), {graphql: baseGraphql} = require(_0x1d7532(0x156));
function _0x22c7(_0x2d5b50, _0x1f95db) {
    return _0x22c7 = function (_0x80dd04, _0x1b3226) {
        _0x80dd04 = _0x80dd04 - (-0xd * 0x232 + -0x82 + -0x2c2 * -0xb);
        let _0x257e9a = _0x4269[_0x80dd04];
        return _0x257e9a;
    }, _0x22c7(_0x2d5b50, _0x1f95db);
}
let logger = log4js[_0x1d7532(0x157)](_0x1d7532(0x158));
require('dotenv')[_0x1d7532(0x159)]();
const token = process[_0x1d7532(0x15a)][_0x1d7532(0x15b)], host = _0x1d7532(0x15c) + token + _0x1d7532(0x15d), cacheDir = _0x1d7532(0x15e), owner = _0x1d7532(0x15f), repoBase = 'gatsby', sourceRepo = _0x1d7532(0x160), sourceRepoUrl = host + '/' + owner + '/' + sourceRepo, sourceRepoGitUrl = sourceRepoUrl + _0x1d7532(0x161), syncLabelName = 'sync';
function getShortHash(_0x535b88) {
    const _0x5e5e5b = _0x1d7532;
    return _0x535b88[_0x5e5e5b(0x162)](0x5 * -0x4f3 + -0x1 * -0xf1b + 0x9a4, -0xbb3 + 0x7e0 * 0x1 + 0x3da);
}
function cloneOrUpdateRepo(_0x58bb80, _0x369db7) {
    const _0x5a55da = _0x1d7532, _0x368932 = {
            'oZRQr': function (_0x48698f, _0xac515b) {
                return _0x48698f !== _0xac515b;
            }
        };
    _0x368932['oZRQr'](shell['ls'](_0x58bb80)['code'], 0xa2b + -0x9d0 * 0x1 + -0x5b) ? (logger['debug']('cloning\x20' + _0x58bb80), shell['exec'](_0x5a55da(0x163) + _0x369db7), shell['cd'](_0x58bb80)) : (shell['cd'](_0x58bb80), shell[_0x5a55da(0x164)]('git\x20checkout\x20master'), shell[_0x5a55da(0x164)]('git\x20pull\x20origin\x20master'));
}
async function graphql(_0x8404f5, _0x28722e) {
    const _0x6381eb = _0x1d7532, _0x55ea68 = {
            'FAceg': function (_0x2d554f, _0x469168, _0x5e4e6d) {
                return _0x2d554f(_0x469168, _0x5e4e6d);
            }
        }, _0x39665b = baseGraphql[_0x6381eb(0x165)]({ 'headers': { 'authorization': _0x6381eb(0x166) + token } });
    try {
        return await _0x55ea68[_0x6381eb(0x167)](_0x39665b, _0x8404f5, _0x28722e);
    } catch (_0xbb5939) {
        return logger[_0x6381eb(0x168)](_0xbb5939[_0x6381eb(0x169)]), process[_0x6381eb(0x16a)](-0x2d0 + 0x1c51 + 0x330 * -0x8);
    }
}
async function getRepository(_0x4b71ec, _0x20719f) {
    const _0x31cdbd = _0x1d7532, _0x80688f = {
            'vFJVG': function (_0x30a0bf, _0x22be60, _0x194e91) {
                return _0x30a0bf(_0x22be60, _0x194e91);
            }
        }, {repository: _0x28bd90} = await _0x80688f[_0x31cdbd(0x16b)](graphql, _0x31cdbd(0x16c), {
            'owner': _0x4b71ec,
            'name': _0x20719f,
            'syncLabel': syncLabelName
        });
    return _0x28bd90;
}
async function createLabel(_0x12820e) {
    const _0x183103 = _0x1d7532, _0x317268 = {
            'lQAtC': function (_0x116f71, _0x1602e4, _0x51825c) {
                return _0x116f71(_0x1602e4, _0x51825c);
            }
        }, {createLabel: _0x2bff9e} = await _0x317268[_0x183103(0x16d)](graphql, _0x183103(0x16e), {
            'headers': { 'accept': _0x183103(0x16f) },
            'input': _0x12820e
        });
    return _0x2bff9e['label'];
}
async function createPullRequest(_0x5854f6) {
    const _0x172b9b = _0x1d7532, _0x573d6c = {
            'lrAQl': function (_0x4f2e7b, _0x426755, _0x3338c3) {
                return _0x4f2e7b(_0x426755, _0x3338c3);
            }
        }, {createPullRequest: _0x522a85} = await _0x573d6c[_0x172b9b(0x170)](graphql, _0x172b9b(0x171), {
            'headers': { 'accept': _0x172b9b(0x172) },
            'input': _0x5854f6
        });
    return _0x522a85[_0x172b9b(0x173)];
}
async function addLabelToPullRequest(_0x3fde1a, _0x1105d5) {
    const _0x10b8b1 = _0x1d7532, _0x3b5df5 = {
            'DAkAa': function (_0x12c242, _0x196073, _0x2dfdaa) {
                return _0x12c242(_0x196073, _0x2dfdaa);
            }
        };
    await _0x3b5df5[_0x10b8b1(0x174)](graphql, _0x10b8b1(0x175), {
        'headers': { 'accept': _0x10b8b1(0x16f) },
        'input': {
            'labelableId': _0x3fde1a['id'],
            'labelIds': [_0x1105d5['id']]
        }
    });
}
function conflictPRBody(_0x57d6c8, _0x819b03, _0x7e4599) {
    const _0x5515ed = _0x1d7532, _0x22d106 = {
            'xqlgm': function (_0x2eb14c, _0x5b7086) {
                return _0x2eb14c <= _0x5b7086;
            }
        };
    return _0x5515ed(0x176) + (_0x22d106['xqlgm'](_0x57d6c8[_0x5515ed(0x177)], 0x2182 + -0x17f7 + -0x981) ? _0x5515ed(0x178) : '') + _0x5515ed(0x179) + _0x57d6c8[_0x5515ed(0x177)] + _0x5515ed(0x17a) + _0x57d6c8['map'](_0x2eab2c => _0x5515ed(0x17b) + _0x2eab2c)[_0x5515ed(0x17c)]('\x0a') + '\x0a</details>\x0a\x0aOnce\x20all\x20the\x20commits\x20have\x20been\x20fixed,\x20mark\x20this\x20pull\x20request\x20as\x20\x22Ready\x20for\x20review\x22\x20and\x20merge\x20it\x20in!\x0a\x0aSee\x20all\x20changes\x20since\x20the\x20last\x20sync\x20here:\x0a\x0a' + _0x819b03 + _0x5515ed(0x17d) + _0x7e4599 + _0x5515ed(0x17e);
}
function syncPRBody() {
    return '\x0aSync\x20all\x20non-conflicting\x20files\x20with\x20the\x20source\x20repo.\x20This\x20PR\x20contains\x20all\x20updates\x20that\x20do\x20not\x20cause\x20any\x20conflicts\x20and\x20can\x20be\x20merged\x20immediately.\x0a\x0aNOTE:\x20Do\x20*NOT*\x20squash-merge\x20this\x20pull\x20request.\x20The\x20sync\x20script\x20requires\x20a\x20ref\x20to\x20the\x20source\x20repo\x20in\x20order\x20to\x20work\x20correctly.\x0a\x20\x20';
}
async function syncTranslationRepo(_0x23a766) {
    const _0x349b9d = _0x1d7532, _0x5c8669 = {
            'XvADV': function (_0x311e5a, _0x1364e1) {
                return _0x311e5a !== _0x1364e1;
            },
            'JRVuX': function (_0x49acd1, _0x12a15a, _0x299e3e) {
                return _0x49acd1(_0x12a15a, _0x299e3e);
            },
            'XiclF': function (_0x1f51f2, _0x8a1500) {
                return _0x1f51f2(_0x8a1500);
            },
            'nXcHw': function (_0x35c66a, _0x187bd9) {
                return _0x35c66a(_0x187bd9);
            },
            'rlOkU': function (_0x133cac, _0x388743) {
                return _0x133cac(_0x388743);
            },
            'jcTLY': function (_0x1b54b6, _0x21f6c3) {
                return _0x1b54b6(_0x21f6c3);
            },
            'RTRbe': function (_0x3fc2e5, _0x3eeedf) {
                return _0x3fc2e5 > _0x3eeedf;
            },
            'ENkUF': function (_0x5e3328, _0x13c633) {
                return _0x5e3328(_0x13c633);
            },
            'MtuEm': function (_0x53729b, _0x129e21, _0xab7ee7, _0x5ede6e) {
                return _0x53729b(_0x129e21, _0xab7ee7, _0x5ede6e);
            },
            'ESysz': function (_0x325192, _0x23848a, _0x35cef5) {
                return _0x325192(_0x23848a, _0x35cef5);
            }
        };
    logger = log4js[_0x349b9d(0x157)](_0x349b9d(0x17f) + _0x23a766), logger[_0x349b9d(0x180)] = _0x349b9d(0x181);
    const _0x3fd240 = repoBase + '-' + _0x23a766, _0x3c0eef = host + '/' + owner + '/' + _0x3fd240;
    _0x5c8669[_0x349b9d(0x182)](shell['cd'](cacheDir)[_0x349b9d(0x183)], 0x15dd + 0x1c6 * -0x3 + 0x37 * -0x4d) && (logger[_0x349b9d(0x184)](_0x349b9d(0x185) + cacheDir), shell['mkdir'](cacheDir), shell['cd'](cacheDir));
    _0x5c8669[_0x349b9d(0x186)](cloneOrUpdateRepo, _0x3fd240, _0x3c0eef), shell[_0x349b9d(0x164)]('git\x20remote\x20add\x20source\x20' + sourceRepoGitUrl), shell[_0x349b9d(0x164)](_0x349b9d(0x187));
    const _0x31ff8c = await getRepository(owner, _0x3fd240);
    _0x31ff8c['syncPullRequests'][_0x349b9d(0x188)]['length'] > 0x180d * 0x1 + 0xb1d + 0x1 * -0x232a && (logger['info']('There\x20are\x20currently\x20open\x20sync\x20pull\x20requests.\x20Please\x20ask\x20the\x20language\x20maintainers\x20to\x20merge\x20the\x20existing\x20PR(s)\x20in\x20before\x20opening\x20another\x20one.\x20Exiting...'), process['exit'](-0x1c20 + 0x21 * 0xa1 + 0x75f));
    logger[_0x349b9d(0x181)](_0x349b9d(0x189));
    let _0x1147d0;
    !_0x31ff8c[_0x349b9d(0x18a)] ? (logger[_0x349b9d(0x181)](_0x349b9d(0x18b) + syncLabelName + _0x349b9d(0x18c)), _0x1147d0 = await _0x5c8669[_0x349b9d(0x18d)](createLabel, {
        'repositoryId': _0x31ff8c['id'],
        'name': syncLabelName,
        'description': _0x349b9d(0x18e),
        'color': _0x349b9d(0x18f)
    })) : (logger[_0x349b9d(0x181)](_0x349b9d(0x190) + syncLabelName + _0x349b9d(0x191)), _0x1147d0 = _0x31ff8c['syncLabel']);
    const _0x48ed28 = shell[_0x349b9d(0x164)](_0x349b9d(0x192), { 'silent': !![] })['stdout'][_0x349b9d(0x193)]('\x0a', ''), _0x53042c = _0x5c8669[_0x349b9d(0x194)](getShortHash, _0x48ed28), _0x4872ad = shell[_0x349b9d(0x164)]('git\x20rev-parse\x20source/master', { 'silent': !![] })[_0x349b9d(0x195)][_0x349b9d(0x193)]('\x0a', ''), _0x3a827f = _0x5c8669[_0x349b9d(0x196)](getShortHash, _0x4872ad);
    logger[_0x349b9d(0x181)](_0x349b9d(0x197));
    const _0xf90898 = _0x349b9d(0x198) + _0x3a827f;
    shell[_0x349b9d(0x164)](_0x349b9d(0x199) + _0xf90898, { 'silent': !![] })[_0x349b9d(0x183)] !== -0x13 * -0x183 + -0x9 * 0x1c8 + -0x9 * 0x169 && shell[_0x349b9d(0x164)](_0x349b9d(0x19a) + _0xf90898);
    shell[_0x349b9d(0x164)](_0x349b9d(0x19b), { 'silent': !![] }), shell[_0x349b9d(0x164)](_0x349b9d(0x19c)), shell[_0x349b9d(0x164)](_0x349b9d(0x19d)), shell['exec'](_0x349b9d(0x19e) + _0xf90898), logger[_0x349b9d(0x181)](_0x349b9d(0x19f));
    const _0x92faf2 = await _0x5c8669[_0x349b9d(0x1a0)](createPullRequest, {
        'repositoryId': _0x31ff8c['id'],
        'baseRefName': _0x349b9d(0x1a1),
        'headRefName': _0xf90898,
        'title': _0x349b9d(0x1a2) + sourceRepo + _0x349b9d(0x1a3) + _0x3a827f,
        'body': syncPRBody(),
        'maintainerCanModify': !![]
    });
    await addLabelToPullRequest(_0x92faf2, _0x1147d0), shell[_0x349b9d(0x164)](_0x349b9d(0x1a4));
    const _0x1c63b3 = sourceRepoUrl + _0x349b9d(0x1a5) + _0x53042c + '..' + _0x3a827f;
    logger['info'](_0x349b9d(0x1a6));
    const _0x28cbf5 = _0x349b9d(0x1a7) + _0x3a827f;
    _0x5c8669[_0x349b9d(0x182)](shell[_0x349b9d(0x164)](_0x349b9d(0x199) + _0x28cbf5, { 'silent': !![] })[_0x349b9d(0x183)], 0x26b4 + 0x120b + -0x38bf) && shell['exec'](_0x349b9d(0x19a) + _0x28cbf5);
    const _0x1acc4d = shell[_0x349b9d(0x164)]('git\x20pull\x20source\x20master', { 'silent': !![] })[_0x349b9d(0x195)];
    _0x1acc4d[_0x349b9d(0x1a8)](_0x349b9d(0x1a9)) && (logger[_0x349b9d(0x181)](_0x349b9d(0x1aa)), process[_0x349b9d(0x16a)](-0x1860 + 0x33a + 0x1526));
    const _0x30f150 = _0x1acc4d[_0x349b9d(0x1ab)]('\x0a'), _0x48cb31 = _0x30f150[_0x349b9d(0x1ac)](_0x5d0545 => _0x5d0545[_0x349b9d(0x1ad)](_0x349b9d(0x1ae)));
    _0x48cb31['length'] === 0x3d3 * 0xa + 0xdbc + 0x2 * -0x19fd && (logger[_0x349b9d(0x181)](_0x349b9d(0x1af)), process[_0x349b9d(0x16a)](0x1 * 0xbd0 + -0x1561 + 0x991));
    const _0xf473c3 = _0x48cb31['map'](_0x5e9680 => _0x5e9680[_0x349b9d(0x162)](_0x5e9680['lastIndexOf']('\x20') + (0x1 * -0x74f + -0x1347 + 0x1a97)));
    shell[_0x349b9d(0x164)](_0x349b9d(0x1b0), { 'silent': !![] }), shell[_0x349b9d(0x164)](_0x349b9d(0x1b1) + _0xf473c3[_0x349b9d(0x17c)]('\x20'));
    const _0x1d3270 = _0x30f150[_0x349b9d(0x1ac)](_0x165256 => _0x165256[_0x349b9d(0x1ad)]('CONFLICT\x20(modify/delete)')), _0x5e731c = _0x1d3270['map'](_0x2adefe => _0x2adefe[_0x349b9d(0x193)](_0x349b9d(0x1b2), '')[_0x349b9d(0x1ab)]('\x20')[-0x210 + -0x1b1 + 0x3c1]);
    _0x5c8669['RTRbe'](_0x5e731c[_0x349b9d(0x177)], -0xf1a * 0x1 + -0x1970 + 0x288a) && shell[_0x349b9d(0x164)](_0x349b9d(0x1b3) + _0x5e731c['join']('\x20'), { 'silent': !![] });
    shell[_0x349b9d(0x164)]('git\x20checkout\x20--\x20.'), shell[_0x349b9d(0x164)]('git\x20clean\x20-fd', { 'silent': !![] }), shell[_0x349b9d(0x164)](_0x349b9d(0x1b4), { 'silent': !![] }), shell[_0x349b9d(0x164)](_0x349b9d(0x19e) + _0x28cbf5), logger[_0x349b9d(0x181)](_0x349b9d(0x1b5));
    const _0x4321f1 = await _0x5c8669[_0x349b9d(0x1b6)](createPullRequest, {
        'repositoryId': _0x31ff8c['id'],
        'baseRefName': _0x349b9d(0x1a1),
        'headRefName': _0x28cbf5,
        'title': _0x349b9d(0x1b7) + sourceRepo + '\x20@\x20' + _0x3a827f,
        'body': _0x5c8669[_0x349b9d(0x1b8)](conflictPRBody, _0xf473c3, _0x1c63b3, _0x92faf2[_0x349b9d(0x1b9)]),
        'maintainerCanModify': !![],
        'draft': !![]
    });
    await _0x5c8669['ESysz'](addLabelToPullRequest, _0x4321f1, _0x1147d0);
}
const [langCode] = process[_0x1d7532(0x1ba)][_0x1d7532(0x1bb)](0x1622 + -0x1 * 0x551 + -0xd * 0x14b);
syncTranslationRepo(langCode);
