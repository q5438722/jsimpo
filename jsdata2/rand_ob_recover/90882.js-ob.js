const log4js = require(_0x1d7532(341)), shell = require('shelljs'), {graphql: baseGraphql} = require(_0x1d7532(342));
function _0x22c7(_0x2d5b50, _0x1f95db) {
    return _0x22c7 = function (_0x80dd04, _0x1b3226) {
        _0x80dd04 = _0x80dd04 - (-13 * 562 + -130 + -706 * -11);
        let _0x257e9a = _0x4269[_0x80dd04];
        return _0x257e9a;
    }, _0x22c7(_0x2d5b50, _0x1f95db);
}
let logger = log4js[_0x1d7532(343)](_0x1d7532(344));
require('dotenv')[_0x1d7532(345)]();
const token = process[_0x1d7532(346)][_0x1d7532(347)], host = _0x1d7532(348) + token + _0x1d7532(349), cacheDir = _0x1d7532(350), owner = _0x1d7532(351), repoBase = 'gatsby', sourceRepo = _0x1d7532(352), sourceRepoUrl = host + '/' + owner + '/' + sourceRepo, sourceRepoGitUrl = sourceRepoUrl + _0x1d7532(353), syncLabelName = 'sync';
function getShortHash(_0x535b88) {
    const _0x5e5e5b = _0x1d7532;
    return _0x535b88[_0x5e5e5b(354)](5 * -1267 + -1 * -3867 + 2468, -2995 + 2016 * 1 + 986);
}
function cloneOrUpdateRepo(_0x58bb80, _0x369db7) {
    const _0x5a55da = _0x1d7532, _0x368932 = {
            'oZRQr': function (_0x48698f, _0xac515b) {
                return _0x48698f !== _0xac515b;
            }
        };
    _0x368932['oZRQr'](shell['ls'](_0x58bb80)['code'], 2603 + -2512 * 1 + -91) ? (logger['debug']('cloning ' + _0x58bb80), shell['exec'](_0x5a55da(355) + _0x369db7), shell['cd'](_0x58bb80)) : (shell['cd'](_0x58bb80), shell[_0x5a55da(356)]('git checkout master'), shell[_0x5a55da(356)]('git pull origin master'));
}
async function graphql(_0x8404f5, _0x28722e) {
    const _0x6381eb = _0x1d7532, _0x55ea68 = {
            'FAceg': function (_0x2d554f, _0x469168, _0x5e4e6d) {
                return _0x2d554f(_0x469168, _0x5e4e6d);
            }
        }, _0x39665b = baseGraphql[_0x6381eb(357)]({ 'headers': { 'authorization': _0x6381eb(358) + token } });
    try {
        return await _0x55ea68[_0x6381eb(359)](_0x39665b, _0x8404f5, _0x28722e);
    } catch (_0xbb5939) {
        return logger[_0x6381eb(360)](_0xbb5939[_0x6381eb(361)]), process[_0x6381eb(362)](-720 + 7249 + 816 * -8);
    }
}
async function getRepository(_0x4b71ec, _0x20719f) {
    const _0x31cdbd = _0x1d7532, _0x80688f = {
            'vFJVG': function (_0x30a0bf, _0x22be60, _0x194e91) {
                return _0x30a0bf(_0x22be60, _0x194e91);
            }
        }, {repository: _0x28bd90} = await _0x80688f[_0x31cdbd(363)](graphql, _0x31cdbd(364), {
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
        }, {createLabel: _0x2bff9e} = await _0x317268[_0x183103(365)](graphql, _0x183103(366), {
            'headers': { 'accept': _0x183103(367) },
            'input': _0x12820e
        });
    return _0x2bff9e['label'];
}
async function createPullRequest(_0x5854f6) {
    const _0x172b9b = _0x1d7532, _0x573d6c = {
            'lrAQl': function (_0x4f2e7b, _0x426755, _0x3338c3) {
                return _0x4f2e7b(_0x426755, _0x3338c3);
            }
        }, {createPullRequest: _0x522a85} = await _0x573d6c[_0x172b9b(368)](graphql, _0x172b9b(369), {
            'headers': { 'accept': _0x172b9b(370) },
            'input': _0x5854f6
        });
    return _0x522a85[_0x172b9b(371)];
}
async function addLabelToPullRequest(_0x3fde1a, _0x1105d5) {
    const _0x10b8b1 = _0x1d7532, _0x3b5df5 = {
            'DAkAa': function (_0x12c242, _0x196073, _0x2dfdaa) {
                return _0x12c242(_0x196073, _0x2dfdaa);
            }
        };
    await _0x3b5df5[_0x10b8b1(372)](graphql, _0x10b8b1(373), {
        'headers': { 'accept': _0x10b8b1(367) },
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
    return _0x5515ed(374) + (_0x22d106['xqlgm'](_0x57d6c8[_0x5515ed(375)], 8578 + -6135 + -2433) ? _0x5515ed(376) : '') + _0x5515ed(377) + _0x57d6c8[_0x5515ed(375)] + _0x5515ed(378) + _0x57d6c8['map'](_0x2eab2c => _0x5515ed(379) + _0x2eab2c)[_0x5515ed(380)]('\n') + '\n</details>\n\nOnce all the commits have been fixed, mark this pull request as "Ready for review" and merge it in!\n\nSee all changes since the last sync here:\n\n' + _0x819b03 + _0x5515ed(381) + _0x7e4599 + _0x5515ed(382);
}
function syncPRBody() {
    return '\nSync all non-conflicting files with the source repo. This PR contains all updates that do not cause any conflicts and can be merged immediately.\n\nNOTE: Do *NOT* squash-merge this pull request. The sync script requires a ref to the source repo in order to work correctly.\n  ';
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
    logger = log4js[_0x349b9d(343)](_0x349b9d(383) + _0x23a766), logger[_0x349b9d(384)] = _0x349b9d(385);
    const _0x3fd240 = repoBase + '-' + _0x23a766, _0x3c0eef = host + '/' + owner + '/' + _0x3fd240;
    _0x5c8669[_0x349b9d(386)](shell['cd'](cacheDir)[_0x349b9d(387)], 5597 + 454 * -3 + 55 * -77) && (logger[_0x349b9d(388)](_0x349b9d(389) + cacheDir), shell['mkdir'](cacheDir), shell['cd'](cacheDir));
    _0x5c8669[_0x349b9d(390)](cloneOrUpdateRepo, _0x3fd240, _0x3c0eef), shell[_0x349b9d(356)]('git remote add source ' + sourceRepoGitUrl), shell[_0x349b9d(356)](_0x349b9d(391));
    const _0x31ff8c = await getRepository(owner, _0x3fd240);
    _0x31ff8c['syncPullRequests'][_0x349b9d(392)]['length'] > 6157 * 1 + 2845 + 1 * -9002 && (logger['info']('There are currently open sync pull requests. Please ask the language maintainers to merge the existing PR(s) in before opening another one. Exiting...'), process['exit'](-7200 + 33 * 161 + 1887));
    logger[_0x349b9d(385)](_0x349b9d(393));
    let _0x1147d0;
    !_0x31ff8c[_0x349b9d(394)] ? (logger[_0x349b9d(385)](_0x349b9d(395) + syncLabelName + _0x349b9d(396)), _0x1147d0 = await _0x5c8669[_0x349b9d(397)](createLabel, {
        'repositoryId': _0x31ff8c['id'],
        'name': syncLabelName,
        'description': _0x349b9d(398),
        'color': _0x349b9d(399)
    })) : (logger[_0x349b9d(385)](_0x349b9d(400) + syncLabelName + _0x349b9d(401)), _0x1147d0 = _0x31ff8c['syncLabel']);
    const _0x48ed28 = shell[_0x349b9d(356)](_0x349b9d(402), { 'silent': !![] })['stdout'][_0x349b9d(403)]('\n', ''), _0x53042c = _0x5c8669[_0x349b9d(404)](getShortHash, _0x48ed28), _0x4872ad = shell[_0x349b9d(356)]('git rev-parse source/master', { 'silent': !![] })[_0x349b9d(405)][_0x349b9d(403)]('\n', ''), _0x3a827f = _0x5c8669[_0x349b9d(406)](getShortHash, _0x4872ad);
    logger[_0x349b9d(385)](_0x349b9d(407));
    const _0xf90898 = _0x349b9d(408) + _0x3a827f;
    shell[_0x349b9d(356)](_0x349b9d(409) + _0xf90898, { 'silent': !![] })[_0x349b9d(387)] !== -19 * -387 + -9 * 456 + -9 * 361 && shell[_0x349b9d(356)](_0x349b9d(410) + _0xf90898);
    shell[_0x349b9d(356)](_0x349b9d(411), { 'silent': !![] }), shell[_0x349b9d(356)](_0x349b9d(412)), shell[_0x349b9d(356)](_0x349b9d(413)), shell['exec'](_0x349b9d(414) + _0xf90898), logger[_0x349b9d(385)](_0x349b9d(415));
    const _0x92faf2 = await _0x5c8669[_0x349b9d(416)](createPullRequest, {
        'repositoryId': _0x31ff8c['id'],
        'baseRefName': _0x349b9d(417),
        'headRefName': _0xf90898,
        'title': _0x349b9d(418) + sourceRepo + _0x349b9d(419) + _0x3a827f,
        'body': syncPRBody(),
        'maintainerCanModify': !![]
    });
    await addLabelToPullRequest(_0x92faf2, _0x1147d0), shell[_0x349b9d(356)](_0x349b9d(420));
    const _0x1c63b3 = sourceRepoUrl + _0x349b9d(421) + _0x53042c + '..' + _0x3a827f;
    logger['info'](_0x349b9d(422));
    const _0x28cbf5 = _0x349b9d(423) + _0x3a827f;
    _0x5c8669[_0x349b9d(386)](shell[_0x349b9d(356)](_0x349b9d(409) + _0x28cbf5, { 'silent': !![] })[_0x349b9d(387)], 9908 + 4619 + -14527) && shell['exec'](_0x349b9d(410) + _0x28cbf5);
    const _0x1acc4d = shell[_0x349b9d(356)]('git pull source master', { 'silent': !![] })[_0x349b9d(405)];
    _0x1acc4d[_0x349b9d(424)](_0x349b9d(425)) && (logger[_0x349b9d(385)](_0x349b9d(426)), process[_0x349b9d(362)](-6240 + 826 + 5414));
    const _0x30f150 = _0x1acc4d[_0x349b9d(427)]('\n'), _0x48cb31 = _0x30f150[_0x349b9d(428)](_0x5d0545 => _0x5d0545[_0x349b9d(429)](_0x349b9d(430)));
    _0x48cb31['length'] === 979 * 10 + 3516 + 2 * -6653 && (logger[_0x349b9d(385)](_0x349b9d(431)), process[_0x349b9d(362)](1 * 3024 + -5473 + 2449));
    const _0xf473c3 = _0x48cb31['map'](_0x5e9680 => _0x5e9680[_0x349b9d(354)](_0x5e9680['lastIndexOf'](' ') + (1 * -1871 + -4935 + 6807)));
    shell[_0x349b9d(356)](_0x349b9d(432), { 'silent': !![] }), shell[_0x349b9d(356)](_0x349b9d(433) + _0xf473c3[_0x349b9d(380)](' '));
    const _0x1d3270 = _0x30f150[_0x349b9d(428)](_0x165256 => _0x165256[_0x349b9d(429)]('CONFLICT (modify/delete)')), _0x5e731c = _0x1d3270['map'](_0x2adefe => _0x2adefe[_0x349b9d(403)](_0x349b9d(434), '')[_0x349b9d(427)](' ')[-528 + -433 + 961]);
    _0x5c8669['RTRbe'](_0x5e731c[_0x349b9d(375)], -3866 * 1 + -6512 + 10378) && shell[_0x349b9d(356)](_0x349b9d(435) + _0x5e731c['join'](' '), { 'silent': !![] });
    shell[_0x349b9d(356)]('git checkout -- .'), shell[_0x349b9d(356)]('git clean -fd', { 'silent': !![] }), shell[_0x349b9d(356)](_0x349b9d(436), { 'silent': !![] }), shell[_0x349b9d(356)](_0x349b9d(414) + _0x28cbf5), logger[_0x349b9d(385)](_0x349b9d(437));
    const _0x4321f1 = await _0x5c8669[_0x349b9d(438)](createPullRequest, {
        'repositoryId': _0x31ff8c['id'],
        'baseRefName': _0x349b9d(417),
        'headRefName': _0x28cbf5,
        'title': _0x349b9d(439) + sourceRepo + ' @ ' + _0x3a827f,
        'body': _0x5c8669[_0x349b9d(440)](conflictPRBody, _0xf473c3, _0x1c63b3, _0x92faf2[_0x349b9d(441)]),
        'maintainerCanModify': !![],
        'draft': !![]
    });
    await _0x5c8669['ESysz'](addLabelToPullRequest, _0x4321f1, _0x1147d0);
}
const [langCode] = process[_0x1d7532(442)][_0x1d7532(443)](5666 + -1 * 1361 + -13 * 331);
syncTranslationRepo(langCode);